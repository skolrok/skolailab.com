import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  // 1. Določimo korensko mapo (root)
  const rootDir = __dirname;
  
  // 2. Preberemo vse datoteke v korenski mapi
  const files = fs.readdirSync(rootDir);
  
  // 3. Filtriramo samo .html datoteke
  const htmlFiles = files.filter(file => file.endsWith('.html'));
  
  // 4. Zgradimo objekt za rollupOptions.input
  const inputFiles: Record<string, string> = {};
  htmlFiles.forEach(file => {
    // Ime ključa bo ime datoteke brez končnice (npr. 'index', 'storitve')
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
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      rollupOptions: {
        // 5. Vite-u povemo, naj zgradi vse najdene HTML datoteke
        input: inputFiles,
      },
    },
  };
});
