export const DAFTAR_ELEMEN = [
  "pyro",
  "hydro",
  "anemo",
  "electro",
  "dendro",
  "geo",
  "cryo",
] as const;

export type KunciElemen = (typeof DAFTAR_ELEMEN)[number];

export const WARNA_ELEMEN: Record<KunciElemen, string> = {
  pyro: "#EF7938",
  hydro: "#4CC2F1",
  anemo: "#74C2A8",
  electro: "#AF8EC1",
  dendro: "#A5C83B",
  geo: "#F0B632",
  cryo: "#9FD6E3",
};

export function warnaElemen(vision?: string | null): string {
  if (!vision) return "#94A3B8";
  return WARNA_ELEMEN[vision.toLowerCase() as KunciElemen] ?? "#94A3B8";
}

export const EMAS_RARITY_5 = "#E9C46A";
export const UNGU_RARITY_4 = "#A78BFA";

export function warnaRarity(rarity?: number | null): string {
  return rarity === 4 ? UNGU_RARITY_4 : EMAS_RARITY_5;
}

export function judulSlug(slug: string): string {
  return slug
    .split("-")
    .map((k) => k.charAt(0).toUpperCase() + k.slice(1))
    .join(" ");
}
