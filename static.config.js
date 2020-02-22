import path from "path";

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
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
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    "react-static-plugin-google-tag-manager",
    {
      id: "GTM-WRGXW24",
      debug: true
    }
  ]
};
