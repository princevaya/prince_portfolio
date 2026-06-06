"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1500);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#06070a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="text-xl font-semibold tracking-[0.4em] text-cyan-200">
              CLOUDCRAFT
            </div>
            <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <span className="text-xs uppercase tracking-[0.4em] text-white/60">
              Booting systems
            </span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
