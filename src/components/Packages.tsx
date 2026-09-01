import { motion } from "framer-motion";
import { Check, ArrowUpRight, BadgeCheck, Sparkles } from "lucide-react";
import { packages } from "../data";

export function Packages({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <section id="paketler" className="relative bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[12px] font-semibold tracking-[0.24em] text-blue uppercase">Paketler</p>
            <h2 className="font-display max-w-xl text-4xl leading-[1] font-semibold tracking-[-0.05em] md:text-6xl">
              Şeffaf fiyat.
              <br />
              <span className="text-white/45">Sürpriz yok.</span>
            </h2>
          </div>
          <div className="max-w-md md:text-right">
            <p className="text-sm leading-relaxed text-white/55">İki net paket. İhtiyacınız olan her şey dahil; kapsam, teslimat ve fiyat en baştan belli.</p>
            <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-white/70"><BadgeCheck className="h-4 w-4 text-blue-3" /> Net kapsam</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-white/70"><Sparkles className="h-3.5 w-3.5 text-blue-3" /> Gizli maliyet yok</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {packages.map((p, i) => {
            const light = p.theme === "light";
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-[32px] border ${
                  light ? "border-blue/25 bg-blue text-white" : "border-blue/25 bg-navy-2 text-white"
                }`}
              >
                <div className={`relative h-56 overflow-hidden md:h-72 ${light ? "bg-blue" : "bg-[#071a36]"}`}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <div className={`absolute inset-0 ${light ? "bg-gradient-to-t from-white via-white/20 to-transparent" : "bg-gradient-to-t from-navy-2 via-navy-2/30 to-transparent"}`} />
                </div>
                <div className="relative p-7 md:p-10">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <p className={`text-[12px] font-semibold tracking-[0.2em] uppercase ${light ? "text-blue" : "text-blue-3"}`}>
                      {p.eyebrow}
                    </p>
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${light ? "bg-blue text-white" : "bg-white text-navy"}`}>
                      <Check className="h-3.5 w-3.5" />
                      {p.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-end gap-2">
                    <span className="font-display text-5xl font-semibold tracking-[-0.05em] md:text-6xl">
                      {p.price} TL
                    </span>
                    <span className={`mb-2 text-sm ${light ? "text-navy/45" : "text-white/50"}`}>+ KDV</span>
                  </div>
                  <p className={`mt-4 max-w-md text-sm leading-relaxed ${light ? "text-navy/65" : "text-white/65"}`}>
                    {p.desc}
                  </p>
                  <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue text-white">
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onSelect(p.id)}
                    className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                      light ? "bg-navy text-white hover:bg-blue" : "bg-blue text-white hover:bg-blue-2"
                    }`}
                  >
                    Bu paketi seç
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
