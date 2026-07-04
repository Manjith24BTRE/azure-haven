import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const experiences = [
  { name: "Sunrise Yoga", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80" },
  { name: "Private Beach Dinner", img: "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?auto=format&fit=crop&w=800&q=80" },
  { name: "Island Excursions", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
  { name: "Boat Tours", img: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=800&q=80" },
  { name: "Snorkeling", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" },
  { name: "Kayaking", img: "https://images.unsplash.com/photo-1526491109672-74740652b963?auto=format&fit=crop&w=800&q=80" },
  { name: "Cooking Classes", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" },
  { name: "Cocktail Workshops", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" },
  { name: "Photography Tours", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80" },
  { name: "Nature Walks", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" },
  { name: "Sunset Cruise", img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80" },
  { name: "Family Activities", img: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80" },
];

export function Experiences() {
  return (
    <section id="experiences" className="section-pad bg-background">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow">Experiences</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-ocean max-w-2xl">
            Moments <em className="italic text-gold">Curated</em> for You
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {experiences.map((e, i) => (
            <Reveal key={e.name} delay={(i % 4) * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm"
              >
                <motion.img
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 1.4 }}
                  src={e.img}
                  alt={e.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/95 via-ocean/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-lg leading-tight">{e.name}</h3>
                  <span className="mt-1 block text-[0.6rem] tracking-[0.28em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Discover →
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
