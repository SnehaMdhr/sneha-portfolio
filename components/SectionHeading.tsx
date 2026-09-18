type SectionHeadingProps = {
  title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="font-sans text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
    </div>
  );
}
