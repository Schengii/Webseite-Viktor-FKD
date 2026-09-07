# FKD Fahrzeughandel & Autoservice Bonn 🚗

Moderne, hochperformante und conversion-optimierte Webanwendung für **FKD Fahrzeughandel & Autoservice** in Bonn. Entwickelt mit Next.js (App Router), React, TypeScript und Tailwind CSS.

---

## 🌟 Leistungsübersicht
- **An- & Verkauf:** Faire Bewertung, geprüfter Fahrzeugbestand und unkomplizierte Bar-/Überweisungsabwicklung.
- **Fahrzeugaufbereitung:** Professionelle Innen- und Außenaufbereitung, Lackpolitur & Keramikversiegelung.
- **Finanzierungsvermittlung & Rechner:** Passgenaue Raten & Konditionen über Partnerbanken mit individuellem Online-Rechner.
- **Individuelle Fahrzeugsuche:** Bundesweite Recherche und Qualitätscheck nach Kundenwunsch.
- **Fahrzeugvermittlung:** Provisionsbasierte und sichere Vermittlung von Privat an Privat/Händler.
- **Service & Reparaturen:** Schneller Werkstattservice & Wartung aus einer Hand.

---

## 🚀 Neu implementierte Features & Optimierungen

### 1. Interaktiver Finanzierungsrechner (`FinancingCalculator.tsx`)
- Dynamischer Rechner mit Live-Berechnung für Annuitätendarlehen.
- Schieberegler für **Fahrzeugpreis (5.000 € – 80.000 €)**, **Anzahlung** und Buttons für **Laufzeit (24 – 72 Monate)**.
- Sofortige Berechnung der monatlichen Wunschrate und Nettodarlehensbetrag mit Übergabe zur Kreditanfrage.

### 2. Standortkarte & Anfahrtsbeschreibung (`LocationMap.tsx`)
- DSGVO-konforme interaktive **OpenStreetMap-Karte** ohne Third-Party Tracking-Cookies.
- Direkter Routenplaner-Button für Google Maps sowie vollständige Auflistung aller Kontaktdaten & Öffnungszeiten.

### 3. Zentrale Stammdatenverwaltung (`config/company.ts`)
- Sämtliche Unternehmensdaten (Inhaber, Anschrift, Rufnummern, E-Mail, Öffnungszeiten, Steuer-ID) zentral gebündelt.
- Wird automatisch und konsistent in Header, Footer, Impressum, Datenschutz, Standortkarte, WhatsApp-Button und SEO-Tags verwendet.

### 4. Showroom & Fahrzeugbestand (`VehicleInventory.tsx`)
- Interaktiver Fahrzeugbestand mit Live-Filter (Top-Angebote, Diesel, Benzin).
- Detaillierte Fahrzeugkarten mit technischen Daten (Kilometerstand, Erstzulassung, Kraftstoff, Leistung, Preis).
- Schnellanfrage-CTA für jedes Fahrzeug sowie externe Verlinkung zu Mobile.de & AutoScout24.

### 5. Vorher-/Nachher-Vergleich (`BeforeAfterComparison.tsx`)
- Interaktiver Schieberegler (Slider) mit Touch- & Maussteuerung für Fahrzeugaufbereitung & Lackpolitur.
- Direkte visuelle Demonstration der Aufbereitungsqualität zur Steigerung von Werkstatt- und Pflegebuchungen.

### 6. Foto-Upload im Ankauf-Formular (`ContactForm.tsx`)
- Beim Auswählen von **"Verkauf / Vermittlung"** können Kunden nun bis zu 3 Fotos ihres Fahrzeugs oder des Fahrzeugscheins anhängen.
- Ermöglicht eine deutlich schnellere und präzisere Vorabbewertung für Viktor.

### 7. Rechtssicherheit & Compliance (Voraussetzung für DE-Veröffentlichung)
- **Rechtskonformes Impressum:** Unter `/impressum` gemäß § 5 DDG mit allen Pflichtangaben, Kontakt und Streitschlichtungshinweis.
- **Datenschutzerklärung (DSGVO):** Unter `/datenschutz` mit Hinweisen zur Datenerfassung, Kontaktformularen, Server-Logs und Betroffenenrechten.

### 8. Lead-Generierung & Sofortkontakt
- **Voll funktionsfähige API-Route (`/api/contact`):**
  - Echte serverseitige Verarbeitung mit Datenvalidierung und Resend / E-Mail-Vorbereitung.
- **WhatsApp Quick-Chat (`WhatsAppButton.tsx`):**
  - Schwebender Floating-Button für sofortige Kundenkontakte über Smartphone oder Web-WhatsApp mit vordefinierter Nachricht.

### 9. Vertrauensbildung & Social Proof
- **Kundenbewertungen & Testimonials (`Testimonials.tsx`):** Echte Referenzen aus Bonn & Umgebung mit 5-Sterne-Badges.
- **Häufige Fragen (`FAQ.tsx`):** Interaktives Akkordeon für schnelle Klärung offener Fragen (Ablauf, Termine, Kosten).

### 10. Technisches & Lokales SEO
- **Schema.org Structured Data (`layout.tsx`):** JSON-LD Rich Snippet für `AutoDealer` & `AutoRepair` (Bonn, Rhein-Sieg-Kreis).
- **OpenGraph & Twitter Cards:** Optimierte Meta-Tags für soziale Netzwerke und Messenger.
- **`sitemap.ts` & `robots.ts`:** Automatische Generierung von Sitemap und Crawler-Direktiven.

---

## 🛠️ Tech-Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Sprache:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 💻 Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Anwendung ist standardmäßig unter [http://localhost:3000](http://localhost:3000) erreichbar.

### Produktions-Build erstellen:
```bash
npm run build
npm run start
```

---

## ⚙️ Konfiguration & Umgebungsvariablen (`.env.local`)

Unternehmensdaten können einfach in `config/company.ts` gepflegt werden.
Für den produktiven E-Mail-Versand und Live-Domain können folgende Variablen in einer `.env.local`-Datei hinterlegt werden:

```env
# Optional für automatischen E-Mail-Versand via Resend
RESEND_API_KEY=dein_resend_api_key
CONTACT_RECEIVER_EMAIL=info@fkd-fahrzeuge.de

# Eigene Domain für sitemap.xml & Schema.org
NEXT_PUBLIC_SITE_URL=https://fkd-fahrzeuge.de
```