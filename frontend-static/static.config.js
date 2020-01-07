import path from "path";

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  getRoutes: async () => {
    return [
      {
        path: "home",
        template: "src/pages/index.tsx"
      },
      {
        path: "about",
        template: "src/pages/about.tsx"
      },
      {
        path: "contact",
        template: "src/pages/contact.tsx"
      },
      {
        path: "impressum",
        template: "src/pages/impressum.tsx"
      },
      {
        path: "projects",
        template: "src/pages/projects.tsx"
      },
      {
        path: "technic",
        template: "src/pages/technic.tsx"
      },
      {
        path: "sources",
        template: "src/pages/sources.tsx"
      },
      {
        path: "/projects/responsive-accessible-umbraco",
        template: "src/pages/projects/project-1.tsx"
      },
      {
        path: "/projects/inmemoryloader",
        template: "src/pages/projects/project-2.tsx"
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
    require.resolve("react-static-plugin-sitemap")
  ]
};
