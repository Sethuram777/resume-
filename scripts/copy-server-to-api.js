import { cp } from 'fs/promises';
import { resolve } from 'path';

async function main() {
  const root = resolve(import.meta.url.replace('file://', ''), '..', '..');
  // project root
  const projectRoot = resolve(root);
  const src = resolve(projectRoot, 'dist', 'server');
  const dest = resolve(projectRoot, 'api', 'dist-server');
  const clientDest = resolve(projectRoot, 'dist', 'client');
  const assetsToCopy = ['profile.jpg', 'favicon.ico', 'public'];

  try {
    await cp(src, dest, { recursive: true });
    console.log(`Copied server from ${src} -> ${dest}`);
    // Copy common static assets into dist/client so Vercel serves them
    for (const name of assetsToCopy) {
      const srcPath = resolve(projectRoot, name);
      const destPath = resolve(clientDest, name);
      try {
        await cp(srcPath, destPath, { recursive: true });
        console.log(`Copied ${name} -> ${destPath}`);
      } catch (e) {
        // ignore missing assets
      }
    }
  } catch (err) {
    console.error('Failed to copy server bundle to api folder:', err?.message ?? err);
    process.exitCode = 1;
  }
}

main();
