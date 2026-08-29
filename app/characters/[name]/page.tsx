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
  const slug = decodeURIComponent(name);
  const formattedName = slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  let kar;
  try {
    kar = await getKarakter(slug);
  } catch {
    return {
      title: formattedName,
    };
  }

  const title = `${kar.name}${kar.title ? ` (${kar.title})` : ""} · Character Guide & Build`;
  const description =
    kar.description ||
    `Detailed guide for ${kar.name} in Genshin Impact: ${kar.vision} vision, ${kar.weapon} wielder, skill talents, constellations, and curated team builds.`;
  const cardImage = urlKartuKarakter(slug);

  return {
    title: `${kar.name} — Build & Profile`,
    description,
    alternates: {
      canonical: `/characters/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/characters/${slug}`,
      images: [
        {
          url: cardImage,
          alt: `${kar.name} Character Card`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [cardImage],
    },
  };
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://genshinfo.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: `${kar.name} — Genshin Impact Guide`,
    description: kar.description,
    url: `${siteUrl}/characters/${slug}`,
    mainEntity: {
      "@type": "Thing",
      name: kar.name,
      alternateName: kar.title,
      description: kar.description,
      image: urlKartuKarakter(slug),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              {kar.birthday && (
                <div>
                  <dt className="label-kecil mb-1">Birthday</dt>
                  <dd className="font-semibold">{kar.birthday}</dd>
                </div>
              )}
              {kar.affiliation && (
                <div>
                  <dt className="label-kecil mb-1">Affiliation</dt>
                  <dd className="font-semibold">{kar.affiliation}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ===== Curated Build Panel ===== */}
      {kurasi && (
        <section className="mx-auto max-w-6xl px-5 py-8">
          <Reveal>
            <BuildPicks kurasi={kurasi} />
          </Reveal>
        </section>
      )}

      {/* ===== Skill Talents ===== */}
      {kar.skillTalents && kar.skillTalents.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-12">
          <Reveal>
            <p className="label-kecil mb-2">Combat Talents</p>
            <h2 className="judul-display text-2xl md:text-3xl">Skills & Burst</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {kar.skillTalents.map((t, idx) => (
              <Reveal key={t.name} delay={idx * 0.05}>
                <TalentCard
                  unlock={t.unlock}
                  nama={t.name}
                  deskripsi={t.description}
                  upgrades={t.upgrades}
                />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ===== Passive Talents ===== */}
      {kar.passiveTalents && kar.passiveTalents.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-12">
          <Reveal>
            <p className="label-kecil mb-2">Inherent Passives</p>
            <h2 className="judul-display text-2xl md:text-3xl">Passives</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {kar.passiveTalents.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 0.05}>
                <div className="rounded-2xl border garis bg-raised/40 p-5">
                  <p className="label-kecil mb-1">{p.unlock}</p>
                  <h3 className="text-lg font-bold tracking-tight">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ===== Constellations ===== */}
      {kar.constellations && kar.constellations.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-12 pb-28">
          <Reveal>
            <p className="label-kecil mb-2">Stella Fortuna</p>
            <h2 className="judul-display text-2xl md:text-3xl">Constellations</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {kar.constellations.map((c, idx) => (
              <Reveal key={c.name} delay={idx * 0.04}>
                <div className="rounded-2xl border garis bg-raised/40 p-5">
                  <p className="label-kecil mb-1">C{c.unlock || idx + 1}</p>
                  <h3 className="text-lg font-bold tracking-tight">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
