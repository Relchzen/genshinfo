import { getSenjata, urlIkonSenjata } from "@/lib/api";
import metaJson from "@/lib/weapons-meta.json";
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

function Stars({ n }: { n: number }) {
  return (
    <span
      className="text-lg font-bold"
      style={{ color: n >= 5 ? "#E9C46A" : n === 4 ? "#A78BFA" : "#64748B" }}
    >
      {"★".repeat(Math.max(1, Math.min(5, n)))}
    </span>
  );
}

export default async function WeaponDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let w;
  try {
    w = await getSenjata(decodeURIComponent(slug));
  } catch {
    notFound();
  }

  const specs = [
    { label: "Type", nilai: w.type },
    { label: "Base ATK", nilai: String(w.baseAttack) },
    { label: "Sub Stat", nilai: w.subStat },
    { label: "Location", nilai: w.location },
    { label: "Ascension Material", nilai: w.ascensionMaterial },
  ].filter((s) => s.nilai && s.nilai !== "-");

  return (
    <section className="mx-auto max-w-4xl px-5 pb-28 pt-28 md:pt-36">
      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-mute">
        <Link href="/weapons" className="transition-colors hover:text-ink">
          ← Weapons
        </Link>
      </nav>

      <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
        <Reveal>
          <div className="rounded-3xl border garis bg-raised/50 p-6">
            <Image
              src={urlIkonSenjata(slug)}
              alt={w.name}
              width={128}
              height={128}
              priority
              className="h-32 w-32 object-contain"
            />
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="label-kecil mb-1">Weapon</p>
          <h1 className="text-3xl font-extrabold tracking-tight capitalize md:text-5xl">
            {w.name}
          </h1>
          <div className="mt-2">
            <Stars n={w.rarity} />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {specs.map((s) => (
            <div key={s.label} className="rounded-2xl border garis bg-raised/40 p-4">
              <dt className="label-kecil mb-1">{s.label}</dt>
              <dd className="text-sm font-semibold capitalize">{s.nilai}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {w.passiveName && w.passiveName !== "-" && (
        <Reveal delay={0.1}>
          <div className="mt-8 rounded-2xl border garis bg-gradient-to-b from-raised/80 to-bg p-6">
            <h2 className="text-lg font-bold tracking-tight">{w.passiveName}</h2>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              {w.passiveDesc}
            </p>
          </div>
        </Reveal>
      )}
    </section>
  );
}
