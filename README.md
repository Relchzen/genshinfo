# GenshInfo v2

Ensiklopedia Genshin Impact: referensi cepat karakter, senjata, artefak, dan
musuh dengan parallax scrolling sebagai identitas visual. Rebuild 2026 dari
project kuliah 2023; kode versi lama diarsipkan utuh di `genshinfo_old/`.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build produksi

```bash
npm run build && npm start
```

## Tumpukan teknologi

- Next.js 16 (App Router, RSC) + TypeScript
- Tailwind CSS v4
- Motion (Framer Motion) untuk parallax & reveal on-scroll
- Data dari [genshin.jmp.blue](https://genshin.jmp.blue), cache ISR 24 jam

## Struktur

- `app/` : halaman (home, characters, weapons, artifacts, enemies, about)
- `components/` : komponen UI dan explorer/filter
- `lib/` : klien API, tipe, dataset kurasi (`curated.json`, migrasi dari v1)
- `scripts/` : sinkronisasi metadata (`sync-karakter-meta.mjs`, `sync-meta.mjs`)
- `genshinfo_old/` : arsip versi lama (Next 13 + Chakra UI), tidak dibangun lagi

## Sinkronisasi data

Metadata ringan (elemen, rarity, tipe) disimpan lokal agar filter instan.
Jalankan ulang sesekali saat ada konten baru:

```bash
node scripts/sync-karakter-meta.mjs
node scripts/sync-meta.mjs weapons
node scripts/sync-meta.mjs artifacts
node scripts/sync-meta.mjs enemies
```

## Dokumen desain

Lihat `PRD.md` (ruang lingkup dan acceptance criteria) serta `design.md`
(dunia visual "Malam di atas Teyvat": tokens, tipografi, motion).
