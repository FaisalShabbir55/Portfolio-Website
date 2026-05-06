import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// For GitHub Pages: use repo name as base path when BASE_PATH env is set
// e.g. BASE_PATH=/Portfolio-Website/ for https://username.github.io/Portfolio-Website/
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

