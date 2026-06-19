import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // Keep this so assets load with the /Website/ prefix
  base: '/Website/',

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Revert this back to standard 'dist'
    outDir: 'dist',
    emptyOutDir: true,
  },
})
