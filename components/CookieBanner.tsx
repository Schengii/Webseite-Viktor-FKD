"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, Check } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("fkd_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("fkd_cookie_consent", "all");
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("fkd_cookie_consent", "essential");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-6 left-6 right-6 z-50 mx-auto max-w-xl animate-in fade-in slide-in-from-bottom-5 duration-300 sm:left-8 sm:right-auto"
    >
      <div className="rounded-3xl border border-white/15 bg-anthracite-900/95 p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/20 text-accent-light">
            <Cookie className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              Privatsphäre & Cookies
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                <ShieldCheck className="h-3 w-3" /> DSGVO-konform
              </span>
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-white/70">
              Wir verwenden ausschließlich technisch notwendige Cookies sowie essenzielle
              Funktionen, um Ihnen den bestmöglichen Service bei der Fahrzeugsuche und
              Terminvereinbarung zu bieten. Sie können Ihre Auswahl jederzeit anpassen.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="btn-primary !py-2 !px-4 text-xs flex items-center gap-1.5"
              >
                <Check className="h-3.5 w-3.5" />
                Alle akzeptieren
              </button>
              <button
                type="button"
                onClick={handleAcceptEssential}
                className="btn-secondary !py-2 !px-4 text-xs"
              >
                Nur Notwendige
              </button>
              <Link
                href="/datenschutz"
                className="inline-flex items-center text-xs text-white/50 hover:text-white underline ml-auto py-2"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
