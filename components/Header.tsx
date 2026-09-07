"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Car, Menu, X, Phone } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";

const NAV_LINKS = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#fahrzeuge", label: "Fahrzeuge" },
  { href: "/#finanzierung", label: "Finanzierung" },
  { href: "/#vorteile", label: "Vorteile" },
  { href: "/#anfrage", label: "Anfrage" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-anthracite-950/90 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
            <Car className="h-5 w-5 text-white" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            FKD <span className="text-accent-light">Fahrzeuge</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 text-accent-light" />
            {COMPANY_CONFIG.phone}
          </a>
          <Link href="/#anfrage" className="btn-primary !px-5 !py-2.5 text-sm">
            Anfrage starten
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menü öffnen"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-anthracite-950/95 px-4 pb-6 pt-4 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-white/80"
            >
              <Phone className="h-4 w-4 text-accent-light" />
              {COMPANY_CONFIG.phone}
            </a>
            <Link
              href="/#anfrage"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Anfrage starten
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
