const { AgoraTailwindConfig } = require("@ama-pt/agora-design-system");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    ...AgoraTailwindConfig.theme,
    colors: {
      ...AgoraTailwindConfig.theme.colors,
      primary: {
        50: "#FFF000",
        100: "#FFF000",
        200: "#FFF000",
        300: "#FFF000",
        400: "#FFF000",
        500: "#FFF000",
        600: "#FFF000",
        700: "#FFF000",
        800: "#FFF000",
        900: "#FFF000",
      },
    },
  },
  plugins: AgoraTailwindConfig.plugins,
  safelist: AgoraTailwindConfig.safelist,
  corePlugins: { preflight: false },
};

// THis is anothe example to how use the config - from npm
//https://www.npmjs.com/package/@ama-pt/agora-design-system/v/2.2.3?activeTab=readme
