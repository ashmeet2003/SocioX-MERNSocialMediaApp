import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://sociox-backend.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      // Adjust the path based on your actual project structure
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx'], // Add .jsx if not already present
  },
});
