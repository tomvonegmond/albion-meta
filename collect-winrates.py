#!/usr/bin/env python3
"""
Albion Meta - count real kills between the weapons on this site.

The Albion API has no hellgate endpoint and its kill feed does not say where a
kill happened, so a 2v2 is picked out by the shape of the fight instead:

    the kill has exactly one assist, so two players were involved
    both players are under 1350 item power
    both are holding a weapon that appears on this site

A 2v2 is won by a duo, not a player, so kills are grouped by BattleId. When
both of the losing pair die in the same battle the whole fight is known, and
that is recorded as one duo beating another. GroupMembers is no use for this,
it lists the killer's own party, never the victim's partner.

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
KEEP_IDS  = 40000
PENDING_HOURS = 3        # how long to wait for a battle's second death                   # how many event ids to remember, to avoid double counting


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
    store = json.loads(store_path.read_text()) if store_path.exists() else {}
    store.setdefault("kills", {})      # weapon against weapon
    store.setdefault("duos", {})       # "A + B" against "C + D"
    store.setdefault("pending", {})    # battles still missing their second death
    store.setdefault("seenIds", [])
    for k in ("eventsSeen", "qualifying", "duoFights", "runs"):
        store.setdefault(k, 0)
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

            winners = [weapon_line(((p.get("Equipment") or {}).get("MainHand") or {}).get("Type"))
                       for p in (e.get("Participants") or [])]
            vw = weapon_line(((victim.get("Equipment") or {}).get("MainHand") or {}).get("Type"))
            if vw not in weapons or any(w not in weapons for w in winners) or len(winners) != 2:
                continue

            # weapon against weapon, every winner over the one who died
            for w in winners:
                store["kills"].setdefault(weapons[w], {})
                store["kills"][weapons[w]][weapons[vw]] = \
                    store["kills"][weapons[w]].get(weapons[vw], 0) + 1
            counted += 1

            # hold the battle open until the second of the pair dies
            battle = str(e.get("BattleId"))
            slot = store["pending"].setdefault(battle, {"won": sorted(weapons[w] for w in winners),
                                                        "lost": [], "at": e.get("TimeStamp", "")})
            if len(slot["lost"]) < 2:
                slot["lost"].append(weapons[vw])

    # any battle with both deaths in is a finished 2v2
    done = 0
    for battle, slot in list(store["pending"].items()):
        if len(slot["lost"]) >= 2:
            won  = " + ".join(slot["won"])
            lost = " + ".join(sorted(slot["lost"][:2]))
            store["duos"].setdefault(won, {})
            store["duos"][won][lost] = store["duos"][won].get(lost, 0) + 1
            done += 1
            del store["pending"][battle]
    store["duoFights"] += done

    # forget battles whose second death never arrived
    cutoff = time.time() - PENDING_HOURS * 3600
    for battle, slot in list(store["pending"].items()):
        try:
            ts = datetime.fromisoformat(slot["at"].replace("Z", "+00:00")).timestamp()
        except Exception:
            ts = 0
        if ts < cutoff:
            del store["pending"][battle]

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

   "kills" counts how often the first weapon beat the second in
   a fight that looked like a 2v2: one assist, both players
   under %d item power, both on a weapon this site lists.

   "duos" is the same fights read as a whole: a pair beating a
   pair, worked out by waiting for both of the losing side to
   die in the same battle. That is the only way to know which
   dps died next to a healer, the event itself never says.

   The API cannot say a kill happened in a hellgate, so this is
   the shape of the fight, not a hellgate flag. Run the script
   often, it only ever sees the last half hour of kills.
   =========================================================== */

window.ALBION_WINRATES = """ % IP_CAP

    (HERE / "winrates.js").write_text(header + json.dumps({
        "updated": store["updated"],
        "eventsSeen": store["eventsSeen"],
        "qualifying": store["qualifying"],
        "duoFights": store["duoFights"],
        "runs": store["runs"],
        "kills": store["kills"],
        "duos": store["duos"],
    }, indent=1, ensure_ascii=False) + ";\n")

    print(f"new events {fresh}, counted {counted}, duo fights closed {done}")
    print(f"running totals: {store['eventsSeen']} events seen, "
          f"{store['qualifying']} kills and {store['duoFights']} duo fights "
          f"over {store['runs']} runs, {len(store['pending'])} battles still open")
    return 0


if __name__ == "__main__":
    sys.exit(main())
