import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

var vite_config = defineConfig({
  plugins: [
    react(),
    eslint(),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": "./src",
      "test-utils": "./src/helpers/test-utils.tsx"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"]
    },
    setupFiles: ["./vitest.setup.ts"]
  }
});

export default vite_config;
