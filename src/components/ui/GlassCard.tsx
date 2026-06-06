import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(10,20,40,0.4)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
