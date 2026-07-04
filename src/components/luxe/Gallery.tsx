import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1520637836862-4d197d17c53a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
];

const heights = [
  "h-72", "h-96", "h-80", "h-64", "h-96", "h-72", "h-80", "h-96", "h-64", "h-80",
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="section-pad bg-sand/60">
      <div className="container-luxe">
        <Reveal>
          <div className="flex justify-between items-end flex-wrap gap-4">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="mt-4 font-display text-5xl md:text-6xl text-ocean">
                A Visual <em className="italic text-gold">Retreat</em>
              </h2>
            </div>
            <p className="text-ink/60 text-sm max-w-sm">
              Beach · Pool · Rooms · Dining · Spa · Nature · Drone views · Night
            </p>
          </div>
        </Reveal>

        <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {images.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid block">
              <motion.button
                onClick={() => setOpen(src)}
                whileHover={{ scale: 1.02 }}
                className="w-full overflow-hidden rounded-sm block cursor-zoom-in group"
              >
                <motion.img
                  src={src}
                  alt=""
                  loading="lazy"
                  className={`w-full ${heights[i]} object-cover group-hover:scale-110 transition-transform duration-[1.4s]`}
                />
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[70] bg-ocean/95 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 text-white p-2"
            >
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={open}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm shadow-luxe"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
