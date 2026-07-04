import { Phone, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-background">
      <div className="container-luxe grid lg:grid-cols-2 gap-12">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-ocean">
            Begin Your <em className="italic text-gold">Journey</em>
          </h2>
          <p className="mt-6 text-ink/70 text-lg max-w-md">
            Our reservations team is ready to design your stay. Reach out for
            availability, private events, or bespoke experiences.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:6361492452" className="flex items-center gap-4 group">
              <span className="h-11 w-11 grid place-items-center border border-ocean/20 rounded-full group-hover:bg-ocean group-hover:text-white group-hover:border-ocean transition-colors">
                <Phone size={16} />
              </span>
              <div>
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-ink/50">Phone</p>
                <p className="font-display text-xl text-ocean">6361492452</p>
              </div>
            </a>
            <a href="mailto:official@mavrostech.in" className="flex items-center gap-4 group">
              <span className="h-11 w-11 grid place-items-center border border-ocean/20 rounded-full group-hover:bg-ocean group-hover:text-white group-hover:border-ocean transition-colors">
                <Mail size={16} />
              </span>
              <div>
                <p className="text-[0.65rem] tracking-[0.28em] uppercase text-ink/50">Email</p>
                <p className="font-display text-xl text-ocean">official@mavrostech.in</p>
              </div>
            </a>
          </div>

        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — our concierge will be in touch shortly.");
            }}
            className="glass p-8 md:p-10 rounded-sm space-y-5"
          >
            <p className="eyebrow">Inquiry</p>
            <h3 className="font-display text-3xl text-ocean">Plan Your Stay</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" />
              <Field label="Guests" name="guests" type="number" />
              <Field label="Travel Dates" name="dates" type="text" placeholder="Apr 12 – 18" className="sm:col-span-2" />
            </div>
            <div>
              <label className="block text-[0.65rem] tracking-[0.28em] uppercase text-ink/60 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border border-ocean/20 bg-white/60 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-ocean transition-colors"
                placeholder="Tell us about your ideal stay…"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Book Consultation
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, className = "",
}: { label: string; name: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-[0.65rem] tracking-[0.28em] uppercase text-ink/60 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border border-ocean/20 bg-white/60 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-ocean transition-colors"
      />
    </div>
  );
}
