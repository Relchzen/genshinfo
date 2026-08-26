import { getArtefak } from "@/lib/api";
import metaJson from "@/lib/artifacts-meta.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return metaJson.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: decodeURIComponent(slug).replace(/-/g, " ") };
}

const PIECES = [
  { kunci: "flower-of-life", label: "Flower of Life" },
  { kunci: "plume-of-death", label: "Plume of Death" },
  { kunci: "sands-of-eon", label: "Sands of Eon" },
  { kunci: "goblet-of-eonothem", label: "Goblet of Eonothem" },
  { kunci: "circlet-of-logos", label: "Circlet of Logos" },
];

export default async function ArtifactDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let a;
  try {
    a = await getArtefak(decodeURIComponent(slug));
  } catch {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-5 pb-28 pt-28 md:pt-36">
      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-mute">
        <Link href="/artifacts" className="transition-colors hover:text-ink">
          ← Artifacts
        </Link>
      </nav>

      <div className="flex flex-col items-center gap-6 text-center">
        <Reveal>
          <Image
            src={`https://genshin.jmp.blue/artifacts/${slug}/flower-of-life`}
            alt={a.name}
            width={120}
            height={120}
            priority
            className="h-30 w-30 object-contain"
          />
        </Reveal>
        <Reveal delay={0.06}>
          <p className="label-kecil mb-1">Artifact Set</p>
          <h1 className="text-3xl font-extrabold tracking-tight capitalize md:text-5xl">
            {a.name}
          </h1>
          <p
            className="mt-2 font-bold"
            style={{ color: a.max_rarity >= 5 ? "#E9C46A" : "#A78BFA" }}
          >
            {"★".repeat(Math.max(1, Math.min(5, a.max_rarity)))} max
          </p>
        </Reveal>
      </div>

      {/* Set bonuses */}
      <Reveal delay={0.08}>
        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border garis bg-gradient-to-b from-raised/80 to-bg p-6 md:p-8">
          <div className="flex gap-4 border-b garis pb-4">
            <span className="label-kecil shrink-0 pt-0.5">2-Piece</span>
            <p className="text-sm leading-relaxed">{a["2-piece_bonus"]}</p>
          </div>
          {a["4-piece_bonus"] && (
            <div className="flex gap-4 pt-4">
              <span className="label-kecil shrink-0 pt-0.5">4-Piece</span>
              <p className="text-sm leading-relaxed">{a["4-piece_bonus"]}</p>
            </div>
          )}
        </div>
      </Reveal>

      {/* Piece gallery */}
      <section className="mx-auto mt-12 max-w-3xl pb-10">
        <Reveal delay={0.1}>
          <h2 className="mb-5 text-center text-xl font-bold tracking-tight">
            Set Pieces
          </h2>
        </Reveal>
        <div className="grid grid-cols-5 gap-3">
          {PIECES.map((p, i) => (
            <Reveal key={p.kunci} delay={i * 0.04}>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={`https://genshin.jmp.blue/artifacts/${slug}/${p.kunci}`}
                  alt={`${a.name} ${p.label}`}
                  width={96}
                  height={96}
                  className="h-20 w-20 rounded-2xl border garis bg-raised/40 object-contain p-1"
                />
                <span className="text-center text-[10px] leading-tight text-mute">
                  {p.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  );
}
