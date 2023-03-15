import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '~app/*': path.resolve(__dirname, './src/app/'),
      '~assets/*': path.resolve(__dirname, './src/assets/'),
      '~compos/*': path.resolve(__dirname, './src/components/'),
      '~variables': path.resolve(__dirname, './src/global/scss/variables.sass'),
    },
  },
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
