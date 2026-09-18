import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0D0617",
        surface: "#12081F",
        panel: "#170A27",
        card: "#1D0D35",
        "card-hover": "#261044",
        line: "rgba(139, 92, 246, 0.22)",
        "line-soft": "rgba(139, 92, 246, 0.12)",
        accent: "#7C3AED",
        "accent-bright": "#8B5CF6",
        "accent-neon": "#A855F7",
        "accent-dim": "#6D28D9",
        ink: "#F5F0FF",
        "ink-muted": "#B9AFCB",
        "ink-faint": "#7F718F",
        purple: {
          glow: "rgba(139, 92, 246, 0.25)",
          "glow-soft": "rgba(124, 58, 237, 0.12)",
          "glow-bright": "rgba(168, 85, 247, 0.35)",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
