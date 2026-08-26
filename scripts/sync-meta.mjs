// Sinkronisasi metadata weapons/artifacts/enemies dari genshin.jmp.blue.
// Pemakaian: node scripts/sync-meta.mjs <weapons|artifacts|enemies>
const BASE = "https://genshin.jmp.blue";
const fs = await import("node:fs/promises");

const FIELD = {
  weapons: ["rarity", "type"],
  artifacts: ["max_rarity"],
  enemies: ["type", "family", "elements"],
};

const kategori = process.argv[2];
if (!FIELD[kategori]) {
  console.error("Kategori tidak dikenal. Pakai:", Object.keys(FIELD).join(", "));
  process.exit(1);
}

const daftar = await (await fetch(`${BASE}/${kategori}`)).json();

async function perBatch(items, n, fn) {
  const out = [];
  for (let i = 0; i < items.length; i += n) {
    out.push(...(await Promise.all(items.slice(i, i + n).map(fn))));
    console.log(`  ${Math.min(i + n, items.length)}/${items.length}`);
  }
  return out;
}

const meta = await perBatch(daftar, 10, async (slug) => {
  const res = await fetch(`${BASE}/${kategori}/${slug}`);
  if (!res.ok) return { slug };
  const d = await res.json();
  const o = { slug };
  for (const f of FIELD[kategori]) o[f] = d[f] ?? null;
  return o;
});

await fs.writeFile(
  new URL(`../lib/${kategori}-meta.json`, import.meta.url),
  JSON.stringify(meta, null, 2)
);
console.log(`Tersimpan ${meta.length} ${kategori}.`);
