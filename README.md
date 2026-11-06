# Todōfuken Atlas

A single-page web app for learning Japan's 47 prefectures (都道府県).

- **Explore** – click any prefecture for its capital, population, area, density, age structure, climate, history, landmarks, local food and omiyage. The chosen prefecture is drawn in its own prefectural flag. Region chips zoom to a region; the Names toggle shows romaji or kanji labels.
  - **Places** – every capital (◎) and 281 landmarks (six per prefecture; Tokyo's Ogasawara Islands lie outside the map) are marked on the map. Click one (or a capital link, or "Show on map" in the Sights tab) for its own card: Japanese and English name, a short note, the opening of its Wikipedia article, and the city population for capitals.
- **Quiz** – three games, each playable for all of Japan or one region:
  - *Find it*: a prefecture is named, click it on the map (3 tries).
  - *Name it*: a prefecture is highlighted, pick from 4 or type the name.
  - *Name them all*: type every prefecture you can against the clock.
  Answers accept romaji with or without long vowels (Kyoto / Kyōto / Kyouto, and passport-style Kyohto or Ohsaka), with or without -ken/-fu, kanji (京都府 / 京都) and kana. After a round you can practise just the ones you missed. Best scores are kept in localStorage and shown in a record table (every game × every region) under the game choices; a round you give up is not saved.

No framework and no runtime dependencies: plain HTML, CSS and JavaScript, with the map drawn as inline SVG and all data inlined into the page. The only thing loaded from elsewhere is the two typefaces (Shippori Mincho B1 and Zen Kaku Gothic New, from Google Fonts).

Phones get their own layout: the card docks under the map, the reading panel is a bottom sheet you can swipe away, and every control is at least 44px tall.

## Controls

| | Mouse / trackpad | Touch | Keyboard |
| --- | --- | --- | --- |
| Pan | drag | drag | |
| Zoom | wheel, double-click, + / − buttons | pinch, double-tap | `+` / `−` |
| Choose a prefecture | click | tap | arrow keys move between prefectures, `Enter` chooses |
| Close a card or the reading panel | × | ×, swipe the sheet down | `Esc` |
| Answer *Name it* (multiple choice) | click | tap | `1`–`4` |

A capital's ◎ becomes clickable once its prefecture is chosen or the map is zoomed in; zoomed out, a click goes to the prefecture under it.

## Project layout

```
src/app.html          the app: markup, styles and all logic (template)
src/prefectures.js    the content for all 47 prefectures
src/shapes.json       pre-projected SVG paths, label points, graticule, scale, and the projection itself
src/flags/            the 47 prefectural flags (NN.svg) and their credits (credits.json)
src/places.json       each capital and landmark: lat/lon, Japanese name, Wikipedia article and summary
tools/build-map.mjs   turns boundary data into src/shapes.json
tools/build-app.mjs   inlines everything into the template -> dist/ and docs/
dist/                 the built, self-contained page
docs/index.html       the same page with a fuller <head>, served by GitHub Pages
```

## Building

```bash
node tools/build-app.mjs           # rebuild dist/ and docs/index.html after editing src/
```

The build inlines the prefecture data, the map, the flags (as data URIs) and the places, which it projects onto the map with the projection stored in `src/shapes.json`. It stops with an error if a flag file is missing or if `src/places.json` and `src/prefectures.js` disagree.

Regenerating the map (only needed to change projection, simplification or the inset):

```bash
npm i jpn-atlas mapshaper d3-geo polylabel
npx mapshaper node_modules/jpn-atlas/build/polbnda_jpn.shp \
  -each 'pref=adm_code.substr(0,2)' -dissolve pref -filter-islands min-area=4km2 \
  -simplify 6% keep-shapes -o format=geojson prefs.json
node tools/build-map.mjs prefs.json src/shapes.json
```

The map uses a conformal conic projection centred on 136°E. Okinawa and the Amami islands are moved into an inset; Tokyo's far-south islands (Ogasawara) are left out of the main map. `build-map.mjs` also writes the projection settings into `src/shapes.json`, so places stay aligned with a regenerated map.

## Editing content

- **Prefecture text and figures** live in `src/prefectures.js`. Each prefecture has six `sights` as `[name, note]`.
- **Places** in `src/places.json` follow those sights in the same order, and each repeats its sight's `name`; rename or reorder a sight in both files. A place has `lat`/`lon` (WGS84), and optionally `ja` (its Japanese name), `wiki` (the English Wikipedia article title) and `summary`. `wikiBroader: true` marks a link that goes to the surrounding town rather than the landmark (the card then shows no summary), and `offmap: true` a place outside the map's frame (Ogasawara), which gets no marker. Each prefecture's `capital` has `lat`/`lon`, `wiki`, `summary`, `pop`, `popYear` and a one-line `note` (its name and kanji come from `prefectures.js`).
- **Flags** are `src/flags/NN.svg`, with their source and licence in `src/flags/credits.json`.

Run the build after any of these.

## How the map works (worth reading in app.html)

- Zoom and pan change the SVG `viewBox`; strokes use `vector-effect: non-scaling-stroke` so borders stay thin at any zoom, and place markers keep their size through a CSS variable set on every zoom.
- A click is only treated as a click if the pointer moved less than 6px, so dragging never selects a prefecture. A second click on the same spot within 400ms zooms in instead of selecting again.
- The six smallest prefectures and the inset islands have a wider invisible click edge, drawn beneath all the land so it catches clicks in the sea but never takes them from a neighbour.
- Labels are culled at each zoom level: bigger prefectures win, overlapping smaller labels are hidden until you zoom in.
- `paint()` derives every prefecture's and place's CSS classes from app state, so switching modes or resuming a quiz always redraws correctly.
- The chosen prefecture's flag is a picture clipped to its outline (not an SVG pattern, which browsers do not repaint when the picture loads late).

## Data sources

- Population: 2025 Population Census, preliminary counts (Statistics Bureau of Japan, May 2026); 2020 Census for change.
- Age shares: Population Estimates, 1 October 2024 (Statistics Bureau of Japan).
- Area: Geospatial Information Authority of Japan (GSI).
- Boundaries: GSI Global Map Japan, via the `jpn-atlas` npm package (BSD-3-Clause).
- Forecast links: Japan Meteorological Agency.
- Places: coordinates, Japanese names and capital populations from Wikidata (CC0) and Wikipedia; each place card links its article. The short summaries on place cards are the opening sentences of those English Wikipedia articles, used under CC BY-SA 4.0 and credited on each card.
- Flags: Wikimedia Commons (public domain), linked per prefecture in `src/flags/credits.json`. Kagawa and Hiroshima are redrawn for this project from the prefectures' own specifications, so their files carry no third-party licence.

This atlas is not affiliated with or endorsed by any prefecture. Prefectural flags are official insignia: they are shown here only to identify each prefecture.

This project is still a work in progress, I will update it with more info and quizzes in the future.
