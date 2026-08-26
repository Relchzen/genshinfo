"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { API_BASE, urlIkonSenjata } from "@/lib/api";
import Reveal from "./Reveal";

export interface ItemMeta {
  slug: string;
  [k: string]: string | number | string[] | null | undefined;
}

type Kind = "senjata" | "artefak" | "musuh";

function warnaRarityItem(r?: unknown): string {
  const n = Number(r);
  if (n >= 5) return "#E9C46A";
  if (n === 4) return "#A78BFA";
  return "#64748B";
}

function bintang(n?: unknown): string {
  const count = Math.max(1, Math.min(5, Number(n) || 0));
  return "★".repeat(count);
}

function IkonItem({ kind, slug }: { kind: Kind; slug: string }) {
  const sumber: string[] =
    kind === "senjata"
      ? [urlIkonSenjata(slug)]
      : kind === "artefak"
        ? [
            `${API_BASE}/artifacts/${slug}/flower-of-life`,
            `${API_BASE}/artifacts/${slug}/plume-of-death`,
          ]
        : [`${API_BASE}/enemies/${slug}/icon`];
  const [idx, setIdx] = useState(0);

  if (idx >= sumber.length) {
    return (
      <div className="flex h-24 w-24 items-center justify-center rounded-xl border garis bg-raised">
        <span className="judul-display text-xl text-mute/70">
          {slug.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={sumber[idx]}
      alt=""
      width={96}
      height={96}
      className={`h-24 w-24 ${kind === "musuh" ? "rounded-xl object-cover" : "object-contain"}`}
      onError={() => setIdx((n) => n + 1)}
    />
  );
}

function ExtraInfo({ kind, item }: { kind: Kind; item: ItemMeta }) {
  if (kind === "senjata") {
    return (
      <span
        className="text-xs font-semibold tracking-wide"
        style={{ color: warnaRarityItem(item.rarity) }}
      >
        {bintang(item.rarity)} · {String(item.type ?? "")}
      </span>
    );
  }
  if (kind === "artefak") {
    return (
      <span
        className="text-xs font-semibold tracking-wide"
        style={{ color: warnaRarityItem(item.max_rarity) }}
      >
        {bintang(item.max_rarity)} max
      </span>
    );
  }
  return (
    <span className="text-xs text-mute">
      {[item.family, item.type].filter(Boolean).join(" · ")}
    </span>
  );
}

// Generic explorer for weapons/artifacts/enemies: instant search.
export default function ListExplorer({
  kind,
  items,
}: {
  kind: Kind;
  items: ItemMeta[];
}) {
  const [q, setQ] = useState("");

  const hasil = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return items;
    return items.filter((it) => it.slug.includes(needle));
  }, [items, q]);

  const dasar = kind === "musuh" ? "/enemies" : `/${kind === "senjata" ? "weapons" : "artifacts"}`;

  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search…"
        className="mb-8 w-full max-w-md rounded-full border garis bg-raised px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-mute/60 focus:border-gold/50"
      />

      {hasil.length === 0 ? (
        <p className="py-20 text-center text-sm text-mute">
          No results match your search.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {hasil.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 15) * 0.04}>
              <Link
                href={`${dasar}/${item.slug}`}
                className="group flex h-full flex-col items-center gap-3 rounded-2xl border garis bg-raised/50 p-4 text-center transition-transform duration-200 hover:-translate-y-1 hover:border-gold/30"
              >
                <IkonItem kind={kind} slug={item.slug} />
                <div className="mt-auto">
                  <p className="text-sm font-semibold capitalize">
                    {item.slug.replace(/-/g, " ")}
                  </p>
                  <div className="mt-1">
                    <ExtraInfo kind={kind} item={item} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
