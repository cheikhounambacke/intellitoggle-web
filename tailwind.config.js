// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class", // Enables manual dark mode toggle
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#2E2A8A", // Button / Navbar background
        accent: "#D48C0C", // Highlight / CTA
        text: "#FFFFFF", // Text color
        footer: "#1E1B3A", // Footer background
      },
    },
  },
};
