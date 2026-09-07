"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";

export default function BeforeAfterComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  // Pointer Events statt getrennter Maus-/Touch-Handler: funktioniert einheitlich
  // für Maus, Touch und Stift und verhindert per touch-none, dass ein Wischen
  // über den Slider versehentlich die Seite scrollt statt den Regler zu bewegen.
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <section className="relative bg-anthracite-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Glanz & Werterhalt</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Vorher & Nachher: Perfektion im Detail
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Beispielhafte Darstellung der Qualität, die Sie von unserer professionellen
            Lackaufbereitung, Innenraumkur und Versiegelung erwarten können.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative aspect-[16/9] w-full touch-none select-none overflow-hidden rounded-3xl border border-white/10 shadow-2xl cursor-ew-resize"
          >
            {/* Nachher-Bild (Rechts / Voller Hintergrund) */}
            <Image
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1600&q=80"
              alt="Fahrzeug nach der professionellen Aufbereitung"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              priority
            />
            <div className="absolute right-6 top-6 z-10 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur">
              NACHHER: Hochglanz-Finish
            </div>

            {/* Vorher-Bild (Links mit Clip-Path) */}
            <div
              className="absolute inset-0 overflow-hidden z-10"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative h-full"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1600&q=80"
                  alt="Fahrzeug vor der Aufbereitung mit matten Stellen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute left-6 top-6 rounded-full bg-anthracite-900/80 px-4 py-1.5 text-xs font-bold text-white/90 shadow-lg backdrop-blur border border-white/10">
                VORHER: Matt & beansprucht
              </div>
            </div>

            {/* Vertikaler Schieberegler */}
            <div
              className="absolute bottom-0 top-0 w-1 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)] z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-glow border-2 border-white">
                <MoveHorizontal className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-xs text-white/50 px-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-accent-light shrink-0" />
              Schieberegler nach links/rechts ziehen zum Vergleichen (Beispielbilder)
            </span>
            <a href="#anfrage" className="text-accent-light hover:underline">
              Aufbereitungstermin anfragen →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
