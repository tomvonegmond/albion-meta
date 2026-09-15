/* ===========================================================
   Albion Meta - gear that changes for one matchup
   -----------------------------------------------------------
   The gear window knows who you are up against when it is
   opened from a matchup row, so a piece can read differently
   for that fight alone.

     "<your build key>": {
       "<their weapon name>": {
         "picks": { "shoes": { "Spell": 1 } },
         "note": "why"
       }
     }

   As it stands:
     dodge roll on the F slot into the Claymore, except
       Prowling Staff, Hellspawn Staff, Greataxe, Kingmaker
     dodge roll into the Hellspawn Staff, except
       Fists of Avalon, Greataxe, Kingmaker
     dodge roll into the Arclight Blasters, everyone
     Hellspawn Staff takes Bear Trap on the Skinner Cap into
       Demonic Staff, Lifecurse Staff and Rotcaller Staff
     Arclight Blasters and Heavy Crossbow dodge into the
       Lifecurse and Rotcaller staffs, not the Demonic
     dodge roll into the Prowling Staff, except Greataxe,
       Kingmaker and Broadsword
     the healer, Holy Staff, has its own answers: Holy Beam on
       W into the Demonic, Arclight, Hellspawn, Rotcaller,
       Heavy Crossbow and Lifecurse; Ascended into the Demonic
       and Heavy Crossbow; Refreshing Sprint on the boots into
       the Demonic, Glaive, Rotcaller and Lifecurse; Frost
       Shield on the robe into the Hellspawn, Prowling, Fists
       of Avalon, Heavy Crossbow, Arclight and Greataxe;
       Sacred Pulse on W into the Broadsword with Ascended,
       and into the Fists of Avalon with the first passive
     the healer against stun dps: Holy Beam, first passive,
       robe 3, cowl 2, boots 2, except into the Bloodletter and
       the Crossbow, which want W3, boots 1 and robe 3
     the healer against double dps: W3, first passive, boots 3,
       cowl 2, robe 2, but W2 into the Warbow
     every heal dps build facing stun dps: boots 3 on Mercenary
       Shoes, boots 2 otherwise, boots 1 into the Bloodletter
       and the Crossbow, second spell on a leather hood, and a
       weapon pick of its own
     facing double dps everyone but the healer takes the dodge
       roll, robe 2 and helmet 1, with a weapon pick of its own
     the spears drop back to Deflecting Spin, W4, into double
       dps: the Glaive, the Pike and the Spirithunter. Impaler,
       W5, is the spear pick everywhere else. The Heron Spear
       keeps its own W1 and is not in here
     everyone drinks a cleansing potion into stun dps and a
       resistance potion into double dps
     the healer swaps its potion: cleansing into the Demonic,
       Rotcaller and Lifecurse, tornado into the Broadsword and
       the Greataxe
     the Demonic and the Lifecurse run Refreshing Sprint by
       default, so they take it into every heal dps that is not
       one of the four dodge roll matchups above. That default
       lives on the build in builds.js, not here, which is why
       there is no entry per opponent for it
   =========================================================== */

window.ALBION_VS_GEAR = {
 "holy-staff": {
  "heal": {
   "Claymore": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Claymore."
    }
   },
   "Hellspawn Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 2
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Hellspawn Staff.",
     "weapon": "Holy Beam on W.",
     "chest": "Frost Shield on the robe."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 2
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters.",
     "weapon": "Holy Beam on W.",
     "chest": "Frost Shield on the robe."
    }
   },
   "Prowling Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Prowling Staff.",
     "chest": "Frost Shield on the robe."
    }
   },
   "Demonic Staff": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 4
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W. Ascended as the passive.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into the Demonic Staff."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Rotcaller Staff": {
    "picks": {
     "weapon": {
      "W": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into the Rotcaller Staff."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Heavy Crossbow": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 4
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W. Ascended as the passive.",
     "chest": "Frost Shield on the robe."
    }
   },
   "Lifecurse Staff": {
    "picks": {
     "weapon": {
      "W": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into the Lifecurse Staff."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glaive": {
    "picks": {
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots."
    }
   },
   "Broadsword": {
    "picks": {
     "weapon": {
      "W": 1,
      "Passive": 4
     }
    },
    "notes": {
     "weapon": "Sacred Pulse on W, Ascended as the passive.",
     "potion": "Tornado into the Broadsword."
    },
    "items": {
     "potion": {
      "id": "T8_POTION_TORNADO",
      "name": "Major Tornado in a Bottle"
     }
    }
   },
   "Fists of Avalon": {
    "picks": {
     "weapon": {
      "W": 1,
      "Passive": 1
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Sacred Pulse on W, Adrenaline Driven Charity as the passive.",
     "chest": "Frost Shield on the robe."
    }
   },
   "Greataxe": {
    "picks": {
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "chest": "Frost Shield on the robe.",
     "potion": "Tornado into the Greataxe."
    },
    "items": {
     "potion": {
      "id": "T8_POTION_TORNADO",
      "name": "Major Tornado in a Bottle"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "shoes": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "shoes": "After Image on the boots.",
     "head": "Force Field on the cowl.",
     "chest": "Frost Shield on the robe.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "weapon": {
      "W": 3,
      "Passive": 1
     },
     "shoes": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Blessing on W, Adrenaline Driven Charity as the passive.",
     "shoes": "After Image on the boots.",
     "head": "Force Field on the cowl.",
     "chest": "Frost Shield on the robe.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "weapon": {
      "W": 3,
      "Passive": 1
     },
     "shoes": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Blessing on W, Adrenaline Driven Charity as the passive.",
     "shoes": "After Image on the boots.",
     "head": "Force Field on the cowl.",
     "chest": "Frost Shield on the robe.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "weapon": {
      "W": 3,
      "Passive": 1
     },
     "shoes": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Blessing on W, Adrenaline Driven Charity as the passive.",
     "shoes": "After Image on the boots.",
     "head": "Force Field on the cowl.",
     "chest": "Frost Shield on the robe.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "weapon": {
      "W": 3,
      "Passive": 1
     },
     "shoes": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Blessing on W, Adrenaline Driven Charity as the passive.",
     "shoes": "After Image on the boots.",
     "head": "Force Field on the cowl.",
     "chest": "Frost Shield on the robe.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "weapon": {
      "W": 3,
      "Passive": 1
     },
     "shoes": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Blessing on W, Adrenaline Driven Charity as the passive.",
     "shoes": "After Image on the boots.",
     "head": "Force Field on the cowl.",
     "chest": "Frost Shield on the robe.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "weapon": {
      "W": 3,
      "Passive": 1
     },
     "shoes": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Blessing on W, Adrenaline Driven Charity as the passive.",
     "shoes": "After Image on the boots.",
     "head": "Force Field on the cowl.",
     "chest": "Frost Shield on the robe.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "weapon": {
      "W": 3,
      "Passive": 1
     },
     "shoes": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Blessing on W, Adrenaline Driven Charity as the passive.",
     "shoes": "After Image on the boots.",
     "head": "Force Field on the cowl.",
     "chest": "Frost Shield on the robe.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "weapon": {
      "W": 3,
      "Passive": 1
     },
     "shoes": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Blessing on W, Adrenaline Driven Charity as the passive.",
     "shoes": "After Image on the boots.",
     "head": "Force Field on the cowl.",
     "chest": "Frost Shield on the robe.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "weapon": {
      "W": 3
     },
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 3
     }
    },
    "notes": {
     "weapon": "Holy Blessing on W.",
     "shoes": "Dodge roll on the boots.",
     "chest": "Purging Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "weapon": {
      "W": 3
     },
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 3
     }
    },
    "notes": {
     "weapon": "Holy Blessing on W.",
     "shoes": "Dodge roll on the boots.",
     "chest": "Purging Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "weapon": {
      "W": 2,
      "Passive": 1
     },
     "chest": {
      "Spell": 3
     },
     "head": {
      "Spell": 2
     },
     "shoes": {
      "Spell": 2
     }
    },
    "notes": {
     "weapon": "Holy Beam on W, Adrenaline Driven Charity as the passive.",
     "chest": "Purging Shield on the robe.",
     "head": "Force Field on the cowl.",
     "shoes": "Refreshing Sprint on the boots.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  }
 },
 "demonic-staff": {
  "heal": {
   "Claymore": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Claymore."
    }
   },
   "Hellspawn Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Hellspawn Staff."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   },
   "Prowling Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Prowling Staff."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "arclight-blasters": {
  "heal": {
   "Claymore": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Claymore."
    }
   },
   "Hellspawn Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Hellspawn Staff."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   },
   "Prowling Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Prowling Staff."
    }
   },
   "Lifecurse Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Lifecurse Staff."
    }
   },
   "Rotcaller Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Rotcaller Staff."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "glaive": {
  "heal": {
   "Claymore": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Claymore."
    }
   },
   "Hellspawn Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Hellspawn Staff."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   },
   "Prowling Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Prowling Staff."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Deflecting Spin on W, the reflect.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps.",
     "weapon": "Deflecting Spin on W, the reflect."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps.",
     "weapon": "Deflecting Spin on W, the reflect."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps.",
     "weapon": "Deflecting Spin on W, the reflect."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps.",
     "weapon": "Deflecting Spin on W, the reflect."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps.",
     "weapon": "Deflecting Spin on W, the reflect."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps.",
     "weapon": "Deflecting Spin on W, the reflect."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps.",
     "weapon": "Deflecting Spin on W, the reflect."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps.",
     "weapon": "Deflecting Spin on W, the reflect."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps.",
     "weapon": "Deflecting Spin on W, the reflect."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "claymore": {
  "heal": {
   "Claymore": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Claymore."
    }
   },
   "Hellspawn Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Hellspawn Staff."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   },
   "Prowling Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Prowling Staff."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Splitting Slash on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Splitting Slash on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Splitting Slash on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Splitting Slash on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Splitting Slash on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Splitting Slash on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Splitting Slash on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Splitting Slash on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Splitting Slash on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "fists-of-avalon": {
  "heal": {
   "Claymore": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Claymore."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   },
   "Prowling Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Prowling Staff."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "Q": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Shockwave on Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Create Opening on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Create Opening on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Create Opening on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Create Opening on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Create Opening on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Create Opening on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Create Opening on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Create Opening on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Create Opening on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "rotcaller-staff": {
  "heal": {
   "Claymore": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Claymore."
    }
   },
   "Hellspawn Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Hellspawn Staff."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   },
   "Prowling Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Prowling Staff."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1,
      "Q": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W and Vile Curse on Q.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "heavy-crossbow": {
  "heal": {
   "Claymore": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Claymore."
    }
   },
   "Hellspawn Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Hellspawn Staff."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   },
   "Prowling Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Prowling Staff."
    }
   },
   "Lifecurse Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Lifecurse Staff."
    }
   },
   "Rotcaller Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Rotcaller Staff."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Caltrops on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Explosive Salvo on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "broadsword": {
  "heal": {
   "Claymore": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Claymore."
    }
   },
   "Hellspawn Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Hellspawn Staff."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "head": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "head": "Second spell on the hood.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "lifecurse-staff": {
  "heal": {
   "Claymore": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Claymore."
    }
   },
   "Hellspawn Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Hellspawn Staff."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   },
   "Prowling Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Prowling Staff."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 3
     },
     "weapon": {
      "W": 2,
      "Q": 2
     }
    },
    "notes": {
     "shoes": "Break Free on the boots.",
     "weapon": "Desecrate on W, the root, and the second Q.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Armor Piercer on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "prowling-staff": {
  "heal": {
   "Hellspawn Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Hellspawn Staff."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   },
   "Prowling Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Prowling Staff."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "hellspawn-staff": {
  "heal": {
   "Hellspawn Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Hellspawn Staff."
    }
   },
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   },
   "Prowling Staff": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Prowling Staff."
    }
   },
   "Demonic Staff": {
    "picks": {
     "head": {
      "Spell": 4
     }
    },
    "notes": {
     "head": "Bear Trap on the helmet into the Demonic Staff."
    }
   },
   "Lifecurse Staff": {
    "picks": {
     "head": {
      "Spell": 4
     }
    },
    "notes": {
     "head": "Bear Trap on the helmet into the Lifecurse Staff."
    }
   },
   "Rotcaller Staff": {
    "picks": {
     "head": {
      "Spell": 4
     }
    },
    "notes": {
     "head": "Bear Trap on the helmet into the Rotcaller Staff."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Tether Shift on W.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Polymorph on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Polymorph on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Polymorph on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Polymorph on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Polymorph on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Polymorph on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Polymorph on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Polymorph on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Polymorph on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "greataxe": {
  "heal": {
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3
     },
     "chest": {
      "Spell": 2
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Battle Rush on W.",
     "chest": "Frost Shield on the robe.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Internal Bleeding on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Internal Bleeding on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Internal Bleeding on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Internal Bleeding on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Internal Bleeding on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Internal Bleeding on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Internal Bleeding on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Internal Bleeding on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     },
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "weapon": "Internal Bleeding on W.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "kingmaker": {
  "heal": {
   "Arclight Blasters": {
    "picks": {
     "shoes": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the F slot into the Arclight Blasters."
    }
   }
  },
  "stun": {
   "Staff of Balance": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Dagger": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Soulscythe": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Energy Shaper": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Glacial Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Blazing Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Crossbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Grailseeker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Realmbreaker": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Spirithunter": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Hellfire Hands": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Arcane Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Tombhammer": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Great Fire Staff": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   },
   "Permafrost Prism": {
    "picks": {
     "shoes": {
      "Spell": 2
     },
     "weapon": {
      "W": 3,
      "Passive": 4
     }
    },
    "notes": {
     "shoes": "Refreshing Sprint on the boots.",
     "weapon": "Splitting Slash on W, the root, and the last passive.",
     "potion": "Cleansing potion into stun dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_CLEANSE2",
      "name": "Major Cleansing Potion"
     }
    }
   }
  },
  "double": {
   "Warbow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Brawler Gloves": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Bloodletter": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Dagger Pair": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Carrioncaller": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Ursine Maulers": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Heron Spear": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Whispering Bow": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   },
   "Mistpiercer": {
    "picks": {
     "shoes": {
      "Spell": 1
     },
     "chest": {
      "Spell": 2
     },
     "head": {
      "Spell": 1
     }
    },
    "notes": {
     "shoes": "Dodge roll on the boots.",
     "chest": "Second spell on the robe.",
     "head": "First spell on the helmet.",
     "potion": "Resistance potion into double dps."
    },
    "items": {
     "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
     }
    }
   }
  }
 },
 "pike": {
  "double": {
   "Warbow": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Brawler Gloves": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Bloodletter": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Dagger Pair": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Carrioncaller": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Ursine Maulers": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Heron Spear": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Whispering Bow": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Mistpiercer": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   }
  }
 },
 "spirithunter": {
  "double": {
   "Warbow": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Brawler Gloves": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Bloodletter": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Dagger Pair": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Carrioncaller": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Ursine Maulers": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Heron Spear": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Whispering Bow": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   },
   "Mistpiercer": {
    "picks": {
     "weapon": {
      "W": 4
     }
    },
    "notes": {
     "weapon": "Deflecting Spin on W, the reflect."
    }
   }
  }
 }
};
