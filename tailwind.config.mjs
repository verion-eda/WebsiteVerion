/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        verion: {
          bg: "#050507",
          surface: "#0a0a0e",
          "surface-hover": "#12121a",
          border: "#1a1a24",
          "border-light": "#2a2a3a",
          muted: "#6b6b7b",
          subtle: "#a0a0b0",
          accent: "#00d4ff",
          "accent-bright": "#00e5ff",
          "accent-dim": "#00d4ff18",
          orange: "#0088ff",
          amber: "#00ffcc",
          heading: "#e0dde6",
          glow: "#00d4ff",
          "glow-orange": "#0088ff",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-slow": "fadeIn 1.2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "neon-red":
          "0 0 0 1px rgba(0, 212, 255, 0.08)",
        "neon-red-strong":
          "0 0 0 1px rgba(0, 212, 255, 0.15)",
        "neon-orange":
          "0 0 0 1px rgba(0, 136, 255, 0.08)",
        "neon-inner": "inset 0 0 0 1px rgba(0, 212, 255, 0.04)",
      },
    },
  },
  plugins: [],
};
