// Prefecture data for the Japan Prefectures app.
// Population: 2025 Population Census, preliminary counts (Statistics Bureau of Japan, May 2026) and 2020 Census.
// Age shares (<15, 65+): Population Estimates, 1 Oct 2024 (Statistics Bureau of Japan, Table 10).
// Area (km²): Geospatial Information Authority of Japan, via Wikipedia "Prefectures of Japan".
// Everything else: general reference knowledge, written for this app.
//
// food / omiyage entries: [romaji name, Japanese name, short note]
// sights entries:        [name, short note]

const PREFS = [
{
  id: "01", en: "Hokkaidō", ja: "北海道", kana: "ほっかいどう", suf: "dō", region: "Hokkaidō",
  cap: "Sapporo", capJa: "札幌市", ll: [43.06, 141.35],
  pop: 4985419, pop20: 5224614, area: 83424.44, u15: 9.9, o65: 33.3,
  tag: "Japan's wild northern frontier: vast farmland, powder snow and the country's best seafood and dairy.",
  climate: "Subarctic and continental. Long, snowy winters (Sapporo averages about −3 °C in January) and mild, fairly dry summers with no real rainy season. Drift ice reaches the Sea of Okhotsk coast in February–March.",
  season: "February for snow festivals and drift ice; July for lavender and cool summer escapes.",
  history: "Long the homeland of the indigenous Ainu, the island was called Ezo, and only its southern tip was controlled by the Matsumae domain in the Edo period. In 1869 the Meiji government renamed it Hokkaidō and set up a Colonization Commission that settled it with farmers and soldier-settlers (tondenhei), aided by American advisers such as William S. Clark. Japan also claims the southern Kuril Islands (the \"Northern Territories\") as part of Hokkaidō; they have been administered by Russia since 1945.",
  sights: [
    ["Sapporo Snow Festival", "Giant snow and ice sculptures in Ōdōri Park every February."],
    ["Shiretoko National Park", "UNESCO-listed peninsula with brown bears, waterfalls and drift ice."],
    ["Hakodate", "Night view from Mt. Hakodate and the star-shaped Goryōkaku fort."],
    ["Otaru Canal", "Stone warehouses, glassworks and music-box shops in an old port town."],
    ["Furano & Biei", "Patchwork hills and lavender fields that peak in July."],
    ["Upopoy National Ainu Museum", "Opened in 2020 in Shiraoi to share Ainu history and culture."]
  ],
  food: [
    ["Miso ramen", "味噌ラーメン", "Sapporo's rich, buttery signature ramen."],
    ["Jingisukan", "ジンギスカン", "Mutton grilled on a dome-shaped skillet."],
    ["Kaisendon", "海鮮丼", "Rice bowls piled with sea urchin, salmon roe and crab."],
    ["Soup curry", "スープカレー", "Thin, spicy curry broth with whole vegetables."],
    ["Ishikari nabe", "石狩鍋", "Salmon and vegetable hotpot in miso broth."]
  ],
  omiyage: [
    ["Shiroi Koibito", "白い恋人", "Langue-de-chat cookies sandwiching white chocolate."],
    ["Royce' Nama Chocolate", "ロイズ 生チョコレート", "Silky ganache squares made with Hokkaidō cream."],
    ["Marusei Butter Sand", "マルセイバターサンド", "Rokkatei's raisin-and-butter-cream biscuits."],
    ["Jaga Pokkuru", "じゃがポックル", "Crunchy potato sticks only sold in Hokkaidō."]
  ]
},
{
  id: "02", en: "Aomori", ja: "青森県", kana: "あおもりけん", suf: "ken", region: "Tōhoku",
  cap: "Aomori", capJa: "青森市", ll: [40.82, 140.74],
  pop: 1140395, pop20: 1237984, area: 9645.64, u15: 9.8, o65: 35.7,
  tag: "Japan's apple capital at the northern tip of Honshū.",
  climate: "Aomori City is one of the snowiest cities on Earth, with several metres of snow each winter. Summers are short and mild; the Pacific side around Hachinohe is drier but gets cool, damp \"yamase\" winds.",
  season: "Late April for Hirosaki's cherry blossoms; early August for the Nebuta festival; October for Oirase's autumn leaves.",
  history: "The Sannai-Maruyama site was one of the largest Jōmon villages, inhabited roughly 5,900–4,200 years ago, and is part of the UNESCO Jōmon Prehistoric Sites of Northern Japan. In the Edo period the region was split between the Tsugaru domain in the west and the Nanbu domain in the east — a rivalry still visible in local dialects. Aomori Prefecture was created in 1871.",
  sights: [
    ["Hirosaki Castle", "Original keep surrounded by about 2,600 cherry trees."],
    ["Aomori Nebuta Matsuri", "Huge illuminated warrior floats parade on 2–7 August."],
    ["Oirase Gorge & Lake Towada", "Mossy stream walk leading to a caldera lake."],
    ["Sannai-Maruyama Site", "Reconstructed Jōmon village with a giant six-pillar tower."],
    ["Shirakami-Sanchi", "UNESCO-listed virgin beech forest shared with Akita."],
    ["Osorezan", "Volcanic \"Mountain of Dread\", one of Japan's three most sacred mountains."]
  ],
  food: [
    ["Apples", "りんご", "Aomori grows about 60% of Japan's apples."],
    ["Ōma tuna", "大間のまぐろ", "Line-caught bluefin, among the most prized in Japan."],
    ["Senbei-jiru", "せんべい汁", "Hachinohe stew with special crackers simmered in broth."],
    ["Scallops", "ほたて", "Farmed in Mutsu Bay; grilled with miso and egg on a shell (kaiyaki miso)."],
    ["Ichigo-ni", "いちご煮", "Clear soup of sea urchin and abalone named for its strawberry look."]
  ],
  omiyage: [
    ["Kininaru Ringo", "気になるリンゴ", "A whole sweetened apple baked inside pastry."],
    ["Apple juice", "りんごジュース", "Single-variety juices from Tsugaru orchards."],
    ["Tsugaru-nuri", "津軽塗", "Lacquerware with speckled, many-layered patterns."],
    ["Hachinohe senbei", "八戸せんべい", "Wheat crackers — plain ones are for senbei-jiru."]
  ]
},
{
  id: "03", en: "Iwate", ja: "岩手県", kana: "いわてけん", suf: "ken", region: "Tōhoku",
  cap: "Morioka", capJa: "盛岡市", ll: [39.70, 141.15],
  pop: 1125502, pop20: 1210534, area: 15275.01, u15: 10.1, o65: 35.4,
  tag: "Japan's second-largest prefecture, with a golden temple and the rugged Sanriku coast.",
  climate: "Cold winters, especially inland where Morioka regularly drops below −10 °C. The Sanriku coast has less snow but cool summer \"yamase\" winds. The coast is exposed to tsunami and was devastated in 2011.",
  season: "Spring and autumn for Hiraizumi; early June for the Chagu Chagu Umakko horse parade in Morioka.",
  history: "In the 11th–12th centuries the Ōshū Fujiwara clan built Hiraizumi into a golden Buddhist capital rivalling Kyoto, until Minamoto no Yoritomo destroyed them in 1189. The Nanbu clan ruled from Morioka during the Edo period. Iwate is the home of poet and children's author Miyazawa Kenji. Its coast suffered heavily in the 2011 Great East Japan Earthquake and tsunami.",
  sights: [
    ["Chūson-ji Konjikidō", "Gold-leaf-covered hall in Hiraizumi (UNESCO, 2011)."],
    ["Mōtsū-ji", "Rare Heian-period Pure Land garden in Hiraizumi."],
    ["Geibikei Gorge", "Boatmen pole flat boats and sing between 50 m cliffs."],
    ["Tōno", "Valley of folk legends — kappa, zashiki-warashi and old farmhouses."],
    ["Jōdogahama", "White-rock beach in Miyako, part of the Sanriku Fukkō National Park."],
    ["Ryūsendō Cave", "One of Japan's three great limestone caves, with deep blue pools."]
  ],
  food: [
    ["Wanko soba", "わんこそば", "Bite-sized soba refilled until you put the lid on."],
    ["Morioka reimen", "盛岡冷麺", "Chewy cold noodles of Korean origin with kimchi."],
    ["Morioka jajamen", "じゃじゃ麺", "Udon-like noodles with meat miso; finish with egg soup."],
    ["Maesawa beef", "前沢牛", "Premium wagyu from southern Iwate."],
    ["Sanriku seafood", "三陸の海の幸", "Oysters, sea urchin and wakame from the rias coast."]
  ],
  omiyage: [
    ["Nanbu tekki", "南部鉄器", "Cast-iron kettles and teapots made since the 1600s."],
    ["Kamome no Tamago", "かもめの玉子", "Egg-shaped sweet bean cakes coated in white chocolate."],
    ["Nanbu senbei", "南部せんべい", "Crisp wheat crackers with sesame or peanuts."]
  ]
},
{
  id: "04", en: "Miyagi", ja: "宮城県", kana: "みやぎけん", suf: "ken", region: "Tōhoku",
  cap: "Sendai", capJa: "仙台市", ll: [38.27, 140.87],
  pop: 2227240, pop20: 2301996, area: 7282.29, u15: 10.8, o65: 29.6,
  tag: "Home of Sendai, the \"City of Trees\" and Tōhoku's largest city.",
  climate: "Mild for Tōhoku: Sendai sees little snow and has cool, pleasant summers, though the Pacific coast can be grey when yamase winds blow in early summer.",
  season: "6–8 August for Sendai Tanabata; autumn for Naruko Gorge.",
  history: "The Nara court built Taga Castle here in 724 as its northern headquarters. In 1600 the one-eyed warlord Date Masamune founded Sendai, and in 1613 he sent the Keichō Embassy led by Hasekura Tsunenaga to Spain and Rome. The coast was among the worst hit by the 2011 earthquake and tsunami.",
  sights: [
    ["Matsushima Bay", "260 pine-clad islets — one of Japan's Three Great Views."],
    ["Zuihōden", "Ornate mausoleum of Date Masamune."],
    ["Sendai Castle ruins", "Hilltop site with the famous statue of Masamune on horseback."],
    ["Sendai Tanabata Matsuri", "Streets hung with giant paper streamers every August."],
    ["Zaō Fox Village", "Over 100 free-roaming foxes in Shiroishi."],
    ["Naruko Gorge", "Spectacular autumn colours and a kokeshi-doll onsen town."]
  ],
  food: [
    ["Gyūtan", "牛たん", "Thick-cut grilled beef tongue, Sendai's signature."],
    ["Zunda mochi", "ずんだ餅", "Rice cakes with sweet mashed edamame."],
    ["Matsushima oysters", "松島の牡蠣", "Grilled or fried, best in winter."],
    ["Harako-meshi", "はらこ飯", "Rice simmered in salmon broth, topped with salmon and roe."],
    ["Sasa-kamaboko", "笹かまぼこ", "Bamboo-leaf-shaped fish cakes."]
  ],
  omiyage: [
    ["Hagi no Tsuki", "萩の月", "Fluffy sponge cakes filled with custard."],
    ["Zunda sweets", "ずんだ", "Zunda mochi, zunda shakes and zunda cream puffs."],
    ["Sasa-kamaboko", "笹かまぼこ", "Grilled fish cakes, also sold in gift boxes."],
    ["Naruko kokeshi", "鳴子こけし", "Wooden dolls whose heads squeak when turned."]
  ]
},
{
  id: "05", en: "Akita", ja: "秋田県", kana: "あきたけん", suf: "ken", region: "Tōhoku",
  cap: "Akita", capJa: "秋田市", ll: [39.72, 140.10],
  pop: 882100, pop20: 959502, area: 11637.52, u15: 8.8, o65: 39.5,
  tag: "Snow country of rice, sake, samurai towns — and the namahage.",
  climate: "Sea of Japan climate: grey, snowy winters (very heavy inland around Yokote) and warm summers. Akita has some of the fewest hours of sunshine in Japan.",
  season: "Late April for Kakunodate's weeping cherries; 3–6 August for the Kantō festival; February for Yokote's snow huts (kamakura).",
  history: "Akita Castle was founded in 733 as a frontier fort. In 1602 Tokugawa Ieyasu moved the Satake clan here from Hitachi, and they ruled until the Meiji era. Rice, cedar timber and mining made the region prosperous. Today Akita has Japan's oldest population, with almost 40% of residents aged 65 or over.",
  sights: [
    ["Kakunodate", "Samurai residences lined with black walls and weeping cherries."],
    ["Lake Tazawa", "Japan's deepest lake at 423 m, with the golden Tatsuko statue."],
    ["Nyūtō Onsen", "Rustic hot springs with milky-white outdoor baths."],
    ["Oga Peninsula", "Home of the namahage demons who visit homes on New Year's Eve."],
    ["Akita Kantō Matsuri", "Performers balance bamboo poles hung with dozens of lanterns."],
    ["Dakigaeri Gorge", "Emerald river and suspension bridge, beautiful in autumn."]
  ],
  food: [
    ["Kiritanpo nabe", "きりたんぽ鍋", "Grilled rice sticks in chicken hotpot."],
    ["Inaniwa udon", "稲庭うどん", "Thin, silky hand-stretched udon — one of Japan's 'three great udon'."],
    ["Iburi-gakko", "いぶりがっこ", "Smoked pickled daikon."],
    ["Hatahata & shottsuru", "ハタハタ・しょっつる", "Sandfish and the fish sauce made from it."],
    ["Akita Komachi rice", "あきたこまち", "One of Japan's best-known rice varieties."]
  ],
  omiyage: [
    ["Iburi-gakko", "いぶりがっこ", "Great with cream cheese and sake."],
    ["Inaniwa udon", "稲庭うどん", "Dried noodles in gift boxes."],
    ["Akita sake", "秋田の地酒", "Brewed from local rice and soft snowmelt water."],
    ["Kabazaiku", "樺細工", "Kakunodate craft of polished wild-cherry bark."]
  ]
},
{
  id: "06", en: "Yamagata", ja: "山形県", kana: "やまがたけん", suf: "ken", region: "Tōhoku",
  cap: "Yamagata", capJa: "山形市", ll: [38.24, 140.36],
  pop: 993127, pop20: 1068027, area: 9323.15, u15: 10.4, o65: 35.6,
  tag: "Cherry country of mountain temples, snow monsters and onsen.",
  climate: "Inland basins with hot summers and very snowy winters. Yamagata City held Japan's national heat record (40.8 °C) from 1933 to 2007. On Mt. Zaō, frozen rime coats trees into \"snow monsters\".",
  season: "June–July for cherries; January–February for Zaō's snow monsters; winter for Ginzan Onsen under snow.",
  history: "Part of the old Dewa Province, Yamagata is home to Dewa Sanzan, three sacred mountains of the Shugendō mountain ascetics (yamabushi). The poet Matsuo Bashō visited Yamadera in 1689 on his famous journey to the Deep North. In the Edo period the Uesugi clan ruled Yonezawa, where lord Uesugi Yōzan became a model of frugal reform.",
  sights: [
    ["Yamadera (Risshaku-ji)", "Over 1,000 stone steps to a cliffside temple."],
    ["Zaō Onsen", "Ski resort famous for the rime-covered 'snow monsters'."],
    ["Ginzan Onsen", "Taishō-era wooden inns lit by gas lamps along a river."],
    ["Dewa Sanzan", "Pilgrimage mountains; Mt. Haguro has a 2,446-step path and five-storey pagoda."],
    ["Mogami River boat ride", "Boatmen sing folk songs through a scenic valley."],
    ["Yonezawa", "Uesugi Shrine and the old castle town."]
  ],
  food: [
    ["Satō Nishiki cherries", "佐藤錦", "Yamagata grows about three-quarters of Japan's cherries."],
    ["Imoni", "芋煮", "Taro and beef stew eaten at autumn riverside parties."],
    ["Yonezawa beef", "米沢牛", "One of Japan's top wagyu brands."],
    ["Dashi", "だし", "Finely chopped summer vegetables served on rice or tofu."],
    ["Hiyashi ramen", "冷やしラーメン", "Cold ramen in chilled soy broth, born in Yamagata City."]
  ],
  omiyage: [
    ["Cherry sweets", "さくらんぼ菓子", "Cherry jellies, cookies and fresh boxes in season."],
    ["Noshi-ume", "のし梅", "Thin sheets of sweet-tart ume jelly between bamboo paper."],
    ["Tendō shōgi pieces", "天童将棋駒", "Tendō makes most of Japan's shogi pieces."],
    ["La France pears", "ラ・フランス", "Yamagata grows most of Japan's European pears."]
  ]
},
{
  id: "07", en: "Fukushima", ja: "福島県", kana: "ふくしまけん", suf: "ken", region: "Tōhoku",
  cap: "Fukushima", capJa: "福島市", ll: [37.75, 140.47],
  pop: 1711937, pop20: 1833152, area: 13784.14, u15: 10.5, o65: 33.7,
  tag: "Japan's third-largest prefecture — samurai Aizu, peaches and five-coloured lakes.",
  climate: "Three distinct zones: the mild Pacific coast (Hamadōri), the central basins with hot summers (Nakadōri), and snowy Aizu in the west.",
  season: "April for Hanamiyama's blossoms; July–August for peaches; October for Bandai's autumn colours.",
  history: "The Aizu domain stayed loyal to the shogunate in the Boshin War of 1868; during the siege of Aizu-Wakamatsu, teenage soldiers of the Byakkotai took their own lives believing the castle had fallen. In 2011 the earthquake, tsunami and Fukushima Daiichi nuclear accident forced large evacuations; most areas have since reopened and reconstruction continues.",
  sights: [
    ["Tsuruga Castle", "Red-tiled keep of Aizu-Wakamatsu."],
    ["Ōuchi-juku", "Edo-period post town of thatched-roof houses."],
    ["Goshikinuma", "Five Coloured Ponds on the slopes of Mt. Bandai."],
    ["Sazaedō", "A 1796 wooden pagoda with a double-helix ramp."],
    ["Hanamiyama Park", "Hillside of blossoms often called a 'peach-blossom paradise'."],
    ["Lake Inawashiro", "Japan's fourth-largest lake, beneath Mt. Bandai."]
  ],
  food: [
    ["Kitakata ramen", "喜多方ラーメン", "Flat, curly noodles in soy broth — eaten even for breakfast."],
    ["Peaches", "桃", "Fukushima is one of Japan's top peach producers."],
    ["Kozuyu", "こづゆ", "Aizu celebration soup made with dried scallops."],
    ["Sauce katsudon", "ソースカツ丼", "Pork cutlet over cabbage and rice, dipped in sauce."],
    ["Namie yakisoba", "なみえ焼そば", "Extra-thick fried noodles from coastal Namie."]
  ],
  omiyage: [
    ["Mamado-ru", "ままどおる", "Soft milk-flavoured buns from Kōriyama."],
    ["Usukawa manjū", "薄皮饅頭", "Thin-skinned sweet bean buns, a Kōriyama classic."],
    ["Akabeko", "赤べこ", "Bobbing red papier-mâché cow, an Aizu good-luck charm."],
    ["Okiagari-koboshi", "起き上がり小法師", "Tiny tumbler dolls that always stand back up."]
  ]
},
{
  id: "08", en: "Ibaraki", ja: "茨城県", kana: "いばらきけん", suf: "ken", region: "Kantō",
  cap: "Mito", capJa: "水戸市", ll: [36.34, 140.45],
  pop: 2791207, pop20: 2867009, area: 6097.39, u15: 10.8, o65: 30.9,
  tag: "Natto, melons and science city Tsukuba.",
  climate: "Mild Pacific climate with hot, humid summers and dry, sunny winters; rare snow.",
  season: "February–March for Kairakuen's plum blossoms; late April for blue nemophila at Hitachi Seaside Park.",
  history: "Formerly Hitachi Province, the area was ruled in the Edo period by the Mito branch of the Tokugawa family. Its scholarly 'Mito school' promoted reverence for the emperor and influenced the movement that toppled the shogunate. In the 1960s–80s the national government built Tsukuba Science City, now home to JAXA's space centre and many research institutes.",
  sights: [
    ["Kairakuen", "One of Japan's Three Great Gardens, with about 3,000 plum trees."],
    ["Hitachi Seaside Park", "Hills of blue nemophila in spring and red kochia in autumn."],
    ["Fukuroda Falls", "Four-tier waterfall that freezes in hard winters."],
    ["Ushiku Daibutsu", "A 120 m bronze Buddha, among the tallest statues in the world."],
    ["Mt. Tsukuba", "Twin-peaked mountain with views over the Kantō Plain."],
    ["Kashima Jingū", "Ancient shrine to a god of martial arts."]
  ],
  food: [
    ["Mito natto", "水戸納豆", "Fermented soybeans, traditionally wrapped in straw."],
    ["Ankō nabe", "あんこう鍋", "Winter anglerfish hotpot from the Ibaraki coast."],
    ["Hoshi-imo", "ほしいも", "Dried sweet potato — Ibaraki makes about 90% of Japan's."],
    ["Melons", "メロン", "Ibaraki is Japan's top melon producer."],
    ["Kasama chestnuts", "笠間の栗", "Used in mont blanc and chestnut rice."]
  ],
  omiyage: [
    ["Wara natto", "わら納豆", "Natto in a straw bundle — a Mito classic."],
    ["Hoshi-imo", "ほしいも", "Chewy, naturally sweet dried potato."],
    ["Mito no Ume", "水戸の梅", "Sweet bean paste wrapped in shiso leaves."],
    ["Kasama-yaki", "笠間焼", "Free-spirited pottery from Kasama."]
  ]
},
{
  id: "09", en: "Tochigi", ja: "栃木県", kana: "とちぎけん", suf: "ken", region: "Kantō",
  cap: "Utsunomiya", capJa: "宇都宮市", ll: [36.57, 139.88],
  pop: 1864833, pop20: 1933146, area: 6408.09, u15: 10.8, o65: 30.5,
  tag: "Nikkō's dazzling shrines, gyōza and strawberries.",
  climate: "Inland climate with hot summers and frequent thunderstorms (Utsunomiya is called a 'thunder town') and cold, dry winters. Nikkō and Nasu are cool highlands.",
  season: "October–November for Nikkō's autumn leaves; late April–May for Ashikaga's wisteria.",
  history: "In 1617 the remains of Tokugawa Ieyasu were enshrined at Nikkō, and his grandson Iemitsu rebuilt Tōshō-gū in lavish style in 1636. In the 1890s pollution from the Ashio copper mine sparked Japan's first major environmental protest, led by politician Tanaka Shōzō.",
  sights: [
    ["Nikkō Tōshō-gū", "Ornate mausoleum of Ieyasu, with the 'see no evil' monkeys (UNESCO)."],
    ["Kegon Falls & Lake Chūzenji", "97 m waterfall flowing from a mountain lake."],
    ["Ashikaga Flower Park", "Giant wisteria trellises glowing at night."],
    ["Ashikaga Gakkō", "Often called Japan's oldest school."],
    ["Mashiko", "Pottery town with a huge spring and autumn fair."],
    ["Nasu Highlands", "Imperial villa area with ranches and onsen."]
  ],
  food: [
    ["Utsunomiya gyōza", "宇都宮餃子", "The city competes for the title of Japan's gyōza capital."],
    ["Strawberries", "いちご", "Tochigi has led Japan in strawberries for over 50 years (Tochiotome, Tochiaika)."],
    ["Nikkō yuba", "日光ゆば", "Tofu skin, rolled thick in the Nikkō style."],
    ["Kanpyō", "かんぴょう", "Dried gourd strips; Tochigi makes almost all of Japan's."],
    ["Shimotsukare", "しもつかれ", "Folk dish of salmon head, soybeans and grated vegetables."]
  ],
  omiyage: [
    ["Strawberry sweets", "いちごのお菓子", "From jams to strawberry daifuku."],
    ["Mashiko-yaki", "益子焼", "Thick, earthy pottery for everyday use."],
    ["Nikkō yuba", "日光ゆば", "Dried or in sweets."],
    ["Frozen gyōza", "冷凍餃子", "Take Utsunomiya's dumplings home."]
  ]
},
{
  id: "10", en: "Gunma", ja: "群馬県", kana: "ぐんまけん", suf: "ken", region: "Kantō",
  cap: "Maebashi", capJa: "前橋市", ll: [36.39, 139.06],
  pop: 1867582, pop20: 1939110, area: 6362.28, u15: 10.8, o65: 31.1,
  tag: "Hot-spring heaven and the historic heart of Japan's silk industry.",
  climate: "Very hot summers with thunderstorms — Isesaki set Japan's all-time record of 41.8 °C on 5 August 2025. Winters are dry with a cold northwesterly wind (karakkaze); the northern mountains get heavy snow.",
  season: "Year-round for onsen; winter for skiing at Minakami; late May–June for Oze's skunk cabbage.",
  history: "Ancient Kōzuke Province contains hundreds of kofun burial mounds. Silk-raising made Gunma prosperous, and in 1872 the government opened the Tomioka Silk Mill, a model factory that helped modernise Japan (UNESCO, 2014). Takasaki is famous for its daruma dolls.",
  sights: [
    ["Kusatsu Onsen", "Steaming 'yubatake' field of hot water in the town centre."],
    ["Ikaho Onsen", "Stone stairway lined with inns and shops."],
    ["Tomioka Silk Mill", "1872 brick factory, a UNESCO World Heritage Site."],
    ["Oze National Park", "High-altitude marshland crossed by wooden boardwalks."],
    ["Shōrinzan Daruma-ji", "Takasaki temple, birthplace of the daruma doll."],
    ["Minakami", "Rafting, canyoning and skiing in the mountains."]
  ],
  food: [
    ["Konnyaku", "こんにゃく", "Gunma grows over 90% of Japan's konnyaku potatoes."],
    ["Mizusawa udon", "水沢うどん", "Glossy, firm udon — one of the 'three great udon'."],
    ["Yaki-manjū", "焼きまんじゅう", "Steamed buns grilled with sweet miso glaze."],
    ["Okkirikomi", "おっきりこみ", "Broad noodles simmered in vegetable stew."],
    ["Shimonita negi", "下仁田ねぎ", "Thick, sweet winter leeks."]
  ],
  omiyage: [
    ["Takasaki daruma", "高崎だるま", "Paint in one eye when you set a goal, the other when you reach it."],
    ["Gâteau Festa Harada rusks", "ガトーフェスタハラダ ラスク", "Buttery baguette rusks, a national favourite."],
    ["Konnyaku goods", "こんにゃく製品", "Konnyaku jelly and even konnyaku noodles."],
    ["Yaki-manjū kits", "焼きまんじゅう", "Buns and miso sauce to grill at home."]
  ]
},
{
  id: "11", en: "Saitama", ja: "埼玉県", kana: "さいたまけん", suf: "ken", region: "Kantō",
  cap: "Saitama", capJa: "さいたま市", ll: [35.86, 139.65],
  pop: 7287169, pop20: 7344765, area: 3797.75, u15: 11.1, o65: 27.5,
  tag: "Tokyo's big northern neighbour — 'Little Edo' Kawagoe and the mountains of Chichibu.",
  climate: "Inland heat: Kumagaya reached 41.1 °C in 2018, then a national record. Winters are dry and sunny with cold winds.",
  season: "April–May for Chichibu's moss phlox; early December for the Chichibu Night Festival.",
  history: "Part of old Musashi Province. A 5th-century iron sword with a gold-inlaid inscription found at the Sakitama kofun is a key early written record. In the Edo period Kawagoe flourished by supplying the capital. Saitama City was formed in 2001 by merging Urawa, Ōmiya and Yono.",
  sights: [
    ["Kawagoe", "Clay-walled warehouses and the Toki no Kane bell tower."],
    ["Chichibu", "Hitsujiyama's pink moss phlox and a famous night festival."],
    ["Nagatoro", "River rafting past layered rock terraces."],
    ["Railway Museum", "Japan's largest railway museum, in Ōmiya."],
    ["Sakitama Kofun Park", "Nine large keyhole-shaped burial mounds."],
    ["G-Cans", "Gigantic underground flood tunnel nicknamed the 'underground temple'."]
  ],
  food: [
    ["Kawagoe sweet potatoes", "川越のさつまいも", "Sweet potato snacks along Candy Alley."],
    ["Sōka senbei", "草加せんべい", "Hard soy-sauce rice crackers."],
    ["Waraji katsu", "わらじカツ", "Chichibu's huge sandal-shaped pork cutlets."],
    ["Fukaya negi", "深谷ねぎ", "Sweet green onions."],
    ["Kawagoe unagi", "川越のうなぎ", "Eel restaurants with centuries of history."]
  ],
  omiyage: [
    ["Sōka senbei", "草加せんべい", "Crunchy, grilled by hand."],
    ["Jūmangoku manjū", "十万石まんじゅう", "Soft buns, a local favourite from Gyōda."],
    ["Sayama tea", "狭山茶", "Rich-flavoured green tea."],
    ["Iwatsuki dolls", "岩槻人形", "Hina dolls for the Girls' Festival."]
  ]
},
{
  id: "12", en: "Chiba", ja: "千葉県", kana: "ちばけん", suf: "ken", region: "Kantō",
  cap: "Chiba", capJa: "千葉市", ll: [35.61, 140.12],
  pop: 6258512, pop20: 6284480, area: 5157.57, u15: 11.0, o65: 28.1,
  tag: "The Bōsō Peninsula — Narita, Disney, peanuts and surf beaches.",
  climate: "Mild maritime climate; the southern Bōsō coast is warm enough for winter flower fields. Snow is rare.",
  season: "January–March for southern Bōsō's flowers; summer for Kujūkuri's beaches.",
  history: "Formed from the old provinces of Shimōsa, Kazusa and Awa. Naritasan Shinshō-ji was founded in 940. Narita International Airport opened in 1978 after years of fierce farmer protests, and Tokyo Disneyland opened in Urayasu in 1983. Noda and Chōshi are historic centres of soy-sauce brewing.",
  sights: [
    ["Naritasan Shinshō-ji", "Vast temple complex near the airport."],
    ["Tokyo Disney Resort", "Disneyland and DisneySea, in Urayasu."],
    ["Mt. Nokogiri", "Cliff-top 'peek into hell' and a giant carved Buddha."],
    ["Sawara", "Canal town of willows and old merchant houses."],
    ["Kujūkuri Beach", "A 60 km sandy beach popular with surfers."],
    ["Yōrō Valley", "Gorge with a famous double-cave waterfall."]
  ],
  food: [
    ["Peanuts", "落花生", "Chiba grows over 80% of Japan's peanuts."],
    ["Namerō", "なめろう", "Fishermen's dish of minced fish, miso and herbs."],
    ["Katsuura tantanmen", "勝浦タンタンメン", "Fiery chilli-oil noodles."],
    ["Sardine dishes", "いわし料理", "From Chōshi, one of Japan's top fishing ports."],
    ["Biwa", "びわ", "Loquats from southern Bōsō."]
  ],
  omiyage: [
    ["Peanut sweets", "落花生のお菓子", "Roasted peanuts, peanut monaka and more."],
    ["Soy sauce", "醤油", "From the breweries of Noda and Chōshi."],
    ["Biwa jelly", "びわゼリー", "Loquat sweets from Tomiura."]
  ]
},
{
  id: "13", en: "Tōkyō", ja: "東京都", kana: "とうきょうと", suf: "to", region: "Kantō",
  cap: "Tokyo (Shinjuku)", capJa: "東京（新宿区）", ll: [35.69, 139.69],
  pop: 14246219, pop20: 14047594, area: 2194.03, u15: 10.5, o65: 22.7,
  tag: "Japan's capital and one of the world's largest metropolises.",
  climate: "Humid subtropical: hot, humid summers with a June–July rainy season and typhoons in September; dry, sunny winters around 5 °C in January.",
  season: "Late March–early April for cherry blossoms; November for autumn leaves.",
  history: "Edo was a small castle town until Tokugawa Ieyasu made it his base in 1590; as the shogun's capital from 1603 it became one of the world's largest cities. Renamed Tokyo in 1868, it became Japan's capital. It was devastated by the 1923 Great Kantō Earthquake and the 1945 air raids, then rebuilt to host the 1964 and 2020 (held 2021) Olympics. The metropolis also includes the Izu and Ogasawara islands, stretching about 1,000 km south.",
  sights: [
    ["Sensō-ji", "Tokyo's oldest temple, in Asakusa."],
    ["Meiji Jingū", "Forested shrine to Emperor Meiji beside Harajuku."],
    ["Imperial Palace East Gardens", "On the grounds of old Edo Castle."],
    ["Tokyo Skytree", "At 634 m, Japan's tallest structure."],
    ["Shibuya Crossing", "The famous scramble crossing."],
    ["Ogasawara Islands", "UNESCO-listed subtropical islands, 24 hours away by ferry."]
  ],
  food: [
    ["Edomae sushi", "江戸前寿司", "Nigiri sushi was born as Edo street food."],
    ["Monjayaki", "もんじゃ焼き", "Runny griddle dish, best in Tsukishima."],
    ["Tempura & soba", "天ぷら・そば", "Classic Edo fast food."],
    ["Chanko nabe", "ちゃんこ鍋", "Sumo wrestlers' hotpot in Ryōgoku."],
    ["Fukagawa-meshi", "深川めし", "Clams and leeks over rice."]
  ],
  omiyage: [
    ["Tokyo Banana", "東京ばな奈", "Banana-custard sponge cakes."],
    ["Ningyō-yaki", "人形焼", "Doll-shaped cakes filled with red bean."],
    ["Kaminari-okoshi", "雷おこし", "Crunchy puffed-rice crackers from Asakusa."],
    ["Edo kiriko", "江戸切子", "Hand-cut glassware."]
  ]
},
{
  id: "14", en: "Kanagawa", ja: "神奈川県", kana: "かながわけん", suf: "ken", region: "Kantō",
  cap: "Yokohama", capJa: "横浜市", ll: [35.45, 139.64],
  pop: 9193657, pop20: 9237337, area: 2416.11, u15: 10.9, o65: 26.0,
  tag: "Port city Yokohama, samurai capital Kamakura and the hot springs of Hakone.",
  climate: "Mild Pacific climate with hot, humid summers. Hakone's mountains are cooler and often misty.",
  season: "June for Kamakura's hydrangeas; November for Hakone's autumn colours.",
  history: "Kamakura was the seat of Japan's first warrior government, the Kamakura shogunate (1185–1333). Commodore Perry's arrival led to the Convention of Kanagawa in 1854, and Yokohama opened as a treaty port in 1859, quickly becoming Japan's gateway for foreign trade and ideas.",
  sights: [
    ["Great Buddha of Kamakura", "13 m bronze Buddha at Kōtoku-in."],
    ["Tsurugaoka Hachimangū", "Kamakura's central shrine."],
    ["Hakone", "Onsen, Lake Ashi cruises and Mt. Fuji views."],
    ["Yokohama Chinatown", "Japan's largest Chinatown."],
    ["Minato Mirai", "Waterfront skyline and the Red Brick Warehouses."],
    ["Enoshima", "Island with shrines, caves and sea views."]
  ],
  food: [
    ["Shūmai", "シウマイ", "Yokohama's famous pork dumplings."],
    ["Iekei ramen", "家系ラーメン", "Thick pork-soy broth, born in Yokohama."],
    ["Shirasu-don", "しらす丼", "Tiny whitebait over rice in Shōnan."],
    ["Napolitan", "ナポリタン", "Ketchup spaghetti said to come from Yokohama."],
    ["Kuro-tamago", "黒たまご", "Eggs blackened in Ōwakudani's volcanic springs."]
  ],
  omiyage: [
    ["Kiyōken shūmai", "崎陽軒シウマイ", "Sold at stations since 1928."],
    ["Hato Sablé", "鳩サブレー", "Dove-shaped butter cookies from Kamakura."],
    ["Ariake Harbour", "ありあけハーバー", "Chestnut cakes shaped like boats."],
    ["Hakone yosegi-zaiku", "箱根寄木細工", "Wood marquetry, including trick puzzle boxes."]
  ]
},
{
  id: "15", en: "Niigata", ja: "新潟県", kana: "にいがたけん", suf: "ken", region: "Chūbu",
  cap: "Niigata", capJa: "新潟市", ll: [37.90, 139.02],
  pop: 2068476, pop20: 2201272, area: 12583.96, u15: 10.5, o65: 34.2,
  tag: "Snow Country — the best rice and the most sake breweries in Japan.",
  climate: "Sea of Japan climate with some of the world's heaviest snowfall in its mountains (the setting of Kawabata's novel 'Snow Country'); hot, humid summers.",
  season: "Winter for skiing at Yuzawa; autumn for new-harvest rice and sake.",
  history: "Echigo Province was ruled by the warlord Uesugi Kenshin, famed rival of Takeda Shingen. Sado Island was a place of exile for an emperor, the monk Nichiren and Noh master Zeami, and its gold mine was added to the UNESCO list in 2024. Niigata port opened to foreign trade in 1869.",
  sights: [
    ["Sado Island", "Gold mine, tub-boat rides and the Kodo drummers."],
    ["Echigo-Yuzawa", "Ski resorts an hour from Tokyo by shinkansen."],
    ["Kiyotsu Gorge Tunnel", "Art tunnel with a mirrored pool reflecting the gorge."],
    ["Echigo-Tsumari Art Field", "Art scattered across rice-farming villages."],
    ["Yahiko Shrine", "Ancient shrine at the foot of Mt. Yahiko."],
    ["Murakami", "Salmon town with old merchant houses."]
  ],
  food: [
    ["Koshihikari rice", "コシヒカリ", "Uonuma Koshihikari is often called Japan's best rice."],
    ["Sake", "日本酒", "Niigata has about 90 breweries — the most of any prefecture."],
    ["Hegi soba", "へぎそば", "Soba bound with seaweed, served in bite-size bundles."],
    ["Noppe", "のっぺ", "Simmered root vegetables with taro."],
    ["Tare-katsudon", "タレカツ丼", "Thin cutlets dipped in sweet soy sauce."]
  ],
  omiyage: [
    ["Sasa-dango", "笹団子", "Mugwort dumplings wrapped in bamboo leaves."],
    ["Kaki-no-tane", "柿の種", "Spicy rice crackers, invented in Nagaoka."],
    ["Niigata sake", "新潟の地酒", "Crisp, dry 'tanrei karakuchi' style."],
    ["Tsubame-Sanjō metalware", "燕三条の金属製品", "Cutlery and kitchen tools."]
  ]
},
{
  id: "16", en: "Toyama", ja: "富山県", kana: "とやまけん", suf: "ken", region: "Chūbu",
  cap: "Toyama", capJa: "富山市", ll: [36.70, 137.21],
  pop: 985675, pop20: 1034814, area: 4247.58, u15: 10.5, o65: 33.2,
  tag: "Snow walls, sparkling seafood and the Northern Alps rising behind the bay.",
  climate: "Heavy winter snow, especially in the mountains, where the Tateyama snow walls can top 15 m. Summers are hot and humid.",
  season: "April–June for the Yuki-no-Ōtani snow corridor; winter for yellowtail from Himi.",
  history: "Etchū Province was ruled by a branch of the Maeda clan in the Edo period. From the late 1600s, Toyama's medicine peddlers travelled Japan with a 'use first, pay later' system. Kurobe Dam, completed in 1963, is Japan's tallest dam.",
  sights: [
    ["Tateyama Kurobe Alpine Route", "Buses, ropeways and the Yuki-no-Ōtani snow walls."],
    ["Kurobe Dam", "186 m dam with dramatic water releases."],
    ["Gokayama", "Thatched gasshō-zukuri villages (UNESCO, with Shirakawa-gō)."],
    ["Kurobe Gorge Railway", "Open-air trolley through a deep gorge."],
    ["Amaharashi Coast", "Views of the Tateyama range across the bay."],
    ["Toyama Glass Art Museum", "Glass art in a building by Kengo Kuma."]
  ],
  food: [
    ["Shiro-ebi", "白えび", "Delicate 'white shrimp', jewel of Toyama Bay."],
    ["Hotaru-ika", "ホタルイカ", "Glowing firefly squid in spring."],
    ["Masu-zushi", "ますの寿司", "Pressed trout sushi in bamboo leaves."],
    ["Himi kan-buri", "氷見の寒ぶり", "Fatty winter yellowtail."],
    ["Toyama Black ramen", "富山ブラック", "Very dark, salty soy broth."]
  ],
  omiyage: [
    ["Masu-zushi", "ますの寿司", "Sold in round wooden boxes."],
    ["Decorative kamaboko", "細工かまぼこ", "Fish cakes shaped like sea bream and cranes."],
    ["Toyama medicine", "富山のくすり", "Traditional herbal remedies."],
    ["Takaoka copperware", "高岡銅器", "Bronze and copper casting, made for 400 years."]
  ]
},
{
  id: "17", en: "Ishikawa", ja: "石川県", kana: "いしかわけん", suf: "ken", region: "Chūbu",
  cap: "Kanazawa", capJa: "金沢市", ll: [36.59, 136.63],
  pop: 1088221, pop20: 1132526, area: 4190.94, u15: 11.3, o65: 30.7,
  tag: "Kanazawa — gardens, geisha districts and gold leaf — plus the Noto Peninsula.",
  climate: "Frequent rain and snow; locals joke that in Kanazawa you might forget your lunch, but never your umbrella. Summers are humid.",
  season: "Winter for crab and snow-draped Kenrokuen; spring for blossoms.",
  history: "From 1488 to 1580 Kaga was run by Ikkō-ikki, leagues of Buddhist farmers and monks. The Maeda clan then ruled the Kaga domain, the richest in Japan, and poured money into crafts and culture. Kanazawa escaped bombing in World War II. On 1 January 2024 a magnitude 7.6 earthquake struck the Noto Peninsula; recovery is ongoing.",
  sights: [
    ["Kenrokuen", "One of Japan's Three Great Gardens."],
    ["Higashi Chaya District", "Wooden teahouses of a historic geisha quarter."],
    ["Kanazawa Castle Park", "Restored gates and turrets beside Kenrokuen."],
    ["21st Century Museum", "Contemporary art, including the 'swimming pool'."],
    ["Shiroyone Senmaida", "Over 1,000 tiny terraced rice fields by the sea on Noto."],
    ["Nagamachi", "Samurai district with earthen walls."]
  ],
  food: [
    ["Jibu-ni", "治部煮", "Duck simmered in thickened broth."],
    ["Snow crab", "加能ガニ・香箱ガニ", "Winter crab, including small female kōbako crab."],
    ["Nodoguro", "のどぐろ", "Rich blackthroat seaperch."],
    ["Kanazawa curry", "金沢カレー", "Thick dark curry with cutlet on a steel plate."],
    ["Kaga vegetables", "加賀野菜", "Heirloom vegetables."]
  ],
  omiyage: [
    ["Gold leaf", "金箔", "Kanazawa makes about 99% of Japan's gold leaf — even on ice cream."],
    ["Kutani-yaki", "九谷焼", "Boldly coloured porcelain."],
    ["Wajima-nuri", "輪島塗", "Sturdy, many-layered lacquerware from Noto."],
    ["Wagashi", "和菓子", "Kanazawa is one of Japan's great sweets cities."]
  ]
},
{
  id: "18", en: "Fukui", ja: "福井県", kana: "ふくいけん", suf: "ken", region: "Chūbu",
  cap: "Fukui", capJa: "福井市", ll: [36.06, 136.22],
  pop: 729386, pop20: 766863, area: 4190.52, u15: 11.7, o65: 31.8,
  tag: "Dinosaurs, Zen and Echizen crab.",
  climate: "Snowy winters on the Sea of Japan with occasional record snowfalls; hot, humid summers.",
  season: "November–March for Echizen crab; summer for the Dinosaur Museum and beaches.",
  history: "The Asakura clan ruled from Ichijōdani until Oda Nobunaga destroyed it in 1573. The monk Dōgen founded Eihei-ji, head temple of Sōtō Zen, in 1244. The Wakasa coast supplied Kyoto with fish along the 'Mackerel Road'. Fukui is one of Japan's richest dinosaur fossil sites.",
  sights: [
    ["Fukui Prefectural Dinosaur Museum", "One of the world's great dinosaur museums, in Katsuyama."],
    ["Tōjinbō", "Dramatic columnar basalt sea cliffs."],
    ["Eihei-ji", "Working Zen monastery in a cedar forest."],
    ["Ichijōdani", "Excavated ruins of a samurai town."],
    ["Maruoka Castle", "One of Japan's 12 surviving original castle keeps."],
    ["Mikata Five Lakes", "Five lakes of different colours."]
  ],
  food: [
    ["Echizen crab", "越前がに", "Prized male snow crab."],
    ["Echizen oroshi soba", "越前おろしそば", "Cold soba with spicy grated daikon."],
    ["Sauce katsudon", "ソースカツ丼", "Thin cutlets dipped in Worcester-style sauce."],
    ["Heshiko", "へしこ", "Mackerel fermented in rice bran."],
    ["Yaki-saba", "焼き鯖", "Whole grilled mackerel on a stick."]
  ],
  omiyage: [
    ["Habutae mochi", "羽二重餅", "Silky-soft rice cake."],
    ["Mizu-yōkan", "水ようかん", "Fukui eats this bean jelly in winter."],
    ["Sabae eyeglasses", "鯖江のメガネ", "Sabae makes over 90% of Japan's frames."],
    ["Echizen knives", "越前打刃物", "Hand-forged blades with 700 years of history."]
  ]
},
{
  id: "19", en: "Yamanashi", ja: "山梨県", kana: "やまなしけん", suf: "ken", region: "Chūbu",
  cap: "Kōfu", capJa: "甲府市", ll: [35.66, 138.57],
  pop: 779912, pop20: 809974, area: 4465.27, u15: 10.8, o65: 32.0,
  tag: "Mt. Fuji's northern side — lakes, vineyards and orchards.",
  climate: "Inland basin with hot summers, cold dry winters, low rainfall and lots of sunshine — ideal for fruit.",
  season: "April for blossoms and Fuji views; July–September for peaches and grapes.",
  history: "Kai Province was the base of Takeda Shingen (1521–1573), one of the most famous warlords of the Sengoku era; his flood levees still exist. The Kōshū Kaidō highway linked it to Edo.",
  sights: [
    ["Fuji Five Lakes", "Kawaguchiko and friends, with mirror views of Fuji."],
    ["Chūreitō Pagoda", "Five-storey pagoda framing Fuji and cherry blossoms."],
    ["Oshino Hakkai", "Eight clear spring ponds fed by Fuji's snowmelt."],
    ["Shōsenkyō Gorge", "Granite cliffs and waterfalls near Kōfu."],
    ["Katsunuma wineries", "Heart of the Kōshū wine region."],
    ["Minobusan Kuon-ji", "Head temple of Nichiren Buddhism."]
  ],
  food: [
    ["Hōtō", "ほうとう", "Flat noodles in miso stew with pumpkin."],
    ["Yoshida udon", "吉田のうどん", "Very firm udon from Fujiyoshida."],
    ["Grapes & peaches", "ぶどう・もも", "Yamanashi is Japan's top producer of both."],
    ["Kōshū wine", "甲州ワイン", "Made from Japan's native Kōshū grape."],
    ["Torimotsu-ni", "鳥もつ煮", "Glazed chicken giblets, a Kōfu specialty."]
  ],
  omiyage: [
    ["Shingen mochi", "信玄餅", "Mochi with roasted soy flour and brown-sugar syrup."],
    ["Kōshū wine", "甲州ワイン", "Light, crisp white wine."],
    ["Jewellery & crystal", "甲府の宝飾品", "Kōfu is Japan's jewellery-making centre."],
    ["Dried fruit", "ドライフルーツ", "Including hoshigaki dried persimmons."]
  ]
},
{
  id: "20", en: "Nagano", ja: "長野県", kana: "ながのけん", suf: "ken", region: "Chūbu",
  cap: "Nagano", capJa: "長野市", ll: [36.65, 138.18],
  pop: 1954950, pop20: 2048011, area: 13561.56, u15: 11.2, o65: 32.9,
  tag: "The roof of Japan — Alps, snow monkeys and soba.",
  climate: "Highland climate: cold winters, cool and fairly dry summers, and big swings between day and night. The Japanese Alps run through the prefecture.",
  season: "Winter for skiing and snow monkeys; summer for hiking in Kamikōchi.",
  history: "Shinano Province saw the famous battles of Kawanakajima between Takeda Shingen and Uesugi Kenshin. Zenkō-ji, founded in the 7th century, drew pilgrims from across Japan, and the Nakasendō highway passed through the Kiso Valley. Nagano hosted the 1998 Winter Olympics.",
  sights: [
    ["Matsumoto Castle", "Black 'crow castle', a National Treasure."],
    ["Zenkō-ji", "Ancient temple with a pitch-dark tunnel under the altar."],
    ["Jigokudani Monkey Park", "Snow monkeys bathing in hot springs."],
    ["Kamikōchi", "Alpine valley with the Kappa Bridge."],
    ["Tsumago-juku", "Preserved Nakasendō post town in the Kiso Valley."],
    ["Suwa Taisha", "Ancient shrine famous for the Onbashira log festival."]
  ],
  food: [
    ["Shinshū soba", "信州そば", "Buckwheat noodles from cool highlands."],
    ["Oyaki", "おやき", "Dumplings stuffed with vegetables or bean paste."],
    ["Nozawana-zuke", "野沢菜漬け", "Pickled turnip greens."],
    ["Shinshū miso", "信州味噌", "Nagano makes about half of Japan's miso."],
    ["Apples", "りんご", "Japan's number two apple producer."]
  ],
  omiyage: [
    ["Shichimi", "七味唐からし", "Seven-spice blend sold outside Zenkō-ji."],
    ["Obuse chestnut sweets", "小布施の栗菓子", "Chestnut sweets like kuri-kanoko."],
    ["Nozawana-zuke", "野沢菜漬け", "Tangy pickled greens."],
    ["Shinshū miso", "信州味噌", "Mellow, golden miso."]
  ]
},
{
  id: "21", en: "Gifu", ja: "岐阜県", kana: "ぎふけん", suf: "ken", region: "Chūbu",
  cap: "Gifu", capJa: "岐阜市", ll: [35.42, 136.76],
  pop: 1891489, pop20: 1978742, area: 10621.29, u15: 11.4, o65: 31.4,
  tag: "Thatched villages, old Takayama and the battlefield of Sekigahara.",
  climate: "The southern Mino plain is one of Japan's hottest areas (Tajimi hit 40.9 °C in 2007); the northern Hida mountains are cold and snowy.",
  season: "Winter for snowy Shirakawa-gō; April and October for the Takayama Festival.",
  history: "In 1567 Oda Nobunaga captured Inabayama Castle and renamed the town Gifu. In 1600 the Battle of Sekigahara decided Tokugawa supremacy over Japan. Seki has made swords and blades for some 800 years.",
  sights: [
    ["Shirakawa-gō", "Thatched gasshō-zukuri farmhouses (UNESCO)."],
    ["Takayama", "Edo-era merchant streets and morning markets."],
    ["Gifu Castle", "Hilltop castle on Mt. Kinka."],
    ["Nagara River ukai", "Night cormorant fishing by torchlight."],
    ["Gujō Hachiman", "Water town with a month-long summer dance festival."],
    ["Magome-juku", "Stone-paved Nakasendō post town."]
  ],
  food: [
    ["Hida beef", "飛騨牛", "Richly marbled wagyu."],
    ["Hoba miso", "朴葉味噌", "Miso grilled on a magnolia leaf."],
    ["Keichan", "けいちゃん", "Chicken stir-fry with cabbage."],
    ["Ayu", "鮎", "Sweetfish salt-grilled on skewers."],
    ["Gohei-mochi", "五平餅", "Grilled rice on a stick with nut-miso sauce."]
  ],
  omiyage: [
    ["Sarubobo", "さるぼぼ", "Faceless 'baby monkey' charms from Hida."],
    ["Seki knives", "関の刃物", "Kitchen knives and scissors from Seki."],
    ["Gifu lanterns", "岐阜提灯", "Delicate paper lanterns."],
    ["Kuri-kinton", "栗きんとん", "Chestnut sweets from Nakatsugawa."]
  ]
},
{
  id: "22", en: "Shizuoka", ja: "静岡県", kana: "しずおかけん", suf: "ken", region: "Chūbu",
  cap: "Shizuoka", capJa: "静岡市", ll: [34.98, 138.38],
  pop: 3468845, pop20: 3633202, area: 7777.35, u15: 11.1, o65: 31.2,
  tag: "Green tea, wasabi and Mt. Fuji's southern face.",
  climate: "Mild and sunny Pacific climate; snow is very rare on the coast and the Izu Peninsula stays warm in winter.",
  season: "Clear winter days for Fuji views; spring for new-season tea; February for Kawazu's early cherry blossoms.",
  history: "Tokugawa Ieyasu grew up partly in Sunpu (Shizuoka) and retired there. The Tōkaidō road had 22 post stations in the prefecture. In 1854 Shimoda became one of the first ports opened to American ships. Mt. Fuji, shared with Yamanashi, became a UNESCO site in 2013.",
  sights: [
    ["Mt. Fuji & Miho no Matsubara", "Pine-lined beach with classic Fuji views."],
    ["Izu Peninsula", "Onsen, rugged coastline and the Jōgasaki cliffs."],
    ["Kunōzan Tōshō-gū", "Ieyasu's first resting place, 1,159 steps up."],
    ["Shuzenji", "Bamboo-lined onsen town."],
    ["Ōigawa Railway", "Steam trains through tea country."],
    ["Lake Hamana", "Eel farms and resort towns."]
  ],
  food: [
    ["Green tea", "静岡茶", "Shizuoka and Kagoshima grow most of Japan's tea."],
    ["Unagi", "うなぎ", "Eel from Lake Hamana."],
    ["Shizuoka oden", "静岡おでん", "Dark broth topped with fish powder."],
    ["Hamamatsu gyōza", "浜松餃子", "Served in a circle with bean sprouts."],
    ["Sakura shrimp", "桜えび", "Tiny pink shrimp found only in Suruga Bay in Japan."]
  ],
  omiyage: [
    ["Unagi Pie", "うなぎパイ", "Crunchy pastry made with eel extract."],
    ["Shizuoka tea", "静岡茶", "Sencha and deep-steamed fukamushi tea."],
    ["Wasabi-zuke", "わさび漬け", "Wasabi pickled in sake lees."],
    ["Fuji souvenirs", "富士山グッズ", "Fuji-shaped everything."]
  ]
},
{
  id: "23", en: "Aichi", ja: "愛知県", kana: "あいちけん", suf: "ken", region: "Chūbu",
  cap: "Nagoya", capJa: "名古屋市", ll: [35.18, 136.91],
  pop: 7449403, pop20: 7542415, area: 5173.07, u15: 12.2, o65: 25.8,
  tag: "Home of Toyota, Nagoya Castle and the three unifiers of Japan.",
  climate: "Hot, humid summers and cold, dry winters with the Ibuki-oroshi wind blowing off the mountains.",
  season: "Spring and autumn; summer is very hot.",
  history: "Owari and Mikawa provinces produced all three 'great unifiers' of Japan: Oda Nobunaga, Toyotomi Hideyoshi and Tokugawa Ieyasu. The Owari branch of the Tokugawa ruled from Nagoya Castle. Today Aichi is Japan's manufacturing powerhouse, home to Toyota and much of the aerospace industry.",
  sights: [
    ["Nagoya Castle", "Famous for its golden shachihoko roof ornaments."],
    ["Atsuta Jingū", "Holds the sacred Kusanagi sword."],
    ["Inuyama Castle", "One of Japan's five National Treasure castles."],
    ["Toyota museums", "Toyota Commemorative Museum and Toyota Kaikan."],
    ["Ghibli Park", "Studio Ghibli theme park in Expo 2005 Park."],
    ["Meiji Mura", "Open-air museum of Meiji-era buildings."]
  ],
  food: [
    ["Miso katsu", "味噌カツ", "Pork cutlet with sweet red miso sauce."],
    ["Hitsumabushi", "ひつまぶし", "Grilled eel on rice, eaten three ways."],
    ["Tebasaki", "手羽先", "Peppery fried chicken wings."],
    ["Kishimen", "きしめん", "Flat, wide noodles."],
    ["Miso-nikomi udon", "味噌煮込みうどん", "Firm udon simmered in red miso."]
  ],
  omiyage: [
    ["Uirō", "ういろう", "Chewy steamed rice-flour cake."],
    ["Ebi senbei", "えびせんべい", "Shrimp crackers like 'Yukari'."],
    ["Tokoname-yaki", "常滑焼", "Red-clay teapots."],
    ["Seto-mono", "瀬戸物", "Seto ceramics — the word became Japanese for 'pottery'."]
  ]
},
{
  id: "24", en: "Mie", ja: "三重県", kana: "みえけん", suf: "ken", region: "Kansai",
  cap: "Tsu", capJa: "津市", ll: [34.73, 136.51],
  pop: 1694896, pop20: 1770254, area: 5774.49, u15: 11.2, o65: 30.9,
  tag: "Ise Jingū, ninja and pearls. (Sometimes grouped with Tōkai instead of Kansai.)",
  climate: "Mild; the southern coast around Owase is one of the rainiest places in Japan, with around 4,000 mm a year.",
  season: "Spring and autumn for Ise and the Kumano Kodō.",
  history: "Ise Jingū, Japan's most sacred Shinto shrine, is rebuilt every 20 years — last in 2013, next in 2033. In the Edo period millions made the pilgrimage to Ise. Iga was home to ninja clans. In 1893 Mikimoto Kōkichi produced the first cultured pearls in Ago Bay.",
  sights: [
    ["Ise Jingū", "Inner and Outer shrines in ancient forest."],
    ["Okage Yokochō", "Edo-style street by the Inner Shrine."],
    ["Iga-Ueno", "Ninja museum and castle."],
    ["Meoto Iwa", "'Wedded rocks' tied with sacred rope."],
    ["Mikimoto Pearl Island", "Birthplace of cultured pearls, with ama divers."],
    ["Suzuka Circuit", "Japan's Formula 1 track."]
  ],
  food: [
    ["Matsusaka beef", "松阪牛", "One of Japan's three great wagyu."],
    ["Ise-ebi", "伊勢えび", "Spiny lobster."],
    ["Ise udon", "伊勢うどん", "Very soft, thick udon with dark sauce."],
    ["Tekone-zushi", "てこね寿司", "Marinated bonito over sushi rice."],
    ["Kuwana clams", "桑名のはまぐり", "Grilled hard clams."]
  ],
  omiyage: [
    ["Akafuku mochi", "赤福餅", "Mochi under smooth red-bean paste."],
    ["Pearls", "真珠", "Akoya pearls from Ago Bay."],
    ["Iga kumihimo", "伊賀くみひも", "Silk braided cords."],
    ["Ise udon", "伊勢うどん", "Noodle and sauce sets."]
  ]
},
{
  id: "25", en: "Shiga", ja: "滋賀県", kana: "しがけん", suf: "ken", region: "Kansai",
  cap: "Ōtsu", capJa: "大津市", ll: [35.00, 135.87],
  pop: 1392439, pop20: 1413610, area: 4017.38, u15: 12.7, o65: 27.3,
  tag: "Built around Lake Biwa, Japan's largest lake.",
  climate: "Moderate; the north gets heavy snow, while the lake softens temperatures around its shore.",
  season: "April for cherry blossoms around the lake; autumn for temples.",
  history: "Lake Biwa covers about a sixth of the prefecture. Ōtsu was briefly the capital under Emperor Tenji (667–672). Enryaku-ji on Mt. Hiei, founded in 788, was the powerful headquarters of Tendai Buddhism until Oda Nobunaga burned it in 1571. Ōmi merchants became famous across Japan for their principle of business that is good for seller, buyer and society.",
  sights: [
    ["Lake Biwa", "Japan's largest lake, about 670 km²."],
    ["Shirahige Shrine", "Torii gate standing in the lake."],
    ["Enryaku-ji", "Mountaintop temple complex (UNESCO)."],
    ["Hikone Castle", "National Treasure castle, mascot Hikonyan."],
    ["Ōmi-Hachiman", "Merchant town with a willow-lined canal."],
    ["Miho Museum", "Mountain museum designed by I. M. Pei."]
  ],
  food: [
    ["Ōmi beef", "近江牛", "One of Japan's three great wagyu."],
    ["Funa-zushi", "鮒ずし", "Fermented carp — an ancestor of sushi."],
    ["Lake fish", "湖魚", "Biwa trout and small lake fish."],
    ["Aka-konnyaku", "赤こんにゃく", "Bright red konnyaku from Ōmi-Hachiman."],
    ["Ōmi chanpon", "近江ちゃんぽん", "Light, vegetable-packed noodle soup."]
  ],
  omiyage: [
    ["Club Harie baumkuchen", "クラブハリエ バームクーヘン", "Famous layered cake."],
    ["Shigaraki-yaki tanuki", "信楽焼のたぬき", "The raccoon-dog statues outside shops."],
    ["Funa-zushi", "鮒ずし", "For the adventurous."]
  ]
},
{
  id: "26", en: "Kyōto", ja: "京都府", kana: "きょうとふ", suf: "fu", region: "Kansai",
  cap: "Kyoto", capJa: "京都市", ll: [35.02, 135.76],
  pop: 2502747, pop20: 2578087, area: 4612.20, u15: 10.6, o65: 29.8,
  tag: "Japan's imperial capital for over 1,000 years.",
  climate: "A basin climate: very muggy, hot summers and chilly winters that seem to rise from the ground ('soko-bie').",
  season: "Late March–early April for blossoms; mid-November for autumn leaves; July for the Gion Festival.",
  history: "Heian-kyō was founded in 794 and remained the imperial capital until 1868. The Ōnin War (1467–1477) wrecked the city and began the Warring States era. Kyoto was spared heavy bombing in World War II, and its temples and shrines are UNESCO-listed. The prefecture also reaches north to the Sea of Japan coast.",
  sights: [
    ["Kiyomizu-dera", "Wooden stage over the hillside."],
    ["Fushimi Inari Taisha", "Tunnels of thousands of vermilion torii."],
    ["Kinkaku-ji", "The Golden Pavilion."],
    ["Arashiyama", "Bamboo grove and Togetsukyō bridge."],
    ["Byōdō-in", "Phoenix Hall in Uji, on the 10-yen coin."],
    ["Amanohashidate", "Pine sandbar — one of the Three Great Views."]
  ],
  food: [
    ["Kaiseki", "懐石料理", "Seasonal multi-course cuisine."],
    ["Yudōfu & yuba", "湯豆腐・湯葉", "Temple-style tofu dishes."],
    ["Kyō-tsukemono", "京漬物", "Pickles like senmaizuke and shibazuke."],
    ["Uji matcha", "宇治抹茶", "Powdered green tea and sweets."],
    ["Obanzai", "おばんざい", "Kyoto home cooking."]
  ],
  omiyage: [
    ["Yatsuhashi", "八ツ橋", "Cinnamon crackers, or soft nama-yatsuhashi."],
    ["Uji matcha", "宇治抹茶", "Tea and matcha sweets."],
    ["Kyō-sensu", "京扇子", "Folding fans."],
    ["Kiyomizu-yaki", "清水焼", "Elegant pottery."]
  ]
},
{
  id: "27", en: "Ōsaka", ja: "大阪府", kana: "おおさかふ", suf: "fu", region: "Kansai",
  cap: "Osaka", capJa: "大阪市", ll: [34.69, 135.50],
  pop: 8764578, pop20: 8837685, area: 1905.32, u15: 11.1, o65: 27.6,
  tag: "'The nation's kitchen' — food, comedy and merchant spirit.",
  climate: "Hot, humid summers made hotter by the city, and mild winters.",
  season: "Spring and autumn; summer for the Tenjin Matsuri (24–25 July).",
  history: "Naniwa served as capital several times in the 7th–8th centuries, and the giant Mozu–Furuichi burial mounds are UNESCO-listed. Toyotomi Hideyoshi built Osaka Castle in 1583. In the Edo period Osaka was 'the kitchen of the nation', where Japan's rice was traded and the Dōjima rice exchange ran one of the world's first futures markets. It hosted Expo '70 and Expo 2025.",
  sights: [
    ["Osaka Castle", "Hideyoshi's castle, rebuilt in 1931."],
    ["Dōtonbori", "Neon canal and the Glico running man."],
    ["Shitennō-ji", "Founded in 593 by Prince Shōtoku."],
    ["Sumiyoshi Taisha", "Ancient shrine with an arched red bridge."],
    ["Shinsekai & Tsūtenkaku", "Retro district famous for kushikatsu."],
    ["Daisen Kofun", "Japan's largest keyhole-shaped tomb, in Sakai."]
  ],
  food: [
    ["Takoyaki", "たこ焼き", "Octopus batter balls."],
    ["Okonomiyaki", "お好み焼き", "Savoury cabbage pancake."],
    ["Kushikatsu", "串カツ", "Fried skewers — no double-dipping!"],
    ["Kitsune udon", "きつねうどん", "Udon with sweet fried tofu, born in Osaka."],
    ["Battera", "バッテラ", "Pressed mackerel sushi."]
  ],
  omiyage: [
    ["551 Hōrai butaman", "551蓬莱の豚まん", "Steamed pork buns."],
    ["Rikuro's cheesecake", "りくろーおじさんのチーズケーキ", "Jiggly cheesecake."],
    ["Takoyaki snacks", "たこ焼き味のお菓子", "Takoyaki-flavoured everything."],
    ["Sakai knives", "堺打刃物", "Sakai makes many chefs' knives."]
  ]
},
{
  id: "28", en: "Hyōgo", ja: "兵庫県", kana: "ひょうごけん", suf: "ken", region: "Kansai",
  cap: "Kobe", capJa: "神戸市", ll: [34.69, 135.18],
  pop: 5323825, pop20: 5465002, area: 8401.02, u15: 11.5, o65: 30.2,
  tag: "Stretches from the Sea of Japan to the Inland Sea — Himeji Castle, Kobe and onsen.",
  climate: "Two faces: a snowy Sea of Japan coast in the north and a mild, dry Inland Sea coast in the south.",
  season: "Early April for Himeji's blossoms; winter for crab and onsen at Kinosaki.",
  history: "Created from five old provinces. Taira no Kiyomori briefly moved the capital to Fukuhara (today's Kobe) in 1180. Himeji Castle took its present form in 1609. Kobe opened as a treaty port in 1868. On 17 January 1995 the Great Hanshin–Awaji Earthquake killed 6,434 people.",
  sights: [
    ["Himeji Castle", "The 'White Heron', Japan's finest original castle (UNESCO)."],
    ["Kinosaki Onsen", "Stroll between seven public baths in a yukata."],
    ["Arima Onsen", "One of Japan's oldest hot springs, behind Kobe."],
    ["Takeda Castle Ruins", "The 'castle in the clouds'."],
    ["Kobe's Kitano", "Western-style houses of 19th-century merchants."],
    ["Akashi Kaikyō Bridge", "Long suspension bridge to Awaji Island."]
  ],
  food: [
    ["Kobe beef", "神戸ビーフ", "Japan's most famous wagyu brand."],
    ["Akashiyaki", "明石焼", "Eggy octopus dumplings dipped in broth."],
    ["Sobameshi", "そばめし", "Fried noodles chopped up with rice."],
    ["Matsuba crab", "松葉がに", "Winter snow crab on the north coast."],
    ["Nada sake", "灘の酒", "Japan's largest sake-brewing district."]
  ],
  omiyage: [
    ["Kobe gaufres", "神戸風月堂ゴーフル", "Thin wafers with cream filling."],
    ["Arima tansan senbei", "有馬炭酸せんべい", "Crackers made with spring water."],
    ["Ibonoito sōmen", "揖保乃糸", "Japan's best-known thin noodles."],
    ["Nada sake", "灘の酒", "From historic breweries."]
  ]
},
{
  id: "29", en: "Nara", ja: "奈良県", kana: "ならけん", suf: "ken", region: "Kansai",
  cap: "Nara", capJa: "奈良市", ll: [34.69, 135.83],
  pop: 1269180, pop20: 1324473, area: 3690.94, u15: 11.0, o65: 32.9,
  tag: "The cradle of Japan — ancient temples and bowing deer.",
  climate: "Inland basin: hot summers and cold winters. The southern mountains are some of the wettest in Japan.",
  season: "April for Yoshino's cherry blossoms; autumn for Nara Park.",
  history: "The Yamato region was the heart of the early Japanese state. Heijō-kyō (Nara) was the capital from 710 to 784. Hōryū-ji contains the world's oldest surviving wooden buildings, and Tōdai-ji's Great Buddha was dedicated in 752. Nara has three UNESCO World Heritage Sites.",
  sights: [
    ["Tōdai-ji", "Giant bronze Buddha in a huge wooden hall."],
    ["Nara Park", "About 1,300 free-roaming deer."],
    ["Kasuga Taisha", "Shrine with thousands of lanterns."],
    ["Hōryū-ji", "Founded by Prince Shōtoku in the 7th century."],
    ["Yoshino-yama", "Mountain covered in about 30,000 cherry trees."],
    ["Asuka", "Countryside of ancient tombs and stones."]
  ],
  food: [
    ["Kakinoha-zushi", "柿の葉寿司", "Sushi wrapped in persimmon leaves."],
    ["Miwa sōmen", "三輪素麺", "Said to be the origin of sōmen noodles."],
    ["Nara-zuke", "奈良漬", "Vegetables pickled in sake lees."],
    ["Chagayu", "茶粥", "Rice porridge cooked in tea."],
    ["Persimmons", "柿", "Nara is a top persimmon producer."]
  ],
  omiyage: [
    ["Nara-zuke", "奈良漬", "Sweet, boozy pickles."],
    ["Nara sumi ink", "奈良墨", "Nara makes about 90% of Japan's sumi ink."],
    ["Yoshino kuzu", "吉野葛", "Kudzu starch for sweets."],
    ["Deer-themed sweets", "鹿のお菓子", "Cookies and chocolates."]
  ]
},
{
  id: "30", en: "Wakayama", ja: "和歌山県", kana: "わかやまけん", suf: "ken", region: "Kansai",
  cap: "Wakayama", capJa: "和歌山市", ll: [34.23, 135.17],
  pop: 864262, pop20: 922584, area: 4724.65, u15: 10.9, o65: 34.5,
  tag: "Sacred mountains, pilgrimage trails, mikan and ume.",
  climate: "Warm thanks to the Kuroshio current; very rainy in the south, with typhoons in late summer.",
  season: "Spring and autumn for walking the Kumano Kodō.",
  history: "Kūkai founded the monastery on Mt. Kōya in 816. The Kumano Sanzan shrines drew pilgrims, including emperors, for centuries; the Sacred Sites and Pilgrimage Routes of the Kii Mountain Range became UNESCO-listed in 2004. In the Edo period Kishū was one of three Tokugawa branch domains and produced the 8th shogun, Yoshimune.",
  sights: [
    ["Kōya-san", "Temple town where visitors stay in monastery lodgings."],
    ["Okunoin", "Cemetery of 200,000 graves among giant cedars."],
    ["Kumano Kodō", "Ancient pilgrimage trails through the mountains."],
    ["Nachi Falls", "133 m waterfall with a red pagoda."],
    ["Shirahama", "White-sand beach and seaside onsen."],
    ["Kishi Station", "Famous for its cat stationmasters."]
  ],
  food: [
    ["Umeboshi", "梅干し", "Wakayama grows over 60% of Japan's ume."],
    ["Mikan", "みかん", "Japan's top producer, especially Arida."],
    ["Wakayama ramen", "和歌山ラーメン", "Pork-soy broth, eaten with mackerel sushi."],
    ["Katsuura tuna", "勝浦まぐろ", "Fresh, never-frozen tuna."],
    ["Yuasa soy sauce", "湯浅醤油", "Said to be the birthplace of Japanese soy sauce."]
  ],
  omiyage: [
    ["Kishū umeboshi", "紀州南高梅", "Plump Nankō ume."],
    ["Mikan juice", "みかんジュース", "From Arida."],
    ["Kishū binchōtan", "紀州備長炭", "Premium white charcoal."],
    ["Yuasa soy sauce", "湯浅醤油", "Small-batch, barrel-aged."]
  ]
},
{
  id: "31", en: "Tottori", ja: "鳥取県", kana: "とっとりけん", suf: "ken", region: "Chūgoku",
  cap: "Tottori", capJa: "鳥取市", ll: [35.50, 134.24],
  pop: 523732, pop20: 553407, area: 3507.14, u15: 11.8, o65: 33.7,
  tag: "Japan's least populous prefecture — sand dunes, crab and yōkai.",
  climate: "Sea of Japan climate with snowy winters and humid summers.",
  season: "November–March for crab; spring and autumn for the dunes.",
  history: "Formed from Inaba and Hōki provinces and ruled by the Ikeda clan in the Edo period. The myth of the White Hare of Inaba appears in the 8th-century Kojiki. Sakaiminato is the hometown of Mizuki Shigeru, creator of 'GeGeGe no Kitarō', and Tottori is the hometown of several famous manga artists.",
  sights: [
    ["Tottori Sand Dunes", "Dunes stretching about 16 km along the coast."],
    ["Sand Museum", "Huge sand sculptures on a changing theme."],
    ["Mt. Daisen", "1,729 m peak called 'Hōki Fuji'."],
    ["Mizuki Shigeru Road", "Street of 170+ bronze yōkai statues."],
    ["Nageire-dō", "Temple hall perched in a cliff hollow on Mt. Mitoku."],
    ["Kurayoshi", "White-walled storehouses along a canal."]
  ],
  food: [
    ["Matsuba crab", "松葉がに", "Tottori lands more snow crab than anywhere."],
    ["Nijisseiki pears", "二十世紀梨", "Crisp, juicy 'twentieth-century' pears."],
    ["Rakkyō", "らっきょう", "Pickled shallots grown in the dunes."],
    ["Beef-bone ramen", "牛骨ラーメン", "A local ramen style."],
    ["Iwagaki oysters", "岩がき", "Summer rock oysters."]
  ],
  omiyage: [
    ["Inaba no Shiro-usagi", "因幡の白うさぎ", "Rabbit-shaped sweet buns."],
    ["Nijisseiki pear sweets", "二十世紀梨のお菓子", "Jellies and cookies."],
    ["Rakkyō", "らっきょう", "Sweet-sour pickles."]
  ]
},
{
  id: "32", en: "Shimane", ja: "島根県", kana: "しまねけん", suf: "ken", region: "Chūgoku",
  cap: "Matsue", capJa: "松江市", ll: [35.47, 133.05],
  pop: 629460, pop20: 671126, area: 6707.89, u15: 11.7, o65: 35.2,
  tag: "Izumo, land of the gods and myths.",
  climate: "Sea of Japan climate with moderate snow and humid summers; the Oki Islands lie offshore.",
  season: "October ('Kamiarizuki') when Japan's gods are said to gather at Izumo; summer sunsets over Lake Shinji.",
  history: "Izumo features heavily in Japan's oldest myths. Each October, Japan's gods are said to gather at Izumo Taisha — so the month is called 'the month without gods' elsewhere but 'the month with gods' here. The Iwami Ginzan silver mine produced a large share of the world's silver in the 16th–17th centuries (UNESCO, 2007). Writer Lafcadio Hearn (Koizumi Yakumo) lived in Matsue in 1890–91.",
  sights: [
    ["Izumo Taisha", "One of Japan's oldest and most important shrines."],
    ["Matsue Castle", "Original keep, a National Treasure."],
    ["Adachi Museum of Art", "Its garden has topped a US journal's ranking for over 20 years."],
    ["Iwami Ginzan", "Silver mine tunnels and a preserved mining town."],
    ["Lake Shinji", "Famous for sunsets and clams."],
    ["Tsuwano", "'Little Kyoto' with carp-filled canals."]
  ],
  food: [
    ["Izumo soba", "出雲そば", "Dark soba served in stacked lacquer dishes."],
    ["Shijimi clams", "しじみ", "From Lake Shinji, in miso soup."],
    ["Nodoguro", "のどぐろ", "Rich, fatty seaperch."],
    ["Matsue wagashi", "松江の和菓子", "Sweets for the local tea culture."],
    ["Oki beef", "隠岐牛", "Island-raised wagyu."]
  ],
  omiyage: [
    ["Wakakusa", "若草", "Soft gyūhi cake coated in green sugar."],
    ["Izumo soba", "出雲そば", "Dried noodle sets."],
    ["Magatama charms", "勾玉", "Comma-shaped jewels of Izumo agate."],
    ["Shijimi products", "しじみ製品", "Instant miso soup with clams."]
  ]
},
{
  id: "33", en: "Okayama", ja: "岡山県", kana: "おかやまけん", suf: "ken", region: "Chūgoku",
  cap: "Okayama", capJa: "岡山市", ll: [34.66, 133.93],
  pop: 1808664, pop20: 1888432, area: 7114.33, u15: 11.7, o65: 31.2,
  tag: "'The Land of Sunshine' — peaches, Momotarō and denim.",
  climate: "Mild Inland Sea climate with very few rainy days, earning the nickname 'Hare no Kuni' (land of clear skies).",
  season: "Summer for white peaches and grapes; spring for Kōrakuen.",
  history: "The ancient Kibi kingdom here rivalled Yamato in power. The folk tale of Momotarō, the Peach Boy, is linked to a local legend about Prince Kibitsuhiko. The Ikeda lords built Kōrakuen garden around 1700 and the Shizutani School (1670), one of the first public schools for commoners. Kurashiki prospered as a rice and cotton town.",
  sights: [
    ["Kōrakuen", "One of Japan's Three Great Gardens."],
    ["Okayama Castle", "Black 'crow castle' across the river."],
    ["Kurashiki Bikan", "Canal quarter with white-walled warehouses."],
    ["Ōhara Museum of Art", "Japan's first Western art museum (1930)."],
    ["Bitchū Matsuyama Castle", "Highest original castle keep in Japan."],
    ["Kibitsu Shrine", "Momotarō legend shrine with a 360 m corridor."]
  ],
  food: [
    ["White peaches", "白桃", "Delicate, very sweet peaches."],
    ["Muscat & Pione grapes", "マスカット・ピオーネ", "Premium grapes."],
    ["Barazushi", "ばら寿司", "Colourful 'scattered' sushi."],
    ["Demi-katsudon", "デミカツ丼", "Cutlet rice bowl with demi-glace."],
    ["Hiruzen yakisoba", "ひるぜん焼そば", "Sweet-spicy miso fried noodles."]
  ],
  omiyage: [
    ["Kibi dango", "きびだんご", "The dumplings Momotarō gave his animal friends."],
    ["Bizen-yaki", "備前焼", "Unglazed pottery from one of Japan's six ancient kilns."],
    ["Kojima jeans", "児島ジーンズ", "Kojima is the home of Japanese denim."],
    ["Muscat sweets", "マスカット菓子", "Grape-wrapped gyūhi sweets."]
  ]
},
{
  id: "34", en: "Hiroshima", ja: "広島県", kana: "ひろしまけん", suf: "ken", region: "Chūgoku",
  cap: "Hiroshima", capJa: "広島市", ll: [34.40, 132.46],
  pop: 2683399, pop20: 2799702, area: 8479.65, u15: 11.8, o65: 30.4,
  tag: "City of peace, the floating torii and Inland Sea islands.",
  climate: "Mild Inland Sea climate; the northern mountains get snow.",
  season: "Spring and autumn; 6 August for the Peace Memorial Ceremony.",
  history: "Mōri Terumoto founded Hiroshima in 1589; the Asano clan ruled it during the Edo period. Kure became a great naval base where the battleship Yamato was built. On 6 August 1945 Hiroshima was destroyed by the first atomic bomb used in war. Rebuilt as a 'City of Peace', it hosted the G7 summit in 2023.",
  sights: [
    ["Atomic Bomb Dome & Peace Park", "UNESCO memorial and the Peace Memorial Museum."],
    ["Itsukushima Shrine", "The 'floating' torii of Miyajima (UNESCO)."],
    ["Shimanami Kaidō", "Cycling route across islands to Ehime."],
    ["Onomichi", "Hillside temples and cat alleys."],
    ["Yamato Museum", "Naval history museum in Kure."],
    ["Tomonoura", "Historic port town."]
  ],
  food: [
    ["Hiroshima okonomiyaki", "広島風お好み焼き", "Layered with cabbage and noodles."],
    ["Oysters", "牡蠣", "Hiroshima farms about 60% of Japan's oysters."],
    ["Anago-meshi", "あなごめし", "Grilled conger eel on rice, Miyajima's specialty."],
    ["Lemons", "レモン", "Japan's top lemon producer."],
    ["Onomichi ramen", "尾道ラーメン", "Soy broth with pork back fat."]
  ],
  omiyage: [
    ["Momiji manjū", "もみじ饅頭", "Maple-leaf-shaped cakes."],
    ["Kumano fude", "熊野筆", "Brushes — Kumano makes most of Japan's."],
    ["Lemon sweets", "レモンケーキ", "Setouchi lemon cakes."],
    ["Oyster products", "牡蠣製品", "Smoked oysters and oyster sauce."]
  ]
},
{
  id: "35", en: "Yamaguchi", ja: "山口県", kana: "やまぐちけん", suf: "ken", region: "Chūgoku",
  cap: "Yamaguchi", capJa: "山口市", ll: [34.19, 131.47],
  pop: 1264006, pop20: 1342059, area: 6112.54, u15: 10.8, o65: 35.5,
  tag: "Chōshū — cradle of the Meiji Restoration, fugu and karst.",
  climate: "Mild, with the Sea of Japan coast on one side and the Inland Sea on the other.",
  season: "Spring for Kintai-kyō's blossoms; winter for fugu.",
  history: "In the 15th–16th centuries the Ōuchi clan made Yamaguchi a 'Kyoto of the west', and Francis Xavier preached there in 1551. The Chōshū domain, ruled by the Mōri from Hagi, led the overthrow of the shogunate with Satsuma. Yamaguchi has produced eight prime ministers, more than any other prefecture, starting with Itō Hirobumi.",
  sights: [
    ["Kintai-kyō", "Five-arched wooden bridge in Iwakuni."],
    ["Akiyoshidai & Akiyoshi-dō", "Japan's largest karst plateau and a huge cave."],
    ["Motonosumi Shrine", "123 red torii leading down to the sea."],
    ["Hagi", "Samurai town and Shōka Sonjuku (UNESCO)."],
    ["Rurikō-ji", "Graceful five-storey pagoda."],
    ["Tsunoshima Bridge", "Bridge over turquoise water."]
  ],
  food: [
    ["Fugu", "ふぐ", "Shimonoseki handles most of Japan's pufferfish (called 'fuku' locally)."],
    ["Kawara soba", "瓦そば", "Green tea soba served on a hot roof tile."],
    ["Iwakuni-zushi", "岩国寿司", "Layered pressed sushi."],
    ["Bottled uni", "瓶詰めうに", "Preserved sea urchin, invented in Shimonoseki."],
    ["Dassai sake", "獺祭", "World-famous junmai daiginjō."]
  ],
  omiyage: [
    ["Yamaguchi uirō", "外郎", "Chewy bracken-starch sweet."],
    ["Hagi-yaki", "萩焼", "Soft-toned pottery prized for tea ceremonies."],
    ["Dassai", "獺祭", "Sake from Iwakuni."],
    ["Fugu fins", "ふぐひれ", "Grilled fins for hirezake."]
  ]
},
{
  id: "36", en: "Tokushima", ja: "徳島県", kana: "とくしまけん", suf: "ken", region: "Shikoku",
  cap: "Tokushima", capJa: "徳島市", ll: [34.07, 134.56],
  pop: 675489, pop20: 719559, area: 4146.75, u15: 10.4, o65: 35.7,
  tag: "Awa Odori dancing, whirlpools and indigo.",
  climate: "Warm and humid; the southern mountains are very rainy and typhoons are common.",
  season: "12–15 August for the Awa Odori; spring and autumn for Iya Valley.",
  history: "Ruled by the Hachisuka clan as Awa domain, Tokushima grew rich in the Edo period from indigo dye. It is home to the first temple of the Shikoku 88-temple pilgrimage, so pilgrims begin their journey here.",
  sights: [
    ["Awa Odori", "Japan's biggest dance festival."],
    ["Naruto whirlpools", "Whirlpools seen from boats or the Ōnaruto Bridge."],
    ["Iya Valley", "Vine bridges and the Ōboke Gorge."],
    ["Ōtsuka Museum of Art", "Over 1,000 life-size ceramic copies of masterpieces."],
    ["Ryōzen-ji", "Temple 1 of the Shikoku pilgrimage."],
    ["Wakimachi", "Merchant street with 'udatsu' firewalls."]
  ],
  food: [
    ["Tokushima ramen", "徳島ラーメン", "Sweet pork-soy broth with raw egg."],
    ["Sudachi", "すだち", "Tart citrus; Tokushima grows about 98%."],
    ["Naruto wakame", "鳴門わかめ", "Firm seaweed from the strait."],
    ["Naruto kintoki", "鳴門金時", "Sweet potatoes grown in sandy soil."],
    ["Awa-odori chicken", "阿波尾鶏", "Local free-range chicken."]
  ],
  omiyage: [
    ["Sudachi products", "すだち製品", "Juice, ponzu and sweets."],
    ["Aizome", "阿波藍染め", "Indigo-dyed cloth."],
    ["Naruto kintoki sweets", "鳴門金時のお菓子", "Sweet potato cakes."],
    ["Awa wasanbon", "和三盆", "Fine sugar candies."]
  ]
},
{
  id: "37", en: "Kagawa", ja: "香川県", kana: "かがわけん", suf: "ken", region: "Shikoku",
  cap: "Takamatsu", capJa: "高松市", ll: [34.34, 134.04],
  pop: 907725, pop20: 950244, area: 1876.78, u15: 11.4, o65: 32.8,
  tag: "Japan's smallest prefecture — the 'Udon Prefecture' and art islands.",
  climate: "Dry, sunny Inland Sea climate. Rain is so scarce that farmers dug about 14,000 reservoirs over the centuries.",
  season: "Spring and autumn; Setouchi Triennale years for art islands.",
  history: "Kūkai (Kōbō Daishi), founder of Shingon Buddhism, was born here in 774 and is credited with repairing the Mannō-ike reservoir. Kotohira-gū has drawn sailors and pilgrims for centuries. The Genpei War's Battle of Yashima was fought here in 1185.",
  sights: [
    ["Ritsurin Garden", "Large Edo-period strolling garden."],
    ["Kotohira-gū", "'Konpira-san', 785 steps up to the main shrine."],
    ["Naoshima", "Art island with the Chichū Art Museum and Kusama's pumpkin."],
    ["Shōdoshima", "Olive groves and Angel Road sandbar."],
    ["Zentsū-ji", "Kūkai's birthplace temple."],
    ["Chichibugahama", "Mirror-like beach at sunset."]
  ],
  food: [
    ["Sanuki udon", "讃岐うどん", "Chewy, firm udon — eaten breakfast to dinner."],
    ["Honetsuki-dori", "骨付鳥", "Roasted chicken leg on the bone."],
    ["Olive hamachi", "オリーブハマチ", "Yellowtail fed olive leaves."],
    ["An-mochi zōni", "あん餅雑煮", "New Year soup with sweet-bean mochi."],
    ["Shōdoshima soy sauce", "小豆島醤油", "Brewed in wooden barrels."]
  ],
  omiyage: [
    ["Sanuki udon", "讃岐うどん", "Udon gift sets."],
    ["Wasanbon sweets", "和三盆", "Delicate sugar sweets."],
    ["Olive oil", "小豆島オリーブオイル", "From Shōdoshima."],
    ["Marugame uchiwa", "丸亀うちわ", "Round fans — about 90% of Japan's."]
  ]
},
{
  id: "38", en: "Ehime", ja: "愛媛県", kana: "えひめけん", suf: "ken", region: "Shikoku",
  cap: "Matsuyama", capJa: "松山市", ll: [33.84, 132.77],
  pop: 1260088, pop20: 1334841, area: 5676.19, u15: 10.8, o65: 34.5,
  tag: "Citrus groves, Dōgo Onsen and 'Botchan'.",
  climate: "Mild Inland Sea climate; the south is rainier.",
  season: "Winter for citrus; spring and autumn for cycling the Shimanami Kaidō.",
  history: "Dōgo Onsen is one of Japan's oldest hot springs, mentioned in ancient chronicles. The Murakami pirates controlled the islands of the Inland Sea in the medieval era. Natsume Sōseki's novel 'Botchan' (1906) is set in Matsuyama, the hometown of haiku reformer Masaoka Shiki.",
  sights: [
    ["Dōgo Onsen Honkan", "1894 wooden bathhouse."],
    ["Matsuyama Castle", "Original keep on a hilltop."],
    ["Shimanami Kaidō", "Island-hopping bridges to Hiroshima."],
    ["Uchiko", "Old wax-making town with a kabuki theatre."],
    ["Ōzu Castle", "Wooden reconstructed keep."],
    ["Shikoku Karst", "Highland pastures and limestone."]
  ],
  food: [
    ["Mikan", "みかん", "Matsuyama airport even has mikan juice on tap."],
    ["Tai-meshi", "鯛めし", "Sea bream rice — cooked or served raw on rice."],
    ["Jakoten", "じゃこ天", "Fried fish cake from Uwajima."],
    ["Imabari yakitori", "今治焼き鳥", "Cooked on an iron griddle."]
  ],
  omiyage: [
    ["Imabari towels", "今治タオル", "Imabari makes about 60% of Japan's towels."],
    ["Ichiroku Tart", "一六タルト", "Sponge roll with yuzu-scented bean paste."],
    ["Botchan dango", "坊っちゃん団子", "Three-coloured dumplings."],
    ["Mikan juice", "みかんジュース", "Varieties like Iyokan and Beni Madonna."]
  ]
},
{
  id: "39", en: "Kōchi", ja: "高知県", kana: "こうちけん", suf: "ken", region: "Shikoku",
  cap: "Kōchi", capJa: "高知市", ll: [33.56, 133.53],
  pop: 643437, pop20: 691527, area: 7103.63, u15: 10.3, o65: 36.6,
  tag: "Wild Tosa — bonito, Sakamoto Ryōma and clear rivers.",
  climate: "Warm and very rainy, often hit by typhoons. About 84% of the land is forest, the highest share in Japan.",
  season: "August for the Yosakoi festival; any time for the Sunday market.",
  history: "Chōsokabe Motochika unified Shikoku in 1585; the Yamauchi clan ruled Tosa in the Edo period. Sakamoto Ryōma (1836–1867) helped bring about the Meiji Restoration. Tosa was also the birthplace of the Freedom and People's Rights Movement.",
  sights: [
    ["Kōchi Castle", "Original keep and palace."],
    ["Katsurahama", "Beach with a giant Ryōma statue."],
    ["Shimanto River", "'Japan's last clear river' with low bridges."],
    ["Cape Ashizuri", "Lighthouse and cliffs."],
    ["Yosakoi Festival", "Dance teams with wooden clappers."],
    ["Hirome Market", "Food hall full of locals."]
  ],
  food: [
    ["Katsuo no tataki", "かつおのたたき", "Bonito seared over straw flames."],
    ["Sawachi ryōri", "皿鉢料理", "Huge party platters."],
    ["Yuzu", "ゆず", "Kōchi grows about half of Japan's yuzu."],
    ["Ginger", "しょうが", "Japan's top producer."]
  ],
  omiyage: [
    ["Yuzu products", "ゆず製品", "Ponzu, juice and the drink 'Gokkun Umajimura'."],
    ["Imo kenpi", "芋けんぴ", "Candied sweet potato sticks."],
    ["Tosa washi", "土佐和紙", "Thin, strong paper."],
    ["Katsuobushi", "かつお節", "Dried bonito."]
  ]
},
{
  id: "40", en: "Fukuoka", ja: "福岡県", kana: "ふくおかけん", suf: "ken", region: "Kyūshū & Okinawa",
  cap: "Fukuoka", capJa: "福岡市", ll: [33.61, 130.42],
  pop: 5081879, pop20: 5135214, area: 4986.51, u15: 12.4, o65: 28.6,
  tag: "Japan's gateway to Asia — ramen stalls and Dazaifu.",
  climate: "Mild, with hot, humid summers and a rainy season in June–July.",
  season: "July for the Hakata Gion Yamakasa; spring and autumn.",
  history: "A gold seal sent by a Chinese emperor in AD 57 was found on Shikanoshima in 1784. Dazaifu was the government headquarters for Kyūshū for centuries. Mongol invasions in 1274 and 1281 were repelled around Hakata Bay. The Yawata Steel Works (1901) helped industrialise Japan.",
  sights: [
    ["Dazaifu Tenman-gū", "Shrine to the god of learning."],
    ["Hakata yatai", "Open-air food stalls."],
    ["Yanagawa", "Punt boats along canals."],
    ["Kushida Shrine", "Home of the Yamakasa festival."],
    ["Kawachi Fujien", "Wisteria tunnels in Kitakyūshū."],
    ["Mojikō Retro", "Historic port buildings."]
  ],
  food: [
    ["Hakata ramen", "博多ラーメン", "Creamy tonkotsu with thin noodles."],
    ["Motsunabe", "もつ鍋", "Offal hotpot with cabbage and garlic."],
    ["Mentaiko", "明太子", "Spicy pollock roe."],
    ["Mizutaki", "水炊き", "Chicken hotpot in milky broth."],
    ["Amaou strawberries", "あまおう", "Big, sweet strawberries."]
  ],
  omiyage: [
    ["Hakata Tōrimon", "博多通りもん", "Milky white-bean buns."],
    ["Mentaiko", "明太子", "Spicy cod roe."],
    ["Hiyoko", "ひよ子", "Chick-shaped buns."],
    ["Umegae mochi", "梅ヶ枝餅", "Grilled mochi at Dazaifu."]
  ]
},
{
  id: "41", en: "Saga", ja: "佐賀県", kana: "さがけん", suf: "ken", region: "Kyūshū & Okinawa",
  cap: "Saga", capJa: "佐賀市", ll: [33.25, 130.30],
  pop: 781214, pop20: 811442, area: 2440.69, u15: 12.7, o65: 32.0,
  tag: "Porcelain towns, Yayoi ruins and balloons.",
  climate: "Mild, with hot summers. The Ariake Sea has tides of up to 6 m.",
  season: "Late October–early November for the International Balloon Fiesta.",
  history: "Yoshinogari is one of Japan's largest Yayoi-period settlements. After Hideyoshi's invasions of Korea, Korean potters started Japan's first porcelain at Arita around 1616; it was exported to Europe through the port of Imari. In the 1800s the Saga domain built Japan's first reverberatory furnace.",
  sights: [
    ["Yoshinogari Historical Park", "Reconstructed moated Yayoi village."],
    ["Arita & Imari", "Porcelain towns and kilns."],
    ["Karatsu Castle", "Castle on the coast."],
    ["Yūtoku Inari Shrine", "Bright red shrine on stilts."],
    ["Takeo Onsen", "Gate by Tatsuno Kingo."],
    ["Saga Balloon Fiesta", "Asia's largest hot-air balloon event."]
  ],
  food: [
    ["Saga beef", "佐賀牛", "Premium wagyu."],
    ["Yobuko squid", "呼子のイカ", "Squid served raw, so fresh it's still translucent."],
    ["Ariake nori", "有明海のり", "Saga is Japan's top nori producer."],
    ["Ureshino tea", "嬉野茶", "Rolled green tea."]
  ],
  omiyage: [
    ["Arita-yaki", "有田焼", "Porcelain."],
    ["Ogi yōkan", "小城羊羹", "Sugar-crusted bean jelly."],
    ["Saga nori", "佐賀海苔", "Dried seaweed."],
    ["Marubōro", "丸ぼうろ", "Round cookies of Portuguese origin."]
  ]
},
{
  id: "42", en: "Nagasaki", ja: "長崎県", kana: "ながさきけん", suf: "ken", region: "Kyūshū & Okinawa",
  cap: "Nagasaki", capJa: "長崎市", ll: [32.74, 129.87],
  pop: 1232190, pop20: 1312317, area: 4130.98, u15: 11.9, o65: 34.7,
  tag: "Japan's window to the world — and the prefecture with the most islands.",
  climate: "Mild and rainy. With about 1,479 islands, Nagasaki has more islands than any other prefecture.",
  season: "Winter for the Lantern Festival; spring and autumn.",
  history: "Portuguese traders arrived in 1571, and Nagasaki became a centre of Christianity until it was banned; Hidden Christians kept their faith in secret for centuries (UNESCO, 2018). During Japan's isolation (1641–1859), the Dutch trading post at Dejima was the country's only window to the West. On 9 August 1945 Nagasaki was hit by an atomic bomb.",
  sights: [
    ["Nagasaki Peace Park", "Atomic Bomb Museum and Peace Statue."],
    ["Glover Garden", "Western houses on a hillside."],
    ["Dejima", "Restored Dutch trading post."],
    ["Ōura Church", "Japan's oldest standing church."],
    ["Gunkanjima", "Abandoned 'battleship island' coal mine."],
    ["Gotō Islands", "Remote churches and beaches."]
  ],
  food: [
    ["Champon", "ちゃんぽん", "Noodles with seafood and vegetables."],
    ["Sara udon", "皿うどん", "Crispy noodles with thick sauce."],
    ["Castella", "カステラ", "Sponge cake from Portuguese traders."],
    ["Toruko rice", "トルコライス", "Pilaf, spaghetti and pork cutlet on one plate."],
    ["Sasebo burger", "佐世保バーガー", "Big burgers from the navy town."]
  ],
  omiyage: [
    ["Castella", "カステラ", "Fukusaya, Bunmeidō and more."],
    ["Kakuni manjū", "角煮まんじゅう", "Braised pork in a bun."],
    ["Hasami-yaki", "波佐見焼", "Modern porcelain."],
    ["Karasumi", "からすみ", "Dried mullet roe."]
  ]
},
{
  id: "43", en: "Kumamoto", ja: "熊本県", kana: "くまもとけん", suf: "ken", region: "Kyūshū & Okinawa",
  cap: "Kumamoto", capJa: "熊本市", ll: [32.79, 130.74],
  pop: 1678090, pop20: 1738301, area: 7409.46, u15: 12.6, o65: 32.6,
  tag: "Mt. Aso's giant caldera, a great castle and Kumamon.",
  climate: "Hot, humid summers in the Kumamoto basin; the Aso highlands are cool and can be snowy.",
  season: "Spring and autumn for Aso.",
  history: "Katō Kiyomasa built Kumamoto Castle in 1607; the Hosokawa clan ruled from 1632. During the Satsuma Rebellion in 1877 the castle withstood Saigō Takamori's siege. Minamata disease, caused by industrial mercury pollution, was identified here in 1956. Earthquakes in 2016 badly damaged the castle; its keep reopened in 2021.",
  sights: [
    ["Kumamoto Castle", "One of Japan's great castles."],
    ["Mt. Aso", "Huge active volcanic caldera."],
    ["Suizen-ji Jōju-en", "Garden with a mini Mt. Fuji."],
    ["Kurokawa Onsen", "Rustic outdoor baths."],
    ["Amakusa", "Islands with Hidden Christian sites."],
    ["Tsūjun Bridge", "Stone aqueduct that sprays water."]
  ],
  food: [
    ["Basashi", "馬刺し", "Horse sashimi."],
    ["Kumamoto ramen", "熊本ラーメン", "Tonkotsu with garlic oil."],
    ["Karashi renkon", "辛子れんこん", "Lotus root stuffed with mustard miso."],
    ["Ikinari dango", "いきなり団子", "Sweet potato and bean paste dumplings."],
    ["Tomatoes & watermelons", "トマト・すいか", "Kumamoto is Japan's top producer of both."]
  ],
  omiyage: [
    ["Kumamon goods", "くまモングッズ", "The famous black bear mascot."],
    ["Karashi renkon", "辛子れんこん", "Spicy lotus root."],
    ["Ikinari dango", "いきなり団子", "Frozen to take home."],
    ["Higo zōgan", "肥後象嵌", "Gold and silver inlay on iron."]
  ]
},
{
  id: "44", en: "Ōita", ja: "大分県", kana: "おおいたけん", suf: "ken", region: "Kyūshū & Okinawa",
  cap: "Ōita", capJa: "大分市", ll: [33.24, 131.61],
  pop: 1076875, pop20: 1123852, area: 6340.76, u15: 11.4, o65: 34.4,
  tag: "Japan's 'Onsen Prefecture' — Beppu and Yufuin.",
  climate: "Mild Inland Sea climate.",
  season: "Winter for steaming onsen towns; spring and autumn for Kunisaki.",
  history: "Usa Jingū is the head shrine of the tens of thousands of Hachiman shrines across Japan. The Kunisaki Peninsula developed a unique blend of Shinto and Buddhism. In the 16th century the Christian lord Ōtomo Sōrin welcomed Portuguese traders. Ōita has more hot-spring sources and hot water output than any other prefecture.",
  sights: [
    ["Beppu Hells", "Colourful hot-spring pools for viewing."],
    ["Yufuin", "Onsen town below Mt. Yufu."],
    ["Usa Jingū", "Head Hachiman shrine."],
    ["Usuki Stone Buddhas", "Rock-carved Buddhas (National Treasure)."],
    ["Fuki-ji", "Kyūshū's oldest wooden building."],
    ["Kokonoe Yume Bridge", "High pedestrian suspension bridge."]
  ],
  food: [
    ["Toriten", "とり天", "Chicken tempura."],
    ["Seki-aji & seki-saba", "関あじ・関さば", "Premium mackerel."],
    ["Kabosu", "かぼす", "Citrus — Ōita grows almost all of Japan's."],
    ["Dango-jiru", "だんご汁", "Flat noodle soup."],
    ["Jigoku-mushi", "地獄蒸し", "Food steamed over hot-spring vents."]
  ],
  omiyage: [
    ["Kabosu products", "かぼす製品", "Juice and ponzu."],
    ["Dried shiitake", "干し椎茸", "Japan's top producer."],
    ["Zabieru", "ざびえる", "Sweet named after Francis Xavier."],
    ["Beppu bamboo crafts", "別府竹細工", "Woven baskets."]
  ]
},
{
  id: "45", en: "Miyazaki", ja: "宮崎県", kana: "みやざきけん", suf: "ken", region: "Kyūshū & Okinawa",
  cap: "Miyazaki", capJa: "宮崎市", ll: [31.91, 131.42],
  pop: 1018904, pop20: 1069576, area: 7735.22, u15: 12.5, o65: 33.9,
  tag: "Sunny Hyūga — land of myths, mangoes and chicken nanban.",
  climate: "Warm and sunny with lots of sunshine hours; summers bring heavy rain and typhoons.",
  season: "Spring and autumn; November–February for night kagura in Takachiho.",
  history: "Hyūga is the setting of key myths: the gods are said to have descended at Takachiho, and legendary Emperor Jimmu set out from here. The Saitobaru tombs are among Japan's largest kofun clusters. In the 1960s Miyazaki was Japan's top honeymoon destination.",
  sights: [
    ["Takachiho Gorge", "Basalt gorge with Manai Falls."],
    ["Amano-Iwato Shrine", "Cave where the sun goddess hid."],
    ["Aoshima", "Island shrine with 'Devil's Washboard' rocks."],
    ["Udo Jingū", "Shrine inside a sea cave."],
    ["Saitobaru Burial Mounds", "Over 300 kofun."],
    ["Obi", "Small castle town."]
  ],
  food: [
    ["Chicken nanban", "チキン南蛮", "Fried chicken with sweet vinegar and tartar sauce."],
    ["Charcoal-grilled chicken", "地鶏の炭火焼", "Smoky local chicken."],
    ["Hiyajiru", "冷や汁", "Cold miso soup over rice."],
    ["Miyazaki beef", "宮崎牛", "Multiple 'Wagyu Olympics' champion."],
    ["Mangoes", "マンゴー", "Premium 'Taiyō no Tamago' mangoes."]
  ],
  omiyage: [
    ["Cheese manjū", "チーズ饅頭", "Buns with cream cheese filling."],
    ["Imo-shōchū", "芋焼酎", "Miyazaki is a top shōchū producer."],
    ["Hyūga natsu", "日向夏", "Citrus and sweets."],
    ["Mangoes", "マンゴー", "Gift boxes."]
  ]
},
{
  id: "46", en: "Kagoshima", ja: "鹿児島県", kana: "かごしまけん", suf: "ken", region: "Kyūshū & Okinawa",
  cap: "Kagoshima", capJa: "鹿児島市", ll: [31.56, 130.56],
  pop: 1512969, pop20: 1588256, area: 9187.06, u15: 12.5, o65: 34.2,
  tag: "Satsuma — volcanoes, samurai and subtropical islands.",
  climate: "Warm; Sakurajima sometimes showers the city with ash. The Amami Islands are subtropical.",
  season: "Spring and autumn; Yakushima in May or October.",
  history: "The Shimazu clan ruled for about 700 years. Firearms reached Japan via Tanegashima in 1543, and Francis Xavier landed in 1549. Satsuma conquered the Ryūkyū Kingdom in 1609, then led the Meiji Restoration with Chōshū. Saigō Takamori led the Satsuma Rebellion of 1877.",
  sights: [
    ["Sakurajima", "Active volcano across the bay."],
    ["Sengan-en", "Shimazu garden with volcano views."],
    ["Yakushima", "Ancient cedar forests (UNESCO)."],
    ["Chiran", "Samurai district and peace museum."],
    ["Ibusuki", "Hot sand baths on the beach."],
    ["Amami Ōshima", "Mangroves and tropical forest (UNESCO)."]
  ],
  food: [
    ["Kurobuta", "黒豚", "Berkshire pork."],
    ["Imo-shōchū", "芋焼酎", "Sweet potato spirit."],
    ["Satsuma-age", "さつま揚げ", "Fried fish cakes."],
    ["Shirokuma", "白くま", "Shaved ice with milk and fruit."],
    ["Keihan", "鶏飯", "Amami chicken rice with broth."]
  ],
  omiyage: [
    ["Karukan", "かるかん", "Yam-based steamed cake."],
    ["Imo-shōchū", "芋焼酎", "Hundreds of brands."],
    ["Satsuma kiriko", "薩摩切子", "Cut glass."],
    ["Bontan Ame", "ボンタンアメ", "Citrus soft candy."]
  ]
},
{
  id: "47", en: "Okinawa", ja: "沖縄県", kana: "おきなわけん", suf: "ken", region: "Kyūshū & Okinawa",
  cap: "Naha", capJa: "那覇市", ll: [26.21, 127.68],
  pop: 1468220, pop20: 1467480, area: 2282.59, u15: 15.8, o65: 24.2,
  tag: "The former Ryūkyū Kingdom — coral seas and a culture of its own.",
  climate: "Subtropical — warm all year (about 17 °C in Naha in January). The rainy season comes in May–June and typhoons from July to October.",
  season: "March–June and October–November.",
  history: "The Ryūkyū Kingdom, unified in 1429, grew rich as a trading hub between China, Japan and Southeast Asia. Satsuma invaded in 1609, and Japan annexed the islands as Okinawa Prefecture in 1879. The Battle of Okinawa in 1945 was among the bloodiest of the Pacific War, killing around 200,000 people, many of them Okinawan civilians. Okinawa was under US administration until 1972 and still hosts about 70% of the land used exclusively by US forces in Japan.",
  sights: [
    ["Shuri Castle", "Royal palace; its main hall, lost to fire in 2019, is due to reopen in November 2026."],
    ["Churaumi Aquarium", "Whale sharks in a giant tank."],
    ["Kerama Islands", "Clear 'Kerama blue' water."],
    ["Ishigaki & Iriomote", "Jungle islands (UNESCO)."],
    ["Peace Memorial Park", "Memorial to the Battle of Okinawa."],
    ["Taketomi", "Traditional Ryūkyū village."]
  ],
  food: [
    ["Okinawa soba", "沖縄そば", "Wheat noodles with pork."],
    ["Gōyā champurū", "ゴーヤーチャンプルー", "Bitter melon stir-fry."],
    ["Rafute", "ラフテー", "Braised pork belly."],
    ["Taco rice", "タコライス", "Taco filling on rice."],
    ["Umi-budō", "海ぶどう", "Sea grapes seaweed."]
  ],
  omiyage: [
    ["Beni-imo tart", "紅いもタルト", "Purple sweet potato tarts."],
    ["Chinsukō", "ちんすこう", "Shortbread biscuits."],
    ["Awamori", "泡盛", "Okinawan rice spirit."],
    ["Shīsā & Ryūkyū glass", "シーサー・琉球ガラス", "Guardian lions and glass."]
  ]
}
];
