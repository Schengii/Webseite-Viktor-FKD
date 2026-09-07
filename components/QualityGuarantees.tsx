"use client";

import { Eye, HeartHandshake, MessagesSquare, ShieldCheck } from "lucide-react";

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: "Sorgfältige Prüfung",
    description: "Jedes Ankaufsfahrzeug wird vor der Weitergabe gründlich auf Zustand und Historie geprüft.",
  },
  {
    icon: Eye,
    title: "Ehrliche Zustandsbeschreibung",
    description: "Keine versteckten Mängel: Sie erfahren offen, in welchem Zustand sich ein Fahrzeug befindet.",
  },
  {
    icon: MessagesSquare,
    title: "Direkter Draht zum Inhaber",
    description: "Ihr Ansprechpartner bleibt persönlich für Sie erreichbar – ohne Callcenter-Warteschleifen.",
  },
  {
    icon: HeartHandshake,
    title: "Faire Konditionen",
    description: "Klare Absprachen zu Preis, Leistung und Garantieumfang – individuell und transparent verhandelt.",
  },
];

export default function QualityGuarantees() {
  return (
    <section className="relative overflow-hidden bg-anthracite-950 py-20 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Unser Versprechen</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Fahrzeugkauf und Werkstattservice ohne Kompromisse
          </h2>
          <p className="mt-4 text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
            Beim Autokauf und der Fahrzeugpflege zählt Vertrauen. Deshalb setzen wir auf transparente
            Historien, ehrliche Zustandsangaben und persönliche Beratung auf Augenhöhe – unabhängige
            Garantie- und Finanzierungskonditionen stimmen wir individuell mit Ihnen und unseren
            Partnern ab.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_BADGES.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-anthracite-900/60 p-6 backdrop-blur transition-colors hover:border-accent/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{badge.title}</h3>
                  <p className="mt-1 text-xs text-white/50 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
