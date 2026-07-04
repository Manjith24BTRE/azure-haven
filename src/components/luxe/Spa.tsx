import { Reveal } from "./Reveal";

const treatments = [
  "Hot Stone Massage",
  "Aromatherapy",
  "Steam Room",
  "Sauna",
  "Jacuzzi",
  "Meditation",
  "Yoga Retreats",
  "Couple Spa",
  "Relaxation Lounge",
];

export function Spa() {
  return (
    <section id="spa" className="section-pad bg-sand/60">
      <div className="container-luxe grid lg:grid-cols-5 gap-12 items-center">
        <Reveal className="lg:col-span-3">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
              alt="Spa"
              loading="lazy"
              className="w-full h-[360px] object-cover rounded-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
              alt="Massage"
              loading="lazy"
              className="w-full h-[360px] object-cover rounded-sm mt-12"
            />
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80"
              alt="Wellness"
              loading="lazy"
              className="w-full h-[280px] object-cover rounded-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80"
              alt="Yoga"
              loading="lazy"
              className="w-full h-[280px] object-cover rounded-sm mt-4"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-2">
          <Reveal>
            <p className="eyebrow">Wellness &amp; Spa</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-ocean leading-tight">
              A Ritual of <em className="italic text-gold">Stillness</em>
            </h2>
            <p className="mt-6 text-ink/70 text-lg">
              Our oceanfront wellness sanctuary blends ancient healing traditions with
              modern therapies — a place to slow down, breathe deeply, and reconnect.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
            {treatments.map((t, i) => (
              <Reveal key={t} delay={i * 0.04}>
                <div className="border-b border-ocean/10 py-2 text-sm text-ink/80 hover:text-gold transition-colors">
                  {t}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <a href="#contact" className="btn-primary mt-10">
              Book a Treatment
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
