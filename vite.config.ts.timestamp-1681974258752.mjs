// vite.config.ts
import react from "file:///D:/it/RS-school/react-2023-Q1/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig } from "file:///D:/it/RS-school/react-2023-Q1/node_modules/vite/dist/node/index.js";
import istanbul from "file:///D:/it/RS-school/react-2023-Q1/node_modules/vite-plugin-istanbul/dist/index.mjs";
import tsconfigPaths from "file:///D:/it/RS-school/react-2023-Q1/node_modules/vite-tsconfig-paths/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\it\\RS-school\\react-2023-Q1";
var vite_config_default = defineConfig({
  base: "/",
  resolve: {
    alias: {
      "~variables": path.resolve(__vite_injected_original_dirname, "./src/global/scss/variables.sass")
    }
  },
  server: {
    host: true,
    port: 3e3
  },
  plugins: [
    react(),
    tsconfigPaths(),
    istanbul({
      cypress: true,
      requireEnv: false
    })
  ],
  build: {
    sourcemap: true
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      reporter: ["text", "lcov"],
      exclude: [
        "src/**/*.test.tsx",
        "src/**/*.test.ts",
        "src/**/index.ts",
        "src/**/_constants.ts",
        "src/**/_types.ts",
        "src/**/setupTests.ts",
        "src/**/mockUnsplash.ts"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxpdFxcXFxSUy1zY2hvb2xcXFxccmVhY3QtMjAyMy1RMVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcaXRcXFxcUlMtc2Nob29sXFxcXHJlYWN0LTIwMjMtUTFcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2l0L1JTLXNjaG9vbC9yZWFjdC0yMDIzLVExL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlL2NsaWVudFwiIC8+XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGlzdGFuYnVsIGZyb20gJ3ZpdGUtcGx1Z2luLWlzdGFuYnVsJztcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiAnLycsXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ352YXJpYWJsZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvZ2xvYmFsL3Njc3MvdmFyaWFibGVzLnNhc3MnKSxcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiB0cnVlLFxuICAgIHBvcnQ6IDMwMDAsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICBpc3RhbmJ1bCh7XG4gICAgICBjeXByZXNzOiB0cnVlLFxuICAgICAgcmVxdWlyZUVudjogZmFsc2UsXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiB0cnVlLFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBzZXR1cEZpbGVzOiBbJy4vc3JjL3NldHVwVGVzdHMudHMnXSxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgcmVwb3J0ZXI6IFsndGV4dCcsICdsY292J10sXG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgICdzcmMvKiovKi50ZXN0LnRzeCcsXG4gICAgICAgICdzcmMvKiovKi50ZXN0LnRzJyxcbiAgICAgICAgJ3NyYy8qKi9pbmRleC50cycsXG4gICAgICAgICdzcmMvKiovX2NvbnN0YW50cy50cycsXG4gICAgICAgICdzcmMvKiovX3R5cGVzLnRzJyxcbiAgICAgICAgJ3NyYy8qKi9zZXR1cFRlc3RzLnRzJyxcbiAgICAgICAgJ3NyYy8qKi9tb2NrVW5zcGxhc2gudHMnLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBR0EsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGNBQWM7QUFDckIsT0FBTyxtQkFBbUI7QUFQMUIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsY0FBYyxLQUFLLFFBQVEsa0NBQVcsa0NBQWtDO0FBQUEsSUFDMUU7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMscUJBQXFCO0FBQUEsSUFDbEMsVUFBVTtBQUFBLE1BQ1IsVUFBVSxDQUFDLFFBQVEsTUFBTTtBQUFBLE1BQ3pCLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
