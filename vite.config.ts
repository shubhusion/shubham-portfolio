import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  appType: 'mpa',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        prentline: fileURLToPath(new URL('prentline.html', import.meta.url)),
        aarthiksetu: fileURLToPath(new URL('aarthik-setu.html', import.meta.url)),
        lumenslate: fileURLToPath(new URL('lumenslate.html', import.meta.url)),
        karum: fileURLToPath(new URL('karum.html', import.meta.url)),
      },
    },
  },
})
