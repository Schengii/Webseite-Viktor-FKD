import { ArrowRight, Car, ShieldCheck, Star, Wrench } from "lucide-react";

const STATS = [
  { icon: Car, value: "500+", label: "Vermittelte Fahrzeuge" },
  { icon: Star, value: "4.9/5", label: "Kundenbewertung" },
  { icon: Wrench, value: "100%", label: "Service aus einer Hand" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-anthracite-950 pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Hintergrund-Effekte */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-anthracite-950 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="section-label flex w-fit items-center gap-2 mx-auto">
            <ShieldCheck className="h-3.5 w-3.5" />
            Ihr Fahrzeugpartner in Bonn & Umgebung
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Das Rundum-Sorglos-Paket
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
              für Ihr Auto in Bonn
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 sm:text-xl">
            Ankauf, Verkauf, Aufbereitung, Finanzierung, individuelle Fahrzeugsuche
            und Service — alles aus einer Hand. Persönlich, transparent und fair.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#anfrage" className="btn-primary w-full sm:w-auto">
              Wunschfahrzeug anfragen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#anfrage" className="btn-secondary w-full sm:w-auto">
              Fahrzeug verkaufen / schätzen lassen
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-10 sm:gap-8">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="h-6 w-6 text-accent-light" />
                <span className="text-2xl font-bold text-white sm:text-3xl">
                  {value}
                </span>
                <span className="text-xs text-white/50 sm:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
