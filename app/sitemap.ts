import type { MetadataRoute } from "next";
import karakterMeta from "@/lib/karakter-meta.json";
import weaponsMeta from "@/lib/weapons-meta.json";
import artifactsMeta from "@/lib/artifacts-meta.json";
import enemiesMeta from "@/lib/enemies-meta.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://genshinfo.vercel.app";
  const now = new Date();

  // Halaman Utama & Statis
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/characters`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/weapons`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/artifacts`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/enemies`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic Characters
  const characterRoutes: MetadataRoute.Sitemap = karakterMeta.map((item) => ({
    url: `${baseUrl}/characters/${item.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Weapons
  const weaponRoutes: MetadataRoute.Sitemap = weaponsMeta.map((item) => ({
    url: `${baseUrl}/weapons/${item.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Dynamic Artifacts
  const artifactRoutes: MetadataRoute.Sitemap = artifactsMeta.map((item) => ({
    url: `${baseUrl}/artifacts/${item.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Dynamic Enemies
  const enemyRoutes: MetadataRoute.Sitemap = enemiesMeta.map((item) => ({
    url: `${baseUrl}/enemies/${item.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...characterRoutes,
    ...weaponRoutes,
    ...artifactRoutes,
    ...enemyRoutes,
  ];
}
