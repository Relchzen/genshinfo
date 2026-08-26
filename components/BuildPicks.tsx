import Image from "next/image";
import Link from "next/link";
import type { Curated } from "@/lib/types";
import Reveal from "./Reveal";

// Panel kurasi hasil migrasi dataset manual v1:
// role, senjata terbaik, kombinasi artefak, stat priority, dan tim rekomendasi.
export default function BuildPicks({ kurasi }: { kurasi: Curated }) {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-3xl border garis bg-gradient-to-b from-raised/80 to-bg">
        <div className="border-b garis px-6 py-4">
          <p className="label-kecil">Kurasi tim GenshInfo · era 2023</p>
          <h2 className="mt-1 text-xl font-bold tracking-tight">Build Picks</h2>
        </div>

        <div className="grid gap-x-10 gap-y-8 px-6 py-7 md:grid-cols-2">
          {/* Senjata terbaik */}
          {kurasi.bestWeapon.length > 0 && (
            <div>
              <h3 className="label-kecil mb-3">Senjata terbaik</h3>
              <ul className="space-y-2.5">
                {kurasi.bestWeapon.map((w, i) => (
                  <li key={`${w.name}-${i}`} className="flex items-center gap-3">
                    <Image
                      src={w.source}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-lg border garis bg-black/30 object-contain p-0.5"
                    />
                    <span className="text-sm font-semibold">{w.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Kombinasi artefak */}
          {kurasi.bestArtifact.length > 0 && (
            <div>
              <h3 className="label-kecil mb-3">Artefak</h3>
              <ul className="space-y-3">
                {kurasi.bestArtifact.map((set, gi) => (
                  <li key={gi} className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                    {set.map((a, ai) => (
                      <span key={`${a.name}-${ai}`} className="inline-flex items-center gap-1.5">
                        {ai > 0 && <span className="text-xs text-mute">+</span>}
                        <Image
                          src={a.source}
                          alt=""
                          width={28}
                          height={28}
                          className="h-7 w-7 rounded-md border garis bg-black/30 object-contain p-0.5"
                        />
                        <span className="text-xs font-semibold">{a.name}</span>
                        <span className="text-xs text-mute">×{a.stack}</span>
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stat priority */}
          {kurasi.artifactStat.length > 0 && (
            <div>
              <h3 className="label-kecil mb-3">Stat priority</h3>
              <dl className="space-y-1.5">
                {kurasi.artifactStat.map((s) => (
                  <div key={s.name} className="flex items-baseline justify-between gap-4 border-b garis pb-1.5">
                    <dt className="text-sm capitalize text-mute">{s.name}</dt>
                    <dd className="text-right text-sm font-semibold">
                      {s.priority ?? "-"}
                      {s.sub && (
                        <span className="block text-xs font-normal text-mute">
                          sub: {s.sub}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Tim terbaik */}
          {kurasi.bestTeam.length > 0 && (
            <div>
              <h3 className="label-kecil mb-3">Tim terbaik</h3>
              <ul className="space-y-3">
                {kurasi.bestTeam.map((tim, ti) => (
                  <li key={ti}>
                    <p className="mb-1.5 text-xs text-mute">Opsi {ti + 1}</p>
                    <div className="flex flex-wrap gap-2">
                      {tim.map((slugTs) => (
                        <Link
                          key={slugTs}
                          href={`/characters/${slugTs}`}
                          className="rounded-full border garis bg-raised/70 px-3 py-1 text-xs font-semibold capitalize transition-colors hover:border-gold/50 hover:text-gold"
                        >
                          {slugTs.replace(/-/g, " ")}
                        </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
