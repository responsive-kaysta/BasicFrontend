module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        greener: {
          100: "#1a867d",
        },
        textColor: (theme) => theme("colors"),
      },
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
    },
  },
  variants: {},
  plugins: [],
};