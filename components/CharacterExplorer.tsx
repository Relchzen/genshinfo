"use client";

import { useMemo, useState } from "react";
import CharCard from "./CharCard";

interface Meta {
  slug: string;
  vision: string | null;
  rarity: number | null;
  weapon: string | null;
}

const PILIHAN_RARITY = ["Semua", "5", "4"];
const PILIHAN_SENJATA = ["Semua", "Sword", "Claymore", "Polearm", "Bow", "Catalyst"];

function PillFilter({
  opsi,
  nilai,
  ganti,
}: {
  opsi: string[];
  nilai: string;
  ganti: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {opsi.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => ganti(o)}
          className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
            nilai === o
              ? "border-gold/60 bg-gold/15 text-gold"
              : "garis text-mute hover:bg-raised hover:text-ink"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

// Explorer: pencarian + filter elemen/rarity/senjata, semua instan di klien.
export default function CharacterExplorer({ meta }: { meta: Meta[] }) {
  const [q, setQ] = useState("");
  const [elemen, setElemen] = useState("Semua");
  const [rarity, setRarity] = useState("Semua");
  const [senjata, setSenjata] = useState("Semua");

  const daftarElemen = useMemo(() => {
    const s = Array.from(new Set(meta.map((m) => m.vision).filter(Boolean)));
    return ["Semua", ...(s as string[]).sort()];
  }, [meta]);

  const hasil = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return meta.filter((m) => {
      if (needle && !m.slug.includes(needle)) return false;
      if (elemen !== "Semua" && m.vision?.toLowerCase() !== elemen.toLowerCase())
        return false;
      if (
        senjata !== "Semua" &&
        m.weapon?.toLowerCase() !== senjata.toLowerCase()
      )
        return false;
      if (rarity !== "Semua" && String(m.rarity ?? "") !== rarity) return false;
      return true;
    });
  }, [meta, q, elemen, rarity, senjata]);

  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      {/* Toolbar filter */}
      <div className="sticky top-16 z-30 -mx-2 mb-8 rounded-2xl border garis bg-bg/90 p-4 backdrop-blur-md">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari karakter…"
          className="w-full rounded-full border garis bg-raised px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-mute/60 focus:border-gold/50"
        />
        <div className="mt-3 space-y-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="label-kecil w-14">Elemen</span>
            <PillFilter
              opsi={daftarElemen}
              nilai={elemen}
              ganti={setElemen}
            />
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="label-kecil w-14">Rarity</span>
            <PillFilter opsi={PILIHAN_RARITY} nilai={rarity} ganti={setRarity} />
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="label-kecil w-14">Senjata</span>
            <PillFilter
              opsi={PILIHAN_SENJATA}
              nilai={senjata}
              ganti={setSenjata}
            />
          </div>
        </div>
      </div>

      {/* Grid hasil */}
      {hasil.length === 0 ? (
        <p className="py-20 text-center text-sm text-mute">
          Tidak ada karakter yang cocok dengan filter ini.
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
          {hasil.map((m, i) => (
            <CharCard
              key={m.slug}
              slug={m.slug}
              vision={m.vision ?? undefined}
              rarity={m.rarity ?? undefined}
              index={i % 21}
            />
          ))}
        </div>
      )}
    </section>
  );
}
