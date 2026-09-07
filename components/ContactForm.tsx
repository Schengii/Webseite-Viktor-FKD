"use client";

import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import {
  CheckCircle2,
  Handshake,
  Loader2,
  Search,
  Sparkles,
  Send,
  AlertCircle,
  Upload,
  X,
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

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [concern, setConcern] = useState<Concern>("suche");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArr = Array.from(e.target.files);
      // Dateinamen speichern
      const names = filesArr.slice(0, 3).map((f) => f.name);
      setSelectedFiles(names);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const data: Record<string, string> = {
      concern,
    };

    if (selectedFiles.length > 0) {
      data.anhänge = selectedFiles.join(", ");
    }

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        data[key] = value;
      }
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        setErrorMessage(result.error || "Etwas ist schiefgelaufen. Bitte rufen Sie uns direkt an.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Verbindungsfehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.");
      setStatus("error");
    }
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
                onClick={() => {
                  setStatus("idle");
                  setSelectedFiles([]);
                }}
                className="btn-secondary mt-4"
              >
                Weitere Anfrage stellen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {status === "error" && (
                <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

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
                    placeholder="Vor- und Nachname *"
                    className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                  />
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Telefonnummer *"
                    className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="E-Mail-Adresse *"
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
                      placeholder="Wunschmodell / Marke (z. B. VW Golf, BMW 3er)"
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
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        name="fahrzeugmodell"
                        placeholder="Fahrzeugmodell & Erstzulassung (z.B. Audi A4, 2019)"
                        className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                      />
                      <input
                        type="text"
                        name="baujahr"
                        placeholder="Kilometerstand & Preisvorstellung"
                        className="rounded-xl border border-white/10 bg-anthracite-900 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent"
                      />
                    </div>

                    {/* Foto-Upload Feld für Ankauf */}
                    <div className="rounded-xl border border-dashed border-white/15 bg-anthracite-900/50 p-4 text-center">
                      <input
                        type="file"
                        id="car-photos"
                        ref={fileInputRef}
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="car-photos"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <Upload className="h-6 w-6 text-accent-light" />
                        <span className="text-xs font-semibold text-white">
                          Fotos vom Fahrzeug / Fahrzeugschein anhängen (optional)
                        </span>
                        <span className="text-[11px] text-white/40">
                          Bis zu 3 Bilder für eine schnellere & präzisere Bewertung
                        </span>
                      </label>

                      {selectedFiles.length > 0 && (
                        <div className="mt-3 flex flex-wrap justify-center gap-2">
                          {selectedFiles.map((name, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-accent/20 px-2.5 py-1 text-xs text-accent-light"
                            >
                              {name}
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="hover:text-white"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {concern === "service" && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="serviceart"
                      placeholder="Art der Leistung (z.B. Innenreinigung, Politur, Bremsen)"
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
                  placeholder="Weitere Angaben zu Ihrem Anliegen oder Fahrzeug..."
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
                <a href="/datenschutz" className="underline hover:text-white/60">
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
