import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    // Bundle analyzer - only in production
    process.env.ANALYZE &&
      visualizer({
        filename: 'dist/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    // Plugin to copy _redirects file after build
    {
      name: 'copy-redirects',
      closeBundle() {
        const sourceFile = resolve(__dirname, 'public/_redirects');
        const destDir = resolve(__dirname, 'dist');
        const destFile = resolve(destDir, '_redirects');

        if (existsSync(sourceFile)) {
          if (!existsSync(destDir)) {
            mkdirSync(destDir, { recursive: true });
          }
          copyFileSync(sourceFile, destFile);
          console.log('✓ _redirects file copied to dist/');
        }
      },
    },
    // Image optimization plugin
    {
      name: 'image-optimization',
      generateBundle(options, bundle) {
        // Log large images for manual optimization
        Object.keys(bundle).forEach((fileName) => {
          const file = bundle[fileName];
          if (file.type === 'asset' && /\.(png|jpg|jpeg|gif|webp)$/.test(fileName)) {
            const sizeInKB = file.source ? file.source.length / 1024 : 0;
            if (sizeInKB > 500) {
              console.warn(`⚠️  Large image detected: ${fileName} (${sizeInKB.toFixed(2)} KB)`);
              console.log(`   Consider optimizing this image or converting to WebP format`);
            }
          }
        });
      },
    },
  ],
  // SEO and Performance optimizations
  build: {
    // Generate source maps only in development
    sourcemap: process.env.NODE_ENV === 'development',
    // Enable minification for better performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    }, // Optimize chunk splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          vendor: ['react', 'react-dom'],
          // Animation libraries (heavy)
          animations: ['framer-motion', 'motion'],
          // Icon libraries (many icons)
          icons: ['react-icons', '@heroicons/react', 'lucide-react'],
          // i18n related
          i18n: [
            'i18next',
            'react-i18next',
            'i18next-browser-languagedetector',
            'i18next-http-backend',
          ],
          // Router
          router: ['react-router-dom'],
          // Performance monitoring
          monitoring: ['web-vitals'],
        },
      },
    },
    // Increase chunk size warning limit but optimize chunks
    chunkSizeWarningLimit: 600,
  },

  // Server configuration for development
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true, // Enable SPA routing in development
  },

  // Preview configuration
  preview: {
    port: 3000,
    open: true,
    historyApiFallback: true, // Enable SPA routing in preview
  },

  // Define environment variables
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
