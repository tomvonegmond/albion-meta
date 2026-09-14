#!/usr/bin/env python3
"""
Albion Meta - pull the combat balance changes out of each live patch.

The forum and albiononline.com both sit behind Cloudflare and refuse anything
automated, so neither can be read on a schedule. Steam's news API carries the
same posts and is open, so that is the source.

Only posts titled "Changelog:" are taken. Those go up when a patch goes live.
Announcements, dev talks and the NDA playtest threads are not changelogs, so
nothing that has merely been announced can appear here.

From each changelog only the "Combat Balance Changes" section is kept, parsed
into the weapon groups it is already written in.

    python3 collect-patchnotes.py

Writes patchnotes.js, which the patch notes page renders.
"""
import html as htmllib
import json, re, subprocess, sys, time
from datetime import datetime, timezone
from pathlib import Path

HERE   = Path(__file__).resolve().parent
APPID  = 761890                      # Albion Online on Steam
NEWS   = f"https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid={APPID}&count=50&maxlength=0"
KEEP   = 12                          # how many patches to show


def fetch(url, tries=4):
    for attempt in range(tries):
        try:
            out = subprocess.run(["curl", "-sS", "-m", "30", url],
                                 capture_output=True, text=True, timeout=45)
            if out.returncode == 0 and out.stdout.lstrip().startswith("{"):
                return json.loads(out.stdout)
        except Exception:
            pass
        time.sleep(2)
    return None


def clean(text):
    """bbcode and entities out, whitespace tidied"""
    text = re.sub(r"\[/?[^\]]+\]", "", text)
    text = htmllib.unescape(text)
    return re.sub(r"[ \t ]+", " ", text).strip()


def combat_section(raw):
    """the Combat Balance Changes heading through to the next heading"""
    m = re.search(r"\[h\d\]\s*Combat Balance Changes\s*\[/h\d\]", raw, re.I)
    if not m:
        return None
    rest = raw[m.end():]
    nxt = re.search(r"\[h\d\]", rest)
    return rest[:nxt.start()] if nxt else rest


def top_level_items(body):
    """
    Split a bbcode list into its outermost [*] items, keeping any nested list
    inside the item it belongs to. Counting depth is the only way: the tags
    are not indented and [*] is used at every level.
    """
    start = body.find("[list]")
    if start < 0:
        return []
    depth, i, items, current = 0, start, [], None
    token = re.compile(r"\[list\]|\[/list\]|\[\*\]")
    while i < len(body):
        m = token.search(body, i)
        if not m:
            break
        tag = m.group(0)
        if tag == "[list]":
            depth += 1
            if depth > 1 and current is not None:
                current["raw"] += body[i:m.start()]
        elif tag == "[/list]":
            if depth == 1 and current is not None:
                current["raw"] += body[i:m.start()]
                items.append(current)
                current = None
            elif current is not None:
                current["raw"] += body[i:m.start()]
            depth -= 1
            if depth == 0:
                break
        else:                                   # [*]
            if depth == 1:
                if current is not None:
                    items.append(current)
                current = {"raw": ""}
            elif current is not None:
                current["raw"] += body[i:m.start()] + "\n[*]"
        i = m.end()
    if current is not None:
        items.append(current)
    return items


def parse_groups(section):
    """
    The section reads as [b]Weapon group[/b], an italic quote saying why, then
    a list of abilities each with its own changes underneath. Keep that shape
    rather than flattening it.
    """
    groups = []
    parts = re.split(r"\[b\](.*?)\[/b\]", section)
    for i in range(1, len(parts) - 1, 2):
        name, body = clean(parts[i]), parts[i + 1]
        why = ""
        q = re.search(r"\[quote\](.*?)\[/quote\]", body, re.S)
        if q:
            why = clean(q.group(1))

        entries = []
        for item in top_level_items(body):
            raw = item["raw"]
            head, _, rest = raw.partition("\n[*]")
            head = clean(head)
            subs = [clean(x) for x in rest.split("\n[*]")] if rest else []
            subs = [x for x in subs if x]
            if not head:
                continue
            entries.append({"what": head, "changes": subs})

        if name and entries:
            groups.append({"name": name, "why": why, "entries": entries})
    return groups


def main():
    data = fetch(NEWS)
    if not data:
        print("could not reach the Steam news API")
        return 1

    patches = []
    for item in data.get("appnews", {}).get("newsitems", []):
        if not item["title"].lower().startswith("changelog"):
            continue                      # live patches only, never an announcement
        section = combat_section(item["contents"])
        if not section:
            continue                      # a patch with no combat changes at all
        groups = parse_groups(section)
        if not groups:
            continue
        patches.append({
            "title": item["title"].split(":", 1)[-1].strip(),
            "date": datetime.fromtimestamp(item["date"], timezone.utc).strftime("%d %B %Y"),
            "stamp": item["date"],
            "url": item["url"],
            "groups": groups,
        })

    patches.sort(key=lambda p: p["stamp"], reverse=True)
    patches = patches[:KEEP]

    header = """/* ===========================================================
   Albion Meta - combat balance changes, patch by patch
   -----------------------------------------------------------
   Written by collect-patchnotes.py, do not edit by hand.

   Only the "Combat Balance Changes" section of each live
   changelog is kept. The source is Steam's news API, because
   the Albion forum and website both refuse automated requests.
   A post only appears there once the patch is live, so nothing
   that has only been announced or playtested shows up here.
   =========================================================== */

window.ALBION_PATCHES = """

    (HERE / "patchnotes.js").write_text(
        header + json.dumps({"updated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
                             "patches": patches}, indent=1, ensure_ascii=False) + ";\n")

    print(f"{len(patches)} patches with combat changes")
    for p in patches:
        print(f"   {p['date']:<20} {p['title']:<28} {len(p['groups'])} groups, "
              f"{sum(len(g['entries']) for g in p['groups'])} entries")
    return 0


if __name__ == "__main__":
    sys.exit(main())
