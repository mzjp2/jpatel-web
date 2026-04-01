import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/Providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Jeff Patel Optometrist | Mauritius",
    template: "%s | Jeff Patel Optometrist",
  },
  description:
    "Jeff Patel Optometrist — Mauritius's premier eyewear destination. Eye tests, designer frames, contact lenses across 5 convenient locations.",
  keywords: ["optometrist", "mauritius", "eyewear", "contact lenses", "eye test", "glasses", "frames"],
  openGraph: {
    title: "Jeff Patel Optometrist | Mauritius",
    description:
      "Mauritius's premier eyewear destination. Eye tests, designer frames, contact lenses across 5 convenient locations.",
    siteName: "Jeff Patel Optometrist",
    locale: "en_MU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-dark antialiased">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
