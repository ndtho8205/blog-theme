const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

plugins = [
  tailwind,
  autoprefixer,
  ...(process.env.HUGO_ENVIRONMENT == "production" ? [cssnano] : []),
];

module.exports = { plugins };
