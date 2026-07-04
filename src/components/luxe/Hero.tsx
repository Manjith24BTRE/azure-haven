import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";

const stats = ["Private Beach", "Luxury Villas", "Spa & Wellness", "Infinity Pools"];

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[720px] w-full overflow-hidden text-white">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-tropical-beach-with-palm-trees-1583/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-ocean/40 via-ocean/30 to-ocean/70" />

      <div className="relative z-10 container-luxe h-full flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="eyebrow !text-gold"
        >
          Azure Haven Resort &amp; Spa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] font-medium max-w-4xl"
        >
          Escape Beyond <em className="italic text-gold">Luxury</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-8 max-w-2xl text-lg text-white/85 leading-relaxed"
        >
          Discover a private sanctuary where breathtaking ocean views, elegant villas,
          world-class dining, and unforgettable experiences come together for the
          perfect getaway.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#contact" className="btn-gold">
            Reserve Your Stay
          </a>
          <a href="#accommodation" className="btn-outline text-white">
            Explore Villas
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-20 left-6 right-6 lg:left-auto lg:right-6 lg:bottom-24 lg:max-w-md"
        >
          <div className="glass rounded-sm p-6">
            <div className="flex items-center gap-1 text-gold mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
              <span className="ml-2 text-xs tracking-[0.24em] uppercase text-ink/80">
                Guest Experience
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s} className="text-ink text-sm font-medium">
                  · {s}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/80 flex flex-col items-center gap-1"
      >
        <span className="text-[0.65rem] tracking-[0.32em] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
