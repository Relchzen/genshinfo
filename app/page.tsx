import Link from "next/link";
import Image from "next/image";
import { API_BASE } from "@/lib/api";
import { DAFTAR_ELEMEN, WARNA_ELEMEN } from "@/lib/elements";
import Reveal from "@/components/Reveal";
import HeroGacha from "@/components/HeroGacha";

const KATEGORI = [
  {
    href: "/characters",
    judul: "Characters",
    ket: "92 penghuni Teyvat",
    latar: `${API_BASE}/characters/albedo/gacha-splash`,
    posisi: "object-top",
  },
  {
    href: "/weapons",
    judul: "Weapons",
    ket: "189 senjata, dull blade hingga 5 bintang",
    latar: `${API_BASE}/weapons/wolf-s-gravestone/icon`,
    posisi: "object-contain",
  },
  {
    href: "/artifacts",
    judul: "Artifacts",
    ket: "53 set lengkap dengan bonusnya",
    latar: `${API_BASE}/artifacts/brave-heart/circlet-of-logos`,
    posisi: "object-contain",
  },
  {
    href: "/enemies",
    judul: "Enemies",
    ket: "43 musuh yang menghadang di jalan",
    latar: `${API_BASE}/enemies/hilichurl/icon`,
    posisi: "object-contain",
  },
];

type Kategori = (typeof KATEGORI)[number];

function KartuKategori({ href, judul, ket, latar, posisi }: Kategori) {
  const memuatPenuh = posisi === "object-cover";
  return (
    <Link
      href={href}
      className="group relative flex min-h-56 flex-col justify-end overflow-hidden rounded-3xl border garis p-5"
    >
      <Image
        src={latar}
        alt=""
        fill
        sizes="(min-width: 1024px) 25vw, 100vw"
        className={`${
          memuatPenuh ? "opacity-25" : "opacity-15"
        } ${
          memuatPenuh
            ? "object-cover object-top"
            : "scale-110 object-contain object-center"
        } p-6 transition-opacity duration-300 group-hover:opacity-45`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />

      <div className="relative">
        <h2 className="judul-display text-lg">{judul}</h2>
        <p className="mt-1 text-sm leading-snug text-mute">{ket}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold">
          Buka
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* ===== Intro gacha: logo sebagai bintang jatuh ===== */}
      <HeroGacha />

      {/* ===== Strip elemen ===== */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Reveal>
          <p className="label-kecil mb-3">Tujuh elemen Teyvat</p>
          <h2 className="judul-display max-w-xl text-3xl leading-tight md:text-4xl">
            Setiap elemen punya nyala sendiri.
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
          <h2 className="judul-display max-w-xl text-3xl leading-tight md:text-4xl">
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
