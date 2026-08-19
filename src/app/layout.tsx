import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";

const heading = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const description = `${site.name} — over 40 years of marine construction, dredging, and civil infrastructure expertise across Asia and Micronesia. ${site.trustLine}.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://brownstonedredging.com"),
  title: {
    default: `${site.name} | Marine Construction & Dredging`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "marine construction",
    "dredging",
    "breakwater construction",
    "port development",
    "wharf construction",
    "marine infrastructure",
    "land reclamation",
    "Philippines",
    "Asia",
    "Micronesia",
  ],
  openGraph: {
    title: `${site.name} | Marine Construction & Dredging`,
    description,
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Marine Construction & Dredging`,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description,
    foundingDate: String(site.founded),
    email: site.contact.email,
    telephone: site.contact.phone,
    areaServed: ["Asia", "Micronesia"],
    slogan: site.motto,
  };

  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
