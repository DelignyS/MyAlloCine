import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default {
  base: './', // Use relative paths
  build: {
    outDir: 'dist',
    assetsDir: './', // Use relative paths
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`, // Use predictable file names
        chunkFileNames: `[name].js`, // Use predictable file names
        assetFileNames: `[name].[ext]` // Use predictable file names
      }
    }
  }
}