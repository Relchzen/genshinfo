import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

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
    url: "https://fidel-portofolio.vercel.app",
  },
  {
    nama: "Marthin Riyaldo",
    peran: "Graphic Designer",
    foto: "/Marthin.jpg",
    ig: "marthinrl",
  },
];

export const metadata: Metadata = {
  title: "About the Creators",
  description:
    "Meet the creators of GenshInfo: Fidel Brian Dava (Lead Developer), Aurelius Abuthan (Project Manager), Farhan Hakim (IT Support), and Marthin Riyaldo (Graphic Designer).",
  keywords: [
    "Fidel Brian Dava",
    "Aurelius Abuthan",
    "Farhan Hakim",
    "Marthin Riyaldo",
    "GenshInfo Creators",
    "GenshInfo Team",
    "Genshin Impact Encyclopedia Creators",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About the Creators · GenshInfo",
    description:
      "Meet the creators of GenshInfo: Fidel Brian Dava, Aurelius Abuthan, Farhan Hakim, and Marthin Riyaldo.",
    url: "/about",
    images: [
      {
        url: "/tim.jpg",
        width: 1200,
        height: 675,
        alt: "GenshInfo Development Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About the Creators · GenshInfo",
    description:
      "Meet the creators of GenshInfo: Fidel Brian Dava, Aurelius Abuthan, Farhan Hakim, and Marthin Riyaldo.",
    images: ["/tim.jpg"],
  },
};

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://genshinfo.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About GenshInfo and the Team",
    description:
      "Reimagined Genshin Impact encyclopedia project created by Fidel Brian Dava, Aurelius Abuthan, Farhan Hakim, and Marthin Riyaldo.",
    url: `${siteUrl}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "GenshInfo Team",
      member: TEAM.map((t) => ({
        "@type": "Person",
        name: t.nama,
        jobTitle: t.peran,
        image: `${siteUrl}${t.foto}`,
        sameAs: [
          `https://instagram.com/${t.ig}`,
          ...(t.url ? [t.url] : []),
        ],
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          </div>
        </Reveal>
      </section>

      {/* Team grid */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <Reveal>
          <h2 className="judul-display text-2xl md:text-3xl">The Builders</h2>
          <p className="mt-2 text-sm text-mute">
            Crafted with passion by the original team.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {TEAM.map((t, idx) => (
            <Reveal key={t.nama} delay={idx * 0.05}>
              <div className="group flex flex-col items-center rounded-3xl border garis bg-raised/40 p-5 text-center transition-all hover:bg-raised/70">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border garis">
                  <Image
                    src={t.foto}
                    alt={t.nama}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-bold text-sm">{t.nama}</h3>
                <p className="text-xs text-mute">{t.peran}</p>
                <div className="mt-3 flex flex-col gap-1">
                  <a
                    href={`https://instagram.com/${t.ig}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gold hover:underline"
                  >
                    @{t.ig}
                  </a>
                  {t.url && (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-mute hover:text-ink hover:underline"
                    >
                      Portfolio ↗
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
