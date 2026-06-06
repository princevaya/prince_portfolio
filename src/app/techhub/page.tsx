import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export default function TechHubPage() {
  return (
    <div className="relative min-h-screen bg-[#05060a] px-6 pb-20 pt-32 text-white">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
            TechHub
          </span>
          <h1 className="text-3xl font-semibold sm:text-4xl">
            Teaching & Community Lab
          </h1>
          <p className="text-sm text-white/70 sm:text-base">
            Placeholder for your TechHub content. Replace this with details
            about workshops, mentoring programs, and curriculum design.
          </p>
        </div>

        <GlassCard className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white">Focus Areas</h2>
          <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            <li>Cloud fundamentals and architecture labs</li>
            <li>DevOps pipelines and automation</li>
            <li>Infrastructure as code walkthroughs</li>
            <li>Career mentorship and interview prep</li>
          </ul>
        </GlassCard>

        <GlassCard className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-white">Get Involved</h2>
          <p className="text-sm text-white/70">
            Add contact details, registration links, or a CTA for learners.
          </p>
          <Button href="/" scroll={false}>
            Back to Portfolio
          </Button>
        </GlassCard>
      </div>
    </div>
  );
}
