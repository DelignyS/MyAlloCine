import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default {
  base: './', // Use relative paths
  build: {
    outDir: 'dist',
    assetsDir: './', // Use relative paths
  }
}