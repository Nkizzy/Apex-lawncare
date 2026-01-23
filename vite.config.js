import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages configuration
// Base path must match repository name for proper asset loading
export default defineConfig({
  plugins: [react()],
  base: '/sample-lawncare-website/',
})

