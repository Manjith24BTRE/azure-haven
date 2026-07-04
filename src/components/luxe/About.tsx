import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Luxury Suites", value: 150, suffix: "+" },
  { label: "Infinity Pools", value: 3, suffix: "" },
  { label: "Guest Services", value: 24, suffix: "/7" },
  { label: "Premium Experience", value: 5, suffix: "★" },
];

export function About() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
              alt="Villa"
              className="w-full h-[560px] object-cover rounded-sm"
              loading="lazy"
            />
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80"
              alt="Pool"
              className="hidden md:block absolute -bottom-10 -right-10 w-56 h-72 object-cover rounded-sm shadow-luxe"
              loading="lazy"
            />
            <div className="absolute -top-6 -left-6 glass px-6 py-4 rounded-sm">
              <p className="eyebrow">Est. 2024</p>
              <p className="font-display text-2xl text-ocean">A Coastal Legacy</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About the Resort</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-tight text-ocean">
              Experience <em className="italic text-gold">Timeless</em> Luxury
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-ink/70 text-lg leading-relaxed">
              Nestled beside crystal-clear waters and lush tropical gardens, Azure Haven
              Resort &amp; Spa offers an unforgettable escape with luxurious accommodations,
              exceptional hospitality, fine dining, wellness experiences, and breathtaking
              oceanfront views.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.08}>
                <div className="border-l-2 border-gold pl-5">
                  <p className="font-display text-5xl text-ocean">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs tracking-[0.24em] uppercase text-ink/60">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
