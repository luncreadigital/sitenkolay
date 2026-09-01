import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [leave, setLeave] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1350;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setLeave(true), 120);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!leave && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-navy"
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="absolute inset-0 grid-bg opacity-60" />
          <motion.div className="absolute h-[420px] w-[420px] rounded-full bg-blue/20 blur-[110px]" animate={{ scale: [0.8, 1.15, 0.9], opacity: [0.35, 0.8, 0.45] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative flex flex-col items-center"
          >
            <motion.div className="rounded-[22px] bg-white px-6 py-4 shadow-[0_20px_70px_rgba(0,102,255,0.22)]" animate={{ scale: [0.96, 1.02, 0.96] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <img src="/images/sitenkolay-logo-header.png" alt="sitenkolay" className="h-16 w-auto object-contain md:h-20" />
            </motion.div>
            <p className="mt-3 text-xs tracking-[0.28em] text-mist uppercase">
              Dijitalde fark yarat
            </p>
          </motion.div>
          <div className="absolute inset-x-6 bottom-8 md:inset-x-12 md:bottom-11">
            <div className="mb-4 h-px overflow-hidden bg-white/10"><motion.div className="h-full bg-blue" style={{ width: `${progress}%` }} /></div>
            <div className="flex items-end justify-between">
              <p className="text-[10px] tracking-[0.26em] text-white/40 uppercase">Deneyim hazırlanıyor</p>
              <div className="font-display text-5xl font-light tabular-nums text-white/80 md:text-7xl">
            {progress.toString().padStart(2, "0")}
            <span className="text-blue">%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
