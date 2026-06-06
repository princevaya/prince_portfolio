import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  className?: string;
};

export function SectionHeading({ title, eyebrow, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <div className="h-px w-24 bg-gradient-to-r from-cyan-400/70 via-sky-400/40 to-transparent" />
    </div>
  );
}
