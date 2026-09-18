export default function GlowingDivider() {
  return (
    <div className="relative flex items-center justify-center py-16">
      {/* Glow behind - purple only */}
      <div className="pointer-events-none absolute h-[200px] w-[200px] rounded-full bg-accent/[0.10] blur-[80px]" />

      <div className="relative h-[100px] w-[100px]">
        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent-bright/35 bg-card/60 font-mono text-xl font-bold text-accent-neon backdrop-blur-sm">
          SM
        </div>

        {/* Orbit ring */}
        <div className="absolute inset-0 rounded-full border border-accent/15" />

        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
          <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-bright/60 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
          <div className="absolute -right-0.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent-neon/50 shadow-[0_0_6px_rgba(168,85,247,0.5)]" />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "25s" }}>
          <div className="absolute left-1/2 -top-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-accent/40" />
        </div>
      </div>
    </div>
  );
}
