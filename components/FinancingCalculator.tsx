"use client";

import { useState } from "react";
import { Calculator, ArrowRight, CheckCircle, Percent, Euro, Calendar } from "lucide-react";

export default function FinancingCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState<number>(20000);
  const [downPayment, setDownPayment] = useState<number>(4000);
  const [termMonths, setTermMonths] = useState<number>(48);
  // Beispiel-Zinssatz für die Vorabschätzung. Kein beworbenes Angebot einer
  // konkreten Bank – der tatsächliche Zinssatz hängt von Bonität und
  // Finanzierungspartner ab und wird erst im persönlichen Angebot genannt.
  const exampleInterestRate = 5.9;

  // Berechnung der monatlichen Rate (Annuitätendarlehen)
  const netLoanAmount = Math.max(0, vehiclePrice - downPayment);
  const monthlyInterestRate = exampleInterestRate / 100 / 12;
  const monthlyRate =
    netLoanAmount > 0
      ? Math.round(
          (netLoanAmount *
            (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termMonths))) /
            (Math.pow(1 + monthlyInterestRate, termMonths) - 1)
        )
      : 0;

  const totalCost = monthlyRate * termMonths + downPayment;

  return (
    <section id="finanzierung" className="relative bg-anthracite-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Finanzierungsrechner</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Wunschfahrzeug flexibel finanzieren
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Verschaffen Sie sich unverbindlich einen ersten Überblick über eine mögliche Monatsrate.
            Der tatsächliche Zinssatz hängt von Ihrer Bonität und dem vermittelten Finanzierungspartner
            ab und wird Ihnen in einem persönlichen Angebot genannt.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-white/10 bg-anthracite-900/60 p-6 shadow-2xl backdrop-blur sm:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            {/* Eingabebereich mit Reglern */}
            <div className="space-y-8 lg:col-span-7">
              {/* Kaufpreis */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <Euro className="h-4 w-4 text-accent-light" />
                    Fahrzeugpreis
                  </label>
                  <span className="text-lg font-bold text-accent-light">
                    {vehiclePrice.toLocaleString("de-DE")} €
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={80000}
                  step={500}
                  value={vehiclePrice}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setVehiclePrice(val);
                    if (downPayment > val) setDownPayment(val);
                  }}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-anthracite-800 accent-accent"
                />
                <div className="flex justify-between text-[11px] text-white/40 mt-1">
                  <span>5.000 €</span>
                  <span>40.000 €</span>
                  <span>80.000 €</span>
                </div>
              </div>

              {/* Anzahlung */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <Euro className="h-4 w-4 text-accent-light" />
                    Anzahlung (optional)
                  </label>
                  <span className="text-lg font-bold text-white">
                    {downPayment.toLocaleString("de-DE")} €
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={vehiclePrice}
                  step={250}
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-anthracite-800 accent-accent"
                />
                <div className="flex justify-between text-[11px] text-white/40 mt-1">
                  <span>0 € (Ohne Anzahlung)</span>
                  <span>{vehiclePrice.toLocaleString("de-DE")} €</span>
                </div>
              </div>

              {/* Laufzeit */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent-light" />
                    Laufzeit
                  </label>
                  <span className="text-lg font-bold text-white">{termMonths} Monate</span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {[24, 36, 48, 60, 72].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTermMonths(m)}
                      className={`whitespace-nowrap rounded-xl py-2.5 text-xs font-semibold transition-all ${
                        termMonths === m
                          ? "bg-accent text-white shadow-glow"
                          : "border border-white/10 bg-anthracite-800 text-white/70 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {m} M.
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Ergebnis-Box */}
            <div className="flex flex-col justify-between rounded-2xl border border-accent/20 bg-gradient-to-br from-anthracite-800 to-anthracite-950 p-6 shadow-card lg:col-span-5">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    Beispielrechnung
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-bold text-accent-light">
                    <Percent className="h-3 w-3" /> Musterzins {exampleInterestRate}% eff. p.a.
                  </span>
                </div>

                <div className="mt-6 text-center">
                  <span className="text-4xl font-extrabold text-white sm:text-5xl">
                    {monthlyRate.toLocaleString("de-DE")} €
                  </span>
                  <span className="block text-xs text-white/50 mt-1">pro Monat (ca. Richtwert)</span>
                </div>

                <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs text-white/60">
                  <div className="flex justify-between">
                    <span>Nettodarlehen:</span>
                    <span className="font-semibold text-white">
                      {netLoanAmount.toLocaleString("de-DE")} €
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Laufzeit:</span>
                    <span className="font-semibold text-white">{termMonths} Monate</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gesamtbetrag (inkl. Zinsen):</span>
                    <span className="font-semibold text-white">
                      {totalCost.toLocaleString("de-DE")} €
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`#anfrage`}
                  className="btn-primary w-full flex items-center justify-center gap-2 !py-3 text-sm"
                >
                  Finanzierung anfragen
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-2 text-center text-[10px] text-white/40 leading-tight">
                  Repräsentatives Berechnungsbeispiel. Verbindliche Konditionen richten sich nach Bonität.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
