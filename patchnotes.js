/* ===========================================================
   Albion Meta - combat balance changes, patch by patch
   -----------------------------------------------------------
   Written by collect-patchnotes.py, do not edit by hand.

   Only the "Combat Balance Changes" section of each live
   changelog is kept. The source is Steam's news API, because
   the Albion forum and website both refuse automated requests.
   A post only appears there once the patch is live, so nothing
   that has only been announced or playtested shows up here.
   =========================================================== */

window.ALBION_PATCHES = {
<<<<<<< HEAD
 "updated": "2026-09-14T18:23:49+00:00",
=======
 "updated": "2026-09-14T18:23:02+00:00",
>>>>>>> 36e0b147354d61328cdc64618dddebd21f073cc7
 "patches": [
  {
   "title": "Dragonfire Patch 1",
   "date": "08 September 2026",
   "stamp": 1788861682,
   "url": "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1842846814455196",
   "weapons": [
    {
     "name": "Oathkeepers",
     "icon": "T8_2H_DUALMACE_AVALON",
     "entries": [
      {
       "what": "Blessed Aurora",
       "changes": [
        "Heal on auto-attack: 66 → 50"
       ],
       "group": "Maces",
       "why": ""
      }
     ]
    }
   ],
   "other": []
  },
  {
   "title": "Dragonfire Update",
   "date": "31 August 2026",
   "stamp": 1788170615,
   "url": "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1842212951309746",
   "weapons": [
    {
     "name": "Black Monk Staff",
     "icon": "T8_2H_COMBATSTAFF_MORGANA",
     "entries": [
      {
       "what": "Fatal Blade",
       "changes": [
        "Damage decrease debuff per tick vs. mobs: 10% → 8% (total: 30% → 24%)"
       ],
       "group": "Quarterstaffs",
       "why": "Following the reduction to the maximum damage decrease that can be applied to mobs, single-source, damage-decreasing abilities have also been adjusted to better fit the new cap."
      }
     ]
    },
    {
     "name": "Guardian Armor",
     "icon": "T8_ARMOR_PLATE_SET3",
     "entries": [
      {
       "what": "Enfeeble Aura",
       "changes": [
        "Damage decrease debuff vs. mobs: 60% → 25%"
       ],
       "group": "Armors",
       "why": "Following the reduction to the maximum damage decrease that can be applied to mobs, single-source, damage-decreasing abilities have also been adjusted to better fit the new cap."
      }
     ]
    },
    {
     "name": "Hoarfrost Staff",
     "icon": "T8_MAIN_FROSTSTAFF_KEEPER",
     "entries": [
      {
       "what": "Avalanche",
       "changes": [
        "Snowball rolling damage: 120 → 160",
        "Knockback vs. mobs: 10m → 5m",
        "Max. air time vs. mobs: 0.8 → 1.25"
       ],
       "group": "Frost Staffs",
       "why": "Avalanche has received increased damage, while its knockback against mobs has been adjusted to improve its performance in solo PvE."
      }
     ]
    },
    {
     "name": "Mercenary Hood",
     "icon": "T8_HEAD_LEATHER_SET1",
     "entries": [
      {
       "what": "Howl",
       "changes": [
        "Damage decrease debuff vs. mobs: 30% → 20%"
       ],
       "group": "Helmets",
       "why": "Following the reduction to the maximum damage decrease that can be applied to mobs, single-source, damage-decreasing abilities have also been adjusted to better fit the new cap."
      }
     ]
    },
    {
     "name": "Oathkeepers",
     "icon": "T8_2H_DUALMACE_AVALON",
     "entries": [
      {
       "what": "Blessed Aurora",
       "changes": [
        "Healing on auto-attack: 30 → 66"
       ],
       "group": "Maces",
       "why": "Blessed Aurora’s healing on auto-attacks has been increased to encourage a new Oathkeepers playstyle in smaller-scale PvP, focusing less on the shield’s immediate effects and more on maximizing auto-attack uptime."
      }
     ]
    },
    {
     "name": "Prowling Staff",
     "icon": "T8_2H_SHAPESHIFTER_SET1",
     "entries": [
      {
       "what": "Infected Scrapes",
       "changes": [
        "Damage per tick: 7 → 8 (Max. damage per tick: 35 → 40)"
       ],
       "group": "Shapeshifter Staffs",
       "why": "The Panther transformation’s auto-attack passive has received increased damage to encourage and better reward fighting while transformed."
      }
     ]
    },
    {
     "name": "Rampant Staff",
     "icon": "T8_2H_NATURESTAFF_KEEPER",
     "entries": [
      {
       "what": "Spirit Animal",
       "changes": [
        "Hitbox now starts 3m behind the cast position",
        "Cast range: 12m → 15m"
       ],
       "group": "Nature Staffs",
       "why": "Rampant Staff has received targeting and indicator adjustments to make Spirit Animal easier to use. Its hitbox now begins slightly behind the cast position, while its cast range has been increased to offset the resulting loss in maximum forward reach."
      }
     ]
    }
   ],
   "other": [
    {
     "what": "Maximum damage decrease vs. mobs: 80% → 50%",
     "changes": [],
     "group": "Mob Debuff Changes",
     "why": "After observing both elite and standard groups in PvE, the performance gap between groups that consistently reach the maximum debuff caps and those that only apply part of those debuffs has become too wide. The debuff caps applied to players and PvE enemies have therefore been decoupled.\nAdjusting these caps provides a healthier baseline for balancing PvE encounters, without excessively punishing standard groups or allowing highly optimized groups to trivialize encounters. Paired with additional changes to specific spells, this should also give groups more flexibility in how they reach the new caps.",
     "target": null
    },
    {
     "what": "Adrenaline Boost",
     "changes": [
      "Now expires if the caster does not directly damage an enemy every 3s"
     ],
     "group": "Axes",
     "why": "Axes have become much stronger in small-scale combat following the recent buff to Adrenaline Boost. Its behavior has now been refined to give opponents more counterplay.",
     "target": "all Axes"
    },
    {
     "what": "Flame Blast",
     "changes": [
      "No longer grants move speed to other allies"
     ],
     "group": "Fire Staffs",
     "why": "Flame Blast has been too powerful as a ganking tool. Its movement speed buff for allies has therefore been removed, while retaining the mobility granted when self-casting.",
     "target": "all Fire Staffs"
    },
    {
     "what": "Dragon Leap",
     "changes": [
      "Recast time window: 2s → 1.5s",
      "Cooldown: 0s → 0.5s"
     ],
     "group": "War Gloves",
     "why": "Dragon Leap’s recast window has been shortened to reduce accidental early casts of Dragon Punch, which would otherwise trigger the spell’s longer cooldown.",
     "target": "all War Gloves"
    },
    {
     "what": "Intimidating Aura",
     "changes": [
      "Damage decrease debuff: 70% → 40%"
     ],
     "group": "Mounts",
     "why": "Intimidating Aura has been weakened to reduce the impact of Grizzly Bears moving through enemy groups and disrupting engagements while remaining difficult to remove, without reducing the mount’s durability or transport endurance.",
     "target": "Grizzly Bear"
    },
    {
     "what": "Astral Staff",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": "Starfall"
    },
    {
     "what": "Broadsword",
     "changes": [
      "30% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Claymore",
     "changes": [
      "30% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Dual Swords",
     "changes": [
      "25% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Clarent Blade",
     "changes": [
      "5% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Carving Sword",
     "changes": [
      "25% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Galatine Pair",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Kingmaker",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Infinity Blade",
     "changes": [
      "15% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Battleaxe",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Greataxe",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Halberd",
     "changes": [
      "15% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Carrioncaller",
     "changes": [
      "15% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Infernal Scythe",
     "changes": [
      "15% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Bear Paws",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Realmbreaker",
     "changes": [
      "15% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Crystal Reaper",
     "changes": [
      "15% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Mace",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Heavy Mace",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Morning Star",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Bedrock Mace",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Incubus Mace",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Camlann Mace",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Oathkeepers",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Dreadstorm Monarch",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Hammer",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Polehammer",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Great Hammer",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Tombhammer",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Forge Hammers",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Grovekeeper",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Hand of Justice",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Truebolt Hammer",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Brawler Gloves",
     "changes": [
      "25% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Battle Bracers",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Spiked Gauntlets",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Ursine Maulers",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Hellfire Hands",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Ravenstrike Cestus",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Fists of Avalon",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Forcepulse Bracers",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Spear",
     "changes": [
      "25% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Pike",
     "changes": [
      "0% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Glaive",
     "changes": [
      "30% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Heron Spear",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Spirithunter",
     "changes": [
      "5% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Trinity Spear",
     "changes": [
      "25% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Daybreaker",
     "changes": [
      "25% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Rift Glaive",
     "changes": [
      "5% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Dagger",
     "changes": [
      "40% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Dagger Pair",
     "changes": [
      "40% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Claws",
     "changes": [
      "40% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Bloodletter",
     "changes": [
      "40% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Demonfang",
     "changes": [
      "25% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Deathgivers",
     "changes": [
      "40% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Bridled Fury",
     "changes": [
      "25% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Twin Slayers",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Quarterstaff",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Iron-Clad Staff",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Double Bladed Staff",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Black Monk Stave",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Soulscythe",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Staff of Balance",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Grailseeker",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Phantom Twinblade",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Shadow Panther Transformation",
     "changes": [
      "40% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Spirit Bear Transformation",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Werewolf Transformation",
     "changes": [
      "20% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Runestone Golem Transformation",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    },
    {
     "what": "Crystal Cobra Transformation",
     "changes": [
      "10% → 0%"
     ],
     "group": "Resilience Penetration",
     "why": "For the upcoming season, all Resilience Penetration has been set to zero as a seasonal test. The goal is to shift the meta more strongly away from Plate melee DPS and create space for players to rediscover and experiment with different compositions.\nResilience Penetration is a very powerful stat that was originally introduced to compensate for the inherent risk of melee weapons having less range, particularly in large-scale PvP. However, modern Albion offers significantly more mobility across weapon lines, while player positioning and engagement strategies have also evolved.\nThis season will therefore serve as a test of how ZvZ combat develops without Resilience Penetration. The results will be closely observed, and further adjustments may follow based on how the meta develops.",
     "target": null
    }
   ]
  },
  {
   "title": "Radiant Wilds Patch 3",
   "date": "29 June 2026",
   "stamp": 1782727217,
   "url": "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1836506165559763",
   "weapons": [
    {
     "name": "Arclight Blasters",
     "icon": "T8_2H_DUALCROSSBOW_CRYSTAL",
     "entries": [
      {
       "what": "Flickershots",
       "changes": [
        "Damage: 94 → 81"
       ],
       "group": "Crossbows",
       "why": "Arclight Blasters have had their damage reduced significantly, as Flickershots could deal too much burst when spammed repeatedly."
      }
     ]
    },
    {
     "name": "Deathgivers",
     "icon": "T8_2H_DUALSICKLE_UNDEAD",
     "entries": [
      {
       "what": "Ghost Strike",
       "changes": [
        "Cooldown: 20s → 25s"
       ],
       "group": "Daggers",
       "why": "Ghost Strike has been given a longer cooldown to preserve its burst potential. Casting with three stacks still resets the full cooldown, but its escape and brawling potential when cast without three stacks has been reduced."
      }
     ]
    },
    {
     "name": "Frost Staff",
     "icon": "T8_MAIN_FROSTSTAFF",
     "entries": [
      {
       "what": "Freezing Wind",
       "changes": [
        "No longer slows",
        "Root is now applied instantly",
        "Instant Damage: 150 → 200"
       ],
       "group": "Frost Staffs",
       "why": "Freezing Wind has regained its previous behavior of rooting targets instantly. To support this, its slow effect has been removed, and its delayed damage upon root has been rolled into the instant damage."
      }
     ]
    },
    {
     "name": "Iron-clad Staff",
     "icon": "T8_2H_IRONCLADEDSTAFF",
     "entries": [
      {
       "what": "Hurricane",
       "changes": [
        "Base cooldown: 38 → 29",
        "Cooldown reduction per 100 IP: 1s → 0.5s",
        "700 IP: 31s → 25.5s",
        "1800 IP: 20s (unchanged)",
        "2200 IP: 16s → 18s",
        "Energy cost: 14 → 10% (relative to max)"
       ],
       "group": "Quarterstaffs",
       "why": "Hurricane has continued to struggle to gain play rate. Its cooldown scaling has therefore been flattened to make Iron-clad perform more consistently across Item Power levels, while its Energy cost has also been changed to a percentage-based value, to discourage using lower-tier items to reduce it."
      }
     ]
    },
    {
     "name": "Judicator Armor",
     "icon": "T8_ARMOR_PLATE_KEEPER",
     "entries": [
      {
       "what": "Force Shield",
       "changes": [
        "Healing received bonus: 30% → 25%"
       ],
       "group": "Armors",
       "why": "Judicator Armor’s healing bonus has allowed users to benefit too much from healing while wearing Plate Armor. Its bonus has therefore been reduced."
      }
     ]
    },
    {
     "name": "Kingmaker",
     "icon": "T8_2H_CLAYMORE_AVALON",
     "entries": [
      {
       "what": "Majestic Smash",
       "changes": [
        "Added: Dealing the finishing blow on a player increases the damage of all allies within 11m by 20% for 5s"
       ],
       "group": "Swords",
       "why": "A true king leads from the front. Kingmaker has gained a new effect to reward the bold, increasing the fighting power of nearby allies upon landing a finishing blow."
      }
     ]
    },
    {
     "name": "Ravenstrike Cestus",
     "icon": "T8_2H_KNUCKLES_MORGANA",
     "entries": [
      {
       "what": "Earth Crusher",
       "changes": [
        "Self-slow: 40% → 25%"
       ],
       "group": "War Gloves",
       "why": "Ravenstrikes have struggled to find a space in the meta. Their self-slow has therefore been reduced significantly to make them feel less clunky when not paired with a sprint."
      }
     ]
    }
   ],
   "other": [
    {
     "what": "Speed Shot",
     "changes": [
      "Range: 13m → 15m",
      "Damage: 66.54 → 25",
      "Added: Can be recast once within 4s (increasing the cooldown to 15s)"
     ],
     "group": "Bows",
     "why": "The Speed Shot rework felt somewhat underwhelming, so we’ve doubled down by turning it into a recast ability, enabling another movement speed boost and first-slot ability reset in exchange for lower initial damage.",
     "target": "all Bows"
    },
    {
     "what": "Holy Beam",
     "changes": [
      "Cooldown: 10s → 12s"
     ],
     "group": "Holy Staffs",
     "why": "Holy Beam was available too frequently for the amount of single-target healing it provided, resulting in fights where it felt like you couldn’t make progress on your enemies’ health bars before the next beam was ready. Its cooldown has therefore been increased.",
     "target": "all Holy Staffs"
    },
    {
     "what": "Rejuvenating Breeze",
     "changes": [
      "Cooldown: 20s → 15s"
     ],
     "group": "Nature Staffs",
     "why": "Breeze’s cooldown has been significantly reduced to improve the reliability of sustained healing-over-time and raise the floor for Nature Staff’s group healing potential.",
     "target": "all Nature Staffs"
    },
    {
     "what": "Berserk Potion",
     "changes": [
      "All tiers of Berserk Potion now apply -10% defense (rather than dropping to -20%)"
     ],
     "group": "Potions",
     "why": "Berserk Potion’s defensive penalty no longer becomes harsher with higher potion tier; all tiers now share the Tier 4 potion value.",
     "target": null
    }
   ]
  }
 ]
};
