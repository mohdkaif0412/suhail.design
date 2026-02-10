#!/usr/bin/env node

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join, extname, basename } from 'path';
import { readdir, stat, mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '..', 'src', 'assets');
const OPTIMIZED_DIR = join(ASSETS_DIR, 'optimized');

// Optimization settings
const OPTIMIZATION_CONFIG = {
  // For large project images
  project: {
    jpeg: { quality: 85, progressive: true },
    webp: { quality: 80, effort: 6 },
    png: { quality: 85, compressionLevel: 9 },
    maxWidth: 1920,
    maxHeight: 1080,
  },
  // For thumbnails and smaller images
  thumbnail: {
    jpeg: { quality: 80, progressive: true },
    webp: { quality: 75, effort: 6 },
    png: { quality: 80, compressionLevel: 9 },
    maxWidth: 800,
    maxHeight: 600,
  },
  // For avatar and profile images
  avatar: {
    jpeg: { quality: 90, progressive: true },
    webp: { quality: 85, effort: 6 },
    png: { quality: 90, compressionLevel: 9 },
    maxWidth: 400,
    maxHeight: 400,
  },
};

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function getImageType(filename) {
  const name = filename.toLowerCase();
  if (name.includes('avatar') || name.includes('profile')) return 'avatar';
  if (name.includes('thumb') || name.includes('small')) return 'thumbnail';
  return 'project';
}

async function optimizeImage(inputPath, outputDir, filename) {
  const ext = extname(filename).toLowerCase();
  const nameWithoutExt = basename(filename, ext);
  const imageType = await getImageType(filename);
  const config = OPTIMIZATION_CONFIG[imageType];

  console.log(`🖼️  Optimizing ${filename} (${imageType} type)...`);

  try {
    // Get original image info
    const originalStats = await stat(inputPath);
    const originalSizeMB = (originalStats.size / 1024 / 1024).toFixed(2);

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`   Original: ${metadata.width}x${metadata.height}, ${originalSizeMB}MB`);

    // Resize if needed
    let processedImage = image;
    if (metadata.width > config.maxWidth || metadata.height > config.maxHeight) {
      processedImage = image.resize(config.maxWidth, config.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    const results = [];

    // Generate WebP (modern format, best compression)
    const webpPath = join(outputDir, `${nameWithoutExt}.webp`);
    await processedImage.clone().webp(config.webp).toFile(webpPath);

    const webpStats = await stat(webpPath);
    const webpSizeMB = (webpStats.size / 1024 / 1024).toFixed(2);
    results.push({ format: 'WebP', path: webpPath, size: webpSizeMB });

    // Generate optimized original format
    if (ext === '.jpg' || ext === '.jpeg') {
      const jpegPath = join(outputDir, `${nameWithoutExt}-optimized.jpg`);
      await processedImage.clone().jpeg(config.jpeg).toFile(jpegPath);

      const jpegStats = await stat(jpegPath);
      const jpegSizeMB = (jpegStats.size / 1024 / 1024).toFixed(2);
      results.push({ format: 'JPEG', path: jpegPath, size: jpegSizeMB });
    } else if (ext === '.png') {
      const pngPath = join(outputDir, `${nameWithoutExt}-optimized.png`);
      await processedImage.clone().png(config.png).toFile(pngPath);

      const pngStats = await stat(pngPath);
      const pngSizeMB = (pngStats.size / 1024 / 1024).toFixed(2);
      results.push({ format: 'PNG', path: pngPath, size: pngSizeMB });
    }

    // Generate thumbnail version for lazy loading
    if (imageType === 'project') {
      const thumbPath = join(outputDir, `${nameWithoutExt}-thumb.webp`);
      await sharp(inputPath)
        .resize(400, 300, { fit: 'cover' })
        .webp({ quality: 60 })
        .toFile(thumbPath);

      const thumbStats = await stat(thumbPath);
      const thumbSizeKB = (thumbStats.size / 1024).toFixed(0);
      results.push({ format: 'Thumbnail', path: thumbPath, size: `${thumbSizeKB}KB` });
    }

    console.log(`   ✅ Generated ${results.length} optimized versions:`);
    results.forEach((result) => {
      console.log(`      ${result.format}: ${result.size}`);
    });

    return results;
  } catch (error) {
    console.error(`   ❌ Error optimizing ${filename}:`, error.message);
    return [];
  }
}

async function scanAndOptimize() {
  console.log('🚀 Starting image optimization process...\n');

  await ensureDir(OPTIMIZED_DIR);

  try {
    const files = await readdir(ASSETS_DIR);
    const imageFiles = files.filter((file) => {
      const ext = extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });

    if (imageFiles.length === 0) {
      console.log('No image files found in src/assets/');
      return;
    }

    console.log(`Found ${imageFiles.length} image files to optimize:\n`);

    const results = [];
    for (const file of imageFiles) {
      const inputPath = join(ASSETS_DIR, file);
      const optimizedVersions = await optimizeImage(inputPath, OPTIMIZED_DIR, file);
      results.push({ original: file, optimized: optimizedVersions });
      console.log(''); // Empty line for readability
    }

    // Generate optimization report
    console.log('📊 OPTIMIZATION SUMMARY');
    console.log('========================');

    results.forEach(({ original, optimized }) => {
      console.log(`${original}:`);
      optimized.forEach((opt) => {
        const fileName = basename(opt.path);
        console.log(`  ✓ ${fileName} - ${opt.size}`);
      });
    });

    console.log('\n🎯 NEXT STEPS:');
    console.log('1. Review optimized images in src/assets/optimized/');
    console.log('2. Replace original images with optimized versions');
    console.log('3. Update import paths in your components');
    console.log('4. Consider using WebP format with PNG/JPEG fallbacks');
    console.log('\n💡 TIP: Use the LazyImage component for automatic format selection!');
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  scanAndOptimize();
}

export { optimizeImage, scanAndOptimize };
