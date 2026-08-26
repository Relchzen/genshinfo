"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/characters", label: "Characters" },
  { href: "/weapons", label: "Weapons" },
  { href: "/artifacts", label: "Artifacts" },
  { href: "/enemies", label: "Enemies" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [pekat, setPekat] = useState(false);
  const [buka, setBuka] = useState(false);

  useEffect(() => {
    const saatScroll = () => setPekat(window.scrollY > 24);
    saatScroll();
    window.addEventListener("scroll", saatScroll, { passive: true });
    return () => window.removeEventListener("scroll", saatScroll);
  }, []);

  useEffect(() => setBuka(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        pekat || buka
          ? "border-b garis bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center" aria-label="Genshinfo Home">
          <Logo width={140} height={38} />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => {
            const aktif = pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  aktif
                    ? "bg-raised text-gold font-medium"
                    : "text-mute hover:bg-raised hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setBuka((v) => !v)}
          aria-label={buka ? "Tutup menu" : "Buka menu"}
          aria-expanded={buka}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${
              buka ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${
              buka ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {buka && (
        <div className="border-t garis bg-bg/95 px-5 py-3 backdrop-blur-md md:hidden">
          {LINKS.map((l) => {
            const aktif = pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`block rounded-lg px-3 py-2.5 text-sm ${
                  aktif ? "text-gold font-medium" : "text-mute"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
