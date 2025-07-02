import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/image-qr-code/',
  build: {
    outDir: "docs", // Output build to /docs
  },
});
