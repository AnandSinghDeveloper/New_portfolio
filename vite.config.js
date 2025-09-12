import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ["framer-motion", "motion"], 
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, 
    },
    chunkSizeWarningLimit: 1600, 
  },
});
