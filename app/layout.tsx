import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/shared/site-header";
import { FooterSection } from "@/components/shared/footer-section";
import { ThemeAnimation } from "@/components/ui/theme-animation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jain Impex - Industrial Metal Products Manufacturer",
  description: "Leading manufacturer of industrial metal products including copper round bars, aluminium sheets, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white`}>
        <ThemeAnimation />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
