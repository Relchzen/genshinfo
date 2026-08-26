# PRD — GenshInfo v2

## Latar
GenshInfo adalah project kuliah (2023) berupa encyclopedia Genshin Impact yang dibangun
dengan Next.js 13 Pages Router + Chakra UI. Versi lama masih tayang dan tidak boleh
terganggu. v2 dibangun ulang dari nol di branch `v2` dengan kode lama diarsipkan utuh di
`genshinfo_old/` sebagai referensi.

## Tujuan
Menjadi referensi cepat dan indah untuk pemain Genshin Impact: melihat karakter, senjata,
artefak, dan musuh dengan pengalaman visual kelas showcase, dengan parallax scrolling
sebagai identitas khas.

## Pengguna
1. Pemain Genshin yang mencari info ringkas karakter/senjata/artefak/musuh.
2. Pemilik project (Fidel & tim) sebagai portofolio kualitas frontend.

## Ruang Lingkup
### In-scope
- Home dengan parallax scrolling berlapis sebagai momen signature.
- Characters: daftar dari `genshin.jmp.blue`, pencarian + filter (elemen, rarity, senjata).
- Detail karakter: talent, passive, constellation, plus panel kurasi (role, senjata
  terbaik, artefak, stat priority, tim) hasil migrasi dataset kurasi manual v1.
- Weapons, Artifacts, Enemies: daftar + filter dasar.
- About: kredit tim asli (Aurel, Farhan, Fidel, Marthin) sebagai bentuk penghormatan.
- Mode gelap satu-satunya tema (dunia visual "malam di atas Teyvat").
- Responsif penuh desktop/tablet/mobile, hormat `prefers-reduced-motion`.

### Out-of-scope
- Halaman News: sumber lamanya CSV tweet tahunan yang sudah basi; tidak dimigrasi.
- Login, kontribusi konten, CMS, komentar.
- Backend sendiri: data murni dari API publik `genshin.jmp.blue` (ISR cache 24 jam).

## Fitur Inti & Acceptance Criteria
| Fitur | Acceptance Criteria |
|---|---|
| Build | `npm run build` sukses tanpa error TypeScript/lint |
| Keamanan | `npm audit` menampilkan 0 vulnerability high/critical |
| Home | Parallax berlapis jalan saat scroll; diam total jika `prefers-reduced-motion: reduce` |
| Characters | Grid memuat semua karakter dari API; filter elemen/rarity/senjata + pencarian bekerja tanpa reload |
| Detail | Semua field API (skill, passive, constellation) tampil; panel kurasi muncul bila data ada |
| Gambar | Semua gambar lewat `next/image` dengan ukuran eksplisit, tanpa layout shift |
| Navigasi | Transisi halaman halus; route tak dikenal jatuh ke 404 custom |

## Keputusan Teknis
- Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.
- Server Components untuk fetching (kunci API tidak ada, aman); caching ISR.
- Dataset kurasi v1 (`components/character.js`, 4.000+ baris) dimigrasi apa adanya
  ke modul TS; nilai historisnya tinggi dan tidak bisa direproduksi dari API.
