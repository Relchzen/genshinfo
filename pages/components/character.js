export const Character = [
    {
        id: 1,
        name: "albedo",
        role: "sub-dps",
        bestWeapon: [{
            name: "Cinnabar Spindle",
            source: "https://rerollcdn.com/GENSHIN/Weapons/Cinnabar_Spindle.png",
            api: 'https://api.genshin.dev/weapons/cinnabar -spindle'
        },
        {
            name: "Harbinger of Dawn",
            source: "https://api.genshin.dev/weapons/harbinger-of-dawn/icon",
            api: 'https://api.genshin.dev/weapons/harbinger-of-dawn'
        },
        {
            name: "Festering Desire",
            source: "https://api.genshin.dev/weapons/festering-desire/icon",
            api: 'https://api.genshin.dev/weapons/festering-desire'
        }
        ],
        bestArtifact: [
            [{
                name: "Husk of Opulent Dreams",
                stack: 4,
                source: "https://api.genshin.dev/artifacts/husk-of-opulent-dreams/flower-of-life",
                api: "https://api.genshin.dev/artifacts/husk-of-opulent-dreams"
            }],
            [
                {
                    name: 'Archaic Petra',
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/archaic-petra/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/archaic-petra"
                },
                {
                    name: "Husk of Opulent Dreams",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/husk-of-opulent-dreams/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/husk-of-opulent-dreams"
                }
            ],
            [
                {
                    name: 'Archaic Petra',
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/archaic-petra/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/archaic-petra"
                },
                {
                    name: "Noblesse Oblige",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/noblesse-oblige"
                }
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Crit Rate/DMG /DEF%"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Crit Rate/DMG /DEF%"
            },
            {
                name: "sand",
                priority: "DEF%",
                sub: "Crit Rate/DMG /DEF%"
            },
            {
                name: "goblet",
                priority: "Geo DMG",
                sub: "Crit Rate/DMG /DEF%"
            }
        ],
        bestTeam: [
            ["xiao", "albedo", "jean", "zhongli"],
            ["xiangling", "xingqiu", "albedo", "fischl"]
        ]
    },
    { name: "aloy" },
    "amber",
    "arataki-itto",
    "ayaka",
    "ayato",
    "barbara",
    "beidou",
    "bennett",
    "chongyun",
    "collei",
    "diluc",
    "diona",
    "eula",
    "fischl",
    "ganyu",
    "gorou",
    "hu-tao",
    {
        id: 19,
        name: "jean",
        role: "Healer",
        bestWeapon: [{
            name: "Amenoma Kageuchi",
            source: "https://api.genshin.dev/weapons/amenoma-kageuchi/icon",
            api: "https://api.genshin.dev/weapons/amenoma-kageuchi"
        },
        {
            name: "Aquila Favonia",
            source: "https://api.genshin.dev/weapons/aquila-favonia/icon",
            api: "https://api.genshin.dev/weapons/aquila-favonia"
        },
        {
            name: "Skyward Blade",
            source: "https://api.genshin.dev/weapons/skyward-blade/icon",
            api: "https://api.genshin.dev/weapons/skyward-blade"
        }],
        bestArtifact: [
            [{
                name: "Viridescent Venerer",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/viridescent-venerer/flower-of-life",
                api: "https://api.genshin.dev/artifacts/Viridescent-Venerer"
            }],
            [{
                name: "Gladiator's Finale",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
            },
            {
                name: "Maiden Beloved",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/maiden-beloved/flower-of-life",
                api: "https://api.genshin.dev/artifacts/maiden-beloved"
            }],
            [{
                name: "Gladiator's Finale",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
            },
            {
                name: "Ocean-Hued Clam",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/ocean-hued-clam/flower-of-life",
                api: "https://api.genshin.dev/artifacts/ocean-hued-clam"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "ATK%/Energy Recharge"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "ATK% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "ATK / Energy Recharge"
            },
            {
                name: "goblet",
                priority: "ATK%",
                sub: "ATK / Energy Recharge"
            }
        ],
        bestTeam: [
            ["jean", "rosaria", "xingqiu", "sucrose"]
        ]
    },
    {
        id: 20,
        name: "kaeya",
        role: "Sub-DPS",
        bestWeapon: [{
            name: "Freedom-Sworn",
            source: "https://api.genshin.dev/weapons/freedom-sworn/icon",
            api: "https://api.genshin.dev/weapons/freedom-sworn"
        },
        {
            name: "Amenoma Kageuchi",
            source: "https://api.genshin.dev/weapons/amenoma-kageuchi/icon",
            api: "https://api.genshin.dev/weapons/amenoma-kageuchi"
        },
        {
            name: "Skyward Blade",
            source: "https://api.genshin.dev/weapons/skyward-blade/icon",
            api: "https://api.genshin.dev/weapons/skyward-blade"
        }],
        bestArtifact: [
            [{
                name: "Blizzard Strayer",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/blizzard-strayer/flower-of-life",
                api: "https://api.genshin.dev/artifacts/blizzard-Strayer"
            },
            {
                name: "Noblesse Oblige",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                api: "https://api.genshin.dev/artifacts/noblesse-Oblige"
            }],
            [{
                name: "Noblesse Oblige",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                api: "https://api.genshin.dev/artifacts/noblesse-Oblige"
            }],
            [{
                name: "Emblem Of Severed Fate",
                stack: "4",
                source: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/MagnificentTsuba.png",
                api: "https://api.genshin.dev/artifacts/emblem-Of-Severed-Fate"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "CRIT DMG / CRIT Rate / ATK% / Elemental Mastery"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "CRIT DMG / CRIT Rate / ATK% / Elemental Mastery"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / Elemental Mastery"
            },
            {
                name: "goblet",
                priority: "Cryo DMG Bonus",
                sub: "CRIT DMG / CRIT Rate / Elemental Mastery / ATK%"
            }
        ],
        bestTeam: [
            ["Kaeya", "Diluc", "Venti", "Bennet"],
            ["Kaeya", "Bennet", "Xiangling", "Lisa"]
        ]
    },
    {
        id: 21,
        name: "kazuha",
        role: "Support",
        bestWeapon: [
            {
                name: "Freedom-Sworn",
                source: "https://api.genshin.dev/weapons/freedom-sworn/icon",
                api: "https://api.genshin.dev/weapons/freedom-sworn"
            },
            {
                name: "Iron Sting",
                source: "https://api.genshin.dev/weapons/iron-sting/icon",
                api: "https://api.genshin.dev/weapons/iron-sting"
            },
            {
                name: "Sacrificial Sword",
                source: "https://api.genshin.dev/weapons/sacrificial-sword/icon",
                api: "https://api.genshin.dev/weapons/sacrificial-sword"
            }],
        bestArtifact: [
            [{
                name: "Viridescent Venerer",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/viridescent-venerer/flower-of-life",
                api: "https://api.genshin.dev/artifacts/Viridescent-Venerer"
            }],
            [{
                name: "Gilded Dreams",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/gilded-dreams/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gilded-dreams"
            }]],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "Elemental Mastery / Energy Recharge"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "Elemental Mastery / Energy Recharge"
            },
            {
                name: "sand",
                priority: "Elemental Mastery",
                sub: "Energy Recharge"
            },
            {
                name: "goblet",
                priority: "Elemental Mastery",
                sub: "Energy Recharge"
            }
        ],
        bestTeam: [
            ["Kazuha", "Nahida", "Kuki Shonpbu", "Ayato"],
            ["kazuha", "Xiangling", "Xingqiu", "Bennet"]
        ]
    },
    {
        id: 22,
        name: "keqing",
        role: "DPS",
        bestWeapon: [
            {
                name: "Mistsplitter Reforged",
                source: "https://api.genshin.dev/weapons/mistsplitter-reforged/icon",
                api: "https://api.genshin.dev/weapons/mistsplitter-reforged"
            },
            {
                name: "Primordial Jade Cutter",
                source: "https://api.genshin.dev/weapons/primordial-jade-cutter/icon",
                api: "https://api.genshin.dev/weapons/primordial-jade-cutter"
            },
            {
                name: "Summit Shaper",
                source: "https://api.genshin.dev/weapons/summit-shaper/icon",
                api: "https://api.genshin.dev/weapons/summit-shaper"
            }],
        bestArtifact: [
            [{
                name: "Thundering Fury",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/thundering-fury/flower-of-life",
                api: "https://api.genshin.dev/artifacts/thundering-fury"
            },
            {
                name: "Gladiator's Finale",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
            }],
            [{
                name: "Thundersoother",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/thundersoother/flower-of-life",
                api: "https://api.genshin.dev/artifacts/thundersoother"
            }],
            [{
                name: "Gladiator's Finale",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
            },
            {
                name: "Shimenawa's Reminiscence",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/shimenawa-s-reminiscence/flower-of-life",
                api: "https://api.genshin.dev/artifacts/shimenawa-s-reminiscence"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "Crit Rate/Crit Damage / ATK% / Energy Recharge"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "Crit Rate/Crit Damage / ATK% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "Crit Rate/Crit Damage / ATK / Energy Recharge"
            },
            {
                name: "goblet",
                priority: "Electo DMG Bonus",
                sub: "Crit Rate/Crit Damage / ATK% / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Keqing", "Nahida", "Kuki Shinobu", "Zhongli"],
            ["Keqing", "Layla", "Fischl", "Diona"]
        ]
    },
    {
        id: 23,
        name: "klee",
        role: "DPS",
        bestWeapon: [
            {
                name: "Lost Prayer To The Sacred Winds",
                source: "https://api.genshin.dev/weapons/lost-prayer-to-the-sacred-winds/icon",
                api: "https://api.genshin.dev/weapons/lost-prayer-to-the-sacred-winds"
            },
            {
                name: "Skyward Atlas",
                source: "https://api.genshin.dev/weapons/skyward-atlas/icon",
                api: "https://api.genshin.dev/weapons/skyward-atlas"
            },
            {
                name: "The Widsith",
                source: "https://api.genshin.dev/weapons/the-widsith/icon",
                api: "https://api.genshin.dev/weapons/the-widsith"
            }],
        bestArtifact: [
            [{
                name: "Crimson Witch Of Flames",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/crimson-witch-of-flames/flower-of-life",
                api: "https://api.genshin.dev/artifacts/crimson-witch-of-flames"
            }],
            [{
                name: "Crimson Witch Of Flames",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/crimson-witch-of-flames/flower-of-life",
                api: "https://api.genshin.dev/artifacts/crimson-witch-of-flames"
            },
            {
                name: "Gladiator's Finale",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
            }],
            [{
                name: "Crimson Witch Of Flames",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/crimson-witch-of-flames/flower-of-life",
                api: "https://api.genshin.dev/artifacts/crimson-witch-of-flames"
            },
            {
                name: "Noblesse Oblige",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                api: "https://api.genshin.dev/artifacts/noblesse-Oblige"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "Crit Rate/DMG / Elemental Mastery / Energy Recharge"
            },
            {
                name: "goblet",
                priority: "Pyro DMG Bonus",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Klee", "Rosaria", "Kazuha", "Layla"],
            ["Klee", "Xingqiu", "Sucrose", "Bennet"]
        ]
    },
    {
        id: 24,
        name: "kokomi",
        role: "Support/Healer",
        bestWeapon: [
            {
                name: "Everlasting Moonglow",
                source: "https://api.genshin.dev/weapons/everlasting-moonglow/icon",
                api: "https://api.genshin.dev/weapons/everlasting-moonglow"
            },
            {
                name: "Hakushin Ring",
                source: "https://api.genshin.dev/weapons/hakushin-ring/icon",
                api: "https://api.genshin.dev/weapons/hakushin-ring"
            },
            {
                name: "Thrilling Tales Of Dragon Slayers",
                source: "https://api.genshin.dev/weapons/thrilling-tales-of-dragon-slayers/icon",
                api: "https://api.genshin.dev/weapons/thrilling-tales-of-dragon-slayers"
            }],
        bestArtifact: [
            [{
                name: "Ocean-Hued Clam",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/ocean-hued-clam/flower-of-life",
                api: "https://api.genshin.dev/artifacts/ocean-hued-clam"
            }],
            [{
                name: "Ocean-Hued Clam",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/ocean-hued-clam/flower-of-life",
                api: "https://api.genshin.dev/artifacts/ocean-hued-clam"
            },
            {
                name: "Tenacity Of The Millelith",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith/flower-of-life",
                api: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "HP% / Energy Recharge / Elemental Mastery"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "HP% / Energy Recharge / Elemental Mastery"
            },
            {
                name: "sand",
                priority: "HP%",
                sub: "HP% / Energy Recharge / Elemental Mastery"
            },
            {
                name: "goblet",
                priority: "HP%",
                sub: "HP% / Energy Recharge / Elemental Mastery"
            }
        ],
        bestTeam: [
            ["Kokomi", "Nilou", "Nahida", "Traveler(Dendro)"],
            ["Kokomi", "Lisa", "Fischl", "Traveler(Anemo)"]
        ]
    },
    {
        id: 25,
        name: "kuki-shinobu",
        role: "Support/Healer",
        bestWeapon: [
            {
                name: "Freedom-Sworn",
                source: "https://api.genshin.dev/weapons/freedom-sworn/icon",
                api: "https://api.genshin.dev/weapons/freedom-sworn"
            },
            {
                name: "Primordial Jade Cutter",
                source: "https://api.genshin.dev/weapons/primordial-jade-cutter/icon",
                api: "https://api.genshin.dev/weapons/primordial-jade-cutter"
            },
            {
                name: "Iron Sting",
                source: "https://api.genshin.dev/weapons/iron-sting/icon",
                api: "https://api.genshin.dev/weapons/iron-sting"
            }
        ],
        bestArtifact: [
            [{
                name: "Tenacity Of The Millelith",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith/flower-of-life",
                api: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith"
            }],
            [{
                name: "Wanderer's Troupe",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/wanderer-s-troupe/flower-of-life",
                api: "https://api.genshin.dev/artifacts/wanderer-s-troupe"
            },
            {
                name: "Tenacity Of The Millelith",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith/flower-of-life",
                api: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "HP% / Elemental Mastery / Energy Recharge / CRIT Rate or DMG"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "HP% / Elemental Mastery / Energy Recharge / CRIT Rate or DMG"
            },
            {
                name: "sand",
                priority: "HP%",
                sub: "Elemental Mastery / Energy Recharge / CRIT Rate or DMG"
            },
            {
                name: "goblet",
                priority: "HP%",
                sub: "Elemental Mastery / Energy Recharge / CRIT Rate or DMG"
            }
        ],
        bestTeam: [
            ["Kuki Shinobu", "Childe", "Traveler(Dendro)", "Collei"],
            ["Kuki Shinobu", "Barbara", "Traveler(Dendro)", "Collei"]
        ]
    },
    {
        id: 26,
        name: "lisa",
        role: "Sub-DPS",
        bestWeapon: [
            {
                name: "Kagura's Verity",
                source: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/30998_w.png",
                api: "https://api.genshin.dev/weapons/kagura's-verity"
            },
            {
                name: "Lost Prayer To The Sacred Winds",
                source: "https://api.genshin.dev/weapons/lost-prayer-to-the-sacred-winds/icon",
                api: "https://api.genshin.dev/weapons/lost-prayer-to-the-sacred-winds"
            },
            {
                name: "The Widsith",
                source: "https://api.genshin.dev/weapons/the-widsith/icon",
                api: "https://api.genshin.dev/weapons/the-widsith"
            }
        ],
        bestArtifact: [
            [{
                name: "Thundering Fury",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/thundering-fury/flower-of-life",
                api: "https://api.genshin.dev/artifacts/thundering-fury"
            },
            {
                name: "Gladiator's Finale",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
            }],
            [{
                name: "Thundering Fury",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/thundering-fury/flower-of-life",
                api: "https://api.genshin.dev/artifacts/thundering-fury"
            },
            {
                name: "Noblesse Oblige",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                api: "https://api.genshin.dev/artifacts/noblesse-oblige"
            }],
            [{
                name: "Emblem Of Severed Fate",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK% / Energy Recharge",
                sub: "CRIT DMG / CRIT Rate / Elemental Mastery"
            },
            {
                name: "goblet",
                priority: "Electro DMG Bonus%",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Alhaitham", "Fischl", "Lisa", "Yaoyao"],
            ["Lisa", "Collei", "Sucrose", "Yaoyao"],
        ]
    },
    {
        id: 27,
        name: "mona",
        role: "Sub-DPS/Support",
        bestWeapon: [
            {
                name: "Skyward Atlas",
                source: "https://api.genshin.dev/weapons/skyward-atlas/icon",
                api: "https://api.genshin.dev/weapons/skyward-atlas"
            },
            {
                name: "Lost Prayer To The Sacred Winds",
                source: "https://api.genshin.dev/weapons/lost-prayer-to-the-sacred-winds/icon",
                api: "https://api.genshin.dev/weapons/lost-prayer-to-the-sacred-winds"
            },
            {
                name: "Oathsworn Eye",
                source: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/30900_w.png",
                api: "https://api.genshin.dev/weapons/oathsworn-eye"
            }
        ],
        bestArtifact: [
            [{
                name: "Emblem Of Severed Fate",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
            }],
            [{
                name: "Emblem Of Severed Fate",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
            },
            {
                name: "Noblesse Oblige",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                api: "https://api.genshin.dev/artifacts/noblesse-oblige"
            }],
            [{
                name: "Heart Of Depth",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/heart-of-depth/flower-of-life",
                api: "https://api.genshin.dev/artifacts/heart-of-depth"
            },
            {
                name: "Noblesse Oblige",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                api: "https://api.genshin.dev/artifacts/noblesse-oblige"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "Crit Rate/DMG / Energy Recharge / ATK%"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "Crit Rate/DMG / Energy Recharge / ATK%"
            },
            {
                name: "sand",
                priority: "ATK% / Energy Recharge",
                sub: "Crit Rate/DMG / Energy Recharge / ATK%"
            },
            {
                name: "goblet",
                priority: "Hydro DMG Bonus",
                sub: "Crit Rate/DMG / Energy Recharge / ATK%"
            }
        ],
        bestTeam: [
            ["Mona", "Fischl", "Kuki Shinobu", "Kazuha"],
            ["Mona", "Layla", "Sucrose", "Diona"]
        ]
    },
    {
        id: 28,
        name: "ningguang",
        role: "Sub-DPS",
        bestWeapon: [
            {
                name: "Lost Prayer To The Sacred Winds",
                source: "https://api.genshin.dev/weapons/lost-prayer-to-the-sacred-winds/icon",
                api: "https://api.genshin.dev/weapons/lost-prayer-to-the-sacred-winds"
            },
            {
                name: "Memory Of Dust",
                source: "https://api.genshin.dev/weapons/memory-of-dust/icon",
                api: "https://api.genshin.dev/weapons/memory-of-dust"
            },
            {
                name: "Kagura's Verity",
                source: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/30998_w.png",
                api: "https://api.genshin.dev/weapons/kagura's-verity"
            }
        ],
        bestArtifact: [
            [{
                name: "Archaic Petra",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/archaic-petra/flower-of-life",
                api: "https://api.genshin.dev/artifacts/archaic-petra"
            },
            {
                name: "Gladiator's Finale",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
            }],
            [{
                name: "Shimenawa's Reminiscence",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/shimenawa-s-reminiscence/flower-of-life",
                api: "https://api.genshin.dev/artifacts/shimenawa-s-reminiscence"
            },
            {
                name: "Gladiator's Finale",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
            }],
            [{
                name: "Retracing Bolide",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/retracing-bolide/flower-of-life",
                api: "https://api.genshin.dev/artifacts/retracing-bolide"
            }]],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / Flat ATK"
            },
            {
                name: "goblet",
                priority: "Geo DMG Bonus",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Ningguang", "Zhongli", "Raiden Shogun", "Yelan"],
            ["Ningguang", "Kaeya", "Xiangling", "Noelle"]
        ]
    },
    {
        id: 29,
        name: "noelle",
        role: "DPS",
        bestWeapon: [
            {
                name: "Redhorn Stonethresher",
                source: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/30054_w.png",
                api: "https://api.genshin.dev/weapons/redhorn-stonethresher"
            },
            {
                name: "Skyward Pride",
                source: "https://api.genshin.dev/weapons/skyward-pride/icon",
                api: "https://api.genshin.dev/weapons/skyward-pride"
            },
            {
                name: "Serpent Spine",
                source: "https://api.genshin.dev/weapons/serpent-spine/icon",
                api: "https://api.genshin.dev/weapons/serpent-spine"
            }
        ],
        bestArtifact: [
            [{
                name: "Husk Of Opulent Dreams",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/husk-of-opulent-dreams/flower-of-life",
                api: "https://api.genshin.dev/artifacts/husk-of-opulent-dreams"
            }],
            [{
                name: "Husk Of Opulent Dreams",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/husk-of-opulent-dreams/flower-of-life",
                api: "https://api.genshin.dev/artifacts/husk-of-opulent-dreams"
            },
            {
                name: "Archaic Petra",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/archaic-petra/flower-of-life",
                api: "https://api.genshin.dev/artifacts/archaic-petra"
            }],
            [{
                name: "Retracing Bolide",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/retracing-bolide/flower-of-life",
                api: "https://api.genshin.dev/artifacts/retracing-bolide"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "Crit Rate/DMG / Energy Recharge / DEF%"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "Crit Rate/DMG / Energy Recharge / DEF%"
            },
            {
                name: "sand",
                priority: "DEF%",
                sub: "Crit Rate/DMG / Energy Recharge / DEF%"
            },
            {
                name: "goblet",
                priority: "Geo DMG Bonus",
                sub: "Crit Rate/DMG / Energy Recharge / DEF%"
            }
        ],
        bestTeam: [
            ["Noelle", "Albedo", "Gorou", "Zhongli"],
            ["Noelle", "Nongguang", "Traveler(Geo)", "Gorou"]
        ]
    },
    {
        id: 30,
        name: "qiqi",
        role: "Healer",
        bestWeapon: [
            {
                name: "Sacrificial Sword",
                source: "https://api.genshin.dev/weapons/sacrificial-sword/icon",
                api: "https://api.genshin.dev/weapons/sacrificial-sword"
            },
            {
                name: "Aquila Favonia",
                source: "https://api.genshin.dev/weapons/aquila-favonia/icon",
                api: "https://api.genshin.dev/weapons/aquila-favonia"
            },
            {
                name: "Summit Shaper",
                source: "https://api.genshin.dev/weapons/summit-shaper/icon",
                api: "https://api.genshin.dev/weapons/summit-shaper"
            }
        ],
        bestArtifact: [
            [{
                name: "Ocean-Hued Clam",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/ocean-hued-clam/flower-of-life",
                api: "https://api.genshin.dev/artifacts/ocean-hued-clam"
            }],
            [{
                name: "Maiden Beloved",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/maiden-beloved/flower-of-life",
                api: "https://api.genshin.dev/artifacts/maiden-beloved"
            },
            {
                name: "Gladiator's Finale",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "ATK% / Energy Recharge / Elemental Mastery"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "ATK% / Energy Recharge / Elemental Mastery"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "ATK% / Energy Recharge / Elemental Mastery"
            },
            {
                name: "goblet",
                priority: "ATK%",
                sub: "ATK% / Energy Recharge / Elemental Mastery"
            }
        ],
        bestTeam: [
            ["Eula", "Fischl", "Beidou", "Qiqi"],
            ["Kaeya", "Fischl", "Kuki Shinobu", "Qiqi"]
        ]
    },
    {
        id: 31,
        name: "raiden",
        role: "DPS/DPS/Support",
        bestWeapon: [
            {
                name: "Engulfing Lightning",
                source: "https://api.genshin.dev/weapons/engulfing-lightning/icon",
                api: "https://api.genshin.dev/weapons/engulfing-lightning"
            },
            {
                name: "Skyward Spiner",
                source: "https://api.genshin.dev/weapons/skyward-spine/icon",
                api: "https://api.genshin.dev/weapons/skyward-spine"
            },
            {
                name: "The Catch",
                source: "https://api.genshin.dev/weapons/the-catch/icon",
                api: "https://api.genshin.dev/weapons/the-catch"
            }
        ],
        bestArtifact: [
            [{
                name: "Emblem Of Severed Fate",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
            }],
            [{
                name: "Emblem Of Severed Fate",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
            },
            {
                name: "Thundering Fury",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/thundering-fury/flower-of-life",
                api: "https://api.genshin.dev/artifacts/thundering-fury"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "Crit Rate/DMG / Energy Recharge / ATK%"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "Crit Rate/DMG / Energy Recharge / ATK%"
            },
            {
                name: "sand",
                priority: "Energy Recharge",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery"
            },
            {
                name: "goblet",
                priority: "Electro DMG Bonus",
                sub: "Crit Rate/DMG / Energy Recharge / ATK%"
            }
        ],
        bestTeam: [
            ["Raiden Shogun", "Xiangling", "Xingqiu", "Bennet"],
            ["Raiden Shogun", "Barbara", "Collei", "Traveler(Dendro)"]
        ]
    },
    {
        id: 32,
        name: "razor",
        role: "DPS",
        bestWeapon: [
            {
                name: "Song Of Broken Pines",
                source: "https://api.genshin.dev/weapons/song-of-broken-pines/icon",
                api: "https://api.genshin.dev/weapons/song-of-broken-pines"
            },
            {
                name: "Wolf's Gravestone",
                source: "https://api.genshin.dev/weapons/wolf-s-gravestone/icon",
                api: "https://api.genshin.dev/weapons/wolf-s-gravestone"
            },
            {
                name: "Serpent Spine",
                source: "https://api.genshin.dev/weapons/serpent-spine/icon",
                api: "https://api.genshin.dev/weapons/serpent-spine"
            }
        ],
        bestArtifact: [
            [{
                name: "Pale Flame",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/pale-flame/flower-of-life",
                api: "https://api.genshin.dev/artifacts/pale-flame"
            }],
            [{
                name: "Pale Flame",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/pale-flame/flower-of-life",
                api: "https://api.genshin.dev/artifacts/pale-flame"
            },
            {
                name: "Bloodstained Chivalry",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/bloodstained-chivalry/flower-of-life",
                api: "https://api.genshin.dev/artifacts/bloodstained-chivalry"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "Crit Rate/DMG / ATK% / Energy Recharge"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "Crit Rate/DMG / ATK% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "Crit Rate/DMG / ATK% / Energy Recharge"
            },
            {
                name: "goblet",
                priority: "Physical DMG Bonus",
                sub: "Crit Rate/DMG / ATK% / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Razor", "fischl", "Yun jin", "Qiqi"],
            ["Razor", "fischl", "Rosaria", "Diona"]
        ]
    },
    {
        id: 33,
        name: "rosaria",
        role: "DPS",
        bestWeapon: [
            {
                name: "Primordial Jade Winged-Spear",
                source: "https://api.genshin.dev/weapons/primordial-jade-winged-spear/icon",
                api: "https://api.genshin.dev/weapons/primordial-jade-winged-spear"
            },
            {
                name: "Staff of Homa",
                source: "https://api.genshin.dev/weapons/staff-of-homa/icon",
                api: "https://api.genshin.dev/weapons/staff-of-homa"
            },
            {
                name: "Deathmatch",
                source: "https://api.genshin.dev/weapons/deathmatch/icon",
                api: "https://api.genshin.dev/weapons/deathmatch"
            }
        ],
        bestArtifact: [
            [{
                name: "Pale Flame",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/pale-flame/flower-of-life",
                api: "https://api.genshin.dev/artifacts/pale-flame"
            }],
            [{
                name: "Pale Flame",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/pale-flame/flower-of-life",
                api: "https://api.genshin.dev/artifacts/pale-flame"
            },
            {
                name: "Bloodstained Chivalry",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/bloodstained-chivalry/flower-of-life",
                api: "https://api.genshin.dev/artifacts/bloodstained-chivalry"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "CCrit Rate/DMG / ATK%"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "CCrit Rate/DMG / ATK%"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "CCrit Rate/DMG / ATK%"
            },
            {
                name: "goblet",
                priority: "Physical DMG Bonus",
                sub: "CCrit Rate/DMG / ATK%"
            }
        ],
        bestTeam: [
            ["Rosaria", "Raiden Shogun", "Yun Jin", "Diona"],
            ["Rosaria", "Chongyun", "Xiangling", "Bennett"]
        ]
    },
    {
        id: 34,
        name: "sara",
        role: "Support",
        bestWeapon: [
            {
                name: "Skyward Harp",
                source: "https://api.genshin.dev/weapons/skyward-harp/icon",
                api: "https://api.genshin.dev/weapons/skyward-harp"
            },
            {
                name: "Elegy For The End",
                source: "https://api.genshin.dev/weapons/elegy-for-the-end/icon",
                api: "https://api.genshin.dev/weapons/elegy-for-the-end"
            },
            {
                name: "Sacrificial Bow",
                source: "https://api.genshin.dev/weapons/sacrificial-bow/icon",
                api: "https://api.genshin.dev/weapons/sacrificial-bow"
            }
        ],
        bestArtifact: [
            [{
                name: "Noblesse Oblige",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                api: "https://api.genshin.dev/artifacts/noblesse-oblige"
            }],
            [{
                name: "Emblem Of Severed Fate",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
            }],
            [{
                name: "Noblesse Oblige",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                api: "https://api.genshin.dev/artifacts/noblesse-oblige"
            },
            {
                name: "Thundering Fury",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/thundering-fury/flower-of-life",
                api: "https://api.genshin.dev/artifacts/thundering-fury"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "Energy Recharge / ATK% / CRIT Rate / CRIT DMG"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "Energy Recharge / ATK% / CRIT Rate / CRIT DMG"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "Energy Recharge / ATK% / CRIT Rate / CRIT DMG"
            },
            {
                name: "goblet",
                priority: "Electro DMG Bonus",
                sub: "Energy Recharge / ATK% / CRIT Rate / CRIT DMG"
            }
        ],
        bestTeam: [
            ["Sara", "Yae Miko", "Kokomi", "Nahida"],
            ["Sara", "Xiangling", "Barbara", "Lisa"]
        ]
    },
    {
        id: 35,
        name: "sayu",
        role: "Healer",
        bestWeapon: [
            {
                name: "Favonius Greatsword",
                source: "https://api.genshin.dev/weapons/favonius-greatsword/icon",
                api: "https://api.genshin.dev/weapons/favonius-greatsword"
            },
            {
                name: "Skyward Pride",
                source: "https://api.genshin.dev/weapons/skyward-pride/icon",
                api: "https://api.genshin.dev/weapons/skyward-pride"
            },
            {
                name: "Katsuragikiri Nagamasa",
                source: "https://api.genshin.dev/weapons/katsuragikiri-nagamasa/icon",
                api: "https://api.genshin.dev/weapons/katsuragikiri-nagamasa"
            }
        ],
        bestArtifact: [
            [{
                name: "Viridescent Venerer",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/viridescent-venerer/flower-of-life",
                api: "https://api.genshin.dev/artifacts/Viridescent-Venerer"
            }],
            [{
                name: "Gilded Dreams",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/gilded-dreams/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gilded-dreams"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "Elemental Mastery / Energy Recharge / ATK%"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "Elemental Mastery / Energy Recharge / ATK%"
            },
            {
                name: "sand",
                priority: "Elemental Mastery / Energy Recharge",
                sub: "Elemental Mastery / Energy Recharge / ATK%"
            },
            {
                name: "goblet",
                priority: "Elemental Mastery",
                sub: " Energy Recharge / ATK%"
            }
        ],
        bestTeam: [
            ["Sayu", "Ganyu", "Mona", "Layla"],
            ["Sayu", "Kaeya", "Xiangling", "Amber"]
        ]
    },
    {
        id: 36,
        name: "shenhe",
        role: "Support",
        bestWeapon: [
            {
                name: "Calamity Queller",
                source: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/30574_w.png",
                api: "https://api.genshin.dev/weapons/calamity-queller"
            },
            {
                name: "Engulfing Lightning",
                source: "https://api.genshin.dev/weapons/engulfing-lightning/icon",
                api: "https://api.genshin.dev/weapons/engulfing-lightning"
            },
            {
                name: "Skyward Spine",
                source: "https://api.genshin.dev/weapons/skyward-spine/icon",
                api: "https://api.genshin.dev/weapons/skyward-spine"
            }
        ],
        bestArtifact: [
            [{
                name: "Noblesse Oblige",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                api: "https://api.genshin.dev/artifacts/noblesse-oblige"
            }],
            [{
                name: "Shimenawa's Reminiscence",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/shimenawa-s-reminiscence/flower-of-life",
                api: "https://api.genshin.dev/artifacts/shimenawa-s-reminiscence"
            },
            {
                name: "Gladiator's Finale",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "ATK% / Energy Recharge"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "ATK% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "ATK% / Energy Recharge"
            },
            {
                name: "goblet",
                priority: "ATK%",
                sub: "ATK% / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Ayaka", "Shenhe", "Sucrose", "Diona"],
            ["Rosaria", "Fisch;", "Shenhe", "Kuki Shinobu"]
        ]
    },
    {
        id: 37,
        name: "shikanoin-heizou",
        role: "Sub-DPS",
        bestWeapon: [
            {
                name: "Skyward Atlas",
                source: "https://api.genshin.dev/weapons/skyward-atlas/icon",
                api: "https://api.genshin.dev/weapons/skyward-atlas"
            },
            {
                name: "Kagura's Verity",
                source: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools/genshin-impact/gacha/30998_w.png",
                api: "https://api.genshin.dev/weapons/kagura's-verity"
            },
            {
                name: "The Widsith",
                source: "https://api.genshin.dev/weapons/the-widsith/icon",
                api: "https://api.genshin.dev/weapons/the-widsith"
            }
        ],
        bestArtifact: [
            [{
                name: "Viridescent Venerer",
                stack: "4",
                source: "https://api.genshin.dev/artifacts/viridescent-venerer/flower-of-life",
                api: "https://api.genshin.dev/artifacts/Viridescent-Venerer"
            }],
            [{
                name: "Viridescent Venerer",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/viridescent-venerer/flower-of-life",
                api: "https://api.genshin.dev/artifacts/Viridescent-Venerer"
            },
            {
                name: "Gladiator's Finale",
                stack: "2",
                source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
            }]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "Flat HP",
                sub: "CRIT DMG / CRIT Rate / Elemental Mastery / ATK%"
            },
            {
                name: "plume",
                priority: "Flat ATK",
                sub: "CRIT DMG / CRIT Rate / Elemental Mastery / ATK%"
            },
            {
                name: "sand",
                priority: "ATK% /Elemental Mastery",
                sub: "CRIT DMG / CRIT Rate / Elemental Mastery / ATK%"
            },
            {
                name: "goblet",
                priority: "Anemo DMG Bonus / Elemental Mastery",
                sub: "CRIT DMG / CRIT Rate / Elemental Mastery / ATK%"
            }
        ],
        bestTeam: [
            ["Shikanoin Heizou", "Yelan", "Fischl", "Bennett"],
            ["Shikanoin Heizou", "Fischl", "Xiangling", "Barbara"]
        ]
    },
    //sucrose================
    {   id: 38,
        name: "sucrose",
        role: "support",
        bestWeapon: [{
            name: "Sacrificial Fragments",
            source: "https://api.genshin.dev/weapons/sacrificial-fragments/icon",
            api: 'https://api.genshin.dev/weapons/sacrificial-fragments'
        },
        {
            name: "Favonius Codex",
            source: "https://api.genshin.dev/weapons/favonius-codex/icon",
            api: 'https://api.genshin.dev/weapons/favonius-codex'
        },
        {
            name: "Thrilling Tales Of Dragon Slayers ",
            source: "https://api.genshin.dev/weapons/thrilling-tales-of-dragon-slayers/icon",
            api: 'https://api.genshin.dev/weapons/thrilling-tales-of-dragon-slayers'
        }
        ],
        bestArtifact: [
            [{
                name: "Viridescent Venerer",
                stack: 4,
                source: "https://api.genshin.dev/artifacts/viridescent-venerer/flower-of-life",
                api: "https://api.genshin.dev/artifacts/viridescent-venerer"
            }],
            [
                {
                    name: 'Gilded Dreams',
                    stack: 2,
                    source: "https://rerollcdn.com/GENSHIN/Gear/viridescent_venerer.png",
                    api: "https://api.genshin.dev/artifacts/gildet-dreams"
                },
                {
                    name: "Wanderer's Troupe",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/wanderer-s-troupe/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/wanderer-s-troupe"
                }
            ],
            [
                {
                    name: 'Instructor',
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/instructor/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/instructor"
                }
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Elemental Mastery / Energy Recharge / ATK% / ATK"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Elemental Mastery / Energy Recharge / ATK%"
            },
            {
                name: "sand",
                priority: "Elemental Mastery",
                sub: "Energy Recharge / ATK% / ATK"
            },
            {
                name: "goblet",
                priority: "Elemental Mastery",
                sub: "Energy Recharge / ATK% / ATK"
            }
        ],
        bestTeam: [
            ["sucrose", "klee", "yelan", "bennet"],
            ["sucrose", "lisa", "dendro traveler", "barbaras"]
        ]
    },
    //tartaglia==============
    {   id: 39,
        name: "tartaglia",
        role: "dps",
        bestWeapon: [{
            name: "Polar Star",
            source: "https://rerollcdn.com/GENSHIN/Weapons/Polar_Star.png",
            api: 'https://api.genshin.dev/weapons/polar-star'
        },
        {
            name: "Skyward Harp",
            source: "https://rerollcdn.com/GENSHIN/Weapons/Skyward_Harp.png",
            api: 'https://api.genshin.dev/weapons/skyward-harp'
        },
        {
            name: "Thundering Pulse",
            source: "https://api.genshin.dev/weapons/thundering-pulse/icon",
            api: 'https://api.genshin.dev/weapons/thundering-pulse'
        }
        ],
        bestArtifact: [
            [
                {
                    name: "Noblesse Oblige",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/noblesse-oblige"
                },
                {
                    name: "Wanderer's Troupe",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/wanderer-s-troupe/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/wanderer-s-troupe"
                }
            ],
            [
                {
                    name: 'Heart of Depth',
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/heart-of-depth/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/heart-of-depth"
                },
                {
                    name: "Noblesse Oblige",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/noblesse-oblige"
                },
            ],
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Crit Rate/DMG / Elemental Mastery / Energy Recharge"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Crit Rate/DMG / Elemental Mastery / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "Crit Rate/DMG / Elemental Mastery / Energy Recharge"
            },
            {
                name: "goblet",
                priority: "Hydro DMG Bonus",
                sub: "Crit Rate/DMG / Elemental Mastery / Energy Recharge"
            }
        ],
        bestTeam: [
            ["tartaglia", "fischl", "beidou", "sucrose"],
            ["tartaglia", "sucrose", "bennet", "xiangling"]
        ]
    },
    //thoma==================
    {   id: 40,
        name: "thoma",
        role: "support",
        bestWeapon: [{
            name: "Favonius Lance",
            source: "https://api.genshin.dev/weapons/favonius-lance/icon",
            api: 'https://api.genshin.dev/weapons/favonius-lance'
        },
        {
            name: "Black Tassel",
            source: "https://api.genshin.dev/weapons/black-tassel/icon",
            api: 'https://api.genshin.dev/weapons/black-tassel'
        }
        ],
        bestArtifact: [
            [
                {
                    name: "Tenacity of the Millelith",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith"
                },
                {
                    name: "Emblem of Severed Fate",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
                }
            ],
            [
                {
                    name: 'Tenacity of the Millelith',
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith"
                },
                {
                    name: "Retracing Bolide",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/retracing-bolide/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/retracing-bolide"
                },
            ],
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "HP% / Energy Recharge"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "HP% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "HP%",
                sub: "Energy Recharge"
            },
            {
                name: "goblet",
                priority: "HP%",
                sub: "Energy Recharge"
            }
        ],
        bestTeam: [
            ["ayato", "nahida", "thoma", "kazuha"],
            ["xingqiu", "chongyun", "thoma", "xiangling"]
        ]
    },
    //tighnari===============
    {   id: 41,
        name: "tighnari",
        role: "DPS",
        bestWeapon: [{
            name: "Skyward Harp",
            source: "https://rerollcdn.com/GENSHIN/Weapons/Skyward_Harp.png",
            api: 'https://api.genshin.dev/weapons/skyward-harp'
        },
        {
            name: "Amos' Bow",
            source: "https://rerollcdn.com/GENSHIN/Weapons/Amos'_Bow.png",
            api: 'https://api.genshin.dev/weapons/Amos-Bow'
        },
        {
            name: "Prototype Crescent",
            source: "https://api.genshin.dev/weapons/prototype-crescent/icon",
            api: 'https://api.genshin.dev/weapons/prototype-crescent'
        }
        ],
        bestArtifact: [
            [
                {
                    name: "Deepwood Memories",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
                }
            ],
            [
                {
                    name: 'Gilded Dreams',
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/gildet-dreams/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/gildet-dreams"
                },
            ]
            [
            {
                name: "Wanderer's Troupe",
                stack: 4,
                source: "https://api.genshin.dev/artifacts/wanderer-s-troupe/flower-of-life",
                api: "https://api.genshin.dev/artifacts/wanderer-s-troupe"
            }
            ],
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Elemental Mastery / ATK% / CRIT Rate / CRIT DMG"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Elemental Mastery / ATK% / CRIT Rate / CRIT DMG"
            },
            {
                name: "sand",
                priority: "Energy Recharge / ATK% / CRIT Rate / CRIT DMG",
                sub: "Energy Recharge"
            },
            {
                name: "goblet",
                priority: "Energy Recharge / ATK% / CRIT Rate / CRIT DMG",
                sub: "Energy Recharge"
            }
        ],
        bestTeam: [
            ["tighnari", "fischl", "collei", "kuki-shinobu"],
            ["tighnari", "lisa", "collei", "barbara"]
        ]
    },
    //traveler-anemo=========
    {   id: 42,
        name: "traveler-anemo",
        role: "Support",
        bestWeapon: [
            {
                name: "Freedom-Sworn",
                source: "https://api.genshin.dev/weapons/freedom-sworn/icon",
                api: "https://api.genshin.dev/weapons/freedom-sworn"
            },
            {
                name: "Iron Sting",
                source: "https://api.genshin.dev/weapons/iron-sting/icon",
                api: "https://api.genshin.dev/weapons/iron-sting"
            },
            {
                name: "Sacrificial Sword",
                source: "https://api.genshin.dev/weapons/sacrificial-sword/icon",
                api: "https://api.genshin.dev/weapons/sacrificial-sword"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Viridescent Venerer",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/viridescent-venerer/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/viridescent-venerer"
                }
            ],
            [
                {
                    name: 'Gilded Dreams',
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/gildet-dreams/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/gildet-dreams"
                },
                {
                    name: "Wanderer's Troupe",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/wanderer-s-troupe/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/wanderer-s-troupe"
                }
            ],
            [
                {
                    name: 'Instructor',
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/instructor/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/instructor"
                }
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Elemental Mastery / Energy Recharge / ATK% / ATK"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Elemental Mastery / Energy Recharge / ATK%"
            },
            {
                name: "sand",
                priority: "Elemental Mastery",
                sub: "Energy Recharge / ATK% / ATK"
            },
            {
                name: "goblet",
                priority: "Elemental Mastery",
                sub: "Energy Recharge / ATK% / ATK"
            }
        ],
        bestTeam: [
            ["traveler-anemo", "klee", "yelan", "bennet"],
            ["traveler-anemo", "lisa", "xiangling", "barbara"]
        ]
    },
    //traveler-dendro========
    {   id: 43,
        name: "traveler-dendro",
        role: "Support",
        bestWeapon: [
            {
                name: "Freedom-Sworn",
                source: "https://api.genshin.dev/weapons/freedom-sworn/icon",
                api: "https://api.genshin.dev/weapons/freedom-sworn"
            },
            {
                name: "Iron Sting",
                source: "https://api.genshin.dev/weapons/iron-sting/icon",
                api: "https://api.genshin.dev/weapons/iron-sting"
            },
        ],
        bestArtifact: [
            [
                {
                    name: "Emblem of Severed Fate",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/deepwood-memories/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/deepwood-memories"
                }
            ],
            [
                {
                    name: 'Gilded Dreams',
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/gildet-dreams/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/gildet-dreams"
                },
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Elemental Mastery / ATK% / CRIT Rate / CRIT DMG"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Elemental Mastery / ATK% / CRIT Rate / CRIT DMG"
            },
            {
                name: "sand",
                priority: "Elemental Mastery",
                sub: "Elemental Mastery / ATK% / CRIT Rate / CRIT DMG"
            },
            {
                name: "goblet",
                priority: "Elemental Mastery",
                sub: "Elemental Mastery / ATK% / CRIT Rate / CRIT DMG"
            }
        ],
        bestTeam: [
            ["traveler-dendro", "yae-miko", "raiden shogun", "kokomi"],
            ["traveler-dendro", "fischl", "lisa", "barbara"]
        ]
    },
    //traveler-geo===========
    {   id: 44,
        name: "traveler-geo",
        role: "sub-dps",
        bestWeapon: [
            {
                name: "Primordial Jade Cutter",
                source: "https://api.genshin.dev/weapons/primordial-jade-cutter/icon",
                api: "https://api.genshin.dev/weapons/primordial-jade-cutter"
            },
            {
                name: "Summit Shaper",
                source: "https://api.genshin.dev/weapons/summit-shaper/icon",
                api: "https://api.genshin.dev/weapons/summit-shaper"
            },
            {
                name: "The Black Sword",
                source: "https://api.genshin.dev/weapons/the-black-sword/icon",
                api: "https://api.genshin.dev/weapons/the-black-sword"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Archaic Petra",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/archaic-petra/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/archaic-petra"
                },
                {
                    name: "Noblesse Oblige",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/noblesse-oblige"
                }
            ],
            [
                {
                    name: "Emblem Of Severed Fate",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
                }
            ],
            [
                {
                    name: "Noblesse Oblige",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/noblesse-oblige"
                }
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / Flat ATK"
            },
            {
                name: "goblet",
                priority: "Geo DMG Bonus",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            }
        ],
        bestTeam: [
            ["traveler-geo", "yae-miko", "zhongli", "mona"],
            ["traveler-geo", "noelle", "xiangling", "kaeya"]
        ]
    },
    //traveler-electro=======
    {   id: 45,
        name: "traveler-electro",
        role: "support",
        bestWeapon: [
            {
                name: "Sacrificial Sword",
                source: "https://api.genshin.dev/weapons/sacrificial-sword/icon",
                api: "https://api.genshin.dev/weapons/sacrificial-sword"
            },
            {
                name: "Freedom-Sworn",
                source: "https://api.genshin.dev/weapons/freedom-sworn/icon",
                api: "https://api.genshin.dev/weapons/freedom-sworn"
            },
            {
                name: "Favonius Sword",
                source: "https://api.genshin.dev/weapons/favonius-sword/icon",
                api: "https://api.genshin.dev/weapons/favonius-sword"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Emblem Of Severed Fate",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
                }
            ],
            [
                {
                    name: "Noblesse Oblige",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/noblesse-oblige"
                }
            ],
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Energy Recharge / ATK% / CRIT Rate / CRIT DMG"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Energy Recharge / ATK% / CRIT Rate / CRIT DMG"
            },
            {
                name: "sand",
                priority: "Energy Recharge",
                sub: "Electro DMG Bonus / ATK% / CRIT DMG / CRIT Rate"
            },
            {
                name: "goblet",
                priority: "Electro DMG Bonus",
                sub: "Energy Recharge / ATK% / CRIT Rate / CRIT DMG"
            }
        ],
        bestTeam: [
            ["traveler-electro", "tartaglia", "kazuha", "diona"],
            ["traveler-electro", "xiangling", "barbara", "kaeya"]
        ]
    },
    //venti==================
    {   id: 46,
        name: "venti",
        role: "Support",
        bestWeapon: [
            {
                name: "Elegy for the End",
                source: "https://api.genshin.dev/weapons/elegy-for-the-end/icon",
                api: "https://api.genshin.dev/weapons/elegy-for-the-end"
            },
            {
                name: "Skyward Harp",
                source: "https://api.genshin.dev/weapons/skyward-harp/icon",
                api: "https://api.genshin.dev/weapons/skyward-harp"
            },
            {
                name: "The Stringless",
                source: "https://api.genshin.dev/weapons/the-stringless/icon",
                api: "https://api.genshin.dev/weapons/the-stringless/icon"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Viridescent Venerer",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/viridescent-venerer/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/viridescent-venerer"
                }
            ],
            [
                {
                    name: "Wanderer's Troupe",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/wanderer-s-troupe/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/wanderer-s-troupe"
                },
                {
                    name: 'Gilded Dreams',
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/gildet-dreams/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/gildet-dreams"
                }
            ],
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Elemental Mastery / Energy Recharge / ATK%"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Elemental Mastery / Energy Recharge / ATK%"
            },
            {
                name: "sand",
                priority: "Energy Recharge",
                sub: "Energy Recharge / ATK% / Elemental Mastery / HP%"
            },
            {
                name: "goblet",
                priority: "Energy Recharge",
                sub: "ATK% / Elemental Mastery / HP% / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Venti", "ganyu", "mona", "diona"],
            ["Venti", "collei", "traveler-dendro", "fischl"]
        ]
    },
    //xiangling==============
    {   id: 47,
        name: "xiangling",
        role: "sub-dps",
        bestWeapon: [
            {
                name: "Staff Of Homa",
                source: "https://api.genshin.dev/weapons/staff-of-homa/icon",
                api: "https://api.genshin.dev/weapons/staff-of-homa"
            },
            {
                name: "The Catch",
                source: "https://api.genshin.dev/weapons/the-catch/icon",
                api: "https://api.genshin.dev/weapons/the-catch/icon"
            },
            {
                name: "Dragon's Bane",
                source: "https://api.genshin.dev/weapons/dragon-s-bane/icon",
                api: "https://api.genshin.dev/weapons/dragon-s-bane"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Emblem of Severed Fate",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/deepwood-memories/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/deepwood-memories"
                }
            ],
            [
                {
                    name: "Crimson Witch of Flames",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/crimson-witch-of-flames/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/crimson-witch-of-flames"
                }
            ],
            [
                {
                    name: "Crimson Witch of Flames",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/crimson-witch-of-flames/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/crimson-witch-of-flames"
                },
                {
                    name: "Gladiator's Finale",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
                }
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / ATK%"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / ATK%"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / Elemental Mastery"
            },
            {
                name: "goblet",
                priority: "Pyro DMG Bonus",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / ATK%"
            }
        ],
        bestTeam: [
            ["Xiangling", "Bennett", "tartaglia", "kazuha"],
            ["Xiangling", "Xingqiu", "amber", "kaeya"]
        ]
    },
    //xiao===================
    {   id: 48,
        name: "xiao",
        role: "DPS",
        bestWeapon: [
            {
                name: "Primordial Jade Cutter",
                source: "https://api.genshin.dev/weapons/primordial-jade-cutter/icon",
                api: "https://api.genshin.dev/weapons/primordial-jade-cutter"
            },
            {
                name: "Staff Of Homa",
                source: "https://api.genshin.dev/weapons/staff-of-homa/icon",
                api: "https://api.genshin.dev/weapons/staff-of-homa"
            },
            {
                name: "Blackcliff Pole",
                source: "https://api.genshin.dev/weapons/blackcliff-pole/icon",
                api: "https://api.genshin.dev/weapons/blackcliff-pole"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Viridescent Venerer",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/viridescent-venerer/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/viridescent-venerer"
                }
            ],
            [
                {
                    name: "Gladiator's Finale",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
                },
                {
                    name: "Viridescent Venerer",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/viridescent-venerer/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/viridescent-venerer"
                }
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Crit Rate/DMG / ATK% / Energy Recharge"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Crit Rate/DMG / ATK% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "Crit Rate/DMG / ATK% / Energy Recharge"
            },
            {
                name: "goblet",
                priority: "Anemo DMG Bonus",
                sub: "Crit Rate/DMG / ATK% / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Xiao", "Zhongli", "Bennett", "Sucrose"],
            ["Xiao", "xiangling", "Xingqiu", "Diona"]
        ]
    },
    //xingqiu================
    {   id: 49,
        name: "xingqiu",
        role: "sub-dps",
        bestWeapon: [
            {
                name: "Sacrificial Sword",
                source: "https://api.genshin.dev/weapons/sacrificial-sword/icon",
                api: "https://api.genshin.dev/weapons/sacrificial-sword"
            },
            {
                name: "Freedom-Sworn",
                source: "https://api.genshin.dev/weapons/freedom-sworn/icon",
                api: "https://api.genshin.dev/weapons/freedom-sworn"
            },
            {
                name: "Skyward Blade",
                source: "https://api.genshin.dev/weapons/primordial-jade-cutter/icon",
                api: "https://api.genshin.dev/weapons/primordial-jade-cutter"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Emblem Of Severed Fate",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
                }
            ],
            [
                {
                    name: "Noblesse Oblige",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/noblesse-oblige"
                }
            ],
            [
                {
                    name: "Noblesse Oblige",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/noblesse-oblige"
                },
                {
                    name: "Heart of Depth",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/heart-of-depth/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/heart-of-depth"
                }
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / ATK%"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / ATK%"
            },
            {
                name: "sand",
                priority: "Energy Recharge",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / Elemental Mastery"
            },
            {
                name: "goblet",
                priority: "Hydro DMG Bonus",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / ATK%"
            }
        ],
        bestTeam: [
            ["Xingqiu", "yelan", "hutao", "zhonglis"],
            ["Xingqiu", "xiangling", "Bennett", "chongyun"]
        ]
    },
    //xinyan=================
    {   id: 50,
        name: "xinyan",
        role: "support",
        bestWeapon: [
            {
                name: "Wolf's Gravestone",
                source: "https://api.genshin.dev/weapons/wolfs-gravestone/icon",
                api: "https://api.genshin.dev/weapons/wolfs-gravestone"
            },
            {
                name: "Serpent Spine",
                source: "https://api.genshin.dev/weapons/serpent-spine/icon",
                api: "https://api.genshin.dev/weapons/serpent-spine"
            },
            {
                name: "Rainslasher",
                source: "https://api.genshin.dev/weapons/snow-tombed-starsilver/icon",
                api: "https://api.genshin.dev/weapons/snow-tombed-starsilver"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Pale Flame",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/pale-flame/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/pale-flame/flower-of-life"
                },
                {
                    name: "Bloodstained Chivalry",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/bloodstained-chivalry/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/bloodstained-chivalry"
                }
            ],
            [
                {
                    name: "Noblesse Oblige",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/noblesse-oblige"
                },
                {
                    name: "Bloodstained Chivalry",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/bloodstained-chivalry/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/bloodstained-chivalry"
                }
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "HP% / Physical DMG Bonus / CRIT Rate / CRIT DMG"
            },
            {
                name: "goblet",
                priority: "Physical DMG Bonus",
                sub: "CRIT DMG / CRIT Rate / ATK% / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Xinyan", "eula", "raiden", "Bennett"],
            ["Xinyan", "Chongyun", "Xingqiu", "Diona"]
        ]
    },
    //yae-miko===============
    {   id: 51,
        name: "yae-miko",
        role: "sub-dps",
        bestWeapon: [
            {
                name: "Kagura's Verity",
                source: "https://rerollcdn.com/GENSHIN/Weapons/Kagura's_Verity.png",
                api: "https://api.genshin.dev/weapons/kagura's-verity"
            },
            {
                name: "Skyward Atlas",
                source: "https://api.genshin.dev/weapons/skyward-atlas/icon",
                api: "https://api.genshin.dev/weapons/skyward-atlas"
            },
            {
                name: "The Widsith",
                source: "https://api.genshin.dev/weapons/the-widsith/icon",
                api: "https://api.genshin.dev/weapons/the-widsith"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Thundering Fury",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/thundering-fury/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/thundering-fury"
                }
            ],
            [
                {
                    name: "Gladiator's Finale",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/gladiator-s-finale/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/gladiator-s-finale"
                },
                {
                    name: "Thundering Fury",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/thundering-fury/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/thundering-fury"
                }

            ],
            [
                {
                    name: "Emblem Of Severed Fate",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
                }
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            },
            {
                name: "goblet",
                priority: "Electro DMG Bonus",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Yae Miko", "nahida", "fischl", "jean"],
            ["Yae Miko", "xingqiu", "fischl", "barbara"]
        ]
    },
    //yanfei=================
    {   id: 52,
        name: "yanfei",
        role: "DPS",
        bestWeapon: [
            {
                name: "Lost Prayer to the Sacred Winds",
                source: "https://api.genshin.dev/weapons/lost-prayer-to-the-sacred-winds/icon",
                api: "https://api.genshin.dev/weapons/lost-prayer-to-the-sacred-winds"
            },
            {
                name: "Solar Pearl",
                source: "https://api.genshin.dev/weapons/solar-pearl/icon",
                api: "https://api.genshin.dev/weapons/solar-pearl"
            },
            {
                name: "Dodoco Tales",
                source: "https://api.genshin.dev/weapons/dodoco-tales/icon",
                api: "https://api.genshin.dev/weapons/dodoco-tales"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Crimson Witch of Flames",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/crimson-witch-of-flames/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/crimson-witch-of-flames"
                }
            ],
            [
                {
                    name: "Wanderer's Troupe",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/wanderer-s-troupe/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/wanderer-s-troupe"
                }
            ],
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "Crit Rate/DMG / Elemental Mastery / Energy Recharge"
            },
            {
                name: "goblet",
                priority: "Pyro DMG Bonus",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Yanfei", "Xingqiu", "zhongli", "Bennett"],
            ["Yanfei", "xianling", "kaeya", "barbara"]
        ]
    },
    //yelan==================
    {   id: 53,
        name: "yelan",
        role: "Support",
        bestWeapon: [
            {
                name: "Elegy For The End",
                source: "https://api.genshin.dev/weapons/elegy-for-the-end/icon",
                api: "https://api.genshin.dev/weapons/elegy-for-the-end"
            },
            {
                name: "The Stringless",
                source: "https://api.genshin.dev/weapons/the-stringless/icon",
                api: "https://api.genshin.dev/weapons/the-stringless/icon"
            },
            {
                name: "Sacrificial Bow",
                source: "https://api.genshin.dev/weapons/sacrificial-bow/icon",
                api: "https://api.genshin.dev/weapons/sacrificial-bow"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Noblesse Oblige",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/noblesse-oblige/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/noblesse-oblige"
                },
                {
                    name: "Tenacity Of The Millelith",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith"
                }
            ],
            [
                {
                    name: "Heart Of Depth",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/heart-of-depth/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/heart-of-depth"
                },
                {
                    name: "Tenacity Of The Millelith",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith"
                }
            ],
            [
                {
                    name: "Emblem of Severed Fate",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/deepwood-memories/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/deepwood-memories"
                }
            ],
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / HP%"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / HP%"
            },
            {
                name: "sand",
                priority: "HP%",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / Elemental Mastery"
            },
            {
                name: "goblet",
                priority: "Hydro Damage Bonus",
                sub: "CRIT DMG / CRIT Rate / Energy Recharge / HP%"
            }
        ],
        bestTeam: [
            ["Yelan", "yoimiya", "kazuha", "diona"],
            ["Yelan", "beido", "fischl", "bennet"]
        ]
    },
    //yoimiya================
    {   id: 54,
        name: "yoimiya",
        role: "DPS",
        bestWeapon: [
            {
                name: "Thundering Pulse",
                source: "https://api.genshin.dev/weapons/thundering-pulse/icon",
                api: 'https://api.genshin.dev/weapons/thundering-pulse'
            },
            {
                name: "Skyward Harp",
                source: "https://rerollcdn.com/GENSHIN/Weapons/Skyward_Harp.png",
                api: 'https://api.genshin.dev/weapons/skyward-harp'
            },
            {
                name: "Polar Star",
                source: "https://rerollcdn.com/GENSHIN/Weapons/Polar_Star.png",
                api: 'https://api.genshin.dev/weapons/polar-star'
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Shimenawa's Reminiscence",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/shimenawa-s-reminiscence/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/shimenawa-s-reminiscence"
                },
            ],
            [
                {
                    name: "Crimson Witch of Flames",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/crimson-witch-of-flames/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/crimson-witch-of-flames"
                }
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            },
            {
                name: "sand",
                priority: "ATK%",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            },
            {
                name: "goblet",
                priority: "Pyro DMG Bonus",
                sub: "Crit Rate/DMG / ATK% / Elemental Mastery / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Yoimiya", "raiden", "xingqiu", "yun-jin"],
            ["Yoimiya", "Fischl", "xingqiu", "bennet"]
        ]
    },
    //yun-jin================
    {   id: 55,
        name: "yun-jin",
        role: "support",
        bestWeapon: [
            {
                name: "Favonius Lance",
                source: "https://api.genshin.dev/weapons/favonius-lance/icon",
                api: "https://api.genshin.dev/weapons/favonius-lance"
            },
            {
                name: "Skyward Spine",
                source: "https://api.genshin.dev/weapons/skyward-spine/icon",
                api: "https://api.genshin.dev/weapons/skyward-spine/icon"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Pale Flame",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/husk-of-opulent-dreamsflower-of-life",
                    api: "https://api.genshin.dev/artifacts/husk-of-opulent-dreams"
                }
            ],
            [
                {
                    name: "Pale Flame",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/husk-of-opulent-dreamsflower-of-life",
                    api: "https://api.genshin.dev/artifacts/husk-of-opulent-dreams"
                },
                {
                    name: "Bloodstained Chivalry",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/emblem-of-severed-fate/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/emblem-of-severed-fate"
                }
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "ATK",
                sub: "DEF% / Energy Recharge"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "DEF% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "Energy Recharge",
                sub: "DEF%"
            },
            {
                name: "goblet",
                priority: "DEF%",
                sub: "Energy Recharge"
            }
        ],
        bestTeam: [
            ["Yun Jin", "raiden", "yoimiya", "jean"],
            ["Yun Jin", "Fischl", "layla", "rosaria"]
        ]
    },
    //zhongli================
    {   id: 56,
        name: "zhongli",
        role: "Support",
        bestWeapon: [
            {
                name: "Vortex Vanquisher",
                source: "https://api.genshin.dev/weapons/vortex-vanquisher/icon",
                api: "https://api.genshin.dev/weapons/vortex-vanquisher"
            },
            {
                name: "Staff of Homa",
                source: "https://api.genshin.dev/weapons/staff-of-homa/icon",
                api: "https://api.genshin.dev/weapons/staff-of-homa"
            },
            {
                name: "Black Tassel",
                source: "https://api.genshin.dev/weapons/black-tassel/icon",
                api: "https://api.genshin.dev/weapons/black-tassel/icon"
            }
        ],
        bestArtifact: [
            [
                {
                    name: "Tenacity Of The Millelith",
                    stack: 4,
                    source: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith"
                },
            ],
            [
                {
                    name: "Tenacity Of The Millelith",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/tenacity-of-the-millelith"
                },
                {
                    name: "Archaic Petra",
                    stack: 2,
                    source: "https://api.genshin.dev/artifacts/archaic-petra/flower-of-life",
                    api: "https://api.genshin.dev/artifacts/archaic-petra"
                }
            
            ]
        ],
        artifactStat: [
            {
                name: "flower",
                priority: "HP",
                sub: "HP% / Energy Recharge"
            },
            {
                name: "plume",
                priority: "ATK",
                sub: "HP% / Energy Recharge"
            },
            {
                name: "sand",
                priority: "HP%",
                sub: "HP% / Energy Recharge"
            },
            {
                name: "goblet",
                priority: "HP%",
                sub: "HP% / Energy Recharge"
            }
        ],
        bestTeam: [
            ["Zhongli", "arataki-itto", "gorou", "albedo"],
            ["Zhongli", "noelle", "traveler-geo", "ninguang"]
        ]
    }
]
