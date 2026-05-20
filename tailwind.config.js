/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#2C5EAD",
          electric: "#1591DC",
          sky: "#4BB8FA",
          frost: "#C4E2F5",
          crimson: "#D92243",
          midnight: "#050914",
          ink: "#07111F"
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "Satoshi", "General Sans", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(75, 184, 250, 0.28)",
        crimson: "0 0 42px rgba(217, 34, 67, 0.24)"
      }
    }
  },
  plugins: []
};
