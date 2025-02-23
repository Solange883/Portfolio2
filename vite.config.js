import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base: process.env.VERCEL ? "/" : "/Portfolio2/", // "/" pour Vercel, "/Portfolio2/" pour GitHub Pages
  plugins: [react()],
 
 
})
