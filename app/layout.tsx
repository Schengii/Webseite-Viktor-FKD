import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fkd-fahrzeuge.de";

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
    "Fahrzeugsuche Deutschland",
    "Autoservice Bonn",
    "Kfz Reparatur Bonn",
    "Autovermittlung",
  ],
  authors: [{ name: "FKD Fahrzeughandel & Autoservice" }],
  creator: "FKD Fahrzeuge",
  publisher: "FKD Fahrzeuge Bonn",
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
    siteName: "FKD Fahrzeuge",
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
    "name": "FKD Fahrzeughandel & Autoservice Bonn",
    "image": `${siteUrl}/og-image.jpg`,
    "description":
      "An- & Verkauf, Fahrzeugaufbereitung, Finanzierung, individuelle Fahrzeugsuche und Service in Bonn.",
    "telephone": "+492280000000",
    "email": "info@fkd-fahrzeuge.de",
    "url": siteUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 12",
      "addressLocality": "Bonn",
      "postalCode": "53111",
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
