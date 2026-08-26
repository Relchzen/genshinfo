import { getMusuh, API_BASE } from "@/lib/api";
import metaJson from "@/lib/enemies-meta.json";
import type { Metadata } from "next";
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
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: decodeURIComponent(slug).replace(/-/g, " ") };
}

export default async function EnemyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let e;
  try {
    e = await getMusuh(decodeURIComponent(slug));
  } catch {
    notFound();
  }

  const facts = [
    { label: "Region", nilai: e.region },
    { label: "Type", nilai: e.type },
    { label: "Family", nilai: e.family },
    { label: "Faction", nilai: e.faction },
  ].filter((f) => f.nilai);

  return (
    <section className="mx-auto max-w-4xl px-5 pb-28 pt-28 md:pt-36">
      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-mute">
        <Link href="/enemies" className="transition-colors hover:text-ink">
          ← Enemies
        </Link>
      </nav>

      <div className="flex flex-col items-start gap-8 sm:flex-row">
        <Reveal>
          <Image
            src={`${API_BASE}/enemies/${slug}/icon`}
            alt={e.name}
            width={160}
            height={160}
            priority
            className="h-40 w-40 rounded-3xl border garis object-cover"
          />
        </Reveal>
        <Reveal delay={0.06}>
          <p className="label-kecil mb-1">Enemy</p>
          <h1 className="text-3xl font-extrabold tracking-tight capitalize md:text-5xl">
            {e.name}
          </h1>
          {e.elements && e.elements.length > 0 && (
            <p className="mt-2 text-sm font-semibold capitalize text-mute">
              Elements: {e.elements.join(", ").toLowerCase()}
            </p>
          )}
        </Reveal>
      </div>

      {facts.length > 0 && (
        <Reveal delay={0.08}>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl border garis bg-raised/40 p-4">
                <dt className="label-kecil mb-1">{f.label}</dt>
                <dd className="text-sm font-semibold">{f.nilai}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mute">
          {e.description}
        </p>
      </Reveal>
    </section>
  );
}
