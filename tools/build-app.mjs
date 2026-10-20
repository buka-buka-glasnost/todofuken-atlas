// Inlines the map geometry and prefecture data into the app template -> dist/todofuken-atlas.html
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tpl = fs.readFileSync(path.join(root, 'src/app.html'), 'utf8');
const prefs = fs.readFileSync(path.join(root, 'src/prefectures.js'), 'utf8');
const shapes = fs.readFileSync(path.join(root, 'src/shapes.json'), 'utf8');
const out = tpl.replace('__PREFS__', () => prefs).replace('__SHAPES__', () => shapes);
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/todofuken-atlas.html'), out);
console.log('wrote dist/todofuken-atlas.html', (out.length / 1024).toFixed(0) + ' KB');
