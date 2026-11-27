import { socials, projects } from "@/lib/data";

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Hero() {
  const facts = [
    { icon: "🚀", bg: "bg-tint", title: `${projects.length}+ Projects`, sub: "Web & mobile" },
    { icon: "📱", bg: "bg-[#ffdad8]", title: "Flutter + MERN", sub: "Core stack" },
    { icon: "🎓", bg: "bg-[#6ffbbe]", title: "BSc (Hons) Computing", sub: "Coventry University" },
    { icon: "🤝", bg: "bg-tint", title: "Agile workflows", sub: "Client communication" },
  ];

  return (
    <header id="home" className="relative pt-6 pb-6 sm:pt-24 sm:pb-8">
      {/* Soft background orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-tint/80 blur-[80px] animate-pulse-glow sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[160px] w-[160px] rounded-full bg-[#ffdad8]/70 blur-[50px] animate-float-slow sm:h-[350px] sm:w-[350px] sm:blur-[100px]" />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left: text */}
        <div className="order-2 flex min-w-0 flex-col items-start gap-5 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-tint px-4 py-1.5 shadow-card animate-rise">
            <span className="text-lg">👋</span>
            <span className="font-sans text-[14px] font-bold text-ink">Hello, I&apos;m Sneha</span>
          </div>

         <h1
  className="font-sans text-[32px] font-extrabold leading-[1.4] tracking-[-0.03em] text-ink sm:text-[42px] lg:text-[48px] animate-rise"
  style={{ animationDelay: "0.1s" }}
>
  I am a{" "}
  <span className="text-accent underline decoration-accent/60 decoration-wavy decoration-[3px] underline-offset-[6px]">
    Software Developer & UI/UX Enthusiast
  </span>
</h1>

          <p
            className="font-sans text-[19px] font-bold tracking-tight text-accent sm:text-[24px] animate-rise"
            style={{ animationDelay: "0.2s" }}
          >
            Currently a Flutter & Full Stack Developer
          </p>

          <p
            className="max-w-[58ch] text-[16px] leading-[1.7] text-ink-muted sm:text-[17px] animate-rise"
            style={{ animationDelay: "0.3s" }}
          >
            I build across the full MERN stack and Flutter mobile apps -
            shipping independent web and mobile projects that blend frontend craft with solid
            backend logic. Comfortable with client communication and agile workflows.
          </p>

          <div className="flex flex-wrap items-center mt-0 gap-3 pt-1 animate-rise" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-sans text-[14px] font-semibold text-surface shadow-pop transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dim"
            >
              See my work
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-soft bg-card px-5 py-3 font-sans text-[14px] font-semibold text-ink shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:text-accent hover:shadow-card-hover"
            >
              <GithubIcon /> GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-soft bg-card px-5 py-3 font-sans text-[14px] font-semibold text-ink shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:text-accent hover:shadow-card-hover"
            >
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right: photo frame */}
        <div className="order-1 mx-auto w-full max-w-[20rem] sm:max-w-[26rem] lg:order-2 lg:max-w-none animate-rise" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="aspect-square w-full rounded-[2rem] bg-gradient-to-tr from-tint to-[#ffdad8] p-2 shadow-pop">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-card">
                <img
  src="photo.jpeg"
  alt="Sneha Manandhar"
  draggable={false}
  className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_80%] scale-125"
/>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl bg-card/90 px-3 py-2.5 shadow-card backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#006c49]" />
                    <span className="font-sans text-[11.5px] font-bold text-ink">Flutter & Full Stack</span>
                  </div>
                  <span className="font-sans text-[11.5px] font-bold text-[#006c49]">📍 Kathmandu</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 right-2 max-w-[85%] rotate-3 rounded-full bg-card px-4 py-1.5 shadow-pop sm:right-4">
              <span className="font-sans text-[12px] font-bold text-ink">
              Open to Flutter, Full-Stack, and Data Analytics roles
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fact cards */}
      <div className="relative z-10 mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {facts.map((f) => (
          <div
            key={f.title}
            className="flex flex-col items-start gap-1 rounded-3xl border border-line-soft bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div className={`mb-1 flex h-10 w-10 items-center justify-center rounded-2xl text-[18px] ${f.bg}`}>
              {f.icon}
            </div>
            <span className="font-sans text-[18px] font-bold leading-tight tracking-tight text-ink sm:text-[20px]">
              {f.title}
            </span>
            <span className="text-[13px] text-ink-muted">{f.sub}</span>
          </div>
        ))}
      </div>
    </header>
  );
}