# design.md — GenshInfo v2

## Konsep
**"Malam di atas Teyvat"**: dunia visual malam yang dalam dan tenang, dengan elemen
elemental sebagai satu-satunya sumber warna. Situs lama terang-warm; v2 adalah kebalikannya,
namun tetap bernuansa permainan: langit malam berlapis kabut, cahaya elemental, dan kartu
yang melayang seperti artefak. Wajah baru, jiwa yang sama.

## Mode
Experience (galeri/showcase). Artefak visual memimpin dari viewport pertama; antarmuka mundur
ke belakang. Kedalaman parallax adalah bahasa utamanya, bukan dekorasi tempelan.

## Design Tokens
### Warna (dark-only)
| Token | Nilai | Peran |
|---|---|---|
| `--bg` | `#0A0E1A` | Langit malam dasar |
| `--bg-raised` | `#111827` | Permukaan kartu/panel |
| `--ink` | `#F1F5F9` | Teks utama |
| `--muted` | `#94A3B8` | Teks sekunder |
| `--gold` | `#E9C46A` | Aksen premium (rarity 5, CTA) |
| `--purple` | `#A78BFA` | Aksen rarity 4 |
| `--line` | rgba(241,245,249,.08) | Garis pembatas halus |

Warna elemental (dipakai semantik per konten): Anemo `#74C2A8`, Geo `#F0B632`,
Electro `#AF8EC1`, Dendro `#A5C83B`, Hydro `#4CC2F1`, Pyro `#EF7938`, Cryo `#9FD6E3`.

### Tipografi
- Display/judul: **Cinzel** (600/700/800) serif fantasi bernuansa Teyvat, dipakai di judul besar dan heading kategori.
- Body: **Hanken Grotesk** (400/500).
- Angka & label kecil: uppercase, letter-spacing lebar (`0.12em`–`0.14em`), ukuran 11–12px.

### Spasi & Bentuk
- Skala spasi 4pt; section padding desktop 96px, mobile 48px.
- Radius: kartu 20px, panel detail 28px. Tombol CTA memakai geometri **sudut-potong
  45°** (clip-path dua penjuru) sebagai identitas, bukan pill generik.
- Border 1px `--line`; bayangan lembut hitam; glow hanya untuk cahaya emas cakrawala hero.

### Hero
- **Intro "Panggilan Gacha & Zoom-In Primogem"**: layar pembuka menampilkan
  model 3D kristal Primogem asli yang megah di tengah angkasa bertabur bintang
  (cosmic starfield) dan koridor debu partikel berkilau (warp speed stardust).
- Saat digulir: kamera melakukan gerakan *zoom in* imersif meluncur menembus
  awan bintang dan partikel debu kecepatan (warp dust lines) mengikuti posisi
  Primogem, memberikan sensasi berada tepat di tengah-tengah perjalanan semesta
  (ala arsitektur portofolio).
- Damping eksponensial halus pada kamera dan rotasi idle Primogem dengan pencahayaan
  cyan kristal berkilau.
- Semua motion dinonaktifkan secara anggun saat `prefers-reduced-motion: reduce`.

### Motion
- Parallax scroll: 3 kedalaman (jauh 0.15x, tengah 0.35x, dekat 0.6x), via transform saja.
- Reveal on-scroll: fade + naik 16px, sekali jalan, stagger 60ms antar item grid.
- Hover kartu: angkat 4px + border menyala tipis warna elemen, transisi 200ms.
- Semua motion mati otomatis saat `prefers-reduced-motion: reduce`.

## Layout
- Navbar fixed transparan blur, logo kiri, nav kanan; tinggi 64px.
- Home: hero full-viewport (langit, awan, siluet gunung, judul raksasa) → strip kategori
  → kutip singkat dataset → footer.
- Characters: header + toolbar filter sticky, grid kartu ikon dengan aksen elemen.
- Detail: hero karakter (kartu besar kiri, info kanan), lalu tab-section talent/passive/
  constellation, panel kurasi "Build Picks".
- Grid responsif: 2 kolom mobile, 3–4 tablet, 5–6 desktop.

## Anti AI-slop
- Tanpa gradient ungu-biru generik; warna hanya berasal dari sistem elemental.
- Tanpa emoji sebagai ikon UI; tanpa placeholder kosong; setiap animasi punya alasan
  (kedalaman, hierarki, umpan balik).
