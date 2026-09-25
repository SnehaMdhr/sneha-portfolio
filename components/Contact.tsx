import { socials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

/* Lucide-style Mail icon */
function MailIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

/* Brand icons */
function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-5">
      {/* Subtle ambient glow behind the container */}
      <div className="pointer-events-none absolute inset-0 radial-glow" />
      <div className="relative">
        <SectionHeading title="Contact" />

        <div className="relative overflow-hidden rounded-2xl border border-line bg-[#12081F]/80 p-7 backdrop-blur-sm glow-purple sm:p-9">
          {/* Soft corner glows - smaller on mobile */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-32 w-32 rounded-full bg-accent/10 blur-3xl sm:h-56 sm:w-56" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-32 w-32 rounded-full bg-accent/[0.07] blur-3xl sm:h-56 sm:w-56" />

          <div className="relative">
            {/* Heading + description */}
            <h2 className="mb-4 font-sans text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
              Let&apos;s build <span className="text-accent-neon">something.</span>
            </h2>
            <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
              Open to <span className="text-ink">Flutter</span>,{" "}
              <span className="text-ink">Full-Stack</span>, and{" "}
              <span className="text-ink">Frontend</span> roles - reach out directly or find me on
              GitHub and LinkedIn.
            </p>

            <p className="mt-7 text-[14.5px] text-ink-muted">
              Have a project or opportunity in mind?
            </p>
            <p className="mt-1 text-[14.5px] text-ink-muted">
              I&apos;d love to hear about it. You can reach me at
            </p>

            <div className="mt-3 flex items-center gap-2.5">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/[0.08] text-accent-neon">
                <MailIcon size={16} />
              </span>
              <span className="break-all font-sans text-[15px] font-semibold text-accent-neon sm:text-[17px]">
                {socials.email}
              </span>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-xl border border-accent/25 bg-accent/[0.08] px-5 py-2.5 font-sans text-[13px] font-medium text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-neon/50 hover:bg-accent/[0.14] hover:text-accent-neon"
              >
                <GithubIcon />
                GitHub ↗
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-xl border border-accent/25 bg-accent/[0.08] px-5 py-2.5 font-sans text-[13px] font-medium text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-neon/50 hover:bg-accent/[0.14] hover:text-accent-neon"
              >
                <LinkedinIcon />
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
