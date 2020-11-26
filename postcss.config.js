const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcss_import = require("postcss-import");

const cssnano = require("cssnano")({
  preset: [
    "default",
    {
      discardComments: {
        removeAll: true,
      },
    },
  ],
});

const isProduction = process.env.HUGO_ENVIRONMENT == "production";

const plugins = [
  postcss_import,
  tailwind,
  autoprefixer,
  isProduction && [cssnano],
];

module.exports = { plugins };
