import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: '0.0.0.0',         
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:3500', // Заменяем localhost на 0.0.0.0
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  
  plugins: [
    react(),
    mode !== 'production' && componentTagger(), // Более надежная проверка
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
