import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync } from 'fs';
import { join, extname } from 'path';

const dir = './public/gallery';
const files = readdirSync(dir).filter(f => /\.(jpe?g|JPE?G)$/i.test(extname(f)));

for (const file of files) {
  const p = join(dir, file);
  const before = statSync(p).size;
  const buf = await sharp(p)
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  writeFileSync(p, buf);
  const after = statSync(p).size;
  console.log(`${file}: ${(before/1e6).toFixed(1)}MB → ${(after/1e6).toFixed(1)}MB`);
}
console.log('Done.');
