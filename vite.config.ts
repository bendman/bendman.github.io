import { resolve } from 'node:path';
import type { UserConfig } from 'vite';

export default {
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
} satisfies UserConfig;
