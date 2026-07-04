import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative min-h-[560px] flex items-center overflow-hidden text-white">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.4 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Sunset"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ocean/85 via-ocean/60 to-ocean/85" />

      <div className="container-luxe relative py-24 text-center">
        <Reveal>
          <span className="inline-block glass-dark text-[0.65rem] tracking-[0.32em] uppercase px-4 py-2 rounded-sm text-gold">
            Designed &amp; Developed by Mavros Tech Private Limited
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-4xl md:text-6xl leading-tight max-w-4xl mx-auto">
            Looking for a Premium Resort Website <em className="italic text-gold">Like This?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
            This luxury resort website is a demonstration project designed and developed
            by Mavros Tech Private Limited to showcase premium hospitality website
            experiences.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-gold">Start Your Project</a>
            <a href="#gallery" className="btn-outline text-white">View More Demo Projects</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
