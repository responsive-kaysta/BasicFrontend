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
        sgreen: {
          100: "#1a867d",
        },
        sred: {
          100: "#ed4933",
          200: "#ef5e4a",
        },

        textColor: (theme) => theme("colors"),
      },
    },
  },
  variants: {},
  plugins: [],
};
