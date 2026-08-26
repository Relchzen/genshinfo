"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FASE_LEPAS, FASE_TIBA } from "./gacha-fase";

// Scene WebGL dimuat hanya di klien; beranda tetap terhidrasi cepat.
const GachaScene = dynamic(() => import("./GachaScene"), {
  ssr: false,
  loading: () => null,
});

// Tinggi total panggung dalam satuan layar; sisanya ruang scroll koreografi.
const TINGGI_SVH = 300;

export default function HeroGacha() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const ukur = () => {
      // Fase dinormalisasi ke tinggi viewport agar konsisten di semua layar
      setP(Math.max(0, Math.min(2.2, window.scrollY / window.innerHeight)));
    };
    const jadwal = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(ukur);
    };
    ukur();
    window.addEventListener("scroll", jadwal, { passive: true });
    window.addEventListener("resize", jadwal);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", jadwal);
      window.removeEventListener("resize", jadwal);
    };
  }, []);

  const muncul = p >= FASE_TIBA;
  const petunjuk = p < FASE_LEPAS * 0.55;

  return (
    <div ref={ref} className="relative" style={{ height: `${TINGGI_SVH}svh` }}>
      {/* Panggung lengket: seluruh koreografi terjadi di viewport ini */}
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="absolute inset-0">
          <GachaScene progres={{ current: p }} />
        </div>

        {/* Vineta lembut untuk fokus ke tengah */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 42%, transparent 55%, rgba(6,9,18,0.55))",
          }}
        />

        {/* Petunjuk awal: hanya logo dan ajakan menggulir */}
        <div
          aria-hidden={petunjuk}
          className={`absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3 transition-opacity duration-500 ${
            petunjuk ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="label-kecil">Gulir untuk memanggil</span>
          <div className="h-10 w-px animate-pulse bg-gradient-to-b from-gold/70 to-transparent" />
        </div>

        {/* Judul & CTA: bangun setelah bintang jatuh menghantam */}
        <div
          className={`absolute inset-x-0 bottom-[14%] z-10 px-5 text-center transition-all duration-700 ease-out ${
            muncul ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="label-kecil mb-4">
            Ensiklopedia tidak resmi · Genshin Impact
          </p>
          <h1 className="judul-display mx-auto max-w-3xl text-4xl leading-tight md:text-6xl">
            Selamat datang kembali,{" "}
            <span className="bg-gradient-to-br from-[#d9f6ff] via-[#8ee6ff] to-[#3fb7dd] bg-clip-text text-transparent">
              Traveler
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-mute md:text-base">
            92 karakter, 189 senjata, 53 artefak, 43 musuh; dirangkum rapi
            untuk perjalananmu.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/characters" className="tombol-emas px-7 py-3 text-sm font-bold">
              Mulai Menjelajah
            </Link>
            <Link
              href="/about"
              className="tombol-hantu border garis px-7 py-3 text-sm font-semibold"
            >
              Kenali Tim Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
