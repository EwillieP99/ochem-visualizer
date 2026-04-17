import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'IBM Plex Mono'", "monospace"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        border: "var(--border)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        subtle: "var(--subtle)",
        accent: "#7c6cfc",
        "accent-soft": "#a89cff",
        muted: "#3a3a4a",
        success: "#4ade80",
        warning: "#fbbf24",
        danger: "#f87171",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-up": "slideUp 0.4s ease forwards",
        "arrow-draw": "arrowDraw 0.6s ease forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        arrowDraw: { "0%": { strokeDashoffset: "200" }, "100%": { strokeDashoffset: "0" } },
      },
    },
  },
  plugins: [],
};
export default config;
