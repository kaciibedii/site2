import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
   // ✅ Set correct base path for GitHub Pages
  publicDir: path.resolve(__dirname, "public"), // ✅ Ensure public files (like favicon) are copied
  build: {
    outDir: path.resolve(__dirname, "dist"), // ✅ Fix output directory for GitHub Pages
    emptyOutDir: true,
  },
});

