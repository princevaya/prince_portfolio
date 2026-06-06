import Link from "next/link";
import { BackgroundFx } from "@/components/BackgroundFx";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FooterSection } from "@/components/sections/FooterSection";

const HIGHLIGHTS = [
  {
    title: "Cloud + DevOps Focus",
    description:
      "I design infrastructure with reliability, automation, and scale in mind.",
  },
  {
    title: "AI-Ready Systems",
    description:
      "I blend intelligent workflows with modern cloud stacks to ship impact.",
  },
  {
    title: "Product Mindset",
    description:
      "I build with measurable outcomes, clean UX, and operational visibility.",
  },
];

const JOURNEY = [
  {
    title: "Foundation",
    detail: "Computer Science core, Linux, networking, and systems design.",
  },
  {
    title: "Cloud Practice",
    detail:
      "Hands-on labs across AWS, IaC, CI/CD, observability, and security.",
  },
  {
    title: "Applied Projects",
    detail:
      "Real-world builds: automation pipelines, scalable APIs, and AI tooling.",
  },
];

const PRINCIPLES = [
  "Automate the boring stuff",
  "Make systems observable by default",
  "Design for failure, recover fast",
  "Ship with security as a feature",
];

export default function AboutPage() {
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
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <span className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">
                About
              </span>
              <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
                Building cloud-native systems with automation, clarity, and
                intent.
              </h1>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                I'm a Computer Science student passionate about Cloud, DevOps,
                Automation, and AI-driven systems. I enjoy building real-world
                projects ranging from scalable infrastructure and automation
                systems to intelligent web platforms. My goal is to build
                impactful products by combining software engineering, cloud
                technologies, and AI.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/projects" scroll={false}>
                  View Projects
                </Button>
                <Button href="/certifications" variant="outline" scroll={false}>
                  Certifications
                </Button>
              </div>
            </div>

            <GlassCard className="flex flex-col gap-5 border-cyan-400/20 bg-white/5">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-fuchsia-400/20 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                  Quick Profile
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  Cloud-First Developer
                </h2>
                <p className="mt-3 text-sm text-white/75">
                  Focused on infrastructure automation, production readiness,
                  and AI-enabled developer platforms.
                </p>
              </div>
              <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                    Core Stack
                  </p>
                  <p className="mt-2">AWS, Terraform, Docker, Kubernetes</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                    Focus
                  </p>
                  <p className="mt-2">Automation, Observability, AI</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                    Current Mode
                  </p>
                  <p className="mt-2">Building real-world labs</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                    Collaboration
                  </p>
                  <p className="mt-2">Open to internships and teams</p>
                </div>
              </div>
            </GlassCard>
          </section>

          <section className="grid gap-6 lg:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <GlassCard
                key={item.title}
                className="flex h-full flex-col gap-4 border-cyan-400/15 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_18px_50px_rgba(34,211,238,0.12)]"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </GlassCard>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GlassCard className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Journey Map</h2>
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                  Progress
                </span>
              </div>
              <div className="space-y-4">
                {JOURNEY.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="flex flex-col gap-5 border-cyan-400/20 bg-white/5">
              <h2 className="text-xl font-semibold text-white">
                Operating Principles
              </h2>
              <ul className="grid gap-3 text-sm text-white/70">
                {PRINCIPLES.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/skills" variant="ghost" className="w-fit" scroll={false}>
                Explore Skills
              </Button>
            </GlassCard>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GlassCard className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-white">
                What I'm Building Next
              </h2>
              <p className="text-sm text-white/70">
                A cloud-native automation suite that orchestrates deployments,
                observability, and AI copilots for faster operational feedback.
              </p>
              <Button href="/techhub" variant="outline" className="w-fit" scroll={false}>
                Visit TechHub
              </Button>
            </GlassCard>

            <GlassCard className="flex flex-col gap-4 border-cyan-400/20 bg-white/5">
              <h2 className="text-xl font-semibold text-white">
                Let's Collaborate
              </h2>
              <p className="text-sm text-white/70">
                I'm open to internships, research, and early-stage teams building
                cloud or AI infrastructure. If you're solving meaningful
                problems, I'd love to connect.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/#contact" scroll={false}>
                  Start a Conversation
                </Button>
                <Button href="/projects" variant="ghost" scroll={false}>
                  See Work
                </Button>
              </div>
            </GlassCard>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
