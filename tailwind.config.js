const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    mode: "all",
    content: ["./layouts/**/*.html"],
  },
  darkMode: false,
  theme: {
    colors: {
      primary: {
        light: "#4ADE80",
        DEFAULT: "#16A34A",
        dark: "#166534",
      },
      divider: "#E5E7EB",
      gray: {
        DEFAULT: "#6B7280",
        dark: "#374151",
      },
    },
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
