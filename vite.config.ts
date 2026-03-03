import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  // Poiščemo vse .html datoteke v root mapi
  const rootDir = __dirname;
  const files = fs.readdirSync(rootDir);
  const htmlFiles = files.filter(file => file.endsWith('.html'));
  
  const inputFiles: Record<string, string> = {};
  htmlFiles.forEach(file => {
    const name = path.basename(file, '.html');
    inputFiles[name] = path.resolve(rootDir, file);
  });

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      rollupOptions: {
        input: inputFiles,
      },
    },
  };
});
