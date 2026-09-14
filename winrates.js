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
 "updated": "2026-09-14T20:09:18+00:00",
 "eventsSeen": 18305,
 "qualifying": 1091,
 "duoFights": 265,
 "runs": 18,
 "regions": {
  "americas": {
   "events": 9772,
   "kills": 601,
   "lastSeen": "2026-09-14T20:03:14.716425800Z"
  },
  "europe": {
   "events": 5393,
   "kills": 332,
   "lastSeen": "2026-09-14T20:03:10.108204100Z"
  },
  "asia": {
   "events": 3140,
   "kills": 158,
   "lastSeen": "2026-09-14T20:02:53.606658Z"
  }
 },
 "kills": {
  "Carrioncaller": {
   "Dagger": 1,
   "Holy Staff": 11,
   "Grailseeker": 1,
   "Blight Staff": 1,
   "Bloodletter": 3,
   "Crossbow": 2,
   "Brawler Gloves": 2,
   "Whispering Bow": 1,
   "Great Holy Staff": 1,
   "Carving Sword": 1,
   "Ursine Maulers": 1,
   "Infernal Scythe": 1,
   "Cursed Staff": 1,
   "Heavy Crossbow": 2,
   "Bear Paws": 1,
   "Dagger Pair": 2,
   "Claymore": 2,
   "Carrioncaller": 1,
   "Longbow": 1,
   "Demonic Staff": 1
  },
  "Deathgivers": {
   "Warbow": 2,
   "Dagger Pair": 1,
   "Cursed Staff": 2,
   "Blight Staff": 1,
   "Greataxe": 2,
   "Bow of Badon": 2,
   "Battleaxe": 2,
   "Claymore": 2,
   "Holy Staff": 5,
   "Carrioncaller": 1,
   "Brawler Gloves": 2,
   "Whispering Bow": 1,
   "Great Fire Staff": 1,
   "Broadsword": 1,
   "Bear Paws": 1,
   "Crossbow": 1,
   "Hellspawn Staff": 1,
   "Staff of Balance": 1,
   "Blazing Staff": 1,
   "Dagger": 1,
   "Carving Sword": 1
  },
  "Dagger Pair": {
   "Holy Staff": 25,
   "Dagger": 1,
   "Longbow": 2,
   "Carrioncaller": 3,
   "Claymore": 7,
   "Bear Paws": 2,
   "Battleaxe": 5,
   "Heavy Crossbow": 3,
   "Hallowfall": 1,
   "Dagger Pair": 4,
   "Rotcaller Staff": 1,
   "Hellspawn Staff": 1,
   "Blight Staff": 3,
   "Great Fire Staff": 2,
   "Bloodletter": 1,
   "Crossbow": 1,
   "Ironroot Staff": 1,
   "Deathgivers": 2,
   "Greataxe": 1,
   "Realmbreaker": 1,
   "Bow of Badon": 3,
   "Wildfire Staff": 1,
   "Infernal Scythe": 1,
   "Energy Shaper": 1,
   "Redemption Staff": 1,
   "Great Holy Staff": 1,
   "Lifecurse Staff": 1,
   "Carving Sword": 1,
   "Staff of Balance": 1,
   "Glacial Staff": 1,
   "Demonic Staff": 1
  },
  "Demonic Staff": {
   "Blazing Staff": 1,
   "Claymore": 5,
   "Dagger": 1,
   "Holy Staff": 20,
   "Carrioncaller": 1,
   "Heavy Crossbow": 5,
   "Dagger Pair": 7,
   "Glacial Staff": 1,
   "Great Holy Staff": 1,
   "Prowling Staff": 1,
   "Warbow": 1,
   "Battleaxe": 1,
   "Brawler Gloves": 3,
   "Longbow": 2,
   "Soulscythe": 1,
   "Great Fire Staff": 1,
   "Greataxe": 1,
   "Broadsword": 1,
   "Deathgivers": 1
  },
  "Claymore": {
   "Dagger": 1,
   "Grailseeker": 1,
   "Bloodletter": 3,
   "Heavy Crossbow": 15,
   "Holy Staff": 44,
   "Divine Staff": 3,
   "Claymore": 10,
   "Great Holy Staff": 2,
   "Bow of Badon": 4,
   "Dagger Pair": 10,
   "Cursed Staff": 4,
   "Blight Staff": 2,
   "Demonic Staff": 5,
   "Battleaxe": 6,
   "Hellfire Hands": 5,
   "Greataxe": 2,
   "Tombhammer": 2,
   "Lifecurse Staff": 2,
   "Crossbow": 6,
   "Whispering Bow": 1,
   "Daybreaker": 1,
   "Wildfire Staff": 2,
   "Forcepulse Bracers": 1,
   "Bedrock Mace": 1,
   "Brawler Gloves": 7,
   "Longbow": 4,
   "Warbow": 3,
   "Deathgivers": 1,
   "Hellspawn Staff": 3,
   "Crystal Reaper": 1,
   "Carving Sword": 1,
   "Ironroot Staff": 2,
   "Carrioncaller": 2,
   "Hallowfall": 1,
   "Fists of Avalon": 1,
   "Staff of Balance": 2,
   "Glacial Staff": 2,
   "Soulscythe": 1
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
   "Crystal Reaper": 1,
   "Infernal Scythe": 1,
   "Broadsword": 1
  },
  "Arclight Blasters": {
   "Demonic Staff": 2,
   "Holy Staff": 9,
   "Hellspawn Staff": 1,
   "Bow of Badon": 8,
   "Energy Shaper": 2,
   "Carrioncaller": 1,
   "Wildfire Staff": 2,
   "Claymore": 6,
   "Arclight Blasters": 2,
   "Great Holy Staff": 3,
   "Heavy Crossbow": 3,
   "Longbow": 1,
   "Realmbreaker": 1,
   "Battleaxe": 2,
   "Greataxe": 2,
   "Ironroot Staff": 2,
   "Deathgivers": 3,
   "Hallowfall": 3,
   "Bloodletter": 1,
   "Mistpiercer": 1,
   "Warbow": 1
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
   "Holy Staff": 2,
   "Cursed Staff": 2,
   "Pike": 1,
   "Realmbreaker": 1,
   "Deathgivers": 1,
   "Longbow": 2,
   "Warbow": 2,
   "Redemption Staff": 1,
   "Staff of Balance": 1,
   "Glacial Staff": 1,
   "Fists of Avalon": 1
  },
  "Forcepulse Bracers": {
   "Arclight Blasters": 1,
   "Holy Staff": 1,
   "Crystal Reaper": 2
  },
  "Heavy Crossbow": {
   "Carrioncaller": 4,
   "Holy Staff": 39,
   "Grailseeker": 1,
   "Dagger": 2,
   "Bear Paws": 5,
   "Longbow": 2,
   "Greataxe": 4,
   "Heavy Crossbow": 12,
   "Dagger Pair": 5,
   "Warbow": 3,
   "Deathgivers": 5,
   "Claymore": 9,
   "Staff of Balance": 2,
   "Whispering Bow": 4,
   "Fists of Avalon": 1,
   "Broadsword": 1,
   "Cursed Staff": 3,
   "Hellspawn Staff": 2,
   "Brawler Gloves": 2,
   "Great Fire Staff": 1,
   "Pike": 2,
   "Kingmaker": 1,
   "Hallowfall": 1,
   "Great Holy Staff": 2,
   "Carving Sword": 1,
   "Energy Shaper": 1,
   "Hellfire Hands": 2,
   "Tombhammer": 1,
   "Bloodletter": 2,
   "Black Monk Stave": 1,
   "Demonic Staff": 1,
   "Glacial Staff": 2,
   "Battleaxe": 1,
   "Prowling Staff": 1
  },
  "Warbow": {
   "Battleaxe": 1,
   "Cursed Staff": 5,
   "Claymore": 3,
   "Longbow": 2,
   "Holy Staff": 3,
   "Lifecurse Staff": 2,
   "Twin Slayers": 1,
   "Hellfire Hands": 2,
   "Heavy Crossbow": 2,
   "Bow of Badon": 3,
   "Bear Paws": 2,
   "Dawnsong": 1,
   "Mistpiercer": 2,
   "Warbow": 2,
   "Broadsword": 2,
   "Grailseeker": 1,
   "Deathgivers": 3
  },
  "Battleaxe": {
   "Dagger Pair": 4,
   "Cursed Staff": 4,
   "Pike": 1,
   "Battleaxe": 9,
   "Dagger": 1,
   "Greataxe": 3,
   "Warbow": 3,
   "Longbow": 4,
   "Bloodletter": 4,
   "Crossbow": 2,
   "Hellfire Hands": 1,
   "Bow of Badon": 4,
   "Permafrost Prism": 2,
   "Great Fire Staff": 3,
   "Blight Staff": 1,
   "Bear Paws": 1,
   "Mistpiercer": 1,
   "Wildfire Staff": 2,
   "Ursine Maulers": 1,
   "Realmbreaker": 1,
   "Tombhammer": 1,
   "Holy Staff": 7,
   "Ironroot Staff": 1,
   "Heron Spear": 1,
   "Carving Sword": 1,
   "Crystal Reaper": 1,
   "Claymore": 3,
   "Heavy Crossbow": 1,
   "Deathgivers": 3,
   "Hallowfall": 1,
   "Kingmaker": 1
  },
  "Dawnsong": {
   "Holy Staff": 1,
   "Energy Shaper": 1
  },
  "Bow of Badon": {
   "Mistpiercer": 4,
   "Crossbow": 1,
   "Bow of Badon": 11,
   "Greataxe": 2,
   "Hellfire Hands": 3,
   "Whispering Bow": 2,
   "Holy Staff": 9,
   "Blazing Staff": 1,
   "Bear Paws": 4,
   "Twin Slayers": 2,
   "Staff of Balance": 1,
   "Glacial Staff": 1,
   "Warbow": 3,
   "Brawler Gloves": 2,
   "Crystal Reaper": 2,
   "Deathgivers": 3,
   "Pike": 1,
   "Demonic Staff": 1,
   "Longbow": 4,
   "Battleaxe": 4,
   "Dagger Pair": 2,
   "Forcepulse Bracers": 1,
   "Broadsword": 2,
   "Tombhammer": 1,
   "Blight Staff": 1,
   "Heron Spear": 1,
   "Infernal Scythe": 1,
   "Grailseeker": 1,
   "Hellspawn Staff": 1,
   "Hallowfall": 1
  },
  "Broadsword": {
   "Cursed Staff": 2,
   "Fists of Avalon": 1,
   "Holy Staff": 3,
   "Battleaxe": 1,
   "Greataxe": 1,
   "Blight Staff": 1,
   "Bow of Badon": 1,
   "Kingmaker": 1,
   "Ironroot Staff": 1,
   "Deathgivers": 1
  },
  "Bear Paws": {
   "Bow of Badon": 4,
   "Holy Staff": 9,
   "Broadsword": 1,
   "Claymore": 2,
   "Dagger Pair": 3,
   "Bloodletter": 6,
   "Hallowfall": 1,
   "Hellspawn Staff": 2,
   "Deathgivers": 1,
   "Mistpiercer": 2,
   "Heavy Crossbow": 1,
   "Crossbow": 1,
   "Hellfire Hands": 1,
   "Great Fire Staff": 1,
   "Longbow": 3,
   "Fists of Avalon": 1,
   "Ironroot Staff": 1,
   "Battleaxe": 5,
   "Bear Paws": 3,
   "Heron Spear": 1,
   "Permafrost Prism": 1,
   "Bedrock Mace": 1,
   "Pike": 1,
   "Greataxe": 3,
   "Whispering Bow": 1,
   "Grailseeker": 1,
   "Infernal Scythe": 2
  },
  "Mistpiercer": {
   "Arclight Blasters": 2,
   "Fists of Avalon": 1,
   "Bedrock Mace": 1,
   "Longbow": 1,
   "Infernal Scythe": 1,
   "Bow of Badon": 1,
   "Battleaxe": 1
  },
  "Holy Staff": {
   "Dagger": 1,
   "Battleaxe": 14,
   "Longbow": 14,
   "Mistpiercer": 8,
   "Claymore": 34,
   "Holy Staff": 167,
   "Heavy Crossbow": 41,
   "Bow of Badon": 28,
   "Bear Paws": 7,
   "Greataxe": 8,
   "Dagger Pair": 36,
   "Cursed Staff": 10,
   "Carrioncaller": 9,
   "Blazing Staff": 6,
   "Arclight Blasters": 5,
   "Carving Sword": 5,
   "Fists of Avalon": 6,
   "Demonic Staff": 12,
   "Hallowfall": 8,
   "Deathgivers": 12,
   "Warbow": 11,
   "Staff of Balance": 6,
   "Whispering Bow": 7,
   "Hellspawn Staff": 18,
   "Hellfire Hands": 8,
   "Energy Shaper": 2,
   "Brawler Gloves": 22,
   "Rotcaller Staff": 1,
   "Bloodletter": 9,
   "Crossbow": 10,
   "Wildfire Staff": 4,
   "Divine Staff": 2,
   "Tombhammer": 5,
   "Great Fire Staff": 3,
   "Blight Staff": 7,
   "Permafrost Prism": 1,
   "Lifecurse Staff": 2,
   "Spirithunter": 3,
   "Soulscythe": 5,
   "Ironroot Staff": 7,
   "Broadsword": 4,
   "Glacial Staff": 3,
   "Daybreaker": 1,
   "Great Holy Staff": 5,
   "Ursine Maulers": 2,
   "Forcepulse Bracers": 1,
   "Realmbreaker": 1,
   "Kingmaker": 3,
   "Twin Slayers": 3,
   "Crystal Reaper": 3,
   "Redemption Staff": 2,
   "Heron Spear": 1,
   "Grailseeker": 2
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
   "Heron Spear": 2,
   "Dagger Pair": 4,
   "Heavy Crossbow": 4,
   "Brawler Gloves": 2,
   "Bow of Badon": 1,
   "Claymore": 1,
   "Fists of Avalon": 1,
   "Hallowfall": 1,
   "Staff of Balance": 1,
   "Cursed Staff": 1,
   "Prowling Staff": 1,
   "Battleaxe": 4,
   "Warbow": 1,
   "Kingmaker": 1,
   "Greataxe": 1,
   "Arclight Blasters": 1
  },
  "Grailseeker": {
   "Claymore": 2,
   "Blight Staff": 1,
   "Lifecurse Staff": 1,
   "Dagger Pair": 3,
   "Holy Staff": 5,
   "Heavy Crossbow": 3,
   "Brawler Gloves": 3,
   "Mistpiercer": 1,
   "Crystal Reaper": 1,
   "Bow of Badon": 3,
   "Greataxe": 3,
   "Cursed Staff": 1,
   "Warbow": 3,
   "Battleaxe": 3,
   "Infernal Scythe": 1,
   "Blazing Staff": 1,
   "Heron Spear": 2,
   "Great Holy Staff": 2,
   "Arclight Blasters": 1
  },
  "Cursed Staff": {
   "Battleaxe": 6,
   "Warbow": 3,
   "Cursed Staff": 1,
   "Longbow": 4,
   "Holy Staff": 6,
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
   "Heavy Crossbow": 3,
   "Bow of Badon": 2,
   "Bedrock Mace": 1,
   "Kingmaker": 1,
   "Bloodletter": 1
  },
  "Brawler Gloves": {
   "Battleaxe": 2,
   "Holy Staff": 13,
   "Bloodletter": 4,
   "Crossbow": 2,
   "Claymore": 2,
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
   "Bow of Badon": 1,
   "Deathgivers": 1,
   "Blight Staff": 1,
   "Black Monk Stave": 2,
   "Dagger": 2,
   "Fists of Avalon": 2
  },
  "Carving Sword": {
   "Heron Spear": 1,
   "Bow of Badon": 2,
   "Holy Staff": 8,
   "Arclight Blasters": 2,
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
   "Crossbow": 2,
   "Carrioncaller": 1,
   "Dawnsong": 1,
   "Warbow": 1,
   "Heavy Crossbow": 2,
   "Prowling Staff": 1,
   "Staff of Balance": 1,
   "Blazing Staff": 1,
   "Crystal Reaper": 1
  },
  "Fists of Avalon": {
   "Heron Spear": 1,
   "Holy Staff": 10,
   "Bow of Badon": 1,
   "Whispering Bow": 1,
   "Warbow": 1,
   "Longbow": 1,
   "Twin Slayers": 1,
   "Hallowfall": 1,
   "Arclight Blasters": 1,
   "Hellfire Hands": 1,
   "Claymore": 2,
   "Demonic Staff": 1,
   "Kingmaker": 1,
   "Heavy Crossbow": 2,
   "Infernal Scythe": 1,
   "Dagger Pair": 1,
   "Blight Staff": 1,
   "Battleaxe": 1
  },
  "Energy Shaper": {
   "Bear Paws": 2,
   "Warbow": 1,
   "Heron Spear": 1,
   "Mistpiercer": 1,
   "Energy Shaper": 1
  },
  "Tombhammer": {
   "Bear Paws": 2,
   "Bloodletter": 1,
   "Bow of Badon": 2,
   "Holy Staff": 6,
   "Bedrock Mace": 1,
   "Hellfire Hands": 1,
   "Great Holy Staff": 1,
   "Fists of Avalon": 1,
   "Warbow": 1,
   "Black Monk Stave": 1,
   "Deathgivers": 1,
   "Prowling Staff": 1,
   "Grailseeker": 1,
   "Dagger": 1,
   "Arclight Blasters": 1,
   "Hallowfall": 1,
   "Broadsword": 1
  },
  "Hallowfall": {
   "Lifecurse Staff": 2,
   "Hallowfall": 1,
   "Hellfire Hands": 1,
   "Bow of Badon": 4,
   "Spirithunter": 1,
   "Blazing Staff": 1,
   "Tombhammer": 1,
   "Battleaxe": 2,
   "Ursine Maulers": 1,
   "Bedrock Mace": 1,
   "Holy Staff": 3,
   "Hellspawn Staff": 1,
   "Energy Shaper": 1,
   "Dawnsong": 1,
   "Warbow": 1
  },
  "Wildfire Staff": {
   "Cursed Staff": 1,
   "Battleaxe": 2,
   "Claymore": 1,
   "Heavy Crossbow": 3,
   "Dagger Pair": 1,
   "Longbow": 1,
   "Holy Staff": 1,
   "Warbow": 1,
   "Deathgivers": 1,
   "Blazing Staff": 1
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
   "Holy Staff": 1,
   "Crossbow": 1
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
   "Glaive": 1,
   "Deathgivers": 1,
   "Bow of Badon": 2
  },
  "Longbow": {
   "Pike": 2,
   "Holy Staff": 1,
   "Battleaxe": 3,
   "Cursed Staff": 2,
   "Great Fire Staff": 1,
   "Bloodletter": 2,
   "Heavy Crossbow": 1,
   "Crossbow": 1,
   "Dawnsong": 2,
   "Warbow": 1,
   "Bear Paws": 1,
   "Forcepulse Bracers": 1,
   "Longbow": 4,
   "Lifecurse Staff": 1,
   "Dagger Pair": 1,
   "Whispering Bow": 1,
   "Bow of Badon": 1
  },
  "Great Holy Staff": {
   "Greataxe": 1,
   "Battleaxe": 1,
   "Hellfire Hands": 1,
   "Bloodletter": 2,
   "Crossbow": 2,
   "Holy Staff": 1,
   "Longbow": 1,
   "Dagger": 1
  },
  "Pike": {
   "Bloodletter": 1,
   "Greataxe": 1,
   "Holy Staff": 2,
   "Heavy Crossbow": 1,
   "Whispering Bow": 1
  },
  "Heron Spear": {
   "Lifecurse Staff": 1,
   "Twin Slayers": 1,
   "Warbow": 1,
   "Dagger Pair": 1,
   "Bear Paws": 1,
   "Longbow": 2,
   "Holy Staff": 1,
   "Staff of Balance": 1,
   "Glacial Staff": 1,
   "Grailseeker": 1,
   "Energy Shaper": 1
  },
  "Kingmaker": {
   "Warbow": 1,
   "Bow of Badon": 1,
   "Holy Staff": 2,
   "Claymore": 1,
   "Deathgivers": 1
  },
  "Bloodletter": {
   "Infernal Scythe": 1,
   "Great Holy Staff": 1,
   "Cursed Staff": 1,
   "Lifecurse Staff": 1,
   "Hallowfall": 2,
   "Carrioncaller": 1,
   "Great Fire Staff": 1,
   "Blight Staff": 1,
   "Holy Staff": 3,
   "Prowling Staff": 1,
   "Brawler Gloves": 1,
   "Wildfire Staff": 1,
   "Bloodletter": 2,
   "Battleaxe": 2,
   "Great Arcane Staff": 1,
   "Glaive": 1,
   "Heavy Crossbow": 1,
   "Bow of Badon": 1,
   "Claymore": 1
  },
  "Prowling Staff": {
   "Bow of Badon": 3,
   "Wildfire Staff": 1,
   "Holy Staff": 8,
   "Hellspawn Staff": 1,
   "Brawler Gloves": 2,
   "Blazing Staff": 2,
   "Tombhammer": 1,
   "Arclight Blasters": 1,
   "Kingmaker": 1,
   "Black Monk Stave": 1,
   "Dagger": 1,
   "Warbow": 1,
   "Heavy Crossbow": 1,
   "Fists of Avalon": 1,
   "Staff of Balance": 1,
   "Carrioncaller": 1
  },
  "Redemption Staff": {
   "Deathgivers": 1,
   "Bow of Badon": 1,
   "Forcepulse Bracers": 1,
   "Carrioncaller": 1,
   "Holy Staff": 1,
   "Heavy Crossbow": 1,
   "Claymore": 1,
   "Battleaxe": 1
  },
  "Crystal Reaper": {
   "Bloodletter": 1,
   "Mistpiercer": 2,
   "Battleaxe": 2,
   "Holy Staff": 4,
   "Warbow": 2,
   "Crystal Reaper": 1,
   "Hallowfall": 1,
   "Twin Slayers": 1,
   "Hellspawn Staff": 1,
   "Bow of Badon": 2,
   "Greataxe": 1,
   "Longbow": 3,
   "Bear Paws": 1,
   "Grailseeker": 1,
   "Energy Shaper": 1
  },
  "Hellspawn Staff": {
   "Holy Staff": 14,
   "Cursed Staff": 2,
   "Claymore": 2,
   "Dagger Pair": 5,
   "Divine Staff": 1,
   "Heavy Crossbow": 2,
   "Carving Sword": 1,
   "Hellspawn Staff": 4,
   "Soulscythe": 2,
   "Spirithunter": 2,
   "Demonic Staff": 2,
   "Blazing Staff": 1,
   "Warbow": 1,
   "Great Holy Staff": 1,
   "Twin Slayers": 1,
   "Bow of Badon": 1,
   "Tombhammer": 1,
   "Bear Paws": 1,
   "Carrioncaller": 1,
   "Longbow": 1,
   "Energy Shaper": 1,
   "Arclight Blasters": 2,
   "Broadsword": 1,
   "Crystal Reaper": 1
  },
  "Soulscythe": {
   "Whispering Bow": 1,
   "Bear Paws": 1,
   "Claymore": 1,
   "Holy Staff": 2,
   "Battleaxe": 2,
   "Heavy Crossbow": 2,
   "Carrioncaller": 1,
   "Redemption Staff": 1
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
   "Battleaxe": 1,
   "Grailseeker": 1,
   "Dagger": 1
  },
  "Blazing Staff": {
   "Mistpiercer": 1,
   "Brawler Gloves": 1,
   "Crystal Reaper": 1,
   "Bow of Badon": 1,
   "Greataxe": 2,
   "Cursed Staff": 2,
   "Battleaxe": 1,
   "Infernal Scythe": 1,
   "Blazing Staff": 1,
   "Heron Spear": 1,
   "Heavy Crossbow": 1
  },
  "Hellfire Hands": {
   "Blight Staff": 1,
   "Realmbreaker": 1,
   "Holy Staff": 7,
   "Forcepulse Bracers": 1,
   "Heavy Crossbow": 1,
   "Warbow": 2,
   "Fists of Avalon": 1,
   "Black Monk Stave": 1,
   "Deathgivers": 1,
   "Prowling Staff": 1,
   "Brawler Gloves": 1,
   "Dagger Pair": 2,
   "Mistpiercer": 1,
   "Arclight Blasters": 1,
   "Bow of Badon": 1
  },
  "Ironroot Staff": {
   "Dagger Pair": 3,
   "Holy Staff": 9,
   "Great Holy Staff": 1,
   "Prowling Staff": 1,
   "Heavy Crossbow": 2,
   "Claymore": 1,
   "Warbow": 1,
   "Brawler Gloves": 1,
   "Bow of Badon": 1,
   "Greataxe": 1,
   "Blight Staff": 2,
   "Deathgivers": 1,
   "Carving Sword": 1,
   "Battleaxe": 1
  },
  "Great Fire Staff": {
   "Battleaxe": 1,
   "Dagger Pair": 1,
   "Warbow": 1,
   "Bow of Badon": 1
  },
  "Realmbreaker": {
   "Bow of Badon": 3,
   "Ironroot Staff": 1,
   "Holy Staff": 1,
   "Claymore": 1,
   "Battleaxe": 1
  },
  "Permafrost Prism": {
   "Hellfire Hands": 1,
   "Deathgivers": 1
  },
  "Staff of Balance": {
   "Fists of Avalon": 1,
   "Holy Staff": 4,
   "Claymore": 1,
   "Bloodletter": 1,
   "Staff of Balance": 1,
   "Prowling Staff": 1,
   "Kingmaker": 1,
   "Battleaxe": 1,
   "Crossbow": 1,
   "Glacial Staff": 1,
   "Dagger Pair": 1,
   "Heavy Crossbow": 2
  },
  "Glacial Staff": {
   "Bloodletter": 1,
   "Battleaxe": 1,
   "Crossbow": 1
  },
  "Twin Slayers": {
   "Hellspawn Staff": 1,
   "Holy Staff": 1,
   "Heavy Crossbow": 1,
   "Redemption Staff": 1
  },
  "Grovekeeper": {
   "Great Arcane Staff": 1
  },
  "Hoarfrost Staff": {
   "Blazing Staff": 1
  },
  "Wailing Bow": {
   "Great Holy Staff": 1,
   "Dagger Pair": 1
  },
  "Black Monk Stave": {
   "Battleaxe": 1,
   "Heron Spear": 1,
   "Kingmaker": 1
  },
  "Glaive": {
   "Brawler Gloves": 1,
   "Claymore": 1
  },
  "Daybreaker": {
   "Greataxe": 1
  }
 },
 "duos": {
  "Energy Shaper + Tombhammer": {
   "Bear Paws + Bear Paws": 1
  },
  "Claymore + Holy Staff": {
   "Claymore + Holy Staff": 6,
   "Heavy Crossbow + Holy Staff": 6,
   "Dagger Pair + Holy Staff": 2,
   "Demonic Staff + Holy Staff": 3,
   "Hellfire Hands + Tombhammer": 2,
   "Bow of Badon + Lifecurse Staff": 1,
   "Bloodletter + Crossbow": 1,
   "Holy Staff + Wildfire Staff": 1,
   "Cursed Staff + Holy Staff": 3,
   "Crossbow + Crossbow": 1,
   "Brawler Gloves + Longbow": 2,
   "Brawler Gloves + Crossbow": 1,
   "Demonic Staff + Ironroot Staff": 1,
   "Carrioncaller + Holy Staff": 2,
   "Heavy Crossbow + Heavy Crossbow": 2,
   "Warbow + Warbow": 1,
   "Hellfire Hands + Holy Staff": 1,
   "Fists of Avalon + Holy Staff": 1,
   "Claymore + Ironroot Staff": 1,
   "Glacial Staff + Staff of Balance": 2,
   "Dagger Pair + Soulscythe": 1,
   "Brawler Gloves + Dagger Pair": 1,
   "Demonic Staff + Great Holy Staff": 1,
   "Battleaxe + Holy Staff": 1,
   "Dagger Pair + Dagger Pair": 1,
   "Hellspawn Staff + Holy Staff": 1
  },
  "Greataxe + Hallowfall": {
   "Hallowfall + Lifecurse Staff": 1
  },
  "Heavy Crossbow + Holy Staff": {
   "Bear Paws + Longbow": 1,
   "Heavy Crossbow + Holy Staff": 1,
   "Deathgivers + Holy Staff": 3,
   "Staff of Balance + Whispering Bow": 1,
   "Claymore + Holy Staff": 2,
   "Hellspawn Staff + Holy Staff": 1,
   "Hallowfall + Kingmaker": 1,
   "Carrioncaller + Holy Staff": 1,
   "Brawler Gloves + Warbow": 1,
   "Heavy Crossbow + Heavy Crossbow": 2,
   "Cursed Staff + Holy Staff": 1,
   "Dagger Pair + Holy Staff": 2,
   "Demonic Staff + Holy Staff": 1
  },
  "Cursed Staff + Warbow": {
   "Cursed Staff + Longbow": 1
  },
  "Carving Sword + Holy Staff": {
   "Bow of Badon + Holy Staff": 1,
   "Carving Sword + Holy Staff": 1,
   "Arclight Blasters + Holy Staff": 1,
   "Blazing Staff + Staff of Balance": 1
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
   "Deathgivers + Holy Staff": 2,
   "Greataxe + Holy Staff": 1,
   "Battleaxe + Holy Staff": 1,
   "Demonic Staff + Holy Staff": 1
  },
  "Bow of Badon + Holy Staff": {
   "Bear Paws + Blazing Staff": 1,
   "Brawler Gloves + Mistpiercer": 1,
   "Bow of Badon + Dagger Pair": 1,
   "Holy Staff + Holy Staff": 1,
   "Crystal Reaper + Twin Slayers": 1,
   "Grailseeker + Mistpiercer": 1,
   "Hellspawn Staff + Holy Staff": 1,
   "Deathgivers + Greataxe": 1
  },
  "Bow of Badon + Warbow": {
   "Hellfire Hands + Twin Slayers": 1
  },
  "Bear Paws + Holy Staff": {
   "Claymore + Holy Staff": 1,
   "Bow of Badon + Holy Staff": 1,
   "Hellspawn Staff + Ironroot Staff": 1,
   "Grailseeker + Mistpiercer": 1
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
   "Claymore + Holy Staff": 1,
   "Deathgivers + Holy Staff": 1
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
   "Claymore + Great Holy Staff": 3,
   "Longbow + Realmbreaker": 1,
   "Battleaxe + Bow of Badon": 1,
   "Arclight Blasters + Ironroot Staff": 1,
   "Demonic Staff + Holy Staff": 1,
   "Claymore + Ironroot Staff": 1,
   "Bow of Badon + Greataxe": 1,
   "Deathgivers + Holy Staff": 2,
   "Heavy Crossbow + Warbow": 1,
   "Holy Staff + Wildfire Staff": 1
  },
  "Hellspawn Staff + Holy Staff": {
   "Cursed Staff + Holy Staff": 2,
   "Claymore + Holy Staff": 2,
   "Dagger Pair + Divine Staff": 1,
   "Heavy Crossbow + Holy Staff": 1,
   "Hellspawn Staff + Holy Staff": 2,
   "Demonic Staff + Holy Staff": 2,
   "Dagger Pair + Holy Staff": 1,
   "Dagger Pair + Soulscythe": 1,
   "Great Holy Staff + Hellspawn Staff": 1,
   "Arclight Blasters + Holy Staff": 1,
   "Broadsword + Holy Staff": 1
  },
  "Holy Staff + Rotcaller Staff": {
   "Hellspawn Staff + Holy Staff": 1
  },
  "Battleaxe + Holy Staff": {
   "Bloodletter + Crossbow": 1,
   "Bow of Badon + Permafrost Prism": 1,
   "Longbow + Longbow": 1,
   "Dagger Pair + Mistpiercer": 1,
   "Carving Sword + Holy Staff": 1,
   "Claymore + Holy Staff": 1,
   "Bow of Badon + Holy Staff": 1
  },
  "Cursed Staff + Holy Staff": {
   "Dagger Pair + Holy Staff": 1,
   "Hellspawn Staff + Holy Staff": 1,
   "Lifecurse Staff + Whispering Bow": 1,
   "Fists of Avalon + Heavy Crossbow": 1,
   "Heavy Crossbow + Warbow": 1,
   "Heavy Crossbow + Holy Staff": 1
  },
  "Bloodletter + Crossbow": {
   "Carrioncaller + Hallowfall": 1,
   "Blight Staff + Great Fire Staff": 1
  },
  "Greataxe + Holy Staff": {
   "Blight Staff + Great Fire Staff": 1,
   "Soulscythe + Spirithunter": 1,
   "Hellspawn Staff + Holy Staff": 1,
   "Battleaxe + Bloodletter": 1,
   "Longbow + Redemption Staff": 1
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
   "Holy Staff + Longbow": 1,
   "Broadsword + Holy Staff": 1,
   "Brawler Gloves + Brawler Gloves": 1,
   "Dagger Pair + Holy Staff": 2,
   "Deathgivers + Holy Staff": 1
  },
  "Brawler Gloves + Dagger Pair": {
   "Bloodletter + Crossbow": 1,
   "Claymore + Holy Staff": 1
  },
  "Deathgivers + Holy Staff": {
   "Claymore + Holy Staff": 1,
   "Carrioncaller + Holy Staff": 1,
   "Brawler Gloves + Whispering Bow": 1,
   "Blazing Staff + Staff of Balance": 1,
   "Carving Sword + Holy Staff": 1
  },
  "Claymore + Ironroot Staff": {
   "Dagger Pair + Holy Staff": 2,
   "Brawler Gloves + Warbow": 1,
   "Deathgivers + Holy Staff": 1,
   "Carving Sword + Holy Staff": 1
  },
  "Brawler Gloves + Whispering Bow": {
   "Claymore + Holy Staff": 1,
   "Bloodletter + Crossbow": 1
  },
  "Carrioncaller + Holy Staff": {
   "Bloodletter + Crossbow": 2,
   "Bear Paws + Holy Staff": 1,
   "Carrioncaller + Holy Staff": 1,
   "Demonic Staff + Holy Staff": 1
  },
  "Realmbreaker + Tombhammer": {
   "Bow of Badon + Bow of Badon": 1
  },
  "Bloodletter + Brawler Gloves": {
   "Holy Staff + Prowling Staff": 1
  },
  "Holy Staff + Prowling Staff": {
   "Brawler Gloves + Brawler Gloves": 1,
   "Bow of Badon + Holy Staff": 1,
   "Holy Staff + Kingmaker": 1,
   "Heavy Crossbow + Holy Staff": 1,
   "Fists of Avalon + Staff of Balance": 1
  },
  "Brawler Gloves + Brawler Gloves": {
   "Carving Sword + Holy Staff": 1,
   "Black Monk Stave + Dagger": 1,
   "Fists of Avalon + Holy Staff": 1
  },
  "Crystal Reaper + Holy Staff": {
   "Mistpiercer + Mistpiercer": 1,
   "Battleaxe + Holy Staff": 1,
   "Warbow + Warbow": 1,
   "Holy Staff + Twin Slayers": 1,
   "Bow of Badon + Greataxe": 1
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
   "Fists of Avalon + Holy Staff": 1,
   "Dagger Pair + Heavy Crossbow": 1
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
   "Deathgivers + Holy Staff": 1,
   "Bear Paws + Claymore": 1
  },
  "Hellfire Hands + Holy Staff": {
   "Heavy Crossbow + Holy Staff": 1,
   "Warbow + Warbow": 1,
   "Brawler Gloves + Dagger Pair": 1
  },
  "Broadsword + Ironroot Staff": {
   "Blight Staff + Greataxe": 1
  },
  "Fists of Avalon + Holy Staff": {
   "Claymore + Holy Staff": 2,
   "Demonic Staff + Holy Staff": 1,
   "Heavy Crossbow + Holy Staff": 1
  },
  "Hellfire Hands + Tombhammer": {
   "Fists of Avalon + Holy Staff": 1,
   "Black Monk Stave + Deathgivers": 1
  },
  "Battleaxe + Demonic Staff": {
   "Great Fire Staff + Greataxe": 1
  },
  "Battleaxe + Cursed Staff": {
   "Battleaxe + Battleaxe": 1
  },
  "Bear Paws + Bow of Badon": {
   "Bow of Badon + Holy Staff": 1
  },
  "Carrioncaller + Heavy Crossbow": {
   "Cursed Staff + Holy Staff": 1,
   "Bloodletter + Heavy Crossbow": 1,
   "Dagger Pair + Holy Staff": 1
  },
  "Heavy Crossbow + Prowling Staff": {
   "Black Monk Stave + Dagger": 1
  },
  "Black Monk Stave + Dagger": {
   "Battleaxe + Heron Spear": 1
  },
  "Heavy Crossbow + Warbow": {
   "Heavy Crossbow + Holy Staff": 1
  },
  "Bloodletter + Pike": {
   "Heavy Crossbow + Holy Staff": 1
  },
  "Spirithunter + Tombhammer": {
   "Dagger + Grailseeker": 1
  },
  "Bear Paws + Longbow": {
   "Longbow + Pike": 1
  },
  "Claymore + Hallowfall": {
   "Hellspawn Staff + Holy Staff": 1
  },
  "Battleaxe + Bear Paws": {
   "Bloodletter + Greataxe": 1
  },
  "Bear Paws + Bear Paws": {
   "Battleaxe + Greataxe": 1
  },
  "Greataxe + Warbow": {
   "Longbow + Warbow": 1
  },
  "Hallowfall + Hellspawn Staff": {
   "Dawnsong + Energy Shaper": 1
  },
  "Greataxe + Heron Spear": {
   "Glacial Staff + Staff of Balance": 1
  },
  "Broadsword + Holy Staff": {
   "Bow of Badon + Holy Staff": 1,
   "Ironroot Staff + Kingmaker": 1
  },
  "Bow of Badon + Crystal Reaper": {
   "Bow of Badon + Longbow": 1
  },
  "Crystal Reaper + Heron Spear": {
   "Energy Shaper + Heron Spear": 1
  },
  "Arclight Blasters + Bloodletter": {
   "Bow of Badon + Hallowfall": 1
  },
  "Bloodletter + Carrioncaller": {
   "Claymore + Holy Staff": 1
  },
  "Fists of Avalon + Ironroot Staff": {
   "Battleaxe + Holy Staff": 1
  },
  "Carving Sword + Heavy Crossbow": {
   "Heavy Crossbow + Prowling Staff": 1
  },
  "Dagger Pair + Heavy Crossbow": {
   "Glacial Staff + Staff of Balance": 1
  },
  "Holy Staff + Realmbreaker": {
   "Bow of Badon + Holy Staff": 1
  },
  "Realmbreaker + Redemption Staff": {
   "Battleaxe + Claymore": 1
  },
  "Carving Sword + Hellspawn Staff": {
   "Arclight Blasters + Crystal Reaper": 1
  }
 }
};
