/// <reference types="vite/client" />
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '~variables': path.resolve(__dirname, './src/global/scss/variables.sass'),
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    istanbul({
      cypress: true,
      include: 'src/*',
      extension: ['.tsx', '.ts', 'js', 'jsx'],
      requireEnv: false,
    }),
  ],
  build: {
    sourcemap: true,
  },
  test: {
    // globals: true,
    // environment: 'jsdom',
    // setupFiles: ['./src/setupTests.ts'],
    coverage: {
      reporter: ['text', 'lcov'],
      // exclude: [
      //   'src/**/*.test.tsx',
      //   'src/**/*.test.ts',
      //   'src/**/index.ts',
      //   'src/**/_constants.ts',
      //   'src/**/_types.ts',
      //   'src/**/setupTests.ts',
      //   'src/**/mockUnsplash.ts',
      // ],
    },
  },
});
