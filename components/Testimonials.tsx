import { Star, CheckCircle, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Michael S.",
    location: "Bonn-Beuel",
    rating: 5,
    text: "Habe meinen Audi A4 über FKD verkauft. Extrem faire Bewertung, transparente Abwicklung und das Geld war innerhalb von 2 Tagen auf dem Konto. Sehr professionell!",
    service: "Fahrzeugankauf",
  },
  {
    name: "Dennis K.",
    location: "Bonn-Bad Godesberg",
    rating: 5,
    text: "Die Fahrzeugaufbereitung vor dem Verkauf hat den Wert meines Wagens spürbar gesteigert. Innen wie außen sieht er aus wie frisch vom Band. Absolut empfehlenswert.",
    service: "Fahrzeugaufbereitung",
  },
  {
    name: "Sarah M.",
    location: "Sankt Augustin",
    rating: 5,
    text: "Viktor hat für mich genau den Golf 7 gefunden, den ich mir gewünscht habe – inklusive lückenlosem Scheckheft und passender Finanzierung. Man spart sich unzählige Besichtigungen.",
    service: "Fahrzeugsuche & Finanzierung",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-anthracite-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Erfahrungsberichte</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Was unsere Kunden sagen
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Zufriedene Kunden und langfristiges Vertrauen stehen bei uns an erster Stelle.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-anthracite-800/40 p-8 shadow-card backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-anthracite-800/70"
            >
              <div>
                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                <div className="flex gap-1 mb-4 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-white/50">{review.location}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-accent-light bg-accent/10 px-2.5 py-1 rounded-full">
                  <CheckCircle className="h-3 w-3" />
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
