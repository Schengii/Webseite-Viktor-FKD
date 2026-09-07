import { MapPin, Navigation, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";

export default function LocationMap() {
  return (
    <section className="relative bg-anthracite-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Standort & Anfahrt</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Besuchen Sie uns in Bonn
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Zentral erreichbar im Herzen von Bonn – mit Parkmöglichkeiten direkt vor Ort.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Kontaktdetails & Wegbeschreibung */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-anthracite-900/70 p-8 shadow-card backdrop-blur lg:col-span-5">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{COMPANY_CONFIG.name}</h3>
                <p className="text-sm text-white/60">Ihr Ansprechpartner: {COMPANY_CONFIG.owner}</p>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent-light shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Adresse:</span>
                    <p>{COMPANY_CONFIG.street}</p>
                    <p>{COMPANY_CONFIG.zip} {COMPANY_CONFIG.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent-light shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Telefon:</span>
                    <p>
                      <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="hover:text-accent-light transition-colors">
                        {COMPANY_CONFIG.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent-light shrink-0" />
                  <div>
                    <span className="font-semibold text-white">E-Mail:</span>
                    <p>
                      <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-accent-light transition-colors">
                        {COMPANY_CONFIG.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent-light shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Öffnungszeiten:</span>
                    {COMPANY_CONFIG.openingHours.map((o) => (
                      <p key={o.day} className="text-xs text-white/60">
                        {o.day}: <span className="text-white/90">{o.hours}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <a
                href={COMPANY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2 !py-3 text-sm"
              >
                <Navigation className="h-4 w-4" />
                Route mit Google Maps planen
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Interaktive OSM Karte (DSGVO-konform ohne Tracking-Cookies) */}
          <div className="relative min-h-[400px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:col-span-7">
            <iframe
              title="Standort FKD Fahrzeuge Bonn auf OpenStreetMap"
              className="h-full w-full border-0 min-h-[400px]"
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.085%2C50.725%2C7.115%2C50.745&amp;layer=mapnik&amp;marker=50.735%2C7.100"
              loading="lazy"
            />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl border border-white/10 bg-anthracite-950/90 px-4 py-2 text-xs text-white backdrop-blur">
              📍 FKD Fahrzeuge – Bonn Zentrum & Umgebung
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
