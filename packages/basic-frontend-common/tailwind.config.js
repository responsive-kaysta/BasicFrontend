module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Trebuchet MS',
          'Lucida Sans Unicode',
          'Lucida Grande',
          'Lucida Sans',
          'Lato',
          'Arial',
          'sans-serif',
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
        code: ['Courier New', 'Courier', 'monospace'],
      },

      colors: {
        sgreen: {
          100: '#1a867d',
        },
        sred: {
          100: '#ff6600',
          200: '#ff3300',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
