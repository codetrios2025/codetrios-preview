import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  css: {
    modules: {
      generateScopedName: "[local]",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) {
            return "react-vendor";
          }
          if (/\/node_modules\/react-router(?:-dom)?\//.test(id)) {
            return "router-vendor";
          }
          if (/\/node_modules\/(bootstrap|react-bootstrap)\//.test(id)) {
            return "bootstrap-vendor";
          }
        },
      },
    },
  },
})
