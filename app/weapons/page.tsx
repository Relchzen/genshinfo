import { getDaftarSenjata } from "@/lib/api";
import metaJson from "@/lib/weapons-meta.json";
import PageHeader from "@/components/PageHeader";
import ListExplorer from "@/components/ListExplorer";
import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Weapons",
  description:
    "Browse the full Genshin Impact weapon arsenal: swords, claymores, polearms, bows, catalysts, stats, and passive effects.",
  alternates: {
    canonical: "/weapons",
  },
  openGraph: {
    title: "Weapons · GenshInfo",
    description:
      "Browse the full Genshin Impact weapon arsenal: swords, claymores, polearms, bows, catalysts, stats, and passive effects.",
    url: "/weapons",
  },
};

export default async function WeaponsPage() {
  let daftar: string[] = [];
  try {
    daftar = await getDaftarSenjata();
  } catch {
    daftar = metaJson.map((m) => m.slug);
  }
  const meta = metaJson.filter((m) => daftar.includes(m.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Genshin Impact Weapons Arsenal",
    description:
      "Complete weapon list with rarities, base stats, and passive effects.",
    url: "https://genshinfo.vercel.app/weapons",
    numberOfItems: meta.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader kicker="Arsenal" judul="Weapons" jumlah={meta.length} />
      <ListExplorer
        kind="senjata"
        items={meta}
      />
    </>
  );
}
