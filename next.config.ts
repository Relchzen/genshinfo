import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "genshin.jmp.blue" },
      // Sumber ikon senjata pada dataset kurasi versi lama
      { protocol: "https", hostname: "rerollcdn.com" },
    ],
  },
};

export default nextConfig;
