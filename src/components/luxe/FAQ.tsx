import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "What time is check-in?", a: "Check-in is from 3:00 PM and check-out until 12:00 PM. Early arrivals are welcomed to our lounge with refreshments." },
  { q: "Do you provide airport pickup?", a: "Yes — complimentary luxury airport transfers are included with suite and villa bookings. Helicopter transfers can be arranged." },
  { q: "Is breakfast included?", a: "A full oceanfront breakfast is included in every stay, served at Sea Breeze Cafe or as in-villa dining." },
  { q: "Do you have family villas?", a: "Our Family Villa and Beachfront Residence are designed for larger parties, with dedicated kids' amenities and a private club." },
  { q: "Can I book spa treatments?", a: "Absolutely. Our concierge will curate a personal wellness itinerary prior to your arrival." },
  { q: "Are pets allowed?", a: "Small pets are welcome in select villas by prior arrangement. Please contact our concierge for details." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-pad bg-sand/60">
      <div className="container-luxe grid lg:grid-cols-2 gap-16">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-ocean">
            Before You <em className="italic text-gold">Arrive</em>
          </h2>
          <p className="mt-6 text-ink/70 max-w-md">
            Everything you may want to know before your stay — our concierge team is
            available around the clock for anything else.
          </p>
        </Reveal>

        <div className="divide-y divide-ocean/10">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left py-6 flex items-start justify-between gap-6"
              >
                <span className="font-display text-xl text-ocean">{f.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className="text-gold shrink-0 mt-1"
                >
                  <Plus size={20} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-10 text-ink/70 leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
