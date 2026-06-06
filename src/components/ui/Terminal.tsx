"use client";

import { useEffect, useMemo, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

const COMMANDS = [
  "$ docker run hello-world",
  "$ kubectl get pods",
  "$ terraform init",
  "$ aws ec2 describe-instances",
  "$ git push origin main",
  "$ jenkins build deploy",
];

export function Terminal() {
  const commands = useMemo(() => COMMANDS, []);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const current = commands[lineIndex];

    if (charIndex < current.length) {
      const timeout = window.setTimeout(() => {
        setCharIndex((value) => value + 1);
      }, 50);
      return () => window.clearTimeout(timeout);
    }

    const pause = window.setTimeout(() => {
      setHistory((prev) => [...prev, current].slice(-4));
      setCharIndex(0);
      setLineIndex((value) => (value + 1) % commands.length);
    }, 700);

    return () => window.clearTimeout(pause);
  }, [charIndex, lineIndex, commands]);

  return (
    <GlassCard className="relative overflow-hidden border-cyan-400/30 bg-black/60">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_60%)]" />
      </div>
      <div className="relative flex items-center gap-2 text-xs text-cyan-200/80">
        <span className="h-2 w-2 rounded-full bg-cyan-400/60" />
        <span className="h-2 w-2 rounded-full bg-fuchsia-400/50" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="ml-2 font-mono tracking-wide">devops-terminal</span>
      </div>
      <div className="relative mt-4 space-y-2 font-mono text-sm text-cyan-100/90">
        {history.map((line, index) => (
          <div key={`${line}-${index}`} className="opacity-70">
            {line}
          </div>
        ))}
        <div>
          {commands[lineIndex].slice(0, charIndex)}
          <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-cyan-200" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </GlassCard>
  );
}
