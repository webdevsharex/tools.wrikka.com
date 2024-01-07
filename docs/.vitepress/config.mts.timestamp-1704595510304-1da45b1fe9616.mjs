// docs/.vitepress/config.mts
import { defineConfig } from "file:///D:/wrikka/projects/share.wrikka.com/node_modules/.pnpm/vitepress@1.0.0-rc.31_@algolia+client-search@4.22.0_markdown-it-mathjax3@4.3.2_search-insights@2.13.0/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/config/navbar.ts
var navbar = [
  {
    text: "\u2B50 \u0E23\u0E35\u0E27\u0E34\u0E27 Tools",
    link: "/tools/main",
    activeMatch: "/tools/main"
  },
  /*
  {
  	text: "📝 บทความ",
  	link: "/blog/tools",
  	activeMatch: "/blog/tools",
  },
  */
  {
    text: "\u{1F516} Bookmark \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
    link: "https://raindrop.io/wrikka",
    activeMatch: "https://raindrop.io/wrikka"
  }
];

// docs/.vitepress/config/sidebar.ts
var sidebar = {
  "/tools/": [
    {
      text: "\u0E23\u0E35\u0E27\u0E34\u0E27 Tools",
      link: "/tools/main"
    },
    {
      items: [
        {
          text: "General Tools",
          items: [
            {
              text: "Clickup",
              link: "/tools/general/clickup"
            },
            {
              text: "Obsidian",
              link: "/tools/general/obsidian"
            },
            {
              text: "Raindrop",
              link: "/tools/general/raindrop"
            },
            {
              text: "Eagle Cool",
              link: "/tools/general/eagle"
            },
            {
              text: "Tldraw",
              link: "/tools/general/tldraw"
            },
            {
              text: "Inoreader",
              link: "/tools/general/inoreader"
            }
          ]
        }
      ]
    },
    {
      items: [
        {
          text: "Design Tools",
          items: [
            {
              text: "Framer",
              link: "/tools/design/framer"
            },
            {
              text: "Figma",
              link: "/tools/design/figma"
            }
          ]
        }
      ]
    },
    {
      items: [
        {
          text: "Dev Tools",
          items: [
            {
              text: "VSCode",
              link: "/tools/dev/vscode"
            }
          ]
        }
      ]
    },
    {
      items: [
        {
          text: "AI Tools",
          items: [
            {
              text: "ChatGPT",
              link: "/tools/ai/chatgpt"
            }
          ]
        }
      ]
    }
  ]
};

// docs/.vitepress/config.mts
var config_default = defineConfig({
  title: "share.wrikka",
  description: "\u0E41\u0E0A\u0E23\u0E4C\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E43\u0E19\u0E17\u0E38\u0E01\u0E46\u0E27\u0E31\u0E19",
  lastUpdated: true,
  cleanUrls: true,
  srcDir: ".",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1704584370/wrikka-obsidian/bzqri7zwmycgzu16gd74.webp",
        type: "image/svg+xml"
      }
    ],
    ["meta", { name: "author", content: "ai.sharex" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "og:title", content: "ai.sharex" }],
    ["meta", { name: "og:description", content: "\u0E41\u0E0A\u0E23\u0E4C\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E43\u0E19\u0E17\u0E38\u0E01\u0E46\u0E27\u0E31\u0E19" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1704584370/wrikka-obsidian/bzqri7zwmycgzu16gd74.webp"
      }
    ],
    ["meta", { name: "twitter:title", content: "ai.sharex" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1704584370/wrikka-obsidian/bzqri7zwmycgzu16gd74.webp"
      }
    ],
    ["meta", { name: "twitter:site", content: "@ai.sharex" }],
    ["meta", { name: "twitter:url", content: "https://twitter.com/ai.sharex" }],
    [
      "link",
      {
        rel: "search",
        type: "application/opensearchdescription+xml",
        href: "/search.xml",
        title: "UnoCSS"
      }
    ]
  ],
  vite: {},
  vue: {},
  themeConfig: {
    logo: "https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1704584370/wrikka-obsidian/bzqri7zwmycgzu16gd74.webp",
    search: {
      provider: "local"
    },
    /*
    carbonAds: {
    	code: "",
    	placement: "sharx",
    },
    */
    footer: {
      message: "\u0E41\u0E0A\u0E23\u0E4C\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49 x",
      copyright: "No Copyright \xA9 2024-present \u0E41\u0E0A\u0E23\u0E4C\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49 x"
    },
    socialLinks: [
      {
        icon: "facebook",
        link: "https://facebook.com/webdev.sharex"
      },
      {
        icon: "github",
        link: "https://github.com/webdevsharex/share.wrikka.com"
      }
    ],
    nav: navbar,
    sidebar
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9uYXZiYXIudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaWRlYmFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcd3Jpa2thXFxcXHByb2plY3RzXFxcXHNoYXJlLndyaWtrYS5jb21cXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3cmlra2FcXFxccHJvamVjdHNcXFxcc2hhcmUud3Jpa2thLmNvbVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd3Jpa2thL3Byb2plY3RzL3NoYXJlLndyaWtrYS5jb20vZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7XG5pbXBvcnQgeyBnZXRTaWRlYmFyIH0gZnJvbSBcInZpdGVwcmVzcy1wbHVnaW4tYXV0by1zaWRlYmFyXCI7XG5pbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi9jb25maWcvbmF2YmFyXCI7XG5pbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcIi4vY29uZmlnL3NpZGViYXJcIjtcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0dGl0bGU6IFwic2hhcmUud3Jpa2thXCIsXG5cdGRlc2NyaXB0aW9uOiBcIlx1MEU0MVx1MEUwQVx1MEUyM1x1MEU0Q1x1MEUyQVx1MEUzNFx1MEU0OFx1MEUwN1x1MEUxN1x1MEUzNVx1MEU0OFx1MEUyM1x1MEUzNVx1MEUyMlx1MEUxOVx1MEUyM1x1MEUzOVx1MEU0OVx1MEU0M1x1MEUxOVx1MEUxN1x1MEUzOFx1MEUwMVx1MEU0Nlx1MEUyN1x1MEUzMVx1MEUxOVwiLFxuXHRsYXN0VXBkYXRlZDogdHJ1ZSxcblx0Y2xlYW5VcmxzOiB0cnVlLFxuXHRzcmNEaXI6IFwiLlwiLFxuXHRiYXNlOiBcIi9cIixcblx0aGVhZDogW1xuXHRcdFtcblx0XHRcdFwibGlua1wiLFxuXHRcdFx0e1xuXHRcdFx0XHRyZWw6IFwiaWNvblwiLFxuXHRcdFx0XHRocmVmOlxuXHRcdFx0XHRcdFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGM1NG5taHdxL2ltYWdlL3VwbG9hZC9mX2F1dG8vdjE3MDQ1ODQzNzAvd3Jpa2thLW9ic2lkaWFuL2J6cXJpN3p3bXljZ3p1MTZnZDc0LndlYnBcIixcblx0XHRcdFx0dHlwZTogXCJpbWFnZS9zdmcreG1sXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1wibWV0YVwiLCB7IG5hbWU6IFwiYXV0aG9yXCIsIGNvbnRlbnQ6IFwiYWkuc2hhcmV4XCIgfV0sXG5cdFx0W1wibWV0YVwiLCB7IHByb3BlcnR5OiBcIm9nOnR5cGVcIiwgY29udGVudDogXCJ3ZWJzaXRlXCIgfV0sXG5cdFx0W1wibWV0YVwiLCB7IG5hbWU6IFwib2c6dGl0bGVcIiwgY29udGVudDogXCJhaS5zaGFyZXhcIiB9XSxcblx0XHRbXCJtZXRhXCIsIHsgbmFtZTogXCJvZzpkZXNjcmlwdGlvblwiLCBjb250ZW50OiBcIlx1MEU0MVx1MEUwQVx1MEUyM1x1MEU0Q1x1MEUyQVx1MEUzNFx1MEU0OFx1MEUwN1x1MEUxN1x1MEUzNVx1MEU0OFx1MEUyM1x1MEUzNVx1MEUyMlx1MEUxOVx1MEUyM1x1MEUzOVx1MEU0OVx1MEU0M1x1MEUxOVx1MEUxN1x1MEUzOFx1MEUwMVx1MEU0Nlx1MEUyN1x1MEUzMVx1MEUxOVwiIH1dLFxuXHRcdFtcblx0XHRcdFwibWV0YVwiLFxuXHRcdFx0e1xuXHRcdFx0XHRwcm9wZXJ0eTogXCJvZzppbWFnZVwiLFxuXHRcdFx0XHRjb250ZW50OlxuXHRcdFx0XHRcdFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGM1NG5taHdxL2ltYWdlL3VwbG9hZC9mX2F1dG8vdjE3MDQ1ODQzNzAvd3Jpa2thLW9ic2lkaWFuL2J6cXJpN3p3bXljZ3p1MTZnZDc0LndlYnBcIixcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXCJtZXRhXCIsIHsgbmFtZTogXCJ0d2l0dGVyOnRpdGxlXCIsIGNvbnRlbnQ6IFwiYWkuc2hhcmV4XCIgfV0sXG5cdFx0W1wibWV0YVwiLCB7IG5hbWU6IFwidHdpdHRlcjpjYXJkXCIsIGNvbnRlbnQ6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIH1dLFxuXHRcdFtcblx0XHRcdFwibWV0YVwiLFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcInR3aXR0ZXI6aW1hZ2VcIixcblx0XHRcdFx0Y29udGVudDpcblx0XHRcdFx0XHRcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RjNTRubWh3cS9pbWFnZS91cGxvYWQvZl9hdXRvL3YxNzA0NTg0MzcwL3dyaWtrYS1vYnNpZGlhbi9ienFyaTd6d215Y2d6dTE2Z2Q3NC53ZWJwXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1wibWV0YVwiLCB7IG5hbWU6IFwidHdpdHRlcjpzaXRlXCIsIGNvbnRlbnQ6IFwiQGFpLnNoYXJleFwiIH1dLFxuXHRcdFtcIm1ldGFcIiwgeyBuYW1lOiBcInR3aXR0ZXI6dXJsXCIsIGNvbnRlbnQ6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9haS5zaGFyZXhcIiB9XSxcblx0XHRbXG5cdFx0XHRcImxpbmtcIixcblx0XHRcdHtcblx0XHRcdFx0cmVsOiBcInNlYXJjaFwiLFxuXHRcdFx0XHR0eXBlOiBcImFwcGxpY2F0aW9uL29wZW5zZWFyY2hkZXNjcmlwdGlvbit4bWxcIixcblx0XHRcdFx0aHJlZjogXCIvc2VhcmNoLnhtbFwiLFxuXHRcdFx0XHR0aXRsZTogXCJVbm9DU1NcIixcblx0XHRcdH0sXG5cdFx0XSxcblx0XSxcblx0dml0ZToge30sXG5cdHZ1ZToge30sXG5cdHRoZW1lQ29uZmlnOiB7XG5cdFx0bG9nbzpcblx0XHRcdFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGM1NG5taHdxL2ltYWdlL3VwbG9hZC9mX2F1dG8vdjE3MDQ1ODQzNzAvd3Jpa2thLW9ic2lkaWFuL2J6cXJpN3p3bXljZ3p1MTZnZDc0LndlYnBcIixcblx0XHRzZWFyY2g6IHtcblx0XHRcdHByb3ZpZGVyOiBcImxvY2FsXCIsXG5cdFx0fSxcblx0XHQvKlxuXHRcdGNhcmJvbkFkczoge1xuXHRcdFx0Y29kZTogXCJcIixcblx0XHRcdHBsYWNlbWVudDogXCJzaGFyeFwiLFxuXHRcdH0sXG5cdFx0Ki9cblx0XHRmb290ZXI6IHtcblx0XHRcdG1lc3NhZ2U6IFwiXHUwRTQxXHUwRTBBXHUwRTIzXHUwRTRDXHUwRTA0XHUwRTI3XHUwRTMyXHUwRTIxXHUwRTIzXHUwRTM5XHUwRTQ5IHhcIixcblx0XHRcdGNvcHlyaWdodDogXCJObyBDb3B5cmlnaHQgXHUwMEE5IDIwMjQtcHJlc2VudCBcdTBFNDFcdTBFMEFcdTBFMjNcdTBFNENcdTBFMDRcdTBFMjdcdTBFMzJcdTBFMjFcdTBFMjNcdTBFMzlcdTBFNDkgeFwiLFxuXHRcdH0sXG5cdFx0c29jaWFsTGlua3M6IFtcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogXCJmYWNlYm9va1wiLFxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vZmFjZWJvb2suY29tL3dlYmRldi5zaGFyZXhcIixcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwiZ2l0aHViXCIsXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3dlYmRldnNoYXJleC9zaGFyZS53cmlra2EuY29tXCIsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0bmF2OiBuYXZiYXIsXG5cdFx0c2lkZWJhcjogc2lkZWJhcixcblx0fSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3cmlra2FcXFxccHJvamVjdHNcXFxcc2hhcmUud3Jpa2thLmNvbVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3cmlra2FcXFxccHJvamVjdHNcXFxcc2hhcmUud3Jpa2thLmNvbVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd3Jpa2thL3Byb2plY3RzL3NoYXJlLndyaWtrYS5jb20vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9uYXZiYXIudHNcIjtpbXBvcnQgdHlwZSB7IERlZmF1bHRUaGVtZSB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcblxuZXhwb3J0IGNvbnN0IG5hdmJhcjogRGVmYXVsdFRoZW1lLkNvbmZpZ1tcIm5hdlwiXSA9IFtcblx0e1xuXHRcdHRleHQ6IFwiXHUyQjUwIFx1MEUyM1x1MEUzNVx1MEUyN1x1MEUzNFx1MEUyNyBUb29sc1wiLFxuXHRcdGxpbms6IFwiL3Rvb2xzL21haW5cIixcblx0XHRhY3RpdmVNYXRjaDogXCIvdG9vbHMvbWFpblwiLFxuXHR9LFxuXHQvKlxuXHR7XG5cdFx0dGV4dDogXCJcdUQ4M0RcdURDREQgXHUwRTFBXHUwRTE3XHUwRTA0XHUwRTI3XHUwRTMyXHUwRTIxXCIsXG5cdFx0bGluazogXCIvYmxvZy90b29sc1wiLFxuXHRcdGFjdGl2ZU1hdGNoOiBcIi9ibG9nL3Rvb2xzXCIsXG5cdH0sXG5cdCovXG5cdHtcblx0XHR0ZXh0OiBcIlx1RDgzRFx1REQxNiBCb29rbWFyayBcdTBFMTdcdTBFMzFcdTBFNDlcdTBFMDdcdTBFMkJcdTBFMjFcdTBFMTRcIixcblx0XHRsaW5rOiBcImh0dHBzOi8vcmFpbmRyb3AuaW8vd3Jpa2thXCIsXG5cdFx0YWN0aXZlTWF0Y2g6IFwiaHR0cHM6Ly9yYWluZHJvcC5pby93cmlra2FcIixcblx0fSxcbl07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHdyaWtrYVxcXFxwcm9qZWN0c1xcXFxzaGFyZS53cmlra2EuY29tXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdyaWtrYVxcXFxwcm9qZWN0c1xcXFxzaGFyZS53cmlra2EuY29tXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd3Jpa2thL3Byb2plY3RzL3NoYXJlLndyaWtrYS5jb20vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaWRlYmFyLnRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tIFwidml0ZXByZXNzXCI7XG5cbmV4cG9ydCBjb25zdCBzaWRlYmFyOiBEZWZhdWx0VGhlbWUuQ29uZmlnW1wic2lkZWJhclwiXSA9IHtcblx0XCIvdG9vbHMvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1MEUyM1x1MEUzNVx1MEUyN1x1MEUzNFx1MEUyNyBUb29sc1wiLFxuXHRcdFx0bGluazogXCIvdG9vbHMvbWFpblwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiR2VuZXJhbCBUb29sc1wiLFxuXHRcdFx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IFwiQ2xpY2t1cFwiLFxuXHRcdFx0XHRcdFx0XHRsaW5rOiBcIi90b29scy9nZW5lcmFsL2NsaWNrdXBcIixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IFwiT2JzaWRpYW5cIixcblx0XHRcdFx0XHRcdFx0bGluazogXCIvdG9vbHMvZ2VuZXJhbC9vYnNpZGlhblwiLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogXCJSYWluZHJvcFwiLFxuXHRcdFx0XHRcdFx0XHRsaW5rOiBcIi90b29scy9nZW5lcmFsL3JhaW5kcm9wXCIsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIkVhZ2xlIENvb2xcIixcblx0XHRcdFx0XHRcdFx0bGluazogXCIvdG9vbHMvZ2VuZXJhbC9lYWdsZVwiLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogXCJUbGRyYXdcIixcblx0XHRcdFx0XHRcdFx0bGluazogXCIvdG9vbHMvZ2VuZXJhbC90bGRyYXdcIixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IFwiSW5vcmVhZGVyXCIsXG5cdFx0XHRcdFx0XHRcdGxpbms6IFwiL3Rvb2xzL2dlbmVyYWwvaW5vcmVhZGVyXCIsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiRGVzaWduIFRvb2xzXCIsXG5cdFx0XHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogXCJGcmFtZXJcIixcblx0XHRcdFx0XHRcdFx0bGluazogXCIvdG9vbHMvZGVzaWduL2ZyYW1lclwiLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogXCJGaWdtYVwiLFxuXHRcdFx0XHRcdFx0XHRsaW5rOiBcIi90b29scy9kZXNpZ24vZmlnbWFcIixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpdGVtczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJEZXYgVG9vbHNcIixcblx0XHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlZTQ29kZVwiLFxuXHRcdFx0XHRcdFx0XHRsaW5rOiBcIi90b29scy9kZXYvdnNjb2RlXCIsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aXRlbXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiQUkgVG9vbHNcIixcblx0XHRcdFx0XHRpdGVtczogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIkNoYXRHUFRcIixcblx0XHRcdFx0XHRcdFx0bGluazogXCIvdG9vbHMvYWkvY2hhdGdwdFwiLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRdLFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1UsU0FBUyxvQkFBb0I7OztBQ0VyVyxJQUFNLFNBQXFDO0FBQUEsRUFDakQ7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxFQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBO0FBQUEsSUFDQyxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsRUFDZDtBQUNEOzs7QUNsQk8sSUFBTSxVQUEwQztBQUFBLEVBQ3RELFdBQVc7QUFBQSxJQUNWO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUDtBQUFBLElBQ0E7QUFBQSxNQUNDLE9BQU87QUFBQSxRQUNOO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTjtBQUFBLGNBQ0MsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1A7QUFBQSxZQUNBO0FBQUEsY0FDQyxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUDtBQUFBLFlBQ0E7QUFBQSxjQUNDLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNQO0FBQUEsWUFDQTtBQUFBLGNBQ0MsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1A7QUFBQSxZQUNBO0FBQUEsY0FDQyxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUDtBQUFBLFlBQ0E7QUFBQSxjQUNDLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNQO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE9BQU87QUFBQSxRQUNOO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTjtBQUFBLGNBQ0MsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1A7QUFBQSxZQUNBO0FBQUEsY0FDQyxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUDtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxPQUFPO0FBQUEsUUFDTjtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ047QUFBQSxjQUNDLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNQO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE9BQU87QUFBQSxRQUNOO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTjtBQUFBLGNBQ0MsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1A7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNEOzs7QUYvRUEsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDM0IsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLElBQ0w7QUFBQSxNQUNDO0FBQUEsTUFDQTtBQUFBLFFBQ0MsS0FBSztBQUFBLFFBQ0wsTUFDQztBQUFBLFFBQ0QsTUFBTTtBQUFBLE1BQ1A7QUFBQSxJQUNEO0FBQUEsSUFDQSxDQUFDLFFBQVEsRUFBRSxNQUFNLFVBQVUsU0FBUyxZQUFZLENBQUM7QUFBQSxJQUNqRCxDQUFDLFFBQVEsRUFBRSxVQUFVLFdBQVcsU0FBUyxVQUFVLENBQUM7QUFBQSxJQUNwRCxDQUFDLFFBQVEsRUFBRSxNQUFNLFlBQVksU0FBUyxZQUFZLENBQUM7QUFBQSxJQUNuRCxDQUFDLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixTQUFTLHFLQUE4QixDQUFDO0FBQUEsSUFDM0U7QUFBQSxNQUNDO0FBQUEsTUFDQTtBQUFBLFFBQ0MsVUFBVTtBQUFBLFFBQ1YsU0FDQztBQUFBLE1BQ0Y7QUFBQSxJQUNEO0FBQUEsSUFDQSxDQUFDLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixTQUFTLFlBQVksQ0FBQztBQUFBLElBQ3hELENBQUMsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLFNBQVMsc0JBQXNCLENBQUM7QUFBQSxJQUNqRTtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixTQUNDO0FBQUEsTUFDRjtBQUFBLElBQ0Q7QUFBQSxJQUNBLENBQUMsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLFNBQVMsYUFBYSxDQUFDO0FBQUEsSUFDeEQsQ0FBQyxRQUFRLEVBQUUsTUFBTSxlQUFlLFNBQVMsZ0NBQWdDLENBQUM7QUFBQSxJQUMxRTtBQUFBLE1BQ0M7QUFBQSxNQUNBO0FBQUEsUUFDQyxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxNQUFNLENBQUM7QUFBQSxFQUNQLEtBQUssQ0FBQztBQUFBLEVBQ04sYUFBYTtBQUFBLElBQ1osTUFDQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ1AsVUFBVTtBQUFBLElBQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU9BLFFBQVE7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxJQUNaO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWjtBQUFBLFFBQ0MsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsUUFDQyxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLElBQ0Q7QUFBQSxJQUNBLEtBQUs7QUFBQSxJQUNMO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
