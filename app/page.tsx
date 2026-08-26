import Link from "next/link";
import Image from "next/image";
import { API_BASE } from "@/lib/api";
import { DAFTAR_ELEMEN, WARNA_ELEMEN } from "@/lib/elements";
import Reveal from "@/components/Reveal";
import ParallaxLayer from "@/components/ParallaxLayer";

const KATEGORI = [
  {
    href: "/characters",
    judul: "Characters",
    ket: "Semua penghuni Teyvat",
    ikon: "characters/albedo/icon-big",
  },
  {
    href: "/weapons",
    judul: "Weapons",
    ket: "Dari dull blade hingga 5 bintang",
    ikon: "weapons/dull-blade/icon",
  },
  { href: "/artifacts", judul: "Artifacts", ket: "Set dan bonusnya", ikon: null },
  {
    href: "/enemies",
    judul: "Enemies",
    ket: "Yang menghadang di jalan",
    ikon: null,
  },
];

type Kategori = (typeof KATEGORI)[number];

function KartuKategori({ href, judul, ket, ikon }: Kategori) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-3xl border garis bg-raised/60 p-5 transition-transform duration-200 hover:-translate-y-1"
    >
      {ikon && (
        <Image
          src={`${API_BASE}/${ikon}`}
          alt=""
          width={72}
          height={72}
          className="absolute -right-3 -top-4 opacity-25 transition-opacity duration-300 group-hover:opacity-60"
        />
      )}
      <div>
        <p className="label-kecil mb-2">Jelajah</p>
        <h2 className="text-xl font-bold tracking-tight">{judul}</h2>
        <p className="mt-1 text-sm text-mute">{ket}</p>
      </div>
      <span className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-semibold text-gold">
        Buka
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          →
        </span>
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* ===== Hero parallax ===== */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        {/* Lapisan jauh: festival malam */}
        <ParallaxLayer depth={0.15} className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="/festival.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-55"
            />
            {/* Kabut bawah agar transisi ke bagian berikutnya mulus */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />
          </div>
        </ParallaxLayer>

        {/* Lapisan tengah: awan */}
        <ParallaxLayer
          depth={0.35}
          className="pointer-events-none absolute inset-x-0 bottom-[8%]"
        >
          <Image
            src="/awan.png"
            alt=""
            width={1600}
            height={900}
            className="w-full opacity-30 mix-blend-screen"
          />
        </ParallaxLayer>

        {/* Lapisan dekat: judul + CTA */}
        <ParallaxLayer depth={0.6} className="relative z-10 px-5 text-center">
          <p className="label-kecil mb-4">Ensiklopedia tidak resmi Genshin Impact</p>
          <h1 className="mx-auto max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Malam di atas <span className="text-gold">Teyvat</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-mute md:text-lg">
            Karakter, senjata, artefak, dan musuh; dicarinya cepat, dilihatnya
            enak. Dibangun ulang dari nol oleh tim yang sama.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3">
            <Link
              href="/characters"
              className="rounded-full bg-gold px-7 py-3 text-sm font-bold text-[#0a0e1a] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Jelajahi Karakter
            </Link>
            <a
              href="#kategori"
              className="rounded-full border garis px-7 py-3 text-sm font-semibold transition-colors hover:bg-raised"
            >
              Lihat Kategori
            </a>
          </div>
        </ParallaxLayer>

        {/* Indikator scroll */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="h-10 w-px animate-pulse bg-gradient-to-b from-transparent via-mute to-transparent" />
        </div>
      </section>

      {/* ===== Strip elemen ===== */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Reveal>
          <p className="label-kecil mb-3">Tujuh elemen Teyvat</p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Setiap warna punya makna; tidak ada gradasi tempelan.
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-4 gap-3 md:grid-cols-7">
          {DAFTAR_ELEMEN.map((el) => (
            <Reveal key={el} delay={0.05}>
              <div
                className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border garis bg-raised/40"
                style={{ boxShadow: `inset 0 0 24px ${WARNA_ELEMEN[el]}14` }}
              >
                <Image
                  src={`https://genshin.jmp.blue/elements/${el}/icon`}
                  alt={el}
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
                <span className="text-xs capitalize text-mute">{el}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Kategori ===== */}
      <section id="kategori" className="mx-auto max-w-6xl px-5 pb-28">
        <Reveal>
          <p className="label-kecil mb-3">Pilih jalurmu</p>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Empat pintu masuk.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KATEGORI.map((k, i) => (
            <Reveal key={k.href} delay={i * 0.06}>
              <KartuKategori {...k} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
