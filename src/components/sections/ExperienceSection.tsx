"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { stagger, fadeUp } from "@/animations/motion";

const EXPERIENCES = [
  {
    role: "Full Stack Developer",
    company: "Mohphret Technologies LLP",
    period: "Nov 2025 - Present",
    summary:
      "Architected cloud-native web platforms with automation, performance, and reliability focus.",
    highlights: [
      "60% faster deployment cycles with zero-downtime releases",
      "AWS stack: EC2, S3, RDS, CloudFront with GitHub Actions CI/CD",
      "AI-powered video conferencing platform (React, Next.js, Node.js, WebRTC, PostgreSQL)",
      "40% faster APIs via refactoring, query optimization, and Redis caching",
      "IaC with Terraform for VPC, EC2, security groups, load balancers",
      "Dockerized apps deployed to ECS with auto-scaling and health monitoring",
      "CloudWatch monitoring, alerting, and automated incident response",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "RadhaKrishna Web Solutions",
    period: "May 2025 - Aug 2025",
    summary:
      "Improved performance, reliability, and security across client web platforms.",
    highlights: [
      "35% faster performance via code optimization, DB indexing, image compression, and CDN",
      "Maintained Linux servers (Apache, PHP, MySQL) with automated backups",
      "Enhanced responsiveness and cross-browser compatibility for 10k+ monthly users",
      "Configured SMTP services, email automation, SSL certificates, and DB encryption",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          title="Experience"
          eyebrow="Internships"
          className="mb-12"
        />
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {EXPERIENCES.map((experience) => (
            <motion.div key={experience.role} variants={fadeUp}>
              <GlassCard className="flex h-full flex-col gap-5 border-cyan-400/15">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                      {experience.company}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {experience.role}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {experience.period}
                  </span>
                </div>
                <p className="text-sm text-white/70">{experience.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
