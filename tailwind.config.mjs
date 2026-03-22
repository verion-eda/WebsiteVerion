/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        terminal: ["Share Tech Mono", "monospace"],
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
          accent: "#ff2d2d",
          "accent-bright": "#ff4444",
          "accent-dim": "#ff2d2d18",
          orange: "#ff6a00",
          amber: "#ffaa00",
          heading: "#e0dde6",
          glow: "#ff2d2d",
          "glow-orange": "#ff6a00",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-slow": "fadeIn 1.2s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "grid-scroll": "gridScroll 30s linear infinite",
        "border-glow": "borderGlow 4s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        gridScroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(80px)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(255, 45, 45, 0.2)" },
          "50%": { borderColor: "rgba(255, 45, 45, 0.6)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        "neon-red":
          "0 0 15px rgba(255, 45, 45, 0.3), 0 0 60px rgba(255, 45, 45, 0.1)",
        "neon-red-strong":
          "0 0 20px rgba(255, 45, 45, 0.5), 0 0 80px rgba(255, 45, 45, 0.2), 0 0 120px rgba(255, 45, 45, 0.1)",
        "neon-orange":
          "0 0 15px rgba(255, 106, 0, 0.3), 0 0 60px rgba(255, 106, 0, 0.1)",
        "neon-inner": "inset 0 0 30px rgba(255, 45, 45, 0.05)",
      },
    },
  },
  plugins: [],
};
