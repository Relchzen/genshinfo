"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FASE_LEPAS, FASE_TIBA } from "./gacha-fase";

const GachaScene = dynamic(() => import("./GachaScene"), {
  ssr: false,
  loading: () => null,
});

const TINGGI_SVH = 300;

export default function HeroGacha() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const ukur = () => {
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
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="absolute inset-0">
          <GachaScene progres={{ current: p }} />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 42%, transparent 55%, rgba(6,9,18,0.55))",
          }}
        />

        {/* Initial Scroll Hint */}
        <div
          aria-hidden={petunjuk}
          className={`absolute inset-x-0 bottom-12 z-10 flex flex-col items-center gap-3 transition-opacity duration-500 ${
            petunjuk ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="label-kecil">Scroll to summon</span>
          <div className="h-10 w-px animate-pulse bg-gradient-to-b from-gold/70 to-transparent" />
        </div>

        {/* Hero Title & CTA */}
        <div
          className={`absolute inset-x-0 bottom-[14%] z-10 px-5 text-center transition-all duration-700 ease-out ${
            muncul ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="label-kecil mb-4">
            Unofficial Encyclopedia · Genshin Impact
          </p>
          <h1 className="judul-display mx-auto max-w-3xl text-4xl leading-tight md:text-6xl">
            Welcome back,{" "}
            <span className="bg-gradient-to-br from-[#d9f6ff] via-[#8ee6ff] to-[#3fb7dd] bg-clip-text text-transparent">
              Traveler
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-mute md:text-base">
            92 characters, 189 weapons, 53 artifact sets, 43 enemies; cleanly
            curated for your journey.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/characters" className="tombol-emas px-7 py-3 text-sm font-bold">
              Start Exploring
            </Link>
            <Link
              href="/about"
              className="tombol-hantu border garis px-7 py-3 text-sm font-semibold"
            >
              About the Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
