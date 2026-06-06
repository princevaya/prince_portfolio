"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { stagger, fadeUp } from "@/animations/motion";

const PROJECTS = [
  {
    title: "Auto-Scaling Web Infrastructure",
    description:
      "Implemented EC2 Auto Scaling, ALB, and CloudWatch for highly available services.",
    category: "Terraform",
    track: "High Availability",
  },
  {
    title: "Serverless ETL with AWS Glue",
    description:
      "Designed automated ETL workflows using Glue crawlers, jobs, and catalog.",
    category: "Cloud Data Management",
    track: "ETL",
  },
  {
    title: "Reusable Terraform Modules Suite",
    description:
      "Created modular Terraform components for IAM, VPC, EC2, and environments.",
    category: "Terraform",
    track: "Modularity",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading title="Projects" eyebrow="Work" className="mb-12" />
        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <GlassCard className="flex h-full flex-col gap-5 border-cyan-400/15">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {project.track}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto text-xs uppercase tracking-[0.3em] text-white/50">
                  Portfolio Project
                </div>
              </GlassCard>
            </motion.div>
          ))}
          <motion.div variants={fadeUp}>
            <GlassCard className="flex h-full flex-col justify-between gap-6 border-cyan-400/20 bg-white/5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                  Explore More
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  See the full project catalog and lab builds.
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  Browse the dedicated projects page for detailed summaries and
                  tech stacks.
                </p>
              </div>
              <Button href="/projects" scroll={false}>
                Explore Projects
              </Button>
            </GlassCard>
          </motion.div>
        </motion.div>
        <div className="mt-10 flex justify-center">
          <Button href="/projects" variant="outline" scroll={false}>
            Explore More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
