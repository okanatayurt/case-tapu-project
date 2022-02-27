const defaultTheme = require("tailwindcss/defaultTheme");
// Tailwind Config
module.exports = {
  mode: process.env.NODE_ENV !== "production" ? "jit" : "",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  media: false,
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
