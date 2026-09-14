/* ===========================================================
   Albion Meta - the abilities each piece suggests
   -----------------------------------------------------------
   "picks" is what the little popup shows when a piece is
   clicked: the slot number to take, so 3 under W means the
   third W ability. "options" lists those abilities in order,
   so 3 can be read off when you need the name.
   Both come from the Albion game data, nothing is hand typed.

   Rules behind the numbers:
     head, chest, capes   last spell, first passive
     boots                last spell, second passive
     one handed cursed    Q1 W1 (Armor Piercer) P1
     two handed cursed    Q1 W3 P1
     holy staffs          Q1 W3 P1
     nature staffs        Q1 W3 P1
     spears               Q1 W4, last passive
     swords               Q1 W1 P1
     axes                 Q3 W1 P1
     fire staffs          Q1 W4 P3
     shapeshifters        Q4 W4
     quarterstaff line    Q3 W2 P1
     frost staffs         Q2 W3
     Greataxe             Q2 W4          Crystal Reaper    Q2
     Arclight Blasters    Q2 W2 P2       Heavy Crossbow    Q1 W2 P2
     Fists of Avalon      Q1 W4 P3       Hellfire Hands    Q1 W1 P3
     Forcepulse Bracers   W4 P3          Dagger Pair       Q2 W3
     Deathgivers          Q1 W3          Broadsword        W2
     Rotcaller Staff      W3             Lifecurse Staff   W3
     Twin Slayers         Q2 W3          Dagger            Q2 W1
     Energy Shaper        Q2 W3 P3       Blazing Staff     Q2 W5 P2
     Bloodletter          Q2 W4 P3       Crossbow          Q2 W2 P2
     Spirithunter         P3             Great Arcane      W3
     Tombhammer           Q3 W3          Warbow            Q2 W1
     Brawler Gloves       W4 P4          Ursine Maulers    Q1 W4
     Heron Spear          W1             Whispering Bow    Q2 W3
     Mistpiercer          Q2 W1
     Hellspawn Staff      W2
     everything else      Q1 W1 P1
   The E slot is whatever the weapon's single E ability is.
   To change one, edit its number in "picks".
   =========================================================== */

window.ALBION_SPELLS = {
 "T8_2H_DUALCROSSBOW_CRYSTAL": {
  "picks": {
   "Q": 2,
   "W": 2,
   "E": 1,
   "Passive": 2
  },
  "options": {
   "Q": [
    "Auto Fire",
    "Explosive Bolt"
   ],
   "W": [
    "Explosive Salvo",
    "Sunder Shot",
    "Caltrops",
    "Knockback Shot",
    "Noise Eraser"
   ],
   "E": [
    "Flickershots"
   ],
   "Passive": [
    "Forceful Bolts",
    "Well-Prepared",
    "Energetic",
    "Furious"
   ]
  }
 },
 "T8_HEAD_LEATHER_SET3": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Cleanse",
    "Meditation"
   ],
   "Passive": [
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_SHOES_LEATHER_SET3": {
  "picks": {
   "Spell": 3,
   "Passive": 2
  },
  "options": {
   "Spell": [
    "Dodge",
    "Refreshing Sprint",
    "Swift Cut"
   ],
   "Passive": [
    "Courier",
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_CAPEITEM_AVALON": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Force Pulse"
   ]
  }
 },
 "T8_MAIN_AXE": {
  "picks": {
   "Q": 3,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Rending Strike",
    "Rending Spin",
    "Rending Rage"
   ],
   "W": [
    "Deadly Chop",
    "Adrenaline Boost",
    "Battle Rush",
    "Internal Bleeding",
    "Raging Blades"
   ],
   "E": [
    "Blood Bandit"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Increased Defense",
    "Aggressive Rush"
   ]
  }
 },
 "T8_2H_DUALAXE_KEEPER": {
  "picks": {
   "Q": 3,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Rending Strike",
    "Rending Spin",
    "Rending Rage"
   ],
   "W": [
    "Deadly Chop",
    "Adrenaline Boost",
    "Battle Rush",
    "Internal Bleeding",
    "Raging Blades"
   ],
   "E": [
    "Razor Cut"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Increased Defense",
    "Aggressive Rush"
   ]
  }
 },
 "T8_MAIN_ROCKMACE_KEEPER": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Defensive Slam",
    "Threatening Smash",
    "Sacred Ground"
   ],
   "W": [
    "Ground Shaker",
    "Snare Charge",
    "Guard Rune",
    "Air Compressor"
   ],
   "E": [
    "Force of Nature"
   ],
   "Passive": [
    "Stunning Strike",
    "Energetic",
    "Life Leech",
    "Dreadladen Fighting"
   ]
  }
 },
 "T8_2H_COMBATSTAFF_MORGANA": {
  "picks": {
   "Q": 3,
   "W": 2,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Concussive Combo",
    "Whirling Strikes",
    "Cartwheel"
   ],
   "W": [
    "Gale Dance",
    "Stun Run",
    "Forceful Swing",
    "Rising Blow",
    "Separator"
   ],
   "E": [
    "Fatal Blade"
   ],
   "Passive": [
    "Stunning Strike",
    "Energetic",
    "Life Leech",
    "Dreadladen Fighting"
   ]
  }
 },
 "T8_2H_INFERNOSTAFF_MORGANA": {
  "picks": {
   "Q": 2,
   "W": 5,
   "E": 1,
   "Passive": 2
  },
  "options": {
   "Q": [
    "Fire Bolt",
    "Burning Field",
    "Searing Flame"
   ],
   "W": [
    "Flame Blast",
    "Wall of Flames",
    "Raging Flare",
    "Fire Wave",
    "Fire Artillery"
   ],
   "E": [
    "Flame Tornado"
   ],
   "Passive": [
    "Burn",
    "Energetic",
    "Aggressive Caster",
    "Furious"
   ]
  }
 },
 "T8_2H_NATURESTAFF_HELL": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Rejuvenation",
    "Thorn Growth",
    "Rejuvmushroom Grenade"
   ],
   "W": [
    "Brambleseed",
    "Revitalize",
    "Protection of Nature",
    "Cleanse Heal",
    "Rejuvenating Breeze"
   ],
   "E": [
    "Elevated Nature"
   ],
   "Passive": [
    "Adrenaline Driven Charity",
    "Energetic",
    "Calmness",
    "Hit and Run"
   ]
  }
 },
 "T8_MAIN_RAPIER_MORGANA": {
  "picks": {
   "Q": 2,
   "W": 4,
   "E": 1,
   "Passive": 3
  },
  "options": {
   "Q": [
    "Sunder Armor",
    "Deadly Swipe",
    "Assassin Spirit"
   ],
   "W": [
    "Throwing Blades",
    "Dash",
    "Forbidden Stab",
    "Shadow Edge",
    "Chain Slash"
   ],
   "E": [
    "Lunging Stabs"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Auto-Attack Speed",
    "Aggressive Rush"
   ]
  }
 },
 "T8_2H_BOW_KEEPER": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Multishot",
    "Deadly Shot",
    "Poisoned Arrow"
   ],
   "W": [
    "Ray of Light",
    "Frost Shot",
    "Speed Shot",
    "Explosive Arrows"
   ],
   "E": [
    "Raging Storm"
   ],
   "Passive": [
    "Slow Poison",
    "Energetic",
    "Piercing Arrows",
    "Auto-Attack Speed"
   ]
  }
 },
 "T8_2H_KNUCKLES_SET1": {
  "picks": {
   "Q": 1,
   "W": 4,
   "E": 1,
   "Passive": 4
  },
  "options": {
   "Q": [
    "Create Opening",
    "Dragon Leap",
    "Crossstep Roundhouse",
    "Shockwave"
   ],
   "W": [
    "Triple Kick",
    "Backhand Strike",
    "Counter",
    "Devastating Combo"
   ],
   "E": [
    "Blazing Geyser"
   ],
   "Passive": [
    "Passive Knuckle Brawler",
    "Rage",
    "Rushdown",
    "Hard to Catch"
   ]
  }
 },
 "T8_CAPEITEM_FW_BRECILIEN": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Fey Barrier"
   ]
  }
 },
 "T8_CAPEITEM_FW_BRIDGEWATCH": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Sandstorm"
   ]
  }
 },
 "T8_MAIN_SWORD": {
  "picks": {
   "Q": 1,
   "W": 2,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Heroic Strike",
    "Heroic Cleave"
   ],
   "W": [
    "Blade Cyclone",
    "Interrupt",
    "Splitting Slash",
    "Hamstring",
    "Parry Strike",
    "Iron Will"
   ],
   "E": [
    "Mighty Blow"
   ],
   "Passive": [
    "Deep Cuts",
    "Weakening",
    "Heroic Fighting",
    "Increased Defense"
   ]
  }
 },
 "T8_CAPEITEM_FW_CAERLEON": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Opportunist"
   ]
  }
 },
 "T8_2H_MACE_MORGANA": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Defensive Slam",
    "Threatening Smash",
    "Sacred Ground"
   ],
   "W": [
    "Ground Shaker",
    "Snare Charge",
    "Guard Rune",
    "Air Compressor"
   ],
   "E": [
    "Vendetta"
   ],
   "Passive": [
    "Stunning Strike",
    "Energetic",
    "Life Leech",
    "Dreadladen Fighting"
   ]
  }
 },
 "T8_2H_HALBERD_MORGANA": {
  "picks": {
   "Q": 3,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Rending Strike",
    "Rending Spin",
    "Rending Rage"
   ],
   "W": [
    "Deadly Chop",
    "Adrenaline Boost",
    "Battle Rush",
    "Internal Bleeding",
    "Raging Blades"
   ],
   "E": [
    "Morgana Raven"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Increased Defense",
    "Aggressive Rush"
   ]
  }
 },
 "T8_2H_CLEAVER_HELL": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Heroic Strike",
    "Heroic Cleave"
   ],
   "W": [
    "Blade Cyclone",
    "Interrupt",
    "Splitting Slash",
    "Hamstring",
    "Parry Strike",
    "Iron Will"
   ],
   "E": [
    "Fearless Strike"
   ],
   "Passive": [
    "Deep Cuts",
    "Weakening",
    "Heroic Fighting",
    "Increased Defense"
   ]
  }
 },
 "T8_2H_CLAYMORE": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Heroic Strike",
    "Heroic Cleave"
   ],
   "W": [
    "Blade Cyclone",
    "Interrupt",
    "Splitting Slash",
    "Hamstring",
    "Parry Strike",
    "Iron Will"
   ],
   "E": [
    "Charge"
   ],
   "Passive": [
    "Deep Cuts",
    "Weakening",
    "Heroic Fighting",
    "Increased Defense"
   ]
  }
 },
 "T8_ARMOR_CLOTH_SET2": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Mend Wounds",
    "Frost Shield",
    "Everlasting Spirit"
   ],
   "Passive": [
    "Aggression",
    "Passive Armor Increased Castspeed",
    "Efficiency"
   ]
  }
 },
 "T8_HEAD_CLOTH_AVALON": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Force Field",
    "Avalonian Beam"
   ],
   "Passive": [
    "Aggression",
    "Concentration",
    "Efficiency"
   ]
  }
 },
 "T8_2H_CROSSBOW": {
  "picks": {
   "Q": 2,
   "W": 2,
   "E": 1,
   "Passive": 2
  },
  "options": {
   "Q": [
    "Auto Fire",
    "Explosive Bolt"
   ],
   "W": [
    "Explosive Salvo",
    "Sunder Shot",
    "Caltrops",
    "Knockback Shot",
    "Noise Eraser"
   ],
   "E": [
    "Snipe Shot"
   ],
   "Passive": [
    "Forceful Bolts",
    "Well-Prepared",
    "Energetic",
    "Furious"
   ]
  }
 },
 "T8_2H_SCYTHE_CRYSTAL": {
  "picks": {
   "Q": 2,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Rending Strike",
    "Rending Spin",
    "Rending Rage"
   ],
   "W": [
    "Deadly Chop",
    "Adrenaline Boost",
    "Battle Rush",
    "Internal Bleeding",
    "Raging Blades"
   ],
   "E": [
    "Relentless Assault"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Increased Defense",
    "Aggressive Rush"
   ]
  }
 },
 "T8_ARMOR_CLOTH_MORGANA": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Mend Wounds",
    "Frost Shield",
    "Levitate"
   ],
   "Passive": [
    "Aggression",
    "Passive Armor Increased Castspeed",
    "Efficiency"
   ]
  }
 },
 "T8_SHOES_CLOTH_MORGANA": {
  "picks": {
   "Spell": 3,
   "Passive": 2
  },
  "options": {
   "Spell": [
    "Dodge",
    "Energetic Sprint",
    "Rotten Ground"
   ],
   "Passive": [
    "Courier",
    "Aggression",
    "Concentration",
    "Efficiency"
   ]
  }
 },
 "T8_MAIN_CURSEDSTAFF": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Vile Curse",
    "Cursed Sickle",
    "Cursed Tar"
   ],
   "W": [
    "Armor Piercer",
    "Desecrate",
    "Grudge",
    "Cursed Beam",
    "Dark Matter"
   ],
   "E": [
    "Death Curse"
   ],
   "Passive": [
    "Bane",
    "Energetic",
    "Furious",
    "Hit and Run"
   ]
  }
 },
 "T8_MAIN_DAGGER": {
  "picks": {
   "Q": 2,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Sunder Armor",
    "Deadly Swipe",
    "Assassin Spirit"
   ],
   "W": [
    "Throwing Blades",
    "Dash",
    "Forbidden Stab",
    "Shadow Edge",
    "Chain Slash"
   ],
   "E": [
    "Bloodthirsty Blade"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Auto-Attack Speed",
    "Aggressive Rush"
   ]
  }
 },
 "T8_2H_DAGGERPAIR": {
  "picks": {
   "Q": 2,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Sunder Armor",
    "Deadly Swipe",
    "Assassin Spirit"
   ],
   "W": [
    "Throwing Blades",
    "Dash",
    "Forbidden Stab",
    "Shadow Edge",
    "Chain Slash"
   ],
   "E": [
    "Slit Throat"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Auto-Attack Speed",
    "Aggressive Rush"
   ]
  }
 },
 "T8_2H_FIRE_RINGPAIR_AVALON": {
  "picks": {
   "Q": 1,
   "W": 4,
   "E": 1,
   "Passive": 3
  },
  "options": {
   "Q": [
    "Fire Bolt",
    "Burning Field",
    "Searing Flame"
   ],
   "W": [
    "Flame Blast",
    "Wall of Flames",
    "Raging Flare",
    "Fire Wave",
    "Fire Artillery"
   ],
   "E": [
    "Flaming Phoenix"
   ],
   "Passive": [
    "Burn",
    "Energetic",
    "Aggressive Caster",
    "Furious"
   ]
  }
 },
 "T8_MAIN_SPEAR_LANCE_AVALON": {
  "picks": {
   "Q": 1,
   "W": 4,
   "E": 1,
   "Passive": 4
  },
  "options": {
   "Q": [
    "Lunging Strike",
    "Spirit Spear"
   ],
   "W": [
    "Forest of Spears",
    "Inner Focus",
    "Cripple",
    "Deflecting Spin",
    "Impaler",
    "Harpoon"
   ],
   "E": [
    "Breakthrough"
   ],
   "Passive": [
    "Slow Poison",
    "Life Leech",
    "Aggressive Rush",
    "Auto-Attack Speed"
   ]
  }
 },
 "T8_2H_DUALSICKLE_UNDEAD": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Sunder Armor",
    "Deadly Swipe",
    "Assassin Spirit"
   ],
   "W": [
    "Throwing Blades",
    "Dash",
    "Forbidden Stab",
    "Shadow Edge",
    "Chain Slash"
   ],
   "E": [
    "Ghost Strike"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Auto-Attack Speed",
    "Aggressive Rush"
   ]
  }
 },
 "T8_CAPEITEM_DEMON": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Opening to Hell"
   ]
  }
 },
 "T8_HEAD_PLATE_HELL": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Stone Skin",
    "Hush"
   ],
   "Passive": [
    "Toughness",
    "Authority",
    "Tenacity"
   ]
  }
 },
 "T8_2H_DEMONICSTAFF": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Vile Curse",
    "Cursed Sickle",
    "Cursed Tar"
   ],
   "W": [
    "Armor Piercer",
    "Desecrate",
    "Grudge",
    "Cursed Beam",
    "Dark Matter"
   ],
   "E": [
    "Anguished Soul"
   ],
   "Passive": [
    "Bane",
    "Energetic",
    "Furious",
    "Hit and Run"
   ]
  }
 },
 "T8_2H_DIVINESTAFF": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Generous Heal",
    "Smite Aoe",
    "Holy Flash"
   ],
   "W": [
    "Sacred Pulse",
    "Holy Beam",
    "Holy Blessing",
    "Holy Orb",
    "Reawaken"
   ],
   "E": [
    "Divine Protection"
   ],
   "Passive": [
    "Adrenaline Driven Charity",
    "Energetic",
    "Magic Force",
    "Ascended"
   ]
  }
 },
 "T8_ARMOR_CLOTH_KEEPER": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Mend Wounds",
    "Frost Shield",
    "Obsessive Burst"
   ],
   "Passive": [
    "Aggression",
    "Passive Armor Increased Castspeed",
    "Efficiency"
   ]
  }
 },
 "T8_SHOES_CLOTH_KEEPER": {
  "picks": {
   "Spell": 3,
   "Passive": 2
  },
  "options": {
   "Spell": [
    "Dodge",
    "Energetic Sprint",
    "Frost Walk"
   ],
   "Passive": [
    "Courier",
    "Aggression",
    "Concentration",
    "Efficiency"
   ]
  }
 },
 "T8_2H_CROSSBOW_CANNON_AVALON": {
  "picks": {
   "Q": 2,
   "W": 3,
   "E": 1,
   "Passive": 3
  },
  "options": {
   "Q": [
    "Auto Fire",
    "Explosive Bolt"
   ],
   "W": [
    "Explosive Salvo",
    "Sunder Shot",
    "Caltrops",
    "Knockback Shot",
    "Noise Eraser"
   ],
   "E": [
    "Divine Engine"
   ],
   "Passive": [
    "Forceful Bolts",
    "Well-Prepared",
    "Energetic",
    "Furious"
   ]
  }
 },
 "T8_HEAD_CLOTH_FEY": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Force Field",
    "Hyper Focus"
   ],
   "Passive": [
    "Aggression",
    "Concentration",
    "Efficiency"
   ]
  }
 },
 "T8_HEAD_CLOTH_HELL": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Force Field",
    "Purge"
   ],
   "Passive": [
    "Aggression",
    "Concentration",
    "Efficiency"
   ]
  }
 },
 "T8_ARMOR_CLOTH_HELL": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Mend Wounds",
    "Frost Shield",
    "Fear Aura"
   ],
   "Passive": [
    "Aggression",
    "Passive Armor Increased Castspeed",
    "Efficiency"
   ]
  }
 },
 "T8_2H_KNUCKLES_AVALON": {
  "picks": {
   "Q": 1,
   "W": 4,
   "E": 1,
   "Passive": 3
  },
  "options": {
   "Q": [
    "Create Opening",
    "Dragon Leap",
    "Crossstep Roundhouse",
    "Shockwave"
   ],
   "W": [
    "Triple Kick",
    "Backhand Strike",
    "Counter",
    "Devastating Combo"
   ],
   "E": [
    "Triplecombo Divekick"
   ],
   "Passive": [
    "Rage",
    "Rushdown",
    "Hard to Catch",
    "Passive Knuckle Brawler Speed"
   ]
  }
 },
 "T8_2H_KNUCKLES_CRYSTAL": {
  "picks": {
   "Q": 1,
   "W": 4,
   "E": 1,
   "Passive": 3
  },
  "options": {
   "Q": [
    "Create Opening",
    "Dragon Leap",
    "Crossstep Roundhouse",
    "Shockwave"
   ],
   "W": [
    "Triple Kick",
    "Backhand Strike",
    "Counter",
    "Devastating Combo"
   ],
   "E": [
    "Unstoppable Rush"
   ],
   "Passive": [
    "Rage",
    "Rushdown",
    "Hard to Catch",
    "Passive Knuckle Brawler Speed"
   ]
  }
 },
 "T8_CAPEITEM_FW_FORTSTERLING": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Untouchable"
   ]
  }
 },
 "T8_2H_GLACIALSTAFF": {
  "picks": {
   "Q": 2,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Frostbite",
    "Ice Shard",
    "Shatter Q"
   ],
   "W": [
    "Frost Bomb",
    "Frost Beam",
    "Frost Nova",
    "Frost Lance",
    "Glacial Obelisk"
   ],
   "E": [
    "Ice Storm"
   ],
   "Passive": [
    "Frost",
    "Energetic",
    "Aggressive Caster",
    "Furious"
   ]
  }
 },
 "T8_2H_GLAIVE": {
  "picks": {
   "Q": 1,
   "W": 4,
   "E": 1,
   "Passive": 4
  },
  "options": {
   "Q": [
    "Lunging Strike",
    "Spirit Spear"
   ],
   "W": [
    "Forest of Spears",
    "Inner Focus",
    "Cripple",
    "Deflecting Spin",
    "Impaler",
    "Harpoon"
   ],
   "E": [
    "Fling"
   ],
   "Passive": [
    "Slow Poison",
    "Life Leech",
    "Aggressive Rush",
    "Auto-Attack Speed"
   ]
  }
 },
 "T8_2H_QUARTERSTAFF_AVALON": {
  "picks": {
   "Q": 3,
   "W": 2,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Concussive Combo",
    "Whirling Strikes",
    "Cartwheel"
   ],
   "W": [
    "Gale Dance",
    "Stun Run",
    "Forceful Swing",
    "Rising Blow",
    "Separator"
   ],
   "E": [
    "Soul Shaker"
   ],
   "Passive": [
    "Stunning Strike",
    "Energetic",
    "Life Leech",
    "Dreadladen Fighting"
   ]
  }
 },
 "T8_HEAD_PLATE_UNDEAD": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Stone Skin",
    "Sacrifice"
   ],
   "Passive": [
    "Toughness",
    "Authority",
    "Tenacity"
   ]
  }
 },
 "T8_2H_ARCANESTAFF": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Chain Missile",
    "Arcane Protection",
    "Magic Shock"
   ],
   "W": [
    "Enigma Blade",
    "Motivating Cleanse",
    "Frazzle",
    "Empowering Beam",
    "Mimic"
   ],
   "E": [
    "Time Freeze"
   ],
   "Passive": [
    "Lingering Power",
    "Energetic",
    "Calmness",
    "Hush"
   ]
  }
 },
 "T8_2H_FIRESTAFF": {
  "picks": {
   "Q": 1,
   "W": 4,
   "E": 1,
   "Passive": 3
  },
  "options": {
   "Q": [
    "Fire Bolt",
    "Burning Field",
    "Searing Flame"
   ],
   "W": [
    "Flame Blast",
    "Wall of Flames",
    "Raging Flare",
    "Fire Wave",
    "Fire Artillery"
   ],
   "E": [
    "Flame Pillar"
   ],
   "Passive": [
    "Burn",
    "Energetic",
    "Aggressive Caster",
    "Furious"
   ]
  }
 },
 "T8_2H_HOLYSTAFF": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Generous Heal",
    "Smite Aoe",
    "Holy Flash"
   ],
   "W": [
    "Sacred Pulse",
    "Holy Beam",
    "Holy Blessing",
    "Holy Orb",
    "Reawaken"
   ],
   "E": [
    "Holy Explosion"
   ],
   "Passive": [
    "Adrenaline Driven Charity",
    "Energetic",
    "Magic Force",
    "Ascended"
   ]
  }
 },
 "T8_2H_AXE": {
  "picks": {
   "Q": 2,
   "W": 4,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Rending Strike",
    "Rending Spin",
    "Rending Rage"
   ],
   "W": [
    "Deadly Chop",
    "Adrenaline Boost",
    "Battle Rush",
    "Internal Bleeding",
    "Raging Blades"
   ],
   "E": [
    "Whirlwind"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Increased Defense",
    "Aggressive Rush"
   ]
  }
 },
 "T8_2H_RAM_KEEPER": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Powerful Swing",
    "Threatening Strike",
    "Iron Breaker"
   ],
   "W": [
    "Seismic Tremor",
    "Slowing Charge",
    "Power Geyser",
    "Knockout",
    "Inertia Ring"
   ],
   "E": [
    "Ground Pound"
   ],
   "Passive": [
    "Stunning Strike",
    "Energetic",
    "Life Leech",
    "Dreadladen Fighting"
   ]
  }
 },
 "T8_MAIN_HOLYSTAFF_AVALON": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Generous Heal",
    "Smite Aoe",
    "Holy Flash"
   ],
   "W": [
    "Sacred Pulse",
    "Holy Beam",
    "Holy Blessing",
    "Holy Orb",
    "Reawaken"
   ],
   "E": [
    "Divine Intervention"
   ],
   "Passive": [
    "Adrenaline Driven Charity",
    "Energetic",
    "Magic Force",
    "Ascended"
   ]
  }
 },
 "T8_2H_CROSSBOWLARGE": {
  "picks": {
   "Q": 1,
   "W": 2,
   "E": 1,
   "Passive": 2
  },
  "options": {
   "Q": [
    "Auto Fire",
    "Explosive Bolt"
   ],
   "W": [
    "Explosive Salvo",
    "Sunder Shot",
    "Caltrops",
    "Knockback Shot",
    "Noise Eraser"
   ],
   "E": [
    "Sweeping Bolt"
   ],
   "Passive": [
    "Forceful Bolts",
    "Well-Prepared",
    "Energetic",
    "Furious"
   ]
  }
 },
 "T8_2H_KNUCKLES_HELL": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 3
  },
  "options": {
   "Q": [
    "Create Opening",
    "Dragon Leap",
    "Crossstep Roundhouse",
    "Shockwave"
   ],
   "W": [
    "Triple Kick",
    "Backhand Strike",
    "Counter",
    "Devastating Combo"
   ],
   "E": [
    "Infernal Boulder"
   ],
   "Passive": [
    "Passive Knuckle Brawler",
    "Rage",
    "Rushdown",
    "Hard to Catch"
   ]
  }
 },
 "T8_HEAD_LEATHER_HELL": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Cleanse",
    "Smokebomb"
   ],
   "Passive": [
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_SHOES_LEATHER_HELL": {
  "picks": {
   "Spell": 3,
   "Passive": 2
  },
  "options": {
   "Spell": [
    "Dodge",
    "Refreshing Sprint",
    "Mark of Sacrifice"
   ],
   "Passive": [
    "Courier",
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_2H_SHAPESHIFTER_HELL": {
  "picks": {
   "Q": 4,
   "W": 2,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Unstable Projectile",
    "Reality Fissure",
    "Adapting Matter",
    "Pulse Shock"
   ],
   "W": [
    "Distortion",
    "Positional Drift",
    "Tether Shift",
    "Polymorph"
   ],
   "E": [
    "Hellfire Imp Transformation"
   ],
   "Passive": [
    "Altered Beast",
    "Intimidating Presence",
    "Innate Power",
    "Rule Bender"
   ]
  }
 },
 "T8_HEAD_PLATE_AVALON": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Stone Skin",
    "Purifying Smoke"
   ],
   "Passive": [
    "Toughness",
    "Authority",
    "Tenacity"
   ]
  }
 },
 "T8_CAPEITEM_HERETIC": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Devious Trap"
   ]
  }
 },
 "T8_MAIN_SPEAR_KEEPER": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 4
  },
  "options": {
   "Q": [
    "Lunging Strike",
    "Spirit Spear"
   ],
   "W": [
    "Forest of Spears",
    "Inner Focus",
    "Cripple",
    "Deflecting Spin",
    "Impaler",
    "Harpoon"
   ],
   "E": [
    "Spear Throw"
   ],
   "Passive": [
    "Slow Poison",
    "Life Leech",
    "Aggressive Rush",
    "Auto-Attack Speed"
   ]
  }
 },
 "T8_MAIN_FROSTSTAFF_KEEPER": {
  "picks": {
   "Q": 2,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Frostbite",
    "Ice Shard",
    "Shatter Q"
   ],
   "W": [
    "Frost Bomb",
    "Frost Beam",
    "Frost Nova",
    "Frost Lance",
    "Glacial Obelisk"
   ],
   "E": [
    "Avalanche"
   ],
   "Passive": [
    "Frost",
    "Energetic",
    "Aggressive Caster",
    "Furious"
   ]
  }
 },
 "T8_MAIN_HOLYSTAFF": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Generous Heal",
    "Smite Aoe",
    "Holy Flash"
   ],
   "W": [
    "Sacred Pulse",
    "Holy Beam",
    "Holy Blessing",
    "Holy Orb",
    "Reawaken"
   ],
   "E": [
    "Desperate Prayer"
   ],
   "Passive": [
    "Adrenaline Driven Charity",
    "Energetic",
    "Magic Force",
    "Ascended"
   ]
  }
 },
 "T8_HEAD_LEATHER_AVALON": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Cleanse",
    "Nasty Wounds"
   ],
   "Passive": [
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_ARMOR_LEATHER_SET2": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Mend Wounds",
    "Inferno Shield",
    "Haste"
   ],
   "Passive": [
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_SHOES_LEATHER_SET2": {
  "picks": {
   "Spell": 3,
   "Passive": 2
  },
  "options": {
   "Spell": [
    "Dodge",
    "Refreshing Sprint",
    "Rush"
   ],
   "Passive": [
    "Courier",
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_2H_ICEGAUNTLETS_HELL": {
  "picks": {
   "Q": 2,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Frostbite",
    "Ice Shard",
    "Shatter Q"
   ],
   "W": [
    "Frost Bomb",
    "Frost Beam",
    "Frost Nova",
    "Frost Lance",
    "Glacial Obelisk"
   ],
   "E": [
    "Frozen Hell"
   ],
   "Passive": [
    "Frost",
    "Energetic",
    "Aggressive Caster",
    "Furious"
   ]
  }
 },
 "T8_2H_SCYTHE_HELL": {
  "picks": {
   "Q": 3,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Rending Strike",
    "Rending Spin",
    "Rending Rage"
   ],
   "W": [
    "Deadly Chop",
    "Adrenaline Boost",
    "Battle Rush",
    "Internal Bleeding",
    "Raging Blades"
   ],
   "E": [
    "Bloody Reap"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Increased Defense",
    "Aggressive Rush"
   ]
  }
 },
 "T8_MAIN_NATURESTAFF_AVALON": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Rejuvenation",
    "Thorn Growth",
    "Rejuvmushroom Grenade"
   ],
   "W": [
    "Brambleseed",
    "Revitalize",
    "Protection of Nature",
    "Cleanse Heal",
    "Rejuvenating Breeze"
   ],
   "E": [
    "Soul Link"
   ],
   "Passive": [
    "Adrenaline Driven Charity",
    "Energetic",
    "Calmness",
    "Hit and Run"
   ]
  }
 },
 "T8_SHOES_PLATE_KEEPER": {
  "picks": {
   "Spell": 3,
   "Passive": 2
  },
  "options": {
   "Spell": [
    "Dodge",
    "Rejuvenating Sprint",
    "Elbow Smash"
   ],
   "Passive": [
    "Courier",
    "Toughness",
    "Authority",
    "Tenacity"
   ]
  }
 },
 "T8_CAPEITEM_KEEPER": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Berserk"
   ]
  }
 },
 "T8_2H_CLAYMORE_AVALON": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Heroic Strike",
    "Heroic Cleave"
   ],
   "W": [
    "Blade Cyclone",
    "Interrupt",
    "Splitting Slash",
    "Hamstring",
    "Parry Strike",
    "Iron Will"
   ],
   "E": [
    "Majestic Smash"
   ],
   "Passive": [
    "Deep Cuts",
    "Weakening",
    "Heroic Fighting",
    "Increased Defense"
   ]
  }
 },
 "T8_ARMOR_PLATE_SET2": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Mend Wounds",
    "Taunt",
    "Wind Wall"
   ],
   "Passive": [
    "Toughness",
    "Authority",
    "Tenacity",
    "Spirit Crush",
    "Protective Instinct"
   ]
  }
 },
 "T8_SHOES_PLATE_SET2": {
  "picks": {
   "Spell": 3,
   "Passive": 2
  },
  "options": {
   "Spell": [
    "Dodge",
    "Rejuvenating Sprint",
    "Shield Charge"
   ],
   "Passive": [
    "Courier",
    "Toughness",
    "Authority",
    "Tenacity"
   ]
  }
 },
 "T8_HEAD_PLATE_SET2": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Stone Skin",
    "Displacement Immunity"
   ],
   "Passive": [
    "Toughness",
    "Authority",
    "Tenacity"
   ]
  }
 },
 "T8_MAIN_CURSEDSTAFF_UNDEAD": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Vile Curse",
    "Cursed Sickle",
    "Cursed Tar"
   ],
   "W": [
    "Armor Piercer",
    "Desecrate",
    "Grudge",
    "Cursed Beam",
    "Dark Matter"
   ],
   "E": [
    "Enfeeble Blades"
   ],
   "Passive": [
    "Bane",
    "Energetic",
    "Furious",
    "Hit and Run"
   ]
  }
 },
 "T8_2H_ENIGMATICORB_MORGANA": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Chain Missile",
    "Arcane Protection",
    "Magic Shock"
   ],
   "W": [
    "Enigma Blade",
    "Motivating Cleanse",
    "Frazzle",
    "Empowering Beam",
    "Mimic"
   ],
   "E": [
    "The Void"
   ],
   "Passive": [
    "Lingering Power",
    "Energetic",
    "Calmness",
    "Hush"
   ]
  }
 },
 "T8_2H_LONGBOW": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Multishot",
    "Deadly Shot",
    "Poisoned Arrow"
   ],
   "W": [
    "Ray of Light",
    "Frost Shot",
    "Speed Shot",
    "Explosive Arrows"
   ],
   "E": [
    "Rain of Arrows"
   ],
   "Passive": [
    "Slow Poison",
    "Energetic",
    "Piercing Arrows",
    "Auto-Attack Speed"
   ]
  }
 },
 "T8_CAPEITEM_FW_LYMHURST": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Energy Reserve"
   ]
  }
 },
 "T8_ARMOR_CLOTH_SET3": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Mend Wounds",
    "Frost Shield",
    "Purging Shield"
   ],
   "Passive": [
    "Aggression",
    "Passive Armor Increased Castspeed",
    "Efficiency"
   ]
  }
 },
 "T8_HEAD_LEATHER_SET1": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Cleanse",
    "Howl"
   ],
   "Passive": [
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_SHOES_LEATHER_SET1": {
  "picks": {
   "Spell": 3,
   "Passive": 2
  },
  "options": {
   "Spell": [
    "Dodge",
    "Refreshing Sprint",
    "Break Free"
   ],
   "Passive": [
    "Courier",
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_2H_BOW_AVALON": {
  "picks": {
   "Q": 2,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Multishot",
    "Deadly Shot",
    "Poisoned Arrow"
   ],
   "W": [
    "Ray of Light",
    "Frost Shot",
    "Speed Shot",
    "Explosive Arrows"
   ],
   "E": [
    "Lucent Hawk"
   ],
   "Passive": [
    "Slow Poison",
    "Energetic",
    "Piercing Arrows",
    "Auto-Attack Speed"
   ]
  }
 },
 "T8_SHOES_LEATHER_FEY": {
  "picks": {
   "Spell": 3,
   "Passive": 2
  },
  "options": {
   "Spell": [
    "Dodge",
    "Refreshing Sprint",
    "After Image"
   ],
   "Passive": [
    "Courier",
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_CAPEITEM_MORGANA": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Mark of the Raven"
   ]
  }
 },
 "T8_2H_ARCANESTAFF_HELL": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Chain Missile",
    "Arcane Protection",
    "Magic Shock"
   ],
   "W": [
    "Enigma Blade",
    "Motivating Cleanse",
    "Frazzle",
    "Empowering Beam",
    "Mimic"
   ],
   "E": [
    "Time Corridor"
   ],
   "Passive": [
    "Lingering Power",
    "Energetic",
    "Calmness",
    "Hush"
   ]
  }
 },
 "T8_2H_ICECRYSTAL_UNDEAD": {
  "picks": {
   "Q": 2,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Frostbite",
    "Ice Shard",
    "Shatter Q"
   ],
   "W": [
    "Frost Bomb",
    "Frost Beam",
    "Frost Nova",
    "Frost Lance",
    "Glacial Obelisk"
   ],
   "E": [
    "Ice Crystal"
   ],
   "Passive": [
    "Frost",
    "Energetic",
    "Aggressive Caster",
    "Furious"
   ]
  }
 },
 "T8_2H_SPEAR": {
  "picks": {
   "Q": 1,
   "W": 4,
   "E": 1,
   "Passive": 4
  },
  "options": {
   "Q": [
    "Lunging Strike",
    "Spirit Spear"
   ],
   "W": [
    "Forest of Spears",
    "Inner Focus",
    "Cripple",
    "Deflecting Spin",
    "Impaler",
    "Harpoon"
   ],
   "E": [
    "Rooting Smash"
   ],
   "Passive": [
    "Slow Poison",
    "Life Leech",
    "Aggressive Rush",
    "Auto-Attack Speed"
   ]
  }
 },
 "T8_2H_SHAPESHIFTER_SET1": {
  "picks": {
   "Q": 4,
   "W": 4,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Unstable Projectile",
    "Reality Fissure",
    "Adapting Matter",
    "Pulse Shock"
   ],
   "W": [
    "Distortion",
    "Positional Drift",
    "Tether Shift",
    "Polymorph"
   ],
   "E": [
    "Shadow Panther Transformation"
   ],
   "Passive": [
    "Altered Beast",
    "Intimidating Presence",
    "Innate Power",
    "Rule Bender"
   ]
  }
 },
 "T8_2H_AXE_AVALON": {
  "picks": {
   "Q": 3,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Rending Strike",
    "Rending Spin",
    "Rending Rage"
   ],
   "W": [
    "Deadly Chop",
    "Adrenaline Boost",
    "Battle Rush",
    "Internal Bleeding",
    "Raging Blades"
   ],
   "E": [
    "Aftershock"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Increased Defense",
    "Aggressive Rush"
   ]
  }
 },
 "T8_2H_HOLYSTAFF_UNDEAD": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Generous Heal",
    "Smite Aoe",
    "Holy Flash"
   ],
   "W": [
    "Sacred Pulse",
    "Holy Beam",
    "Holy Blessing",
    "Holy Orb",
    "Reawaken"
   ],
   "E": [
    "Celestial Sphere"
   ],
   "Passive": [
    "Adrenaline Driven Charity",
    "Energetic",
    "Magic Force",
    "Ascended"
   ]
  }
 },
 "T8_ARMOR_CLOTH_AVALON": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Mend Wounds",
    "Frost Shield",
    "Energy Emission"
   ],
   "Passive": [
    "Aggression",
    "Passive Armor Increased Castspeed",
    "Efficiency"
   ]
  }
 },
 "T8_MAIN_CURSEDSTAFF_CRYSTAL": {
  "picks": {
   "Q": 1,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Vile Curse",
    "Cursed Sickle",
    "Cursed Tar"
   ],
   "W": [
    "Armor Piercer",
    "Desecrate",
    "Grudge",
    "Cursed Beam",
    "Dark Matter"
   ],
   "E": [
    "Plaguebringer"
   ],
   "Passive": [
    "Bane",
    "Energetic",
    "Furious",
    "Hit and Run"
   ]
  }
 },
 "T8_HEAD_CLOTH_ROYAL": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Force Field",
    "Perpetual Energy"
   ],
   "Passive": [
    "Aggression",
    "Concentration",
    "Efficiency"
   ]
  }
 },
 "T8_HEAD_PLATE_ROYAL": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Stone Skin",
    "Ballista Support Fire"
   ],
   "Passive": [
    "Toughness",
    "Authority",
    "Tenacity"
   ]
  }
 },
 "T8_HEAD_LEATHER_ROYAL": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Cleanse",
    "Growing Rage"
   ],
   "Passive": [
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_SHOES_CLOTH_ROYAL": {
  "picks": {
   "Spell": 3,
   "Passive": 2
  },
  "options": {
   "Spell": [
    "Dodge",
    "Energetic Sprint",
    "Defenseless Rush"
   ],
   "Passive": [
    "Courier",
    "Aggression",
    "Concentration",
    "Efficiency"
   ]
  }
 },
 "T8_ARMOR_CLOTH_SET1": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Mend Wounds",
    "Frost Shield",
    "Speed Caster"
   ],
   "Passive": [
    "Aggression",
    "Passive Armor Increased Castspeed",
    "Efficiency"
   ]
  }
 },
 "T8_SHOES_LEATHER_AVALON": {
  "picks": {
   "Spell": 3,
   "Passive": 2
  },
  "options": {
   "Spell": [
    "Dodge",
    "Refreshing Sprint",
    "Blind Spot"
   ],
   "Passive": [
    "Courier",
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_HEAD_GATHERER_HIDE": {
  "picks": {
   "Spell": 4,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Block",
    "Cleanse",
    "Emergency Shield",
    "Bear Trap"
   ],
   "Passive": [
    "Skinning Skills"
   ]
  }
 },
 "T8_CAPEITEM_SMUGGLER": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Hidden Vial"
   ]
  }
 },
 "T8_2H_TWINSCYTHE_HELL": {
  "picks": {
   "Q": 3,
   "W": 2,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Concussive Combo",
    "Whirling Strikes",
    "Cartwheel"
   ],
   "W": [
    "Gale Dance",
    "Stun Run",
    "Forceful Swing",
    "Rising Blow",
    "Separator"
   ],
   "E": [
    "Tornado"
   ],
   "Passive": [
    "Stunning Strike",
    "Energetic",
    "Life Leech",
    "Dreadladen Fighting"
   ]
  }
 },
 "T8_2H_HARPOON_HELL": {
  "picks": {
   "Q": 1,
   "W": 4,
   "E": 1,
   "Passive": 3
  },
  "options": {
   "Q": [
    "Lunging Strike",
    "Spirit Spear"
   ],
   "W": [
    "Forest of Spears",
    "Inner Focus",
    "Cripple",
    "Deflecting Spin",
    "Impaler",
    "Harpoon"
   ],
   "E": [
    "Corrupting Steel"
   ],
   "Passive": [
    "Slow Poison",
    "Life Leech",
    "Aggressive Rush",
    "Auto-Attack Speed"
   ]
  }
 },
 "T8_2H_ROCKSTAFF_KEEPER": {
  "picks": {
   "Q": 3,
   "W": 2,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Concussive Combo",
    "Whirling Strikes",
    "Cartwheel"
   ],
   "W": [
    "Gale Dance",
    "Stun Run",
    "Forceful Swing",
    "Rising Blow",
    "Separator"
   ],
   "E": [
    "Mystic Rocks"
   ],
   "Passive": [
    "Stunning Strike",
    "Energetic",
    "Life Leech",
    "Dreadladen Fighting"
   ]
  }
 },
 "T8_HEAD_LEATHER_MORGANA": {
  "picks": {
   "Spell": 3,
   "Passive": 1
  },
  "options": {
   "Spell": [
    "Energizing Shield",
    "Cleanse",
    "Mortal Agony"
   ],
   "Passive": [
    "Balanced Mind",
    "Swiftness",
    "Quick Thinker"
   ]
  }
 },
 "T8_CAPEITEM_FW_THETFORD": {
  "picks": {
   "Passive": 1
  },
  "options": {
   "Passive": [
    "Chain Lightning"
   ]
  }
 },
 "T8_2H_HAMMER_UNDEAD": {
  "picks": {
   "Q": 3,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Powerful Swing",
    "Threatening Strike",
    "Iron Breaker"
   ],
   "W": [
    "Seismic Tremor",
    "Slowing Charge",
    "Power Geyser",
    "Knockout",
    "Inertia Ring"
   ],
   "E": [
    "Grasp of the Undead"
   ],
   "Passive": [
    "Stunning Strike",
    "Energetic",
    "Life Leech",
    "Dreadladen Fighting"
   ]
  }
 },
 "T8_2H_DAGGERPAIR_CRYSTAL": {
  "picks": {
   "Q": 2,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Sunder Armor",
    "Deadly Swipe",
    "Assassin Spirit"
   ],
   "W": [
    "Throwing Blades",
    "Dash",
    "Forbidden Stab",
    "Shadow Edge",
    "Chain Slash"
   ],
   "E": [
    "Ring of Death"
   ],
   "Passive": [
    "Deep Cuts",
    "Life Leech",
    "Auto-Attack Speed",
    "Aggressive Rush"
   ]
  }
 },
 "T8_2H_KNUCKLES_KEEPER": {
  "picks": {
   "Q": 1,
   "W": 4,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Create Opening",
    "Dragon Leap",
    "Crossstep Roundhouse",
    "Shockwave"
   ],
   "W": [
    "Triple Kick",
    "Backhand Strike",
    "Counter",
    "Devastating Combo"
   ],
   "E": [
    "Hundred Striking Fists"
   ],
   "Passive": [
    "Passive Knuckle Brawler",
    "Rage",
    "Rushdown",
    "Hard to Catch"
   ]
  }
 },
 "T8_2H_BOW_HELL": {
  "picks": {
   "Q": 1,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Multishot",
    "Deadly Shot",
    "Poisoned Arrow"
   ],
   "W": [
    "Ray of Light",
    "Frost Shot",
    "Speed Shot",
    "Explosive Arrows"
   ],
   "E": [
    "Demon Arrow"
   ],
   "Passive": [
    "Slow Poison",
    "Energetic",
    "Piercing Arrows",
    "Auto-Attack Speed"
   ]
  }
 },
 "T8_2H_WARBOW": {
  "picks": {
   "Q": 2,
   "W": 1,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Multishot",
    "Deadly Shot",
    "Poisoned Arrow"
   ],
   "W": [
    "Ray of Light",
    "Frost Shot",
    "Speed Shot",
    "Explosive Arrows"
   ],
   "E": [
    "Magic Arrow"
   ],
   "Passive": [
    "Slow Poison",
    "Energetic",
    "Piercing Arrows",
    "Auto-Attack Speed"
   ]
  }
 },
 "T8_2H_LONGBOW_UNDEAD": {
  "picks": {
   "Q": 2,
   "W": 3,
   "E": 1,
   "Passive": 1
  },
  "options": {
   "Q": [
    "Multishot",
    "Deadly Shot",
    "Poisoned Arrow"
   ],
   "W": [
    "Ray of Light",
    "Frost Shot",
    "Speed Shot",
    "Explosive Arrows"
   ],
   "E": [
    "Undead Arrows"
   ],
   "Passive": [
    "Slow Poison",
    "Energetic",
    "Piercing Arrows",
    "Auto-Attack Speed"
   ]
  }
 },
 "T8_MAIN_FIRESTAFF_KEEPER": {
  "picks": {
   "Q": 1,
   "W": 4,
   "E": 1,
   "Passive": 3
  },
  "options": {
   "Q": [
    "Fire Bolt",
    "Burning Field",
    "Searing Flame"
   ],
   "W": [
    "Flame Blast",
    "Wall of Flames",
    "Raging Flare",
    "Fire Wave",
    "Fire Artillery"
   ],
   "E": [
    "Magma Sphere"
   ],
   "Passive": [
    "Burn",
    "Energetic",
    "Aggressive Caster",
    "Furious"
   ]
  }
 }
};
