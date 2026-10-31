import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/codetrios-preview/",
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
})
