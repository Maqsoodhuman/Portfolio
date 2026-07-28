import type { Metadata, Viewport } from "next";
import {
  Anton,
  Archivo,
  Barlow_Condensed,
  Caveat,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton-v",
  weight: "400",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo-v",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow-v",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat-v",
  weight: "600",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jet-v",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-iserif-v",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const siteDescription =
  "Portfolio of Mohammed Maqsood Ahmed, Senior AI-Cloud Engineer. AI, LLMs, edge inference and cloud systems.";

// metadataBase lets OpenGraph/Twitter image paths resolve to absolute URLs.
// Override with NEXT_PUBLIC_SITE_URL for preview deploys.
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://maqsoodhuman.com"
  ),
  title: "Maqsood Ahmed, Senior AI-Cloud Engineer",
  description: siteDescription,
  keywords: [
    "Mohammed Maqsood Ahmed",
    "Maqsood Ahmed",
    "AI-Cloud Engineer",
    "Artificial Intelligence",
    "Large Language Models",
    "LLMs",
    "Edge Inference",
    "Cloud Systems",
    "Machine Learning",
    "MLOps",
  ],
  authors: [{ name: "Mohammed Maqsood Ahmed" }],
  creator: "Mohammed Maqsood Ahmed",
  openGraph: {
    type: "profile",
    title: "Maqsood Ahmed, Senior AI-Cloud Engineer",
    description: siteDescription,
    siteName: "Mohammed Maqsood Ahmed, Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/images/maqsood-detroit.png",
        alt: "Mohammed Maqsood Ahmed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maqsood Ahmed, Senior AI-Cloud Engineer",
    description: siteDescription,
    images: ["/images/maqsood-detroit.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%230d0f0c'/%3E%3Ctext x='32' y='42' font-family='Arial Black,sans-serif' font-weight='900' font-size='26' fill='%23c8f542' text-anchor='middle'%3EMA%3C/text%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0f0c",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammed Maqsood Ahmed",
  jobTitle: "Senior AI-Cloud Engineer",
  email: "mailto:maqsoodhuman@gmail.com",
  url: "https://maqsoodhuman.com",
  sameAs: [
    "https://linkedin.com/in/maqsoodhuman",
    "https://github.com/Maqsoodhuman",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "Edge Inference",
    "Cloud Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${barlow.variable} ${caveat.variable} ${jetbrains.variable} ${instrument.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
