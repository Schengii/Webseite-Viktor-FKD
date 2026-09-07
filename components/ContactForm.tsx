"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Handshake,
  Loader2,
  Search,
  Sparkles,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Concern = "suche" | "verkauf" | "service";

type ConcernOption = {
  id: Concern;
  icon: LucideIcon;
  title: string;
  description: string;
};

const CONCERNS: ConcernOption[] = [
  {
    id: "suche",
    icon: Search,
    title: "Fahrzeugsuche",
    description: "Ich suche ein bestimmtes Fahrzeug oder Modell.",
  },
  {
    id: "verkauf",
    icon: Handshake,
    title: "Verkauf / Vermittlung",
    description: "Ich möchte mein Fahrzeug verkaufen oder vermitteln lassen.",
  },
  {
    id: "service",
    icon: Sparkles,
    title: "Aufbereitung / Service",
    description: "Ich möchte mein Fahrzeug aufbereiten oder warten lassen.",
  },
];

type FormStatus = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [concern, setConcern] = useState<Concern>("suche");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    // TODO: An echten Endpunkt / CRM anbinden (z.B. API-Route, E-Mail-Service).
    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  return (
    <section id="anfrage" className="relative bg-anthracite-950 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Unverbindliche Anfrage</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Wie können wir Ihnen helfen?
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Wählen Sie Ihr Anliegen und teilen Sie uns die Details mit – wir
            melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-anthracite-800/40 p-6 shadow-card backdrop-blur sm:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-accent-light" />
              <h3 className="text-2xl font-bold text-white">
                Vielen Dank für Ihre Anfrage!
              </h3>
              <p className="max-w-md text-white/60">
                Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich
                bei Ihnen – in der Regel innerhalb eines Werktags.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="btn-secondary mt-4"
              >
                Weitere Anfrage stellen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Anliegen-Auswahl */}
              <div>
                <label className="mb-4 block text-sm font-semibold text-white">
                  1. Ihr Anliegen
                </label>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {CONCERNS.map(({ id, icon: Icon, title, description }) => {
                    const active = concern === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setConcern(id)}
                        className={`rounded-2xl border p-5 text-left transition-all duration-200 ${
                          active
                            ? "border-accent bg-accent/10 shadow-glow"
                            : "border-white/10 bg-anthracite-800/60 hover:border-white/25"
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            active ? "text-accent-light" : "text-white/50"
                          }`}
                        />
                        <p className="mt-3 font-semibold text-white">{title}</p>
                        <p className="mt-1 text-xs text-white/50">
                          {description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Kontaktdaten */}
              <div>
                <label className="mb-4 block text-sm font-semibold text-white">
                  2. Ihre Kontaktdaten
                </label>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Vor- und Nachname"
                    className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                  />
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Telefonnummer"
                    className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="E-Mail-Adresse"
                    className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent sm:col-span-2"
                  />
                </div>
              </div>

              {/* Dynamische Felder je nach Anliegen */}
              <div>
                <label className="mb-4 block text-sm font-semibold text-white">
                  3. Details zu Ihrem Anliegen
                </label>

                {concern === "suche" && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="wunschmodell"
                      placeholder="Wunschmodell / Marke"
                      className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                    />
                    <input
                      type="text"
                      name="budget"
                      placeholder="Budget (ca. in €)"
                      className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                    />
                  </div>
                )}

                {concern === "verkauf" && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="fahrzeugmodell"
                      placeholder="Fahrzeugmodell"
                      className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                    />
                    <input
                      type="text"
                      name="baujahr"
                      placeholder="Baujahr & Kilometerstand"
                      className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                    />
                  </div>
                )}

                {concern === "service" && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="serviceart"
                      placeholder="Art der Leistung (z.B. Innenreinigung)"
                      className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                    />
                    <input
                      type="text"
                      name="wunschtermin"
                      placeholder="Wunschtermin (optional)"
                      className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                    />
                  </div>
                )}

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Weitere Angaben zu Ihrem Anliegen..."
                  className="mt-4 w-full rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    Anfrage unverbindlich senden
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-white/40">
                Mit dem Absenden stimmen Sie unserer{" "}
                <a href="#" className="underline hover:text-white/60">
                  Datenschutzerklärung
                </a>{" "}
                zu.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
