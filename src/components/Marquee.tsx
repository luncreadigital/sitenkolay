import { marqueeItems } from "../data";

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <section className="relative border-y border-white/10 bg-navy-2 py-5">
      <div className="mask-fade-l overflow-hidden">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {row.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              <span className="font-display text-xl font-medium tracking-[-0.03em] text-white/80 md:text-2xl">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
