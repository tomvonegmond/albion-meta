/* ===========================================================
   Albion Meta - kills counted from the Albion API
   -----------------------------------------------------------
   Written by collect-winrates.py, do not edit by hand.

   "kills" counts how often the first weapon killed the second
   in a fight that looked like a 2v2: one assist, both players
   under 1350 item power, both on a weapon this site lists.
   The site turns a pair of those counts into a win rate.

   The API cannot say a kill happened in a hellgate, so this is
   the shape of the fight, not a hellgate flag. Run the script
   often, it only ever sees the last half hour of kills.
   =========================================================== */

window.ALBION_WINRATES = {
 "updated": "2026-09-14T16:01:11+00:00",
 "eventsSeen": 1273,
 "qualifying": 70,
 "runs": 3,
 "kills": {
  "Carrioncaller": {
   "Dagger": 1,
   "Holy Staff": 2,
   "Grailseeker": 1
  },
  "Deathgivers": {
   "Warbow": 1,
   "Dagger Pair": 1
  },
  "Dagger Pair": {
   "Holy Staff": 1,
   "Dagger": 1
  },
  "Demonic Staff": {
   "Blazing Staff": 1,
   "Claymore": 2,
   "Dagger": 1,
   "Holy Staff": 3,
   "Carrioncaller": 1,
   "Heavy Crossbow": 1
  },
  "Claymore": {
   "Dagger": 1,
   "Grailseeker": 1,
   "Bloodletter": 1,
   "Heavy Crossbow": 1,
   "Holy Staff": 2,
   "Divine Staff": 2,
   "Claymore": 1,
   "Great Holy Staff": 1
  },
  "Whispering Bow": {
   "Bow of Badon": 1,
   "Cursed Staff": 1,
   "Carrioncaller": 1
  },
  "Arclight Blasters": {
   "Demonic Staff": 1,
   "Holy Staff": 2,
   "Hellspawn Staff": 1
  },
  "Greataxe": {
   "Mistpiercer": 1,
   "Battleaxe": 1
  },
  "Forcepulse Bracers": {
   "Arclight Blasters": 1,
   "Holy Staff": 1
  },
  "Heavy Crossbow": {
   "Carrioncaller": 2,
   "Holy Staff": 2,
   "Grailseeker": 1,
   "Dagger": 1
  },
  "Warbow": {
   "Battleaxe": 1,
   "Cursed Staff": 2,
   "Claymore": 1
  },
  "Battleaxe": {
   "Dagger Pair": 1,
   "Cursed Staff": 1
  },
  "Dawnsong": {
   "Holy Staff": 1
  },
  "Bow of Badon": {
   "Mistpiercer": 1,
   "Crossbow": 1,
   "Bow of Badon": 1
  },
  "Broadsword": {
   "Cursed Staff": 1
  },
  "Bear Paws": {
   "Bow of Badon": 1,
   "Holy Staff": 1
  },
  "Mistpiercer": {
   "Arclight Blasters": 1,
   "Fists of Avalon": 1
  },
  "Holy Staff": {
   "Dagger": 1,
   "Battleaxe": 1,
   "Longbow": 1,
   "Mistpiercer": 1
  },
  "Divine Staff": {
   "Grailseeker": 1
  },
  "Dagger": {
   "Holy Staff": 1,
   "Heron Spear": 1
  },
  "Grailseeker": {
   "Claymore": 1
  },
  "Cursed Staff": {
   "Battleaxe": 1,
   "Warbow": 1
  },
  "Brawler Gloves": {
   "Battleaxe": 1
  }
 }
};
