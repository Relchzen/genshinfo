import { getDaftarSenjata } from "@/lib/api";
import metaJson from "@/lib/weapons-meta.json";
import PageHeader from "@/components/PageHeader";
import ListExplorer from "@/components/ListExplorer";

export const revalidate = 86400;

export default async function WeaponsPage() {
  let daftar: string[] = [];
  try {
    daftar = await getDaftarSenjata();
  } catch {
    daftar = metaJson.map((m) => m.slug);
  }
  const meta = metaJson.filter((m) => daftar.includes(m.slug));

  return (
    <>
      <PageHeader kicker="Persediaan" judul="Weapons" jumlah={meta.length} />
      <ListExplorer
        kind="senjata"
        items={meta}
      />
    </>
  );
}
