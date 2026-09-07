# FKD Fahrzeughandel & Autoservice Bonn 🚗

Moderne, hochperformante und conversion-optimierte Webanwendung für **FKD Fahrzeughandel & Autoservice** in Bonn. Entwickelt mit Next.js (App Router), React, TypeScript und Tailwind CSS.

---

## 🌟 Leistungsübersicht
- **An- & Verkauf:** Faire Bewertung, geprüfter Fahrzeugbestand und unkomplizierte Bar-/Überweisungsabwicklung.
- **Fahrzeugaufbereitung:** Professionelle Innen- und Außenaufbereitung, Lackpolitur & Keramikversiegelung.
- **Finanzierungsvermittlung:** Passgenaue Raten & Konditionen über Partnerbanken.
- **Individuelle Fahrzeugsuche:** Bundesweite Recherche und Qualitätscheck nach Kundenwunsch.
- **Fahrzeugvermittlung:** Provisionsbasierte und sichere Vermittlung von Privat an Privat/Händler.
- **Service & Reparaturen:** Schneller Werkstattservice & Wartung aus einer Hand.

---

## 🚀 Neu implementierte Features & Optimierungen

### 1. Showroom & Fahrzeugbestand (`VehicleInventory.tsx`)
- Interaktiver Fahrzeugbestand mit Live-Filter (Top-Angebote, Diesel, Benzin).
- Detaillierte Fahrzeugkarten mit technischen Daten (Kilometerstand, Erstzulassung, Kraftstoff, Leistung, Preis).
- Schnellanfrage-CTA für jedes Fahrzeug sowie externe Verlinkung zu Mobile.de & AutoScout24.

### 2. Vorher-/Nachher-Vergleich (`BeforeAfterComparison.tsx`)
- Interaktiver Schieberegler (Slider) mit Touch- & Maussteuerung für Fahrzeugaufbereitung & Lackpolitur.
- Direkte visuelle Demonstration der Aufbereitungsqualität zur Steigerung von Werkstatt- und Pflegebuchungen.

### 3. Foto-Upload im Ankauf-Formular (`ContactForm.tsx`)
- Beim Auswählen von **"Verkauf / Vermittlung"** können Kunden nun bis zu 3 Fotos ihres Fahrzeugs oder des Fahrzeugscheins anhängen.
- Ermöglicht eine deutlich schnellere und präzisere Vorabbewertung für Viktor.

### 4. Rechtssicherheit & Compliance (Voraussetzung für DE-Veröffentlichung)
- **Rechtskonformes Impressum:** Unter `/impressum` gemäß § 5 DDG mit allen Pflichtangaben, Kontakt und Streitschlichtungshinweis.
- **Datenschutzerklärung (DSGVO):** Unter `/datenschutz` mit detaillierten Hinweisen zur Datenerfassung, Kontaktformularen, Server-Logs und Betroffenenrechten.
- **Rechtssicherer Footer:** Saubere Verlinkung ohne tote Anker-Links.

### 5. Lead-Generierung & Sofortkontakt
- **Voll funktionsfähige API-Route (`/api/contact`):**
  - Echte serverseitige Verarbeitung mit Datenvalidierung.
  - Vorbereitet für direkten E-Mail-Versand (z. B. via Resend API oder SMTP) mit Fallback auf Server-Logging.
- **WhatsApp Quick-Chat (`WhatsAppButton.tsx`):**
  - Schwebender Floating-Button für sofortige Kundenkontakte über Smartphone oder Web-WhatsApp mit vordefinierter Nachricht.

### 6. Vertrauensbildung & Social Proof
- **Kundenbewertungen & Testimonials (`Testimonials.tsx`):** Echte Referenzen aus Bonn & Umgebung mit 5-Sterne-Badges.
- **Häufige Fragen (`FAQ.tsx`):** Interaktives Akkordeon für schnelle Klärung offener Fragen (Ablauf, Termine, Kosten).

### 7. Technisches & Lokales SEO
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

## ⚙️ Umgebungsvariablen (`.env.local`)

Für den produktiven E-Mail-Versand können folgende Variablen in einer `.env.local`-Datei hinterlegt werden:

```env
# Optional für automatischen E-Mail-Versand via Resend
RESEND_API_KEY=dein_resend_api_key
CONTACT_RECEIVER_EMAIL=info@fkd-fahrzeuge.de

# Eigene Domain für sitemap.xml & Schema.org
NEXT_PUBLIC_SITE_URL=https://fkd-fahrzeuge.de
```