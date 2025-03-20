import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: 'https://vladuvv-mangal-market-ee97.twc1.net',         
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://vladuvv-mangal-market-ee97.twc1.net', // Заменяем localhost на 0.0.0.0
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
