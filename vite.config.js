import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is a GitHub project page at greenythebeany.github.io/me, so every
// asset URL has to be prefixed with the repo name.
export default defineConfig({
  base: '/me/',
  plugins: [react()],
  build: { outDir: 'dist', assetsDir: 'assets' },
})
