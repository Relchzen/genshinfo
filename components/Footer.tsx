import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="garis border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="mb-3 flex items-center gap-2.5">
            <Logo width={130} height={34} />
          </div>
          <p className="text-sm leading-relaxed text-mute">
            Rebuilt in 2026 from a 2023 college project. New face, same spirit:
            immersive parallax scrolling remains at its heart.
          </p>
        </div>

        <div className="flex gap-14">
          <div>
            <p className="label-kecil mb-3">Explore</p>
            <ul className="space-y-2 text-sm text-mute">
              <li><Link className="transition-colors hover:text-ink" href="/characters">Characters</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/weapons">Weapons</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/artifacts">Artifacts</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/enemies">Enemies</Link></li>
            </ul>
          </div>
          <div>
            <p className="label-kecil mb-3">Project</p>
            <ul className="space-y-2 text-sm text-mute">
              <li><Link className="transition-colors hover:text-ink" href="/about">Team</Link></li>
              <li>
                <a
                  className="transition-colors hover:text-ink"
                  href="https://github.com/Relchzen/genshinfo"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-8">
        <p className="text-xs leading-relaxed text-mute/70">
          Data and assets sourced from genshin.jmp.blue. Genshin Impact is a
          trademark of HoYoverse; this project is an unaffiliated, non-commercial fan
          tribute for educational purposes.
        </p>
      </div>
    </footer>
  );
}
