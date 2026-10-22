// Inlines the map geometry and prefecture data into the app template -> dist/todofuken-atlas.html
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tpl = fs.readFileSync(path.join(root, 'src/app.html'), 'utf8');
const prefs = fs.readFileSync(path.join(root, 'src/prefectures.js'), 'utf8');
const shapes = fs.readFileSync(path.join(root, 'src/shapes.json'), 'utf8');
const flags = buildFlags();
const out = tpl.replace('__PREFS__', () => prefs).replace('__SHAPES__', () => shapes).replace('__FLAGS__', () => flags);
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/todofuken-atlas.html'), out);
console.log('wrote dist/todofuken-atlas.html', (out.length / 1024).toFixed(0) + ' KB');

// GitHub Pages serves docs/index.html: the same page with a fuller head (description, safe areas on phones)
const head = /^<!doctype html>\r?\n<html lang="en">\r?\n<meta charset="utf-8">\r?\n<meta name="viewport"[^\n]*\n/;
if (!head.test(out)) throw new Error('src/app.html no longer starts with the expected doctype/charset/viewport lines');
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Learn Japan's 47 prefectures with map quizzes and a clickable explorer.">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${out.replace(head, '')}
</body>
</html>
`;
fs.writeFileSync(path.join(root, 'docs/index.html'), page);
console.log('wrote docs/index.html', (page.length / 1024).toFixed(0) + ' KB');

/* Prefectural flags (src/flags/NN.svg) become data URIs beside their credits (src/flags/credits.json).
   Editor cruft is stripped, and a missing viewBox is added so each flag scales inside the map's <image>. */
function buildFlags() {
  const dir = path.join(root, 'src/flags');
  const credits = JSON.parse(fs.readFileSync(path.join(dir, 'credits.json'), 'utf8'));
  const out = {};
  for (const [id, c] of Object.entries(credits)) {
    const file = path.join(dir, id + '.svg');
    if (!fs.existsSync(file)) throw new Error('missing ' + path.relative(root, file));
    const svg = minifySvg(fs.readFileSync(file, 'utf8'));
    const [, , vw, vh] = svg.match(/viewBox="([^"]+)"/)[1].trim().split(/[\s,]+/).map(Number);
    out[id] = { ...c, ratio: +(vw / vh).toFixed(4), svg: 'data:image/svg+xml,' + encodeURIComponent(svg).replace(/%20/g, ' ').replace(/%3D/g, '=').replace(/%3A/g, ':').replace(/%2F/g, '/') };
  }
  return JSON.stringify(out);
}
function minifySvg(s) {
  s = s.replace(/<\?xml[\s\S]*?\?>|<!DOCTYPE[\s\S]*?>|<!--[\s\S]*?-->/g, '')
    .replace(/<metadata[\s\S]*?<\/metadata>|<sodipodi:[\s\S]*?(\/>|<\/sodipodi:[^>]*>)|<title>[\s\S]*?<\/title>/g, '')
    .replace(/\s(?:sodipodi|inkscape):[\w-]+="[^"]*"/g, '').replace(/\sxmlns:(?:sodipodi|inkscape|rdf|cc|dc)="[^"]*"/g, '')
    .replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ').trim();
  const open = s.match(/<svg\b[^>]*>/)[0];
  if (!/viewBox=/.test(open)) {
    const num = a => parseFloat((open.match(new RegExp(`\\s${a}="([\\d.]+)`)) || [])[1]);
    const w = num('width'), h = num('height');
    if (!w || !h) throw new Error('a flag SVG has neither a viewBox nor a width and height');
    s = s.replace(open, open.replace('<svg', `<svg viewBox="0 0 ${w} ${h}"`));
  }
  return s;
}
