"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import type { ReactNode } from "react";

// Lapisan parallax dengan kedalaman 0..1 (0=jauh, 1=dekat).
// Gerak murni transform translateY, sesuai design.md.
export default function ParallaxLayer({
  children,
  depth,
  className,
}: {
  children: ReactNode;
  depth: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const kurangiMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const jarak = depth * 220;
  const y = useTransform(scrollYProgress, [0, 1], [0, -jarak]);

  if (kurangiMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
