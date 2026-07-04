import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gold origin-left z-[80]"
    />
  );
}

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20, pointerEvents: show ? "auto" : "none" }}
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
    >
      <a
        href="https://wa.me/916361492452"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="h-12 w-12 grid place-items-center bg-emerald-sea text-white rounded-full shadow-luxe hover:scale-110 transition-transform"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href="#contact"
        aria-label="Book Now"
        className="h-12 px-5 grid place-items-center bg-gold text-ocean rounded-full shadow-luxe hover:scale-105 transition-transform text-xs tracking-[0.22em] uppercase font-medium"
      >
        <span className="flex items-center gap-2">
          <Calendar size={14} /> Book
        </span>
      </a>
    </motion.div>
  );
}

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.7 }}
      style={{ pointerEvents: loading ? "auto" : "none" }}
      className="fixed inset-0 z-[100] bg-ocean flex items-center justify-center"
    >
      <div className="text-center">
        <p className="font-display text-4xl text-white">
          Azure<span className="text-gold"> Haven</span>
        </p>
        <div className="mt-6 h-[2px] w-40 mx-auto bg-white/20 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-full w-1/2 bg-gold"
          />
        </div>
      </div>
    </motion.div>
  );
}
