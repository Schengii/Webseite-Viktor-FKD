import {
  ArrowLeftRight,
  Handshake,
  Search,
  Sparkles,
  Wallet,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: ArrowLeftRight,
    title: "An- & Verkauf",
    description:
      "Faire Preise beim Ankauf und ein sorgfältig aufbereitetes Fahrzeugangebot beim Verkauf – transparent und ohne versteckte Kosten.",
  },
  {
    icon: Sparkles,
    title: "Fahrzeugaufbereitung",
    description:
      "Professionelle Innen- und Außenaufbereitung – auch für Privatkunden, die ihr eigenes Fahrzeug aufwerten möchten.",
  },
  {
    icon: Wallet,
    title: "Finanzierungsvermittlung",
    description:
      "Passgenaue Finanzierungsmodelle über starke Partner – zu fairen Konditionen und mit transparenter Provision.",
  },
  {
    icon: Search,
    title: "Individuelle Fahrzeugsuche",
    description:
      "Sie nennen uns Wunschmodell, Budget und Anforderungen – wir finden das passende Fahrzeug für Sie.",
  },
  {
    icon: Handshake,
    title: "Fahrzeugvermittlung",
    description:
      "Provisionsbasierte Vermittlung zwischen Käufer und Verkäufer – sicher, unkompliziert und diskret.",
  },
  {
    icon: Wrench,
    title: "Service & Reparaturen",
    description:
      "Wartungsarbeiten und kleinere Reparaturen direkt aus einer Hand – schnell, zuverlässig und zum fairen Preis.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-anthracite-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Unsere Leistungen</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Sechs Leistungen. Ein Ansprechpartner.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Von der ersten Anfrage bis zur Übergabe der Schlüssel – wir begleiten
            Sie durch jeden Schritt rund um Ihr Fahrzeug.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="card group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
