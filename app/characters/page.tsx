import { getDaftarKarakter } from "@/lib/api";
import metaJson from "@/lib/karakter-meta.json";
import PageHeader from "@/components/PageHeader";
import CharacterExplorer from "@/components/CharacterExplorer";

export const revalidate = 86400;

export default async function CharactersPage() {
  // Validasi silang: hanya slug yang benar-benar ada di API yang ditampilkan
  let daftar: string[] = [];
  try {
    daftar = await getDaftarKarakter();
  } catch {
    daftar = metaJson.map((m) => m.slug);
  }
  const meta = metaJson.filter((m) => daftar.includes(m.slug));

  return (
    <>
      <PageHeader
        kicker="Ensiklopedia"
        judul="Characters"
        jumlah={meta.length}
      />
      <CharacterExplorer meta={meta} />
    </>
  );
}
