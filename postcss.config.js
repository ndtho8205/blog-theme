const tailwind = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env")({
  fetures: {
    "nesting-rules": true,
  },
});

const postcssImport = require("postcss-import");

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

const isProduction = process.env.NODE_ENV == "production";

const plugins = [
  postcssImport,
  tailwind,
  postcssPresetEnv,
  ...(isProduction ? [cssnano] : []),
];

module.exports = { plugins };
