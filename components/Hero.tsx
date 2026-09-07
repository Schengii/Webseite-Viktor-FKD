import { ArrowRight, HeartHandshake, MessageCircleHeart, ShieldCheck, Sparkles } from "lucide-react";

const PROMISES = [
  { icon: HeartHandshake, label: "Persönlich betreut vom Inhaber" },
  { icon: Sparkles, label: "Neu gegründet, volle Aufmerksamkeit für jeden Kunden" },
  { icon: MessageCircleHeart, label: "Transparente Preise, keine versteckten Kosten" },
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

          <div className="mt-16 grid grid-cols-1 gap-4 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-6">
            {PROMISES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-left sm:flex-col sm:text-center sm:gap-2 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
              >
                <Icon className="h-5 w-5 shrink-0 text-accent-light sm:h-6 sm:w-6" />
                <span className="text-sm text-white/70 sm:text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
