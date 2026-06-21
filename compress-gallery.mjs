import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync } from 'fs';
import { join, extname } from 'path';

const srcDir = './assets';
const outDir = './public/gallery';
const files = readdirSync(srcDir).filter(f => /\.(jpe?g|JPE?G)$/i.test(extname(f)));

for (const file of files) {
  const src = join(srcDir, file);
  const p = join(outDir, file);
  const before = statSync(src).size;
  const buf = await sharp(src)
    .rotate()                                         // apply EXIF orientation
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  writeFileSync(p, buf);
  const after = statSync(p).size;
  console.log(`${file}: ${(before/1e6).toFixed(1)}MB → ${(after/1e6).toFixed(1)}MB`);
}
console.log('Done.');
