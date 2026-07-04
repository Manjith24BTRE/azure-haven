import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["Accommodation", "#accommodation"],
  ["Experiences", "#experiences"],
  ["Dining", "#dining"],
  ["Spa", "#spa"],
  ["Gallery", "#gallery"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span
            className={`text-2xl font-display tracking-tight transition-colors ${
              scrolled ? "text-ocean" : "text-white"
            }`}
          >
            Azure<span className="text-gold"> Haven</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`text-[0.72rem] tracking-[0.24em] uppercase font-medium transition-colors ${
                scrolled ? "text-ink hover:text-ocean" : "text-white/90 hover:text-gold"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex btn-gold !py-3 !px-5">
            Book Now
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 ${scrolled ? "text-ocean" : "text-white"}`}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ocean text-white"
          >
            <div className="container-luxe pt-6 flex items-center justify-between">
              <span className="text-2xl font-display">
                Azure<span className="text-gold"> Haven</span>
              </span>
              <button aria-label="Close" onClick={() => setOpen(false)} className="p-2">
                <X />
              </button>
            </div>
            <nav className="mt-16 flex flex-col items-center gap-6">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-display hover:text-gold"
                >
                  {label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-6">
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
