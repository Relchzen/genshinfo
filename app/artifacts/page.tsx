import { getDaftarArtefak } from "@/lib/api";
import metaJson from "@/lib/artifacts-meta.json";
import PageHeader from "@/components/PageHeader";
import ListExplorer from "@/components/ListExplorer";

export const revalidate = 86400;

export default async function ArtifactsPage() {
  let daftar: string[] = [];
  try {
    daftar = await getDaftarArtefak();
  } catch {
    daftar = metaJson.map((m) => m.slug);
  }
  const meta = metaJson.filter((m) => daftar.includes(m.slug));

  return (
    <>
      <PageHeader kicker="Relics" judul="Artifacts" jumlah={meta.length} />
      <ListExplorer kind="artefak" items={meta} />
    </>
  );
}
