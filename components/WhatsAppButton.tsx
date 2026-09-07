"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_CONFIG } from "@/config/company";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hallo FKD Fahrzeuge! Ich interessiere mich für Ihre Leistungen und möchte gerne eine unverbindliche Anfrage stellen."
  );
  const whatsappUrl = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Per WhatsApp kontaktieren"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba59] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <MessageCircle className="h-6 w-6 shrink-0 fill-white stroke-none group-hover:scale-110 transition-transform" />
      <span className="hidden sm:inline-block font-semibold text-sm drop-shadow-sm">
        WhatsApp Chat
      </span>
    </a>
  );
}
