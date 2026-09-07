"use client";

import { useState } from "react";
import Image from "next/image";
import { Filter, Fuel, Gauge, Calendar, Check, ExternalLink, ArrowRight } from "lucide-react";

export type Vehicle = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  mileage: number; // km
  firstRegistration: string;
  fuelType: "Benzin" | "Diesel" | "Hybrid" | "Elektro";
  transmission: "Automatik" | "Schaltgetriebe";
  power: string; // z.B. 150 PS
  category: "Gebrauchtwagen" | "Jahreswagen" | "Top-Angebot";
  featured?: boolean;
  imageUrl: string;
  highlightFeatures: string[];
};

export const SAMPLE_VEHICLES: Vehicle[] = [
  {
    id: "v1",
    title: "Volkswagen Golf 8 2.0 TDI Life",
    subtitle: "LED / Navi / Virtual Cockpit / PDC",
    price: 18990,
    mileage: 68500,
    firstRegistration: "05/2021",
    fuelType: "Diesel",
    transmission: "Automatik",
    power: "110 kW (150 PS)",
    category: "Top-Angebot",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
    highlightFeatures: ["Scheckheftgepflegt", "1. Hand", "Garantie inkl.", "TÜV neu"],
  },
  {
    id: "v2",
    title: "BMW 320d Touring M Sport",
    subtitle: "M Sportpaket / Panorama / Laserlicht / AHK",
    price: 27490,
    mileage: 84000,
    firstRegistration: "03/2020",
    fuelType: "Diesel",
    transmission: "Automatik",
    power: "140 kW (190 PS)",
    category: "Gebrauchtwagen",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    highlightFeatures: ["M Sport", "Head-Up Display", "Unfallfrei", "8-fach bereift"],
  },
  {
    id: "v3",
    title: "Audi A3 Sportback 35 TFSI S-line",
    subtitle: "S-Line / Matrix-LED / Bang & Olufsen",
    price: 23890,
    mileage: 49200,
    firstRegistration: "09/2021",
    fuelType: "Benzin",
    transmission: "Automatik",
    power: "110 kW (150 PS)",
    category: "Jahreswagen",
    featured: false,
    imageUrl: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
    highlightFeatures: ["S-Line Interior", "Apple CarPlay", "Virtual Cockpit"],
  },
  {
    id: "v4",
    title: "Mercedes-Benz CLA 200 Shooting Brake",
    subtitle: "AMG Line / Widescreen / Night-Paket",
    price: 29950,
    mileage: 52000,
    firstRegistration: "11/2020",
    fuelType: "Benzin",
    transmission: "Automatik",
    power: "120 kW (163 PS)",
    category: "Top-Angebot",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    highlightFeatures: ["AMG Line", "Rückfahrkamera", "Ambientebeleuchtung"],
  },
];

export default function VehicleInventory() {
  const [filterType, setFilterType] = useState<string>("Alle");

  const filteredVehicles =
    filterType === "Alle"
      ? SAMPLE_VEHICLES
      : SAMPLE_VEHICLES.filter((v) => v.category === filterType || v.fuelType === filterType);

  return (
    <section id="fahrzeuge" className="relative bg-anthracite-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="section-label">Aktueller Bestand</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ausgewählte Fahrzeuge im Angebot
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-2xl">
              Jedes Fahrzeug wird vor dem Verkauf einer umfassenden technischen Prüfung
              unterzogen und professionell aufbereitet.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-white/50 flex items-center gap-1.5 mr-2">
              <Filter className="h-3.5 w-3.5" /> Filter:
            </span>
            {["Alle", "Top-Angebot", "Diesel", "Benzin"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterType(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  filterType === cat
                    ? "bg-accent text-white shadow-glow"
                    : "border border-white/10 bg-anthracite-800/60 text-white/70 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-anthracite-800/40 shadow-card backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-anthracite-800/70"
            >
              <div>
                {/* Fahrzeugbild mit Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-anthracite-950">
                  <Image
                    src={vehicle.imageUrl}
                    alt={vehicle.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="rounded-md bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                      {vehicle.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 z-10 rounded-lg bg-anthracite-950/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                    {vehicle.power}
                  </div>
                </div>

                {/* Fahrzeugdetails */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-accent-light transition-colors">
                    {vehicle.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/50 line-clamp-1">{vehicle.subtitle}</p>

                  <div className="mt-4 grid grid-cols-3 gap-2 border-y border-white/10 py-3 text-center">
                    <div>
                      <Gauge className="mx-auto h-4 w-4 text-white/40" />
                      <span className="mt-1 block text-[11px] font-semibold text-white">
                        {vehicle.mileage.toLocaleString("de-DE")} km
                      </span>
                    </div>
                    <div>
                      <Calendar className="mx-auto h-4 w-4 text-white/40" />
                      <span className="mt-1 block text-[11px] font-semibold text-white">
                        {vehicle.firstRegistration}
                      </span>
                    </div>
                    <div>
                      <Fuel className="mx-auto h-4 w-4 text-white/40" />
                      <span className="mt-1 block text-[11px] font-semibold text-white">
                        {vehicle.fuelType}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-1.5 text-xs text-white/60">
                    {vehicle.highlightFeatures.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-accent-light shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Preis & CTA */}
              <div className="border-t border-white/10 bg-anthracite-900/60 p-5">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs text-white/50">Verkaufspreis</span>
                  <span className="text-xl font-extrabold text-white">
                    {vehicle.price.toLocaleString("de-DE")} €
                  </span>
                </div>
                <a
                  href={`#anfrage`}
                  className="btn-secondary w-full !py-2.5 text-xs !rounded-lg flex justify-center items-center gap-1.5 group-hover:border-accent group-hover:text-accent-light transition-all"
                >
                  Fahrzeug anfragen
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Hinweis für Mobile.de & Nicht fündig geworden */}
        <div className="mt-12 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white">Nicht das passende Auto dabei?</h4>
            <p className="mt-1 text-sm text-white/60">
              Nutzen Sie unseren kostenlosen Suchservice oder stöbern Sie in unserem Gesamtbestand auf Mobile.de / AutoScout24.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:mt-0">
            <a
              href="https://suchen.mobile.de"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-2.5 text-xs flex items-center justify-center gap-2"
            >
              Zu Mobile.de
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a href="#anfrage" className="btn-primary !py-2.5 text-xs flex items-center justify-center gap-2">
              Fahrzeugsuche beauftragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
