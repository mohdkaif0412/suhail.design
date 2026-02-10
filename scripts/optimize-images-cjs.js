const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;
const { existsSync } = require('fs');

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');
const OPTIMIZED_DIR = path.join(ASSETS_DIR, 'optimized');

// Optimization settings for different image types
const OPTIMIZATION_CONFIG = {
  project: {
    jpeg: { quality: 85, progressive: true },
    webp: { quality: 80, effort: 6 },
    png: { quality: 85, compressionLevel: 9 },
    maxWidth: 1920,
    maxHeight: 1080,
  },
  thumbnail: {
    jpeg: { quality: 80, progressive: true },
    webp: { quality: 75, effort: 6 },
    png: { quality: 80, compressionLevel: 9 },
    maxWidth: 800,
    maxHeight: 600,
  },
};

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function getImageType(filename) {
  const name = filename.toLowerCase();
  if (name.includes('avatar') || name.includes('profile')) return 'thumbnail';
  if (name.includes('thumb') || name.includes('small')) return 'thumbnail';
  return 'project';
}

async function optimizeImage(inputPath, outputDir, filename) {
  const ext = path.extname(filename).toLowerCase();
  const nameWithoutExt = path.basename(filename, ext);
  const imageType = await getImageType(filename);
  const config = OPTIMIZATION_CONFIG[imageType];

  console.log(`🖼️  Optimizing ${filename}...`);

  try {
    const originalStats = await fs.stat(inputPath);
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

    // Generate WebP (best compression)
    const webpPath = path.join(outputDir, `${nameWithoutExt}.webp`);
    await processedImage.clone().webp(config.webp).toFile(webpPath);

    const webpStats = await fs.stat(webpPath);
    const webpSizeMB = (webpStats.size / 1024 / 1024).toFixed(2);
    const webpSizeKB = (webpStats.size / 1024).toFixed(0);
    results.push({
      format: 'WebP',
      path: webpPath,
      size: webpSizeMB > 1 ? `${webpSizeMB}MB` : `${webpSizeKB}KB`,
    });

    // Generate optimized original format
    if (ext === '.jpg' || ext === '.jpeg') {
      const jpegPath = path.join(outputDir, `${nameWithoutExt}-optimized.jpg`);
      await processedImage.clone().jpeg(config.jpeg).toFile(jpegPath);

      const jpegStats = await fs.stat(jpegPath);
      const jpegSizeMB = (jpegStats.size / 1024 / 1024).toFixed(2);
      const jpegSizeKB = (jpegStats.size / 1024).toFixed(0);
      results.push({
        format: 'JPEG',
        path: jpegPath,
        size: jpegSizeMB > 1 ? `${jpegSizeMB}MB` : `${jpegSizeKB}KB`,
      });
    } else if (ext === '.png') {
      const pngPath = path.join(outputDir, `${nameWithoutExt}-optimized.png`);
      await processedImage.clone().png(config.png).toFile(pngPath);

      const pngStats = await fs.stat(pngPath);
      const pngSizeMB = (pngStats.size / 1024 / 1024).toFixed(2);
      const pngSizeKB = (pngStats.size / 1024).toFixed(0);
      results.push({
        format: 'PNG',
        path: pngPath,
        size: pngSizeMB > 1 ? `${pngSizeMB}MB` : `${pngSizeKB}KB`,
      });
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
    const files = await fs.readdir(ASSETS_DIR);
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png'].includes(ext) && !file.includes('optimized');
    });

    if (imageFiles.length === 0) {
      console.log('No image files found in src/assets/');
      return;
    }

    console.log(`Found ${imageFiles.length} image files to optimize:\n`);

    const results = [];
    for (const file of imageFiles) {
      const inputPath = path.join(ASSETS_DIR, file);
      const optimizedVersions = await optimizeImage(inputPath, OPTIMIZED_DIR, file);
      results.push({ original: file, optimized: optimizedVersions });
      console.log('');
    }

    // Generate summary
    console.log('📊 OPTIMIZATION SUMMARY');
    console.log('========================');

    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;

    for (const { original, optimized } of results) {
      console.log(`${original}:`);

      // Get original size
      const originalPath = path.join(ASSETS_DIR, original);
      const originalStats = await fs.stat(originalPath);
      const originalSizeMB = originalStats.size / 1024 / 1024;
      totalOriginalSize += originalSizeMB;

      optimized.forEach((opt) => {
        const fileName = path.basename(opt.path);
        console.log(`  ✓ ${fileName} - ${opt.size}`);
      });

      // Add WebP size to total
      if (optimized.length > 0) {
        const webpOpt = optimized.find((o) => o.format === 'WebP');
        if (webpOpt) {
          const webpStats = await fs.stat(webpOpt.path);
          totalOptimizedSize += webpStats.size / 1024 / 1024;
        }
      }
    }

    const sizeSavings = (
      ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) *
      100
    ).toFixed(1);
    console.log(
      `\n💾 TOTAL SAVINGS: ${totalOriginalSize.toFixed(2)}MB → ${totalOptimizedSize.toFixed(
        2
      )}MB (${sizeSavings}% reduction)`
    );

    console.log('\n🎯 NEXT STEPS:');
    console.log('1. Review optimized images in src/assets/optimized/');
    console.log('2. Update your components to use the optimized images');
    console.log('3. Use WebP format for best performance');
    console.log('4. Run "npm run build" to see the improvement!');
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

scanAndOptimize();
