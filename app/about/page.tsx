import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const TIM = [
  {
    nama: "Aurelius Abuthan",
    peran: "Project Manager",
    foto: "/Aurel.jpg",
    ig: "aurelius.abuthan",
  },
  {
    nama: "Farhan Hakim",
    peran: "IT Support",
    foto: "/Farhan.jpg",
    ig: "_frhn_am",
  },
  {
    nama: "Fidel Brian Dava",
    peran: "Mandor",
    foto: "/Fidel.jpg",
    ig: "f.blayen",
  },
  {
    nama: "Marthin Riyaldo",
    peran: "Graphic Designer",
    foto: "/Marthin.jpg",
    ig: "marthinrl",
  },
];

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader kicker="Empat orang, satu tugas akhir" judul="About" jumlah={TIM.length} />

      {/* Foto kebersamaan era v1 sebagai pembuka */}
      <section className="mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border garis">
            <Image
              src="/tim.jpg"
              alt="Foto kebersamaan tim saat mengerjakan versi pertama"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 right-5 text-sm text-mute">
              Tim asli GenshInfo, jauh sebelum versi ini ada.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-mute">
            GenshInfo lahir sebagai tugas kuliah: situs ensiklopedia Genshin
            Impact yang dibangun larut malam sambil belajar Next.js dari nol.
            Tahun 2026 kode lamanya diarsipkan utuh di folder{" "}
            <code className="rounded bg-raised px-1.5 py-0.5 text-xs">genshinfo_old</code>{" "}
            dan versi ini ditulis ulang dengan standar yang sama tingginya
            dengan ambisinya dulu.
          </p>
        </Reveal>
      </section>

      {/* Kartu anggota */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {TIM.map((t, i) => (
            <Reveal key={t.nama} delay={i * 0.06}>
              <div className="flex items-center gap-4 rounded-2xl border garis bg-raised/50 p-4">
                <Image
                  src={t.foto}
                  alt={`Foto ${t.nama}`}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border border-white/10 object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-bold">{t.nama}</p>
                  <p className="label-kecil mt-0.5">{t.peran}</p>
                  <a
                    href={`https://www.instagram.com/${t.ig}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gold transition-opacity hover:opacity-80"
                  >
                    @{t.ig}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-xs leading-relaxed text-mute/70">
            Versi lama tayang dengan Next.js 13 dan Chakra UI; versi ini dengan
            Next.js App Router, TypeScript, dan Tailwind CSS. Data bersumber
            dari genshin.jmp.blue.
          </p>
        </Reveal>
      </section>
    </>
  );
}
