export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60bca89f5431c24a1a6cb31e",
                  title: "Sanity Studio",
                  name: "test-blog-studio-hooehcjb",
                  apiId: "4f4b0345-635d-40a5-8487-614e5d1af545",
                },
                {
                  buildHookId: "60bca8a02e76d4bcf8e2a672",
                  title: "Blog Website",
                  name: "test-blog-web-2oro1n74",
                  apiId: "eede4c89-af1d-493d-a74c-d588241a7daf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sammelbourne/test-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://test-blog-web-2oro1n74.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
