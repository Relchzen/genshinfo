// Sinkronisasi metadata karakter dari genshin.jmp.blue ke lib/karakter-meta.json.
// Jalankan sesekali saat ada karakter baru: node scripts/sync-karakter-meta.mjs
const BASE = "https://genshin.jmp.blue";
const fs = await import("node:fs/promises");

const daftar = await (await fetch(`${BASE}/characters`)).json();

async function ambilDenganBatas(items, batas, fn) {
  const hasil = [];
  for (let i = 0; i < items.length; i += batas) {
    const potongan = items.slice(i, i + batas);
   hasil.push(...(await Promise.all(potongan.map(fn))));
    console.log(`  ${Math.min(i + batas, items.length)}/${items.length}`);
  }
  return hasil;
}

const meta = await ambilDenganBatas(daftar, 10, async (slug) => {
  const res = await fetch(`${BASE}/characters/${slug}`);
  if (!res.ok) return { slug, vision: null, rarity: null, weapon: null };
  const d = await res.json();
  return {
    slug,
    vision: d.vision ?? null,
    rarity: d.rarity ?? null,
    weapon: d.weapon ?? null,
  };
});

await fs.writeFile(
  new URL("../lib/karakter-meta.json", import.meta.url),
  JSON.stringify(meta, null, 2)
);
console.log(`Tersimpan ${meta.length} karakter.`);
