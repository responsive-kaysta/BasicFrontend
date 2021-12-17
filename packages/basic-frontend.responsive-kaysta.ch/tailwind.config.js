const baseTailwindConfig = require('../basic-frontend-common/tailwind.config');

module.exports = {
  ...baseTailwindConfig,
  content: ["./src/**/*.{html,js,tsx}", "../basic-frontend-common/src/**/*.{html,js,tsx}"],
};
