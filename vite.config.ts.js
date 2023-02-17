import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import eslint from 'vite-plugin-eslint';
import StylelintPlugin from 'vite-plugin-stylelint';
import svgr from 'vite-plugin-svgr';

var vite_config = defineConfig({
  plugins: [
    react(),
    eslint(),
    svgr(),
    StylelintPlugin({
      fix: false,
      quiet: false
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", "file://C:/Users/Thomas/projects/react-enterprise-boilerplate/vite.config.ts")),
      "test-utils": fileURLToPath(new URL("./src/helpers/test-utils.tsx", "file://C:/Users/Thomas/projects/react-enterprise-boilerplate/vite.config.ts"))
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
