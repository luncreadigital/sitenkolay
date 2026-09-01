import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "../data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030c1a] pb-24 md:pb-0">
      <div className="absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-blue/15 blur-[150px]" />
      <div className="relative mx-auto max-w-[1400px] px-5 pt-20 pb-8 md:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-2xl bg-white px-4 py-2.5"><img src="/images/sitenkolay-logo-header.png" alt="sitenkolay" className="h-12 w-auto object-contain md:h-14" /></span>
            <h2 className="font-display mt-8 max-w-3xl text-4xl leading-[1] font-semibold tracking-[-0.055em] md:text-6xl">Markanız için güçlü bir dijital başlangıç.</h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-sm leading-relaxed text-white/50">Projenizi anlatın, ihtiyacınıza uygun çözümü birlikte netleştirelim. Aynı gün içinde dönüş yapıyoruz.</p>
            <a href="https://wa.me/905428100586?text=Merhaba%2C%20web%20sitesi%20i%C3%A7in%20teklif%20almak%20istiyorum." target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 rounded-full bg-blue px-6 py-3.5 text-sm font-semibold text-white">WhatsApp'tan teklif alın <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div><p className="mb-4 text-[11px] tracking-[0.2em] text-white/35 uppercase">İletişim</p><a href="tel:+905428100586" className="flex items-center gap-3 text-lg font-medium"><Phone className="h-4 w-4 text-blue" />0542 810 05 86</a><a href="mailto:info@sitenkolay.com.tr" className="mt-3 flex items-center gap-3 text-sm text-white/55"><Mail className="h-4 w-4 text-blue" />info@sitenkolay.com.tr</a></div>
          <div><p className="mb-4 text-[11px] tracking-[0.2em] text-white/35 uppercase">Menü</p><nav className="flex flex-wrap gap-x-5 gap-y-3">{navLinks.map((l) => <a key={l.href} href={l.href} className="text-sm text-white/55 transition hover:text-white">{l.label}</a>)}</nav></div>
          <div><p className="mb-4 text-[11px] tracking-[0.2em] text-white/35 uppercase">Bizi takip edin</p><div className="flex items-center gap-4"><a href="https://instagram.com/sitenkolay" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-blue hover:text-blue"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg></a><span className="flex items-center gap-2 text-sm text-white/45"><MapPin className="h-4 w-4 text-blue" />İstanbul, Türkiye</span></div></div>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-white/10 pt-7 text-xs text-white/30 sm:flex-row"><p>© {new Date().getFullYear()} sitenkolay. Tüm hakları saklıdır.</p><p>Sade · Modern · Etkili</p></div>
      </div>
    </footer>
  );
}
