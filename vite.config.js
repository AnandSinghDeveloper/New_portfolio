import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["framer-motion", "motion"], // don’t prebundle these (avoids "use client" warnings)
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // make sure mixed ESM/CJS works
    },
    chunkSizeWarningLimit: 1600, // silence large bundle warnings
  },
});
