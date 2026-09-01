import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Contact } from "./Contact";

export function ContactModal({
  open,
  onClose,
  preset,
}: {
  open: boolean;
  onClose: () => void;
  preset: string | null;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] overflow-y-auto bg-navy/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="fixed top-5 right-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>
          <Contact preset={preset} standalone={false} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
