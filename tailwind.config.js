/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#2F81F7", // Accent 1
        darkGreen: "#161B22", // Card fill
        lightBackground: "#C9D1D9", // Primary text
        darkBackground: "#0D1117", // Main background
        darkBlack: "#000000",
        grayColor: "#8B949E", // Secondary text
        yellowColor: "#D29922", // Highlight
        "theme-bg": "#0D1117",
        "theme-card": "#21262D", // Lighter shade for better contrast
        "theme-accent": "#2F81F7",
        "theme-text": "#C9D1D9",
        "theme-text-secondary": "#8B949E",
        "theme-border": "#30363D",
        "theme-success": "#3FB950",
        "theme-danger": "#F85149",

      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
