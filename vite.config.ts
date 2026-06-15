import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5182,
    strictPort: true,
    host: 'localhost',
    hmr: {
      host: 'localhost',
      port: 5182,
    },
  },
  preview: {
    port: 5182,
    strictPort: true,
    host: 'localhost',
  },
});
