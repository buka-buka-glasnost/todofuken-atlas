---
version: 1
slug: "src-app-html"
primary_target: "src/app.html"
related_targets: []
---

# Explore and Quiz screen

Mode: Operate. Audience: learners of Japanese getting to know each prefecture. Task: pick a prefecture and see its name (kanji, kana, romaji), region and key facts at a glance; read more one step away. Phones carry equal weight with desktop. The quiz flow is fixed; only its frame may change.

## Direction contract

THESIS: The map is the page; the chosen prefecture speaks from where it lies, through an atlas callout. Refuses the map-left, card-column-right split.

OWN-WORLD: The incumbent world: washi-grey ground, sea #d3dfe7, indigo 藍 #284a8b for controls, vermilion 朱 #cc4a2c only for the selection and seals, region pastels, Shippori Mincho for kanji display, Zen Kaku Gothic New for UI.

STORY: The learner taps a place, the card answers beside it with name and four ranked facts, and "Read more" opens the reading drawer.

FIRST VIEWPORT: Header (wordmark, Explore/Quiz) over a full-width map frame; tool strip and region row on top; callout card (kanji 48px, romaji, region, capital, population, area, density with ranks) beside the selection on the open-sea side, leader line to the prefecture. Phone: card docked at the bottom.

FORM: Callout card, position 2 of 7. seed:77a5ea0a6eb4b0d3

Signature interaction: the leader line stays attached to the prefecture as the map pans and zooms, and the card swaps sides when the selection nears an edge.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
