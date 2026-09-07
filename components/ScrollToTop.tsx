"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      className="fixed bottom-6 right-24 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-anthracite-900/90 text-white shadow-xl backdrop-blur transition-all duration-300 hover:border-accent hover:bg-anthracite-800 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <ArrowUp className="h-5 w-5 text-accent-light" />
    </button>
  );
}
