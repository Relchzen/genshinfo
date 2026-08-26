import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const TEAM = [
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
    peran: "Lead Developer",
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
      <PageHeader kicker="Four people, one final project" judul="About" jumlah={TEAM.length} />

      {/* Original v1 team photo */}
      <section className="mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border garis">
            <Image
              src="/tim.jpg"
              alt="The team working on the first version"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-5 right-5 text-sm text-mute">
              The original GenshInfo team, long before this version existed.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-mute">
            GenshInfo was born as a college assignment: a Genshin Impact encyclopedia
            built during late nights while learning Next.js from scratch.
            In 2026 the legacy code was archived in the{" "}
            <code className="rounded bg-raised px-1.5 py-0.5 text-xs">genshinfo_old</code>{" "}
            folder and this version was rewritten with standards as high as
            the original ambition.
          </p>
        </Reveal>
      </section>

      {/* Team cards */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {TEAM.map((t, i) => (
            <Reveal key={t.nama} delay={i * 0.06}>
              <div className="flex items-center gap-4 rounded-2xl border garis bg-raised/50 p-4">
                <Image
                  src={t.foto}
                  alt={`Photo of ${t.nama}`}
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
            The legacy version ran on Next.js 13 and Chakra UI; this version uses
            Next.js App Router, TypeScript, and Tailwind CSS. Data sourced
            from genshin.jmp.blue.
          </p>
        </Reveal>
      </section>
    </>
  );
}
