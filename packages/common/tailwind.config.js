module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Trebuchet MS",
          "Lucida Sans Unicode",
          "Lucida Grande",
          "Lucida Sans",
          "Lato",
          "Arial",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        mono: [
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
        code: ["Courier New", "Courier", "monospace"],
      },
      colors: {
        primary: "transparent",
        secondary: "currentColor",
        tertiary: "",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
