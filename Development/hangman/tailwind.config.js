const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
