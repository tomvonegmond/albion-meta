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
 "updated": "2026-09-14T18:30:45+00:00",
 "eventsSeen": 5665,
 "qualifying": 324,
 "duoFights": 70,
 "runs": 11,
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
   "Blight Staff": 1,
   "Greataxe": 1,
   "Bow of Badon": 1,
   "Battleaxe": 1,
   "Claymore": 1,
   "Holy Staff": 2,
   "Carrioncaller": 1
  },
  "Dagger Pair": {
   "Holy Staff": 15,
   "Dagger": 1,
   "Longbow": 1,
   "Carrioncaller": 1,
   "Claymore": 5,
   "Bear Paws": 2,
   "Battleaxe": 2,
   "Heavy Crossbow": 2,
   "Hallowfall": 1,
   "Dagger Pair": 4,
   "Rotcaller Staff": 1,
   "Hellspawn Staff": 1,
   "Blight Staff": 2,
   "Great Fire Staff": 2,
   "Bloodletter": 1,
   "Crossbow": 1,
   "Ironroot Staff": 1
  },
  "Demonic Staff": {
   "Blazing Staff": 1,
   "Claymore": 2,
   "Dagger": 1,
   "Holy Staff": 4,
   "Carrioncaller": 1,
   "Heavy Crossbow": 1,
   "Dagger Pair": 4
  },
  "Claymore": {
   "Dagger": 1,
   "Grailseeker": 1,
   "Bloodletter": 3,
   "Heavy Crossbow": 4,
   "Holy Staff": 11,
   "Divine Staff": 3,
   "Claymore": 5,
   "Great Holy Staff": 1,
   "Bow of Badon": 4,
   "Dagger Pair": 2,
   "Cursed Staff": 1,
   "Blight Staff": 1,
   "Demonic Staff": 2,
   "Battleaxe": 3,
   "Hellfire Hands": 2,
   "Greataxe": 1,
   "Tombhammer": 2,
   "Lifecurse Staff": 1,
   "Crossbow": 2
  },
  "Whispering Bow": {
   "Bow of Badon": 1,
   "Cursed Staff": 1,
   "Carrioncaller": 1,
   "Bloodletter": 1,
   "Warbow": 1,
   "Spirithunter": 1
  },
  "Arclight Blasters": {
   "Demonic Staff": 1,
   "Holy Staff": 3,
   "Hellspawn Staff": 1,
   "Bow of Badon": 3,
   "Energy Shaper": 1,
   "Carrioncaller": 1
  },
  "Greataxe": {
   "Mistpiercer": 1,
   "Battleaxe": 1,
   "Broadsword": 1,
   "Lifecurse Staff": 1,
   "Hallowfall": 1,
   "Bloodletter": 1,
   "Bow of Badon": 1,
   "Great Fire Staff": 1,
   "Blight Staff": 1,
   "Crystal Reaper": 1,
   "Spirithunter": 1,
   "Soulscythe": 1
  },
  "Forcepulse Bracers": {
   "Arclight Blasters": 1,
   "Holy Staff": 1
  },
  "Heavy Crossbow": {
   "Carrioncaller": 2,
   "Holy Staff": 8,
   "Grailseeker": 1,
   "Dagger": 1,
   "Bear Paws": 1,
   "Longbow": 1,
   "Greataxe": 2,
   "Heavy Crossbow": 2,
   "Dagger Pair": 1,
   "Warbow": 1,
   "Deathgivers": 1,
   "Claymore": 2,
   "Staff of Balance": 1,
   "Whispering Bow": 2
  },
  "Warbow": {
   "Battleaxe": 1,
   "Cursed Staff": 4,
   "Claymore": 1,
   "Longbow": 1,
   "Holy Staff": 1,
   "Lifecurse Staff": 2,
   "Twin Slayers": 1,
   "Hellfire Hands": 1,
   "Heavy Crossbow": 1,
   "Bow of Badon": 1
  },
  "Battleaxe": {
   "Dagger Pair": 2,
   "Cursed Staff": 2,
   "Pike": 1,
   "Battleaxe": 4,
   "Dagger": 1,
   "Greataxe": 1,
   "Warbow": 1,
   "Longbow": 1,
   "Bloodletter": 1,
   "Crossbow": 1,
   "Hellfire Hands": 1,
   "Bow of Badon": 2,
   "Permafrost Prism": 1,
   "Great Fire Staff": 1,
   "Blight Staff": 1
  },
  "Dawnsong": {
   "Holy Staff": 1
  },
  "Bow of Badon": {
   "Mistpiercer": 2,
   "Crossbow": 1,
   "Bow of Badon": 4,
   "Greataxe": 1,
   "Hellfire Hands": 2,
   "Whispering Bow": 2,
   "Holy Staff": 2,
   "Blazing Staff": 1,
   "Bear Paws": 1,
   "Twin Slayers": 1,
   "Staff of Balance": 1,
   "Glacial Staff": 1,
   "Warbow": 1,
   "Brawler Gloves": 2,
   "Crystal Reaper": 1,
   "Deathgivers": 1
  },
  "Broadsword": {
   "Cursed Staff": 1
  },
  "Bear Paws": {
   "Bow of Badon": 2,
   "Holy Staff": 5,
   "Broadsword": 1,
   "Claymore": 1,
   "Dagger Pair": 1,
   "Bloodletter": 1,
   "Hallowfall": 1,
   "Hellspawn Staff": 1,
   "Deathgivers": 1,
   "Mistpiercer": 1
  },
  "Mistpiercer": {
   "Arclight Blasters": 1,
   "Fists of Avalon": 1
  },
  "Holy Staff": {
   "Dagger": 1,
   "Battleaxe": 5,
   "Longbow": 2,
   "Mistpiercer": 3,
   "Claymore": 11,
   "Holy Staff": 43,
   "Heavy Crossbow": 8,
   "Bow of Badon": 12,
   "Bear Paws": 3,
   "Greataxe": 2,
   "Dagger Pair": 14,
   "Cursed Staff": 2,
   "Carrioncaller": 3,
   "Blazing Staff": 1,
   "Arclight Blasters": 1,
   "Carving Sword": 2,
   "Fists of Avalon": 1,
   "Demonic Staff": 2,
   "Hallowfall": 1,
   "Deathgivers": 1,
   "Warbow": 2,
   "Staff of Balance": 1,
   "Whispering Bow": 4,
   "Hellspawn Staff": 4,
   "Hellfire Hands": 2,
   "Energy Shaper": 1,
   "Brawler Gloves": 3,
   "Rotcaller Staff": 1,
   "Bloodletter": 3,
   "Crossbow": 3,
   "Wildfire Staff": 1,
   "Divine Staff": 2,
   "Tombhammer": 2,
   "Great Fire Staff": 3,
   "Blight Staff": 4,
   "Permafrost Prism": 1,
   "Lifecurse Staff": 2,
   "Spirithunter": 1,
   "Soulscythe": 1,
   "Ironroot Staff": 1
  },
  "Divine Staff": {
   "Grailseeker": 1,
   "Holy Staff": 2,
   "Heavy Crossbow": 1,
   "Bear Paws": 1,
   "Hallowfall": 1,
   "Dagger Pair": 1
  },
  "Dagger": {
   "Holy Staff": 7,
   "Heron Spear": 1,
   "Dagger Pair": 2,
   "Heavy Crossbow": 2,
   "Brawler Gloves": 2,
   "Bow of Badon": 1
  },
  "Grailseeker": {
   "Claymore": 1,
   "Blight Staff": 1,
   "Lifecurse Staff": 1,
   "Dagger Pair": 2,
   "Holy Staff": 5,
   "Heavy Crossbow": 2,
   "Brawler Gloves": 3,
   "Mistpiercer": 1,
   "Crystal Reaper": 1,
   "Bow of Badon": 2,
   "Greataxe": 1,
   "Cursed Staff": 1
  },
  "Cursed Staff": {
   "Battleaxe": 4,
   "Warbow": 2,
   "Cursed Staff": 1,
   "Longbow": 2,
   "Holy Staff": 3,
   "Lifecurse Staff": 2,
   "Dagger Pair": 2,
   "Brawler Gloves": 1,
   "Hellspawn Staff": 1,
   "Deathgivers": 1,
   "Whispering Bow": 1
  },
  "Brawler Gloves": {
   "Battleaxe": 1,
   "Holy Staff": 1,
   "Bloodletter": 1,
   "Crossbow": 1
  },
  "Carving Sword": {
   "Heron Spear": 1,
   "Bow of Badon": 1,
   "Holy Staff": 6,
   "Arclight Blasters": 1,
   "Carving Sword": 1,
   "Fists of Avalon": 1,
   "Whispering Bow": 1,
   "Blight Staff": 1
  },
  "Fists of Avalon": {
   "Heron Spear": 1,
   "Holy Staff": 1,
   "Bow of Badon": 1
  },
  "Energy Shaper": {
   "Bear Paws": 2
  },
  "Tombhammer": {
   "Bear Paws": 2,
   "Bloodletter": 1
  },
  "Hallowfall": {
   "Lifecurse Staff": 1,
   "Hallowfall": 1,
   "Hellfire Hands": 1,
   "Bow of Badon": 2,
   "Spirithunter": 1
  },
  "Wildfire Staff": {
   "Cursed Staff": 1,
   "Battleaxe": 1,
   "Claymore": 1
  },
  "Blight Staff": {
   "Cursed Staff": 1,
   "Longbow": 1
  },
  "Infernal Scythe": {
   "Hellfire Hands": 1,
   "Whispering Bow": 1,
   "Staff of Balance": 1,
   "Glacial Staff": 1,
   "Bow of Badon": 1,
   "Holy Staff": 1
  },
  "Crossbow": {
   "Dagger Pair": 1,
   "Dagger": 1,
   "Infernal Scythe": 1,
   "Great Holy Staff": 1,
   "Battleaxe": 1,
   "Hallowfall": 1,
   "Carrioncaller": 1,
   "Great Fire Staff": 1,
   "Blight Staff": 1
  },
  "Longbow": {
   "Pike": 1,
   "Holy Staff": 1,
   "Battleaxe": 1,
   "Cursed Staff": 1,
   "Great Fire Staff": 1
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
   "Infernal Scythe": 1,
   "Great Holy Staff": 1,
   "Cursed Staff": 1,
   "Lifecurse Staff": 1,
   "Hallowfall": 1,
   "Carrioncaller": 1,
   "Great Fire Staff": 1,
   "Blight Staff": 1
  },
  "Prowling Staff": {
   "Bow of Badon": 1,
   "Wildfire Staff": 1,
   "Holy Staff": 1
  },
  "Redemption Staff": {
   "Deathgivers": 1,
   "Bow of Badon": 1
  },
  "Crystal Reaper": {
   "Bloodletter": 1
  },
  "Hellspawn Staff": {
   "Holy Staff": 3,
   "Cursed Staff": 1,
   "Claymore": 1,
   "Dagger Pair": 1,
   "Divine Staff": 1,
   "Heavy Crossbow": 1,
   "Carving Sword": 1
  },
  "Soulscythe": {
   "Whispering Bow": 1,
   "Bear Paws": 1,
   "Claymore": 1
  },
  "Rotcaller Staff": {
   "Hellspawn Staff": 1,
   "Holy Staff": 1
  },
  "Spirithunter": {
   "Bear Paws": 1,
   "Claymore": 1
  },
  "Blazing Staff": {
   "Mistpiercer": 1,
   "Brawler Gloves": 1,
   "Crystal Reaper": 1,
   "Bow of Badon": 1,
   "Greataxe": 1,
   "Cursed Staff": 1
  },
  "Hellfire Hands": {
   "Blight Staff": 1
  }
 },
 "duos": {
  "Energy Shaper + Tombhammer": {
   "Bear Paws + Bear Paws": 1
  },
  "Claymore + Holy Staff": {
   "Claymore + Holy Staff": 3,
   "Heavy Crossbow + Holy Staff": 3,
   "Dagger Pair + Holy Staff": 1,
   "Demonic Staff + Holy Staff": 2,
   "Hellfire Hands + Tombhammer": 2,
   "Bow of Badon + Lifecurse Staff": 1,
   "Bloodletter + Crossbow": 1
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
   "Bear Paws + Holy Staff": 1,
   "Heavy Crossbow + Holy Staff": 1,
   "Holy Staff + Rotcaller Staff": 1,
   "Dagger Pair + Dagger Pair": 1,
   "Hellspawn Staff + Holy Staff": 1,
   "Blight Staff + Great Fire Staff": 2,
   "Dagger Pair + Holy Staff": 1,
   "Claymore + Ironroot Staff": 1
  },
  "Bow of Badon + Holy Staff": {
   "Bear Paws + Blazing Staff": 1,
   "Brawler Gloves + Mistpiercer": 1
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
  },
  "Dagger + Grailseeker": {
   "Heavy Crossbow + Holy Staff": 2,
   "Bow of Badon + Brawler Gloves": 1,
   "Dagger Pair + Holy Staff": 1
  },
  "Arclight Blasters + Holy Staff": {
   "Bow of Badon + Bow of Badon": 1,
   "Carrioncaller + Holy Staff": 1
  },
  "Hellspawn Staff + Holy Staff": {
   "Cursed Staff + Holy Staff": 1,
   "Claymore + Holy Staff": 1,
   "Dagger Pair + Divine Staff": 1,
   "Heavy Crossbow + Holy Staff": 1
  },
  "Holy Staff + Rotcaller Staff": {
   "Hellspawn Staff + Holy Staff": 1
  },
  "Battleaxe + Holy Staff": {
   "Bloodletter + Crossbow": 1,
   "Bow of Badon + Permafrost Prism": 1
  },
  "Cursed Staff + Holy Staff": {
   "Dagger Pair + Holy Staff": 1,
   "Hellspawn Staff + Holy Staff": 1,
   "Lifecurse Staff + Whispering Bow": 1
  },
  "Bloodletter + Crossbow": {
   "Carrioncaller + Hallowfall": 1,
   "Blight Staff + Great Fire Staff": 1
  },
  "Greataxe + Holy Staff": {
   "Blight Staff + Great Fire Staff": 1,
   "Soulscythe + Spirithunter": 1
  },
  "Soulscythe + Spirithunter": {
   "Bear Paws + Claymore": 1
  },
  "Blazing Staff + Grailseeker": {
   "Brawler Gloves + Mistpiercer": 1,
   "Bow of Badon + Crystal Reaper": 1
  },
  "Demonic Staff + Holy Staff": {
   "Dagger Pair + Dagger Pair": 1
  },
  "Brawler Gloves + Dagger Pair": {
   "Bloodletter + Crossbow": 1
  },
  "Deathgivers + Holy Staff": {
   "Claymore + Holy Staff": 1,
   "Carrioncaller + Holy Staff": 1
  }
 }
};
