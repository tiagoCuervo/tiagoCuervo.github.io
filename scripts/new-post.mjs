import { copyFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';

const slug = process.argv[2];
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error('Usage: npm run new:post -- lowercase-hyphenated-title');
  process.exit(1);
}

const source = resolve('src/content/writing/_template.mdx');
const destination = resolve(`src/content/writing/${slug}.mdx`);

try {
  await access(destination);
  console.error(`A post already exists at src/content/writing/${slug}.mdx`);
  process.exit(1);
} catch {
  await copyFile(source, destination);
  console.log(`Created src/content/writing/${slug}.mdx`);
}
