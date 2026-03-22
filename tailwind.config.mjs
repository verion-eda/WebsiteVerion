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
          bg: "#080808",
          surface: "#0f0f0f",
          "surface-hover": "#161616",
          border: "#1e1e1e",
          "border-light": "#2a2a2a",
          muted: "#6b6b6b",
          subtle: "#a0a0a0",
          accent: "#960018",
          "accent-dim": "#d9404520",
          heading: "#d4d4d4",
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
    },
  },
  plugins: [],
};
