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

   All three Albion worlds are read, Americas, Europe and Asia,
   and counted together. "regions" is only there to show how
   much each one contributed.

   The API cannot say a kill happened in a hellgate, so this is
   the shape of the fight, not a hellgate flag. Run the script
   often, it only ever sees the last half hour of kills.
   =========================================================== */

window.ALBION_WINRATES = {
 "updated": "2026-09-14T19:09:03+00:00",
 "eventsSeen": 12564,
 "qualifying": 705,
 "duoFights": 153,
 "runs": 14,
 "regions": {
  "americas": {
   "events": 7706,
   "kills": 455,
   "lastSeen": "2026-09-14T19:03:11.850659500Z"
  },
  "europe": {
   "events": 2700,
   "kills": 153,
   "lastSeen": "2026-09-14T19:03:21.399272Z"
  },
  "asia": {
   "events": 2158,
   "kills": 97,
   "lastSeen": "2026-09-14T19:03:08.829047600Z"
  }
 },
 "kills": {
  "Carrioncaller": {
   "Dagger": 1,
   "Holy Staff": 3,
   "Grailseeker": 1,
   "Blight Staff": 1,
   "Bloodletter": 2,
   "Crossbow": 2,
   "Brawler Gloves": 2,
   "Whispering Bow": 1,
   "Great Holy Staff": 1,
   "Carving Sword": 1,
   "Ursine Maulers": 1,
   "Infernal Scythe": 1
  },
  "Deathgivers": {
   "Warbow": 2,
   "Dagger Pair": 1,
   "Cursed Staff": 2,
   "Blight Staff": 1,
   "Greataxe": 1,
   "Bow of Badon": 2,
   "Battleaxe": 2,
   "Claymore": 1,
   "Holy Staff": 3,
   "Carrioncaller": 1,
   "Brawler Gloves": 1,
   "Whispering Bow": 1,
   "Great Fire Staff": 1,
   "Broadsword": 1,
   "Bear Paws": 1,
   "Crossbow": 1
  },
  "Dagger Pair": {
   "Holy Staff": 21,
   "Dagger": 1,
   "Longbow": 1,
   "Carrioncaller": 2,
   "Claymore": 6,
   "Bear Paws": 2,
   "Battleaxe": 4,
   "Heavy Crossbow": 3,
   "Hallowfall": 1,
   "Dagger Pair": 4,
   "Rotcaller Staff": 1,
   "Hellspawn Staff": 1,
   "Blight Staff": 2,
   "Great Fire Staff": 2,
   "Bloodletter": 1,
   "Crossbow": 1,
   "Ironroot Staff": 1,
   "Deathgivers": 1,
   "Greataxe": 1,
   "Realmbreaker": 1,
   "Bow of Badon": 1,
   "Wildfire Staff": 1,
   "Infernal Scythe": 1,
   "Energy Shaper": 1,
   "Redemption Staff": 1,
   "Great Holy Staff": 1
  },
  "Demonic Staff": {
   "Blazing Staff": 1,
   "Claymore": 5,
   "Dagger": 1,
   "Holy Staff": 15,
   "Carrioncaller": 1,
   "Heavy Crossbow": 5,
   "Dagger Pair": 5,
   "Glacial Staff": 1,
   "Great Holy Staff": 1,
   "Prowling Staff": 1,
   "Warbow": 1,
   "Battleaxe": 1,
   "Brawler Gloves": 1,
   "Longbow": 1,
   "Soulscythe": 1,
   "Great Fire Staff": 1,
   "Greataxe": 1
  },
  "Claymore": {
   "Dagger": 1,
   "Grailseeker": 1,
   "Bloodletter": 3,
   "Heavy Crossbow": 7,
   "Holy Staff": 23,
   "Divine Staff": 3,
   "Claymore": 6,
   "Great Holy Staff": 1,
   "Bow of Badon": 4,
   "Dagger Pair": 5,
   "Cursed Staff": 2,
   "Blight Staff": 1,
   "Demonic Staff": 3,
   "Battleaxe": 3,
   "Hellfire Hands": 3,
   "Greataxe": 1,
   "Tombhammer": 2,
   "Lifecurse Staff": 1,
   "Crossbow": 6,
   "Whispering Bow": 1,
   "Daybreaker": 1,
   "Wildfire Staff": 2,
   "Forcepulse Bracers": 1,
   "Bedrock Mace": 1,
   "Brawler Gloves": 3,
   "Longbow": 3,
   "Warbow": 1,
   "Deathgivers": 1,
   "Hellspawn Staff": 1,
   "Crystal Reaper": 1
  },
  "Whispering Bow": {
   "Bow of Badon": 1,
   "Cursed Staff": 1,
   "Carrioncaller": 1,
   "Bloodletter": 2,
   "Warbow": 1,
   "Spirithunter": 1,
   "Claymore": 1,
   "Holy Staff": 1,
   "Crossbow": 1,
   "Mistpiercer": 1,
   "Lifecurse Staff": 2,
   "Longbow": 2,
   "Crystal Reaper": 1
  },
  "Arclight Blasters": {
   "Demonic Staff": 2,
   "Holy Staff": 5,
   "Hellspawn Staff": 1,
   "Bow of Badon": 5,
   "Energy Shaper": 2,
   "Carrioncaller": 1,
   "Wildfire Staff": 1,
   "Claymore": 3,
   "Arclight Blasters": 2,
   "Great Holy Staff": 2,
   "Heavy Crossbow": 2,
   "Longbow": 1,
   "Realmbreaker": 1,
   "Battleaxe": 1,
   "Greataxe": 1,
   "Ironroot Staff": 1
  },
  "Greataxe": {
   "Mistpiercer": 1,
   "Battleaxe": 2,
   "Broadsword": 1,
   "Lifecurse Staff": 1,
   "Hallowfall": 1,
   "Bloodletter": 2,
   "Bow of Badon": 1,
   "Great Fire Staff": 1,
   "Blight Staff": 1,
   "Crystal Reaper": 1,
   "Spirithunter": 1,
   "Soulscythe": 1,
   "Hellspawn Staff": 1,
   "Holy Staff": 1,
   "Cursed Staff": 2,
   "Pike": 1,
   "Realmbreaker": 1,
   "Deathgivers": 1
  },
  "Forcepulse Bracers": {
   "Arclight Blasters": 1,
   "Holy Staff": 1,
   "Crystal Reaper": 2
  },
  "Heavy Crossbow": {
   "Carrioncaller": 3,
   "Holy Staff": 24,
   "Grailseeker": 1,
   "Dagger": 1,
   "Bear Paws": 3,
   "Longbow": 2,
   "Greataxe": 4,
   "Heavy Crossbow": 4,
   "Dagger Pair": 2,
   "Warbow": 2,
   "Deathgivers": 3,
   "Claymore": 6,
   "Staff of Balance": 1,
   "Whispering Bow": 4,
   "Fists of Avalon": 1,
   "Broadsword": 1,
   "Cursed Staff": 1,
   "Hellspawn Staff": 2,
   "Brawler Gloves": 1,
   "Great Fire Staff": 1,
   "Pike": 2,
   "Kingmaker": 1,
   "Hallowfall": 1,
   "Great Holy Staff": 2,
   "Carving Sword": 1,
   "Energy Shaper": 1,
   "Hellfire Hands": 1,
   "Tombhammer": 1
  },
  "Warbow": {
   "Battleaxe": 1,
   "Cursed Staff": 5,
   "Claymore": 1,
   "Longbow": 1,
   "Holy Staff": 2,
   "Lifecurse Staff": 2,
   "Twin Slayers": 1,
   "Hellfire Hands": 2,
   "Heavy Crossbow": 1,
   "Bow of Badon": 3,
   "Bear Paws": 2,
   "Dawnsong": 1,
   "Mistpiercer": 2,
   "Warbow": 1,
   "Broadsword": 2,
   "Grailseeker": 1
  },
  "Battleaxe": {
   "Dagger Pair": 4,
   "Cursed Staff": 3,
   "Pike": 1,
   "Battleaxe": 7,
   "Dagger": 1,
   "Greataxe": 2,
   "Warbow": 3,
   "Longbow": 3,
   "Bloodletter": 2,
   "Crossbow": 2,
   "Hellfire Hands": 1,
   "Bow of Badon": 2,
   "Permafrost Prism": 1,
   "Great Fire Staff": 3,
   "Blight Staff": 1,
   "Bear Paws": 1,
   "Mistpiercer": 1,
   "Wildfire Staff": 2,
   "Ursine Maulers": 1,
   "Realmbreaker": 1,
   "Tombhammer": 1,
   "Holy Staff": 3,
   "Ironroot Staff": 1,
   "Heron Spear": 1,
   "Carving Sword": 1,
   "Crystal Reaper": 1,
   "Claymore": 1,
   "Heavy Crossbow": 1
  },
  "Dawnsong": {
   "Holy Staff": 1
  },
  "Bow of Badon": {
   "Mistpiercer": 2,
   "Crossbow": 1,
   "Bow of Badon": 6,
   "Greataxe": 1,
   "Hellfire Hands": 3,
   "Whispering Bow": 2,
   "Holy Staff": 4,
   "Blazing Staff": 1,
   "Bear Paws": 2,
   "Twin Slayers": 1,
   "Staff of Balance": 1,
   "Glacial Staff": 1,
   "Warbow": 3,
   "Brawler Gloves": 2,
   "Crystal Reaper": 1,
   "Deathgivers": 1,
   "Pike": 1,
   "Demonic Staff": 1,
   "Longbow": 1,
   "Battleaxe": 2,
   "Dagger Pair": 1,
   "Forcepulse Bracers": 1,
   "Broadsword": 1,
   "Tombhammer": 1,
   "Blight Staff": 1
  },
  "Broadsword": {
   "Cursed Staff": 2,
   "Fists of Avalon": 1,
   "Holy Staff": 2,
   "Battleaxe": 1,
   "Greataxe": 1,
   "Blight Staff": 1
  },
  "Bear Paws": {
   "Bow of Badon": 3,
   "Holy Staff": 7,
   "Broadsword": 1,
   "Claymore": 1,
   "Dagger Pair": 3,
   "Bloodletter": 3,
   "Hallowfall": 1,
   "Hellspawn Staff": 2,
   "Deathgivers": 1,
   "Mistpiercer": 1,
   "Heavy Crossbow": 1,
   "Crossbow": 1,
   "Hellfire Hands": 1,
   "Great Fire Staff": 1,
   "Longbow": 1,
   "Fists of Avalon": 1,
   "Ironroot Staff": 1,
   "Battleaxe": 2,
   "Bear Paws": 1,
   "Heron Spear": 1
  },
  "Mistpiercer": {
   "Arclight Blasters": 2,
   "Fists of Avalon": 1,
   "Bedrock Mace": 1,
   "Longbow": 1
  },
  "Holy Staff": {
   "Dagger": 1,
   "Battleaxe": 9,
   "Longbow": 8,
   "Mistpiercer": 6,
   "Claymore": 25,
   "Holy Staff": 105,
   "Heavy Crossbow": 22,
   "Bow of Badon": 19,
   "Bear Paws": 4,
   "Greataxe": 4,
   "Dagger Pair": 24,
   "Cursed Staff": 7,
   "Carrioncaller": 5,
   "Blazing Staff": 2,
   "Arclight Blasters": 3,
   "Carving Sword": 3,
   "Fists of Avalon": 3,
   "Demonic Staff": 5,
   "Hallowfall": 4,
   "Deathgivers": 3,
   "Warbow": 7,
   "Staff of Balance": 1,
   "Whispering Bow": 6,
   "Hellspawn Staff": 14,
   "Hellfire Hands": 5,
   "Energy Shaper": 2,
   "Brawler Gloves": 12,
   "Rotcaller Staff": 1,
   "Bloodletter": 7,
   "Crossbow": 9,
   "Wildfire Staff": 3,
   "Divine Staff": 2,
   "Tombhammer": 5,
   "Great Fire Staff": 3,
   "Blight Staff": 6,
   "Permafrost Prism": 1,
   "Lifecurse Staff": 2,
   "Spirithunter": 3,
   "Soulscythe": 4,
   "Ironroot Staff": 3,
   "Broadsword": 1,
   "Glacial Staff": 1,
   "Daybreaker": 1,
   "Great Holy Staff": 3,
   "Ursine Maulers": 2,
   "Forcepulse Bracers": 1,
   "Realmbreaker": 1,
   "Kingmaker": 1,
   "Twin Slayers": 1,
   "Crystal Reaper": 2,
   "Redemption Staff": 1
  },
  "Divine Staff": {
   "Grailseeker": 1,
   "Holy Staff": 3,
   "Heavy Crossbow": 1,
   "Bear Paws": 1,
   "Hallowfall": 1,
   "Dagger Pair": 1,
   "Blight Staff": 1
  },
  "Dagger": {
   "Holy Staff": 8,
   "Heron Spear": 1,
   "Dagger Pair": 3,
   "Heavy Crossbow": 2,
   "Brawler Gloves": 2,
   "Bow of Badon": 1,
   "Claymore": 1,
   "Fists of Avalon": 1,
   "Hallowfall": 1,
   "Staff of Balance": 1,
   "Cursed Staff": 1,
   "Prowling Staff": 1,
   "Battleaxe": 1
  },
  "Grailseeker": {
   "Claymore": 2,
   "Blight Staff": 1,
   "Lifecurse Staff": 1,
   "Dagger Pair": 3,
   "Holy Staff": 5,
   "Heavy Crossbow": 2,
   "Brawler Gloves": 3,
   "Mistpiercer": 1,
   "Crystal Reaper": 1,
   "Bow of Badon": 2,
   "Greataxe": 1,
   "Cursed Staff": 1,
   "Warbow": 1,
   "Battleaxe": 1,
   "Infernal Scythe": 1,
   "Blazing Staff": 1,
   "Heron Spear": 1,
   "Great Holy Staff": 1
  },
  "Cursed Staff": {
   "Battleaxe": 4,
   "Warbow": 3,
   "Cursed Staff": 1,
   "Longbow": 3,
   "Holy Staff": 4,
   "Lifecurse Staff": 2,
   "Dagger Pair": 3,
   "Brawler Gloves": 1,
   "Hellspawn Staff": 1,
   "Deathgivers": 1,
   "Whispering Bow": 1,
   "Claymore": 1,
   "Wildfire Staff": 1,
   "Hellfire Hands": 2,
   "Dawnsong": 1,
   "Fists of Avalon": 1,
   "Heavy Crossbow": 2
  },
  "Brawler Gloves": {
   "Battleaxe": 2,
   "Holy Staff": 6,
   "Bloodletter": 3,
   "Crossbow": 2,
   "Claymore": 1,
   "Heavy Crossbow": 1,
   "Mistpiercer": 1,
   "Prowling Staff": 1,
   "Carving Sword": 2,
   "Hellspawn Staff": 1,
   "Demonic Staff": 1,
   "Longbow": 1,
   "Cursed Staff": 2,
   "Hallowfall": 1,
   "Grailseeker": 1,
   "Bow of Badon": 1
  },
  "Carving Sword": {
   "Heron Spear": 1,
   "Bow of Badon": 2,
   "Holy Staff": 8,
   "Arclight Blasters": 1,
   "Carving Sword": 1,
   "Fists of Avalon": 1,
   "Whispering Bow": 1,
   "Blight Staff": 2,
   "Claymore": 1,
   "Tombhammer": 1,
   "Battleaxe": 1,
   "Ursine Maulers": 1,
   "Twin Slayers": 1,
   "Bloodletter": 2,
   "Crossbow": 2
  },
  "Fists of Avalon": {
   "Heron Spear": 1,
   "Holy Staff": 4,
   "Bow of Badon": 1,
   "Whispering Bow": 1,
   "Warbow": 1,
   "Longbow": 1,
   "Twin Slayers": 1,
   "Hallowfall": 1,
   "Arclight Blasters": 1,
   "Hellfire Hands": 1,
   "Claymore": 2
  },
  "Energy Shaper": {
   "Bear Paws": 2,
   "Warbow": 1
  },
  "Tombhammer": {
   "Bear Paws": 2,
   "Bloodletter": 1,
   "Bow of Badon": 2,
   "Holy Staff": 5,
   "Bedrock Mace": 1,
   "Hellfire Hands": 1,
   "Great Holy Staff": 1,
   "Fists of Avalon": 1
  },
  "Hallowfall": {
   "Lifecurse Staff": 1,
   "Hallowfall": 1,
   "Hellfire Hands": 1,
   "Bow of Badon": 2,
   "Spirithunter": 1,
   "Blazing Staff": 1,
   "Tombhammer": 1,
   "Battleaxe": 1,
   "Ursine Maulers": 1,
   "Bedrock Mace": 1,
   "Holy Staff": 1
  },
  "Wildfire Staff": {
   "Cursed Staff": 1,
   "Battleaxe": 2,
   "Claymore": 1,
   "Heavy Crossbow": 3,
   "Dagger Pair": 1,
   "Longbow": 1,
   "Holy Staff": 1
  },
  "Blight Staff": {
   "Cursed Staff": 2,
   "Longbow": 1,
   "Twin Slayers": 1,
   "Blazing Staff": 1
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
   "Dagger Pair": 2,
   "Dagger": 1,
   "Infernal Scythe": 1,
   "Great Holy Staff": 1,
   "Battleaxe": 1,
   "Hallowfall": 1,
   "Carrioncaller": 1,
   "Great Fire Staff": 1,
   "Blight Staff": 1,
   "Brawler Gloves": 1,
   "Bear Paws": 1,
   "Cursed Staff": 1,
   "Glaive": 1
  },
  "Longbow": {
   "Pike": 1,
   "Holy Staff": 1,
   "Battleaxe": 3,
   "Cursed Staff": 1,
   "Great Fire Staff": 1,
   "Bloodletter": 2,
   "Heavy Crossbow": 1,
   "Crossbow": 1,
   "Dawnsong": 2,
   "Warbow": 1,
   "Bear Paws": 1,
   "Forcepulse Bracers": 1,
   "Longbow": 2
  },
  "Great Holy Staff": {
   "Greataxe": 1,
   "Battleaxe": 1,
   "Hellfire Hands": 1,
   "Bloodletter": 2,
   "Crossbow": 2,
   "Holy Staff": 1
  },
  "Pike": {
   "Bloodletter": 1,
   "Greataxe": 1,
   "Holy Staff": 1
  },
  "Heron Spear": {
   "Lifecurse Staff": 1,
   "Twin Slayers": 1,
   "Warbow": 1,
   "Dagger Pair": 1,
   "Bear Paws": 1,
   "Longbow": 1,
   "Holy Staff": 1
  },
  "Kingmaker": {
   "Warbow": 1,
   "Bow of Badon": 1,
   "Holy Staff": 1,
   "Claymore": 1
  },
  "Bloodletter": {
   "Infernal Scythe": 1,
   "Great Holy Staff": 1,
   "Cursed Staff": 1,
   "Lifecurse Staff": 1,
   "Hallowfall": 1,
   "Carrioncaller": 1,
   "Great Fire Staff": 1,
   "Blight Staff": 1,
   "Holy Staff": 1,
   "Prowling Staff": 1,
   "Brawler Gloves": 1,
   "Wildfire Staff": 1,
   "Bloodletter": 1,
   "Battleaxe": 2,
   "Great Arcane Staff": 1,
   "Glaive": 1
  },
  "Prowling Staff": {
   "Bow of Badon": 3,
   "Wildfire Staff": 1,
   "Holy Staff": 3,
   "Hellspawn Staff": 1,
   "Brawler Gloves": 2,
   "Blazing Staff": 1,
   "Tombhammer": 1
  },
  "Redemption Staff": {
   "Deathgivers": 1,
   "Bow of Badon": 1,
   "Forcepulse Bracers": 1
  },
  "Crystal Reaper": {
   "Bloodletter": 1,
   "Mistpiercer": 2,
   "Battleaxe": 1,
   "Holy Staff": 1,
   "Warbow": 2,
   "Crystal Reaper": 1,
   "Hallowfall": 1
  },
  "Hellspawn Staff": {
   "Holy Staff": 9,
   "Cursed Staff": 2,
   "Claymore": 1,
   "Dagger Pair": 4,
   "Divine Staff": 1,
   "Heavy Crossbow": 2,
   "Carving Sword": 1,
   "Hellspawn Staff": 4,
   "Soulscythe": 2,
   "Spirithunter": 2,
   "Demonic Staff": 1,
   "Blazing Staff": 1,
   "Warbow": 1,
   "Great Holy Staff": 1,
   "Twin Slayers": 1,
   "Bow of Badon": 1,
   "Tombhammer": 1
  },
  "Soulscythe": {
   "Whispering Bow": 1,
   "Bear Paws": 1,
   "Claymore": 1,
   "Holy Staff": 1,
   "Battleaxe": 1,
   "Heavy Crossbow": 1
  },
  "Rotcaller Staff": {
   "Hellspawn Staff": 1,
   "Holy Staff": 1,
   "Blight Staff": 1
  },
  "Spirithunter": {
   "Bear Paws": 1,
   "Claymore": 1,
   "Holy Staff": 1,
   "Battleaxe": 1
  },
  "Blazing Staff": {
   "Mistpiercer": 1,
   "Brawler Gloves": 1,
   "Crystal Reaper": 1,
   "Bow of Badon": 1,
   "Greataxe": 1,
   "Cursed Staff": 2,
   "Battleaxe": 1,
   "Infernal Scythe": 1,
   "Blazing Staff": 1,
   "Heron Spear": 1
  },
  "Hellfire Hands": {
   "Blight Staff": 1,
   "Realmbreaker": 1,
   "Holy Staff": 6,
   "Forcepulse Bracers": 1,
   "Heavy Crossbow": 1,
   "Warbow": 2,
   "Fists of Avalon": 1
  },
  "Ironroot Staff": {
   "Dagger Pair": 2,
   "Holy Staff": 4,
   "Great Holy Staff": 1,
   "Prowling Staff": 1,
   "Heavy Crossbow": 2,
   "Claymore": 1,
   "Warbow": 1,
   "Brawler Gloves": 1,
   "Bow of Badon": 1,
   "Greataxe": 1,
   "Blight Staff": 1,
   "Deathgivers": 1
  },
  "Great Fire Staff": {
   "Battleaxe": 1,
   "Dagger Pair": 1
  },
  "Realmbreaker": {
   "Bow of Badon": 2,
   "Ironroot Staff": 1
  },
  "Permafrost Prism": {
   "Hellfire Hands": 1
  },
  "Staff of Balance": {
   "Fists of Avalon": 1,
   "Holy Staff": 2,
   "Claymore": 1,
   "Bloodletter": 1,
   "Staff of Balance": 1,
   "Prowling Staff": 1
  },
  "Glacial Staff": {
   "Bloodletter": 1
  },
  "Twin Slayers": {
   "Hellspawn Staff": 1
  },
  "Grovekeeper": {
   "Great Arcane Staff": 1
  },
  "Hoarfrost Staff": {
   "Blazing Staff": 1
  }
 },
 "duos": {
  "Energy Shaper + Tombhammer": {
   "Bear Paws + Bear Paws": 1
  },
  "Claymore + Holy Staff": {
   "Claymore + Holy Staff": 3,
   "Heavy Crossbow + Holy Staff": 5,
   "Dagger Pair + Holy Staff": 2,
   "Demonic Staff + Holy Staff": 3,
   "Hellfire Hands + Tombhammer": 2,
   "Bow of Badon + Lifecurse Staff": 1,
   "Bloodletter + Crossbow": 1,
   "Holy Staff + Wildfire Staff": 1,
   "Cursed Staff + Holy Staff": 1,
   "Crossbow + Crossbow": 1,
   "Brawler Gloves + Longbow": 1,
   "Brawler Gloves + Crossbow": 1
  },
  "Greataxe + Hallowfall": {
   "Hallowfall + Lifecurse Staff": 1
  },
  "Heavy Crossbow + Holy Staff": {
   "Bear Paws + Longbow": 1,
   "Heavy Crossbow + Holy Staff": 1,
   "Deathgivers + Holy Staff": 1,
   "Staff of Balance + Whispering Bow": 1,
   "Claymore + Holy Staff": 2,
   "Hellspawn Staff + Holy Staff": 1,
   "Hallowfall + Kingmaker": 1,
   "Carrioncaller + Holy Staff": 1
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
   "Carrioncaller + Holy Staff": 2,
   "Claymore + Holy Staff": 1,
   "Bear Paws + Holy Staff": 1,
   "Heavy Crossbow + Holy Staff": 1,
   "Holy Staff + Rotcaller Staff": 1,
   "Dagger Pair + Dagger Pair": 1,
   "Hellspawn Staff + Holy Staff": 1,
   "Blight Staff + Great Fire Staff": 2,
   "Dagger Pair + Holy Staff": 1,
   "Claymore + Ironroot Staff": 1,
   "Deathgivers + Holy Staff": 1,
   "Greataxe + Holy Staff": 1
  },
  "Bow of Badon + Holy Staff": {
   "Bear Paws + Blazing Staff": 1,
   "Brawler Gloves + Mistpiercer": 1,
   "Bow of Badon + Dagger Pair": 1,
   "Holy Staff + Holy Staff": 1
  },
  "Bow of Badon + Warbow": {
   "Hellfire Hands + Twin Slayers": 1
  },
  "Bear Paws + Holy Staff": {
   "Claymore + Holy Staff": 1,
   "Bow of Badon + Holy Staff": 1,
   "Hellspawn Staff + Ironroot Staff": 1
  },
  "Bow of Badon + Infernal Scythe": {
   "Glacial Staff + Staff of Balance": 1
  },
  "Dagger Pair + Divine Staff": {
   "Heavy Crossbow + Holy Staff": 1,
   "Bear Paws + Holy Staff": 1
  },
  "Holy Staff + Kingmaker": {
   "Bow of Badon + Warbow": 1,
   "Claymore + Holy Staff": 1
  },
  "Dagger + Grailseeker": {
   "Heavy Crossbow + Holy Staff": 2,
   "Bow of Badon + Brawler Gloves": 1,
   "Dagger Pair + Holy Staff": 1
  },
  "Arclight Blasters + Holy Staff": {
   "Bow of Badon + Bow of Badon": 1,
   "Carrioncaller + Holy Staff": 1,
   "Claymore + Holy Staff": 1,
   "Claymore + Great Holy Staff": 2,
   "Longbow + Realmbreaker": 1,
   "Battleaxe + Bow of Badon": 1,
   "Arclight Blasters + Ironroot Staff": 1,
   "Demonic Staff + Holy Staff": 1
  },
  "Hellspawn Staff + Holy Staff": {
   "Cursed Staff + Holy Staff": 2,
   "Claymore + Holy Staff": 1,
   "Dagger Pair + Divine Staff": 1,
   "Heavy Crossbow + Holy Staff": 1,
   "Hellspawn Staff + Holy Staff": 2,
   "Demonic Staff + Holy Staff": 1,
   "Dagger Pair + Holy Staff": 1,
   "Dagger Pair + Soulscythe": 1,
   "Great Holy Staff + Hellspawn Staff": 1
  },
  "Holy Staff + Rotcaller Staff": {
   "Hellspawn Staff + Holy Staff": 1
  },
  "Battleaxe + Holy Staff": {
   "Bloodletter + Crossbow": 1,
   "Bow of Badon + Permafrost Prism": 1,
   "Longbow + Longbow": 1,
   "Dagger Pair + Mistpiercer": 1,
   "Carving Sword + Holy Staff": 1
  },
  "Cursed Staff + Holy Staff": {
   "Dagger Pair + Holy Staff": 1,
   "Hellspawn Staff + Holy Staff": 1,
   "Lifecurse Staff + Whispering Bow": 1,
   "Fists of Avalon + Heavy Crossbow": 1,
   "Heavy Crossbow + Warbow": 1
  },
  "Bloodletter + Crossbow": {
   "Carrioncaller + Hallowfall": 1,
   "Blight Staff + Great Fire Staff": 1
  },
  "Greataxe + Holy Staff": {
   "Blight Staff + Great Fire Staff": 1,
   "Soulscythe + Spirithunter": 1,
   "Hellspawn Staff + Holy Staff": 1,
   "Battleaxe + Bloodletter": 1
  },
  "Soulscythe + Spirithunter": {
   "Bear Paws + Claymore": 1,
   "Battleaxe + Holy Staff": 1
  },
  "Blazing Staff + Grailseeker": {
   "Brawler Gloves + Mistpiercer": 1,
   "Bow of Badon + Crystal Reaper": 1
  },
  "Demonic Staff + Holy Staff": {
   "Dagger Pair + Dagger Pair": 1,
   "Claymore + Holy Staff": 2,
   "Heavy Crossbow + Holy Staff": 1,
   "Battleaxe + Holy Staff": 1,
   "Brawler Gloves + Holy Staff": 1,
   "Holy Staff + Longbow": 1
  },
  "Brawler Gloves + Dagger Pair": {
   "Bloodletter + Crossbow": 1
  },
  "Deathgivers + Holy Staff": {
   "Claymore + Holy Staff": 1,
   "Carrioncaller + Holy Staff": 1,
   "Brawler Gloves + Whispering Bow": 1
  },
  "Claymore + Ironroot Staff": {
   "Dagger Pair + Holy Staff": 2,
   "Brawler Gloves + Warbow": 1,
   "Deathgivers + Holy Staff": 1
  },
  "Brawler Gloves + Whispering Bow": {
   "Claymore + Holy Staff": 1,
   "Bloodletter + Crossbow": 1
  },
  "Carrioncaller + Holy Staff": {
   "Bloodletter + Crossbow": 2
  },
  "Realmbreaker + Tombhammer": {
   "Bow of Badon + Bow of Badon": 1
  },
  "Bloodletter + Brawler Gloves": {
   "Holy Staff + Prowling Staff": 1
  },
  "Holy Staff + Prowling Staff": {
   "Brawler Gloves + Brawler Gloves": 1,
   "Bow of Badon + Holy Staff": 1
  },
  "Brawler Gloves + Brawler Gloves": {
   "Carving Sword + Holy Staff": 1
  },
  "Crystal Reaper + Holy Staff": {
   "Mistpiercer + Mistpiercer": 1,
   "Battleaxe + Holy Staff": 1,
   "Warbow + Warbow": 1
  },
  "Demonic Staff + Ironroot Staff": {
   "Great Holy Staff + Prowling Staff": 1
  },
  "Bow of Badon + Brawler Gloves": {
   "Demonic Staff + Longbow": 1
  },
  "Brawler Gloves + Warbow": {
   "Cursed Staff + Holy Staff": 1
  },
  "Dagger + Staff of Balance": {
   "Fists of Avalon + Holy Staff": 1
  },
  "Carving Sword + Hallowfall": {
   "Battleaxe + Ursine Maulers": 1
  },
  "Warbow + Warbow": {
   "Bow of Badon + Mistpiercer": 1
  },
  "Dagger Pair + Ironroot Staff": {
   "Claymore + Holy Staff": 1
  },
  "Brawler Gloves + Dagger": {
   "Cursed Staff + Hallowfall": 1
  },
  "Holy Staff + Wildfire Staff": {
   "Heavy Crossbow + Heavy Crossbow": 1
  },
  "Heavy Crossbow + Heavy Crossbow": {
   "Deathgivers + Holy Staff": 1
  },
  "Hellfire Hands + Holy Staff": {
   "Heavy Crossbow + Holy Staff": 1,
   "Warbow + Warbow": 1
  },
  "Broadsword + Ironroot Staff": {
   "Blight Staff + Greataxe": 1
  },
  "Fists of Avalon + Holy Staff": {
   "Claymore + Holy Staff": 2
  },
  "Hellfire Hands + Tombhammer": {
   "Fists of Avalon + Holy Staff": 1
  },
  "Battleaxe + Demonic Staff": {
   "Great Fire Staff + Greataxe": 1
  }
 }
};
