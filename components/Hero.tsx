import { socials } from "@/lib/data";

export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden pt-24 pb-6 sm:pt-32 sm:pb-8">
      {/* Background glow orbs - ALL PURPLE, scale down on mobile */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[80px] animate-pulse-glow sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[160px] w-[160px] rounded-full bg-accent-neon/[0.05] blur-[50px] animate-float-slow sm:h-[350px] sm:w-[350px] sm:blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 top-48 h-[140px] w-[140px] rounded-full bg-accent/[0.04] blur-[40px] animate-float sm:h-[300px] sm:w-[300px] sm:blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-[700px] text-center">
        {/* Circular avatar with PURPLE glow ring */}
        <div className="relative mx-auto mb-8 h-[120px] w-[120px] animate-rise">
          {/* Glow ring - purple only */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/50 via-accent-bright/35 to-accent/25 blur-[22px]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-bright/30 via-transparent to-accent-neon/20" />
          {/* Avatar image */}
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-accent-bright/35 backdrop-blur-sm glow-purple-avatar">
            <img
              src="/IMG-20260207-WA0062.jpg"
              alt="Sneha Manandhar"
              className="h-full w-full object-cover scale-[1.9] translate-y-[20%]"
            />
          </div>

        </div>

        {/* Greeting */}
        <p className="mb-3 font-sans text-sm text-ink-muted animate-rise" style={{ animationDelay: "0.1s" }}>
          Hello, I&apos;m <span className="text-accent-neon">Sneha</span>
        </p>

        {/* Main heading with PURPLE gradient */}
        <h1 className="mb-4 font-sans text-[38px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[50px] md:text-[62px] animate-rise" style={{ animationDelay: "0.2s" }}>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #F5F0FF 0%, #A855F7 50%, #7C3AED 100%)",
            }}
          >
            I am software developer
          </span>
        </h1>

        {/* Role */}
        <p className="mb-5 font-sans text-[15px] text-ink-faint animate-rise" style={{ animationDelay: "0.3s" }}>
          Currently a Flutter & Full Stack Developer
        </p>

        {/* Bio */}
        <p className="mx-auto mb-10 max-w-[52ch] text-[15px] leading-[1.7] text-ink-muted animate-rise" style={{ animationDelay: "0.4s" }}>
          I build across the full MERN stack and Flutter mobile apps -
          shipping independent web and mobile projects that blend frontend craft with solid
          backend logic. Comfortable with client communication and agile workflows.
        </p>

        {/* Social icons - purple borders and hover */}
        <div className="flex items-center justify-center gap-4 animate-rise" style={{ animationDelay: "0.5s" }}>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-bright/30 bg-card/50 text-ink transition-all hover:border-accent-neon/50 hover:text-accent-neon hover:bg-accent/10"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-bright/30 bg-card/50 text-ink transition-all hover:border-accent-neon/50 hover:text-accent-neon hover:bg-accent/10"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
