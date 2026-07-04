import { motion } from "framer-motion";
import { Bed, Users, Maximize2 } from "lucide-react";
import { Reveal } from "./Reveal";

const rooms = [
  {
    name: "Ocean View Room",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    size: "58 sqm",
    guests: "2 Guests",
    price: 480,
    amenities: ["King bed", "Sea view balcony", "Rainfall shower"],
  },
  {
    name: "Luxury Suite",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    size: "92 sqm",
    guests: "2 Guests",
    price: 720,
    amenities: ["Lounge area", "Butler service", "Soaking tub"],
  },
  {
    name: "Private Pool Villa",
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80",
    size: "150 sqm",
    guests: "3 Guests",
    price: 1180,
    amenities: ["Infinity pool", "Sun deck", "Outdoor lounge"],
  },
  {
    name: "Garden Villa",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    size: "130 sqm",
    guests: "3 Guests",
    price: 890,
    amenities: ["Tropical garden", "Plunge pool", "Alfresco dining"],
  },
  {
    name: "Family Villa",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    size: "210 sqm",
    guests: "5 Guests",
    price: 1450,
    amenities: ["Two bedrooms", "Kids amenities", "Private terrace"],
  },
  {
    name: "Beachfront Residence",
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    size: "320 sqm",
    guests: "6 Guests",
    price: 2400,
    amenities: ["Direct beach access", "Private chef", "Cinema lounge"],
  },
];

export function Accommodation() {
  return (
    <section id="accommodation" className="section-pad bg-sand/60">
      <div className="container-luxe">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Accommodation</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-ocean">
              Signature <em className="italic text-gold">Villas</em> &amp; Suites
            </h2>
            <p className="mt-6 text-ink/70 text-lg">
              Each residence is a private world unto itself — designed with hand-crafted
              detail, ocean panoramas, and effortless indoor-outdoor living.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group bg-card rounded-sm overflow-hidden shadow-sm hover:shadow-luxe transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.2 }}
                  />
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-sm text-[0.65rem] tracking-[0.2em] uppercase text-ocean">
                    From ${r.price}/night
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-ocean">{r.name}</h3>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink/60">
                    <span className="flex items-center gap-1.5">
                      <Maximize2 size={12} /> {r.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={12} /> {r.guests}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bed size={12} /> King
                    </span>
                  </div>
                  <ul className="mt-5 space-y-1.5 text-sm text-ink/70">
                    {r.amenities.map((a) => (
                      <li key={a}>· {a}</li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-block text-xs tracking-[0.24em] uppercase text-ocean border-b border-gold pb-1 hover:text-gold transition-colors"
                  >
                    Book Now →
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
