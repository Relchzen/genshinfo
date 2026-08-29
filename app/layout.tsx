import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://genshinfo.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0b0e14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GenshInfo — Teyvat Encyclopedia & Interactive Guide",
    template: "%s · GenshInfo",
  },
  description:
    "Comprehensive reference and interactive encyclopedia for Genshin Impact: playable characters, weapon stats, artifact set bonuses, enemy bestiary, and curated builds. Created by Fidel Brian Dava, Aurelius Abuthan, Farhan Hakim, and Marthin Riyaldo.",
  applicationName: "GenshInfo",
  authors: [
    { name: "Fidel Brian Dava", url: "https://fidel-portofolio.vercel.app" },
    { name: "Aurelius Abuthan" },
    { name: "Farhan Hakim" },
    { name: "Marthin Riyaldo" },
    { name: "GenshInfo Team" },
  ],
  generator: "Next.js",
  keywords: [
    "Genshin Impact",
    "GenshInfo",
    "Teyvat Encyclopedia",
    "Genshin Characters",
    "Genshin Builds",
    "Genshin Weapons",
    "Genshin Artifacts",
    "Genshin Enemies",
    "Genshin Database",
    "Genshin Guide",
    "Fidel Brian Dava",
    "Aurelius Abuthan",
    "Farhan Hakim",
    "Marthin Riyaldo",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Fidel Brian Dava",
  publisher: "GenshInfo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "GenshInfo",
    title: "GenshInfo — Teyvat Encyclopedia & Interactive Guide",
    description:
      "Comprehensive reference and interactive encyclopedia for Genshin Impact characters, weapons, artifacts, enemies, and curated builds. Created by Fidel Brian Dava, Aurelius Abuthan, Farhan Hakim, and Marthin Riyaldo.",
    images: [
      {
        url: "/logonew.png",
        width: 800,
        height: 800,
        alt: "GenshInfo — Teyvat Encyclopedia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenshInfo — Teyvat Encyclopedia & Interactive Guide",
    description:
      "Comprehensive reference and interactive encyclopedia for Genshin Impact characters, weapons, artifacts, enemies, and curated builds. Created by Fidel Brian Dava, Aurelius Abuthan, Farhan Hakim, and Marthin Riyaldo.",
    images: ["/logonew.png"],
    creator: "@fidelbriand",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.ico" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "GenshInfo",
        description:
          "Comprehensive reference and interactive encyclopedia for Genshin Impact characters, weapons, artifacts, enemies, and builds.",
        publisher: {
          "@type": "Organization",
          name: "GenshInfo",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/logo.png`,
          },
        },
        author: [
          {
            "@type": "Person",
            name: "Fidel Brian Dava",
            jobTitle: "Lead Developer",
            url: "https://fidel-portofolio.vercel.app",
            sameAs: "https://instagram.com/f.blayen",
          },
          {
            "@type": "Person",
            name: "Aurelius Abuthan",
            jobTitle: "Project Manager",
            sameAs: "https://instagram.com/aurelius.abuthan",
          },
          {
            "@type": "Person",
            name: "Farhan Hakim",
            jobTitle: "IT Support",
            sameAs: "https://instagram.com/_frhn_am",
          },
          {
            "@type": "Person",
            name: "Marthin Riyaldo",
            jobTitle: "Graphic Designer",
            sameAs: "https://instagram.com/marthinrl",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${hanken.variable} ${cinzel.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
