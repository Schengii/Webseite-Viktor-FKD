"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "Wie läuft der Fahrzeugankauf bei FKD ab?",
    answer:
      "Ganz unkompliziert: Sie senden uns die wichtigsten Daten Ihres Autos über unser Online-Formular oder per WhatsApp. Wir bewerten das Fahrzeug marktgerecht und transparent. Nach einer kurzen Prüfung vor Ort in Bonn erhalten Sie sofort Ihr Kaufangebot und bei Zusage den Betrag direkt auf Ihr Bankkonto oder bar.",
  },
  {
    question: "Was genau beinhaltet die individuelle Fahrzeugsuche?",
    answer:
      "Sie teilen uns Ihr Wunschmodell, Ausstattungsmerkmale, maximale Laufleistung und Ihr Budget mit. Wir durchsuchen unser Händlernetzwerk und Großhandelsauktionen, prüfen Historie und Zustand vorab auf Herz und Nieren und präsentieren Ihnen nur geprüfte Angebote ohne böse Überraschungen.",
  },
  {
    question: "Bieten Sie auch Finanzierungen für Gebrauchtwagen an?",
    answer:
      "Ja, wir kooperieren mit renommierten Partnerbanken. Dadurch können wir Ihnen flexible Finanzierungsangebote mit oder ohne Anzahlung und zu fairen Monatsraten vermitteln – abgestimmt auf Ihre persönliche Situation.",
  },
  {
    question: "Können auch Privatkunden eine Fahrzeugaufbereitung buchen?",
    answer:
      "Selbstverständlich! Wir bieten professionelle Innen- und Außenaufbereitung, Lackpolituren, Geruchsbeseitigung und Versiegelungen für jedermann an – egal ob Sie Ihr Auto für den Eigenbedarf auffrischen oder den Verkaufserlös maximieren möchten.",
  },
  {
    question: "Entstehen mir Kosten, wenn ich eine unverbindliche Anfrage stelle?",
    answer:
      "Nein, jede Erstberatung, Ersteinschätzung und Angebotsanfrage über unser Formular oder WhatsApp ist für Sie 100% kostenlos und absolut unverbindlich.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative bg-anthracite-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Häufige Fragen</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Wissenswertes vorab geklärt
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Haben Sie noch offene Fragen zu unseren Leistungen? Hier finden Sie schnelle Antworten.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/10 bg-anthracite-800/40 backdrop-blur transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left text-white hover:text-accent-light transition-colors"
                >
                  <span className="flex items-center gap-3 font-semibold text-base sm:text-lg">
                    <HelpCircle className="h-5 w-5 text-accent-light shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-white/50 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-white/70 text-sm leading-relaxed border-t border-white/5 mt-2">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
