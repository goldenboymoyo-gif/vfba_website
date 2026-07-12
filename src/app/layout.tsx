import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/GrainOverlay";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Victoria Falls Boxing Academy | Building Champions Inside & Outside The Ring",
    template: "%s | Victoria Falls Boxing Academy",
  },
  description:
    "Victoria Falls Boxing Academy — a professional boxing academy and children's home in Zimbabwe. Developing fighters, building discipline, and changing lives through boxing. Founded by Tobias Mupfuti.",
  keywords: [
    "Victoria Falls Boxing Academy",
    "VFBA",
    "Tobias Mupfuti",
    "boxing academy Zimbabwe",
    "boxing Victoria Falls",
    "youth boxing Zimbabwe",
    "community sport Victoria Falls",
    "Rise film",
    "boxing training Africa",
  ],
  authors: [{ name: "Victoria Falls Boxing Academy" }],
  creator: "Victoria Falls Boxing Academy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://victoriafallsboxingacademy.org",
    siteName: "Victoria Falls Boxing Academy",
    title: "Victoria Falls Boxing Academy | Building Champions Inside & Outside The Ring",
    description:
      "A professional boxing academy in Victoria Falls, Zimbabwe — developing fighters, building discipline, and changing lives through boxing.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Victoria Falls Boxing Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victoria Falls Boxing Academy | Building Champions Inside & Outside The Ring",
    description:
      "A professional boxing academy in Victoria Falls, Zimbabwe — developing fighters, building discipline, and changing lives through boxing.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsAcademy",
              name: "Victoria Falls Boxing Academy",
              alternateName: "VFBA",
              url: "https://victoriafallsboxingacademy.org",
              description:
                "A professional boxing academy and children's home in Victoria Falls, Zimbabwe, developing fighters and transforming lives through boxing.",
              founder: {
                "@type": "Person",
                name: "Tobias Mupfuti",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Victoria Falls",
                addressRegion: "Matabeleland North",
                addressCountry: "ZW",
              },
              sameAs: [
                "https://www.facebook.com/victoriafallsboxingacademy",
                "https://www.instagram.com/victoriafallsboxingacademy",
                "https://www.tiktok.com/@victoriafallsboxingacademy",
                "https://www.youtube.com/@victoriafallsboxingacademy",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-charcoal text-cream">
        <SmoothScroll />
        <GrainOverlay />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
