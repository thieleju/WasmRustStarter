import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
  assetsInclude: ["**/*.wasm"],
});
