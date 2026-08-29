import { getDaftarKarakter } from "@/lib/api";
import metaJson from "@/lib/karakter-meta.json";
import PageHeader from "@/components/PageHeader";
import CharacterExplorer from "@/components/CharacterExplorer";
import type { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Characters",
  description:
    "Explore all playable characters in Genshin Impact with visions, weapon types, stats, ascension talents, and curated builds.",
  alternates: {
    canonical: "/characters",
  },
  openGraph: {
    title: "Characters · GenshInfo",
    description:
      "Explore all playable characters in Genshin Impact with visions, weapon types, stats, ascension talents, and curated builds.",
    url: "/characters",
  },
};

export default async function CharactersPage() {
  let daftar: string[] = [];
  try {
    daftar = await getDaftarKarakter();
  } catch {
    daftar = metaJson.map((m) => m.slug);
  }
  const meta = metaJson.filter((m) => daftar.includes(m.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Genshin Impact Characters Encyclopedia",
    description:
      "Explore all playable characters in Genshin Impact with visions, weapon types, stats, and builds.",
    url: "https://genshinfo.vercel.app/characters",
    numberOfItems: meta.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        kicker="Encyclopedia"
        judul="Characters"
        jumlah={meta.length}
      />
      <CharacterExplorer meta={meta} />
    </>
  );
}
