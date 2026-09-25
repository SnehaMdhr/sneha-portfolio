import SectionHeading from "./SectionHeading";



export default function About() {
  return (
    <section id="about" className="relative py-5">
      <div className="pointer-events-none absolute inset-0 radial-glow" />
      <div className="relative">
        <SectionHeading title="About" />
        <div className="rounded-2xl border border-line bg-card/60 p-7 backdrop-blur-sm">
          <div className="space-y-4 text-justify text-[15.5px] leading-relaxed text-ink-muted">
            <p>
              I&apos;m a <span className="text-ink">Full Stack and Flutter Developer</span> with
              hands-on experience building web and mobile applications using modern technologies
              across the MERN stack and Flutter. I recently completed my BSc (Hons) in Computing
              at Softwarica College of IT and E-commerce, in affiliation with Coventry University,
              where I developed projects covering frontend development, backend APIs, databases,
              mobile applications, and software development.
            </p>

            <p>
              I enjoy working across the full development process from designing user
              interfaces and building responsive frontend experiences to developing REST APIs,
              database models, and mobile applications.
            </p>

            <p>
              Alongside software development, I also have a foundation in Python and data
              analysis. My <span className="text-ink">GlamTok</span> project focuses on analyzing
              and predicting social media post engagement based on posting time for local clothing
              businesses in Kathmandu Valley, using Python, Pandas, NumPy, and XGBoost. That
              experience gave me an interest in using data to understand patterns and support
              better decisions alongside building practical software solutions.
            </p>

            <p>
              I&apos;m comfortable working independently, communicating with clients, and working
              within agile workflows. I&apos;m currently interested in opportunities where I can
              contribute as a Full Stack Developer, Flutter Developer, or in frontend development
              while continuing to grow my technical skills through real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
