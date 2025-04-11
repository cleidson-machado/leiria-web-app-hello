const { AgoraTailwindConfig } = require("@ama-pt/agora-design-system");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    ...AgoraTailwindConfig.theme, // Keep the Agora theme as the base
    extend: {
      maxWidth: {
        customContainer: "77.5rem", // Customize the container width
      },
      colors: {
        turquoise: {
          darkest: "#005567",
          dark: "#0D6675",
          base: "#107E90",
          light: "#3693A2",
          lightest: "#E2EBF1",
        },
      },
    },
  },
  plugins: AgoraTailwindConfig.plugins,
  safelist: AgoraTailwindConfig.safelist,
  corePlugins: {
    preflight: false,
  },
};
