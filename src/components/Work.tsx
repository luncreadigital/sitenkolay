import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { works } from "../data";

export function Work({ onContact: _onContact }: { onContact: () => void }) {
  return (
    <section id="isler" className="relative bg-ice py-24 text-ink md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[12px] font-semibold tracking-[0.24em] text-blue uppercase">Seçilmiş işler</p>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Dijitalde fark.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-navy/55">
            Her marka için sade, modern ve etkili bir vitrin. Sizin sıranız.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {works.map((w, i) => (
            <motion.a
              key={w.title}
              href={w.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative min-h-[340px] overflow-hidden rounded-[28px] text-left ${i % 3 === 0 ? "md:min-h-[480px]" : "md:min-h-[400px]"}`}
            >
              <img
                src={w.image}
                alt={w.title}
                className="absolute inset-0 h-full w-full bg-navy object-contain transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 text-white">
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-white/60 uppercase">
                    {w.cat} · {w.year}
                  </p>
                  <h3 className="font-display mt-1 text-3xl font-semibold tracking-[-0.04em]">{w.title}</h3>
                  <p className="mt-1 text-xs text-white/55">{w.domain}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy opacity-0 transition group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
