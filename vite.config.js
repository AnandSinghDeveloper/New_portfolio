import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// <<<<<<< HEAD

// =======
// >>>>>>> 2beddb746d7056c9db4222599fc2c3349cbb832b

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ["framer-motion", "motion"], 
  },
  build: {
    commonjsOptions: {
// <<<<<<< HEAD
//       transformMixedEsModules: true,
//     },
//     chunkSizeWarningLimit: 1600,
// =======
      transformMixedEsModules: true, 
    },
    chunkSizeWarningLimit: 1600, 
// >>>>>>> 2beddb746d7056c9db4222599fc2c3349cbb832b
  },
});
