import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import type { Metadata } from "next";
import { COMPANY_CONFIG } from "@/config/company";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | FKD Fahrzeughandel & Autoservice Bonn",
  description: "Datenschutzerklärung gemäß DSGVO für FKD Fahrzeughandel & Autoservice Bonn.",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-anthracite-950 py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-accent-light hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent-light">
            <Lock className="h-5 w-5" />
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Datenschutzerklärung</h1>
        </div>

        <div className="space-y-8 text-white/80 leading-relaxed rounded-2xl border border-white/10 bg-anthracite-900/60 p-6 sm:p-10">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Allgemeine Hinweise</h3>
            <p className="text-sm text-white/70">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
              wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
              aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">2. Verantwortliche Stelle</h2>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2 font-medium text-white">
              {COMPANY_CONFIG.legalName}<br />
              {COMPANY_CONFIG.street}<br />
              {COMPANY_CONFIG.zip} {COMPANY_CONFIG.city}<br />
              Telefon: {COMPANY_CONFIG.phone}<br />
              E-Mail: {COMPANY_CONFIG.email}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">3. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Kontakt- und Anfrageformular & Bild-Upload</h3>
            <p className="text-sm text-white/70">
              Wenn Sie uns per Kontaktformular Anfragen (z.B. Fahrzeugsuche, Fahrzeugverkauf, Serviceauftrag) zukommen lassen
              und ggf. Fahrzeugfotos oder Dokumente anhängen, werden Ihre Angaben aus dem Anfrageformular inklusive der von
              Ihnen dort angegebenen Kontaktdaten und Dateinamen zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
              Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Server-Log-Dateien</h3>
            <p className="text-sm text-white/70">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die
              Ihr Browser automatisch an uns übermittelt (Browsertyp, Version, Betriebssystem, Referrer URL, Zeitstempel, IP-Adresse).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">4. Ihre Rechte</h2>
            <p className="text-sm text-white/70">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
              verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
              Impressum angegebenen Adresse an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">5. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="text-sm text-white/70">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel
              Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
