module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT == "production",
    mode: "all",
    content: ["./layouts/**/*.html"],
  },
  darkMode: false,
  theme: {},
  variants: {},
  plugins: [],
};
