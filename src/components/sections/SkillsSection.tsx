"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { stagger, fadeUp } from "@/animations/motion";

const SKILLS = [
  {
    title: "Cloud",
    items: ["AWS", "Linux", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "DevOps",
    items: ["Jenkins", "CI/CD", "GitHub Actions", "Monitoring"],
  },
  {
    title: "Development",
    items: ["Node.js", "JavaScript", "MySQL", "HTML", "CSS"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="Skills" eyebrow="Stack" className="mb-12" />
        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SKILLS.map((group) => (
            <motion.div key={group.title} variants={fadeUp}>
              <GlassCard className="group h-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  <span className="text-xs text-cyan-200/70">Core</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 h-1 w-full rounded-full bg-white/5">
                  <div className="h-1 w-2/3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
