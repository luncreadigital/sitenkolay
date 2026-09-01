import { motion } from "framer-motion";

export function Intro() {
  return (
    <section id="hizmetler" className="relative overflow-hidden bg-ice py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-[12px] font-semibold tracking-[0.24em] text-blue uppercase">
            Markanızı dijitalde güçlendirin
          </p>
          <div className="font-display text-5xl leading-[0.92] font-semibold tracking-[-0.055em] md:text-7xl">
            {["Sade.", "Modern.", "Etkili."].map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`block ${i === 2 ? "text-blue" : ""}`}
              >
                {w}
              </motion.span>
            ))}
          </div>
          <div className="mt-6 h-[3px] w-24 bg-blue" />
          <p className="mt-8 max-w-md text-lg leading-relaxed text-navy-2/70">
            İhtiyacınız olan tüm özellikler, tek pakette. Hayatınızdaki siteye sahip olun — kurumsal duruş,
            e-ticaret gücü veya ikisi birden.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue/20 blur-3xl" />
          <img
            src="/images/intro-responsive-tr-v2.png"
            alt="Mobil uyumlu sitenkolay arayüzü"
            className="relative mx-auto max-h-[640px] w-full rounded-[36px] bg-white object-contain shadow-[0_40px_80px_rgba(6,20,40,0.28)]"
          />
          <div className="absolute bottom-8 left-4 rounded-2xl bg-white p-4 shadow-xl md:left-8">
            <p className="text-[11px] tracking-[0.16em] text-mist uppercase">Hizmetlerimiz</p>
            <p className="font-display text-lg font-semibold">Web + E-ticaret</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
