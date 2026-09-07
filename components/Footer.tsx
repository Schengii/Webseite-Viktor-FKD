import Link from "next/link";
import { Car, Clock, Facebook, Instagram, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";

const SERVICE_LINKS = [
  { name: "An- & Verkauf", href: "#leistungen" },
  { name: "Fahrzeugbestand", href: "#fahrzeuge" },
  { name: "Fahrzeugaufbereitung", href: "#leistungen" },
  { name: "Finanzierungsrechner", href: "#finanzierung" },
  { name: "Individuelle Fahrzeugsuche", href: "#leistungen" },
  { name: "Service & Reparaturen", href: "#leistungen" },
];

export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-white/10 bg-anthracite-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marke */}
          <div>
            <a href="#top" className="flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <Car className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                FKD <span className="text-accent-light">Fahrzeuge</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Ihr zuverlässiger Partner für An- & Verkauf, Aufbereitung,
              Finanzierung, Fahrzeugsuche und Service in Bonn und Umgebung.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-accent hover:text-accent-light"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-accent hover:text-accent-light"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation & Service
            </h3>
            <ul className="mt-4 space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm text-white/50 transition-colors hover:text-accent-light"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt & Standort
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                <span>
                  {COMPANY_CONFIG.street}<br />
                  {COMPANY_CONFIG.zip} {COMPANY_CONFIG.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent-light" />
                <a href={`tel:${COMPANY_CONFIG.phoneRaw}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent-light" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={COMPANY_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-accent-light hover:underline"
                >
                  Anfahrt auf Google Maps
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Öffnungszeiten
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              {COMPANY_CONFIG.openingHours.map(({ day, hours }) => (
                <li key={day} className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0 text-accent-light" />
                    {day}
                  </span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY_CONFIG.name} Bonn. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white/80 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white/80 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
