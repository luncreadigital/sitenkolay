import { motion } from "framer-motion";
import { ClipboardList, Share2, LayoutTemplate, Home } from "lucide-react";
import { steps } from "../data";

const icons = [ClipboardList, Share2, LayoutTemplate, Home];

export function Process() {
  return (
    <section id="surec" className="relative bg-white py-24 text-ink md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-[12px] font-semibold tracking-[0.24em] text-blue uppercase">Süreç</p>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] md:text-6xl">Süreç nasıl işler?</h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          <div className="absolute top-[42px] right-[12%] left-[12%] hidden h-px bg-line md:block" />
          {steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="mx-auto mb-6 flex h-[84px] w-[84px] items-center justify-center rounded-full border border-line bg-ice text-blue">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="mb-2 font-display text-sm font-semibold tracking-[0.2em] text-blue">{s.n}</p>
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/55">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-[28px] bg-navy p-8 text-white md:flex md:items-center md:justify-between md:p-10">
          <div className="grid flex-1 grid-cols-2 gap-8 md:max-w-xl">
            <div>
              <p className="text-xs tracking-[0.18em] text-white/45 uppercase">Web Sitesi</p>
              <p className="font-display mt-1 text-3xl font-semibold">
                1000 TL <span className="text-base font-medium text-white/45">+ KDV</span>
              </p>
            </div>
            <div className="border-l border-white/10 pl-8">
              <p className="text-xs tracking-[0.18em] text-white/45 uppercase">E-Ticaret Sitesi</p>
              <p className="font-display mt-1 text-3xl font-semibold">
                2500 TL <span className="text-base font-medium text-white/45">+ KDV</span>
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm text-white/55 md:mt-0">
            İhtiyacınızı belirleyin, bilgilerinizi paylaşın — gerisini sitenkolay halleder.
          </p>
        </div>
      </div>
    </section>
  );
}
