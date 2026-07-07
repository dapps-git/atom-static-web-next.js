import sharp from 'sharp';
import { join } from 'path';

const SRC_DIR = 'c:/projects/ATOM/A+';
const DEST_DIR = 'c:/projects/ATOM/atom-static-web-next.js/public/results/aplus';

async function testTrim(filename) {
  const srcFile = join(SRC_DIR, filename);
  const destFile = join(DEST_DIR, filename.replace(/\.(png|jpe?g)$/i, '.webp'));

  try {
    // We trim with a threshold of 10 to be safe and trim white/near-white space
    await sharp(srcFile)
      .trim({ background: '#ffffff', threshold: 10 })
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(destFile);
    console.log(`Successfully trimmed and saved: ${destFile}`);
  } catch (err) {
    console.error(`Error trimming ${filename}:`, err);
  }
}

async function run() {
  await testTrim('NIVEDITHA MR.png');
  await testTrim('MOHAMMED SHIFIN.png');
  await testTrim('RIFA MEHRIN.png');
}

run();
