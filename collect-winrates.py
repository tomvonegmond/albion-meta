#!/usr/bin/env python3
"""
Albion Meta - count real kills between the weapons on this site.

The Albion API has no hellgate endpoint and its kill feed does not say where a
kill happened, so a 2v2 is picked out by the shape of the fight instead:

    the kill has exactly one assist, so two players were involved
    both players are under 1350 item power
    both are holding a weapon that appears on this site

Run it as often as you like. The API only keeps about the last half hour of
kills, so the more often it runs the more it collects. Nothing is thrown away
between runs, the counts in kills.json keep adding up.

    python3 collect-winrates.py

It writes kills.json, the running tally, and winrates.js, which the site reads.
"""
import json, re, subprocess, sys, time
from datetime import datetime, timezone
from pathlib import Path

HERE      = Path(__file__).resolve().parent
API       = "https://gameinfo.albiononline.com/api/gameinfo/events"
OFFSETS   = range(0, 1001, 50)      # as far back as the API will page
IP_CAP    = 1350
KEEP_IDS  = 40000                   # how many event ids to remember, to avoid double counting


def fetch(offset, tries=3):
    for attempt in range(tries):
        try:
            out = subprocess.run(
                ["curl", "-sS", "-m", "20", f"{API}?limit=51&offset={offset}"],
                capture_output=True, text=True, timeout=30)
            if out.returncode == 0 and out.stdout.strip().startswith("["):
                return json.loads(out.stdout)
        except Exception:
            pass
        time.sleep(1.5)
    return []


def weapon_line(item_id):
    """T6_2H_CLEAVER_HELL@4 -> 2H_CLEAVER_HELL, so tier and enchant do not matter"""
    if not item_id:
        return None
    return re.sub(r"^T\d+_", "", item_id.split("@")[0])


def site_weapons():
    raw = (HERE / "builds.js").read_text().split("window.ALBION_BUILDS = ", 1)[1]
    builds = json.loads(raw.rstrip().rstrip(";"))
    names = {}
    for b in builds.values():
        names[weapon_line(b["weapon"]["id"])] = b["weapon"]["name"]
    return names


def main():
    weapons = site_weapons()
    store_path = HERE / "kills.json"
    store = json.loads(store_path.read_text()) if store_path.exists() else {
        "kills": {}, "seenIds": [], "eventsSeen": 0, "qualifying": 0, "runs": 0}
    seen = set(store["seenIds"])

    fresh = counted = 0
    for offset in OFFSETS:
        for e in fetch(offset):
            eid = e.get("EventId")
            if eid is None or eid in seen:
                continue
            seen.add(eid)
            fresh += 1

            if e.get("numberOfParticipants") != 2:
                continue
            killer, victim = e.get("Killer") or {}, e.get("Victim") or {}
            if (killer.get("AverageItemPower") or 0) >= IP_CAP: continue
            if (victim.get("AverageItemPower") or 0) >= IP_CAP: continue

            kw = weapon_line(((killer.get("Equipment") or {}).get("MainHand") or {}).get("Type"))
            vw = weapon_line(((victim.get("Equipment") or {}).get("MainHand") or {}).get("Type"))
            if kw not in weapons or vw not in weapons:
                continue

            a, b = weapons[kw], weapons[vw]
            store["kills"].setdefault(a, {})
            store["kills"][a][b] = store["kills"][a].get(b, 0) + 1
            counted += 1

    store["eventsSeen"] += fresh
    store["qualifying"] += counted
    store["runs"] += 1
    store["updated"] = datetime.now(timezone.utc).isoformat(timespec="seconds")
    store["seenIds"] = list(seen)[-KEEP_IDS:]
    store_path.write_text(json.dumps(store, indent=1))

    header = """/* ===========================================================
   Albion Meta - kills counted from the Albion API
   -----------------------------------------------------------
   Written by collect-winrates.py, do not edit by hand.

   "kills" counts how often the first weapon killed the second
   in a fight that looked like a 2v2: one assist, both players
   under %d item power, both on a weapon this site lists.
   The site turns a pair of those counts into a win rate.

   The API cannot say a kill happened in a hellgate, so this is
   the shape of the fight, not a hellgate flag. Run the script
   often, it only ever sees the last half hour of kills.
   =========================================================== */

window.ALBION_WINRATES = """ % IP_CAP

    (HERE / "winrates.js").write_text(header + json.dumps({
        "updated": store["updated"],
        "eventsSeen": store["eventsSeen"],
        "qualifying": store["qualifying"],
        "runs": store["runs"],
        "kills": store["kills"],
    }, indent=1, ensure_ascii=False) + ";\n")

    print(f"new events {fresh}, counted {counted}")
    print(f"running totals: {store['eventsSeen']} events seen, "
          f"{store['qualifying']} kills counted over {store['runs']} runs")
    return 0


if __name__ == "__main__":
    sys.exit(main())
