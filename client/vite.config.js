import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Adjust the path based on your actual project structure
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx'], // Add .jsx if not already present
  },
});
