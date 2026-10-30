export default function GlowingDivider() {
  return (
    <div className="relative flex items-center justify-center py-16">
      {/* Soft lavender glow behind */}
      <div className="pointer-events-none absolute h-[200px] w-[200px] rounded-full bg-tint blur-[70px]" />

      <div className="relative h-[100px] w-[100px]">
        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card font-mono text-xl font-bold text-accent shadow-card">
          SM
        </div>

        {/* Orbit ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-line" />

        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin motion-reduce:animate-none" style={{ animationDuration: "20s" }}>
          <div className="absolute -left-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent" />
        </div>
        <div className="absolute inset-0 animate-spin motion-reduce:animate-none" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
          <div className="absolute -right-0.5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#ff6b6b]" />
        </div>
        <div className="absolute inset-0 animate-spin motion-reduce:animate-none" style={{ animationDuration: "25s" }}>
          <div className="absolute left-1/2 -top-0.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-dim" />
        </div>
      </div>
    </div>
  );
}