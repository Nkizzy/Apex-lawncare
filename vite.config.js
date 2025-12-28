import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages configuration for tips-and-toes-salon repository
// Base path must match repository name for proper asset loading
export default defineConfig({
  plugins: [react()],
  base: '/tips-and-toes-salon/',
})

