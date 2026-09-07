"use client";

import Image from "next/image";
import { Award, ShieldCheck, ThumbsUp, Wrench, Sparkles, HeartHandshake } from "lucide-react";

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: "Geprüfte Qualität",
    description: "Jedes Fahrzeug durchläuft vor der Übergabe einen gründlichen 100-Punkte-Check.",
  },
  {
    icon: Award,
    title: "12 Monate Garantie",
    description: "Umfassende Gebrauchtwagengarantie für maximale Sorgenfreiheit inklusive.",
  },
  {
    icon: Wrench,
    title: "Meister-Service",
    description: "Reparaturen und Wartungen nach Herstellervorgaben mit modernster Diagnosetechnik.",
  },
  {
    icon: Sparkles,
    title: "Detailing-Expertise",
    description: "High-End Aufbereitung und zertifizierte Lackversiegelungen für besten Werterhalt.",
  },
];

export default function QualityGuarantees() {
  return (
    <section className="relative overflow-hidden bg-anthracite-950 py-20 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Text & Badges */}
          <div className="lg:col-span-7">
            <span className="section-label">Unser Qualitätsversprechen</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Fahrzeugkauf und Werkstattservice ohne Kompromisse
            </h2>
            <p className="mt-4 text-base text-white/60 leading-relaxed">
              Beim Autokauf und der Fahrzeugpflege zählt Vertrauen. Deshalb setzen wir auf transparente
              Historien, lückenlose Prüfprotokolle und persönliche Beratung auf Augenhöhe.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {TRUST_BADGES.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-anthracite-900/60 p-5 backdrop-blur transition-colors hover:border-accent/40"
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

          {/* Bild & Auszeichnung */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
                alt="FKD Meister-Werkstatt und Fahrzeugkontrolle"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-anthracite-900/90 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Persönlicher Meister-Kontakt</span>
                    <span className="text-[11px] text-white/60">Direkte Absprachen ohne Callcenter-Warteschleifen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
