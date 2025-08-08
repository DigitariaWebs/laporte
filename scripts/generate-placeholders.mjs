import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'public', 'images');
mkdirSync(outDir, { recursive: true });

function svg(width, height, colors, text) {
  const [c1, c2] = colors;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${text}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}" />
      <stop offset="100%" stop-color="${c2}" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="50%" y="50%" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="rgba(255,255,255,.9)" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;
}

const files = [
  ['poster-hero.jpg', ['#161616', '#2a2a2a'], 'Affiche'],
  ['drink-1.jpg', ['#7a0a0f', '#b5121b'], 'Cocktail'],
  ['drink-2.jpg', ['#3a3a3a', '#777'], 'Happy Hour'],
  ['burger-1.jpg', ['#553016', '#b07a3b'], 'Burger 1'],
  ['burger-2.jpg', ['#6a3e1b', '#d49b55'], 'Burger 2'],
  ['burger-3.jpg', ['#4a2a12', '#a0703a'], 'Burger 3'],
];

for (const [name, colors, label] of files) {
  const file = join(outDir, name);
  writeFileSync(file, svg(1200, 800, colors, label));
  console.log('Wrote', file);
}


