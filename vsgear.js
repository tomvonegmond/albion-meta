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
       cowl 2, robe 2
   =========================================================== */

window.ALBION_VS_GEAR = {
 "holy-staff": {
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
    "shoes": "Refreshing Sprint on the boots."
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
    "shoes": "Refreshing Sprint on the boots."
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
    "shoes": "Refreshing Sprint on the boots."
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
    "weapon": "Sacred Pulse on W, Ascended as the passive."
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
    "chest": "Frost Shield on the robe."
   }
  },
  "Warbow": {
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
    "chest": "Frost Shield on the robe."
   }
  },
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
    "shoes": "Refreshing Sprint on the boots."
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
    "shoes": "Refreshing Sprint on the boots."
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
    "shoes": "Refreshing Sprint on the boots."
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
    "shoes": "Refreshing Sprint on the boots."
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
    "shoes": "Refreshing Sprint on the boots."
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
    "shoes": "Refreshing Sprint on the boots."
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
    "chest": "Purging Shield on the robe."
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
    "chest": "Purging Shield on the robe."
   }
  }
 },
 "demonic-staff": {
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
 "arclight-blasters": {
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
 "glaive": {
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
 "claymore": {
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
 "fists-of-avalon": {
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
 "rotcaller-staff": {
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
 "heavy-crossbow": {
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
 "broadsword": {
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
 "lifecurse-staff": {
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
 "prowling-staff": {
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
 "hellspawn-staff": {
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
 "greataxe": {
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
 "kingmaker": {
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
 }
};
