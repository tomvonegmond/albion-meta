/* ===========================================================
   Albion Meta - the gear behind every build
   -----------------------------------------------------------
   One entry per weapon. Click a build on the site and this is
   what the popup shows. To change a piece, swap the "id" for
   another Albion item id and update the "name" beside it.
   Ids are the real game ids and the icons live in icons/, so
   a new id needs its png dropped in there too.
   Leave a slot as null when the build does not use it, which
   is what every two handed weapon does with "offhand".
   Click a piece in the popup and it lists the abilities that
   piece can slot, read from spells.js. To mark the ones a
   build actually takes, add "picks" to that piece, e.g.
     "picks": { "Q": "Deadly Swipe", "Passive": "Deep Cuts" }
   and the popup shows those in white instead of grey.

   Stun builds wear Knight Armor instead of the chest below.

   Damage builds: Fiend Cowl, Robe of Purity, Royal Sandals,
   Thetford Cape, Major Healing Potion, Beef Stew, and a
   Muisak when the weapon is one handed.
   Healers: Royal Cowl, Mage Robe, Mistwalker Shoes, Lymhurst
   Cape, Major Resistance Potion, Leyfin Omelette, and a
   Mistcaller when the weapon is one handed.
   A build can break from those defaults in any slot, which is
   what Demonic, Prowling, Arclight and Hellspawn already do.
   =========================================================== */

window.ALBION_BUILDS = {
  "holy-staff": {
    "name": "Holy Staff",
    "weapon": {
      "id": "T8_MAIN_HOLYSTAFF",
      "name": "Holy Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_ROYAL",
      "name": "Royal Cowl"
    },
    "offhand": {
      "id": "T8_OFF_HORN_KEEPER",
      "name": "Mistcaller"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_FEY",
      "name": "Mistwalker Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_LYMHURST",
      "name": "Lymhurst Cape"
    },
    "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE_DRAGONAREA",
      "name": "Leyfin Omelette"
    }
  },
  "demonic-staff": {
    "name": "Demonic Staff",
    "weapon": {
      "id": "T8_2H_DEMONICSTAFF",
      "name": "Demonic Staff"
    },
    "head": {
      "id": "T8_HEAD_PLATE_AVALON",
      "name": "Helmet of Valor"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET1",
      "name": "Mercenary Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW_FISH",
      "name": "Eel Stew"
    }
  },
  "prowling-staff": {
    "name": "Prowling Staff",
    "weapon": {
      "id": "T8_2H_SHAPESHIFTER_SET1",
      "name": "Prowling Staff"
    },
    "head": {
      "id": "T8_HEAD_PLATE_AVALON",
      "name": "Helmet of Valor"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_AVALON",
      "name": "Shoes of Tenacity"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_CAERLEON",
      "name": "Caerleon Cape"
    },
    "potion": {
      "id": "T8_POTION_COOLDOWN",
      "name": "Major Poison Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "arclight-blasters": {
    "name": "Arclight Blasters",
    "weapon": {
      "id": "T8_2H_DUALCROSSBOW_CRYSTAL",
      "name": "Arclight Blasters"
    },
    "head": {
      "id": "T8_HEAD_PLATE_AVALON",
      "name": "Helmet of Valor"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_AVALON",
      "name": "Shoes of Tenacity"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_LYMHURST",
      "name": "Lymhurst Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW_FISH",
      "name": "Eel Stew"
    }
  },
  "hellspawn-staff": {
    "name": "Hellspawn Staff",
    "weapon": {
      "id": "T8_2H_SHAPESHIFTER_HELL",
      "name": "Hellspawn Staff"
    },
    "head": {
      "id": "T8_HEAD_GATHERER_HIDE",
      "name": "Skinner Cap"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_PLATE_SET2",
      "name": "Knight Armor"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_MORGANA",
      "name": "Cultist Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_HERETIC",
      "name": "Heretic Cape"
    },
    "potion": {
      "id": "T8_POTION_LAVA",
      "name": "Major Hellfire Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "glaive": {
    "name": "Glaive",
    "weapon": {
      "id": "T8_2H_GLAIVE",
      "name": "Glaive"
    },
    "head": {
      "id": "T8_HEAD_PLATE_AVALON",
      "name": "Helmet of Valor"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_AVALON",
      "name": "Shoes of Tenacity"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "claymore": {
    "name": "Claymore",
    "weapon": {
      "id": "T8_2H_CLAYMORE",
      "name": "Claymore"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_MORGANA",
      "name": "Cultist Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T8_POTION_LAVA",
      "name": "Major Hellfire Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "fists-of-avalon": {
    "name": "Fists of Avalon",
    "weapon": {
      "id": "T8_2H_KNUCKLES_AVALON",
      "name": "Fists of Avalon"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_SET1",
      "name": "Mercenary Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T8_POTION_LAVA",
      "name": "Major Hellfire Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "rotcaller-staff": {
    "name": "Rotcaller Staff",
    "weapon": {
      "id": "T8_MAIN_CURSEDSTAFF_CRYSTAL",
      "name": "Rotcaller Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": {
      "id": "T8_OFF_DEMONSKULL_HELL",
      "name": "Muisak"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_MORGANA",
      "name": "Cultist Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW_FISH",
      "name": "Eel Stew"
    }
  },
  "heavy-crossbow": {
    "name": "Heavy Crossbow",
    "weapon": {
      "id": "T8_2H_CROSSBOWLARGE",
      "name": "Heavy Crossbow"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_AVALON",
      "name": "Shoes of Tenacity"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_CAERLEON",
      "name": "Caerleon Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "broadsword": {
    "name": "Broadsword",
    "weapon": {
      "id": "T8_MAIN_SWORD",
      "name": "Broadsword"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_SET1",
      "name": "Mercenary Hood"
    },
    "offhand": {
      "id": "T8_OFF_DEMONSKULL_HELL",
      "name": "Muisak"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T8_POTION_COOLDOWN",
      "name": "Major Poison Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "lifecurse-staff": {
    "name": "Lifecurse Staff",
    "weapon": {
      "id": "T8_MAIN_CURSEDSTAFF_UNDEAD",
      "name": "Lifecurse Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": {
      "id": "T8_OFF_HORN_KEEPER",
      "name": "Mistcaller"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET1",
      "name": "Mercenary Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW_FISH",
      "name": "Eel Stew"
    }
  },
  "cursed-staff": {
    "name": "Cursed Staff",
    "weapon": {
      "id": "T8_MAIN_CURSEDSTAFF",
      "name": "Cursed Staff"
    },
    "head": {
      "id": "T8_HEAD_PLATE_HELL",
      "name": "Demon Helmet"
    },
    "offhand": {
      "id": "T8_OFF_DEMONSKULL_HELL",
      "name": "Muisak"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_HELL",
      "name": "Hellion Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_SMUGGLER",
      "name": "Smuggler Cape"
    },
    "potion": {
      "id": "T7_POTION_ACID",
      "name": "Major Acid Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "great-holy-staff": {
    "name": "Great Holy Staff",
    "weapon": {
      "id": "T8_2H_HOLYSTAFF",
      "name": "Great Holy Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_ROYAL",
      "name": "Royal Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_PLATE_SET2",
      "name": "Knight Boots"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_LYMHURST",
      "name": "Lymhurst Cape"
    },
    "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE_DRAGONAREA",
      "name": "Leyfin Omelette"
    }
  },
  "pike": {
    "name": "Pike",
    "weapon": {
      "id": "T8_2H_SPEAR",
      "name": "Pike"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_AVALON",
      "name": "Hood of Tenacity"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_AVALON",
      "name": "Shoes of Tenacity"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T8_POTION_LAVA",
      "name": "Major Hellfire Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "hellfire-hands": {
    "name": "Hellfire Hands",
    "weapon": {
      "id": "T8_2H_KNUCKLES_HELL",
      "name": "Hellfire Hands"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_MORGANA",
      "name": "Stalker Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_PLATE_KEEPER",
      "name": "Judicator Boots"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "crystal-reaper": {
    "name": "Crystal Reaper",
    "weapon": {
      "id": "T8_2H_SCYTHE_CRYSTAL",
      "name": "Crystal Reaper"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_SET3",
      "name": "Assassin Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_KEEPER",
      "name": "Druid Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET1",
      "name": "Mercenary Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "carrioncaller": {
    "name": "Carrioncaller",
    "weapon": {
      "id": "T8_2H_HALBERD_MORGANA",
      "name": "Carrioncaller"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "forcepulse-bracers": {
    "name": "Forcepulse Bracers",
    "weapon": {
      "id": "T8_2H_KNUCKLES_CRYSTAL",
      "name": "Forcepulse Bracers"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T8_POTION_LAVA",
      "name": "Major Hellfire Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "ironroot-staff": {
    "name": "Ironroot Staff",
    "weapon": {
      "id": "T8_MAIN_NATURESTAFF_AVALON",
      "name": "Ironroot Staff"
    },
    "head": {
      "id": "T8_HEAD_PLATE_UNDEAD",
      "name": "Graveguard Helmet"
    },
    "offhand": {
      "id": "T8_OFF_HORN_KEEPER",
      "name": "Mistcaller"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET1",
      "name": "Mercenary Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_BRECILIEN",
      "name": "Brecilien Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE_DRAGONAREA",
      "name": "Leyfin Omelette"
    }
  },
  "carving-sword": {
    "name": "Carving Sword",
    "weapon": {
      "id": "T8_2H_CLEAVER_HELL",
      "name": "Carving Sword"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET1",
      "name": "Mercenary Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T8_POTION_COOLDOWN",
      "name": "Major Poison Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "divine-staff": {
    "name": "Divine Staff",
    "weapon": {
      "id": "T8_2H_DIVINESTAFF",
      "name": "Divine Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_ROYAL",
      "name": "Royal Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_FEY",
      "name": "Mistwalker Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_LYMHURST",
      "name": "Lymhurst Cape"
    },
    "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE_DRAGONAREA",
      "name": "Leyfin Omelette"
    }
  },
  "twin-slayers": {
    "name": "Twin Slayers",
    "weapon": {
      "id": "T8_2H_DAGGERPAIR_CRYSTAL",
      "name": "Twin Slayers"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T8_POTION_COOLDOWN",
      "name": "Major Poison Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "deathgivers": {
    "name": "Deathgivers",
    "weapon": {
      "id": "T8_2H_DUALSICKLE_UNDEAD",
      "name": "Deathgivers"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_MORGANA",
      "name": "Cultist Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_AVALON",
      "name": "Avalonian Cape"
    },
    "potion": {
      "id": "T7_POTION_ACID",
      "name": "Major Acid Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "dagger-pair": {
    "name": "Dagger Pair",
    "weapon": {
      "id": "T8_2H_DAGGERPAIR",
      "name": "Dagger Pair"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_SET1",
      "name": "Mercenary Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_AVALON",
      "name": "Avalonian Cape"
    },
    "potion": {
      "id": "T8_POTION_COOLDOWN",
      "name": "Major Poison Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "wildfire-staff": {
    "name": "Wildfire Staff",
    "weapon": {
      "id": "T8_MAIN_FIRESTAFF_KEEPER",
      "name": "Wildfire Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_ROYAL",
      "name": "Royal Cowl"
    },
    "offhand": {
      "id": "T8_OFF_BOOK",
      "name": "Tome of Spells"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_KEEPER",
      "name": "Druid Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_LYMHURST",
      "name": "Lymhurst Cape"
    },
    "potion": {
      "id": "T8_POTION_COOLDOWN",
      "name": "Major Poison Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "battleaxe": {
    "name": "Battleaxe",
    "weapon": {
      "id": "T8_MAIN_AXE",
      "name": "Battleaxe"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": {
      "id": "T8_OFF_DEMONSKULL_HELL",
      "name": "Muisak"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_MORGANA",
      "name": "Cultist Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_AVALON",
      "name": "Avalonian Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "bear-paws": {
    "name": "Bear Paws",
    "weapon": {
      "id": "T8_2H_DUALAXE_KEEPER",
      "name": "Bear Paws"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_AVALON",
      "name": "Hood of Tenacity"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_AVALON",
      "name": "Shoes of Tenacity"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "daybreaker": {
    "name": "Daybreaker",
    "weapon": {
      "id": "T8_MAIN_SPEAR_LANCE_AVALON",
      "name": "Daybreaker"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": {
      "id": "T8_OFF_DEMONSKULL_HELL",
      "name": "Muisak"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_AVALON",
      "name": "Shoes of Tenacity"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "bloodletter": {
    "name": "Bloodletter",
    "weapon": {
      "id": "T8_MAIN_RAPIER_MORGANA",
      "name": "Bloodletter"
    },
    "head": {
      "id": "T8_HEAD_PLATE_AVALON",
      "name": "Helmet of Valor"
    },
    "offhand": {
      "id": "T8_OFF_HORN_KEEPER",
      "name": "Mistcaller"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_HELL",
      "name": "Fiend Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET2",
      "name": "Hunter Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_FORTSTERLING",
      "name": "Fort Sterling Cape"
    },
    "potion": {
      "id": "T7_POTION_REVIVE",
      "name": "Major Gigantify Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "realmbreaker": {
    "name": "Realmbreaker",
    "weapon": {
      "id": "T8_2H_AXE_AVALON",
      "name": "Realmbreaker"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_ROYAL",
      "name": "Royal Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_AVALON",
      "name": "Avalonian Cape"
    },
    "potion": {
      "id": "T8_POTION_TORNADO",
      "name": "Major Tornado in a Bottle"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "spirithunter": {
    "name": "Spirithunter",
    "weapon": {
      "id": "T8_2H_HARPOON_HELL",
      "name": "Spirithunter"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_AVALON",
      "name": "Cowl of Purity"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_FORTSTERLING",
      "name": "Fort Sterling Cape"
    },
    "potion": {
      "id": "T8_POTION_TORNADO",
      "name": "Major Tornado in a Bottle"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "infernal-scythe": {
    "name": "Infernal Scythe",
    "weapon": {
      "id": "T8_2H_SCYTHE_HELL",
      "name": "Infernal Scythe"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "dawnsong": {
    "name": "Dawnsong",
    "weapon": {
      "id": "T8_2H_FIRE_RINGPAIR_AVALON",
      "name": "Dawnsong"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "camlann-mace": {
    "name": "Camlann Mace",
    "weapon": {
      "id": "T8_2H_MACE_MORGANA",
      "name": "Camlann Mace"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "bedrock-mace": {
    "name": "Bedrock Mace",
    "weapon": {
      "id": "T8_MAIN_ROCKMACE_KEEPER",
      "name": "Bedrock Mace"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": {
      "id": "T8_OFF_DEMONSKULL_HELL",
      "name": "Muisak"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "hoarfrost-staff": {
    "name": "Hoarfrost Staff",
    "weapon": {
      "id": "T8_MAIN_FROSTSTAFF_KEEPER",
      "name": "Hoarfrost Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": {
      "id": "T8_OFF_DEMONSKULL_HELL",
      "name": "Muisak"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "occult-staff": {
    "name": "Occult Staff",
    "weapon": {
      "id": "T8_2H_ARCANESTAFF_HELL",
      "name": "Occult Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "black-monk-stave": {
    "name": "Black Monk Stave",
    "weapon": {
      "id": "T8_2H_COMBATSTAFF_MORGANA",
      "name": "Black Monk Stave"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "grailseeker": {
    "name": "Grailseeker",
    "weapon": {
      "id": "T8_2H_QUARTERSTAFF_AVALON",
      "name": "Grailseeker"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_MORGANA",
      "name": "Stalker Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_PLATE_SET2",
      "name": "Knight Armor",
      "picks": {
        "Passive": 2
      }
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET2",
      "name": "Hunter Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_SMUGGLER",
      "name": "Smuggler Cape"
    },
    "potion": {
      "id": "T8_POTION_LAVA",
      "name": "Major Hellfire Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE_AVALON",
      "name": "Avalonian Omelette"
    }
  },
  "icicle-staff": {
    "name": "Icicle Staff",
    "weapon": {
      "id": "T8_2H_ICEGAUNTLETS_HELL",
      "name": "Icicle Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "wailing-bow": {
    "name": "Wailing Bow",
    "weapon": {
      "id": "T8_2H_BOW_HELL",
      "name": "Wailing Bow"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "locus": {
    "name": "Locus",
    "weapon": {
      "id": "T8_2H_ENIGMATICORB_MORGANA",
      "name": "Locus"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "grovekeeper": {
    "name": "Grovekeeper",
    "weapon": {
      "id": "T8_2H_RAM_KEEPER",
      "name": "Grovekeeper"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "longbow": {
    "name": "Longbow",
    "weapon": {
      "id": "T8_2H_LONGBOW",
      "name": "Longbow"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "hallowfall": {
    "name": "Hallowfall",
    "weapon": {
      "id": "T8_MAIN_HOLYSTAFF_AVALON",
      "name": "Hallowfall"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_ROYAL",
      "name": "Royal Cowl"
    },
    "offhand": {
      "id": "T8_OFF_HORN_KEEPER",
      "name": "Mistcaller"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_FEY",
      "name": "Mistwalker Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_LYMHURST",
      "name": "Lymhurst Cape"
    },
    "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE_DRAGONAREA",
      "name": "Leyfin Omelette"
    }
  },
  "redemption-staff": {
    "name": "Redemption Staff",
    "weapon": {
      "id": "T8_2H_HOLYSTAFF_UNDEAD",
      "name": "Redemption Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_ROYAL",
      "name": "Royal Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_FEY",
      "name": "Mistwalker Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_LYMHURST",
      "name": "Lymhurst Cape"
    },
    "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE_DRAGONAREA",
      "name": "Leyfin Omelette"
    }
  },
  "blight-staff": {
    "name": "Blight Staff",
    "weapon": {
      "id": "T8_2H_NATURESTAFF_HELL",
      "name": "Blight Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_ROYAL",
      "name": "Royal Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_FEY",
      "name": "Mistwalker Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_LYMHURST",
      "name": "Lymhurst Cape"
    },
    "potion": {
      "id": "T7_POTION_STONESKIN",
      "name": "Major Resistance Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE_DRAGONAREA",
      "name": "Leyfin Omelette"
    }
  },
  "greataxe": {
    "name": "Greataxe",
    "weapon": {
      "id": "T8_2H_AXE",
      "name": "Greataxe"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_HELL",
      "name": "Fiend Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "great-fire-staff": {
    "name": "Great Fire Staff",
    "weapon": {
      "id": "T8_2H_FIRESTAFF",
      "name": "Great Fire Staff"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_ROYAL",
      "name": "Royal Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET1",
      "name": "Mercenary Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_LYMHURST",
      "name": "Lymhurst Cape"
    },
    "potion": {
      "id": "T6_POTION_ENERGY",
      "name": "Major Energy Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "kingmaker": {
    "name": "Kingmaker",
    "weapon": {
      "id": "T8_2H_CLAYMORE_AVALON",
      "name": "Kingmaker"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T8_POTION_LAVA",
      "name": "Major Hellfire Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "staff-of-balance": {
    "name": "Staff of Balance",
    "weapon": {
      "id": "T8_2H_ROCKSTAFF_KEEPER",
      "name": "Staff of Balance"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_HELL",
      "name": "Hellion Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_PLATE_SET2",
      "name": "Knight Armor",
      "picks": {
        "Passive": 2
      }
    },
    "shoes": {
      "id": "T8_SHOES_PLATE_KEEPER",
      "name": "Judicator Boots"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_BRIDGEWATCH",
      "name": "Bridgewatch Cape"
    },
    "potion": {
      "id": "T8_POTION_LAVA",
      "name": "Major Hellfire Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE_AVALON",
      "name": "Avalonian Omelette"
    }
  },
  "dagger": {
    "name": "Dagger",
    "weapon": {
      "id": "T8_MAIN_DAGGER",
      "name": "Dagger"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": {
      "id": "T8_OFF_TORCH",
      "name": "Torch"
    },
    "chest": {
      "id": "T8_ARMOR_LEATHER_SET2",
      "name": "Hunter Jacket",
      "picks": {
        "Passive": 2
      }
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_MORGANA",
      "name": "Cultist Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_DEMON",
      "name": "Demon Cape"
    },
    "potion": {
      "id": "T8_POTION_LAVA",
      "name": "Major Hellfire Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "soulscythe": {
    "name": "Soulscythe",
    "weapon": {
      "id": "T8_2H_TWINSCYTHE_HELL",
      "name": "Soulscythe"
    },
    "head": {
      "id": "T8_HEAD_PLATE_AVALON",
      "name": "Helmet of Valor"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_PLATE_SET2",
      "name": "Knight Armor",
      "picks": {
        "Passive": 2
      }
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET2",
      "name": "Hunter Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_DEMON",
      "name": "Demon Cape"
    },
    "potion": {
      "id": "T7_POTION_ACID",
      "name": "Major Acid Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE_AVALON",
      "name": "Avalonian Omelette"
    }
  },
  "energy-shaper": {
    "name": "Energy Shaper",
    "weapon": {
      "id": "T8_2H_CROSSBOW_CANNON_AVALON",
      "name": "Energy Shaper"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_ROYAL",
      "name": "Royal Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_MORGANA",
      "name": "Morgana Cape"
    },
    "potion": {
      "id": "T8_POTION_TORNADO",
      "name": "Major Tornado in a Bottle"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "glacial-staff": {
    "name": "Glacial Staff",
    "weapon": {
      "id": "T8_2H_GLACIALSTAFF",
      "name": "Glacial Staff"
    },
    "head": {
      "id": "T8_HEAD_PLATE_AVALON",
      "name": "Helmet of Valor"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET1",
      "name": "Scholar Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET1",
      "name": "Mercenary Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_MORGANA",
      "name": "Morgana Cape"
    },
    "potion": {
      "id": "T7_POTION_ACID",
      "name": "Major Acid Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE",
      "name": "Pork Omelette"
    }
  },
  "blazing-staff": {
    "name": "Blazing Staff",
    "weapon": {
      "id": "T8_2H_INFERNOSTAFF_MORGANA",
      "name": "Blazing Staff"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_ROYAL",
      "name": "Royal Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_MORGANA",
      "name": "Morgana Cape"
    },
    "potion": {
      "id": "T8_POTION_TORNADO",
      "name": "Major Tornado in a Bottle"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "crossbow": {
    "name": "Crossbow",
    "weapon": {
      "id": "T8_2H_CROSSBOW",
      "name": "Crossbow"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_FEY",
      "name": "Feyscale Hat"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET1",
      "name": "Scholar Robe"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_FORTSTERLING",
      "name": "Fort Sterling Cape"
    },
    "potion": {
      "id": "T8_POTION_TORNADO",
      "name": "Major Tornado in a Bottle"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "great-arcane-staff": {
    "name": "Great Arcane Staff",
    "weapon": {
      "id": "T8_2H_ARCANESTAFF",
      "name": "Great Arcane Staff"
    },
    "head": {
      "id": "T8_HEAD_PLATE_SET2",
      "name": "Knight Helmet"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_PLATE_SET2",
      "name": "Knight Armor",
      "picks": {
        "Passive": 2
      }
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_KEEPER",
      "name": "Druid Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_HERETIC",
      "name": "Heretic Cape"
    },
    "potion": {
      "id": "T8_POTION_TORNADO",
      "name": "Major Tornado in a Bottle"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "tombhammer": {
    "name": "Tombhammer",
    "weapon": {
      "id": "T8_2H_HAMMER_UNDEAD",
      "name": "Tombhammer"
    },
    "head": {
      "id": "T8_HEAD_PLATE_ROYAL",
      "name": "Royal Helmet"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_PLATE_SET2",
      "name": "Knight Armor",
      "picks": {
        "Passive": 2
      }
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_MORGANA",
      "name": "Cultist Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_HERETIC",
      "name": "Heretic Cape"
    },
    "potion": {
      "id": "T8_POTION_LAVA",
      "name": "Major Hellfire Potion"
    },
    "food": {
      "id": "T7_MEAL_OMELETTE_AVALON",
      "name": "Avalonian Omelette"
    }
  },
  "warbow": {
    "name": "Warbow",
    "weapon": {
      "id": "T8_2H_WARBOW",
      "name": "Warbow"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_AVALON",
      "name": "Cowl of Purity"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_CAERLEON",
      "name": "Caerleon Cape"
    },
    "potion": {
      "id": "T8_POTION_LAVA",
      "name": "Major Hellfire Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "brawler-gloves": {
    "name": "Brawler Gloves",
    "weapon": {
      "id": "T8_2H_KNUCKLES_SET1",
      "name": "Brawler Gloves"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_SET3",
      "name": "Assassin Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET2",
      "name": "Cleric Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_KEEPER",
      "name": "Keeper Cape"
    },
    "potion": {
      "id": "T7_POTION_REVIVE",
      "name": "Major Gigantify Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "permafrost-prism": {
    "name": "Permafrost Prism",
    "weapon": {
      "id": "T8_2H_ICECRYSTAL_UNDEAD",
      "name": "Permafrost Prism"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_AVALON",
      "name": "Cowl of Purity"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_MORGANA",
      "name": "Morgana Cape"
    },
    "potion": {
      "id": "T7_POTION_ACID",
      "name": "Major Acid Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "bow-of-badon": {
    "name": "Bow of Badon",
    "weapon": {
      "id": "T8_2H_BOW_KEEPER",
      "name": "Bow of Badon"
    },
    "head": {
      "id": "T8_HEAD_CLOTH_HELL",
      "name": "Fiend Cowl"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_AVALON",
      "name": "Robe of Purity"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T6_POTION_HEAL",
      "name": "Major Healing Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "ursine-maulers": {
    "name": "Ursine Maulers",
    "weapon": {
      "id": "T8_2H_KNUCKLES_KEEPER",
      "name": "Ursine Maulers"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_SET3",
      "name": "Assassin Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET2",
      "name": "Cleric Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_KEEPER",
      "name": "Keeper Cape"
    },
    "potion": {
      "id": "T7_POTION_REVIVE",
      "name": "Major Gigantify Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "heron-spear": {
    "name": "Heron Spear",
    "weapon": {
      "id": "T8_MAIN_SPEAR_KEEPER",
      "name": "Heron Spear"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_SET3",
      "name": "Assassin Hood"
    },
    "offhand": {
      "id": "T8_OFF_DEMONSKULL_HELL",
      "name": "Muisak"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET2",
      "name": "Hunter Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T7_POTION_REVIVE",
      "name": "Major Gigantify Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "whispering-bow": {
    "name": "Whispering Bow",
    "weapon": {
      "id": "T8_2H_LONGBOW_UNDEAD",
      "name": "Whispering Bow"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_HELL",
      "name": "Hellion Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_LEATHER_SET2",
      "name": "Hunter Jacket",
      "picks": {
        "Passive": 2
      }
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T7_POTION_REVIVE",
      "name": "Major Gigantify Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "mistpiercer": {
    "name": "Mistpiercer",
    "weapon": {
      "id": "T8_2H_BOW_AVALON",
      "name": "Mistpiercer"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_SET3",
      "name": "Assassin Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET1",
      "name": "Scholar Robe"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_FORTSTERLING",
      "name": "Fort Sterling Cape"
    },
    "potion": {
      "id": "T7_POTION_REVIVE",
      "name": "Major Gigantify Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "great-fire-staff-stun": {
    "name": "Great Fire Staff",
    "weapon": {
      "id": "T8_2H_FIRESTAFF",
      "name": "Great Fire Staff",
      "picks": {
        "Q": 2,
        "W": 3,
        "Passive": 2
      }
    },
    "head": {
      "id": "T8_HEAD_CLOTH_AVALON",
      "name": "Cowl of Purity"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_MORGANA",
      "name": "Cultist Robe"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_ROYAL",
      "name": "Royal Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_FORTSTERLING",
      "name": "Fort Sterling Cape"
    },
    "potion": {
      "id": "T8_POTION_TORNADO",
      "name": "Major Tornado in a Bottle"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "hellfire-hands-stun": {
    "name": "Hellfire Hands",
    "weapon": {
      "id": "T8_2H_KNUCKLES_HELL",
      "name": "Hellfire Hands",
      "picks": {
        "Passive": 1
      }
    },
    "head": {
      "id": "T8_HEAD_CLOTH_AVALON",
      "name": "Cowl of Purity"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_CLOTH_MORGANA",
      "name": "Cultist Sandals"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_FORTSTERLING",
      "name": "Fort Sterling Cape"
    },
    "potion": {
      "id": "T8_POTION_TORNADO",
      "name": "Major Tornado in a Bottle"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "bloodletter-double": {
    "name": "Bloodletter",
    "weapon": {
      "id": "T8_MAIN_RAPIER_MORGANA",
      "name": "Bloodletter",
      "picks": {
        "Q": 2,
        "W": 1
      }
    },
    "head": {
      "id": "T8_HEAD_LEATHER_MORGANA",
      "name": "Stalker Hood"
    },
    "offhand": {
      "id": "T8_OFF_DEMONSKULL_HELL",
      "name": "Muisak"
    },
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET2",
      "name": "Cleric Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T7_POTION_REVIVE",
      "name": "Major Gigantify Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "dagger-pair-double": {
    "name": "Dagger Pair",
    "weapon": {
      "id": "T8_2H_DAGGERPAIR",
      "name": "Dagger Pair",
      "picks": {
        "Q": 2,
        "W": 1
      }
    },
    "head": {
      "id": "T8_HEAD_LEATHER_SET3",
      "name": "Assassin Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET2",
      "name": "Cleric Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_KEEPER",
      "name": "Keeper Cape"
    },
    "potion": {
      "id": "T7_POTION_REVIVE",
      "name": "Major Gigantify Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  },
  "carrioncaller-double": {
    "name": "Carrioncaller",
    "weapon": {
      "id": "T8_2H_HALBERD_MORGANA",
      "name": "Carrioncaller"
    },
    "head": {
      "id": "T8_HEAD_LEATHER_SET3",
      "name": "Assassin Hood"
    },
    "offhand": null,
    "chest": {
      "id": "T8_ARMOR_CLOTH_SET3",
      "name": "Mage Robe"
    },
    "shoes": {
      "id": "T8_SHOES_LEATHER_SET3",
      "name": "Assassin Shoes"
    },
    "cape": {
      "id": "T8_CAPEITEM_FW_THETFORD",
      "name": "Thetford Cape"
    },
    "potion": {
      "id": "T7_POTION_REVIVE",
      "name": "Major Gigantify Potion"
    },
    "food": {
      "id": "T8_MEAL_STEW",
      "name": "Beef Stew"
    }
  }
};
