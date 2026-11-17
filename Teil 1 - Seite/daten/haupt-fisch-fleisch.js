/* Hauptgerichte mit Fisch (11) und Fleisch (10). */
REZEPTE.push(
  {
    id: "makrele-rote-bete",
    titel: "Gebratene Makrele mit Rote-Bete-Kartoffel-Gemüse",
    kurz: "Kross gebratene Makrele auf buntem Ofengemüse mit Meerrettich-Joghurt.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 20, gesamt: 45,
    passt: ["entzuendung", "rheuma", "arthrose", "gluten", "bluthochdruck", "cholesterin", "diabetes"],
    zutaten: [
      { m: 2, e: "", n: "Makrelenfilets", h: "frisch, mit Haut" },
      { m: 300, e: "g", n: "Rote Bete", h: "roh" },
      { m: 300, e: "g", n: "kleine Kartoffeln" },
      { m: 2, e: "EL", n: "Rapsöl", v: 1 },
      { m: 2, e: "Zweige", n: "Thymian" },
      { m: 150, e: "g", n: "Naturjoghurt" },
      { m: 1, e: "TL", n: "Meerrettich" },
      { m: 2, e: "EL", n: "Dill" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Backofen auf 200 °C vorheizen. Rote Bete schälen und in Spalten schneiden, Kartoffeln halbieren. Mit 1 EL Öl, Thymian und etwas Salz mischen und 30 bis 35 Minuten backen.",
      "Joghurt mit Meerrettich, Dill, Salz und Pfeffer verrühren.",
      "Makrelenfilets trocken tupfen, die Haut einige Male einritzen. Im restlichen Öl auf der Hautseite 3 Minuten kross braten, wenden und 1 Minute weiterbraten.",
      "Gemüse auf Teller verteilen, Makrele darauf legen und mit Meerrettich-Joghurt servieren."
    ],
    warum: "Makrele gehört zu den Fischen mit den meisten Omega-3-Fettsäuren und ist günstiger als Lachs. Rote Bete liefert Nitrat für die Gefäße, Kartoffeln Kalium. Ein Teller voller entzündungshemmender Zutaten.",
    tipps: [
      "Laktoseintoleranz: laktosefreien Joghurt oder Sojajoghurt nehmen.",
      "Gicht: Makrele ist mäßig purinreich, nicht öfter als einmal pro Woche."
    ]
  },

  {
    id: "forelle-mandeln-bohnen",
    titel: "Ofenforelle mit Mandeln und grünen Bohnen",
    kurz: "Zarte Forellenfilets mit Zitrone und gerösteten Mandeln auf grünen Bohnen.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 15, gesamt: 30,
    passt: ["entzuendung", "gluten", "laktose", "cholesterin", "bluthochdruck", "diabetes", "fettleber", "gewicht", "arthrose"],
    zutaten: [
      { m: 2, e: "", n: "Forellenfilets", h: "à ca. 120 g" },
      { m: 300, e: "g", n: "grüne Bohnen" },
      { m: 30, e: "g", n: "Mandelblättchen" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 1, e: "", n: "Bio-Zitrone" },
      { m: 2, e: "EL", n: "Petersilie" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Backofen auf 180 °C vorheizen. Bohnen putzen und in Salzwasser 7 Minuten bissfest garen, abgießen.",
      "Bohnen in eine Auflaufform geben, mit 1 EL Öl mischen. Forellenfilets darauf legen, salzen, pfeffern und mit Zitronenscheiben belegen.",
      "Etwa 12 Minuten garen, bis der Fisch sich leicht zerteilen lässt.",
      "Mandeln im restlichen Öl goldbraun rösten, mit Petersilie mischen und über Fisch und Bohnen geben."
    ],
    warum: "Forelle aus heimischer Zucht liefert Eiweiß, Vitamin D und Omega-3. Mandeln bringen Vitamin E und ungesättigte Fette. Das Gericht ist kohlenhydratarm und gut für den Abend.",
    tipps: [
      "Dazu passen Pellkartoffeln oder Naturreis.",
      "Statt Forelle geht auch Saibling oder Lachs."
    ]
  },

  {
    id: "kabeljau-kartoffelstampf",
    titel: "Kabeljau in Kräuteröl mit Kartoffel-Möhren-Stampf",
    kurz: "Saftiger Fisch auf cremigem Stampf, mild und gut verträglich.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 20, gesamt: 35,
    passt: ["gluten", "laktose", "reizdarm", "fruktose", "ced", "bluthochdruck", "gewicht"],
    zutaten: [
      { m: 2, e: "", n: "Kabeljaufilets", h: "à ca. 150 g" },
      { m: 400, e: "g", n: "mehligkochende Kartoffeln" },
      { m: 2, e: "", n: "Möhren" },
      { m: 100, e: "ml", n: "laktosefreie Milch oder Reisdrink" },
      { m: 3, e: "EL", n: "Olivenöl", v: 1 },
      { m: 2, e: "EL", n: "Petersilie", h: "fein gehackt" },
      { m: 1, e: "EL", n: "Schnittlauch" },
      { m: 1, e: "Prise", n: "Muskat", v: 1 },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Kartoffeln und Möhren schälen, würfeln und in Salzwasser 15 bis 20 Minuten weich kochen.",
      "Abgießen, Milch und 1 EL Öl dazugeben und grob stampfen. Mit Muskat und Salz abschmecken.",
      "Fisch salzen und in 1 EL Öl bei mittlerer Hitze von jeder Seite 3 bis 4 Minuten braten.",
      "Restliches Öl mit Kräutern verrühren. Fisch auf dem Stampf anrichten und mit Kräuteröl beträufeln."
    ],
    warum: "Magerer Seefisch liefert leicht verdauliches Eiweiß und Jod. Weich gekochte Kartoffeln und Möhren sind FODMAP-arm und schonen den Darm. Ohne Zwiebel und Knoblauch ist das Gericht auch bei Reizdarm gut verträglich.",
    tipps: [
      "Kabeljau mit MSC-Siegel oder Seelachs wählen.",
      "Histaminintoleranz: Fisch nur ganz frisch oder direkt tiefgekühlt verwenden."
    ]
  },

  {
    id: "lachs-linsen",
    titel: "Lachs auf Linsengemüse",
    kurz: "Würzige Berglinsen mit Möhren und Sellerie, darauf ein Stück Lachs.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 20, gesamt: 40,
    passt: ["entzuendung", "rheuma", "cholesterin", "diabetes", "gluten", "laktose", "divertikel", "arthrose"],
    zutaten: [
      { m: 120, e: "g", n: "Berglinsen" },
      { m: 1, e: "", n: "Möhre" },
      { m: 1, e: "Stange", n: "Staudensellerie" },
      { m: 1, e: "", n: "Schalotte" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 300, e: "ml", n: "Gemüsebrühe", h: "salzarm" },
      { m: 1, e: "EL", n: "Balsamico", v: 1 },
      { m: 1, e: "TL", n: "Senf", v: 1 },
      { m: 2, e: "", n: "Lachsfilets", h: "à ca. 120 g" },
      { m: 2, e: "EL", n: "Petersilie" }
    ],
    schritte: [
      "Möhre, Sellerie und Schalotte fein würfeln und in 1 EL Öl andünsten.",
      "Linsen und Brühe dazugeben und 25 Minuten köcheln, bis die Linsen weich sind. Mit Balsamico, Senf, Salz und Pfeffer abschmecken.",
      "Lachs im restlichen Öl auf der Hautseite 4 Minuten braten, wenden und 2 Minuten weiterbraten.",
      "Linsen mit Petersilie bestreuen und den Lachs darauf servieren."
    ],
    warum: "Fisch und Hülsenfrüchte in einem Gericht: Omega-3 aus dem Lachs, Ballaststoffe und Eiweiß aus den Linsen. Die Mahlzeit sättigt lange und hält den Blutzucker stabil.",
    tipps: [
      "Linsengemüse lässt sich am Vortag kochen.",
      "Vegetarisch: statt Lachs ein pochiertes Ei."
    ]
  },

  {
    id: "garnelen-zucchininudeln",
    titel: "Zucchini-Nudeln mit Garnelen und Tomaten",
    kurz: "Leichte Low-Carb-Pasta aus Zucchini mit Knoblauch-Garnelen.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 20, gesamt: 20,
    passt: ["diabetes", "fettleber", "gewicht", "gluten", "laktose"],
    zutaten: [
      { m: 3, e: "", n: "Zucchini" },
      { m: 200, e: "g", n: "Garnelen", h: "geschält" },
      { m: 2, e: "", n: "Knoblauchzehen" },
      { m: 200, e: "g", n: "Kirschtomaten" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 1, e: "Prise", n: "Chiliflocken", v: 1 },
      { m: 0.5, e: "", n: "Zitrone" },
      { m: 0.5, e: "Bund", n: "Basilikum" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Zucchini mit einem Spiralschneider zu Nudeln drehen oder in feine Streifen hobeln. Knoblauch in Scheiben schneiden, Tomaten halbieren.",
      "1 EL Öl erhitzen, Garnelen mit Knoblauch und Chili 2 bis 3 Minuten braten, bis sie rosa sind. Herausnehmen.",
      "Restliches Öl in die Pfanne geben, Tomaten 2 Minuten braten, Zucchininudeln dazugeben und nur 1 bis 2 Minuten schwenken, damit sie bissfest bleiben.",
      "Garnelen unterheben, mit Zitronensaft, Salz und Pfeffer abschmecken und mit Basilikum servieren."
    ],
    warum: "Zucchininudeln ersetzen Pasta mit einem Bruchteil der Kohlenhydrate, Garnelen liefern mageres Eiweiß. Ideal für den Abend, wenn die Leber über Nacht Fett abbauen soll.",
    tipps: [
      "Gicht und Histaminintoleranz: Garnelen sind ungünstig, statt dessen Hähnchen oder Tofu.",
      "Halbe-halbe: Wer satter werden möchte, mischt Vollkornspaghetti unter."
    ]
  },

  {
    id: "fisch-curry-kokos",
    titel: "Fisch-Curry mit Kokos und Spinat",
    kurz: "Mildes gelbes Curry mit Seelachs, Paprika und Spinat.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 15, gesamt: 30,
    passt: ["entzuendung", "gluten", "laktose", "diabetes", "arthrose"],
    zutaten: [
      { m: 300, e: "g", n: "Seelachsfilet" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 1, e: "", n: "Knoblauchzehe" },
      { m: 3, e: "cm", n: "Ingwer" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 2, e: "TL", n: "Currypulver", v: 1 },
      { m: 0.5, e: "TL", n: "Kurkuma", v: 1 },
      { m: 1, e: "", n: "rote Paprika" },
      { m: 200, e: "ml", n: "Kokosmilch" },
      { m: 100, e: "ml", n: "Wasser" },
      { m: 100, e: "g", n: "Babyspinat" },
      { m: 0.5, e: "", n: "Limette" },
      { m: 100, e: "g", n: "Basmatireis" }
    ],
    schritte: [
      "Reis nach Packungsangabe garen. Zwiebel, Knoblauch und Ingwer fein hacken, Paprika in Streifen schneiden.",
      "Zwiebel, Knoblauch und Ingwer im Öl andünsten, Curry und Kurkuma 1 Minute mitrösten.",
      "Paprika, Kokosmilch und Wasser dazugeben und 5 Minuten köcheln.",
      "Fisch in Würfel schneiden, ins Curry legen und 5 Minuten gar ziehen lassen. Spinat unterheben, mit Limettensaft und Salz abschmecken. Mit Reis servieren."
    ],
    warum: "Curry, Kurkuma und Ingwer liefern entzündungshemmende Pflanzenstoffe. Seelachs ist mager, jodreich und günstig. Mit viel Gemüse und einer moderaten Portion Reis entsteht eine ausgewogene Mahlzeit.",
    tipps: [
      "Diabetes: Reis durch Blumenkohlreis ersetzen.",
      "Vegetarisch: Kichererbsen statt Fisch."
    ]
  },

  {
    id: "seelachs-tomaten-oliven",
    titel: "Seelachs aus dem Ofen mit Tomaten und Oliven",
    kurz: "Mediterraner Fisch aus der Form: Tomaten, Oliven, Kapern, Kräuter.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 10, gesamt: 30,
    passt: ["gluten", "laktose", "gewicht", "fettleber", "diabetes", "cholesterin", "entzuendung"],
    zutaten: [
      { m: 2, e: "", n: "Seelachsfilets", h: "à ca. 150 g" },
      { m: 300, e: "g", n: "Kirschtomaten" },
      { m: 1, e: "", n: "Zucchini" },
      { m: 12, e: "", n: "schwarze Oliven" },
      { m: 1, e: "EL", n: "Kapern" },
      { m: 2, e: "", n: "Knoblauchzehen" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 1, e: "TL", n: "Oregano", h: "getrocknet", v: 1 },
      { m: 0.5, e: "Bund", n: "Basilikum" },
      { n: "Pfeffer", v: 1 }
    ],
    schritte: [
      "Backofen auf 200 °C vorheizen. Tomaten halbieren, Zucchini würfeln, Knoblauch in Scheiben schneiden.",
      "Gemüse, Oliven, Kapern, Knoblauch, Oregano und Öl in einer Auflaufform mischen und 10 Minuten backen.",
      "Fischfilets auf das Gemüse legen, pfeffern und weitere 12 bis 15 Minuten garen.",
      "Mit Basilikum bestreuen."
    ],
    warum: "Ein Gericht ganz nach mediterraner Art: magerer Fisch, viel Gemüse, Olivenöl. Kaum Kohlenhydrate, viel Eiweiß, wenig Aufwand. Oliven und Kapern würzen so stark, dass kein Salz nötig ist.",
    tipps: [
      "Dazu passen Ofenkartoffeln oder Vollkornbaguette.",
      "Histaminintoleranz: Tomaten, Oliven und Kapern sind ungünstig."
    ]
  },

  {
    id: "lachs-frikadellen",
    titel: "Lachs-Frikadellen mit Gurken-Dill-Salat",
    kurz: "Saftige Fischpflanzerl ohne Brötchen, dazu frischer Gurkensalat.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 25, gesamt: 30,
    passt: ["entzuendung", "rheuma", "gluten", "laktose", "diabetes", "gewicht", "arthrose"],
    zutaten: [
      { m: 300, e: "g", n: "Lachsfilet", h: "ohne Haut" },
      { m: 1, e: "", n: "Ei" },
      { m: 3, e: "EL", n: "glutenfreie Haferflocken", h: "zart" },
      { m: 2, e: "", n: "Frühlingszwiebeln" },
      { m: 2, e: "EL", n: "Dill", h: "gehackt" },
      { m: 1, e: "", n: "Bio-Zitrone", h: "Abrieb und Saft" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { g: "Gurkensalat" },
      { m: 1, e: "", n: "Salatgurke" },
      { m: 1, e: "EL", n: "Apfelessig", v: 1 },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 2, e: "EL", n: "Dill" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Lachs sehr fein hacken oder kurz im Mixer zerkleinern. Mit Ei, Haferflocken, Frühlingszwiebeln, Dill, Zitronenabrieb, Salz und Pfeffer mischen und 10 Minuten ruhen lassen.",
      "Gurke in dünne Scheiben hobeln, mit Essig, Öl, Dill, Salz und Pfeffer mischen.",
      "Aus der Masse mit feuchten Händen 6 flache Frikadellen formen und im Öl bei mittlerer Hitze von jeder Seite 3 bis 4 Minuten braten.",
      "Mit Zitronenspalten und Gurkensalat servieren."
    ],
    warum: "Lachs in Frikadellenform schmeckt auch Fischmuffeln und liefert reichlich Omega-3. Haferflocken statt Brötchen binden die Masse und bringen Ballaststoffe.",
    tipps: [
      "Frikadellen lassen sich roh einfrieren.",
      "Ohne Zöliakie können auch normale Haferflocken verwendet werden."
    ]
  },

  {
    id: "saibling-fenchel",
    titel: "Saibling auf Fenchel-Orangen-Gemüse",
    kurz: "Zarter Fisch auf geschmortem Fenchel mit einem Hauch Orange.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 15, gesamt: 35,
    passt: ["entzuendung", "gluten", "laktose", "cholesterin", "bluthochdruck", "gewicht", "fettleber", "arthrose"],
    zutaten: [
      { m: 2, e: "", n: "Saiblingsfilets", h: "à ca. 120 g" },
      { m: 2, e: "", n: "Fenchelknollen" },
      { m: 1, e: "", n: "Orange", h: "Saft und etwas Abrieb" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 100, e: "ml", n: "Wasser" },
      { m: 0.5, e: "TL", n: "Fenchelsamen", v: 1 },
      { m: 1, e: "EL", n: "Pinienkerne" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Fenchel halbieren, Strunk entfernen und in Spalten schneiden. Grün beiseitelegen.",
      "Fenchel in 1 EL Öl 3 Minuten anbraten, Fenchelsamen, Orangensaft, -abrieb und Wasser dazugeben und zugedeckt 15 Minuten schmoren.",
      "Saibling salzen und im restlichen Öl auf der Hautseite 3 Minuten braten, wenden und 1 Minute weiterbraten.",
      "Fisch auf dem Fenchel anrichten, mit gerösteten Pinienkernen und Fenchelgrün bestreuen."
    ],
    warum: "Saibling ist ein heimischer Fisch mit feinem Geschmack und gutem Omega-3-Gehalt. Geschmorter Fenchel ist leicht bekömmlich und kaliumreich.",
    tipps: [
      "Dazu passen Kartoffeln oder Polenta.",
      "Saibling durch Forelle ersetzen, wenn er nicht erhältlich ist."
    ]
  },

  {
    id: "lachs-spargel",
    titel: "Lachs mit grünem Spargel und Kräuterkartoffeln",
    kurz: "Frühlingsessen vom Blech: Lachs, Spargel und junge Kartoffeln.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 15, gesamt: 40,
    passt: ["entzuendung", "rheuma", "arthrose", "gluten", "laktose", "bluthochdruck", "cholesterin"],
    zutaten: [
      { m: 2, e: "", n: "Lachsfilets", h: "à ca. 125 g" },
      { m: 500, e: "g", n: "grüner Spargel" },
      { m: 400, e: "g", n: "junge Kartoffeln" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 1, e: "", n: "Bio-Zitrone" },
      { m: 2, e: "EL", n: "Schnittlauch" },
      { m: 2, e: "EL", n: "Petersilie" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Backofen auf 200 °C vorheizen. Kartoffeln halbieren, mit 1 EL Öl und etwas Salz auf ein Blech geben und 15 Minuten backen.",
      "Vom Spargel die holzigen Enden abschneiden. Spargel und Lachs aufs Blech legen, mit restlichem Öl beträufeln, salzen und pfeffern.",
      "Weitere 12 bis 15 Minuten garen.",
      "Mit Zitronenabrieb, Zitronensaft und Kräutern bestreuen."
    ],
    warum: "Grüner Spargel ist kalorienarm, kaliumreich und enthält Folsäure. Zusammen mit Lachs entsteht ein entzündungshemmendes, leichtes Frühlingsgericht.",
    tipps: [
      "Gicht: Spargel enthält etwas Purine, in normalen Mengen aber unproblematisch.",
      "Reizdarm: Spargel ist reich an FODMAP, dann Zucchini nehmen."
    ]
  },

  {
    id: "kabeljau-gemuese-paeckchen",
    titel: "Kabeljau im Päckchen mit Möhren, Zucchini und Ingwer",
    kurz: "Im Backpapier gegart: saftig, aromatisch und ohne Fett in der Pfanne.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 15, gesamt: 35,
    passt: ["fruktose", "reizdarm", "ced", "gluten", "laktose", "gewicht", "bluthochdruck"],
    zutaten: [
      { m: 2, e: "", n: "Kabeljaufilets", h: "à ca. 150 g" },
      { m: 2, e: "", n: "Möhren" },
      { m: 1, e: "", n: "kleine Zucchini" },
      { m: 3, e: "cm", n: "Ingwer" },
      { m: 2, e: "", n: "Frühlingszwiebeln", h: "nur das Grüne" },
      { m: 2, e: "EL", n: "Rapsöl oder Knoblauchöl", v: 1 },
      { m: 100, e: "g", n: "Basmatireis" },
      { n: "Salz", v: 1 }
    ],
    schritte: [
      "Backofen auf 200 °C vorheizen. Reis nach Packungsangabe garen.",
      "Möhren und Zucchini in feine Streifen schneiden, Ingwer in feine Stifte.",
      "Zwei große Bögen Backpapier auslegen. Gemüse darauf verteilen, Fisch darauf legen, salzen, mit Ingwer belegen und mit Öl beträufeln.",
      "Papier zu Päckchen falten, die Ränder gut umschlagen. Auf einem Blech 15 bis 18 Minuten garen. Mit Frühlingszwiebelgrün bestreuen und mit Reis servieren."
    ],
    warum: "Im Päckchen gart der Fisch im eigenen Dampf: schonend, saftig und fettarm. Möhren, Zucchini in kleiner Menge, Ingwer und Reis sind FODMAP-arm und gut verträglich, auch bei empfindlichem Darm.",
    tipps: [
      "Reizdarm: pro Portion nicht mehr als die halbe kleine Zucchini.",
      "Statt Kabeljau passen Lachs oder Seelachs."
    ]
  },

  {
    id: "haehnchen-gemuese-curry",
    titel: "Hähnchen-Gemüse-Curry mit Kurkuma",
    kurz: "Cremiges Curry mit Hähnchen, Blumenkohl und Erbsen.",
    mahlzeit: "hauptgericht", ernaehrung: "fleisch",
    portionen: 3, zeit: 20, gesamt: 35,
    passt: ["gluten", "laktose", "entzuendung", "diabetes"],
    zutaten: [
      { m: 350, e: "g", n: "Hähnchenbrustfilet" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 2, e: "", n: "Knoblauchzehen" },
      { m: 3, e: "cm", n: "Ingwer" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 2, e: "TL", n: "Currypulver", v: 1 },
      { m: 1, e: "TL", n: "Kurkuma", v: 1 },
      { m: 300, e: "g", n: "Blumenkohl" },
      { m: 150, e: "g", n: "Erbsen", h: "tiefgekühlt" },
      { m: 400, e: "g", n: "stückige Tomaten", h: "1 Dose" },
      { m: 150, e: "ml", n: "Kokosmilch" },
      { m: 0.5, e: "Bund", n: "Koriander" }
    ],
    schritte: [
      "Zwiebel, Knoblauch und Ingwer fein hacken. Hähnchen würfeln, Blumenkohl in kleine Röschen teilen.",
      "Hähnchen im Öl rundum anbraten und herausnehmen. Zwiebel, Knoblauch und Ingwer in derselben Pfanne andünsten, Gewürze 1 Minute mitrösten.",
      "Tomaten, Kokosmilch und Blumenkohl dazugeben und 10 Minuten köcheln.",
      "Hähnchen und Erbsen dazugeben und weitere 5 Minuten garen. Mit Salz abschmecken und mit Koriander bestreuen."
    ],
    warum: "Das Curry steckt voller Gemüse und Gewürze mit entzündungshemmender Wirkung. Hähnchen liefert mageres Eiweiß. Mit Blumenkohl statt nur Reis bleibt die Kohlenhydratmenge moderat.",
    tipps: [
      "Dazu passen Basmati- oder Blumenkohlreis.",
      "Vegetarisch: Kichererbsen statt Hähnchen."
    ]
  },

  {
    id: "putenbrust-ofenkuerbis",
    titel: "Putenbrust mit Ofenkürbis und Rosmarin",
    kurz: "Saftige Pute und karamellisierter Hokkaido aus dem Ofen.",
    mahlzeit: "hauptgericht", ernaehrung: "fleisch",
    portionen: 2, zeit: 15, gesamt: 40,
    passt: ["gluten", "laktose", "histamin", "fruktose", "reizdarm", "ced", "diabetes", "gewicht"],
    zutaten: [
      { m: 300, e: "g", n: "Putenbrustfilet", h: "frisch" },
      { m: 500, e: "g", n: "Hokkaido-Kürbis" },
      { m: 2, e: "", n: "Pastinaken" },
      { m: 2, e: "EL", n: "Rapsöl", v: 1 },
      { m: 2, e: "Zweige", n: "Rosmarin" },
      { m: 2, e: "EL", n: "Petersilie" },
      { n: "Salz", v: 1 }
    ],
    schritte: [
      "Backofen auf 200 °C vorheizen. Kürbis entkernen und mit Schale in Spalten schneiden, Pastinaken schälen und längs vierteln.",
      "Gemüse mit 1 EL Öl, Rosmarinnadeln und Salz mischen und auf einem Blech 15 Minuten backen.",
      "Pute salzen und im restlichen Öl von jeder Seite 2 Minuten anbraten. Zum Gemüse legen und 12 bis 15 Minuten fertig garen.",
      "Pute 5 Minuten ruhen lassen, in Scheiben schneiden und mit Petersilie bestreuen."
    ],
    warum: "Frisches Geflügel, Kürbis und Pastinaken sind histaminarm und FODMAP-arm. Kräuter statt Gewürzmischungen und Fertigsoßen machen das Gericht auch für sehr empfindliche Menschen gut verträglich.",
    tipps: [
      "Histaminintoleranz: Fleisch am Einkaufstag verarbeiten.",
      "Reizdarm: Hokkaido statt Butternut, der enthält weniger FODMAP."
    ]
  },

  {
    id: "haehnchen-spiesse-joghurt",
    titel: "Hähnchenspieße mit Joghurt-Dip und Tomatensalat",
    kurz: "Würzig marinierte Spieße aus Pfanne oder Grill mit frischem Dip.",
    mahlzeit: "hauptgericht", ernaehrung: "fleisch",
    portionen: 2, zeit: 25, gesamt: 55,
    passt: ["gluten", "diabetes", "fettleber", "gewicht"],
    zutaten: [
      { m: 300, e: "g", n: "Hähnchenbrustfilet" },
      { m: 1, e: "", n: "rote Paprika" },
      { m: 1, e: "", n: "Zucchini" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 1, e: "TL", n: "Paprikapulver", v: 1 },
      { m: 0.5, e: "TL", n: "Kreuzkümmel", v: 1 },
      { m: 150, e: "g", n: "Naturjoghurt" },
      { m: 1, e: "", n: "Knoblauchzehe" },
      { m: 1, e: "EL", n: "Minze", h: "gehackt" },
      { m: 3, e: "", n: "Tomaten" },
      { m: 0.5, e: "", n: "rote Zwiebel" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Hähnchen würfeln und mit 1 EL Öl, Paprikapulver, Kreuzkümmel, Salz und Pfeffer 30 Minuten marinieren.",
      "Paprika und Zucchini in Stücke schneiden und abwechselnd mit dem Fleisch auf Spieße stecken.",
      "Spieße in einer Grillpfanne oder auf dem Grill rundum 10 bis 12 Minuten braten.",
      "Joghurt mit geriebenem Knoblauch, Minze und Salz verrühren. Tomaten und Zwiebel in Scheiben schneiden, mit restlichem Öl beträufeln. Alles zusammen servieren."
    ],
    warum: "Viel Eiweiß, viel Gemüse, kaum Kohlenhydrate: So bleibt der Blutzucker ruhig und die Mahlzeit sättigt trotzdem. Joghurt-Dip statt Mayonnaise spart viel Fett.",
    tipps: [
      "Laktoseintoleranz: laktosefreien Joghurt verwenden.",
      "Holzspieße vorher 20 Minuten wässern, dann verbrennen sie nicht."
    ]
  },

  {
    id: "putengeschnetzeltes-pilze",
    titel: "Putengeschnetzeltes mit Champignons",
    kurz: "Der Klassiker in leicht: mit Hafersahne statt Sahne, dazu Gemüse.",
    mahlzeit: "hauptgericht", ernaehrung: "fleisch",
    portionen: 2, zeit: 20, gesamt: 30,
    passt: ["gluten", "laktose", "diabetes", "gewicht", "cholesterin"],
    zutaten: [
      { m: 300, e: "g", n: "Putenbrust" },
      { m: 250, e: "g", n: "Champignons" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 150, e: "ml", n: "Hafersahne", h: "Kochcreme" },
      { m: 100, e: "ml", n: "Gemüsebrühe", h: "salzarm" },
      { m: 1, e: "TL", n: "Senf", v: 1 },
      { m: 1, e: "TL", n: "Speisestärke" },
      { m: 2, e: "EL", n: "Petersilie" },
      { n: "Salz, Pfeffer, Paprikapulver", v: 1 }
    ],
    schritte: [
      "Pute in Streifen schneiden, Pilze in Scheiben, Zwiebel fein würfeln.",
      "Fleisch im heißen Öl portionsweise 2 bis 3 Minuten anbraten und herausnehmen.",
      "Zwiebel und Pilze in der Pfanne 5 Minuten braten. Brühe, Hafersahne und Senf dazugeben und aufkochen. Stärke mit wenig Wasser anrühren und die Soße damit binden.",
      "Fleisch zurück in die Soße geben, kurz erhitzen, würzen und mit Petersilie bestreuen."
    ],
    warum: "Hafersahne hat deutlich weniger gesättigte Fette als Sahne und ist laktosefrei. Putenbrust ist eine der magersten Fleischsorten. Pilze geben Würze und Ballaststoffe.",
    tipps: [
      "Dazu passen Vollkornreis, Kartoffeln oder ein großer Salat.",
      "Glutenfrei: Hafersahne aus glutenfreiem Hafer wählen oder Reissahne."
    ]
  },

  {
    id: "rind-brokkoli-ingwer",
    titel: "Rindfleisch-Brokkoli-Pfanne mit Ingwer",
    kurz: "Asiatische Pfanne mit zartem Rind, viel Brokkoli und Sesam.",
    mahlzeit: "hauptgericht", ernaehrung: "fleisch",
    portionen: 2, zeit: 20, gesamt: 25,
    passt: ["gluten", "laktose", "diabetes", "gewicht"],
    zutaten: [
      { m: 250, e: "g", n: "Rinderhüfte" },
      { m: 1, e: "", n: "Brokkoli" },
      { m: 1, e: "", n: "rote Paprika" },
      { m: 3, e: "cm", n: "Ingwer" },
      { m: 1, e: "", n: "Knoblauchzehe" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 2, e: "EL", n: "Tamari", h: "glutenfrei", v: 1 },
      { m: 1, e: "TL", n: "Sesamöl", v: 1 },
      { m: 1, e: "TL", n: "Speisestärke" },
      { m: 1, e: "EL", n: "Sesam" },
      { m: 100, e: "g", n: "Naturreis" }
    ],
    schritte: [
      "Reis nach Packungsangabe garen. Rind quer zur Faser in dünne Streifen schneiden und mit Stärke und 1 EL Tamari mischen.",
      "Brokkoli in Röschen teilen, Paprika in Streifen schneiden, Ingwer und Knoblauch fein hacken.",
      "Öl im Wok stark erhitzen, Fleisch 2 Minuten scharf anbraten und herausnehmen.",
      "Gemüse mit Ingwer und Knoblauch 4 bis 5 Minuten pfannenrühren, 3 EL Wasser dazugeben. Fleisch, restliche Tamari und Sesamöl unterheben. Mit Sesam bestreuen und mit Reis servieren."
    ],
    warum: "Rotes Fleisch empfehlen Ernährungsfachleute in kleinen Mengen, hier sind es 125 g pro Person, dafür viel Gemüse. Rindfleisch liefert gut verfügbares Eisen und Zink.",
    tipps: [
      "Rheuma und Gicht: rotes Fleisch nur selten, lieber die Variante mit Tofu.",
      "Bluthochdruck: Tamari sparsam verwenden."
    ]
  },

  {
    id: "huehnerfrikassee-leicht",
    titel: "Leichtes Hühnerfrikassee mit Reis",
    kurz: "Das Wohlfühlessen aus Kindertagen, mild, cremig und gut verträglich.",
    mahlzeit: "hauptgericht", ernaehrung: "fleisch",
    portionen: 3, zeit: 25, gesamt: 40,
    passt: ["gluten", "laktose", "histamin", "fruktose", "reizdarm", "ced"],
    zutaten: [
      { m: 400, e: "g", n: "Hähnchenbrustfilet", h: "frisch" },
      { m: 2, e: "", n: "Möhren" },
      { m: 1, e: "", n: "kleine Zucchini" },
      { m: 500, e: "ml", n: "Wasser" },
      { m: 1, e: "TL", n: "Salz", v: 1 },
      { m: 1, e: "", n: "Lorbeerblatt", v: 1 },
      { m: 150, e: "ml", n: "laktosefreie Kochsahne" },
      { m: 2, e: "EL", n: "Speisestärke" },
      { m: 2, e: "EL", n: "Petersilie" },
      { m: 150, e: "g", n: "Basmatireis" }
    ],
    schritte: [
      "Wasser mit Salz und Lorbeer aufkochen, Hähnchen hineinlegen und bei kleiner Hitze 15 Minuten gar ziehen lassen. Herausnehmen und in Würfel schneiden. Brühe aufheben.",
      "Reis nach Packungsangabe garen. Möhren in Scheiben, Zucchini in Würfel schneiden und 6 Minuten in der Brühe garen.",
      "Sahne dazugeben. Stärke mit etwas kaltem Wasser anrühren, einrühren und die Soße 1 Minute köcheln lassen.",
      "Fleisch zurückgeben, Lorbeer entfernen, abschmecken und mit Petersilie servieren."
    ],
    warum: "Gegartes Huhn, weiches Gemüse und Reis sind besonders leicht verdaulich. Statt Champignons, Spargel und Zitronensaft wie im Original sorgen Möhren und Zucchini für Farbe, damit das Gericht histaminarm und FODMAP-arm bleibt.",
    tipps: [
      "Reizdarm: Zucchini auf eine halbe pro Portion begrenzen.",
      "Wer keine Unverträglichkeit hat, gibt Erbsen und einen Spritzer Zitrone dazu."
    ]
  },

  {
    id: "chili-con-carne-bohnen",
    titel: "Chili con Carne mit viel Gemüse",
    kurz: "Mehr Bohnen und Gemüse als Fleisch: deftig, scharf und sättigend.",
    mahlzeit: "hauptgericht", ernaehrung: "fleisch",
    portionen: 4, zeit: 20, gesamt: 50,
    passt: ["gluten", "laktose", "diabetes", "divertikel", "cholesterin"],
    zutaten: [
      { m: 250, e: "g", n: "Rinderhackfleisch", h: "mager" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 2, e: "", n: "Knoblauchzehen" },
      { m: 2, e: "", n: "Paprika" },
      { m: 1, e: "", n: "Zucchini" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 2, e: "TL", n: "Kreuzkümmel", v: 1 },
      { m: 1, e: "TL", n: "Paprikapulver", h: "geräuchert", v: 1 },
      { m: 0.5, e: "TL", n: "Chilipulver", v: 1 },
      { m: 800, e: "g", n: "stückige Tomaten", h: "2 Dosen" },
      { m: 480, e: "g", n: "Kidneybohnen", h: "abgetropft, 2 Dosen" },
      { m: 140, e: "g", n: "Mais", h: "abgetropft" },
      { m: 1, e: "Stück", n: "dunkle Schokolade", h: "ca. 10 g" }
    ],
    schritte: [
      "Zwiebel und Knoblauch hacken, Paprika und Zucchini würfeln.",
      "Hackfleisch im Öl krümelig braten. Zwiebel und Knoblauch dazugeben, Gewürze 1 Minute mitrösten.",
      "Gemüse und Tomaten dazugeben und 20 Minuten köcheln.",
      "Bohnen, Mais und Schokolade dazugeben und weitere 10 Minuten köcheln. Mit Salz abschmecken."
    ],
    warum: "Hier ist das Verhältnis umgedreht: wenig Fleisch, viel Bohnen und Gemüse. So stecken pro Portion reichlich Ballaststoffe und pflanzliches Eiweiß drin, aber nur wenig gesättigtes Fett. Ein Stück dunkle Schokolade rundet die Schärfe ab.",
    tipps: [
      "Vegetarisch: siehe Chili sin Carne mit Süßkartoffel.",
      "Mit einem Klecks Joghurt und frischem Koriander servieren."
    ]
  },

  {
    id: "ofenhaehnchen-wurzelgemuese",
    titel: "Ofenhähnchen mit Wurzelgemüse und Kräutern",
    kurz: "Hähnchenschenkel auf Möhren, Pastinaken und Kartoffeln, alles auf einem Blech.",
    mahlzeit: "hauptgericht", ernaehrung: "fleisch",
    portionen: 2, zeit: 15, gesamt: 55,
    passt: ["gluten", "laktose", "histamin", "fruktose", "reizdarm", "ced"],
    zutaten: [
      { m: 2, e: "", n: "Hähnchenschenkel", h: "frisch" },
      { m: 2, e: "", n: "Möhren" },
      { m: 2, e: "", n: "Pastinaken" },
      { m: 300, e: "g", n: "festkochende Kartoffeln" },
      { m: 2, e: "EL", n: "Rapsöl", v: 1 },
      { m: 3, e: "Zweige", n: "Thymian" },
      { m: 1, e: "Zweig", n: "Rosmarin" },
      { n: "Salz", v: 1 }
    ],
    schritte: [
      "Backofen auf 200 °C vorheizen. Gemüse schälen und in grobe Stücke schneiden.",
      "Gemüse mit Öl, abgezupften Kräutern und Salz mischen und auf einem Blech verteilen.",
      "Hähnchenschenkel salzen und mit der Hautseite nach oben auf das Gemüse legen.",
      "40 bis 45 Minuten backen, bis die Haut knusprig und das Fleisch durchgegart ist."
    ],
    warum: "Ein Gericht ohne Zwiebel, Knoblauch, Tomaten oder Fertiggewürze, das trotzdem nach Sonntagsbraten schmeckt. Frische Kräuter würzen, Wurzelgemüse liefert Ballaststoffe und Kalium und gilt als gut verträglich.",
    tipps: [
      "Histaminintoleranz: Hähnchen frisch kaufen und am selben Tag zubereiten.",
      "Wer Fett sparen möchte, entfernt die Haut vor dem Essen."
    ]
  },

  {
    id: "haehnchen-salatwraps",
    titel: "Hähnchen-Fajitas im Salatblatt",
    kurz: "Würziges Paprika-Hähnchen, statt in Tortillas in knackige Salatblätter gewickelt.",
    mahlzeit: "hauptgericht", ernaehrung: "fleisch",
    portionen: 2, zeit: 20, gesamt: 20,
    passt: ["gluten", "laktose", "diabetes", "fettleber", "gewicht"],
    zutaten: [
      { m: 300, e: "g", n: "Hähnchenbrustfilet" },
      { m: 2, e: "", n: "Paprika", h: "rot und gelb" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 1, e: "TL", n: "Paprikapulver", h: "geräuchert", v: 1 },
      { m: 1, e: "TL", n: "Kreuzkümmel", v: 1 },
      { m: 1, e: "", n: "Romanasalat" },
      { m: 1, e: "", n: "Avocado" },
      { m: 1, e: "", n: "Limette" },
      { m: 0.5, e: "Bund", n: "Koriander" }
    ],
    schritte: [
      "Hähnchen, Paprika und Zwiebel in Streifen schneiden.",
      "Hähnchen im heißen Öl 4 Minuten braten, Gemüse und Gewürze dazugeben und weitere 5 Minuten braten. Mit Salz und Limettensaft abschmecken.",
      "Avocado zerdrücken und mit Limettensaft und Salz würzen.",
      "Salatblätter mit Hähnchen-Gemüse füllen, Avocado und Koriander darauf geben."
    ],
    warum: "Salatblätter statt Weizentortillas sparen viele schnelle Kohlenhydrate und machen das Gericht glutenfrei. Eiweiß und gesunde Fette aus der Avocado sättigen trotzdem.",
    tipps: [
      "Für Gäste zusätzlich Maistortillas anbieten.",
      "Vegetarisch: schwarze Bohnen statt Hähnchen."
    ]
  },

  {
    id: "putenschnitzel-gurkensalat",
    titel: "Putenschnitzel in Mandelkruste mit Gurkensalat",
    kurz: "Knusprig ohne Paniermehl: Mandeln und Kräuter statt Semmelbrösel.",
    mahlzeit: "hauptgericht", ernaehrung: "fleisch",
    portionen: 2, zeit: 20, gesamt: 25,
    passt: ["gluten", "laktose", "diabetes", "fettleber", "gewicht"],
    zutaten: [
      { m: 2, e: "", n: "Putenschnitzel", h: "à ca. 130 g" },
      { m: 1, e: "", n: "Ei" },
      { m: 50, e: "g", n: "gemahlene Mandeln" },
      { m: 1, e: "EL", n: "Petersilie", h: "fein gehackt" },
      { m: 2, e: "EL", n: "Rapsöl", v: 1 },
      { m: 1, e: "", n: "Salatgurke" },
      { m: 3, e: "EL", n: "Sojajoghurt", h: "natur" },
      { m: 1, e: "TL", n: "Apfelessig", v: 1 },
      { m: 2, e: "EL", n: "Dill" },
      { m: 0.5, e: "", n: "Zitrone" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Gurke hobeln, mit Joghurt, Essig, Dill, Salz und Pfeffer mischen.",
      "Schnitzel flach klopfen, salzen und pfeffern. Ei verquirlen, Mandeln mit Petersilie mischen.",
      "Schnitzel durch das Ei ziehen und in der Mandelmischung wenden, leicht andrücken.",
      "Im Öl bei mittlerer Hitze von jeder Seite 3 bis 4 Minuten goldbraun braten. Mit Zitronenspalten und Gurkensalat servieren."
    ],
    warum: "Die Mandelkruste liefert gesunde Fette und Eiweiß statt Weißmehl. Das Gericht ist glutenfrei, kohlenhydratarm und dennoch ein vollwertiges Schnitzelessen.",
    tipps: [
      "Mandeln bräunen schnell, deshalb nicht zu heiß braten.",
      "Dazu passen Ofenkartoffeln oder Kartoffelsalat mit Leinöl."
    ]
  }
);
