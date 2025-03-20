import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: true,         
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://vladuvv-mangal-market-ee97.twc1.net', 
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    allowedHosts: ['vladuvv-mangal-market-ee97.twc1.net'],
  },
  
  plugins: [
    react(),
    mode !== 'production' && componentTagger(), 
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
