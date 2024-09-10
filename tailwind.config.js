/** @type {import('tailwindcss').Config} */
let colors = require("tailwindcss/colors");

// Remove old colors to prevent benign warnings
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        22: "5.5rem",
        23: "5.75rem",
        25: "6.25rem",
      },
    },
    colors: {
      ...colors,
      primary: colors.pink,
      secondary: colors.cyan,
    },
  },
  plugins: [],
};
