import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FKD Fahrzeughandel & Autoservice Bonn | An- & Verkauf, Aufbereitung, Service",
  description:
    "Ihr Rundum-Sorglos-Paket für Autos in Bonn: An- & Verkauf, Fahrzeugaufbereitung, Finanzierungsvermittlung, individuelle Fahrzeugsuche, Fahrzeugvermittlung und Service & Reparaturen – alles aus einer Hand.",
  keywords: [
    "Autohandel Bonn",
    "Fahrzeugankauf Bonn",
    "Autoaufbereitung Bonn",
    "Fahrzeugsuche",
    "Autoservice Bonn",
    "Gebrauchtwagen Bonn",
  ],
  openGraph: {
    title: "FKD Fahrzeughandel & Autoservice Bonn",
    description:
      "An- & Verkauf, Aufbereitung, Finanzierung, Fahrzeugsuche & Service – alles aus einer Hand in Bonn.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen bg-anthracite-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
