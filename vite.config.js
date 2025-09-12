import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Tailwind plugin
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ add tailwindcss plugin
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/Components"),
      "@sections": path.resolve(__dirname, "./src/section"),
    },
  },
  optimizeDeps: {
    exclude: ["framer-motion", "motion"], // ignore use client warnings
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    chunkSizeWarningLimit: 1600, // increase chunk warning limit
  },
});
