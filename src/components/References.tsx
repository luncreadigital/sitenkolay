import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Globe2, Layers3 } from "lucide-react";
import { references } from "../data";

const featured = [
  { domain: "scolakoc.com.tr", sector: "Eğitim", index: "01", tone: "from-blue to-[#063e98]" },
  { domain: "zirveofisveburomobilyalari.com.tr", sector: "Mobilya", index: "02", tone: "from-[#10284f] to-[#07162f]" },
  { domain: "antmenkozmetik.com.tr", sector: "Kozmetik", index: "03", tone: "from-[#287dff] to-[#0a1e3d]" },
];

function DomainPill({ domain }: { domain: string }) {
  const protocol = domain === "yasamasansor.com.tr" || domain === "fdnorm.com.tr" ? "http" : "https";
  return (
    <a href={`${protocol}://${domain}`} target="_blank" rel="noreferrer" className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-sm text-white/65 transition hover:-translate-y-1 hover:border-blue/50 hover:bg-blue/10 hover:text-white">
      <span className="flex min-w-0 items-center gap-3"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue" /><span className="break-all">{domain}</span></span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition group-hover:bg-blue group-hover:text-white"><ArrowUpRight className="h-4 w-4" /></span>
    </a>
  );
}

export function References() {
  return (
    <section id="referanslar" className="relative overflow-hidden bg-navy py-24 text-white md:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[140px]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-4 text-[12px] font-semibold tracking-[0.24em] text-blue-3 uppercase">Canlı referanslar</p>
            <h2 className="font-display max-w-3xl text-4xl leading-[0.98] font-semibold tracking-[-0.055em] md:text-7xl">Sadece tasarlamıyoruz.<span className="block text-blue">Yayına alıyoruz.</span></h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-white/55 lg:justify-self-end">Spordan kozmetiğe, mobilyadan ulaşıma farklı sektörlerde çalışan ve sonuç üreten dijital deneyimler.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {featured.map((item, i) => (
            <motion.a key={item.domain} href={`https://${item.domain}`} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`group relative min-h-64 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${item.tone} p-7 shadow-[0_24px_80px_rgba(0,0,0,0.18)]`}>
              <div className="absolute -right-10 -bottom-14 font-display text-[170px] font-semibold leading-none text-white/[0.055]">{item.index}</div>
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between"><span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] tracking-[0.16em] uppercase">{item.sector}</span><span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy transition group-hover:rotate-45"><ArrowUpRight className="h-5 w-5" /></span></div>
                <div><Globe2 className="mb-5 h-7 w-7 text-white/50" /><h3 className="max-w-[280px] break-words font-display text-2xl font-semibold leading-tight tracking-[-0.04em]">{item.domain}</h3><p className="mt-2 text-xs text-white/55">Canlı projeyi görüntüle</p></div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"><p className="font-display text-4xl font-semibold text-blue-3">{references.length}+</p><p className="mt-2 text-sm text-white/45">yayındaki proje</p></div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"><BadgeCheck className="mb-4 h-6 w-6 text-blue" /><p className="font-display text-xl font-semibold">Uçtan uca teslim</p><p className="mt-2 text-sm text-white/45">Tasarım, geliştirme ve yayın</p></div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"><Layers3 className="mb-4 h-6 w-6 text-blue" /><p className="font-display text-xl font-semibold">Çok sektörlü deneyim</p><p className="mt-2 text-sm text-white/45">Her markaya özgün yaklaşım</p></div>
        </div>
      </div>
      <div className="relative mx-auto mt-14 max-w-[1400px] px-5 md:px-8">
        <div className="mb-6 flex items-center justify-between"><p className="text-[12px] font-semibold tracking-[0.2em] text-white/45 uppercase">Tüm projeler</p><p className="text-xs text-white/35">Kartlara tıklayarak canlı siteyi açın</p></div>
        <div className="hide-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-5">{references.map((domain) => <div key={domain} className="w-[285px] shrink-0 snap-start md:w-[340px]"><DomainPill domain={domain} /></div>)}</div>
      </div>
    </section>
  );
}
