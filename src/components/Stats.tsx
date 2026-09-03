import { motion } from "framer-motion";

const stats = [
  { k: "1499 TL", v: "Kurumsal web başlangıç fiyatı + KDV" },
  { k: "2499 TL", v: "E-ticaret başlangıç fiyatı + KDV" },
  { k: "7/24", v: "Kesintisiz destek hattı" },
  { k: "%100", v: "Müşteri memnuniyeti odaklı teslim" },
];

export function Stats() {
  return (
    <section className="border-b border-white/10 bg-navy">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border-white/10 px-6 py-10 md:border-r md:px-10 md:last:border-r-0 [&:nth-child(odd)]:border-r"
          >
            <p className="font-display text-3xl font-semibold tracking-[-0.04em] md:text-4xl">{s.k}</p>
            <p className="mt-2 text-sm text-white/45">{s.v}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
