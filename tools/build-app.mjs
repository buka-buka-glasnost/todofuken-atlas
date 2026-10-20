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
