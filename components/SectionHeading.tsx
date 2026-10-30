type SectionHeadingProps = {
  title: string;
  label?: string;
  tone?: "lavender" | "coral" | "mint";
};

const tones = {
  lavender: "bg-tint text-accent-dim",
  coral: "bg-[#ffdad8] text-[#8c1520]",
  mint: "bg-[#6ffbbe] text-[#005236]",
};

export default function SectionHeading({ title, label, tone = "lavender" }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-3">
      {label && (
        <span className={`rounded-full px-4 py-1 font-sans text-[12.5px] font-semibold ${tones[tone]}`}>
          {label}
        </span>
      )}
      <h2 className="font-sans text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
} 