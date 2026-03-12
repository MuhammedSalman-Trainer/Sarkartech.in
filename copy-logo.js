import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname);
const publicDir = path.join(root, 'public');
const logoSrcLegacy = path.join(root, 'sarkartech2.png');
const logoSrcUpdatedA = path.join(root, 'updated logo.jpg');
const logoSrcUpdatedB = path.join(root, 'updated-logo.jpg');
const logoSrcUpdated = fs.existsSync(logoSrcUpdatedB)
  ? logoSrcUpdatedB
  : logoSrcUpdatedA;
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (fs.existsSync(logoSrcLegacy)) {
  fs.copyFileSync(logoSrcLegacy, path.join(publicDir, 'sarkartech2.png'));
}
if (fs.existsSync(logoSrcUpdated)) {
  fs.copyFileSync(logoSrcUpdated, path.join(publicDir, 'updated-logo.jpg'));
  console.log('Updated logo copied to public/updated-logo.jpg');
} else {
  console.log('No updated logo found; using legacy.');
}

function colorDistance(a, b) {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

async function extractCrescentLogo() {
  const src = fs.existsSync(logoSrcUpdated) ? logoSrcUpdated : logoSrcLegacy;
  const img = sharp(src);
  const meta = await img.metadata();
  const { data, info } = await img
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const channels = info.channels; // should be 4

  // Background key color: sample top-left pixel.
  const bg = [data[0], data[1], data[2]];
  const threshold = fs.existsSync(logoSrcUpdated) ? 24 : 26; // tuned for updated/legacy

  // First pass: make background-ish pixels transparent.
  for (let i = 0; i < data.length; i += channels) {
    const rgb = [data[i], data[i + 1], data[i + 2]];
    if (colorDistance(rgb, bg) <= threshold) data[i + 3] = 0;
  }

  // Bounding box of remaining pixels in the upper part (crescent area).
  let minX = w, minY = h, maxX = 0, maxY = 0;
  // Updated logo is just the mark, so scan more. Legacy has wordmark text below.
  const scanBottom = fs.existsSync(logoSrcUpdated) ? Math.floor(h * 0.95) : Math.floor(h * 0.54);
  for (let y = 0; y < scanBottom; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * channels;
      if (data[idx + 3] > 15) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  // If bbox not found, bail out gracefully.
  if (minX >= maxX || minY >= maxY) return;

  const pad = Math.round(Math.max(w, h) * 0.03);
  const extraBottom = fs.existsSync(logoSrcUpdated) ? Math.round(h * 0.03) : Math.round(h * 0.06);
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(w - 1, maxX + pad);
  maxY = Math.min(h - 1, maxY + pad + extraBottom);

  const out = await sharp(data, { raw: { width: w, height: h, channels } })
    .extract({ left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'logo-crescent.png'), out);
  console.log('Crescent logo extracted to public/logo-crescent.png');
}

await extractCrescentLogo();
