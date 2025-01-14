import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/shared/site-header";
import { AnimatedBackground } from "@/components/shared/animated-background";
import { FooterSection } from "@/components/shared/footer-section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jain Impex - Premium Metal Products",
  description: "Your trusted partner for high-quality metal products. Explore our range of copper, brass, bronze, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AnimatedBackground />
        <SiteHeader />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
