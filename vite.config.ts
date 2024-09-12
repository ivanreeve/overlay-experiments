import { defineConfig } from "vite"

import path from "path"
import react from "@vitejs/plugin-react-swc"

import tailwindcss from "tailwindcss"
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
