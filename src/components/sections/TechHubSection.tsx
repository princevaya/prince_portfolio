"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { stagger, fadeUp } from "@/animations/motion";

export function TechHubSection() {
  return (
    <section id="techhub" className="relative z-10 px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="TechHub" eyebrow="Teaching" className="mb-12" />
        <motion.div
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp}>
            <GlassCard className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">
                TechHub Learning Lab
              </h3>
              <p className="text-sm text-white/70">
                Placeholder for your teaching mission, curriculum highlights, and
                how you mentor cloud engineers.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-cyan-200/80">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1">
                  Workshops
                </span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1">
                  Mentorship
                </span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1">
                  Cloud Labs
                </span>
              </div>
              <div className="pt-2">
                <Button href="/techhub" scroll={false}>
                  Explore TechHub
                </Button>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeUp}>
            <GlassCard className="flex h-full flex-col gap-4 border-cyan-400/15">
              <div className="h-44 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/15 via-slate-900 to-fuchsia-400/20" />
              <div className="text-sm text-white/70">
                Add a teaser for your teaching section, resources, or student
                outcomes.
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
