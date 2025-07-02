import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "docs", // Output build to /docs
    assetsDir: "static", // Rename assets directory to /docs/static
  },
});
