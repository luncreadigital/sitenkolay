import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, CreditCard, Truck, Smartphone } from "lucide-react";

const extras = [
  { icon: Boxes, label: "Ürün Yönetimi" },
  { icon: CreditCard, label: "Güvenli Ödeme" },
  { icon: Truck, label: "Kargo Entegrasyonu" },
  { icon: Smartphone, label: "Mobil Uyumlu" },
];

export function Ecommerce({ onContact }: { onContact: () => void }) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="absolute top-0 right-0 h-[480px] w-[480px] rounded-full bg-blue/20 blur-[140px]" />
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-[12px] font-semibold tracking-[0.24em] text-blue-3 uppercase">E-ticaret</p>
          <h2 className="font-display text-4xl leading-[1] font-semibold tracking-[-0.05em] md:text-6xl">
            Satışlarınızı
            <br />
            <span className="text-blue">dijitale taşıyın.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
            E-ticaret sitenizde sınırlarınızı kaldırın, daha fazla müşteriye ulaşın. Ürün yönetimi, güvenli ödeme
            ve kargo — hepsi tek pakette, 2499 TL + KDV.
          </p>
          <button
            onClick={onContact}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy"
          >
            E-ticaret paketi
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {extras.map((e) => (
              <div
                key={e.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center"
              >
                <e.icon className="mx-auto mb-2 h-5 w-5 text-blue" />
                <p className="text-[11px] tracking-wide text-white/70">{e.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/images/shopping-cart.jpg"
            alt="Dijital satış ve e-ticaret"
            className="aspect-[4/3] w-full rounded-[32px] border border-white/10 bg-navy-2 object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
