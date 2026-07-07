import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, parse } from 'path';
import { existsSync } from 'fs';

const PROJECT_ROOT = 'c:/projects/ATOM';
const PUBLIC_DIR = 'c:/projects/ATOM/atom-static-web-next.js/public';

async function convertFolder(srcFolder, destFolder, quality = 85) {
  const srcPath = join(PROJECT_ROOT, srcFolder);
  const destPath = join(PUBLIC_DIR, destFolder);

  if (!existsSync(destPath)) {
    await mkdir(destPath, { recursive: true });
  }

  const files = await readdir(srcPath);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp|bmp|tiff?)$/i.test(f));

  console.log(`\nConverting ${imageFiles.length} images from "${srcFolder}" → public/${destFolder}`);

  for (const file of imageFiles) {
    const { name } = parse(file);
    const srcFile = join(srcPath, file);
    const destFile = join(destPath, `${name}.webp`);

    try {
      await sharp(srcFile)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality })
        .toFile(destFile);
      console.log(`  ✓ ${file} → ${name}.webp`);
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }
}

// Convert A+ folder (student photos for A+ Results)
await convertFolder('A+', 'results/aplus');

// Convert entrance folder (entrance exam results with percentages in filename)
await convertFolder('entrance', 'results/entrance');

console.log('\n✅ Done! All images converted to WebP.');
