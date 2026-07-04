import {
  Waves, Sparkles, Flower2, Utensils, GlassWater, Dumbbell, Presentation,
  Heart, Baby, BookOpen, Briefcase, ConciergeBell, Plane, Sun,
} from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Sun, label: "Private Beach" },
  { icon: Waves, label: "Infinity Pool" },
  { icon: Sparkles, label: "Luxury Spa" },
  { icon: Flower2, label: "Yoga Pavilion" },
  { icon: Utensils, label: "Ocean Restaurant" },
  { icon: GlassWater, label: "Pool Bar" },
  { icon: Dumbbell, label: "Fitness Center" },
  { icon: Presentation, label: "Conference Hall" },
  { icon: Heart, label: "Wedding Venue" },
  { icon: Baby, label: "Kids Club" },
  { icon: BookOpen, label: "Library Lounge" },
  { icon: Briefcase, label: "Business Center" },
  { icon: ConciergeBell, label: "Concierge" },
  { icon: Plane, label: "Airport Transfer" },
];

export function Facilities() {
  return (
    <section
      id="facilities"
      className="section-pad relative bg-ocean text-white overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean/80 to-ocean/95" />

      <div className="container-luxe relative">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Resort Facilities</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Everything, <em className="italic text-gold">Effortlessly</em>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={(i % 4) * 0.08}>
              <div className="glass-dark p-6 rounded-sm h-full hover:bg-white/10 transition-colors group">
                <Icon size={28} className="text-gold group-hover:scale-110 transition-transform" />
                <p className="mt-4 font-display text-lg">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
