/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zodiak: ["Zodiak", "serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        luxury: {
          black: "#0A0A0A",
          card: "#141414",
          gold: "#D4AF37",
          "gold-light": "#F4A460",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      boxShadow: {
        luxury: "0 25px 50px rgba(0,0,0,0.5)",
        glow: "0 0 60px rgba(212, 175, 55, 0.3)",
        "glow-strong": "0 0 80px rgba(212, 175, 55, 0.5)",
      },
    },
  },
  plugins: [],
};
