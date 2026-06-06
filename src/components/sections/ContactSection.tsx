"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { stagger, fadeUp } from "@/animations/motion";

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="Contact" eyebrow="Connect" className="mb-12" />
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp}>
            <GlassCard className="flex flex-col gap-4">
              <p className="text-sm text-white/70">
                Placeholder contact details. Update with your real info.
              </p>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-cyan-200" />
                  <a
                    href="mailto:princevaya02@gmail.com"
                    className="group relative transition-colors hover:text-cyan-200"
                  >
                    Email: princevaya02@gmail.com
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-cyan-300/70 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={16} className="text-cyan-200" />
                  <a
                    href="https://www.linkedin.com/in/prince-vaya/"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative transition-colors hover:text-cyan-200"
                  >
                    LinkedIn: linkedin.com/in/princevaya
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-cyan-300/70 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-cyan-200" />
                  <a
                    href="https://github.com/princevaya"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative transition-colors hover:text-cyan-200"
                  >
                    GitHub: github.com/princevaya
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-cyan-300/70 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeUp}>
            <GlassCard>
              <form className="grid gap-4">
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400/40 focus:outline-none"
                  placeholder="Name"
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400/40 focus:outline-none"
                  placeholder="Email"
                  type="email"
                />
                <textarea
                  className="min-h-[140px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400/40 focus:outline-none"
                  placeholder="Message"
                />
                <Button type="submit">Send Message</Button>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
