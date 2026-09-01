import { motion } from "framer-motion";
import { testimonials } from "../data";

export function Testimonials() {
  return (
    <section className="bg-white py-24 text-ink md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <p className="mb-3 text-[12px] font-semibold tracking-[0.24em] text-blue uppercase">Memnuniyet</p>
        <h2 className="font-display mb-12 max-w-2xl text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
          Markalar neden bizi seçiyor?
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-[28px] border border-line bg-ice p-7"
            >
              <p className="text-[15px] leading-relaxed text-navy/70">“{t.quote}”</p>
              <div className="mt-8 flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-display font-semibold">{t.name}</p>
                  <p className="text-xs text-navy/45">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
