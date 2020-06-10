const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/assets/images/*.svg", to: "./dist/assets/images/" },
        {
          from: "./src/assets/pictogram/*.png",
          to: "./dist/assets/pictogram/",
        },
      ],
    }),
  ],
};
