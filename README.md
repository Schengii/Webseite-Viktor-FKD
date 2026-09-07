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

### 1. Vertrauensversprechen (`QualityGuarantees.tsx`)
- 4-Punkte Vertrauenssiegel ohne unbelegte Zahlen/Titel: sorgfältige Prüfung, ehrliche Zustandsangaben, persönlicher Draht zum Inhaber, faire individuelle Konditionen.
- Bewusst ohne konkrete Garantiezeiträume, "Meister"-Bezeichnung oder erfundene Werkstattfotos – das holt der Betrieb erst nach, sobald diese Angaben belegbar sind (z. B. bei Vorliegen eines Meisterbriefs oder einer Garantieversicherung).

### 2. Deployment-Sicherheit & Vercel-Konfiguration (`vercel.json`)
- Vordefinierte Sicherheits-Header (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`) für optimalen Schutz vor Clickjacking und XSS.

### 3. DSGVO Cookie-Consent-Banner (`CookieBanner.tsx`)
- Dezentes, modernes Cookie-Banner mit Auswahlmöglichkeit („Alle akzeptieren“, „Nur Notwendige“) und direkter Datenschutzerklärung-Verlinkung.
- Status wird sicher im `localStorage` gespeichert.

### 4. Scroll-to-Top Navigation (`ScrollToTop.tsx`)
- Schwebender Button, der nach 400px Scrolltiefe sanft einblendet und Besuchern ein bequemes Zurückspringen an den Seitenanfang ermöglicht.

### 5. PWA Web App Manifest & SVG Favicon (`app/manifest.json`, `app/icon.svg`)
- Vollständige PWA-Konfiguration für Startbildschirm-Installation auf Smartphones (iOS / Android) sowie gebrandetes SVG Favicon.

### 6. Interaktiver Finanzierungsrechner (`FinancingCalculator.tsx`)
- Dynamischer Rechner mit Live-Berechnung für Annuitätendarlehen.
- Schieberegler für **Fahrzeugpreis (5.000 € – 80.000 €)**, **Anzahlung** und Buttons für **Laufzeit (24 – 72 Monate)**.
- Sofortige Berechnung der monatlichen Wunschrate und Nettodarlehensbetrag mit Übergabe zur Kreditanfrage.

### 7. Standortkarte & Anfahrtsbeschreibung (`LocationMap.tsx`)
- DSGVO-konforme interaktive **OpenStreetMap-Karte** ohne Third-Party Tracking-Cookies.
- Direkter Routenplaner-Button für Google Maps sowie vollständige Auflistung aller Kontaktdaten & Öffnungszeiten.

### 8. Zentrale Stammdatenverwaltung (`config/company.ts`)
- Sämtliche Unternehmensdaten (Inhaber, Anschrift, Rufnummern, E-Mail, Öffnungszeiten, Steuer-ID) zentral gebündelt.
- Wird automatisch und konsistent in Header, Footer, Impressum, Datenschutz, Standortkarte, WhatsApp-Button und SEO-Tags verwendet.

### 9. Fahrzeugbestand-Sektion (`VehicleInventory.tsx`)
- Ehrlicher Platzhalter statt erfundener Fahrzeugangebote: kommuniziert offen, dass der Bestand als neu gegründeter Betrieb noch aufgebaut wird.
- CTA zur individuellen Fahrzeugsuche sowie Verlinkung zu Mobile.de für die Übergangszeit.
- **Sobald reale Fahrzeuge im Bestand sind:** `Vehicle`-Typ und Karten-UI aus der Git-Historie (`git show edd9004:components/VehicleInventory.tsx`) können als Vorlage für echte Daten/Fotos wiederverwendet werden.

### 10. Vorher-/Nachher-Vergleich (`BeforeAfterComparison.tsx`)
- Interaktiver Schieberegler (Slider) mit Touch- & Maussteuerung für Fahrzeugaufbereitung & Lackpolitur.
- Direkte visuelle Demonstration der Aufbereitungsqualität zur Steigerung von Werkstatt- und Pflegebuchungen.

### 11. Foto-Upload im Ankauf-Formular (`ContactForm.tsx`)
- Beim Auswählen von **"Verkauf / Vermittlung"** können Kunden nun bis zu 3 Fotos ihres Fahrzeugs oder des Fahrzeugscheins anhängen.
- Ermöglicht eine deutlich schnellere und präzisere Vorabbewertung für Viktor.

### 12. Rechtssicherheit & Compliance
- **Rechtskonformes Impressum:** Unter `/impressum` gemäß § 5 DDG mit allen Pflichtangaben, Kontakt und Streitschlichtungshinweis.
- **Datenschutzerklärung (DSGVO):** Unter `/datenschutz` mit Hinweisen zur Datenerfassung, Kontaktformularen, Server-Logs und Betroffenenrechten.

### 13. Lead-Generierung & Sofortkontakt
- **Voll funktionsfähige API-Route (`/api/contact`):** Echte serverseitige Verarbeitung mit Datenvalidierung und Resend / E-Mail-Vorbereitung.
- **WhatsApp Quick-Chat (`WhatsAppButton.tsx`):** Schwebender Floating-Button für sofortige Kundenkontakte über Smartphone oder Web-WhatsApp mit vordefinierter Nachricht.

### 14. Technisches & Lokales SEO
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

> ⚠️ **Wichtig vor dem Livegang:** Ohne `RESEND_API_KEY` kann das Anfrageformular
> keine E-Mails verschicken. Besucher sehen dann bewusst eine Fehlermeldung
> ("Bitte kontaktieren Sie uns direkt telefonisch") statt einer falschen
> Erfolgsmeldung — es gehen also keine Anfragen unbemerkt verloren, aber das
> Formular ist ohne diesen Schlüssel faktisch nicht nutzbar. Vor dem Livegang
> unbedingt folgende Variablen in `.env.local` (lokal) bzw. in den
> Vercel-Projekteinstellungen (Produktion) hinterlegen:

```env
# Erforderlich, damit Formularanfragen tatsächlich als E-Mail ankommen.
# Kostenloser Account unter https://resend.com – anschließend die eigene
# Domain dort verifizieren (sonst kann nur an die eigene Account-E-Mail
# gesendet werden).
RESEND_API_KEY=dein_resend_api_key

# An welche Adresse neue Anfragen zugestellt werden
CONTACT_RECEIVER_EMAIL=info@fkd-fahrzeuge.de

# Absenderadresse – muss zu einer bei Resend verifizierten Domain gehören,
# sonst lehnt Resend den Versand ab (der Platzhalter onboarding@resend.dev
# funktioniert nur im Test-Modus an die eigene Account-E-Mail)
CONTACT_SENDER_EMAIL=anfrage@deine-domain.de

# Eigene Domain für sitemap.xml & Schema.org
NEXT_PUBLIC_SITE_URL=https://fkd-fahrzeuge.de
```