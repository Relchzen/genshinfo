import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Kunci akar proyek agar Turbopack tidak mengira folder home sebagai root
  // (ada package-lock.json liar peninggalan 2023 langsung di ~/).
  turbopack: {
    root: __dirname,
  },
  // Kunci yang sama untuk output file tracing saat runtime (next start)
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "genshin.jmp.blue" },
      // Sumber ikon senjata pada dataset kurasi versi lama
      { protocol: "https", hostname: "rerollcdn.com" },
    ],
  },
};

export default nextConfig;
