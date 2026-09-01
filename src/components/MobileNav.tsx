import { Home, Layers3, MessageCircle, WalletCards } from "lucide-react";

const items = [
  { href: "#top", label: "Ana Sayfa", icon: Home },
  { href: "#paketler", label: "Paketler", icon: WalletCards },
  { href: "#referanslar", label: "Projeler", icon: Layers3 },
  { href: "https://wa.me/905428100586?text=Merhaba%2C%20web%20sitesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.", label: "WhatsApp", icon: MessageCircle, external: true },
];

export function MobileNav() {
  return (
    <nav className="fixed right-3 bottom-3 left-3 z-[60] grid grid-cols-4 rounded-[22px] border border-white/10 bg-navy/90 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden">
      {items.map((item) => <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="flex min-w-0 flex-col items-center gap-1 rounded-2xl px-1 py-2 text-[9px] font-medium text-white/55 transition active:bg-white/10 active:text-white"><item.icon className={`h-4 w-4 ${item.external ? "text-[#25D366]" : "text-blue-3"}`} /><span className="truncate">{item.label}</span></a>)}
    </nav>
  );
}
