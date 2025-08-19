import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import history from "connect-history-api-fallback";


function spaFallback() {
  return {
    name: "spa-fallback",
    configureServer(server) {
      server.middlewares.use(
        history({
          index: "/index.html",
        })
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), tsconfigPaths(), spaFallback()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3002, 
    open: false,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api/v1"),
      },
    },
  },
  build: {
   
  },
});
