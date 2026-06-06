import Link from "next/link";
import { BackgroundFx } from "@/components/BackgroundFx";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FooterSection } from "@/components/sections/FooterSection";

const PROJECTS = [
  {
    level: "Terraform",
    track: "Infrastructure",
    title: "Serverless File Automation on AWS",
    description:
      "Built event-driven file processing with AWS Lambda and S3 to automate workflows and cloud operations.",
  },
  {
    level: "Terraform",
    track: "High Availability",
    title: "Auto-Scaling Web Infrastructure",
    description:
      "Implemented EC2 Auto Scaling, ALB, and CloudWatch to deliver resilient, highly available services.",
  },
  {
    level: "Terraform",
    track: "Networking",
    title: "Private MySQL Network Architecture",
    description:
      "Designed public/private subnet topology and deployed MySQL securely in a private AWS network.",
  },
  {
    level: "Terraform",
    track: "Networking",
    title: "Multi-VPC Secure Database Connectivity",
    description:
      "Delivered VPC peering, NAT, and bastion access for secure cross-network MySQL connectivity.",
  },
  {
    level: "Terraform",
    track: "Automation",
    title: "Automated EC2 Provisioning & AMI Pipelines",
    description:
      "Automated EC2 provisioning, security baselines, and AMI-based instance cloning with Terraform.",
  },
  {
    level: "Terraform",
    track: "Databases",
    title: "Private VPC + MySQL Provisioning",
    description:
      "Provisioned VPC, public/private subnets, NAT, and a private MySQL stack using Terraform.",
  },
  {
    level: "Terraform",
    track: "Reliability",
    title: "Multi-AZ AWS Platform with RDS",
    description:
      "Built a production-grade Multi-AZ VPC with EC2, managed RDS, and secure networking controls.",
  },
  {
    level: "Terraform",
    track: "Modularity",
    title: "Reusable Terraform Modules Suite",
    description:
      "Created modular Terraform components for IAM, VPC, EC2, and environment-based deployments.",
  },
  {
    level: "Cloud Data Management",
    track: "Databases",
    title: "Private MySQL Deployment in AWS",
    description:
      "Delivered a secure VPC design with private MySQL and controlled access via public EC2.",
  },
  {
    level: "Cloud Data Management",
    track: "Storage",
    title: "Enterprise Data Lake on S3",
    description:
      "Implemented S3 data lake partitioning by year and month for efficient ingestion and analytics.",
  },
  {
    level: "Cloud Data Management",
    track: "Migration",
    title: "MySQL Migration to Amazon RDS",
    description:
      "Migrated MySQL from EC2 to managed RDS using backup and restore with minimal downtime.",
  },
  {
    level: "Cloud Data Management",
    track: "ETL",
    title: "Serverless ETL with AWS Glue",
    description:
      "Designed automated ETL workflows using Glue crawlers, jobs, and the metadata catalog.",
  },
  {
    level: "Cloud Data Management",
    track: "Processing",
    title: "Large-Scale Processing on EMR",
    description:
      "Processed large datasets with Apache Spark on EMR using S3-backed distributed ETL.",
  },
  {
    level: "Cloud Data Management",
    track: "Analytics",
    title: "S3 Analytics with Amazon Athena",
    description:
      "Enabled SQL analytics on S3 data with Athena external tables for fast insights.",
  },
  {
    level: "Cloud Data Management",
    track: "Warehouse",
    title: "Cloud Data Warehouse with Redshift",
    description:
      "Built a scalable Redshift warehouse for SQL analytics and BI-ready reporting.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#05060a] text-white">
      <BackgroundFx />

      <header className="relative z-10 px-6 pt-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200"
          >
            Nova Cloud
          </Link>
          <Button
            href="/#contact"
            variant="ghost"
            className="px-4 py-2"
            scroll={false}
          >
            Contact
          </Button>
        </div>
      </header>

      <main className="relative z-10 px-6 pb-20 pt-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
              Projects
            </span>
            <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Cloud and automation labs built for impact.
            </h1>
            <p className="max-w-2xl text-sm text-white/70 sm:text-base">
              A focused catalog of real-world challenges across cloud, DevOps,
              automation, and systems engineering. Each project is structured to
              sharpen production-ready skills.
            </p>
          </div>

          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PROJECTS.map((project) => (
              <GlassCard
                key={project.title}
                className="group flex h-full flex-col gap-4 border-cyan-400/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_18px_50px_rgba(34,211,238,0.12)]"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {project.level}
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
            ))}
          </section>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                Next Up
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                Want a custom project plan tailored to your goals?
              </h2>
            </div>
            <Button href="/#contact" scroll={false}>
              Request a roadmap
            </Button>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
