# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People learning Japanese or studying Japan who want to know the 47 prefectures (都道府県): where each one is, how its name is written and read, and what it is like.

## Product Purpose

Todōfuken Atlas helps a learner come to know each prefecture as a place, not just a shape on a map: its capital, size and people, history, sights, local food and omiyage. Success is a learner who can say what a prefecture is like. Placing and naming all 47 through the quizzes is a supporting goal, not the main one.

## Positioning

A bilingual atlas built for learners of Japanese: every prefecture is shown with kanji, kana and romaji side by side, answers are accepted in any of those forms, and the content (omiyage, local food, JMA forecasts, age structure against the national figure) is chosen for understanding the place, not only for memorising the map.

## Operating Context

- Two modes: Explore (choose a prefecture on the map or from a list and read about it; the chosen prefecture shows its flag, and its capital and six landmarks open cards of their own) and Quiz (Find it, Name it, Name them all; for all Japan or one region; practice rounds of the misses; best scores kept in the browser and shown as a record table).
- Published as a static site on GitHub Pages from `docs/index.html`, built from `src/` by `tools/build-app.mjs`.

## Capabilities and Constraints

- Must stay hostable on GitHub Pages as a static site.
- English and Japanese stay side by side throughout: kanji, kana and romaji for names, with answer matching that accepts all three.
- Current build is plain HTML/CSS/JS with no runtime dependencies, inlined into one page. This was not confirmed as a binding constraint; changing it is an open decision.
- Phone and desktop layouts both exist and were both reviewed for ease of use in November 2026 (touch targets, scrolling, zoom, keyboard); how much weight each should carry when they conflict is not decided.
- Map data: GSI Global Map Japan via `jpn-atlas` (BSD-3-Clause), pre-projected in `src/shapes.json`; Okinawa and Amami shown in an inset, Ogasawara omitted.

## Evidence on Hand

- Content for all 47 prefectures in `src/prefectures.js` (tagline, capital, population 2025 census preliminary and 2020, area, age shares, climate, season, history, sights, food, omiyage).
- Places in `src/places.json`: locations, Japanese names, Wikipedia links and summaries for the 47 capitals and 282 sights (Wikidata and Wikipedia), with capital populations.
- The 47 prefectural flags in `src/flags/` (Wikimedia Commons; Kagawa and Hiroshima redrawn from the prefectures' specifications).
- Data sources listed in `README.md` (Statistics Bureau of Japan, GSI, JMA, Wikidata, Wikipedia, Wikimedia Commons).
- A screenshot at `docs/screenshot.png` (an older version of the layout, from before the drawer, flags and places).
- No user testimonials, usage numbers or reviews exist; none should be invented.

## Product Principles

1. Understanding before memorising: every screen should leave the learner knowing more about what a place is like.
2. Japanese is first-class: kanji and kana are content to learn from, never decoration.
3. Forgive the learner: accept every reasonable spelling or script, and turn mistakes into teaching.
4. Facts are sourced: figures come from named official sources and say so.
