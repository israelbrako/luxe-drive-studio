import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 1. Adds the required /Website/ routing prefix to all assets
  base: '/Website/',

  plugins: [react()],

  resolve: {
    alias: {
      // 2. Preserves your shadcn/ui and path aliases (uses the @/ prefix)
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // 3. Forces Vite to compile everything into a subfolder named Website
    outDir: 'dist/Website',
    emptyOutDir: true,
  },
})
