import { resolve } from 'node:path';
import type { UserConfig } from 'vite';

export default {
  base: '/',
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        nested: resolve(__dirname, 'src/test/index.html'),
      },
    },
  },
} satisfies UserConfig;
