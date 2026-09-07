import { Clock, Eye, ShieldCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: Clock,
    title: "Zeitersparnis",
    description:
      "Kein Springen zwischen Händlern, Werkstätten und Banken – wir koordinieren alles für Sie zentral.",
  },
  {
    icon: Zap,
    title: "Flexibilität",
    description:
      "Ob Ankauf, Aufbereitung oder Service – wir passen uns Ihrem Zeitplan und Ihren Wünschen an.",
  },
  {
    icon: Eye,
    title: "Transparente Abläufe",
    description:
      "Klare Kommunikation, faire Preise und nachvollziehbare Prozesse – ohne Kleingedrucktes.",
  },
  {
    icon: ShieldCheck,
    title: "Vertrauen & Sicherheit",
    description:
      "Geprüfte Fahrzeuge, seriöse Partner und persönliche Betreuung von Anfang bis Ende.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="vorteile"
      className="relative overflow-hidden bg-anthracite-900 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="section-label">Alles aus einer Hand</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Warum Kunden auf uns vertrauen
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Wir bündeln An- und Verkauf, Aufbereitung, Finanzierung, Suche,
              Vermittlung und Service in einem einzigen Ansprechpartner. Das
              spart Ihnen Zeit, Nerven und bares Geld.
            </p>
            <a href="#anfrage" className="btn-primary mt-8 w-fit">
              Jetzt unverbindlich anfragen
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-anthracite-800/50 p-6"
              >
                <Icon className="h-7 w-7 text-accent-light" />
                <h3 className="mt-4 font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
