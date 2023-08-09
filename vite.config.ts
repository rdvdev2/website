import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

/** @type {import('vite').UserConfig;} */
export default defineConfig({
  plugins: [vue()],
  base: '/website/',
  resolve: {
    alias: {
      '@': resolve(__dirname, "./src"),
      '@assets': resolve(__dirname, "./assets")
    }
  },
  json: {
    stringify: true
  }
})
