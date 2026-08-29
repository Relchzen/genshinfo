import { getDaftarMusuh } from "@/lib/api";
import metaJson from "@/lib/enemies-meta.json";
import PageHeader from "@/components/PageHeader";
import ListExplorer from "@/components/ListExplorer";
import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Enemies",
  description:
    "Explore the Genshin Impact bestiary: monsters, bosses, factions, elemental affinities, and regional habitats.",
  alternates: {
    canonical: "/enemies",
  },
  openGraph: {
    title: "Enemies · GenshInfo",
    description:
      "Explore the Genshin Impact bestiary: monsters, bosses, factions, elemental affinities, and regional habitats.",
    url: "/enemies",
  },
};

export default async function EnemiesPage() {
  let daftar: string[] = [];
  try {
    daftar = await getDaftarMusuh();
  } catch {
    daftar = metaJson.map((m) => m.slug);
  }
  const meta = metaJson.filter((m) => daftar.includes(m.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Genshin Impact Enemies Bestiary",
    description:
      "Complete Genshin Impact enemies, bosses, and monsters database.",
    url: "https://genshinfo.vercel.app/enemies",
    numberOfItems: meta.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader kicker="Bestiary" judul="Enemies" jumlah={meta.length} />
      <ListExplorer kind="musuh" items={meta} />
    </>
  );
}
