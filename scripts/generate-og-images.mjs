/**
 * Generates static OG images (1200x630) for each main page.
 * Run with: node scripts/generate-og-images.mjs
 * Requires: sharp (already in devDependencies)
 */

import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'public', 'og');
const W = 1200;
const H = 630;

const pages = [
  {
    filename: 'home.jpg',
    title: 'Mohd Suhail',
    subtitle: 'UI/UX & Product Designer',
    accent: [96, 165, 250],   // blue-400
  },
  {
    filename: 'about.jpg',
    title: 'My Journey',
    subtitle: 'Background & Experience',
    accent: [168, 85, 247],   // purple-500
  },
  {
    filename: 'projects.jpg',
    title: 'Case Studies',
    subtitle: 'UI/UX Design Portfolio',
    accent: [255, 138, 0],    // brand orange
  },
  {
    filename: 'services.jpg',
    title: 'Services',
    subtitle: 'Product Design & UX',
    accent: [52, 211, 153],   // emerald-400
  },
];

const BG = [18, 18, 18];

function lerp(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function xmlEscape(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function generateOGImage({ filename, title, subtitle, accent }) {
  const safeTitle = xmlEscape(title);
  const safeSubtitle = xmlEscape(subtitle);
  const pixels = new Uint8ClampedArray(W * H * 3);

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 3;
      // Subtle diagonal gradient overlay
      const t = (x / W + y / H) * 0.15;
      pixels[i]     = lerp(BG[0], accent[0], t * 0.3);
      pixels[i + 1] = lerp(BG[1], accent[1], t * 0.3);
      pixels[i + 2] = lerp(BG[2], accent[2], t * 0.3);
    }
  }

  // Accent bar at top (4px)
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 3;
      const t = x / W;
      pixels[i]     = lerp(accent[0], 168, t);
      pixels[i + 1] = lerp(accent[1], 85, t);
      pixels[i + 2] = lerp(accent[2], 247, t);
    }
  }

  const rawImg = await sharp(Buffer.from(pixels.buffer), {
    raw: { width: W, height: H, channels: 3 },
  })
    .jpeg({ quality: 90 })
    .toBuffer();

  // Composite SVG text overlay
  const titleFontSize = title.length > 20 ? 80 : 96;
  const svgOverlay = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .domain { font-family: monospace; font-size: 22px; fill: rgba(255,255,255,0.45); letter-spacing: 0.08em; }
          .badge  { font-family: sans-serif; font-size: 16px; fill: rgba(255,255,255,0.55); letter-spacing: 0.12em; }
          .title  { font-family: sans-serif; font-weight: 700; font-size: ${titleFontSize}px; fill: #ffffff; }
          .sub    { font-family: sans-serif; font-size: 32px; fill: rgba(255,255,255,0.65); }
        </style>
      </defs>

      <!-- Domain badge top-right -->
      <text x="${W - 40}" y="48" text-anchor="end" class="domain">suhail.design</text>

      <!-- Role pill -->
      <rect x="${W / 2 - 160}" y="${H / 2 - 145}" width="320" height="44" rx="22"
            fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
      <text x="${W / 2}" y="${H / 2 - 114}" text-anchor="middle" class="badge">UI/UX + PRODUCT DESIGNER</text>

      <!-- Main title -->
      <text x="${W / 2}" y="${H / 2 + 20}" text-anchor="middle" class="title">${safeTitle}</text>

      <!-- Subtitle -->
      <text x="${W / 2}" y="${H / 2 + 80}" text-anchor="middle" class="sub">${safeSubtitle}</text>
    </svg>
  `;

  const svgBuf = Buffer.from(svgOverlay);

  const outPath = path.join(OUT_DIR, filename);
  await sharp(rawImg)
    .composite([{ input: svgBuf, top: 0, left: 0 }])
    .jpeg({ quality: 90 })
    .toFile(outPath);

  console.log(`  ✓ ${filename}`);
}

async function main() {
  if (!existsSync(OUT_DIR)) {
    await mkdir(OUT_DIR, { recursive: true });
  }

  console.log('Generating OG images...');
  for (const page of pages) {
    await generateOGImage(page);
  }
  console.log(`Done — 4 images written to public/og/`);
}

main().catch((err) => { console.error(err); process.exit(1); });
