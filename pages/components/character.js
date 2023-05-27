const Character = [
    //albedo=================
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

    //sucrose================
    {
        id: 38,
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
            ["sucrose", "klee", "yelan", "bennet"],
            ["sucrose", "lisa", "dendro traveler", "barbaras"]
        ]
    },
    //tartaglia==============
    {
        id: 39,
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
    {
        id: 40,
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
    {
        id: 41,
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
    //traveler-anemo==========
    {
        id: 42,
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
    {
        id: 45,
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
    //traveler-geo==========
    {
        id: 43,
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
    //traveler-electro======
    {
        id: 44,
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
    //venti=================
    {
        id: 46,
        name: "Venti",
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
    "jean",
    "kaeya",
    "kazuha",
    "keqing",
    "klee",
    "kokomi",
    "kuki-shinobu",
    "lisa",
    "mona",
    "ningguang",
    "noelle",
    "qiqi",
    "raiden",
    "razor",
    "rosaria",
    "sara",
    "sayu",
    "shenhe",
    "shikanoin-heizou",
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