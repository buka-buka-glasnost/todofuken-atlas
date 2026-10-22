---
name: Todōfuken Atlas
description: A bilingual atlas of Japan's 47 prefectures, where the map is the page and the chosen place speaks from where it lies.
colors:
  ai-indigo: "#284a8b"
  ai-soft: "#e3e9f4"
  ai-ink: "#ffffff"
  shu-vermilion: "#cc4a2c"
  washi-ground: "#e8edf0"
  paper-surface: "#fbfcfc"
  sea: "#d3dfe7"
  graticule: "#b9c9d5"
  quiz-land: "#f8f7f2"
  border-edge: "#75828e"
  region-separator: "#6c7884"
  sumi-ink: "#1b2230"
  muted-ink: "#5a6474"
  rule: "#d2dae0"
  label-halo: "#fbfcfc"
  ok: "#26754a"
  bad: "#b5372a"
  ok-fill: "#a5d6b5"
  late-fill: "#f0d48e"
  bad-fill: "#dc7a68"
  region-hokkaido: "#9dd1c5"
  region-tohoku: "#c8db8b"
  region-kanto: "#f2cd74"
  region-chubu: "#c0b4eb"
  region-kansai: "#f3b6c6"
  region-chugoku: "#f4b582"
  region-shikoku: "#9dd3a5"
  region-kyushu: "#eca394"
  dark-ground: "#0b1118"
  dark-surface: "#121a24"
  dark-sea: "#0f1824"
  dark-graticule: "#1d2b3b"
  dark-land: "#283345"
  dark-edge: "#7a8ca6"
  dark-ink: "#e6ebf1"
  dark-muted: "#9aa6b5"
  dark-rule: "#243142"
  dark-ai: "#8fb1f0"
  dark-ai-soft: "#1b2a44"
  dark-shu: "#ff7b5a"
typography:
  display:
    fontFamily: "Shippori Mincho B1, Hiragino Mincho ProN, Yu Mincho, Noto Serif JP, serif"
    fontSize: "48px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.04em"
  score:
    fontFamily: "Shippori Mincho B1, Hiragino Mincho ProN, Yu Mincho, Noto Serif JP, serif"
    fontSize: "54px"
    fontWeight: 800
    lineHeight: 1
    fontFeature: "tnum"
  wordmark:
    fontFamily: "Shippori Mincho B1, Hiragino Mincho ProN, Yu Mincho, Noto Serif JP, serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.06em"
  headline:
    fontFamily: "Shippori Mincho B1, Hiragino Mincho ProN, Yu Mincho, Noto Serif JP, serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.25
  title:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Yu Gothic, Segoe UI, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.3
  figure:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Yu Gothic, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.25
    fontFeature: "tnum"
  body:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Yu Gothic, Segoe UI, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Yu Gothic, Segoe UI, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
  label:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Yu Gothic, Segoe UI, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  swatch: "4px"
  xs: "6px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  sheet: "16px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ai-indigo}"
    textColor: "{colors.ai-ink}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
  button-secondary:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.sumi-ink}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
  button-ghost:
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
  button-confirm:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.bad}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
  mode-toggle:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.sumi-ink}"
    rounded: "{rounded.pill}"
    padding: "6px 18px"
  mode-toggle-active:
    backgroundColor: "{colors.ai-indigo}"
    textColor: "{colors.ai-ink}"
    rounded: "{rounded.pill}"
  tool-toggle:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.sumi-ink}"
    typography: "{typography.control}"
    rounded: "{rounded.sm}"
    padding: "5px 10px"
  tool-toggle-active:
    backgroundColor: "{colors.ai-soft}"
    textColor: "{colors.ai-indigo}"
  region-chip:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.sumi-ink}"
    rounded: "{rounded.pill}"
    padding: "3px 10px 3px 7px"
  region-chip-active:
    backgroundColor: "{colors.ai-soft}"
    textColor: "{colors.ai-indigo}"
  callout-card:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.sumi-ink}"
    rounded: "{rounded.lg}"
    padding: "16px 18px 14px"
    width: "336px"
  reading-drawer:
    backgroundColor: "{colors.paper-surface}"
    rounded: "{rounded.lg}"
    padding: "20px 22px 24px"
    width: "440px"
  map-frame:
    backgroundColor: "{colors.sea}"
    rounded: "{rounded.lg}"
  answer-choice:
    backgroundColor: "{colors.paper-surface}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  answer-choice-right:
    backgroundColor: "{colors.ok-fill}"
  answer-choice-wrong:
    backgroundColor: "{colors.bad-fill}"
  input-typein:
    backgroundColor: "{colors.paper-surface}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
  seal:
    textColor: "{colors.shu-vermilion}"
    rounded: "{rounded.xs}"
    padding: "6px 7px 4px"
  hanko:
    textColor: "{colors.shu-vermilion}"
    rounded: "{rounded.pill}"
    size: "76px"
  map-tooltip:
    backgroundColor: "{colors.sumi-ink}"
    textColor: "{colors.paper-surface}"
    rounded: "{rounded.xs}"
    padding: "4px 10px"
---

# Design System: Todōfuken Atlas

## Overview

**Creative North Star: "The Survey Sheet and Its Seal"**

The page is a survey sheet of Japan laid on cool washi-grey paper. The map is not an illustration beside the content; it is the stage, framed edge to edge in a pale sea with a fine graticule, and everything else either sits on a thin paper strip above it (tools, regions) or speaks from inside it (the callout card, tied to its prefecture by an ink leader line). Reading in depth happens one step away, in a drawer that slides over the map's right edge rather than claiming a permanent column.

Colour is quiet and assigned by meaning. Indigo 藍 is the hand of the interface: controls, pressed states, focus, progress. Vermilion 朱 is the seal: it marks the one chosen place, the active reading tab, the prefecture code seal and the perfect-score hanko, and nothing else. Region pastels carry geography on the Explore map; on the Quiz map the land goes neutral so the learner's own marks (found, late, missed) carry the colour. Japanese is set as content, in a heavy Mincho, at the largest size on the screen.

The density is a field atlas's: compact controls, tabular figures, small tracked labels over large bold numbers, hairline rules between groups. Depth comes from paper on paper with thin borders; only floating things (the callout and the drawer) cast a soft ambient shadow.

**Key Characteristics:**
- The map owns the viewport; content floats over it or docks beneath it on phones.
- Two inks only: indigo for controls, vermilion for selection and seals.
- Kanji in Shippori Mincho B1 is the biggest type on any screen; UI is Zen Kaku Gothic New.
- Hairline borders and tonal paper, not shadows, separate surfaces.
- Light and dark themes are full token sets, switched by `prefers-color-scheme` or `data-theme`.

## Colors

A cool, desaturated paper-and-sea palette, with one indigo and one vermilion doing all the pointing, and eight soft region pastels for geography.

### Primary
- **Ai Indigo 藍** (`ai-indigo`): the interface's hand. Primary buttons, the sliding mode thumb, pressed tool and region toggles (as text on `ai-soft`), quiz progress fill, checked quiz-type cards, links, the keyboard focus outline and the map focus ring. Dark theme lifts it to a pale periwinkle (#8fb1f0) with dark ink on top (#0b1118).
- **Ai Soft** (`ai-soft`): the tint behind pressed segments, active region chips and the selected quiz type. Dark: #1b2a44.

### Secondary
- **Shu Vermilion 朱** (`shu-vermilion`): the seal colour. The selected prefecture's fill on the Explore map and the quiz target, the underline of the active reading tab, the prefecture-code seal border and the 全問正解 hanko. Selected shapes take a stroke mixed 55% vermilion with ink. Dark: #ff7b5a.

### Tertiary (region pastels)
- **Region pastels** (`region-hokkaido` mint, `region-tohoku` pea, `region-kanto` mustard, `region-chubu` lavender, `region-kansai` sakura, `region-chugoku` apricot, `region-shikoku` leaf, `region-kyushu` coral): fill the Explore map by region and appear as 12px swatches in region chips, the callout's region line and the reading drawer. Two of them double as the youth and elderly segments of the age bar. Dark theme uses deeper, mid-value versions (for example Kantō #b8923a, Chūbu #7568b5).

### Neutral
- **Washi Ground** (`washi-ground`): the page behind everything. Dark: #0b1118.
- **Paper Surface** (`paper-surface`): every card, strip, drawer and control face. Dark: #121a24.
- **Sea** (`sea`): the map frame's background and the Okinawa inset. Dark: #0f1824.
- **Graticule** (`graticule`): the 0.8px latitude/longitude lines. Dark: #1d2b3b.
- **Quiz Land** (`quiz-land`): neutral land on the Quiz map. Dark: #283345.
- **Border Edge** (`border-edge`): prefecture borders on neutral land (3:1 against it), the dashed inset frame, hover borders on controls, the type-in field's 1.5px stroke. Dark: #7a8ca6.
- **Region Separator** (`region-separator`): prefecture borders on the coloured Explore map. Dark: #0b1118, so borders read as cuts into the ground.
- **Sumi Ink** (`sumi-ink`): text, the leader line and dot outline, the quiz target ring, the scale bar, the tooltip ground. Dark: #e6ebf1.
- **Muted Ink** (`muted-ink`): kana readings, secondary lines, labels, captions. Dark: #9aa6b5.
- **Rule** (`rule`): every hairline: card borders, dividers between fact groups, segment separators, the progress track. Dark: #243142.
- **Label Halo** (`label-halo`): the paint-order stroke behind map names. Tracks the surface in each theme.

### Feedback
- **OK / Bad** (`ok`, `bad`): answer feedback text, the population change arrows, the arm-to-confirm button. Dark: #62cc90 / #ff7567.
- **Fills** (`ok-fill`, `late-fill`, `bad-fill`): found, found-late and missed prefectures on the Quiz map, and the right/wrong answer cards. Missed prefectures are hatched: `bad` lines over `bad-fill` at 45°, so a miss reads without relying on hue. Dark: #2d6946 / #76622a / #b04e43.

### Named Rules
**The Two Inks Rule.** Indigo points at what you can do; vermilion marks what is chosen or sealed. Never use vermilion for a control or indigo for a selection.

**The One Red Place Rule.** On any map state, at most one prefecture is filled vermilion. Region views highlight with fades, not more red.

**The Learner's Colour Rule.** On the Quiz map the land is neutral; only the learner's results (found, late, missed) and the single target carry colour.

## Typography

**Display Font:** Shippori Mincho B1 (with Hiragino Mincho ProN, Yu Mincho, Noto Serif JP, serif), weights 700 and 800
**Body Font:** Zen Kaku Gothic New (with Hiragino Sans, Yu Gothic, Segoe UI, system-ui), weights 400, 500, 700

**Character:** A heavy brush-like Mincho for the Japanese that is being learned, set against a clean Japanese gothic for everything operational. The serif is reserved for kanji, the wordmark, panel headings and the score; it never sets UI copy.

### Hierarchy
- **Display** (800, 48px, 1.05, +0.04em): the prefecture or region kanji in the callout card (46px in the reading drawer, 40px in the quiz prompt, 34px on phones).
- **Score** (800, 54px, 1, tabular): the quiz result number, with its denominator at 22px muted.
- **Wordmark** (800, 26px, 1, +0.06em): 都道府県 in the top bar.
- **Headline** (800, 24px, 1.25, balanced wrap): headings in the reading drawer and quiz panel. Section headings inside tabs drop to the body face at 15px/700.
- **Title** (700, 18px, 1.3): the romaji name under the kanji (21px in the drawer), with kana beside it at 13–14px/400 muted.
- **Figure** (700, 17px, 1.25, tabular): fact values (capital, population, area, density), 18px in the drawer, each with a 12px muted rank line beneath.
- **Body** (400, 15px, 1.6): running text; taglines at 14–16px.
- **Control** (500, 13px): tool toggles, region chips, selects, small buttons. Buttons proper inherit 15px.
- **Label** (700, 11px, +0.08em, uppercase): term labels over fact figures, form field labels, the tool-strip group label. Labels name a value directly beneath them; they are never placed above a heading.

### Named Rules
**The Kanji Is Largest Rule.** On any screen the largest text is Japanese in Mincho (or the score). English never outranks the kanji it translates.

**The Tabular Figures Rule.** Every number that can be compared (population, area, ranks, timers, scores, scale) uses tabular numerals.

## Layout

A single full-height grid: a top bar (wordmark left, Explore/Quiz toggle right) over a stage, with 16px side gutters and 12px between rows.

- **Explore:** the map frame takes the full width. Its first row is the tool strip (prefecture picker, Names Off/ABC/漢字, zoom, scale bar) with the region chips as a second, horizontally scrolling line; its second row is the map. The callout card (336px) is positioned in map space beside the selected prefecture with a 48px gap, preferring the open-sea east side and flipping west when it will not fit; it docks to the bottom-right (16px inset, over open Pacific) when there is no selection box. The reading drawer (up to 440px) slides over the right edge.
- **Quiz:** the map frame plus a 320–420px panel column, 16px gap.
- **Phones (≤860px):** everything stacks; the map is capped at 52vh with a 1 : 0.86 aspect; the callout becomes an in-flow strip docked under the map (top hairline, no radius, no shadow); the drawer becomes a bottom sheet (max 85vh, 16px top corners, a grabber, a dimming scrim that closes it, and swipe-down to dismiss: a flick faster than 0.11px/ms or a drag past a quarter of its height); in a live quiz the panel moves above the map. At ≤420px panel padding tightens to 16px and the English subtitle of the wordmark hides.
- **Touch:** every map tool, chip, callout button and picker is at least 44px tall under `pointer: coarse`.
- **Rhythm:** 6 / 8 / 12 / 16 / 24px. Card internals use 10–14px gaps; fact grids are always two columns.

## Elevation & Depth

Flat paper on paper. Surfaces are separated by a 1px `rule` border and a tonal step (ground, surface, sea), not by shadow. Two things float above the map and only they cast shadow, an ambient, cool, unoffset blur.

### Shadow Vocabulary
- **Callout float** (`box-shadow: 0 12px 32px rgb(15 23 42 / .16)`): the callout card over the map. Removed when docked on phones.
- **Drawer float** (`box-shadow: 0 18px 48px rgb(15 23 42 / .22)`): the reading drawer over the map.
- **Swatch keyline** (`box-shadow: inset 0 0 0 1px rgb(0 0 0 / .12)`): keeps pale region swatches visible on paper.

### Named Rules
**The Only Floating Things Cast Shadow Rule.** A surface gets a shadow only if it hovers over the map. Strips, chips, panels and buttons stay flat.

## Shapes

Gently rounded rectangles throughout, scaled to the object: 12px for frames and floating cards, 10px for quiz cards and answers, 8px for buttons, inputs, selects and segmented groups, 6px for the seal and tooltip, 4px for swatches and the age bar. Pills (999px) are reserved for the mode toggle, region chips, callout list chips and missed-name chips. Segmented groups clip their children and separate them with a 1px rule.

The seals are the one exception to the upright grid: the prefecture-code seal is rotated −3° and the hanko is a 76px circle with a 3px vermilion ring rotated −8°, as if stamped. Map strokes use `vector-effect: non-scaling-stroke` so borders stay hairline at every zoom.

## Components

### Buttons
Calm, paper-faced, and they give way slightly when pressed.
- **Shape:** gently rounded (8px), 1px border, 8px × 14px padding, 6px icon gap; small variant 4px × 10px at 13px.
- **Primary:** indigo face, white text, 700. One per group (Read more, Start, Check, Play again).
- **Secondary:** paper face, rule border, ink text, 500.
- **Ghost:** no border or fill, muted text (Close, I don't know, Change game).
- **Confirm (armed):** a destructive action's first press turns it into a red-bordered, red-text button for 3 seconds; a second press commits.
- **Hover / Active:** on fine pointers the border darkens to `border-edge`; on press the button scales to 0.97 over 160ms with the out-curve. Focus is a 2px indigo outline, 2px offset.

### Chips
- **Region chips:** pill, paper face, 12px text with a 12px region swatch; pressed state is indigo text on `ai-soft` with an indigo border. Selecting one zooms the map to the region and lists its prefectures in the callout.
- **Callout list chips:** pill, 13px, English name with muted kanji after it.
- **Drawer chips:** static pills for region and suffix (県/府/都/道), 12px.

### Segmented toggles
- **Mode toggle:** a pill track on paper with an indigo thumb that slides 250ms (in-out curve) between Explore and Quiz. The thumb is an indigo copy of both labels clipped to one half, so the text turns white exactly where the indigo arrives.
- **Segment presses:** segments inside clipped groups (tools, timer, tabs) darken on press instead of scaling; the press lands instantly and the release fades over 150ms.
- **Tool groups:** 8px-rounded segments with rule dividers; the pressed segment is indigo-on-`ai-soft`, 700. Icons are drawn 16px stroke SVGs (1.75 stroke, round caps).

### Callout card (signature)
The selected prefecture speaks from where it lies.
- **Body:** 336px paper card, 12px radius, rule border, callout float shadow, 16/18/14px padding, 12px gaps.
- **Head:** kanji at display size, region swatch and name top-right, romaji title with kana beside it.
- **Facts:** a two-column definition grid (Capital, Population, Area, Density), uppercase labels over bold tabular figures, a muted "#n of 47" rank beneath each, separated from the head by a hairline.
- **Foot:** previous/next icon buttons and the primary Read more, behind a hairline.
- **Leader:** a 1.25px ink line from card to prefecture ending in a 3.5px paper dot with an ink ring. It follows the prefecture through pan and zoom; the card swaps sides near an edge.
- **Phone:** docked strip under the map, kanji at 34px.

### Reading drawer
Paper panel up to 440px over the map's right edge, sliding in 300ms and out 200ms with the out-curve. Holds the full prefecture page: kanji head with the code seal, chips, tagline, a facts grid between hairlines, the age-structure bar with a national marker, and tabs whose active tab carries a 2px vermilion underline that slides 200ms to a clicked tab (arrow keys move it instantly). On phones it is a bottom sheet.

### Map
- **Frame:** sea ground, 12px radius, rule border, 0.8px graticule, dashed inset box for Okinawa.
- **Explore fills:** region pastels with `region-separator` borders; selection in vermilion; non-region prefectures fade to 0.35 when a region is chosen.
- **Quiz fills:** neutral land with `border-edge` borders; found, late and hatched-missed fills; a pulsing 2.5px ink ring around the target; a 0.6s bad-red flash on a wrong tap; a green-to-ink pop on a newly named label.
- **Labels:** 700 gothic in ink with a surface-coloured halo stroke; colliding labels are culled.
- **Hover:** fine pointers only, a brightness filter (0.92 light, 1.25 dark).
- **Focus:** a 3px indigo outline path drawn above all prefectures.
- **Tooltip:** ink pill (6px) with paper text, the name in 700 and its kanji at 75% opacity.

### Inputs / Fields
- **Selects:** paper face, rule border, 8px radius.
- **Type-in:** 17px text, 1.5px `border-edge` stroke, 8px radius; focus turns the border indigo instead of drawing an outline.
- **Quiz type cards:** 10px cards with a radio; the checked card turns indigo-bordered on `ai-soft`.

### Quiz feedback
- **Answer cards:** two-column 10px cards with a key hint, bold name and muted reading; right answers fill `ok-fill` with an `ok` border, wrong ones `bad-fill` with a `bad` border.
- **Progress:** a 6px rule track with an indigo fill that grows 300ms.
- **Result:** the Mincho score, missed names grouped as pill chips bordered in `bad-fill`, and for a perfect round the 全問正解 hanko, stamped in over 320ms (scale 1.35 to 1).

### Motion
Two curves: `cubic-bezier(0.23, 1, 0.32, 1)` for responses (press, enter, drawer, progress, stamp) and `cubic-bezier(0.77, 0, 0.175, 1)` for things travelling across the screen (the mode thumb). The map view tweens 380ms with a quintic ease-out; mouse-wheel notches tween 240ms and stack on the pending target, trackpads zoom directly. A released pan glides on with 0.95-per-frame friction, a held map pulled past its limits gives with rubber-band resistance and eases back in 300ms. The phone sheet uses `cubic-bezier(0.32, 0.72, 0, 1)`, 360ms in and 240ms out. Colour changes run 150–200ms ease. Under `prefers-reduced-motion: reduce` the drawer, thumb, progress, tab underline and map tween are instant, pan momentum and press-scaling are off, and the hanko fades in without the stamp; colour and opacity changes that carry meaning remain.

## Do's and Don'ts

### Do:
- **Do** let the map take the full width in Explore and bring content to it (callout, drawer) instead of giving content a permanent column.
- **Do** keep indigo for controls and vermilion for the single selection, the active tab underline and the seals (The Two Inks Rule).
- **Do** set every prefecture and region name in kanji, kana and romaji together, with the kanji in Shippori Mincho B1 as the largest text.
- **Do** separate surfaces with a 1px `rule` hairline and a tonal step; reserve shadow for cards floating over the map.
- **Do** use tabular numerals and an "#n of 47" rank for every comparable figure.
- **Do** mark quiz misses with the hatch as well as the colour, so state never depends on hue alone.
- **Do** draw icons as 16px stroke SVGs (1.75 stroke, round caps) and give touch targets 44px under coarse pointers.
- **Do** define every new colour in both light and dark token sets.

### Don't:
- **Don't** split Explore into a map on the left and a card column on the right; the reading panel is a drawer.
- **Don't** fill more than one prefecture vermilion, or use vermilion on a button.
- **Don't** colour quiz land by region; the learner's results are the only colour there.
- **Don't** put small uppercase labels above headings; tracked uppercase is only for labels that name the value directly beneath them.
- **Don't** set UI copy or English body text in the Mincho.
- **Don't** add hover effects that fire on touch; hover rules live behind `(hover: hover) and (pointer: fine)`.
