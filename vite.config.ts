/// <reference types="vite/client" />
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '~app/*': path.resolve(__dirname, './src/app/'),
      '~assets/*': path.resolve(__dirname, './src/assets/'),
      '~compos/*': path.resolve(__dirname, './src/components/'),
      '~pages/*': path.resolve(__dirname, './src/pages/'),
      '~variables': path.resolve(__dirname, './src/global/scss/variables.sass'),
      '~global/*': path.resolve(__dirname, './src/global/'),
      '~services/*': path.resolve(__dirname, './src/services/'),
      '~context/*': path.resolve(__dirname, './src/context/'),
      '~hook/*': path.resolve(__dirname, './src/hook/'),
      '~helpers/*': path.resolve(__dirname, './src/helpers/'),
    },
  },
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: ['src/**/*.test.tsx', 'src/**/*.ts'],
    },
  },
});
