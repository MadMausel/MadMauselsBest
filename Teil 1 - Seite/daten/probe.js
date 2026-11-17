/* Proberezepte (12). Eigene Texte, angelehnt an die Ernährungsregeln in kochbuch.js.
   Zutat: m = Menge (Zahl, wird beim Umrechnen angepasst), e = Einheit, n = Name, h = Hinweis,
          v = 1 für Vorrat (Gewürze, Öle), erscheint in der Einkaufsliste unter „Vorrat prüfen“.
   { g: "…" } = Zwischenüberschrift in der Zutatenliste. */

REZEPTE.push(
  {
    id: "goldener-porridge",
    titel: "Goldener Porridge mit Heidelbeeren",
    kurz: "Warmer Haferbrei mit Kurkuma, Ingwer, Walnüssen und Leinöl, ganz ohne Zucker.",
    mahlzeit: "fruehstueck", ernaehrung: "vegan",
    portionen: 2, zeit: 10, gesamt: 10,
    passt: ["entzuendung", "rheuma", "arthrose", "laktose", "diabetes", "cholesterin", "divertikel"],
    zutaten: [
      { m: 80, e: "g", n: "zarte Haferflocken", h: "bei Zöliakie glutenfreie" },
      { m: 300, e: "ml", n: "Haferdrink", h: "ungesüßt" },
      { m: 100, e: "ml", n: "Wasser" },
      { m: 1, e: "TL", n: "Kurkuma", h: "gemahlen", v: 1 },
      { m: 1, e: "Prise", n: "schwarzer Pfeffer", v: 1 },
      { m: 0.5, e: "TL", n: "Zimt", v: 1 },
      { m: 2, e: "cm", n: "Ingwer", h: "frisch" },
      { m: 150, e: "g", n: "Heidelbeeren", h: "frisch oder tiefgekühlt" },
      { m: 2, e: "EL", n: "Walnusskerne" },
      { m: 1, e: "EL", n: "Leinsamen", h: "geschrotet" },
      { m: 2, e: "TL", n: "Leinöl", v: 1 }
    ],
    schritte: [
      "Haferflocken mit Haferdrink und Wasser in einem Topf aufkochen. Bei kleiner Hitze unter Rühren 3 bis 5 Minuten quellen lassen.",
      "Ingwer schälen und fein reiben. Mit Kurkuma, Pfeffer und Zimt unter den Brei rühren.",
      "Walnüsse grob hacken. Porridge in zwei Schalen füllen, Heidelbeeren, Walnüsse und Leinsamen darauf verteilen.",
      "Zum Schluss das Leinöl darüberträufeln. Leinöl nicht mitkochen, Hitze zerstört die empfindlichen Fettsäuren."
    ],
    warum: "Hafer liefert Beta-Glucan, einen löslichen Ballaststoff, der den Blutzucker langsamer steigen lässt und Cholesterin bindet. Walnüsse, Leinsamen und Leinöl bringen pflanzliche Omega-3-Fettsäuren, Heidelbeeren viele Pflanzenfarbstoffe. Der Pfeffer verbessert die Aufnahme von Curcumin aus der Kurkuma. Süße kommt nur aus Beeren und Zimt.",
    tipps: [
      "Glutenfrei: Haferflocken mit Glutenfrei-Siegel nehmen. Bei Zöliakie vorher ärztlich klären, ob Hafer vertragen wird.",
      "Diabetes: Die Portion mit 40 g Haferflocken passt gut; ein Löffel Nussmus macht zusätzlich satt.",
      "Leinöl nach dem Öffnen im Kühlschrank lagern und innerhalb von 4 Wochen aufbrauchen."
    ]
  },

  {
    id: "chia-pudding-beeren",
    titel: "Chia-Pudding mit Beeren und gerösteten Mandeln",
    kurz: "Über Nacht vorbereitet, morgens fertig: Chiasamen in Mandeldrink mit Beeren.",
    mahlzeit: "fruehstueck", ernaehrung: "vegan",
    portionen: 2, zeit: 5, gesamt: 125,
    passt: ["entzuendung", "gluten", "laktose", "fruktose", "diabetes", "cholesterin", "gewicht", "reizdarm"],
    zutaten: [
      { m: 4, e: "EL", n: "Chiasamen", h: "ca. 40 g" },
      { m: 300, e: "ml", n: "Mandeldrink", h: "ungesüßt" },
      { m: 0.5, e: "TL", n: "Zimt", v: 1 },
      { m: 1, e: "Msp.", n: "Vanille", h: "gemahlen", v: 1 },
      { m: 150, e: "g", n: "Himbeeren und Heidelbeeren", h: "gemischt" },
      { m: 2, e: "EL", n: "Mandelblättchen" }
    ],
    schritte: [
      "Chiasamen, Mandeldrink, Zimt und Vanille in einer Schüssel verrühren. 10 Minuten stehen lassen und noch einmal kräftig umrühren, damit keine Klümpchen bleiben.",
      "Abgedeckt mindestens 2 Stunden oder über Nacht in den Kühlschrank stellen.",
      "Mandelblättchen in einer Pfanne ohne Fett goldbraun rösten und abkühlen lassen.",
      "Pudding in zwei Gläser füllen, Beeren und Mandeln darauf verteilen."
    ],
    warum: "Chiasamen bringen pflanzliche Omega-3-Fettsäuren und quellende Ballaststoffe. Das sättigt lange, ohne den Blutzucker hochzutreiben. Beeren enthalten wenig Zucker, aber viele entzündungshemmende Pflanzenstoffe. Mandeldrink und kleine Beerenportionen gelten als FODMAP-arm.",
    tipps: [
      "Reizdarm und Fruktose: pro Portion höchstens 2 EL Chiasamen und eine kleine Handvoll Beeren.",
      "Viel dazu trinken, Chiasamen binden Wasser.",
      "Hält im Kühlschrank 3 Tage, also gut für mehrere Morgen vorzubereiten."
    ]
  },

  {
    id: "ofenlachs-brokkoli",
    titel: "Ofenlachs mit Brokkoli, Kartoffeln und Zitronen-Leinöl",
    kurz: "Alles auf einem Blech: Lachs, Röstkartoffeln und Brokkoli mit frischem Dill-Öl.",
    mahlzeit: "hauptgericht", ernaehrung: "pescetarisch",
    portionen: 2, zeit: 15, gesamt: 40,
    passt: ["entzuendung", "rheuma", "arthrose", "gluten", "laktose", "bluthochdruck", "cholesterin", "diabetes", "fettleber"],
    zutaten: [
      { m: 2, e: "", n: "Lachsfilets", h: "à ca. 125 g" },
      { m: 400, e: "g", n: "kleine festkochende Kartoffeln" },
      { m: 1, e: "", n: "Brokkoli", h: "ca. 400 g" },
      { m: 2, e: "EL", n: "Rapsöl", v: 1 },
      { m: 0.5, e: "", n: "Bio-Zitrone" },
      { m: 2, e: "EL", n: "Leinöl", v: 1 },
      { m: 2, e: "Stiele", n: "Dill" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Backofen auf 200 °C Ober- und Unterhitze vorheizen. Kartoffeln waschen, halbieren, mit 1 EL Rapsöl und etwas Salz auf einem Blech verteilen und 15 Minuten backen.",
      "Brokkoli in Röschen teilen, den Stiel schälen und in Scheiben schneiden. Mit dem restlichen Rapsöl mischen.",
      "Brokkoli und Lachs zu den Kartoffeln aufs Blech legen und alles weitere 12 bis 15 Minuten garen, bis der Lachs innen gerade nicht mehr glasig ist.",
      "Zitronenschale fein abreiben, Saft auspressen. Mit Leinöl, gehacktem Dill, wenig Salz und Pfeffer verrühren und über Lachs und Gemüse träufeln."
    ],
    warum: "Lachs liefert die langkettigen Omega-3-Fettsäuren EPA und DHA. Der Körper baut daraus Botenstoffe, die Entzündungen bremsen. Brokkoli enthält Sulforaphan, Kartoffeln mit Schale viel Kalium für den Blutdruck. Raps- und Leinöl ersetzen Butter. Zwei Fischmahlzeiten pro Woche sind ein gutes Ziel.",
    tipps: [
      "Statt Lachs passen Makrele oder Saibling, beide ebenfalls reich an Omega-3.",
      "Abends kohlenhydratarm (Fettleber, Diabetes): Kartoffeln weglassen und die doppelte Menge Brokkoli nehmen.",
      "Beim Kauf auf Bio-Aquakultur oder MSC-Siegel achten."
    ]
  },

  {
    id: "rote-linsen-dal",
    titel: "Rotes Linsen-Dal mit Spinat",
    kurz: "Cremiges Linsencurry mit Kurkuma, Ingwer und frischem Spinat.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 4, zeit: 15, gesamt: 35,
    passt: ["entzuendung", "rheuma", "arthrose", "gicht", "gluten", "laktose", "diabetes", "cholesterin", "bluthochdruck", "gewicht", "divertikel"],
    zutaten: [
      { m: 250, e: "g", n: "rote Linsen" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 2, e: "", n: "Knoblauchzehen" },
      { m: 3, e: "cm", n: "Ingwer" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 1, e: "TL", n: "Kurkuma", v: 1 },
      { m: 1, e: "TL", n: "Kreuzkümmel", h: "gemahlen", v: 1 },
      { m: 1, e: "TL", n: "Garam Masala", v: 1 },
      { m: 400, e: "g", n: "gehackte Tomaten", h: "1 Dose" },
      { m: 200, e: "ml", n: "Kokosmilch" },
      { m: 600, e: "ml", n: "Gemüsebrühe", h: "salzarm" },
      { m: 150, e: "g", n: "Babyspinat" },
      { m: 0.5, e: "", n: "Zitrone" },
      { m: 0.5, e: "Bund", n: "Koriander oder Petersilie" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Zwiebel, Knoblauch und Ingwer schälen und fein würfeln.",
      "Öl in einem Topf erhitzen. Zwiebel 3 Minuten glasig dünsten, Knoblauch, Ingwer und die Gewürze dazugeben und 1 Minute mitrösten.",
      "Linsen in einem Sieb abspülen. Mit Tomaten, Brühe und Kokosmilch in den Topf geben, aufkochen und 15 bis 20 Minuten köcheln lassen, bis die Linsen zerfallen. Ab und zu umrühren.",
      "Spinat unterheben und zusammenfallen lassen. Mit Zitronensaft, Pfeffer und wenig Salz abschmecken, mit gehackten Kräutern bestreuen."
    ],
    warum: "Linsen liefern pflanzliches Eiweiß und viele Ballaststoffe: Sie sättigen lange und lassen den Blutzucker langsam steigen. Als Fleischersatz senken sie die Zufuhr von Arachidonsäure, was bei Rheuma hilft. Pflanzliche Purine gelten bei Gicht als deutlich weniger problematisch als tierische. Kurkuma, Ingwer und Kreuzkümmel runden das entzündungshemmende Profil ab.",
    tipps: [
      "Dazu passt Naturreis oder für eine kohlenhydratarme Variante Blumenkohlreis.",
      "Reizdarm: nicht geeignet, denn Zwiebel, Knoblauch und Linsen sind reich an FODMAP.",
      "Histaminintoleranz: Tomaten und Spinat werden oft schlecht vertragen, durch Möhren und Zucchini ersetzen."
    ]
  },

  {
    id: "quinoa-bowl-ofengemuese",
    titel: "Quinoa-Bowl mit Ofengemüse und Walnuss-Dressing",
    kurz: "Bunte Schale mit Röstgemüse, Kichererbsen, Rucola und nussigem Dressing.",
    mahlzeit: "salat", ernaehrung: "vegan",
    portionen: 2, zeit: 20, gesamt: 40,
    passt: ["entzuendung", "rheuma", "arthrose", "gluten", "laktose", "diabetes", "cholesterin", "fettleber", "bluthochdruck", "gewicht"],
    zutaten: [
      { g: "Bowl" },
      { m: 100, e: "g", n: "Quinoa" },
      { m: 1, e: "", n: "Süßkartoffel", h: "ca. 300 g" },
      { m: 1, e: "", n: "rote Paprika" },
      { m: 1, e: "", n: "Zucchini" },
      { m: 1, e: "", n: "rote Zwiebel" },
      { m: 200, e: "g", n: "Kichererbsen", h: "gegart, abgetropft" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 0.5, e: "TL", n: "geräuchertes Paprikapulver", v: 1 },
      { m: 40, e: "g", n: "Rucola" },
      { g: "Dressing" },
      { m: 30, e: "g", n: "Walnusskerne" },
      { m: 2, e: "EL", n: "Walnuss- oder Leinöl", v: 1 },
      { m: 1, e: "EL", n: "Apfelessig", v: 1 },
      { m: 1, e: "TL", n: "Senf", v: 1 },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Backofen auf 220 °C vorheizen. Süßkartoffel, Paprika und Zucchini in mundgerechte Stücke, die Zwiebel in Spalten schneiden.",
      "Gemüse und abgespülte Kichererbsen mit Öl, Paprikapulver und etwas Salz mischen, auf einem Blech verteilen und 25 Minuten rösten. Nach der Hälfte einmal wenden.",
      "Quinoa in einem Sieb heiß abspülen, mit 200 ml Wasser aufkochen, 15 Minuten leise köcheln und 5 Minuten quellen lassen.",
      "Walnüsse hacken. Die Hälfte mit Öl, Essig, Senf, 2 EL Wasser, Salz und Pfeffer verrühren.",
      "Quinoa, Ofengemüse und Rucola in Schalen anrichten, Dressing darübergeben und mit den restlichen Walnüssen bestreuen."
    ],
    warum: "Je bunter der Teller, desto mehr verschiedene Pflanzenstoffe. Quinoa ist von Natur aus glutenfrei und eiweißreich, Kichererbsen ergänzen Eiweiß und Ballaststoffe. Walnussöl und Walnüsse liefern Omega-3. Rucola bringt Nitrat, das die Gefäße entspannt.",
    tipps: [
      "Für die Woche vorbereiten: Quinoa und Ofengemüse halten im Kühlschrank 3 Tage.",
      "Kichererbsen aus der Dose gut abspülen, dann enthalten sie weniger Salz und sind bekömmlicher."
    ]
  },

  {
    id: "rote-bete-carpaccio",
    titel: "Rote-Bete-Carpaccio mit Walnüssen und Rucola",
    kurz: "Hauchdünne Rote Bete mit Meerrettich-Vinaigrette, geröstete Walnüsse obendrauf.",
    mahlzeit: "salat", ernaehrung: "vegan",
    portionen: 2, zeit: 15, gesamt: 20,
    passt: ["bluthochdruck", "entzuendung", "cholesterin", "fettleber", "gewicht", "gluten", "laktose"],
    zutaten: [
      { m: 400, e: "g", n: "Rote Bete", h: "vorgegart, ohne Essig" },
      { m: 40, e: "g", n: "Rucola" },
      { m: 30, e: "g", n: "Walnusskerne" },
      { m: 1, e: "TL", n: "Meerrettich", h: "frisch gerieben oder aus dem Glas" },
      { m: 2, e: "EL", n: "Walnuss- oder Leinöl", v: 1 },
      { m: 1, e: "EL", n: "Apfelessig", v: 1 },
      { m: 1, e: "TL", n: "Senf", v: 1 },
      { m: 1, e: "EL", n: "Kresse" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Rote Bete in sehr dünne Scheiben schneiden oder hobeln und fächerartig auf zwei Teller legen. Einweghandschuhe verhindern rote Finger.",
      "Essig, Öl, Senf, Meerrettich, Salz und Pfeffer verquirlen und über die Scheiben träufeln. 5 Minuten ziehen lassen.",
      "Walnüsse grob hacken und in einer Pfanne ohne Fett kurz rösten.",
      "Rucola, Walnüsse und Kresse auf dem Carpaccio verteilen."
    ],
    warum: "Rote Bete enthält viel Nitrat. Der Körper wandelt es in Stickstoffmonoxid um, das die Blutgefäße weitet. Bei regelmäßigem Verzehr kann das den Blutdruck leicht senken. Dazu kommen Kalium und der rote Farbstoff Betanin. Walnüsse liefern herzfreundliche Fette.",
    tipps: [
      "Rohe Rote Bete selbst garen: ungeschält 40 bis 50 Minuten in Wasser kochen, abkühlen lassen und schälen.",
      "Vegetarisch: ein paar Kleckse Ziegenfrischkäse dazugeben.",
      "Rote Bete kann Urin und Stuhl rot färben. Das ist harmlos."
    ]
  },

  {
    id: "ingwer-haehnchen-reis",
    titel: "Ingwer-Hähnchen mit Reis, Möhren und Zucchini",
    kurz: "Schnelle Pfanne ohne Zwiebel und Knoblauch, mild und gut verträglich.",
    mahlzeit: "hauptgericht", ernaehrung: "fleisch",
    portionen: 2, zeit: 20, gesamt: 30,
    passt: ["reizdarm", "histamin", "fruktose", "gluten", "laktose", "ced"],
    zutaten: [
      { m: 150, e: "g", n: "Basmatireis" },
      { m: 250, e: "g", n: "Hähnchenbrustfilet", h: "frisch" },
      { m: 2, e: "", n: "Möhren" },
      { m: 1, e: "", n: "kleine Zucchini", h: "ca. 150 g" },
      { m: 3, e: "", n: "Frühlingszwiebeln", h: "nur das Grüne" },
      { m: 3, e: "cm", n: "Ingwer" },
      { m: 2, e: "EL", n: "Knoblauchöl oder Rapsöl", v: 1 },
      { m: 2, e: "EL", n: "Petersilie", h: "gehackt" },
      { n: "Salz", v: 1 }
    ],
    schritte: [
      "Reis in 300 ml leicht gesalzenem Wasser nach Packungsangabe garen.",
      "Hähnchen in Streifen schneiden. Möhren in dünne Stifte, Zucchini in Halbscheiben und das Grün der Frühlingszwiebeln in Ringe schneiden. Ingwer schälen und fein reiben.",
      "1 EL Öl in einer großen Pfanne stark erhitzen. Hähnchen darin 4 bis 5 Minuten rundum braten, bis es durchgegart ist, und herausnehmen.",
      "Restliches Öl in die Pfanne geben. Möhren 3 Minuten braten, Zucchini und Ingwer 2 Minuten mitbraten.",
      "Hähnchen und Reis unterheben, mit Salz abschmecken und mit Frühlingszwiebelgrün und Petersilie bestreuen."
    ],
    warum: "Bei Reizdarm lösen schwer verdauliche Zucker (FODMAP) aus Zwiebel, Knoblauch und manchen Gemüsen Beschwerden aus. Dieses Gericht kommt ohne sie aus: Das Aroma kommt aus Knoblauchöl, denn FODMAP gehen nicht ins Öl über, dazu Ingwer und Frühlingszwiebelgrün. Frisches Fleisch und der Verzicht auf Tomaten, Sojasoße und Essig halten das Gericht histaminarm. Reis ist sehr gut verträglich.",
    tipps: [
      "Knoblauchöl selbst machen: 2 Zehen halbieren, 5 Minuten bei kleiner Hitze im Öl ziehen lassen, dann entfernen. Sofort verwenden, nicht aufbewahren.",
      "Histaminintoleranz: Fleisch am Einkaufstag zubereiten und Reste schnell abkühlen.",
      "Reizdarm: pro Portion nicht mehr als die halbe kleine Zucchini, größere Mengen enthalten mehr FODMAP.",
      "Vegetarisch: fester Naturtofu statt Hähnchen. Er ist FODMAP-arm, bei Histaminintoleranz aber oft unverträglich."
    ]
  },

  {
    id: "kartoffel-moehren-suppe",
    titel: "Kartoffel-Möhren-Suppe mit Ingwer",
    kurz: "Samtige Suppe ohne Fertigbrühe, sanft zum Bauch und schnell gekocht.",
    mahlzeit: "suppe", ernaehrung: "vegan",
    portionen: 4, zeit: 15, gesamt: 35,
    passt: ["histamin", "fruktose", "reizdarm", "ced", "divertikel", "gluten", "laktose", "bluthochdruck", "gicht", "entzuendung"],
    zutaten: [
      { m: 500, e: "g", n: "Möhren" },
      { m: 300, e: "g", n: "mehligkochende Kartoffeln" },
      { m: 1, e: "", n: "Lauchstange", h: "nur das Grüne" },
      { m: 4, e: "cm", n: "Ingwer" },
      { m: 2, e: "EL", n: "Rapsöl", v: 1 },
      { m: 0.5, e: "TL", n: "Kurkuma", v: 1 },
      { m: 1, e: "l", n: "Wasser" },
      { m: 1, e: "TL", n: "Salz", v: 1 },
      { m: 0.5, e: "Bund", n: "Petersilie" }
    ],
    schritte: [
      "Möhren und Kartoffeln schälen und würfeln. Lauchgrün in Ringe schneiden und gründlich waschen. Ingwer schälen und fein hacken.",
      "Öl in einem Topf erhitzen, Lauchgrün und Ingwer 2 Minuten andünsten. Möhren, Kartoffeln und Kurkuma dazugeben und 2 Minuten mitdünsten.",
      "Mit Wasser auffüllen, Salz zugeben und zugedeckt etwa 20 Minuten köcheln lassen, bis das Gemüse weich ist.",
      "Fein pürieren, bei Bedarf etwas Wasser ergänzen. Abschmecken und mit gehackter Petersilie servieren."
    ],
    warum: "Gegartes, püriertes Gemüse ist schonend für einen empfindlichen Darm. Möhren und Kartoffeln enthalten wenig Fruchtzucker und kaum FODMAP, dafür viel Kalium. Weil keine Fertigbrühe verwendet wird, stecken weder versteckte Zwiebel noch Hefeextrakt (Histamin) drin, und die Salzmenge bleibt im Blick. Ingwer wärmt und kann bei Übelkeit helfen.",
    tipps: [
      "Morbus Crohn und Colitis: Fein pürierte Suppen werden im Schub oft gut vertragen. Ernährung im Schub aber immer ärztlich abstimmen.",
      "Für mehr Eiweiß ein pochiertes Ei oder gebratene Hähnchenstreifen dazugeben.",
      "Die Suppe lässt sich gut einfrieren und hält so etwa 3 Monate."
    ]
  },

  {
    id: "gemuese-frittata",
    titel: "Gemüse-Frittata mit Brokkoli und Paprika",
    kurz: "Eiweißreiches Abendessen aus der Pfanne, warm oder kalt gut.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 15, gesamt: 30,
    passt: ["diabetes", "fettleber", "gewicht", "gluten", "laktose"],
    zutaten: [
      { m: 5, e: "", n: "Eier", h: "Größe M" },
      { m: 300, e: "g", n: "Brokkoli" },
      { m: 1, e: "", n: "rote Paprika" },
      { m: 4, e: "", n: "Frühlingszwiebeln" },
      { m: 1, e: "EL", n: "Olivenöl", v: 1 },
      { m: 2, e: "EL", n: "Petersilie", h: "gehackt" },
      { m: 0.5, e: "TL", n: "Kurkuma", v: 1 },
      { m: 30, e: "g", n: "Parmesan", h: "nach Wunsch" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Backofen auf 180 °C vorheizen. Brokkoli in kleine Röschen teilen, 3 Minuten in Salzwasser vorgaren und kalt abschrecken.",
      "Paprika würfeln, Frühlingszwiebeln in Ringe schneiden. Öl in einer ofenfesten Pfanne (ca. 24 cm) erhitzen, Paprika und Frühlingszwiebeln 3 Minuten braten, Brokkoli dazugeben.",
      "Eier mit Kurkuma, Petersilie, Salz und Pfeffer verquirlen und über das Gemüse gießen. Bei mittlerer Hitze 3 Minuten stocken lassen.",
      "Nach Wunsch Parmesan darüberreiben und die Frittata im Ofen 10 bis 12 Minuten fertig garen, bis sie fest ist. In Stücke schneiden."
    ],
    warum: "Viel Eiweiß, wenig Kohlenhydrate: So bleiben Blutzucker und Insulin am Abend niedrig, und die Leber kann über Nacht an ihre Fettreserven gehen. Das ist der Grundgedanke bei Fettleber und Diabetes Typ 2. Eiweiß sättigt außerdem lange.",
    tipps: [
      "Parmesan ist von Natur aus fast laktosefrei. Bei Histaminintoleranz aber weglassen, gereifter Käse enthält viel Histamin.",
      "Rheuma: Eigelb enthält Arachidonsäure. Eier daher nicht täglich, oder einen Teil durch Eiweiß ersetzen.",
      "Schmeckt am nächsten Tag kalt als Mittagessen zum Mitnehmen."
    ]
  },

  {
    id: "kraeuter-hummus",
    titel: "Kräuter-Hummus mit Gemüsesticks",
    kurz: "Grüner Kichererbsen-Dip statt Chips: knackig, sättigend, in 15 Minuten fertig.",
    mahlzeit: "snack", ernaehrung: "vegan",
    portionen: 4, zeit: 15, gesamt: 15,
    passt: ["cholesterin", "diabetes", "bluthochdruck", "gewicht", "gluten", "laktose", "entzuendung"],
    zutaten: [
      { g: "Hummus" },
      { m: 240, e: "g", n: "Kichererbsen", h: "abgetropft, 1 Dose" },
      { m: 2, e: "EL", n: "Tahin", h: "Sesammus" },
      { m: 1, e: "", n: "kleine Knoblauchzehe" },
      { m: 0.5, e: "", n: "Zitrone", h: "Saft" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 0.5, e: "TL", n: "Kreuzkümmel", h: "gemahlen", v: 1 },
      { m: 1, e: "Handvoll", n: "Petersilie und Dill" },
      { n: "Salz", v: 1 },
      { g: "Zum Dippen" },
      { m: 2, e: "", n: "Möhren" },
      { m: 0.5, e: "", n: "Salatgurke" },
      { m: 1, e: "", n: "gelbe Paprika" },
      { m: 1, e: "", n: "Kohlrabi" }
    ],
    schritte: [
      "Kichererbsen abgießen und abspülen. Mit Tahin, Knoblauch, Zitronensaft, Öl, Kreuzkümmel, etwas Salz und 3 bis 4 EL kaltem Wasser fein pürieren, bis eine cremige Masse entsteht.",
      "Kräuter grob hacken und mitpürieren, dann wird der Hummus grün. Wer es stückiger mag, rührt sie nur unter.",
      "Gemüse schälen bzw. waschen und in Sticks schneiden. Zusammen mit dem Hummus servieren."
    ],
    warum: "Kichererbsen liefern Ballaststoffe und pflanzliches Eiweiß, Sesam und Olivenöl ungesättigte Fette. Als Snack statt Chips oder Keksen bleibt der Blutzucker ruhig, und das Gemüse bringt Kalium und Vitamine.",
    tipps: [
      "Hält gut verschlossen im Kühlschrank 4 Tage.",
      "Reizdarm: Knoblauch weglassen und Knoblauchöl nehmen. Kichererbsen aus der Dose sind in kleinen Portionen (etwa 2 EL Hummus) meist verträglich."
    ]
  },

  {
    id: "saatenbrot-ohne-mehl",
    titel: "Saatenbrot ohne Mehl",
    kurz: "Kerniges Brot aus Saaten, Nüssen und Haferflocken, glutenfrei und ohne Hefe.",
    mahlzeit: "brot", ernaehrung: "vegan",
    portionen: 16, einheit: "Scheiben", zeit: 10, gesamt: 180,
    passt: ["gluten", "laktose", "diabetes", "cholesterin", "divertikel", "gewicht", "entzuendung"],
    zutaten: [
      { m: 135, e: "g", n: "Sonnenblumenkerne" },
      { m: 90, e: "g", n: "Leinsamen", h: "ganz" },
      { m: 65, e: "g", n: "Haselnüsse oder Mandeln", h: "grob gehackt" },
      { m: 145, e: "g", n: "glutenfreie Haferflocken" },
      { m: 2, e: "EL", n: "Chiasamen" },
      { m: 4, e: "EL", n: "Flohsamenschalen" },
      { m: 1, e: "TL", n: "Salz", v: 1 },
      { m: 3, e: "EL", n: "Rapsöl", v: 1 },
      { m: 350, e: "ml", n: "Wasser" }
    ],
    schritte: [
      "Alle trockenen Zutaten direkt in einer Silikon-Kastenform oder einer mit Backpapier ausgelegten Kastenform (ca. 25 cm) mischen.",
      "Öl und Wasser verrühren, dazugießen und alles gründlich vermengen, bis alles feucht ist. Der Teig ist sehr fest. Ist er zu trocken, 1 bis 2 EL Wasser ergänzen.",
      "Oberfläche glatt drücken und den Teig mindestens 2 Stunden oder über Nacht quellen lassen.",
      "Backofen auf 175 °C Ober- und Unterhitze vorheizen und das Brot 20 Minuten in der Form backen. Dann aus der Form lösen, kopfüber auf den Rost legen und weitere 35 bis 40 Minuten backen, bis es beim Klopfen hohl klingt.",
      "Vollständig auskühlen lassen, erst dann anschneiden."
    ],
    warum: "Statt Mehl halten Saaten, Nüsse und Hafer das Brot zusammen. Das bringt viele Ballaststoffe, Eiweiß und gute Fette, und der Blutzucker steigt deutlich weniger als bei Weißbrot. Flohsamenschalen übernehmen die Bindung, die sonst das Gluten liefert, und senken nachweislich das Cholesterin.",
    tipps: [
      "Zöliakie: nur Haferflocken mit Glutenfrei-Siegel verwenden, sonst durch Buchweizenflocken ersetzen.",
      "Hält im Kühlschrank 5 Tage. In Scheiben eingefroren lässt es sich einzeln auftoasten.",
      "Viel dazu trinken, Lein- und Flohsamen brauchen Flüssigkeit zum Quellen."
    ]
  },

  {
    id: "ofenapfel-zimt-walnuss",
    titel: "Ofenapfel mit Zimt, Walnüssen und Joghurt",
    kurz: "Warmes Dessert ohne Zuckerzusatz, gefüllt mit Nüssen und Gewürzen.",
    mahlzeit: "dessert", ernaehrung: "vegan",
    portionen: 2, zeit: 10, gesamt: 35,
    passt: ["entzuendung", "gluten", "laktose", "cholesterin", "rheuma"],
    zutaten: [
      { m: 2, e: "", n: "säuerliche Äpfel", h: "z. B. Boskop" },
      { m: 30, e: "g", n: "Walnusskerne" },
      { m: 1, e: "EL", n: "glutenfreie Haferflocken" },
      { m: 1, e: "EL", n: "Mandelmus" },
      { m: 1, e: "TL", n: "Zimt", v: 1 },
      { m: 1, e: "Prise", n: "Kardamom", v: 1 },
      { m: 1, e: "EL", n: "Rosinen", h: "nach Wunsch" },
      { m: 150, e: "g", n: "Soja- oder Kokosjoghurt", h: "natur, ungesüßt" }
    ],
    schritte: [
      "Backofen auf 180 °C vorheizen. Äpfel waschen, halbieren und das Kerngehäuse mit einem Kugelausstecher oder Teelöffel herauslösen.",
      "Walnüsse hacken und mit Haferflocken, Mandelmus, Zimt, Kardamom und nach Wunsch Rosinen vermischen.",
      "Apfelhälften mit der Schnittfläche nach oben in eine Auflaufform setzen, die Füllung in die Mulden geben und 3 EL Wasser in die Form gießen.",
      "20 bis 25 Minuten backen, bis die Äpfel weich sind. Mit Joghurt servieren."
    ],
    warum: "Süßes geht auch ohne Zuckerzusatz: Äpfel bringen eigene Süße und Pektin, einen löslichen Ballaststoff, der Cholesterin bindet. Zimt und Kardamom verstärken das süße Aroma, Walnüsse liefern Omega-3. Zucker gilt als einer der Treiber stiller Entzündungen, deshalb lohnt sich der Verzicht.",
    tipps: [
      "Diabetes: Rosinen weglassen und eine Apfelhälfte als Portion rechnen.",
      "Reizdarm und Fruktose: nicht geeignet, Äpfel enthalten viel Fruchtzucker und Sorbit."
    ]
  }
);
