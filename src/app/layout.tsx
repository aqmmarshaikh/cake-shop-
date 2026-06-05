import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldencakeshop.in"),
  title: {
    default: `${siteConfig.name} | Premium Custom Cakes in Patan, Gujarat`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "custom cake Patan",
    "wedding cake Patan Gujarat",
    "birthday cake Patan",
    "fondant cake Gujarat",
    "cake shop Patan",
    "anniversary cake Gujarat",
    "Golden Cake Shop",
    "best cake shop Patan",
    "custom cake Gujarat",
    "cake delivery Patan",
    "કસ્ટમ કેક પાટણ",
    "कस्टम केक पटान",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["hi_IN", "gu_IN"],
    url: "https://goldencakeshop.in",
    title: `${siteConfig.name} | Premium Custom Cakes in Patan, Gujarat`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-cake.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Cake Shop — Premium Custom Cakes in Patan, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Custom Cakes in Patan`,
    description: siteConfig.description,
    images: ["/images/hero-cake.jpg"],
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
  alternates: {
    languages: {
      "en-IN": "https://goldencakeshop.in?lang=en",
      "hi-IN": "https://goldencakeshop.in?lang=hi",
      "gu-IN": "https://goldencakeshop.in?lang=gu",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Gujarati:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: siteConfig.name,
              description: siteConfig.description,
              url: "https://goldencakeshop.in",
              telephone: siteConfig.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shree Dev Complex, Post Office Road",
                addressLocality: "Patan",
                addressRegion: "Gujarat",
                postalCode: "384265",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.85257,
                longitude: 72.13771,
              },
              openingHours: ["Mo-Sa 09:00-21:00", "Su 09:00-22:00"],
              image: "/images/hero-cake.jpg",
              priceRange: "₹₹",
              servesCuisine: "Bakery",
              sameAs: [siteConfig.instagram],
            }),
          }}
        />
      </head>
      <body className="gradient-bg">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
