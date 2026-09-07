import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import type { Metadata } from "next";

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
              FKD Fahrzeughandel & Autoservice<br />
              Viktor FKD<br />
              Musterstraße 12<br />
              53111 Bonn<br />
              Telefon: 0228 / 000 00 00<br />
              E-Mail: info@fkd-fahrzeuge.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">3. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Kontakt- und Anfrageformular</h3>
            <p className="text-sm text-white/70">
              Wenn Sie uns per Kontaktformular Anfragen (z.B. Fahrzeugsuche, Fahrzeugverkauf, Serviceauftrag) zukommen lassen,
              werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
              effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Server-Log-Dateien</h3>
            <p className="text-sm text-white/70">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die
              Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-sm text-white/60 mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">4. Ihre Rechte</h2>
            <p className="text-sm text-white/70">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
              verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
              Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">5. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="text-sm text-white/70">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel
              Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
              wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
