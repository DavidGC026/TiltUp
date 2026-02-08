import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
      ? [
        await import("@replit/vite-plugin-cartographer").then((m) =>
          m.cartographer(),
        ),
        await import("@replit/vite-plugin-dev-banner").then((m) =>
          m.devBanner(),
        ),
      ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      plugins: [
        {
          name: 'copy-cmaps',
          writeBundle() {
            try {
              const outDir = path.resolve(__dirname, "dist");
              const cmapsSrc = path.resolve(__dirname, "node_modules/pdfjs-dist/cmaps");
              execSync(`mkdir -p "${outDir}/cmaps" && cp "${cmapsSrc}"/*.bcmap "${outDir}/cmaps/" 2>/dev/null || true`);
            } catch (e) {
              console.warn('Could not copy cmaps:', e);
            }
          }
        }
      ]
    }
  },
  server: {
    proxy: {
      '/TiltUp/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/TiltUp/, ''),
      },
    },
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    proxy: {
      '/TiltUp/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/TiltUp/, ''),
      },
    },
  },
});
