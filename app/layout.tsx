import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelforge.studio"),
  title: {
    default: "PixelForge | Web Design Studio in Accra",
    template: "%s | PixelForge",
  },
  description:
    "PixelForge is Efua Mensah’s web design studio in East Legon, Accra. Thoughtful websites for Ghanaian brands, from the first sketch to launch.",
  keywords: [
    "PixelForge",
    "web designer Accra",
    "freelance web developer Ghana",
    "Efua Mensah",
    "Next.js studio Accra",
  ],
  openGraph: {
    title: "PixelForge | Web Design Studio in Accra",
    description:
      "Efua Mensah designs and builds websites for brands in Accra. East Legon studio. Call 055 314 0985.",
    locale: "en_GH",
    type: "website",
    images: [{ url: "/images/efua-mensah.jpg", alt: "Efua Mensah at her desk in Accra" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[90] focus:rounded-full focus:bg-blue focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
