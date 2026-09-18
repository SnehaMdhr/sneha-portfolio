import { achievements } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-5">
      <div className="relative">
        <SectionHeading title="Achievements" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-line bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-accent-neon/40 hover:bg-card-hover/60"
            >
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-[11px] text-accent-neon">
                ✓
              </span>
              <span className="text-[14.5px] text-ink-muted">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
