import { getDaftarArtefak } from "@/lib/api";
import metaJson from "@/lib/artifacts-meta.json";
import PageHeader from "@/components/PageHeader";
import ListExplorer from "@/components/ListExplorer";
import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Artifacts",
  description:
    "Explore all Genshin Impact artifact sets, 2-piece and 4-piece set bonuses, piece rarities, and set components.",
  alternates: {
    canonical: "/artifacts",
  },
  openGraph: {
    title: "Artifacts · GenshInfo",
    description:
      "Explore all Genshin Impact artifact sets, 2-piece and 4-piece set bonuses, piece rarities, and set components.",
    url: "/artifacts",
  },
};

export default async function ArtifactsPage() {
  let daftar: string[] = [];
  try {
    daftar = await getDaftarArtefak();
  } catch {
    daftar = metaJson.map((m) => m.slug);
  }
  const meta = metaJson.filter((m) => daftar.includes(m.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Genshin Impact Artifacts Relics",
    description:
      "Complete Genshin Impact artifact set guide and bonus effects.",
    url: "https://genshinfo.vercel.app/artifacts",
    numberOfItems: meta.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader kicker="Relics" judul="Artifacts" jumlah={meta.length} />
      <ListExplorer kind="artefak" items={meta} />
    </>
  );
}
