import { copyFile, mkdir, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, '../../cv/cv.pdf');
const destination = resolve(here, '../public/downloads/santiago-cuervo-cv.pdf');

try {
  await stat(source);
} catch {
  throw new Error(`Styled CV not found at ${source}. Compile it with \`make -C ../cv\` first.`);
}

await mkdir(dirname(destination), { recursive: true });
await copyFile(source, destination);
console.log(`Synced ${source} -> ${destination}`);
