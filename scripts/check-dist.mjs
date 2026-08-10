import { access, readdir, readFile } from 'node:fs/promises';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (extname(path) === '.html') htmlFiles.push(path);
  }
}

function localTarget(href) {
  if (!href || href.startsWith('#') || /^[a-z]+:/i.test(href) || href.startsWith('//')) return null;
  const clean = href.split(/[?#]/, 1)[0];
  if (!clean) return null;
  return clean.startsWith('/') ? resolve(root, `.${clean}`) : null;
}

async function exists(path) {
  const candidates = path.endsWith('/')
    ? [join(path, 'index.html')]
    : extname(path) ? [path] : [path, `${path}.html`, join(path, 'index.html')];
  for (const candidate of candidates) {
    try { await access(candidate); return true; } catch { /* try the next route form */ }
  }
  return false;
}

await walk(root);
const failures = [];
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const target = localTarget(match[1]);
    if (target && !(await exists(target))) failures.push(`${file.slice(root.length)} -> ${match[1]}`);
  }
}

if (failures.length) {
  console.error(`Found ${failures.length} unresolved internal link(s):\n${failures.join('\n')}`);
  process.exit(1);
}
console.log(`Checked ${htmlFiles.length} generated HTML page(s); all internal links resolve.`);
