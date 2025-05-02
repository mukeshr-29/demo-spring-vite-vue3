import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: '../../../../target/classes/static/vite-project', // Kept as is
    emptyOutDir: true
  },
  base: '/v/', // Changed to match Vue Router and deployment
  define: {
    'process.env.VUE_ROUTER_BASE': '"/v/"' // Correct
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})