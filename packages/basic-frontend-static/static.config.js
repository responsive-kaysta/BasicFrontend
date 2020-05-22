import path from "path";

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  productionSourceMaps: true,
  silent: true,
  getRoutes: async () => {
    return [
      {
        path: "home",
        template: "src/pages/index.tsx",
      },
    ];
  },
  plugins: [
    "react-static-plugin-typescript",
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
      "react-static-plugin-google-tag-manager",
      {
        // example configuration
        id: "GTM-P2ZMVZ8",
        debug: false,
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
};
