import { ArrowRight, Bell, ExternalLink, Search } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";

export default function VehicleInventory() {
  return (
    <section id="fahrzeuge" className="relative bg-anthracite-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Fahrzeugbestand</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Unser Bestand befindet sich im Aufbau
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Wir sind gerade erst gestartet und bauen unseren Fahrzeugbestand
            laufend auf. Sagen Sie uns, welches Auto Sie suchen – wir kümmern
            uns persönlich um die passende Auswahl für Sie.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Wunschfahrzeug angeben</h3>
                <p className="mt-1 text-sm text-white/60 leading-relaxed">
                  Modell, Budget und Ausstattung mitteilen – wir suchen gezielt
                  für Sie, statt Sie durch einen Bestand klicken zu lassen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                <Bell className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white">Auf dem Laufenden bleiben</h3>
                <p className="mt-1 text-sm text-white/60 leading-relaxed">
                  Sobald ein passendes Fahrzeug angekauft und aufbereitet ist,
                  melden wir uns direkt bei Ihnen.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:justify-center">
            <a href="#anfrage" className="btn-primary flex items-center justify-center gap-2">
              Fahrzeugsuche beauftragen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={COMPANY_CONFIG.mobileDeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Zwischenzeitlich auf Mobile.de stöbern
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
