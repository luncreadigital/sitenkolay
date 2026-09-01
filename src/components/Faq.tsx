import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../data";

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-ice py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-[12px] font-semibold tracking-[0.24em] text-blue uppercase">SSS</p>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Merak ettikleriniz.
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(active ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-semibold tracking-[-0.03em] md:text-xl">{f.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-blue transition ${active ? "rotate-45" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${active ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden text-sm leading-relaxed text-navy/60">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
