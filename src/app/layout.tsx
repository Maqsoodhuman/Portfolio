import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Maqsood Ahmed | Cloud Engineer & AI/ML Developer",
  description: "Portfolio of Mohammed Maqsood Ahmed - Senior Cloud Engineer specializing in AWS, DevOps, and Generative AI.",
};

import ParticleBackground from "@/components/ParticleBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ParticleBackground />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
