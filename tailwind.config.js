const { AgoraTailwindConfig } = require("@ama-pt/agora-design-system");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ts,tsx}"],
  theme: AgoraTailwindConfig.theme,
  plugins: AgoraTailwindConfig.plugins,
  safelist: AgoraTailwindConfig.safelist,
  corePlugins: {
    preflight: false,
  },
};
