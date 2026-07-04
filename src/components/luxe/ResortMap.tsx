import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const pins = [
  { label: "Reception", x: 12, y: 55 },
  { label: "Villas", x: 32, y: 30 },
  { label: "Beach", x: 82, y: 72 },
  { label: "Spa", x: 55, y: 22 },
  { label: "Restaurants", x: 45, y: 60 },
  { label: "Pools", x: 62, y: 48 },
  { label: "Fitness", x: 25, y: 78 },
  { label: "Kids Area", x: 72, y: 30 },
  { label: "Event Lawn", x: 40, y: 82 },
];

export function ResortMap() {
  return (
    <section id="map" className="section-pad bg-background">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow">Resort Map</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-ocean max-w-2xl">
            A Private <em className="italic text-gold">Peninsula</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 relative aspect-[16/9] rounded-sm overflow-hidden border border-ocean/10">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
              alt="Aerial view"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ocean/40" />
            {pins.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, type: "spring" }}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
                  <div className="relative h-3 w-3 rounded-full bg-gold ring-2 ring-white" />
                </div>
                <div className="mt-2 glass px-3 py-1 text-[0.65rem] tracking-[0.2em] uppercase text-ocean rounded-sm whitespace-nowrap">
                  {p.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
