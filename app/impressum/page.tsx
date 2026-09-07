import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | FKD Fahrzeughandel & Autoservice Bonn",
  description: "Impressum und rechtliche Angaben gemäß § 5 DDG für FKD Fahrzeughandel & Autoservice Bonn.",
};

export default function ImpressumPage() {
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
            <Shield className="h-5 w-5" />
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Impressum</h1>
        </div>

        <div className="space-y-8 text-white/80 leading-relaxed rounded-2xl border border-white/10 bg-anthracite-900/60 p-6 sm:p-10">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">Angaben gemäß § 5 DDG</h2>
            <p className="font-semibold text-white">FKD Fahrzeughandel & Autoservice</p>
            <p>Inhaber: Viktor FKD</p>
            <p>Musterstraße 12</p>
            <p>53111 Bonn</p>
            <p>Deutschland</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Kontakt</h2>
            <p>Telefon: 0228 / 000 00 00</p>
            <p>E-Mail: info@fkd-fahrzeuge.de</p>
            <p>Webseite: www.fkd-fahrzeuge.de</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              <span className="text-white/50 text-sm">DE (wird bei Gewerbeanmeldung nachgetragen / USt-IdNr.)</span>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Haftung für Inhalte & Links</h2>
            <p className="text-sm text-white/60">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
              wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
