import { motion } from "framer-motion";

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-navy py-28 md:py-36">
      <img
        src="/images/abstract-blue.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy" />
      <div className="relative mx-auto max-w-[1400px] px-5 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-[12px] font-semibold tracking-[0.28em] text-blue-3 uppercase"
        >
          Hayatınızdaki siteye sahip olun
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mx-auto max-w-4xl text-4xl leading-[0.95] font-semibold tracking-[-0.055em] md:text-7xl"
        >
          İhtiyacınız olan tüm özellikler,
          <span className="text-blue"> tek pakette.</span>
        </motion.h2>
      </div>
    </section>
  );
}
