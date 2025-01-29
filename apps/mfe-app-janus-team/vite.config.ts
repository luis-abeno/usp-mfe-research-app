import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_URL,
  plugins: [vue(), qiankun('mfe-janus', {
    useDevMode: true,
  })],
  server: {
    watch: {
      usePolling: true,
    },
    hmr: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
