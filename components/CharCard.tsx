"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { warnaElemen, warnaRarity } from "@/lib/elements";
import { urlIkonKarakter } from "@/lib/api";

// Kartu ikon karakter untuk grid. Aksen warna mengikuti elemen + rarity.
export default function CharCard({
  slug,
  vision,
  rarity,
  index = 0,
}: {
  slug: string;
  vision?: string;
  rarity?: number;
  index?: number;
}) {
  const [hover, setHover] = useState(false);
  const kurangiMotion = useReducedMotion();
  const aksen = warnaElemen(vision);
  const emas = warnaRarity(rarity);
  const namaTampil = slug
    .split("-")
    .map((k) => k.charAt(0).toUpperCase() + k.slice(1))
    .join(" ");

  const masuk = () => setHover(true);
  const keluar = () => setHover(false);

  return (
    <motion.div
      initial={kurangiMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.03, 0.3),
        ease: "easeOut",
      }}
    >
      <Link
        href={`/characters/${slug}`}
        aria-label={`Detail ${namaTampil}`}
        onMouseEnter={masuk}
        onMouseLeave={keluar}
        onFocus={masuk}
        onBlur={keluar}
        className="group relative block aspect-square overflow-hidden rounded-2xl border transition-transform duration-200 will-change-transform hover:-translate-y-1"
        style={{
          borderColor: hover ? `${aksen}66` : "rgba(241,245,249,0.08)",
          background:
            "linear-gradient(180deg, rgba(17,24,39,0.4), rgba(10,14,26,0.9))",
        }}
      >
        <Image
          src={urlIkonKarakter(slug)}
          alt=""
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 180px"
          className="object-cover object-top"
        />

        {/* Pita rarity */}
        <span
          className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full"
          style={{ background: emas }}
          aria-hidden="true"
        />

        {/* Kaki kartu: nama muncul jelas saat hover */}
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-2.5 pb-2 pt-6">
          <span className="block truncate text-xs font-semibold tracking-wide">
            {namaTampil}
          </span>
        </span>

        {/* Garis bawah menyala tipis warna elemen saat hover */}
        <span
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          style={{ background: aksen }}
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  );
}
