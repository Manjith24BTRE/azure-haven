import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const venues = [
  {
    name: "Ocean Grill",
    tag: "Seafood · Oceanfront",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Fine Dining Restaurant",
    tag: "European · Tasting menu",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sea Breeze Cafe",
    tag: "All day · Casual",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sunset Bar",
    tag: "Cocktails · Rooftop",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Private Beach Dining",
    tag: "By request",
    img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Chef's Table Experience",
    tag: "Immersive · 8 seats",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Wine Cellar",
    tag: "Curated pairings",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
  },
];

export function Dining() {
  return (
    <section id="dining" className="section-pad bg-background">
      <div className="container-luxe">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow">Dining Experience</p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl text-ocean">
                Culinary <em className="italic text-gold">Journeys</em>
              </h2>
            </div>
            <p className="max-w-md text-ink/70">
              Seven distinct venues, each with its own philosophy — from oceanfront
              seafood to intimate chef's tables and rare vintages.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {venues.map((v, i) => (
            <Reveal key={v.name} delay={(i % 3) * 0.08} className={i === 0 ? "lg:row-span-2 lg:h-[652px]" : ""}>
              <motion.div
                whileHover="hover"
                className="group relative h-full overflow-hidden rounded-sm cursor-pointer"
              >
                <motion.img
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ duration: 1.4 }}
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-ocean/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[0.65rem] tracking-[0.28em] uppercase text-gold">
                    {v.tag}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{v.name}</h3>
                  <motion.a
                    href="#contact"
                    variants={{ hover: { opacity: 1, y: 0 } }}
                    initial={{ opacity: 0, y: 10 }}
                    className="mt-3 inline-block text-xs tracking-[0.24em] uppercase border-b border-gold pb-0.5"
                  >
                    Reserve →
                  </motion.a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
