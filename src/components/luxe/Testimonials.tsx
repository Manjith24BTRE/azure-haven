import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    quote:
      "An unforgettable escape with exceptional hospitality and breathtaking views. Every detail felt considered — from the private butler to the sunset dinner on the beach.",
    name: "Isabella & Marco",
    where: "Milan, Italy",
  },
  {
    quote:
      "The villas were stunning, the food incredible, and every detail felt thoughtfully designed. The spa alone is worth the journey.",
    name: "Priya Chandra",
    where: "Mumbai, India",
  },
  {
    quote:
      "Perfect destination for a relaxing luxury vacation. Ten days felt like a month of quiet reset — we're already planning to return.",
    name: "James Whitfield",
    where: "London, UK",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];

  return (
    <section id="testimonials" className="section-pad bg-ocean text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1920&q=60')",
        backgroundSize: "cover", backgroundPosition: "center",
      }} />
      <div className="container-luxe relative max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            Guest <em className="italic text-gold">Reflections</em>
          </h2>
        </Reveal>

        <div className="mt-14 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center gap-1 text-gold mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-display italic text-2xl md:text-3xl leading-relaxed">
                "{t.quote}"
              </p>
              <p className="mt-8 text-gold text-sm tracking-[0.28em] uppercase">
                {t.name}
              </p>
              <p className="mt-1 text-white/60 text-xs">{t.where}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            aria-label="Previous"
            onClick={() => setI((i - 1 + items.length) % items.length)}
            className="p-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {items.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "bg-gold w-8" : "bg-white/30 w-3"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={() => setI((i + 1) % items.length)}
            className="p-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
