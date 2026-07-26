import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Brand palette drawn from the Brownstone logo
        maroon: {
          DEFAULT: "#6E2932",
          dark: "#4A1B22",
          light: "#8A3742",
        },
        copper: {
          DEFAULT: "#C0895A",
          dark: "#A5713F",
          light: "#D6A87D",
        },
        sand: "#F5F0EA",
        charcoal: "#1C1A19",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 40px -12px rgba(28, 26, 25, 0.18)",
        cardHover: "0 20px 60px -14px rgba(110, 41, 50, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
