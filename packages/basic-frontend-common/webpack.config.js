const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/images/*.svg", to: "./build/images/" },
        { from: "./src/images/*.png", to: "./build/images/" },
        { from: "./src/images/*.jpg", to: "./build/images/" },
        { from: "./src/pictograms/**/*.svg", to: "./build/pictograms/**/" },
      ],
    }),
  ],
};
