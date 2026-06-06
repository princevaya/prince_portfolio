"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { stagger, fadeUp } from "@/animations/motion";

const STATS = [
  { label: "Projects Built", value: "12+", href: "/projects" },
  { label: "Certifications", value: "6", href: "/certifications" },
  { label: "Technologies Learned", value: "24+", href: "/skills" },
  { label: "Hands-on Labs", value: "40+", href: "/labs" },
];

const statCardVariants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.02 },
};

const statNumberVariants = {
  rest: { y: 0, opacity: 1 },
  hover: { y: -2, opacity: 1 },
};

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-6 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="flex flex-col gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading title="About" eyebrow="Identity" />
          <motion.div variants={fadeUp}>
            <Link
              href="/about"
              className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label="Explore my journey"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <GlassCard className="flex flex-col gap-6 border-cyan-400/20 bg-white/5 transition-all duration-500 group-hover:border-cyan-300/50 group-hover:bg-white/10 group-hover:shadow-[0_20px_70px_rgba(34,211,238,0.18)] group-hover:backdrop-blur-2xl">
                  <div className="h-40 w-full rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-fuchsia-400/20" />
                  <p className="text-sm leading-relaxed text-white/80">
                    I'm a Computer Science student passionate about Cloud,
                    DevOps, Automation, and AI-driven systems. I enjoy building
                    real-world projects ranging from scalable infrastructure and
                    automation systems to intelligent web platforms. My goal is
                    to build impactful products by combining software
                    engineering, cloud technologies, and AI.
                  </p>
                  <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200/80">
                    <span>Explore My Journey</span>
                    <span
                      className="translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      -&gt;
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <Link
                href={stat.href}
                className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                aria-label={stat.label}
              >
                <motion.div
                  variants={statCardVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <GlassCard className="flex flex-col gap-3 border-cyan-400/15 bg-white/5 transition-all duration-300 group-hover:border-cyan-300/50 group-hover:bg-white/10 group-hover:shadow-[0_18px_50px_rgba(34,211,238,0.14)] group-hover:backdrop-blur-2xl">
                    <motion.span
                      variants={statNumberVariants}
                      className="text-2xl font-semibold text-white"
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      {stat.value}
                    </motion.span>
                    <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                      {stat.label}
                    </span>
                  </GlassCard>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
