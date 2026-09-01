import { useState } from "react";
import { ArrowUpRight, Phone, Globe } from "lucide-react";
import { phones } from "../data";

export function Contact({
  preset,
  standalone = true,
}: {
  preset?: string | null;
  standalone?: boolean;
}) {
  const [sent, setSent] = useState(false);
  const Tag = standalone ? "section" : "div";

  return (
    <Tag id={standalone ? "iletisim" : undefined} className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue/20 blur-[120px]" />
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:px-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-4 text-[12px] font-semibold tracking-[0.24em] text-blue-3 uppercase">
            Hemen iletişime geçin
          </p>
          <h2 className="font-display text-4xl leading-[1.02] font-semibold tracking-[-0.05em] md:text-6xl">
            Sizin için en uygun çözümü sunalım.
          </h2>
          <p className="mt-6 max-w-md text-white/55">
            Formu doldurun veya doğrudan arayın. Aynı gün dönüş yapıyoruz.
          </p>

          <div className="mt-10 space-y-4">
            {phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="group flex items-center gap-4 text-white"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <Phone className="h-4 w-4 text-blue" />
                </span>
                <span className="font-display text-2xl font-medium tracking-[-0.03em] group-hover:text-blue">
                  {p.label}
                </span>
              </a>
            ))}
            <a href="https://sitenkolay.com.tr" className="group flex items-center gap-4 text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <Globe className="h-4 w-4 text-blue" />
              </span>
              <span className="font-display text-2xl font-medium tracking-[-0.03em] group-hover:text-blue">
                sitenkolay.com.tr
              </span>
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md md:p-9"
        >
          {sent ? (
            <div className="flex min-h-[360px] flex-col justify-center">
              <p className="font-display text-3xl font-semibold">Teşekkürler.</p>
              <p className="mt-3 text-white/60">Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.</p>
            </div>
          ) : (
            <>
              <label className="mb-4 block">
                <span className="mb-2 block text-xs tracking-[0.16em] text-white/45 uppercase">Ad Soyad</span>
                <input
                  required
                  name="name"
                  className="w-full rounded-2xl border border-white/10 bg-navy/40 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue"
                  placeholder="Adınız"
                />
              </label>
              <label className="mb-4 block">
                <span className="mb-2 block text-xs tracking-[0.16em] text-white/45 uppercase">Telefon</span>
                <input
                  required
                  name="phone"
                  className="w-full rounded-2xl border border-white/10 bg-navy/40 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue"
                  placeholder="05xx"
                />
              </label>
              <label className="mb-4 block">
                <span className="mb-2 block text-xs tracking-[0.16em] text-white/45 uppercase">Paket</span>
                <select
                  name="pack"
                  defaultValue={preset ?? "web"}
                  key={preset ?? "web"}
                  className="w-full rounded-2xl border border-white/10 bg-navy px-4 py-3.5 text-sm text-white outline-none focus:border-blue"
                >
                  <option value="web">Web Sitesi — 1000 TL</option>
                  <option value="ecom">E-Ticaret — 2500 TL</option>
                  <option value="other">Emin değilim, danışmak istiyorum</option>
                </select>
              </label>
              <label className="mb-6 block">
                <span className="mb-2 block text-xs tracking-[0.16em] text-white/45 uppercase">Mesaj</span>
                <textarea
                  name="msg"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-navy/40 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-blue"
                  placeholder="Kısaca ihtiyacınız..."
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue py-3.5 text-sm font-semibold"
              >
                Gönder
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </div>
    </Tag>
  );
}
