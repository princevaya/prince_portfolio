import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "outline";
  target?: "_blank" | "_self";
  scroll?: boolean;
  type?: "button" | "submit" | "reset";
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  target = "_self",
  scroll,
  type = "button",
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/50";

  const variants = {
    primary:
      "bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/40 shadow-[0_0_24px_rgba(34,211,238,0.25)] hover:bg-cyan-400/20 hover:text-white",
    ghost:
      "bg-transparent text-zinc-200 ring-1 ring-white/15 hover:text-white hover:ring-white/40",
    outline:
      "bg-transparent text-white ring-1 ring-cyan-400/40 hover:bg-cyan-400/10",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        scroll={scroll}
        data-cursor="hover"
      >
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-sky-400/20 to-fuchsia-400/20 blur-md" />
        </span>
      </Link>
    );
  }

  return (
    <button type={type} className={classes} data-cursor="hover">
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-sky-400/20 to-fuchsia-400/20 blur-md" />
      </span>
    </button>
  );
}
