# Todōfuken Atlas

A single-page web app for learning Japan's 47 prefectures (都道府県).

- **Explore** – click any prefecture for its capital, population, area, density, age structure, climate, history, landmarks, local food and omiyage. Region legend zooms to a region; the Names toggle shows romaji or kanji labels.
- **Quiz** – three games, each playable for all of Japan or one region:
  - *Find it*: a prefecture is named, click it on the map (3 tries).
  - *Name it*: a prefecture is highlighted, pick from 4 or type the name.
  - *Name them all*: type every prefecture you can against the clock.
  Answers accept romaji with or without long vowels (Kyoto / Kyōto / Kyouto), with or without -ken/-fu, kanji (京都府 / 京都) and kana. Best scores are kept in localStorage.

No framework and no runtime dependencies: plain HTML, CSS and JavaScript, with the map drawn as inline SVG.

## Project layout

```
src/app.html          the app: markup, styles and all logic (template)
src/prefectures.js    the content for all 47 prefectures
src/shapes.json       pre-projected SVG paths, label points, graticule, scale
tools/build-map.mjs   turns boundary data into src/shapes.json
tools/build-app.mjs   inlines the data into the template -> dist/todofuken-atlas.html
dist/                 the built, self-contained page
```

## Building

```bash
node tools/build-app.mjs           # rebuild dist/ after editing src/
```

Regenerating the map (only needed to change projection, simplification or the inset):

```bash
npm i jpn-atlas mapshaper d3-geo polylabel
npx mapshaper node_modules/jpn-atlas/build/polbnda_jpn.shp \
  -each 'pref=adm_code.substr(0,2)' -dissolve pref -filter-islands min-area=4km2 \
  -simplify 6% keep-shapes -o format=geojson prefs.json
node tools/build-map.mjs prefs.json src/shapes.json
```

The map uses a conformal conic projection centred on 136°E. Okinawa and the Amami islands are moved into an inset; Tokyo's far-south islands (Ogasawara) are left out of the main map.

## How the map works (worth reading in app.html)

- Zoom and pan change the SVG `viewBox`; strokes use `vector-effect: non-scaling-stroke` so borders stay thin at any zoom.
- A click is only treated as a click if the pointer moved less than 6px, so dragging never selects a prefecture.
- Labels are culled at each zoom level: bigger prefectures win, overlapping smaller labels are hidden until you zoom in.
- `paint()` derives every prefecture's CSS classes from app state, so switching modes or resuming a quiz always redraws correctly.

## Data sources

- Population: 2025 Population Census, preliminary counts (Statistics Bureau of Japan, May 2026); 2020 Census for change.
- Age shares: Population Estimates, 1 October 2024 (Statistics Bureau of Japan).
- Area: Geospatial Information Authority of Japan (GSI).
- Boundaries: GSI Global Map Japan, via the `jpn-atlas` npm package (BSD-3-Clause).
- Forecast links: Japan Meteorological Agency.

This project is still a work in progress, I will update it with more info and quizzes in the future.
