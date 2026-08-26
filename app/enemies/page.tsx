import { getDaftarMusuh } from "@/lib/api";
import metaJson from "@/lib/enemies-meta.json";
import PageHeader from "@/components/PageHeader";
import ListExplorer from "@/components/ListExplorer";

export const revalidate = 86400;

export default async function EnemiesPage() {
  let daftar: string[] = [];
  try {
    daftar = await getDaftarMusuh();
  } catch {
    daftar = metaJson.map((m) => m.slug);
  }
  const meta = metaJson.filter((m) => daftar.includes(m.slug));

  return (
    <>
      <PageHeader kicker="Bestiary" judul="Enemies" jumlah={meta.length} />
      <ListExplorer kind="musuh" items={meta} />
    </>
  );
}
