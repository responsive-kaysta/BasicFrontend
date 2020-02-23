import path from "path";

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  productionSourceMaps: true,
  silent: true,
  getRoutes: async () => {
    return [
      {
        path: "home",
        template: "src/pages/index.tsx"
      }
    ];
  },
  plugins: [
    "react-static-plugin-typescript",
    [
      "react-static-plugin-google-tag-manager",
      {
        id: "GTM-KBBLJLS",
        debug: true
      }
    ],
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
