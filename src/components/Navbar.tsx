"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sections } from "@/constants/sections";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

function NavLink({
  id,
  label,
  active,
}: {
  id: string;
  label: string;
  active: boolean;
}) {
  const ref = useMagnetic<HTMLAnchorElement>(14);

  return (
    <a
      ref={ref}
      href={`#${id}`}
      className={cn(
        "relative px-3 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white/70 transition-colors",
        active && "text-cyan-200"
      )}
      data-cursor="hover"
    >
      <span className="relative z-10">{label}</span>
      {active ? (
        <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      ) : null}
    </a>
  );
}

export function Navbar() {
  const activeId = useActiveSection(sections.map((item) => item.id));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 z-50 w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all",
            scrolled && "border-cyan-400/20 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          )}
        >
          <a
            href="#home"
            className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200 sm:text-sm sm:tracking-[0.35em]"
            data-cursor="hover"
          >
            Nova Cloud
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {sections.map((item) => (
              <NavLink
                key={item.id}
                id={item.id}
                label={item.label}
                active={activeId === item.id}
              />
            ))}
          </nav>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            data-cursor="hover"
          >
            <span className="text-lg">{open ? "-" : "+"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-4 flex w-[90%] max-w-sm flex-col gap-4 rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm uppercase tracking-[0.2em] text-white/70"
                onClick={() => setOpen(false)}
                data-cursor="hover"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
