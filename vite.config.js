import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))
let homepageBase = '/'
try {
  if (pkg.homepage) {
    const url = new URL(pkg.homepage)
    homepageBase = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`
  }
} catch (e) {}

export default defineConfig({
  base: process.env.BASE || homepageBase,
  plugins: [react()],
})
