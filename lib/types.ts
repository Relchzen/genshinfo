// Bentuk data API genshin.jmp.blue — diverifikasi langsung dari respons nyata.

export interface SkillUpgrade {
  name: string;
  value: string;
}

export interface SkillTalent {
  name: string;
  unlock: string;
  description: string;
  upgrades?: SkillUpgrade[];
}

export interface PassiveTalent {
  name: string;
  unlock: string;
  description: string;
  level?: number;
}

export interface Constellation {
  name: string;
  unlock: number;
  description: string;
  level?: number;
}

export interface Character {
  name: string;
  title?: string;
  vision?: string;
  weapon?: string;
  gender?: string;
  nation?: string;
  affiliation?: string;
  rarity?: number;
  release?: string;
  constellation?: string;
  birthday?: string;
  description?: string;
  skillTalents?: SkillTalent[];
  passiveTalents?: PassiveTalent[];
  constellations?: Constellation[];
}

export interface Weapon {
  name: string;
  type: string;
  rarity: number;
  baseAttack: number;
  subStat: string;
  passiveName: string;
  passiveDesc: string;
  location?: string;
  ascensionMaterial?: string;
  id?: string;
}

export interface Artifact {
  name: string;
  max_rarity: number;
  "2-piece_bonus": string;
  "4-piece_bonus"?: string;
  id?: string;
}

export interface Enemy {
  id?: string;
  name: string;
  description: string;
  region?: string;
  type?: string;
  family?: string;
  faction?: string;
  elements?: string[];
}

// ===== Dataset kurasi v1 (hasil migrasi genshinfo_old/components/character.js) =====

export interface CuratedStat {
  name: string;
  priority?: string;
  sub?: string;
}

export interface CuratedWeaponPick {
  name: string;
  source: string;
  api: string;
}

export interface CuratedArtifactPick {
  name: string;
  stack: number;
  source: string;
  api: string;
}

export interface Curated {
  id: number;
  name: string;
  role: string;
  bestWeapon: CuratedWeaponPick[];
  bestArtifact: CuratedArtifactPick[][];
  artifactStat: CuratedStat[];
  bestTeam: string[][];
}
