export function BackgroundFx() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.9),rgba(5,6,10,0.95),#05060a)]" />
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>
      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[140px]" />
      <div className="absolute right-0 top-1/3 h-[520px] w-[520px] rounded-full bg-fuchsia-500/15 blur-[180px]" />
      <div className="absolute bottom-0 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-sky-400/15 blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.18),transparent_35%)]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
    </div>
  );
}
