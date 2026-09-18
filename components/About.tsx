import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-5">
      <div className="pointer-events-none absolute inset-0 radial-glow" />
      <div className="relative">
        <SectionHeading title="About" />
        <div className="rounded-2xl border border-line bg-card/60 p-7 backdrop-blur-sm">
          <p className="text-[15.5px] leading-relaxed text-ink-muted">
            I&apos;m a BSc Computing student at Softwarica College of IT and E-commerce, studying
            in affiliation with Coventry University with hands-on experience across the full MERN stack and Flutter mobile development, I have shipped web and mobile projects independently and thrive in roles that blend frontend creativity with solid backend logics. Comfortable with client communication and agile workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
