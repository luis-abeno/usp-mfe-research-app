import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import qiankun from 'vite-plugin-qiankun';

const useDevMode = true;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    useDevMode ? [] : react(),
    qiankun('mfe-jupiter', {
      useDevMode,
    }),
  ],
  server: {
    port: 5175,
    origin: 'http://localhost:5175',
    open: false,
  },
});
