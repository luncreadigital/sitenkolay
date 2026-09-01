import { motion } from "framer-motion";
import { BadgeCheck, Clock3, Palette, Wallet } from "lucide-react";
import { reasons } from "../data";

const icons = [Wallet, Palette, Clock3, BadgeCheck];

export function Why() {
  return (
    <section className="relative overflow-hidden bg-ice py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-[12px] font-semibold tracking-[0.24em] text-blue uppercase">Neden sitenkolay?</p>
          <h2 className="font-display text-4xl leading-[1] font-semibold tracking-[-0.05em] md:text-6xl">
            Dijitale geçmek
            <br />
            artık kolay.
          </h2>
          <p className="mt-6 max-w-md text-navy/60">
            Uygun fiyat, profesyonel tasarım, kesintisiz destek ve teslimde memnuniyet. Bu kadar.
          </p>
          <div className="mt-10 overflow-hidden rounded-[28px]">
            <img src="/images/workspace.jpg" alt="Tasarım ve geliştirme süreci" className="h-72 w-full object-cover" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`rounded-[28px] border border-line p-7 ${i === 0 ? "bg-navy text-white sm:col-span-2" : "bg-white"}`}
              >
                <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${i === 0 ? "bg-blue" : "bg-ice text-blue"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">{r.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "text-white/65" : "text-navy/55"}`}>{r.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
