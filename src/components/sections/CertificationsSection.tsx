"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { stagger, fadeUp } from "@/animations/motion";

const CERTS = ["AWS Certified", "DevOps Professional", "Kubernetes", "Linux"];

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative z-10 px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          title="Certifications"
          eyebrow="Credentials"
          className="mb-12"
        />
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CERTS.map((cert) => (
            <motion.div key={cert} variants={fadeUp}>
              <GlassCard className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{cert}</h3>
                  <p className="text-sm text-white/60">Placeholder issuer</p>
                </div>
                <div className="h-12 w-12 rounded-full border border-cyan-400/30 bg-cyan-400/10" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
