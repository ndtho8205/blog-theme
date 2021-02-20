const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./layouts/**/*.html"],
  },
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
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
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: ["ui-monospace", "Consolas", "Monaco", "monospace"],
    },
    fontWeight: {
      normal: 400,
      medium: 600,
      bold: 700,
    },
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
  },
  variants: {
    extend: {
      fontWeight: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
