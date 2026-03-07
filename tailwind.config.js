/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0f172a",
        neon: "#22c55e",
        text: "#e5e7eb",
      },
      boxShadow: {
        neon: "0 0 20px rgba(34, 197, 94, 0.25)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
