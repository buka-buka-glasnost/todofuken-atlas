import fs from 'fs';
import { geoConicConformal, geoPath, geoBounds, geoArea, geoGraticule, geoDistance } from 'd3-geo';
import polylabel from 'polylabel';

const g = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const feats = g.features.filter(f => f.properties.pref !== 'UN');
const main = [], inset = [];
for (const f of feats) {
  const code = f.properties.pref;
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  const m = [], i = [];
  for (let p of polys) {
    if (geoArea({type:'Polygon',coordinates:p}) > 2*Math.PI) p = p.map(r => r.slice().reverse());
    const lats = p[0].map(c => c[1]);
    const maxLat = Math.max(...lats);
    if (code === '13' && maxLat < 32) continue;           // drop Ogasawara etc.
    if (code === '47' || (code === '46' && maxLat < 29.6)) i.push(p); else m.push(p);
  }
  if (m.length) main.push({ code, geom: { type: 'MultiPolygon', coordinates: m } });
  if (i.length) inset.push({ code, geom: { type: 'MultiPolygon', coordinates: i } });
}
const W = 1000, H = 1000, pad = 12;
const fc = arr => ({ type: 'FeatureCollection', features: arr.map(x => ({ type: 'Feature', properties: { code: x.code }, geometry: x.geom })) });
const proj = geoConicConformal().rotate([-136, 0]).parallels([33, 44]).fitExtent([[pad, pad], [W - pad, H - pad]], fc(main));
const path = geoPath(proj);
const mb = path.bounds(fc(main));
console.error('main bounds', mb);
// inset box in upper-left
const top = Math.floor(mb[0][1] - pad);
const box = { x: pad + 4, y: top + pad + 4, w: 410, h: 300 };
const proj2 = geoConicConformal().rotate([-127, 0]).parallels([24, 30]).fitExtent([[box.x + 14, box.y + 30], [box.x + box.w - 14, box.y + box.h - 14]], fc(inset));
const path2 = geoPath(proj2);
console.error('scale main', proj.scale().toFixed(0), 'inset', proj2.scale().toFixed(0));
const round = d => d.replace(/-?\d+\.\d+/g, n => (+n).toFixed(1).replace(/\.0$/, ''));
function label(pth, geom) {
  // largest projected polygon -> polylabel
  let best = null, bestA = -1;
  for (const p of geom.coordinates) {
    const a = pth.area({ type: 'Polygon', coordinates: p });
    if (a > bestA) { bestA = a; best = p; }
  }
  const proj = pth.projection();
  const ring = best.map(r => r.map(c => proj(c)));
  const pt = polylabel(ring, 0.5);
  return [+pt[0].toFixed(1), +pt[1].toFixed(1)];
}
const out = {};
const bb = b => [+b[0][0].toFixed(1), +b[0][1].toFixed(1), +(b[1][0]-b[0][0]).toFixed(1), +(b[1][1]-b[0][1]).toFixed(1)];
for (const x of main) out[x.code] = { d: round(path(x.geom)), l: label(path, x.geom), b: bb(path.bounds(x.geom)) };
for (const x of inset) {
  out[x.code] = out[x.code] || {};
  out[x.code].di = round(path2(x.geom));
  if (x.code === '47') { out[x.code].l = label(path2, x.geom); out[x.code].b = bb(path2.bounds(x.geom)); }
}
const vb = [0, top, W, Math.ceil(mb[1][1] + pad - top)];
// graticule every 2 degrees, clipped to the viewBox
const gproj = geoConicConformal().rotate(proj.rotate()).parallels([33, 44]).scale(proj.scale()).translate(proj.translate()).clipExtent([[vb[0], vb[1]], [vb[0] + vb[2], vb[1] + vb[3]]]);
const grat = round(geoPath(gproj)(geoGraticule().extent([[120, 20], [156, 50]]).step([2, 2])()));
// scale bar: projected length of 200 km at 36N
let lo = 0, hi = 5;
for (let i = 0; i < 50; i++) { const m = (lo + hi) / 2; (geoDistance([138, 36], [138 + m, 36]) * 6371 < 200) ? lo = m : hi = m; }
const a = proj([138, 36]), c = proj([138 + lo, 36]);
const km200 = +Math.hypot(c[0] - a[0], c[1] - a[1]).toFixed(1);
// the projections themselves, so places (capitals, landmarks) can be put on the same map later without d3
const params = (p, rotate, parallels) => ({ rotate, parallels, scale: +p.scale().toFixed(4), translate: p.translate().map(v => +v.toFixed(4)) });
const projOut = { main: params(proj, -136, [33, 44]), inset: { ...params(proj2, -127, [24, 30]), test: 'pref 47, or 46 south of 29.6N' } };
fs.writeFileSync(process.argv[3], JSON.stringify({ viewBox: vb, inset: box, grat, km200, shapes: out, proj: projOut }));
console.error('km200 px', km200);
console.error('viewBox', vb, 'size', fs.statSync(process.argv[3]).size);
