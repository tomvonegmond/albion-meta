/* ===========================================================
   Albion Meta - weapon against weapon
   -----------------------------------------------------------
   This one is yours to fill in. Nothing here is guessed.

   Shape:
     "<your build key>": {
       "heal":   { "<their build key>": { "verdict": "...", "note": "..." } },
       "stun":   { ... },
       "double": { ... }
     }

   verdict is one of "favoured", "even" or "unfavoured".
   note is optional, one line on how the matchup is played.
   Build keys are the data-build values in index.html, which
   rosters.js also lists, for example "holy-staff" or
   "bloodletter-double".
   Instead of a verdict a pair can carry odds, written from
   your side, so "70/30" means you win seven of ten:
     { "odds": "70/30" }

   Double dps against stun dps is 70/30 to the double dps, for
   every stun build.
   Stun dps against heal dps is 70/30 to the stun dps. A heal
   build in a leather hood or Mercenary Shoes turns that round
   and wins 70/30 instead, because it can break the stun, and
   it takes no Ironroot note since it is already ahead. Those
   are Demonic Staff, Fists of Avalon, Broadsword, Lifecurse
   Staff, Pike, Hellfire Hands, Crystal Reaper, Carving Sword,
   Dagger Pair, Bear Paws and Great Fire Staff.
   Ironroot Staff sits apart at 50/50.

   Heal dps against double dps is 80/20 to the heal dps, and
   90/10 for the Hellspawn Staff, the imp.
   The imp is also 70/30 into stun dps, so it takes no Ironroot
   note either.

   Holy Staff says "Depends on the dps" to everything on its
   own tierlist as well as to stun dps.
   The whole of heal dps S tier, so Demonic Staff, Prowling
   Staff, Arclight Blasters and the Hellspawn Staff, has its
   own numbers against S and A tier, written one by one.

   The Warbow does better than the rest of double dps: 40/60
   against a heal build with neither a cleanse nor Mercenary
   Shoes, and 20/80 against the imp. Against a heal build that
   does carry one it stays on the 20/80 above.

   A pair can say something in words instead, with "text",
   which is how the healing staffs read against stun dps.
   Holy Staff, Great Holy Staff and Divine Staff say "Depends
   on the dps". Ironroot Staff against stun dps is 50/50, both
   ways, with that said as a note under it.

   Every heal dps damage build that can pair with the Ironroot
   Staff carries a note on its stun dps matchups saying the
   fight is 50/50 with Ironroot behind it. A row already
   written as 70/30 keeps 70/30 and takes no note.

   Anything left out shows as "not rated yet" on the site.
   =========================================================== */

window.ALBION_MATCHUPS = {
 "bloodletter": {
  "heal": {
   "holy-staff": {
    "note": "Dive the healer the moment their purge is down.",
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  },
  "stun": {},
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  }
 },
 "dagger": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "warbow": {
  "stun": {
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   },
   "staff-of-balance": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   }
  },
  "heal": {
   "holy-staff": {
    "odds": "20/80"
   },
   "demonic-staff": {
    "odds": "20/80"
   },
   "prowling-staff": {
    "odds": "40/60"
   },
   "arclight-blasters": {
    "odds": "40/60"
   },
   "hellspawn-staff": {
    "odds": "20/80"
   },
   "glaive": {
    "odds": "40/60"
   },
   "claymore": {
    "odds": "20/80"
   },
   "fists-of-avalon": {
    "odds": "40/60"
   },
   "rotcaller-staff": {
    "odds": "20/80"
   },
   "heavy-crossbow": {
    "odds": "20/80"
   },
   "broadsword": {
    "odds": "40/60"
   },
   "lifecurse-staff": {
    "odds": "20/80"
   },
   "greataxe": {
    "odds": "20/80"
   },
   "kingmaker": {
    "odds": "20/80"
   },
   "cursed-staff": {
    "odds": "40/60"
   },
   "great-holy-staff": {
    "odds": "40/60"
   },
   "pike": {
    "odds": "40/60"
   },
   "hellfire-hands": {
    "odds": "40/60"
   },
   "crystal-reaper": {
    "odds": "20/80"
   },
   "carrioncaller": {
    "odds": "20/80"
   },
   "forcepulse-bracers": {
    "odds": "20/80"
   },
   "ironroot-staff": {
    "odds": "20/80"
   },
   "carving-sword": {
    "odds": "20/80"
   },
   "divine-staff": {
    "odds": "20/80"
   },
   "twin-slayers": {
    "odds": "20/80"
   },
   "deathgivers": {
    "odds": "20/80"
   },
   "dagger-pair": {
    "odds": "20/80"
   },
   "wildfire-staff": {
    "odds": "40/60"
   },
   "battleaxe": {
    "odds": "20/80"
   },
   "bear-paws": {
    "odds": "40/60"
   },
   "great-fire-staff": {
    "odds": "20/80"
   },
   "daybreaker": {
    "odds": "20/80"
   }
  }
 },
 "brawler-gloves": {
  "stun": {
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   },
   "staff-of-balance": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   }
  },
  "heal": {
   "holy-staff": {
    "odds": "20/80"
   },
   "demonic-staff": {
    "odds": "20/80"
   },
   "prowling-staff": {
    "odds": "20/80"
   },
   "arclight-blasters": {
    "odds": "20/80"
   },
   "hellspawn-staff": {
    "odds": "10/90"
   },
   "glaive": {
    "odds": "20/80"
   },
   "claymore": {
    "odds": "20/80"
   },
   "fists-of-avalon": {
    "odds": "20/80"
   },
   "rotcaller-staff": {
    "odds": "20/80"
   },
   "heavy-crossbow": {
    "odds": "20/80"
   },
   "broadsword": {
    "odds": "20/80"
   },
   "lifecurse-staff": {
    "odds": "20/80"
   },
   "greataxe": {
    "odds": "20/80"
   },
   "kingmaker": {
    "odds": "20/80"
   },
   "cursed-staff": {
    "odds": "20/80"
   },
   "great-holy-staff": {
    "odds": "20/80"
   },
   "pike": {
    "odds": "20/80"
   },
   "hellfire-hands": {
    "odds": "20/80"
   },
   "crystal-reaper": {
    "odds": "20/80"
   },
   "carrioncaller": {
    "odds": "20/80"
   },
   "forcepulse-bracers": {
    "odds": "20/80"
   },
   "ironroot-staff": {
    "odds": "20/80"
   },
   "carving-sword": {
    "odds": "20/80"
   },
   "divine-staff": {
    "odds": "20/80"
   },
   "twin-slayers": {
    "odds": "20/80"
   },
   "deathgivers": {
    "odds": "20/80"
   },
   "dagger-pair": {
    "odds": "20/80"
   },
   "wildfire-staff": {
    "odds": "20/80"
   },
   "battleaxe": {
    "odds": "20/80"
   },
   "bear-paws": {
    "odds": "20/80"
   },
   "great-fire-staff": {
    "odds": "20/80"
   },
   "daybreaker": {
    "odds": "20/80"
   }
  }
 },
 "bloodletter-double": {
  "stun": {
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   },
   "staff-of-balance": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   }
  },
  "heal": {
   "holy-staff": {
    "odds": "20/80"
   },
   "demonic-staff": {
    "odds": "20/80"
   },
   "prowling-staff": {
    "odds": "20/80"
   },
   "arclight-blasters": {
    "odds": "20/80"
   },
   "hellspawn-staff": {
    "odds": "10/90"
   },
   "glaive": {
    "odds": "20/80"
   },
   "claymore": {
    "odds": "20/80"
   },
   "fists-of-avalon": {
    "odds": "20/80"
   },
   "rotcaller-staff": {
    "odds": "20/80"
   },
   "heavy-crossbow": {
    "odds": "20/80"
   },
   "broadsword": {
    "odds": "20/80"
   },
   "lifecurse-staff": {
    "odds": "20/80"
   },
   "greataxe": {
    "odds": "20/80"
   },
   "kingmaker": {
    "odds": "20/80"
   },
   "cursed-staff": {
    "odds": "20/80"
   },
   "great-holy-staff": {
    "odds": "20/80"
   },
   "pike": {
    "odds": "20/80"
   },
   "hellfire-hands": {
    "odds": "20/80"
   },
   "crystal-reaper": {
    "odds": "20/80"
   },
   "carrioncaller": {
    "odds": "20/80"
   },
   "forcepulse-bracers": {
    "odds": "20/80"
   },
   "ironroot-staff": {
    "odds": "20/80"
   },
   "carving-sword": {
    "odds": "20/80"
   },
   "divine-staff": {
    "odds": "20/80"
   },
   "twin-slayers": {
    "odds": "20/80"
   },
   "deathgivers": {
    "odds": "20/80"
   },
   "dagger-pair": {
    "odds": "20/80"
   },
   "wildfire-staff": {
    "odds": "20/80"
   },
   "battleaxe": {
    "odds": "20/80"
   },
   "bear-paws": {
    "odds": "20/80"
   },
   "great-fire-staff": {
    "odds": "20/80"
   },
   "daybreaker": {
    "odds": "20/80"
   }
  }
 },
 "dagger-pair-double": {
  "stun": {
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   },
   "staff-of-balance": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   }
  },
  "heal": {
   "holy-staff": {
    "odds": "20/80"
   },
   "demonic-staff": {
    "odds": "20/80"
   },
   "prowling-staff": {
    "odds": "20/80"
   },
   "arclight-blasters": {
    "odds": "20/80"
   },
   "hellspawn-staff": {
    "odds": "10/90"
   },
   "glaive": {
    "odds": "20/80"
   },
   "claymore": {
    "odds": "20/80"
   },
   "fists-of-avalon": {
    "odds": "20/80"
   },
   "rotcaller-staff": {
    "odds": "20/80"
   },
   "heavy-crossbow": {
    "odds": "20/80"
   },
   "broadsword": {
    "odds": "20/80"
   },
   "lifecurse-staff": {
    "odds": "20/80"
   },
   "greataxe": {
    "odds": "20/80"
   },
   "kingmaker": {
    "odds": "20/80"
   },
   "cursed-staff": {
    "odds": "20/80"
   },
   "great-holy-staff": {
    "odds": "20/80"
   },
   "pike": {
    "odds": "20/80"
   },
   "hellfire-hands": {
    "odds": "20/80"
   },
   "crystal-reaper": {
    "odds": "20/80"
   },
   "carrioncaller": {
    "odds": "20/80"
   },
   "forcepulse-bracers": {
    "odds": "20/80"
   },
   "ironroot-staff": {
    "odds": "20/80"
   },
   "carving-sword": {
    "odds": "20/80"
   },
   "divine-staff": {
    "odds": "20/80"
   },
   "twin-slayers": {
    "odds": "20/80"
   },
   "deathgivers": {
    "odds": "20/80"
   },
   "dagger-pair": {
    "odds": "20/80"
   },
   "wildfire-staff": {
    "odds": "20/80"
   },
   "battleaxe": {
    "odds": "20/80"
   },
   "bear-paws": {
    "odds": "20/80"
   },
   "great-fire-staff": {
    "odds": "20/80"
   },
   "daybreaker": {
    "odds": "20/80"
   }
  }
 },
 "carrioncaller-double": {
  "stun": {
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   },
   "staff-of-balance": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   }
  },
  "heal": {
   "holy-staff": {
    "odds": "20/80"
   },
   "demonic-staff": {
    "odds": "20/80"
   },
   "prowling-staff": {
    "odds": "20/80"
   },
   "arclight-blasters": {
    "odds": "20/80"
   },
   "hellspawn-staff": {
    "odds": "10/90"
   },
   "glaive": {
    "odds": "20/80"
   },
   "claymore": {
    "odds": "20/80"
   },
   "fists-of-avalon": {
    "odds": "20/80"
   },
   "rotcaller-staff": {
    "odds": "20/80"
   },
   "heavy-crossbow": {
    "odds": "20/80"
   },
   "broadsword": {
    "odds": "20/80"
   },
   "lifecurse-staff": {
    "odds": "20/80"
   },
   "greataxe": {
    "odds": "20/80"
   },
   "kingmaker": {
    "odds": "20/80"
   },
   "cursed-staff": {
    "odds": "20/80"
   },
   "great-holy-staff": {
    "odds": "20/80"
   },
   "pike": {
    "odds": "20/80"
   },
   "hellfire-hands": {
    "odds": "20/80"
   },
   "crystal-reaper": {
    "odds": "20/80"
   },
   "carrioncaller": {
    "odds": "20/80"
   },
   "forcepulse-bracers": {
    "odds": "20/80"
   },
   "ironroot-staff": {
    "odds": "20/80"
   },
   "carving-sword": {
    "odds": "20/80"
   },
   "divine-staff": {
    "odds": "20/80"
   },
   "twin-slayers": {
    "odds": "20/80"
   },
   "deathgivers": {
    "odds": "20/80"
   },
   "dagger-pair": {
    "odds": "20/80"
   },
   "wildfire-staff": {
    "odds": "20/80"
   },
   "battleaxe": {
    "odds": "20/80"
   },
   "bear-paws": {
    "odds": "20/80"
   },
   "great-fire-staff": {
    "odds": "20/80"
   },
   "daybreaker": {
    "odds": "20/80"
   }
  }
 },
 "ursine-maulers": {
  "stun": {
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   },
   "staff-of-balance": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   }
  },
  "heal": {
   "holy-staff": {
    "odds": "20/80"
   },
   "demonic-staff": {
    "odds": "20/80"
   },
   "prowling-staff": {
    "odds": "20/80"
   },
   "arclight-blasters": {
    "odds": "20/80"
   },
   "hellspawn-staff": {
    "odds": "10/90"
   },
   "glaive": {
    "odds": "20/80"
   },
   "claymore": {
    "odds": "20/80"
   },
   "fists-of-avalon": {
    "odds": "20/80"
   },
   "rotcaller-staff": {
    "odds": "20/80"
   },
   "heavy-crossbow": {
    "odds": "20/80"
   },
   "broadsword": {
    "odds": "20/80"
   },
   "lifecurse-staff": {
    "odds": "20/80"
   },
   "greataxe": {
    "odds": "20/80"
   },
   "kingmaker": {
    "odds": "20/80"
   },
   "cursed-staff": {
    "odds": "20/80"
   },
   "great-holy-staff": {
    "odds": "20/80"
   },
   "pike": {
    "odds": "20/80"
   },
   "hellfire-hands": {
    "odds": "20/80"
   },
   "crystal-reaper": {
    "odds": "20/80"
   },
   "carrioncaller": {
    "odds": "20/80"
   },
   "forcepulse-bracers": {
    "odds": "20/80"
   },
   "ironroot-staff": {
    "odds": "20/80"
   },
   "carving-sword": {
    "odds": "20/80"
   },
   "divine-staff": {
    "odds": "20/80"
   },
   "twin-slayers": {
    "odds": "20/80"
   },
   "deathgivers": {
    "odds": "20/80"
   },
   "dagger-pair": {
    "odds": "20/80"
   },
   "wildfire-staff": {
    "odds": "20/80"
   },
   "battleaxe": {
    "odds": "20/80"
   },
   "bear-paws": {
    "odds": "20/80"
   },
   "great-fire-staff": {
    "odds": "20/80"
   },
   "daybreaker": {
    "odds": "20/80"
   }
  }
 },
 "heron-spear": {
  "stun": {
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   },
   "staff-of-balance": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   }
  },
  "heal": {
   "holy-staff": {
    "odds": "20/80"
   },
   "demonic-staff": {
    "odds": "20/80"
   },
   "prowling-staff": {
    "odds": "20/80"
   },
   "arclight-blasters": {
    "odds": "20/80"
   },
   "hellspawn-staff": {
    "odds": "10/90"
   },
   "glaive": {
    "odds": "20/80"
   },
   "claymore": {
    "odds": "20/80"
   },
   "fists-of-avalon": {
    "odds": "20/80"
   },
   "rotcaller-staff": {
    "odds": "20/80"
   },
   "heavy-crossbow": {
    "odds": "20/80"
   },
   "broadsword": {
    "odds": "20/80"
   },
   "lifecurse-staff": {
    "odds": "20/80"
   },
   "greataxe": {
    "odds": "20/80"
   },
   "kingmaker": {
    "odds": "20/80"
   },
   "cursed-staff": {
    "odds": "20/80"
   },
   "great-holy-staff": {
    "odds": "20/80"
   },
   "pike": {
    "odds": "20/80"
   },
   "hellfire-hands": {
    "odds": "20/80"
   },
   "crystal-reaper": {
    "odds": "20/80"
   },
   "carrioncaller": {
    "odds": "20/80"
   },
   "forcepulse-bracers": {
    "odds": "20/80"
   },
   "ironroot-staff": {
    "odds": "20/80"
   },
   "carving-sword": {
    "odds": "20/80"
   },
   "divine-staff": {
    "odds": "20/80"
   },
   "twin-slayers": {
    "odds": "20/80"
   },
   "deathgivers": {
    "odds": "20/80"
   },
   "dagger-pair": {
    "odds": "20/80"
   },
   "wildfire-staff": {
    "odds": "20/80"
   },
   "battleaxe": {
    "odds": "20/80"
   },
   "bear-paws": {
    "odds": "20/80"
   },
   "great-fire-staff": {
    "odds": "20/80"
   },
   "daybreaker": {
    "odds": "20/80"
   }
  }
 },
 "whispering-bow": {
  "stun": {
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   },
   "staff-of-balance": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   }
  },
  "heal": {
   "holy-staff": {
    "odds": "20/80"
   },
   "demonic-staff": {
    "odds": "20/80"
   },
   "prowling-staff": {
    "odds": "20/80"
   },
   "arclight-blasters": {
    "odds": "20/80"
   },
   "hellspawn-staff": {
    "odds": "10/90"
   },
   "glaive": {
    "odds": "20/80"
   },
   "claymore": {
    "odds": "20/80"
   },
   "fists-of-avalon": {
    "odds": "20/80"
   },
   "rotcaller-staff": {
    "odds": "20/80"
   },
   "heavy-crossbow": {
    "odds": "20/80"
   },
   "broadsword": {
    "odds": "20/80"
   },
   "lifecurse-staff": {
    "odds": "20/80"
   },
   "greataxe": {
    "odds": "20/80"
   },
   "kingmaker": {
    "odds": "20/80"
   },
   "cursed-staff": {
    "odds": "20/80"
   },
   "great-holy-staff": {
    "odds": "20/80"
   },
   "pike": {
    "odds": "20/80"
   },
   "hellfire-hands": {
    "odds": "20/80"
   },
   "crystal-reaper": {
    "odds": "20/80"
   },
   "carrioncaller": {
    "odds": "20/80"
   },
   "forcepulse-bracers": {
    "odds": "20/80"
   },
   "ironroot-staff": {
    "odds": "20/80"
   },
   "carving-sword": {
    "odds": "20/80"
   },
   "divine-staff": {
    "odds": "20/80"
   },
   "twin-slayers": {
    "odds": "20/80"
   },
   "deathgivers": {
    "odds": "20/80"
   },
   "dagger-pair": {
    "odds": "20/80"
   },
   "wildfire-staff": {
    "odds": "20/80"
   },
   "battleaxe": {
    "odds": "20/80"
   },
   "bear-paws": {
    "odds": "20/80"
   },
   "great-fire-staff": {
    "odds": "20/80"
   },
   "daybreaker": {
    "odds": "20/80"
   }
  }
 },
 "mistpiercer": {
  "stun": {
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   },
   "staff-of-balance": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   }
  },
  "heal": {
   "holy-staff": {
    "odds": "20/80"
   },
   "demonic-staff": {
    "odds": "20/80"
   },
   "prowling-staff": {
    "odds": "20/80"
   },
   "arclight-blasters": {
    "odds": "20/80"
   },
   "hellspawn-staff": {
    "odds": "10/90"
   },
   "glaive": {
    "odds": "20/80"
   },
   "claymore": {
    "odds": "20/80"
   },
   "fists-of-avalon": {
    "odds": "20/80"
   },
   "rotcaller-staff": {
    "odds": "20/80"
   },
   "heavy-crossbow": {
    "odds": "20/80"
   },
   "broadsword": {
    "odds": "20/80"
   },
   "lifecurse-staff": {
    "odds": "20/80"
   },
   "greataxe": {
    "odds": "20/80"
   },
   "kingmaker": {
    "odds": "20/80"
   },
   "cursed-staff": {
    "odds": "20/80"
   },
   "great-holy-staff": {
    "odds": "20/80"
   },
   "pike": {
    "odds": "20/80"
   },
   "hellfire-hands": {
    "odds": "20/80"
   },
   "crystal-reaper": {
    "odds": "20/80"
   },
   "carrioncaller": {
    "odds": "20/80"
   },
   "forcepulse-bracers": {
    "odds": "20/80"
   },
   "ironroot-staff": {
    "odds": "20/80"
   },
   "carving-sword": {
    "odds": "20/80"
   },
   "divine-staff": {
    "odds": "20/80"
   },
   "twin-slayers": {
    "odds": "20/80"
   },
   "deathgivers": {
    "odds": "20/80"
   },
   "dagger-pair": {
    "odds": "20/80"
   },
   "wildfire-staff": {
    "odds": "20/80"
   },
   "battleaxe": {
    "odds": "20/80"
   },
   "bear-paws": {
    "odds": "20/80"
   },
   "great-fire-staff": {
    "odds": "20/80"
   },
   "daybreaker": {
    "odds": "20/80"
   }
  }
 },
 "soulscythe": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "crossbow": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "spirithunter": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "hellfire-hands-stun": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "great-arcane-staff": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "tombhammer": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "great-fire-staff-stun": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "permafrost-prism": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "staff-of-balance": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "energy-shaper": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "glacial-staff": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "blazing-staff": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "grailseeker": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "realmbreaker": {
  "double": {
   "warbow": {
    "odds": "30/70"
   },
   "brawler-gloves": {
    "odds": "30/70"
   },
   "bloodletter-double": {
    "odds": "30/70"
   },
   "dagger-pair-double": {
    "odds": "30/70"
   },
   "carrioncaller-double": {
    "odds": "30/70"
   },
   "ursine-maulers": {
    "odds": "30/70"
   },
   "heron-spear": {
    "odds": "30/70"
   },
   "whispering-bow": {
    "odds": "30/70"
   },
   "mistpiercer": {
    "odds": "30/70"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "70/30"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "70/30"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "70/30"
   },
   "kingmaker": {
    "odds": "70/30"
   },
   "cursed-staff": {
    "odds": "70/30"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "odds": "70/30"
   },
   "forcepulse-bracers": {
    "odds": "70/30"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "odds": "70/30"
   },
   "deathgivers": {
    "odds": "70/30"
   },
   "wildfire-staff": {
    "odds": "70/30"
   },
   "battleaxe": {
    "odds": "70/30"
   },
   "daybreaker": {
    "odds": "70/30"
   },
   "ironroot-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   },
   "broadsword": {
    "odds": "30/70"
   },
   "lifecurse-staff": {
    "odds": "30/70"
   },
   "pike": {
    "odds": "30/70"
   },
   "hellfire-hands": {
    "odds": "30/70"
   },
   "crystal-reaper": {
    "odds": "30/70"
   },
   "carving-sword": {
    "odds": "30/70"
   },
   "dagger-pair": {
    "odds": "30/70"
   },
   "bear-paws": {
    "odds": "30/70"
   },
   "great-fire-staff": {
    "odds": "30/70"
   }
  }
 },
 "holy-staff": {
  "stun": {
   "staff-of-balance": {
    "text": "Depends on the dps"
   },
   "dagger": {
    "text": "Depends on the dps"
   },
   "soulscythe": {
    "text": "Depends on the dps"
   },
   "energy-shaper": {
    "text": "Depends on the dps"
   },
   "glacial-staff": {
    "text": "Depends on the dps"
   },
   "blazing-staff": {
    "text": "Depends on the dps"
   },
   "bloodletter": {
    "text": "Depends on the dps"
   },
   "crossbow": {
    "text": "Depends on the dps"
   },
   "grailseeker": {
    "text": "Depends on the dps"
   },
   "realmbreaker": {
    "text": "Depends on the dps"
   },
   "spirithunter": {
    "text": "Depends on the dps"
   },
   "hellfire-hands-stun": {
    "text": "Depends on the dps"
   },
   "great-arcane-staff": {
    "text": "Depends on the dps"
   },
   "tombhammer": {
    "text": "Depends on the dps"
   },
   "great-fire-staff-stun": {
    "text": "Depends on the dps"
   },
   "permafrost-prism": {
    "text": "Depends on the dps"
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "demonic-staff": {
    "text": "Depends on the dps"
   },
   "prowling-staff": {
    "text": "Depends on the dps"
   },
   "arclight-blasters": {
    "text": "Depends on the dps"
   },
   "hellspawn-staff": {
    "text": "Depends on the dps"
   },
   "glaive": {
    "text": "Depends on the dps"
   },
   "claymore": {
    "text": "Depends on the dps"
   },
   "fists-of-avalon": {
    "text": "Depends on the dps"
   },
   "rotcaller-staff": {
    "text": "Depends on the dps"
   },
   "heavy-crossbow": {
    "text": "Depends on the dps"
   },
   "broadsword": {
    "text": "Depends on the dps"
   },
   "lifecurse-staff": {
    "text": "Depends on the dps"
   },
   "greataxe": {
    "text": "Depends on the dps"
   },
   "kingmaker": {
    "text": "Depends on the dps"
   },
   "cursed-staff": {
    "text": "Depends on the dps"
   },
   "great-holy-staff": {
    "text": "Depends on the dps"
   },
   "pike": {
    "text": "Depends on the dps"
   },
   "hellfire-hands": {
    "text": "Depends on the dps"
   },
   "crystal-reaper": {
    "text": "Depends on the dps"
   },
   "carrioncaller": {
    "text": "Depends on the dps"
   },
   "forcepulse-bracers": {
    "text": "Depends on the dps"
   },
   "ironroot-staff": {
    "text": "Depends on the dps"
   },
   "carving-sword": {
    "text": "Depends on the dps"
   },
   "divine-staff": {
    "text": "Depends on the dps"
   },
   "twin-slayers": {
    "text": "Depends on the dps"
   },
   "deathgivers": {
    "text": "Depends on the dps"
   },
   "dagger-pair": {
    "text": "Depends on the dps"
   },
   "wildfire-staff": {
    "text": "Depends on the dps"
   },
   "battleaxe": {
    "text": "Depends on the dps"
   },
   "bear-paws": {
    "text": "Depends on the dps"
   },
   "great-fire-staff": {
    "text": "Depends on the dps"
   },
   "daybreaker": {
    "text": "Depends on the dps"
   }
  }
 },
 "demonic-staff": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "hellspawn-staff": {
    "odds": "60/40",
    "note": "40/60 if the imp waits for lava."
   },
   "arclight-blasters": {
    "odds": "60/40"
   },
   "prowling-staff": {
    "odds": "60/40"
   },
   "glaive": {
    "odds": "50/50"
   },
   "claymore": {
    "odds": "60/40"
   },
   "fists-of-avalon": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "60/40"
   },
   "heavy-crossbow": {
    "odds": "60/40"
   },
   "broadsword": {
    "odds": "70/30"
   },
   "lifecurse-staff": {
    "odds": "50/50"
   },
   "greataxe": {
    "odds": "80/20"
   },
   "kingmaker": {
    "odds": "60/40"
   }
  }
 },
 "prowling-staff": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70"
   },
   "dagger": {
    "odds": "30/70"
   },
   "soulscythe": {
    "odds": "30/70"
   },
   "energy-shaper": {
    "odds": "30/70"
   },
   "glacial-staff": {
    "odds": "30/70"
   },
   "blazing-staff": {
    "odds": "30/70"
   },
   "bloodletter": {
    "odds": "30/70"
   },
   "crossbow": {
    "odds": "30/70"
   },
   "grailseeker": {
    "odds": "30/70"
   },
   "realmbreaker": {
    "odds": "30/70"
   },
   "spirithunter": {
    "odds": "30/70"
   },
   "hellfire-hands-stun": {
    "odds": "30/70"
   },
   "great-arcane-staff": {
    "odds": "30/70"
   },
   "tombhammer": {
    "odds": "30/70"
   },
   "great-fire-staff-stun": {
    "odds": "30/70"
   },
   "permafrost-prism": {
    "odds": "30/70"
   }
  },
  "double": {
   "warbow": {
    "odds": "60/40"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "40/60"
   },
   "arclight-blasters": {
    "odds": "60/40"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "50/50"
   },
   "claymore": {
    "odds": "50/50"
   },
   "fists-of-avalon": {
    "odds": "60/40"
   },
   "rotcaller-staff": {
    "odds": "60/40"
   },
   "heavy-crossbow": {
    "odds": "50/50"
   },
   "broadsword": {
    "odds": "60/40"
   },
   "lifecurse-staff": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "50/50"
   },
   "kingmaker": {
    "odds": "40/60"
   }
  }
 },
 "arclight-blasters": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70"
   },
   "dagger": {
    "odds": "30/70"
   },
   "soulscythe": {
    "odds": "30/70"
   },
   "energy-shaper": {
    "odds": "30/70"
   },
   "glacial-staff": {
    "odds": "30/70"
   },
   "blazing-staff": {
    "odds": "30/70"
   },
   "bloodletter": {
    "odds": "30/70"
   },
   "crossbow": {
    "odds": "30/70"
   },
   "grailseeker": {
    "odds": "30/70"
   },
   "realmbreaker": {
    "odds": "30/70"
   },
   "spirithunter": {
    "odds": "30/70"
   },
   "hellfire-hands-stun": {
    "odds": "30/70"
   },
   "great-arcane-staff": {
    "odds": "30/70"
   },
   "tombhammer": {
    "odds": "30/70"
   },
   "great-fire-staff-stun": {
    "odds": "30/70"
   },
   "permafrost-prism": {
    "odds": "30/70"
   }
  },
  "double": {
   "warbow": {
    "odds": "60/40"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "40/60"
   },
   "prowling-staff": {
    "odds": "40/60"
   },
   "hellspawn-staff": {
    "odds": "40/60"
   },
   "glaive": {
    "odds": "60/40"
   },
   "claymore": {
    "odds": "60/40"
   },
   "fists-of-avalon": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "50/50"
   },
   "heavy-crossbow": {
    "odds": "50/50"
   },
   "broadsword": {
    "odds": "40/60"
   },
   "lifecurse-staff": {
    "odds": "60/40"
   },
   "greataxe": {
    "odds": "80/20"
   },
   "kingmaker": {
    "odds": "70/30"
   }
  }
 },
 "hellspawn-staff": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "90/10"
   },
   "bloodletter-double": {
    "odds": "90/10"
   },
   "dagger-pair-double": {
    "odds": "90/10"
   },
   "carrioncaller-double": {
    "odds": "90/10"
   },
   "ursine-maulers": {
    "odds": "90/10"
   },
   "heron-spear": {
    "odds": "90/10"
   },
   "whispering-bow": {
    "odds": "90/10"
   },
   "mistpiercer": {
    "odds": "90/10"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "40/60",
    "note": "60/40 if the imp waits for lava."
   },
   "prowling-staff": {
    "odds": "70/30"
   },
   "arclight-blasters": {
    "odds": "60/40"
   },
   "glaive": {
    "odds": "70/30"
   },
   "claymore": {
    "odds": "70/30"
   },
   "fists-of-avalon": {
    "odds": "50/50"
   },
   "rotcaller-staff": {
    "odds": "30/70"
   },
   "heavy-crossbow": {
    "odds": "40/60"
   },
   "broadsword": {
    "odds": "70/30"
   },
   "lifecurse-staff": {
    "odds": "60/40"
   },
   "greataxe": {
    "odds": "50/50"
   },
   "kingmaker": {
    "odds": "70/30"
   }
  }
 },
 "glaive": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70"
   },
   "dagger": {
    "odds": "30/70"
   },
   "soulscythe": {
    "odds": "30/70"
   },
   "energy-shaper": {
    "odds": "30/70"
   },
   "glacial-staff": {
    "odds": "30/70"
   },
   "blazing-staff": {
    "odds": "30/70"
   },
   "bloodletter": {
    "odds": "30/70"
   },
   "crossbow": {
    "odds": "30/70"
   },
   "grailseeker": {
    "odds": "30/70"
   },
   "realmbreaker": {
    "odds": "30/70"
   },
   "spirithunter": {
    "odds": "30/70"
   },
   "hellfire-hands-stun": {
    "odds": "30/70"
   },
   "great-arcane-staff": {
    "odds": "30/70"
   },
   "tombhammer": {
    "odds": "30/70"
   },
   "great-fire-staff-stun": {
    "odds": "30/70"
   },
   "permafrost-prism": {
    "odds": "30/70"
   }
  },
  "double": {
   "warbow": {
    "odds": "60/40"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "50/50"
   },
   "prowling-staff": {
    "odds": "50/50"
   },
   "arclight-blasters": {
    "odds": "40/60"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "claymore": {
    "odds": "50/50"
   },
   "fists-of-avalon": {
    "odds": "40/60"
   },
   "rotcaller-staff": {
    "odds": "60/40"
   },
   "heavy-crossbow": {
    "odds": "50/50"
   },
   "broadsword": {
    "odds": "60/40"
   },
   "lifecurse-staff": {
    "odds": "70/30"
   },
   "greataxe": {
    "odds": "60/40"
   },
   "kingmaker": {
    "odds": "50/50"
   }
  }
 },
 "claymore": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "dagger": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "soulscythe": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "energy-shaper": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "glacial-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "blazing-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "bloodletter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "crossbow": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "grailseeker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "realmbreaker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "spirithunter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "hellfire-hands-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-arcane-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "tombhammer": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-fire-staff-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "permafrost-prism": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "40/60"
   },
   "prowling-staff": {
    "odds": "50/50"
   },
   "arclight-blasters": {
    "odds": "40/60"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "50/50"
   },
   "fists-of-avalon": {
    "odds": "50/50"
   },
   "rotcaller-staff": {
    "odds": "50/50"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "broadsword": {
    "odds": "60/40"
   },
   "lifecurse-staff": {
    "odds": "50/50"
   },
   "greataxe": {
    "odds": "60/40"
   },
   "kingmaker": {
    "odds": "60/40"
   }
  }
 },
 "fists-of-avalon": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "60/40"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "prowling-staff": {
    "odds": "40/60"
   },
   "arclight-blasters": {
    "odds": "30/70"
   },
   "hellspawn-staff": {
    "odds": "50/50"
   },
   "glaive": {
    "odds": "60/40"
   },
   "claymore": {
    "odds": "50/50"
   },
   "heavy-crossbow": {
    "odds": "70/30"
   },
   "rotcaller-staff": {
    "odds": "40/60"
   },
   "broadsword": {
    "odds": "60/40"
   },
   "lifecurse-staff": {
    "odds": "60/40"
   },
   "greataxe": {
    "odds": "50/50"
   },
   "kingmaker": {
    "odds": "40/60"
   }
  }
 },
 "rotcaller-staff": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "dagger": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "soulscythe": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "energy-shaper": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "glacial-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "blazing-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "bloodletter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "crossbow": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "grailseeker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "realmbreaker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "spirithunter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "hellfire-hands-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-arcane-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "tombhammer": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-fire-staff-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "permafrost-prism": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "40/60"
   },
   "prowling-staff": {
    "odds": "40/60"
   },
   "arclight-blasters": {
    "odds": "50/50"
   },
   "hellspawn-staff": {
    "odds": "70/30"
   },
   "glaive": {
    "odds": "40/60"
   },
   "claymore": {
    "odds": "50/50"
   },
   "heavy-crossbow": {
    "odds": "50/50"
   },
   "broadsword": {
    "odds": "60/40"
   },
   "lifecurse-staff": {
    "odds": "40/60"
   },
   "greataxe": {
    "odds": "60/40"
   },
   "kingmaker": {
    "odds": "50/50"
   },
   "fists-of-avalon": {
    "odds": "60/40"
   }
  }
 },
 "heavy-crossbow": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70"
   },
   "dagger": {
    "odds": "30/70"
   },
   "soulscythe": {
    "odds": "30/70"
   },
   "energy-shaper": {
    "odds": "30/70"
   },
   "glacial-staff": {
    "odds": "30/70"
   },
   "blazing-staff": {
    "odds": "30/70"
   },
   "bloodletter": {
    "odds": "30/70"
   },
   "crossbow": {
    "odds": "30/70"
   },
   "grailseeker": {
    "odds": "30/70"
   },
   "realmbreaker": {
    "odds": "30/70"
   },
   "spirithunter": {
    "odds": "30/70"
   },
   "hellfire-hands-stun": {
    "odds": "30/70"
   },
   "great-arcane-staff": {
    "odds": "30/70"
   },
   "tombhammer": {
    "odds": "30/70"
   },
   "great-fire-staff-stun": {
    "odds": "30/70"
   },
   "permafrost-prism": {
    "odds": "30/70"
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "40/60"
   },
   "prowling-staff": {
    "odds": "50/50"
   },
   "arclight-blasters": {
    "odds": "50/50"
   },
   "hellspawn-staff": {
    "odds": "60/40"
   },
   "glaive": {
    "odds": "50/50"
   },
   "claymore": {
    "odds": "30/70"
   },
   "rotcaller-staff": {
    "odds": "50/50"
   },
   "broadsword": {
    "odds": "50/50"
   },
   "lifecurse-staff": {
    "odds": "60/40"
   },
   "greataxe": {
    "odds": "60/40"
   },
   "kingmaker": {
    "odds": "50/50"
   },
   "fists-of-avalon": {
    "odds": "30/70"
   }
  }
 },
 "broadsword": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "60/40"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "30/70"
   },
   "prowling-staff": {
    "odds": "40/60"
   },
   "arclight-blasters": {
    "odds": "60/40"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "40/60"
   },
   "claymore": {
    "odds": "40/60"
   },
   "rotcaller-staff": {
    "odds": "40/60"
   },
   "heavy-crossbow": {
    "odds": "50/50"
   },
   "lifecurse-staff": {
    "odds": "40/60"
   },
   "greataxe": {
    "odds": "40/60"
   },
   "kingmaker": {
    "odds": "40/60"
   },
   "fists-of-avalon": {
    "odds": "40/60"
   }
  }
 },
 "lifecurse-staff": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "50/50"
   },
   "prowling-staff": {
    "odds": "30/70"
   },
   "arclight-blasters": {
    "odds": "40/60"
   },
   "hellspawn-staff": {
    "odds": "40/60"
   },
   "glaive": {
    "odds": "30/70"
   },
   "claymore": {
    "odds": "50/50"
   },
   "rotcaller-staff": {
    "odds": "60/40"
   },
   "heavy-crossbow": {
    "odds": "40/60"
   },
   "broadsword": {
    "odds": "60/40"
   },
   "greataxe": {
    "odds": "40/60"
   },
   "kingmaker": {
    "odds": "60/40"
   },
   "fists-of-avalon": {
    "odds": "40/60"
   }
  }
 },
 "greataxe": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "dagger": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "soulscythe": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "energy-shaper": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "glacial-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "blazing-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "bloodletter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "crossbow": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "grailseeker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "realmbreaker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "spirithunter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "hellfire-hands-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-arcane-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "tombhammer": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-fire-staff-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "permafrost-prism": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "20/80"
   },
   "prowling-staff": {
    "odds": "50/50"
   },
   "arclight-blasters": {
    "odds": "20/80"
   },
   "hellspawn-staff": {
    "odds": "50/50"
   },
   "glaive": {
    "odds": "40/60"
   },
   "claymore": {
    "odds": "40/60"
   },
   "rotcaller-staff": {
    "odds": "40/60"
   },
   "heavy-crossbow": {
    "odds": "40/60"
   },
   "broadsword": {
    "odds": "60/40"
   },
   "lifecurse-staff": {
    "odds": "60/40"
   },
   "kingmaker": {
    "odds": "40/60"
   },
   "fists-of-avalon": {
    "odds": "50/50"
   }
  }
 },
 "kingmaker": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "dagger": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "soulscythe": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "energy-shaper": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "glacial-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "blazing-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "bloodletter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "crossbow": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "grailseeker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "realmbreaker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "spirithunter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "hellfire-hands-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-arcane-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "tombhammer": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-fire-staff-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "permafrost-prism": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   },
   "demonic-staff": {
    "odds": "40/60"
   },
   "prowling-staff": {
    "odds": "60/40"
   },
   "arclight-blasters": {
    "odds": "30/70"
   },
   "hellspawn-staff": {
    "odds": "30/70"
   },
   "glaive": {
    "odds": "50/50"
   },
   "claymore": {
    "odds": "40/60"
   },
   "rotcaller-staff": {
    "odds": "50/50"
   },
   "heavy-crossbow": {
    "odds": "50/50"
   },
   "broadsword": {
    "odds": "60/40"
   },
   "lifecurse-staff": {
    "odds": "40/60"
   },
   "greataxe": {
    "odds": "60/40"
   },
   "fists-of-avalon": {
    "odds": "60/40"
   }
  }
 },
 "cursed-staff": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "dagger": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "soulscythe": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "energy-shaper": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "glacial-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "blazing-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "bloodletter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "crossbow": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "grailseeker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "realmbreaker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "spirithunter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "hellfire-hands-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-arcane-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "tombhammer": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-fire-staff-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "permafrost-prism": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   }
  },
  "double": {
   "warbow": {
    "odds": "60/40"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "great-holy-staff": {
  "stun": {
   "staff-of-balance": {
    "text": "Depends on the dps"
   },
   "dagger": {
    "text": "Depends on the dps"
   },
   "soulscythe": {
    "text": "Depends on the dps"
   },
   "energy-shaper": {
    "text": "Depends on the dps"
   },
   "glacial-staff": {
    "text": "Depends on the dps"
   },
   "blazing-staff": {
    "text": "Depends on the dps"
   },
   "bloodletter": {
    "text": "Depends on the dps"
   },
   "crossbow": {
    "text": "Depends on the dps"
   },
   "grailseeker": {
    "text": "Depends on the dps"
   },
   "realmbreaker": {
    "text": "Depends on the dps"
   },
   "spirithunter": {
    "text": "Depends on the dps"
   },
   "hellfire-hands-stun": {
    "text": "Depends on the dps"
   },
   "great-arcane-staff": {
    "text": "Depends on the dps"
   },
   "tombhammer": {
    "text": "Depends on the dps"
   },
   "great-fire-staff-stun": {
    "text": "Depends on the dps"
   },
   "permafrost-prism": {
    "text": "Depends on the dps"
   }
  },
  "double": {
   "warbow": {
    "odds": "60/40"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "pike": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "60/40"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "hellfire-hands": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "60/40"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "crystal-reaper": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "carrioncaller": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "dagger": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "soulscythe": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "energy-shaper": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "glacial-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "blazing-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "bloodletter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "crossbow": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "grailseeker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "realmbreaker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "spirithunter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "hellfire-hands-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-arcane-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "tombhammer": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-fire-staff-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "permafrost-prism": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "forcepulse-bracers": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "dagger": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "soulscythe": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "energy-shaper": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "glacial-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "blazing-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "bloodletter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "crossbow": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "grailseeker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "realmbreaker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "spirithunter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "hellfire-hands-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-arcane-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "tombhammer": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-fire-staff-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "permafrost-prism": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "ironroot-staff": {
  "stun": {
   "staff-of-balance": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "dagger": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "soulscythe": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "energy-shaper": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "glacial-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "blazing-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "bloodletter": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "crossbow": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "grailseeker": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "realmbreaker": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "spirithunter": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "hellfire-hands-stun": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "great-arcane-staff": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "tombhammer": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "great-fire-staff-stun": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   },
   "permafrost-prism": {
    "odds": "50/50",
    "note": "Depends on the dps alongside it."
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "carving-sword": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "divine-staff": {
  "stun": {
   "staff-of-balance": {
    "text": "Depends on the dps"
   },
   "dagger": {
    "text": "Depends on the dps"
   },
   "soulscythe": {
    "text": "Depends on the dps"
   },
   "energy-shaper": {
    "text": "Depends on the dps"
   },
   "glacial-staff": {
    "text": "Depends on the dps"
   },
   "blazing-staff": {
    "text": "Depends on the dps"
   },
   "bloodletter": {
    "text": "Depends on the dps"
   },
   "crossbow": {
    "text": "Depends on the dps"
   },
   "grailseeker": {
    "text": "Depends on the dps"
   },
   "realmbreaker": {
    "text": "Depends on the dps"
   },
   "spirithunter": {
    "text": "Depends on the dps"
   },
   "hellfire-hands-stun": {
    "text": "Depends on the dps"
   },
   "great-arcane-staff": {
    "text": "Depends on the dps"
   },
   "tombhammer": {
    "text": "Depends on the dps"
   },
   "great-fire-staff-stun": {
    "text": "Depends on the dps"
   },
   "permafrost-prism": {
    "text": "Depends on the dps"
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "twin-slayers": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "dagger": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "soulscythe": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "energy-shaper": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "glacial-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "blazing-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "bloodletter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "crossbow": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "grailseeker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "realmbreaker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "spirithunter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "hellfire-hands-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-arcane-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "tombhammer": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-fire-staff-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "permafrost-prism": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "deathgivers": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "dagger": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "soulscythe": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "energy-shaper": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "glacial-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "blazing-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "bloodletter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "crossbow": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "grailseeker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "realmbreaker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "spirithunter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "hellfire-hands-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-arcane-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "tombhammer": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-fire-staff-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "permafrost-prism": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "dagger-pair": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "wildfire-staff": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "dagger": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "soulscythe": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "energy-shaper": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "glacial-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "blazing-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "bloodletter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "crossbow": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "grailseeker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "realmbreaker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "spirithunter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "hellfire-hands-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-arcane-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "tombhammer": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-fire-staff-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "permafrost-prism": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   }
  },
  "double": {
   "warbow": {
    "odds": "60/40"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "battleaxe": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "dagger": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "soulscythe": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "energy-shaper": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "glacial-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "blazing-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "bloodletter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "crossbow": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "grailseeker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "realmbreaker": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "spirithunter": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "hellfire-hands-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-arcane-staff": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "tombhammer": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "great-fire-staff-stun": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   },
   "permafrost-prism": {
    "odds": "30/70",
    "note": "50/50 if playing with the Ironroot Staff."
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "bear-paws": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "60/40"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "great-fire-staff": {
  "stun": {
   "staff-of-balance": {
    "odds": "70/30"
   },
   "dagger": {
    "odds": "70/30"
   },
   "soulscythe": {
    "odds": "70/30"
   },
   "energy-shaper": {
    "odds": "70/30"
   },
   "glacial-staff": {
    "odds": "70/30"
   },
   "blazing-staff": {
    "odds": "70/30"
   },
   "bloodletter": {
    "odds": "70/30"
   },
   "crossbow": {
    "odds": "70/30"
   },
   "grailseeker": {
    "odds": "70/30"
   },
   "realmbreaker": {
    "odds": "70/30"
   },
   "spirithunter": {
    "odds": "70/30"
   },
   "hellfire-hands-stun": {
    "odds": "70/30"
   },
   "great-arcane-staff": {
    "odds": "70/30"
   },
   "tombhammer": {
    "odds": "70/30"
   },
   "great-fire-staff-stun": {
    "odds": "70/30"
   },
   "permafrost-prism": {
    "odds": "70/30"
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 },
 "daybreaker": {
  "stun": {
   "staff-of-balance": {
    "odds": "30/70"
   },
   "dagger": {
    "odds": "30/70"
   },
   "soulscythe": {
    "odds": "30/70"
   },
   "energy-shaper": {
    "odds": "30/70"
   },
   "glacial-staff": {
    "odds": "30/70"
   },
   "blazing-staff": {
    "odds": "30/70"
   },
   "bloodletter": {
    "odds": "30/70"
   },
   "crossbow": {
    "odds": "30/70"
   },
   "grailseeker": {
    "odds": "30/70"
   },
   "realmbreaker": {
    "odds": "30/70"
   },
   "spirithunter": {
    "odds": "30/70"
   },
   "hellfire-hands-stun": {
    "odds": "30/70"
   },
   "great-arcane-staff": {
    "odds": "30/70"
   },
   "tombhammer": {
    "odds": "30/70"
   },
   "great-fire-staff-stun": {
    "odds": "30/70"
   },
   "permafrost-prism": {
    "odds": "30/70"
   }
  },
  "double": {
   "warbow": {
    "odds": "80/20"
   },
   "brawler-gloves": {
    "odds": "80/20"
   },
   "bloodletter-double": {
    "odds": "80/20"
   },
   "dagger-pair-double": {
    "odds": "80/20"
   },
   "carrioncaller-double": {
    "odds": "80/20"
   },
   "ursine-maulers": {
    "odds": "80/20"
   },
   "heron-spear": {
    "odds": "80/20"
   },
   "whispering-bow": {
    "odds": "80/20"
   },
   "mistpiercer": {
    "odds": "80/20"
   }
  },
  "heal": {
   "holy-staff": {
    "text": "Depends on the dps"
   }
  }
 }
};
