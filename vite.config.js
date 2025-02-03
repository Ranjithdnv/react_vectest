import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: '/', // Ensures correct path resolution
  // build: {
  //   rollupOptions: {
  //     input: 'index.html',
  //   },
  // },
  // server: {
  //   historyApiFallback: true, // Handles deep links in local development
  // },

})
