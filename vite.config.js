import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Happy-Doggo-Dashboard/',
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
})
