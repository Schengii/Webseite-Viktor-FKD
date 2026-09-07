import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { COMPANY_CONFIG } from "@/config/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || COMPANY_CONFIG.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FKD Fahrzeughandel & Autoservice Bonn | An- & Verkauf, Aufbereitung, Service",
    template: "%s | FKD Fahrzeughandel Bonn",
  },
  description:
    "Ihr Rundum-Sorglos-Partner für Autos in Bonn: Fahrzeugankauf, Gebrauchtwagenverkauf, professionelle Aufbereitung, Finanzierungsvermittlung und Werkstattservice aus einer Hand.",
  keywords: [
    "Autohandel Bonn",
    "Auto verkaufen Bonn",
    "Gebrauchtwagen Ankauf Bonn",
    "Fahrzeugaufbereitung Bonn",
    "Autopflege Bonn",
    "Finanzierung Gebrauchtwagen Bonn",
    "Fahrzeugsuche Deutschland",
    "Autoservice Bonn",
    "Kfz Reparatur Bonn",
    "Autovermittlung",
  ],
  authors: [{ name: COMPANY_CONFIG.name }],
  creator: COMPANY_CONFIG.name,
  publisher: COMPANY_CONFIG.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "FKD Fahrzeughandel & Autoservice Bonn",
    description:
      "An- & Verkauf, Aufbereitung, Finanzierung, Fahrzeugsuche & Service – alles aus einer Hand in Bonn und dem Rhein-Sieg-Kreis.",
    url: siteUrl,
    siteName: COMPANY_CONFIG.name,
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FKD Fahrzeughandel & Autoservice Bonn",
    description:
      "Ihr Experte für An- & Verkauf, Fahrzeugaufbereitung und individuellen Autoservice in Bonn.",
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
  // Schema.org Structured Data für lokales Unternehmen (AutoDealer & AutoRepair)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["AutoDealer", "AutoRepair"],
    "name": COMPANY_CONFIG.legalName,
    "image": `${siteUrl}/og-image.jpg`,
    "description":
      "An- & Verkauf, Fahrzeugaufbereitung, Finanzierung, individuelle Fahrzeugsuche und Service in Bonn.",
    "telephone": COMPANY_CONFIG.phoneRaw,
    "email": COMPANY_CONFIG.email,
    "url": siteUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_CONFIG.street,
      "addressLocality": COMPANY_CONFIG.city,
      "postalCode": COMPANY_CONFIG.zip,
      "addressCountry": "DE",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.7374,
      "longitude": 7.0982,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00",
      },
    ],
    "priceRange": "€€",
  };

  return (
    <html lang="de" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-anthracite-950 font-sans antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
