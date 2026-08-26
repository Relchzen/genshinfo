import {
  getKarakter,
  urlIkonElemen,
  urlKartuKarakter,
} from "@/lib/api";
import { getCurated } from "@/lib/curated";
import metaJson from "@/lib/karakter-meta.json";
import { warnaElemen } from "@/lib/elements";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import BuildPicks from "@/components/BuildPicks";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  return metaJson.map((m) => ({ name: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  return { title: decodeURIComponent(name).replace(/-/g, " ") };
}

function Chip({
  ikon,
  label,
  warna,
}: {
  ikon?: string;
  label: string;
  warna?: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border garis bg-raised/70 px-3 py-1 text-xs font-semibold">
      {ikon && (
        <Image src={ikon} alt="" width={14} height={14} className="h-3.5 w-3.5 object-contain" />
      )}
      <span style={warna ? { color: warna } : undefined}>{label}</span>
    </span>
  );
}

function TalentCard({
  unlock,
  nama,
  deskripsi,
  upgrades,
}: {
  unlock: string;
  nama: string;
  deskripsi: string;
  upgrades?: { name: string; value: string }[];
}) {
  return (
    <div className="rounded-2xl border garis bg-raised/40 p-5">
      <p className="label-kecil mb-1">{unlock}</p>
      <h3 className="text-lg font-bold tracking-tight">{nama}</h3>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-mute">
        {deskripsi}
      </p>
      {upgrades && upgrades.length > 0 && (
        <details className="group mt-3">
          <summary className="cursor-pointer text-xs font-semibold text-gold select-none">
            View scaling ratios
          </summary>
          <dl className="mt-3 grid gap-x-6 gap-y-1 sm:grid-cols-2">
            {upgrades.map((u) => (
              <div key={u.name} className="flex justify-between gap-4 border-b garis py-1 text-xs">
                <dt className="text-mute">{u.name}</dt>
                <dd className="text-right font-medium">{u.value}</dd>
              </div>
            ))}
          </dl>
        </details>
      )}
    </div>
  );
}

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const slug = decodeURIComponent(name);

  let kar;
  try {
    kar = await getKarakter(slug);
  } catch {
    notFound();
  }

  const kurasi = getCurated(slug);
  const aksen = warnaElemen(kar.vision);

  return (
    <>
      {/* ===== Hero ===== */}
      <section
        className="mx-auto max-w-6xl px-5 pb-12 pt-28 md:pt-36"
        style={{ ["--aksen" as string]: aksen }}
      >
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-mute">
          <Link href="/characters" className="transition-colors hover:text-ink">
            ← Characters
          </Link>
        </nav>

        <div className="grid items-start gap-8 md:grid-cols-[300px_1fr]">
          {/* Character card with element accent */}
          <Reveal>
            <div
              className="relative aspect-[280/400] overflow-hidden rounded-3xl border"
              style={{
                borderColor: `${aksen}55`,
                boxShadow: `0 24px 60px -30px ${aksen}44`,
              }}
            >
              <Image
                src={urlKartuKarakter(slug)}
                alt={`${kar.name} card`}
                fill
                priority
                sizes="300px"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Identity */}
          <Reveal delay={0.06}>
            <p className="label-kecil mb-2">{kar.title}</p>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              {kar.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Chip
                ikon={urlIkonElemen(kar.vision)}
                label={kar.vision ?? "?"}
                warna={aksen}
              />
              <Chip label={kar.weapon ?? "?"} />
              <Chip label={kar.nation ?? "?"} />
              {kar.rarity && (
                <span
                  className="text-sm font-bold"
                  style={{ color: kar.rarity === 5 ? "#E9C46A" : "#A78BFA" }}
                >
                  {"★".repeat(kar.rarity)}
                </span>
              )}
            </div>

            {kurasi?.role && (
              <p className="label-kecil mt-4">
                Curated team role: <span className="text-gold">{kurasi.role}</span>
              </p>
            )}

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-mute md:text-base">
              {kar.description}
            </p>

            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-xs">
              {kar.constellation && (
                <div>
                  <dt className="label-kecil mb-1">Constellation</dt>
                  <dd className="font-semibold">{kar.constellation}</dd>
                </div>
              )}
              {kar.affiliation && (
                <div>
                  <dt className="label-kecil mb-1">Affiliation</dt>
                  <dd className="font-semibold">{kar.affiliation}</dd>
                </div>
              )}
              {kar.release && (
                <div>
                  <dt className="label-kecil mb-1">Release</dt>
                  <dd className="font-semibold">{kar.release}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ===== Build picks (curated dataset v1) ===== */}
      {kurasi && (
        <section className="mx-auto max-w-6xl px-5 pb-4">
          <BuildPicks kurasi={kurasi} />
        </section>
      )}

      {/* ===== Talents ===== */}
      {kar.skillTalents && (
        <section className="mx-auto max-w-6xl px-5 py-10">
          <Reveal>
            <h2 className="mb-6 text-2xl font-bold tracking-tight">Talents</h2>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            {kar.skillTalents.map((s, i) => (
              <Reveal key={s.name} delay={(i % 4) * 0.05}>
                <TalentCard
                  unlock={s.unlock}
                  nama={s.name}
                  deskripsi={s.description}
                  upgrades={s.upgrades}
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ===== Passives ===== */}
      {kar.passiveTalents && kar.passiveTalents.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-10">
          <Reveal>
            <h2 className="mb-6 text-2xl font-bold tracking-tight">Passives</h2>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            {kar.passiveTalents.map((p) => (
              <Reveal key={p.name}>
                <TalentCard
                  unlock={p.unlock}
                  nama={p.name}
                  deskripsi={p.description}
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ===== Constellations ===== */}
      {kar.constellations && kar.constellations.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-10 pb-28">
          <Reveal>
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              Constellations
            </h2>
          </Reveal>
          <ol className="grid gap-3 md:grid-cols-2">
            {kar.constellations.map((c) => (
              <li
                key={c.name}
                className="rounded-2xl border garis bg-raised/40 p-5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-bold">{c.name}</h3>
                  <span className="label-kecil shrink-0">C{c.unlock}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  {c.description}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}
    </>
  );
}
