const Instagram = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const Facebook = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Linkedin = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

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
            {[
              { Icon: Instagram, href: "https://www.instagram.com/mavros_ai?igsh=bm0wNmJ3MjJjbGEz&utm_source=qr", label: "Instagram" },
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/mavros-tech/", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
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
