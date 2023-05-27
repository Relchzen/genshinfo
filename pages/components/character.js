const Character = [
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
            ["xiangling", "xiangqiu", "albedo", "fischl"]
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
            ["Jean", "Mika", "Fischl", "Layla"],
            ["Jean", "Rosaria", "Xingqiu", "Sucrose"]
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
    "sucrose",
    "tartaglia",
    "thoma",
    "tighnari",
    "traveler-anemo",
    "traveler-dendro",
    "traveler-electro",
    "traveler-geo",
    "venti",
    "xiangling",
    "xiao",
    "xingqiu",
    "xinyan",
    "yae-miko",
    "yanfei",
    "yelan",
    "yoimiya",
    "yun-jin",
    "zhongli"
]