/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B4965", // Deep trustworthy blue
          light: "#62B6CB", // Lighter blue for hover states
          dark: "#163C53", // Darker shade for hover states
        },
        secondary: {
          DEFAULT: "#FF7F50", // Warm coral
          light: "#FF9B76", // Lighter coral for hover
          dark: "#FF633D", // Darker coral for hover
        },
        neutral: {
          lightest: "#FFFFFF", // White
          light: "#F5F5F5", // Light background
          DEFAULT: "#E5E5E5", // Default neutral
          dark: "#2C3E50", // Dark text color
        },
      },
    },
  },
  plugins: [daisyui],
};
