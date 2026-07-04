import { Instagram, Facebook, Linkedin } from "lucide-react";

const links = [
  ["Accommodation", "#accommodation"],
  ["Dining", "#dining"],
  ["Experiences", "#experiences"],
  ["Spa", "#spa"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
] as const;

export function Footer() {
  return (
    <footer className="bg-ocean text-white/80">
      <div className="container-luxe py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-white">
            Azure<span className="text-gold"> Haven</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            A private oceanfront sanctuary of luxury villas, world-class dining and
            wellness — where every stay is thoughtfully composed.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-10 w-10 grid place-items-center border border-white/20 rounded-full hover:bg-gold hover:border-gold hover:text-ocean transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.32em] uppercase text-gold mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {links.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-gold transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.32em] uppercase text-gold mb-4">Newsletter</p>
          <p className="text-sm mb-4">Seasonal offers &amp; private invitations.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed."); }} className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-white/10 border border-white/20 px-3 py-2.5 text-sm focus:outline-none focus:border-gold rounded-sm"
            />
            <button className="ml-2 px-4 bg-gold text-ocean text-xs tracking-[0.2em] uppercase font-medium rounded-sm hover:bg-white transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Azure Haven Resort &amp; Spa. All rights reserved.</p>
          <p>
            Designed &amp; Developed by{" "}
            <span className="text-gold">Mavros Tech Private Limited</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
