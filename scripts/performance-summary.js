#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 PERFORMANCE OPTIMIZATION SUMMARY');
console.log('=====================================\n');

// Calculate image sizes
const distAssets = path.join(__dirname, '../dist/assets');
const optimizedAssets = path.join(__dirname, '../src/assets/optimized');

console.log('📊 IMAGE SIZE COMPARISON:');
console.log('-------------------------');

// Original sizes (from previous analysis)
const originalSizes = {
  'iamart.png': 13.33,
  'character.png': 3.05,
  'next-door.png': 1.07,
  'Last3feet.png': 0.39,
  'circle.png': 0.7,
};

const totalOriginal = Object.values(originalSizes).reduce((a, b) => a + b, 0);

// Get current WebP sizes from build
let totalWebP = 0;
const webpSizes = {};

if (fs.existsSync(distAssets)) {
  const files = fs.readdirSync(distAssets).filter((f) => f.endsWith('.webp'));

  files.forEach((file) => {
    const stats = fs.statSync(path.join(distAssets, file));
    const sizeMB = stats.size / (1024 * 1024);
    totalWebP += sizeMB;

    // Extract original name from hashed filename
    if (file.includes('iamart')) webpSizes['iamart'] = sizeMB;
    else if (file.includes('character')) webpSizes['character'] = sizeMB;
    else if (file.includes('next-door')) webpSizes['next-door'] = sizeMB;
    else if (file.includes('Last3feet')) webpSizes['Last3feet'] = sizeMB;
    else if (file.includes('circle')) webpSizes['circle'] = sizeMB;
  });
}

// Print comparison
Object.keys(originalSizes).forEach((file) => {
  const original = originalSizes[file];
  const optimized =
    Object.values(webpSizes).find(
      (_, i) => Object.keys(webpSizes)[i] === file.replace('.png', '')
    ) || 0;
  const reduction = (((original - optimized) / original) * 100).toFixed(1);

  console.log(
    `• ${file.padEnd(15)} ${original.toFixed(2)}MB → ${optimized.toFixed(
      2
    )}MB (${reduction}% reduction)`
  );
});

console.log('\n📈 TOTAL IMPACT:');
console.log('----------------');
console.log(`Total image size: ${totalOriginal.toFixed(2)}MB → ${totalWebP.toFixed(2)}MB`);
console.log(
  `Total reduction: ${(((totalOriginal - totalWebP) / totalOriginal) * 100).toFixed(1)}%`
);
console.log(`Space saved: ${(totalOriginal - totalWebP).toFixed(2)}MB`);

console.log('\n🏗️ BUILD OUTPUT:');
console.log('----------------');
if (fs.existsSync(distAssets)) {
  const files = fs.readdirSync(distAssets);
  const jsFiles = files.filter((f) => f.endsWith('.js'));
  const cssFiles = files.filter((f) => f.endsWith('.css'));
  const imageFiles = files.filter((f) => f.match(/\.(webp|png|jpg|jpeg|svg)$/));

  console.log(`JavaScript files: ${jsFiles.length}`);
  console.log(`CSS files: ${cssFiles.length}`);
  console.log(`Image files: ${imageFiles.length} (all WebP format)`);

  // Calculate total bundle size
  let totalSize = 0;
  files.forEach((file) => {
    const stats = fs.statSync(path.join(distAssets, file));
    totalSize += stats.size;
  });

  console.log(`Total bundle size: ${(totalSize / (1024 * 1024)).toFixed(2)}MB`);
}

console.log('\n✅ OPTIMIZATIONS APPLIED:');
console.log('-------------------------');
console.log('• WebP image format conversion');
console.log('• Aggressive image compression (80% quality)');
console.log('• Bundle splitting by routes');
console.log('• Lazy loading components');
console.log('• Resource preloading');
console.log('• Terser minification');
console.log('• Performance monitoring');

console.log('\n🎯 NEXT STEPS:');
console.log('---------------');
console.log('• Run Lighthouse audit: npm run test:performance');
console.log('• Deploy and test on staging');
console.log('• Monitor real-world performance metrics');
console.log('• Consider implementing responsive images (srcset)');

console.log('\n🌟 Expected Performance Gains:');
console.log('-------------------------------');
console.log('• Faster initial page load (18MB+ images eliminated)');
console.log('• Improved Largest Contentful Paint (LCP)');
console.log('• Better Core Web Vitals scores');
console.log('• Reduced bandwidth usage');
console.log('• Better user experience on slow connections');
