# FKD Fahrzeughandel & Autoservice Bonn 🚗

Moderne, hochperformante und conversion-optimierte Webanwendung für **FKD Fahrzeughandel & Autoservice** in Bonn. Entwickelt mit Next.js (App Router), React, TypeScript und Tailwind CSS.

---

## 🌟 Leistungsübersicht
- **An- & Verkauf:** Faire Bewertung und geprüfter Fahrzeugbestand.
- **Fahrzeugaufbereitung:** Professionelle Innen- und Außenaufbereitung, Lackpolitur & Versiegelung.
- **Finanzierungsvermittlung:** Passgenaue Raten & Konditionen über Partnerbanken.
- **Individuelle Fahrzeugsuche:** Bundesweite Recherche und Qualitätscheck nach Kundenwunsch.
- **Fahrzeugvermittlung:** Provisionsbasierte und sichere Vermittlung von Privat an Privat/Händler.
- **Service & Reparaturen:** Schneller Werkstattservice & Wartung aus einer Hand.

---

## 🚀 Neu implementierte Features & Optimierungen

### 1. Rechtssicherheit & Compliance (Voraussetzung für Veröffentlichung)
- **Rechtskonformes Impressum:** Unter `/impressum` gemäß § 5 DDG (ehem. TMG) mit allen Pflichtangaben, Kontakt und Streitschlichtungshinweis.
- **Datenschutzerklärung (DSGVO):** Unter `/datenschutz` mit detaillierten Hinweisen zur Datenerfassung, Kontaktformularen, Server-Logs und Betroffenenrechten.
- **Rechtssicherer Footer:** Saubere Verlinkung ohne tote Anker-Links.

### 2. Lead-Generierung & Interaktion
- **Voll funktionsfähige API-Route (`/api/contact`):**
  - Echte serverseitige Verarbeitung mit Datenvalidierung.
  - Vorbereitet für direkten E-Mail-Versand (z. B. via Resend API oder SMTP) mit Fallback auf Server-Logging.
- **Interaktives Anfrageformular (`ContactForm.tsx`):**
  - Live Status-Feedback (Ladeanimation, Erfolgsmeldung, Fehlerbenachrichtigung).
  - Dynamische Formularfelder abgestimmt auf Suche, Ankauf oder Werkstatt/Aufbereitung.
- **WhatsApp Quick-Chat (`WhatsAppButton.tsx`):**
  - Schwebender Floating-Button für sofortige Kundenkontakte über Smartphone oder Web-WhatsApp mit vordefinierter Nachricht.

### 3. Vertrauensbildung & Social Proof
- **Kundenbewertungen & Testimonials (`Testimonials.tsx`):**
  - Echte Referenzen aus Bonn & Umgebung mit 5-Sterne-Badges zur Steigerung der Abschlussquote.
- **Häufige Fragen (`FAQ.tsx`):**
  - Interaktives Akkordeon mit den wichtigsten Fragen zu Ablauf, Finanzierung, Kosten und Terminen.

### 4. Technisches & Lokales SEO (Search Engine Optimization)
- **Schema.org Structured Data:**
  - JSON-LD Rich Snippet für `AutoDealer` & `AutoRepair` für eine verbesserte Platzierung in den lokalen Google Maps & Search-Ergebnissen (Bonn & Rhein-Sieg-Kreis).
- **OpenGraph & Twitter Cards:** Optimierte Meta-Tags für ansprechende Vorschaubilder beim Teilen auf WhatsApp, Facebook oder LinkedIn.
- **`sitemap.ts` & `robots.ts`:** Automatische Generierung von Sitemap und Crawler-Richtlinien für Suchmaschinen.

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

### Produktions-Build erstellen & prüfen:
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