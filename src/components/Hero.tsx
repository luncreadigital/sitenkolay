import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, MonitorSmartphone, Smartphone, Zap } from "lucide-react";
import { Magnetic } from "./Magnetic";

const pills = [
  { icon: MonitorSmartphone, label: "Modern Tasarım" },
  { icon: Smartphone, label: "Mobil Uyumlu" },
  { icon: Zap, label: "Hızlı Teslimat" },
];

export function Hero({ onContact: _onContact }: { onContact: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 grid-bg" />
      <div className="glow-orb absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-blue/25 blur-[120px]" />
      <div className="absolute right-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-[#123a86]/50 blur-[110px]" />

      <motion.div style={{ y, opacity }} className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] tracking-[0.22em] text-blue-3 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue" />
            Siteni kolayca kur
          </motion.p>

          <h1 className="font-display text-[12vw] leading-[0.86] font-semibold tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[86px]">
            {["Profesyonel", "Web Siteler", "Artık Çok", "Kolay."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 2 ? "text-blue" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.18 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-7 max-w-lg text-base leading-relaxed text-white/65 md:text-lg"
          >
            Sade. Modern. Etkili. İhtiyacınız olan tüm özellikler tek pakette. Kurumsal web{" "}
            <span className="text-white">1000 TL</span>, e-ticaret{" "}
            <span className="text-white">2500 TL</span> — ek ödeme yok.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="https://wa.me/905428100586?text=Merhaba%2C%20modern%20bir%20web%20sitesi%20i%C3%A7in%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(0,102,255,0.38)]"
              >
                Hemen İletişime Geç
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <a
              href="#paketler"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 hover:bg-white/5"
            >
              Paketleri İncele
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-3">
            {pills.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + i * 0.08 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-white/75"
              >
                <p.icon className="h-3.5 w-3.5 text-blue" />
                {p.label}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-blue/15 blur-3xl" />
          <div className="floaty relative">
            <img
              src="/images/pricing-turkish-web.png"
              alt="Türkçe modern kurumsal web sitesi önizlemesi"
              className="relative aspect-[3/2] w-full rounded-[28px] border border-white/10 bg-navy-2 object-contain shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
            />
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-navy-2/90 px-4 py-3 backdrop-blur-md sm:block">
              <p className="text-[10px] tracking-[0.2em] text-mist uppercase">Web paketi</p>
              <p className="font-display text-2xl font-semibold tracking-tight">
                1000 TL <span className="text-sm font-medium text-mist">+ KDV</span>
              </p>
            </div>
            <div className="absolute -top-5 -right-2 hidden rounded-2xl border border-blue/30 bg-blue px-4 py-2 text-xs font-semibold sm:block">
              Ek ödeme yok
            </div>
          </div>
        </motion.div>
      </motion.div>

      <a
        href="#hizmetler"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[11px] tracking-[0.24em] text-white/45 uppercase md:flex"
      >
        Kaydır
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </a>
    </section>
  );
}
