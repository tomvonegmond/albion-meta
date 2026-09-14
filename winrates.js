/* ===========================================================
   Albion Meta - kills counted from the Albion API
   -----------------------------------------------------------
   Written by collect-winrates.py, do not edit by hand.

   "kills" counts how often the first weapon beat the second in
   a fight that looked like a 2v2: one assist, both players
   under 1350 item power, both on a weapon this site lists.

   "duos" is the same fights read as a whole: a pair beating a
   pair, worked out by waiting for both of the losing side to
   die in the same battle. That is the only way to know which
   dps died next to a healer, the event itself never says.

   The API cannot say a kill happened in a hellgate, so this is
   the shape of the fight, not a hellgate flag. Run the script
   often, it only ever sees the last half hour of kills.
   =========================================================== */

window.ALBION_WINRATES = {
 "updated": "2026-09-14T17:53:59+00:00",
 "eventsSeen": 3503,
 "qualifying": 177,
 "duoFights": 26,
 "runs": 7,
 "kills": {
  "Carrioncaller": {
   "Dagger": 1,
   "Holy Staff": 2,
   "Grailseeker": 1,
   "Blight Staff": 1
  },
  "Deathgivers": {
   "Warbow": 1,
   "Dagger Pair": 1,
   "Cursed Staff": 1,
   "Blight Staff": 1
  },
  "Dagger Pair": {
   "Holy Staff": 7,
   "Dagger": 1,
   "Longbow": 1,
   "Carrioncaller": 1,
   "Claymore": 1,
   "Bear Paws": 2,
   "Battleaxe": 2,
   "Heavy Crossbow": 1,
   "Hallowfall": 1
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
   "Heavy Crossbow": 3,
   "Holy Staff": 7,
   "Divine Staff": 2,
   "Claymore": 2,
   "Great Holy Staff": 1,
   "Bow of Badon": 1,
   "Dagger Pair": 1,
   "Cursed Staff": 1,
   "Blight Staff": 1,
   "Demonic Staff": 1,
   "Battleaxe": 1
  },
  "Whispering Bow": {
   "Bow of Badon": 1,
   "Cursed Staff": 1,
   "Carrioncaller": 1,
   "Bloodletter": 1
  },
  "Arclight Blasters": {
   "Demonic Staff": 1,
   "Holy Staff": 2,
   "Hellspawn Staff": 1
  },
  "Greataxe": {
   "Mistpiercer": 1,
   "Battleaxe": 1,
   "Broadsword": 1,
   "Lifecurse Staff": 1,
   "Hallowfall": 1,
   "Bloodletter": 1
  },
  "Forcepulse Bracers": {
   "Arclight Blasters": 1,
   "Holy Staff": 1
  },
  "Heavy Crossbow": {
   "Carrioncaller": 2,
   "Holy Staff": 7,
   "Grailseeker": 1,
   "Dagger": 1,
   "Bear Paws": 1,
   "Longbow": 1,
   "Greataxe": 2,
   "Heavy Crossbow": 2,
   "Dagger Pair": 1,
   "Warbow": 1,
   "Deathgivers": 1,
   "Claymore": 1,
   "Staff of Balance": 1,
   "Whispering Bow": 1
  },
  "Warbow": {
   "Battleaxe": 1,
   "Cursed Staff": 3,
   "Claymore": 1,
   "Longbow": 1,
   "Holy Staff": 1,
   "Lifecurse Staff": 1,
   "Twin Slayers": 1,
   "Hellfire Hands": 1,
   "Heavy Crossbow": 1
  },
  "Battleaxe": {
   "Dagger Pair": 2,
   "Cursed Staff": 1,
   "Pike": 1,
   "Battleaxe": 4,
   "Dagger": 1,
   "Greataxe": 1
  },
  "Dawnsong": {
   "Holy Staff": 1
  },
  "Bow of Badon": {
   "Mistpiercer": 1,
   "Crossbow": 1,
   "Bow of Badon": 2,
   "Greataxe": 1,
   "Hellfire Hands": 2,
   "Whispering Bow": 2,
   "Holy Staff": 1,
   "Blazing Staff": 1,
   "Bear Paws": 1,
   "Twin Slayers": 1,
   "Staff of Balance": 1,
   "Glacial Staff": 1,
   "Warbow": 1
  },
  "Broadsword": {
   "Cursed Staff": 1
  },
  "Bear Paws": {
   "Bow of Badon": 2,
   "Holy Staff": 4,
   "Broadsword": 1,
   "Claymore": 1,
   "Dagger Pair": 1,
   "Bloodletter": 1,
   "Hallowfall": 1,
   "Hellspawn Staff": 1
  },
  "Mistpiercer": {
   "Arclight Blasters": 1,
   "Fists of Avalon": 1
  },
  "Holy Staff": {
   "Dagger": 1,
   "Battleaxe": 4,
   "Longbow": 2,
   "Mistpiercer": 1,
   "Claymore": 4,
   "Holy Staff": 20,
   "Heavy Crossbow": 5,
   "Bow of Badon": 5,
   "Bear Paws": 3,
   "Greataxe": 2,
   "Dagger Pair": 3,
   "Cursed Staff": 1,
   "Carrioncaller": 1,
   "Blazing Staff": 1,
   "Arclight Blasters": 1,
   "Carving Sword": 1,
   "Fists of Avalon": 1,
   "Demonic Staff": 1,
   "Hallowfall": 1,
   "Deathgivers": 1,
   "Warbow": 1,
   "Staff of Balance": 1,
   "Whispering Bow": 2,
   "Hellspawn Staff": 1
  },
  "Divine Staff": {
   "Grailseeker": 1,
   "Holy Staff": 2,
   "Heavy Crossbow": 1,
   "Bear Paws": 1,
   "Hallowfall": 1
  },
  "Dagger": {
   "Holy Staff": 4,
   "Heron Spear": 1,
   "Dagger Pair": 1
  },
  "Grailseeker": {
   "Claymore": 1,
   "Blight Staff": 1,
   "Lifecurse Staff": 1,
   "Dagger Pair": 1,
   "Holy Staff": 2
  },
  "Cursed Staff": {
   "Battleaxe": 4,
   "Warbow": 1,
   "Cursed Staff": 1,
   "Longbow": 2,
   "Holy Staff": 1,
   "Lifecurse Staff": 1
  },
  "Brawler Gloves": {
   "Battleaxe": 1,
   "Holy Staff": 1
  },
  "Carving Sword": {
   "Heron Spear": 1,
   "Bow of Badon": 1,
   "Holy Staff": 6,
   "Arclight Blasters": 1,
   "Carving Sword": 1,
   "Fists of Avalon": 1
  },
  "Fists of Avalon": {
   "Heron Spear": 1,
   "Holy Staff": 1
  },
  "Energy Shaper": {
   "Bear Paws": 2
  },
  "Tombhammer": {
   "Bear Paws": 2
  },
  "Hallowfall": {
   "Lifecurse Staff": 1,
   "Hallowfall": 1
  },
  "Wildfire Staff": {
   "Cursed Staff": 1,
   "Battleaxe": 1
  },
  "Blight Staff": {
   "Cursed Staff": 1
  },
  "Infernal Scythe": {
   "Hellfire Hands": 1,
   "Whispering Bow": 1,
   "Staff of Balance": 1,
   "Glacial Staff": 1,
   "Bow of Badon": 1
  },
  "Crossbow": {
   "Dagger Pair": 1,
   "Dagger": 1,
   "Infernal Scythe": 1
  },
  "Longbow": {
   "Pike": 1,
   "Holy Staff": 1
  },
  "Great Holy Staff": {
   "Greataxe": 1
  },
  "Pike": {
   "Bloodletter": 1,
   "Greataxe": 1,
   "Holy Staff": 1
  },
  "Heron Spear": {
   "Lifecurse Staff": 1
  },
  "Kingmaker": {
   "Warbow": 1,
   "Bow of Badon": 1
  },
  "Bloodletter": {
   "Infernal Scythe": 1
  },
  "Prowling Staff": {
   "Bow of Badon": 1
  }
 },
 "duos": {
  "Energy Shaper + Tombhammer": {
   "Bear Paws + Bear Paws": 1
  },
  "Claymore + Holy Staff": {
   "Claymore + Holy Staff": 1,
   "Heavy Crossbow + Holy Staff": 2,
   "Dagger Pair + Holy Staff": 1,
   "Demonic Staff + Holy Staff": 1
  },
  "Greataxe + Hallowfall": {
   "Hallowfall + Lifecurse Staff": 1
  },
  "Heavy Crossbow + Holy Staff": {
   "Bear Paws + Longbow": 1,
   "Heavy Crossbow + Holy Staff": 1,
   "Deathgivers + Holy Staff": 1,
   "Staff of Balance + Whispering Bow": 1
  },
  "Cursed Staff + Warbow": {
   "Cursed Staff + Longbow": 1
  },
  "Carving Sword + Holy Staff": {
   "Bow of Badon + Holy Staff": 1,
   "Carving Sword + Holy Staff": 1,
   "Arclight Blasters + Holy Staff": 1
  },
  "Dagger Pair + Holy Staff": {
   "Carrioncaller + Holy Staff": 1,
   "Claymore + Holy Staff": 1,
   "Bear Paws + Holy Staff": 1
  },
  "Bow of Badon + Holy Staff": {
   "Bear Paws + Blazing Staff": 1
  },
  "Bow of Badon + Warbow": {
   "Hellfire Hands + Twin Slayers": 1
  },
  "Bear Paws + Holy Staff": {
   "Claymore + Holy Staff": 1,
   "Bow of Badon + Holy Staff": 1
  },
  "Bow of Badon + Infernal Scythe": {
   "Glacial Staff + Staff of Balance": 1
  },
  "Dagger Pair + Divine Staff": {
   "Heavy Crossbow + Holy Staff": 1,
   "Bear Paws + Holy Staff": 1
  },
  "Holy Staff + Kingmaker": {
   "Bow of Badon + Warbow": 1
  }
 }
};
