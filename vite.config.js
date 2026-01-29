import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH: set in GitHub Actions to repo name (e.g. /Apex-lawncare/) so assets load on GitHub Pages.
// Unset for local/Cloudflare builds → base: '/' (root).
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})

