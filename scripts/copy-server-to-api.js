import { cp } from 'fs/promises';
import { resolve } from 'path';

async function main() {
  const root = resolve(import.meta.url.replace('file://', ''), '..', '..');
  // project root
  const projectRoot = resolve(root);
  const src = resolve(projectRoot, 'dist', 'server');
  const dest = resolve(projectRoot, 'api', 'dist-server');

  try {
    await cp(src, dest, { recursive: true });
    console.log(`Copied server from ${src} -> ${dest}`);
  } catch (err) {
    console.error('Failed to copy server bundle to api folder:', err?.message ?? err);
    process.exitCode = 1;
  }
}

main();
