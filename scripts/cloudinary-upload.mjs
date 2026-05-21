import { v2 as cloudinary } from 'cloudinary';

const [imageUrl, publicId] = process.argv.slice(2);

if (!imageUrl || !publicId) {
  console.error('Usage: node scripts/cloudinary-upload.mjs <imageUrl> <publicId>');
  process.exit(1);
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error('Missing Cloudinary env vars: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET');
  process.exit(1);
}

const uploadResult = await cloudinary.uploader.upload(imageUrl, {
  public_id: publicId,
});

console.log('Uploaded:', uploadResult.secure_url);

const optimizedUrl = cloudinary.url(publicId, {
  fetch_format: 'auto',
  quality: 'auto',
});

console.log('Optimized:', optimizedUrl);
