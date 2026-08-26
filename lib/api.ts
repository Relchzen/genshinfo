import type {
  Artifact,
  Character,
  Enemy,
  Weapon,
} from "./types";

export const API_BASE = "https://genshin.jmp.blue";

async function ambil<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    // Data game statis; cache sehari cukup segar tanpa membebani API publik
    next: { revalidate: 86400 },
  });
  if (!res.ok) {
    throw new Error(`genshin.jmp.blue ${path} -> ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export const getDaftarKarakter = () => ambil<string[]>("/characters");
export const getKarakter = (slug: string) =>
  ambil<Character>(`/characters/${encodeURIComponent(slug)}`);

export const getDaftarSenjata = () => ambil<string[]>("/weapons");
export const getSenjata = (slug: string) =>
  ambil<Weapon>(`/weapons/${encodeURIComponent(slug)}`);

export const getDaftarArtefak = () => ambil<string[]>("/artifacts");
export const getArtefak = (slug: string) =>
  ambil<Artifact>(`/artifacts/${encodeURIComponent(slug)}`);

export const getDaftarMusuh = () => ambil<string[]>("/enemies");
export const getMusuh = (slug: string) =>
  ambil<Enemy>(`/enemies/${encodeURIComponent(slug)}`);

// URL gambar standar API
export const urlIkonKarakter = (slug: string, besar = true) =>
  `${API_BASE}/characters/${encodeURIComponent(slug)}/${besar ? "icon-big" : "icon"}`;
export const urlKartuKarakter = (slug: string) =>
  `${API_BASE}/characters/${encodeURIComponent(slug)}/card`;
export const urlIkonElemen = (vision?: string) =>
  vision ? `${API_BASE}/elements/${vision.toLowerCase()}/icon` : "";
export const urlIkonSenjata = (slug: string) =>
  `${API_BASE}/weapons/${encodeURIComponent(slug)}/icon`;
