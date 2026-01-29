import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/' works for Cloudflare Pages and GitHub Pages (root deployment)
export default defineConfig({
  plugins: [react()],
  base: '/',
})

