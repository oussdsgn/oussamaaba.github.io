import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { site } from "@/data/site";
import "./globals.css";

const font = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter-tight" });

export const metadata: Metadata = {
  title: { default: `${site.name} — portfolio ${site.year}`, template: `%s — ${site.name}` },
  description: `${site.name} — ${site.role} based in ${site.city}. Brand design, web design and graphic design.`,
  openGraph: { title: `${site.name} — ${site.role}`, type: "website" },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SmoothScroll />
        <Cursor />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
