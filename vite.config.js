import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      '/receive': 'http://localhost:3000',
      '/receive-bulk': 'http://localhost:3000',
      '/downloads': 'http://localhost:3000',
      '/api': 'http://localhost:3000',
      // VRMA Converter Proxy
      '/convert': 'http://localhost:3000',
      '/debug': 'http://localhost:3000',
      '/output': 'http://localhost:3000',
      '/downloads/vrma': 'http://localhost:3000',
      // VRM Metadata
      '^/get-vrm-meta/.*': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    }
  }
})
