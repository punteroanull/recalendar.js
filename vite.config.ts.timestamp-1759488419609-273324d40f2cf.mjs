// vite.config.ts
import path from "path";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import i18nextLoader from "file:///home/project/node_modules/vite-plugin-i18next-loader/dist/index.js";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: "./create.html"
      }
    }
  },
  plugins: [
    i18nextLoader({ paths: ["./src/locales"], namespaceResolution: "basename" }),
    react()
  ],
  resolve: {
    alias: {
      "~": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  worker: {
    format: "es",
    plugins: () => [
      i18nextLoader({ paths: ["./src/locales"], namespaceResolution: "basename" }),
      react()
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGkxOG5leHRMb2FkZXIgZnJvbSAndml0ZS1wbHVnaW4taTE4bmV4dC1sb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoIHtcblx0YnVpbGQ6IHtcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRpbnB1dDoge1xuXHRcdFx0XHRhcHA6ICcuL2NyZWF0ZS5odG1sJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0cGx1Z2luczogW1xuXHRcdGkxOG5leHRMb2FkZXIoIHsgcGF0aHM6IFsgJy4vc3JjL2xvY2FsZXMnIF0sIG5hbWVzcGFjZVJlc29sdXRpb246ICdiYXNlbmFtZScgfSApLFxuXHRcdHJlYWN0KCksXG5cdF0sXG5cdHJlc29sdmU6IHtcblx0XHRhbGlhczoge1xuXHRcdFx0J34nOiBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgJ3NyYycgKSxcblx0XHR9LFxuXHR9LFxuXHR3b3JrZXI6IHtcblx0XHRmb3JtYXQ6ICdlcycsXG5cdFx0cGx1Z2luczogKCkgPT4gW1xuXHRcdFx0aTE4bmV4dExvYWRlciggeyBwYXRoczogWyAnLi9zcmMvbG9jYWxlcycgXSwgbmFtZXNwYWNlUmVzb2x1dGlvbjogJ2Jhc2VuYW1lJyB9ICksXG5cdFx0XHRyZWFjdCgpLFxuXHRcdF0sXG5cdH0sXG59ICk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLE9BQU8sVUFBVTtBQUUxTyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFKMUIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFjO0FBQUEsRUFDNUIsT0FBTztBQUFBLElBQ04sZUFBZTtBQUFBLE1BQ2QsT0FBTztBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ047QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsY0FBZSxFQUFFLE9BQU8sQ0FBRSxlQUFnQixHQUFHLHFCQUFxQixXQUFXLENBQUU7QUFBQSxJQUMvRSxNQUFNO0FBQUEsRUFDUDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBSyxLQUFLLFFBQVMsa0NBQVcsS0FBTTtBQUFBLElBQ3JDO0FBQUEsRUFDRDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsU0FBUyxNQUFNO0FBQUEsTUFDZCxjQUFlLEVBQUUsT0FBTyxDQUFFLGVBQWdCLEdBQUcscUJBQXFCLFdBQVcsQ0FBRTtBQUFBLE1BQy9FLE1BQU07QUFBQSxJQUNQO0FBQUEsRUFDRDtBQUNELENBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
