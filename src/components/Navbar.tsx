import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { navLinks } from "../data";

export function Navbar({ onContact: _onContact }: { onContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-navy/75 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-8">
          <a href="#top" className="rounded-xl bg-white px-3 py-1.5 shadow-sm" aria-label="sitenkolay ana sayfa">
            <img src="/images/sitenkolay-logo-header.png" alt="sitenkolay" className="h-8 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium tracking-[0.14em] text-white/70 uppercase transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Magnetic>
              <a
                href="https://wa.me/905428100586?text=Merhaba%2C%20web%20sitesi%20i%C3%A7in%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-[13px] font-semibold tracking-wide text-white shadow-[0_8px_30px_rgba(0,102,255,0.35)] transition-transform lg:inline-flex"
              >
                Teklif Al
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Menü"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-navy lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="rounded-xl bg-white px-3 py-1.5"><img src="/images/sitenkolay-logo-header.png" alt="sitenkolay" className="h-8 w-auto" /></span>
              <button
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15"
                onClick={() => setOpen(false)}
                aria-label="Kapat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 pt-8">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i }}
                  className="font-display text-4xl font-semibold tracking-[-0.04em]"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/905428100586?text=Merhaba%2C%20web%20sitesi%20i%C3%A7in%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-8 rounded-full bg-blue px-6 py-4 text-left text-lg font-semibold"
              >
                Teklif Al
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
