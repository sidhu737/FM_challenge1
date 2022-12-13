/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      transparent: "transparent",
      current: "currentColor",
      White: "hsl(0, 0%, 100%)",
      Light_Grey: "hsl(217, 12%, 63%)",
      Medium_Grey: "hsl(216, 12%, 54%)",
      Dark_Blue: "hsl(213, 19%, 18%)",
      Very_Dark_Blue: "hsl(216, 12%, 8%)",
      Orange: "hsl(25, 97%, 53%)",
    },
  },
  plugins: [],
};
