import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { manifest } from './src/manifest.js';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'Chrome Manifest',
      generateBundle(option, bundle) {
        this.emitFile({
          type: 'asset',
          fileName: 'manifest.json',
          source: JSON.stringify(manifest)
        });
      }
    }
  ],
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'index': path.resolve(__dirname, 'src/index.html'),
        'background': path.resolve(__dirname, 'src/background/background.js'),
      },
      output: {
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
            return 'assets/images/[name][extname]';
          }
          return 'assets/[name][extname]'
        },
      },
    },
  },
})
