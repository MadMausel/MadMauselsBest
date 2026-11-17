/* Brot & Backen (9). */
REZEPTE.push(
  {
    id: "dinkel-vollkornbrot",
    titel: "Dinkel-Vollkornbrot mit Saaten",
    kurz: "Saftiges Kastenbrot ohne Kneten, über Nacht gegangen.",
    mahlzeit: "brot", ernaehrung: "vegan",
    portionen: 20, einheit: "Scheiben", zeit: 15, gesamt: 780,
    passt: ["cholesterin", "diabetes", "divertikel", "laktose"],
    zutaten: [
      { m: 500, e: "g", n: "Dinkelvollkornmehl" },
      { m: 50, e: "g", n: "Sonnenblumenkerne" },
      { m: 50, e: "g", n: "Leinsamen" },
      { m: 30, e: "g", n: "Kürbiskerne" },
      { m: 5, e: "g", n: "Trockenhefe", h: "oder 10 g frische Hefe" },
      { m: 2, e: "TL", n: "Salz", v: 1 },
      { m: 1, e: "EL", n: "Apfelessig", v: 1 },
      { m: 500, e: "ml", n: "lauwarmes Wasser" }
    ],
    schritte: [
      "Mehl, Saaten, Hefe und Salz in einer großen Schüssel mischen. Essig und Wasser dazugeben und mit einem Löffel zu einem klebrigen Teig verrühren.",
      "Abgedeckt 10 bis 12 Stunden im Kühlschrank oder 2 Stunden an einem warmen Ort gehen lassen.",
      "Backofen auf 220 °C vorheizen. Teig in eine gefettete Kastenform füllen, glatt streichen und mit Kernen bestreuen.",
      "60 Minuten backen, nach 15 Minuten auf 200 °C herunterschalten. Aus der Form lösen und auf einem Gitter auskühlen lassen."
    ],
    warum: "Vollkornmehl enthält das ganze Korn mit Schale und Keim, also deutlich mehr Ballaststoffe, Vitamine und Mineralstoffe als Weißmehl. Der Blutzucker steigt langsamer, und der Darm bekommt Futter.",
    tipps: [
      "Zöliakie: nicht geeignet, Dinkel enthält Gluten.",
      "In Scheiben eingefroren hält das Brot 3 Monate."
    ]
  },

  {
    id: "buchweizenbrot-glutenfrei",
    titel: "Glutenfreies Buchweizenbrot",
    kurz: "Saftiges Brot aus ganzem Buchweizen, ohne Mehl und ohne Hefe.",
    mahlzeit: "brot", ernaehrung: "vegan",
    portionen: 16, einheit: "Scheiben", zeit: 10, gesamt: 840,
    passt: ["gluten", "laktose", "divertikel", "cholesterin", "reizdarm", "fruktose"],
    zutaten: [
      { m: 500, e: "g", n: "Buchweizen", h: "ganz, ungeröstet" },
      { m: 2, e: "EL", n: "Chiasamen" },
      { m: 2, e: "EL", n: "Flohsamenschalen" },
      { m: 50, e: "g", n: "Sonnenblumenkerne" },
      { m: 1.5, e: "TL", n: "Salz", v: 1 },
      { m: 2, e: "EL", n: "Rapsöl", v: 1 },
      { m: 250, e: "ml", n: "Wasser" }
    ],
    schritte: [
      "Buchweizen gründlich abspülen und mit reichlich Wasser bedeckt 8 Stunden oder über Nacht einweichen. Danach abgießen und kurz abspülen, nicht abtropfen lassen.",
      "Mit 250 ml frischem Wasser, Öl und Salz grob pürieren. Chiasamen, Flohsamenschalen und Kerne unterrühren und 30 Minuten quellen lassen.",
      "Backofen auf 180 °C vorheizen. Teig in eine mit Backpapier ausgelegte Kastenform füllen und glatt streichen.",
      "70 bis 80 Minuten backen. Vollständig auskühlen lassen, bevor das Brot angeschnitten wird."
    ],
    warum: "Buchweizen ist von Natur aus glutenfrei und gilt als FODMAP-arm. Chia und Flohsamenschalen binden den Teig ohne Gluten. Das Brot ist ballaststoffreich und sättigt lange.",
    tipps: [
      "Hält im Kühlschrank 5 Tage, eingefroren in Scheiben 3 Monate.",
      "Mit Gewürzen wie Kümmel, Koriander oder Fenchelsamen variieren."
    ]
  },

  {
    id: "eiweissbrot",
    titel: "Eiweißbrot mit Quark und Leinsamen",
    kurz: "Kohlenhydratarmes Brot aus Mandeln, Leinsamen, Quark und Ei.",
    mahlzeit: "brot", ernaehrung: "vegetarisch",
    portionen: 14, einheit: "Scheiben", zeit: 10, gesamt: 70,
    passt: ["diabetes", "fettleber", "gewicht", "gluten"],
    zutaten: [
      { m: 250, e: "g", n: "Magerquark" },
      { m: 4, e: "", n: "Eier" },
      { m: 100, e: "g", n: "gemahlene Mandeln" },
      { m: 80, e: "g", n: "geschrotete Leinsamen" },
      { m: 3, e: "EL", n: "Flohsamenschalen" },
      { m: 30, e: "g", n: "Sonnenblumenkerne" },
      { m: 1, e: "Päckchen", n: "Backpulver", h: "glutenfrei" },
      { m: 1, e: "TL", n: "Salz", v: 1 }
    ],
    schritte: [
      "Backofen auf 180 °C vorheizen. Quark mit Eiern verrühren.",
      "Alle trockenen Zutaten mischen und unter die Quarkmasse rühren. 10 Minuten quellen lassen.",
      "In eine mit Backpapier ausgelegte Kastenform füllen, mit Kernen bestreuen und 50 bis 60 Minuten backen.",
      "Gut auskühlen lassen."
    ],
    warum: "Eine Scheibe enthält nur wenige Gramm Kohlenhydrate, dafür viel Eiweiß und Ballaststoffe. Der Blutzucker bleibt ruhig, und die Sättigung hält lange.",
    tipps: [
      "Backpulver auf Glutenfreiheit prüfen, manche enthalten Weizenstärke.",
      "Im Kühlschrank aufbewahren und innerhalb von 5 Tagen essen."
    ]
  },

  {
    id: "haferbroetchen",
    titel: "Haferflocken-Brötchen",
    kurz: "Schnelle Brötchen mit Hafer und Joghurt, ohne lange Gehzeit.",
    mahlzeit: "brot", ernaehrung: "vegetarisch",
    portionen: 8, einheit: "Brötchen", zeit: 15, gesamt: 45,
    passt: ["cholesterin", "diabetes", "divertikel"],
    zutaten: [
      { m: 200, e: "g", n: "zarte Haferflocken" },
      { m: 200, e: "g", n: "Dinkelvollkornmehl" },
      { m: 1, e: "Päckchen", n: "Backpulver", v: 1 },
      { m: 1, e: "TL", n: "Salz", v: 1 },
      { m: 250, e: "g", n: "Naturjoghurt" },
      { m: 150, e: "ml", n: "Wasser" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 3, e: "EL", n: "Haferflocken", h: "zum Bestreuen" }
    ],
    schritte: [
      "Backofen auf 200 °C vorheizen. Haferflocken, Mehl, Backpulver und Salz mischen.",
      "Joghurt, Wasser und Öl dazugeben und zu einem weichen Teig verkneten.",
      "Mit feuchten Händen 8 Brötchen formen, mit Wasser bestreichen und in Haferflocken drücken.",
      "Auf einem Backblech 25 bis 30 Minuten backen."
    ],
    warum: "Hafer liefert Beta-Glucan, einen löslichen Ballaststoff, der Cholesterin senkt und den Blutzucker glättet. Mit Vollkornmehl sind die Brötchen deutlich sättigender als normale Weizenbrötchen.",
    tipps: [
      "Laktoseintoleranz: laktosefreien Joghurt oder Sojajoghurt nehmen.",
      "Frisch am besten. Einfrieren und kurz aufbacken geht auch."
    ]
  },

  {
    id: "moehren-walnuss-muffins",
    titel: "Möhren-Walnuss-Muffins ohne Zucker",
    kurz: "Saftige Muffins, gesüßt mit Banane und Apfel, mit Zimt und Walnüssen.",
    mahlzeit: "brot", ernaehrung: "vegetarisch",
    portionen: 12, einheit: "Muffins", zeit: 20, gesamt: 45,
    passt: ["laktose", "cholesterin", "entzuendung"],
    zutaten: [
      { m: 200, e: "g", n: "Dinkelvollkornmehl" },
      { m: 50, e: "g", n: "gemahlene Mandeln" },
      { m: 2, e: "TL", n: "Backpulver", v: 1 },
      { m: 2, e: "TL", n: "Zimt", v: 1 },
      { m: 200, e: "g", n: "Möhren", h: "fein geraspelt" },
      { m: 2, e: "", n: "reife Bananen" },
      { m: 2, e: "", n: "Eier" },
      { m: 80, e: "ml", n: "Rapsöl", v: 1 },
      { m: 100, e: "ml", n: "Haferdrink" },
      { m: 60, e: "g", n: "Walnusskerne", h: "gehackt" }
    ],
    schritte: [
      "Backofen auf 180 °C vorheizen, ein Muffinblech mit Papierförmchen auslegen.",
      "Mehl, Mandeln, Backpulver und Zimt mischen.",
      "Bananen zerdrücken und mit Eiern, Öl und Haferdrink verrühren. Mehlmischung, Möhren und Walnüsse unterheben.",
      "Teig in die Förmchen füllen und 22 bis 25 Minuten backen."
    ],
    warum: "Die Süße kommt aus Banane und Möhre statt aus Zucker. Vollkornmehl, Möhren und Walnüsse bringen Ballaststoffe, Rapsöl und Walnüsse Omega-3.",
    tipps: [
      "Diabetes: ein Muffin ist eine Portion, Bananen enthalten Zucker.",
      "Glutenfrei: Mehl durch eine glutenfreie Mischung oder Buchweizenmehl ersetzen."
    ]
  },

  {
    id: "gemuese-muffins-herzhaft",
    titel: "Herzhafte Gemüse-Muffins mit Feta",
    kurz: "Kleine Ofenomeletts mit Paprika, Spinat und Feta, ideal zum Mitnehmen.",
    mahlzeit: "brot", ernaehrung: "vegetarisch",
    portionen: 12, einheit: "Muffins", zeit: 15, gesamt: 40,
    passt: ["gluten", "diabetes", "fettleber", "gewicht"],
    zutaten: [
      { m: 8, e: "", n: "Eier" },
      { m: 1, e: "", n: "rote Paprika" },
      { m: 60, e: "g", n: "Babyspinat" },
      { m: 3, e: "", n: "Frühlingszwiebeln" },
      { m: 80, e: "g", n: "Feta" },
      { m: 1, e: "TL", n: "Oregano", v: 1 },
      { m: 1, e: "TL", n: "Rapsöl", h: "zum Fetten", v: 1 },
      { n: "Pfeffer", v: 1 }
    ],
    schritte: [
      "Backofen auf 180 °C vorheizen, ein Muffinblech einfetten oder Silikonförmchen verwenden.",
      "Paprika fein würfeln, Spinat hacken, Frühlingszwiebeln in Ringe schneiden und in den Förmchen verteilen.",
      "Eier mit Oregano und Pfeffer verquirlen, über das Gemüse gießen und Feta darüber bröseln.",
      "20 bis 22 Minuten backen, bis die Eiermasse fest ist."
    ],
    warum: "Eiweißreich, kohlenhydratarm und gut vorzubereiten: Die Muffins sind ein guter Ersatz für belegte Brötchen unterwegs und halten den Blutzucker stabil.",
    tipps: [
      "Halten im Kühlschrank 4 Tage, kalt oder kurz aufgewärmt essen.",
      "Rheuma: Eier nicht täglich, eine bis zwei Portionen pro Woche."
    ]
  },

  {
    id: "leinsamen-cracker",
    titel: "Leinsamen-Cracker",
    kurz: "Knusprige Cracker aus Saaten, ohne Mehl, ideal zu Dips.",
    mahlzeit: "brot", ernaehrung: "vegan",
    portionen: 8, zeit: 10, gesamt: 85,
    passt: ["gluten", "laktose", "cholesterin", "diabetes", "divertikel", "entzuendung"],
    zutaten: [
      { m: 100, e: "g", n: "Leinsamen", h: "ganz" },
      { m: 50, e: "g", n: "Sonnenblumenkerne" },
      { m: 30, e: "g", n: "Sesam" },
      { m: 30, e: "g", n: "Kürbiskerne" },
      { m: 1, e: "TL", n: "Salz", v: 1 },
      { m: 1, e: "TL", n: "Kräuter der Provence", v: 1 },
      { m: 200, e: "ml", n: "Wasser" }
    ],
    schritte: [
      "Alle Zutaten mischen und 20 Minuten quellen lassen, bis eine zähe Masse entsteht.",
      "Backofen auf 150 °C vorheizen. Masse auf einem mit Backpapier belegten Blech 3 bis 4 mm dünn verstreichen.",
      "30 Minuten backen, dann mit einem Messer in Stücke schneiden.",
      "Weitere 30 Minuten backen, bis die Cracker trocken und knusprig sind. Im Ofen auskühlen lassen."
    ],
    warum: "Leinsamen liefern pflanzliches Omega-3 und schleimbildende Ballaststoffe, die den Darm schützen und Cholesterin binden. Glutenfrei und ohne verwertbare Kohlenhydrate aus Mehl.",
    tipps: [
      "In einer Dose 2 Wochen knusprig.",
      "Viel dazu trinken, Leinsamen brauchen Flüssigkeit."
    ]
  },

  {
    id: "bananenbrot-ohne-zucker",
    titel: "Bananenbrot ohne Zucker mit Walnüssen",
    kurz: "Saftiges Bananenbrot, nur mit reifen Bananen gesüßt, glutenfrei möglich.",
    mahlzeit: "brot", ernaehrung: "vegetarisch",
    portionen: 12, einheit: "Scheiben", zeit: 15, gesamt: 75,
    passt: ["laktose", "cholesterin", "gluten"],
    zutaten: [
      { m: 3, e: "", n: "sehr reife Bananen" },
      { m: 2, e: "", n: "Eier" },
      { m: 60, e: "ml", n: "Rapsöl", v: 1 },
      { m: 150, e: "g", n: "glutenfreie Haferflocken", h: "fein gemahlen" },
      { m: 100, e: "g", n: "gemahlene Mandeln" },
      { m: 2, e: "TL", n: "Backpulver", h: "glutenfrei", v: 1 },
      { m: 1, e: "TL", n: "Zimt", v: 1 },
      { m: 60, e: "g", n: "Walnusskerne", h: "gehackt" }
    ],
    schritte: [
      "Backofen auf 175 °C vorheizen, eine Kastenform mit Backpapier auslegen.",
      "Bananen zerdrücken und mit Eiern und Öl verrühren.",
      "Haferflocken, Mandeln, Backpulver und Zimt mischen und unterrühren. Walnüsse unterheben.",
      "In die Form füllen und 50 bis 55 Minuten backen. Stäbchenprobe machen."
    ],
    warum: "Statt Weißmehl und Zucker stecken Hafer, Mandeln und Bananen drin. Das bringt Ballaststoffe, gesunde Fette und Eiweiß, und die Bananen süßen von allein.",
    tipps: [
      "Je reifer die Bananen, desto süßer das Brot.",
      "Diabetes: eine dünne Scheibe als Portion, Bananen enthalten Zucker."
    ]
  },

  {
    id: "blumenkohl-pizza",
    titel: "Pizza mit Blumenkohlboden",
    kurz: "Pizza ohne Mehl: Der Boden besteht aus Blumenkohl, Ei und Käse.",
    mahlzeit: "brot", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 25, gesamt: 55,
    passt: ["gluten", "diabetes", "fettleber", "gewicht"],
    zutaten: [
      { m: 1, e: "", n: "Blumenkohl", h: "ca. 600 g" },
      { m: 1, e: "", n: "Ei" },
      { m: 50, e: "g", n: "geriebener Parmesan" },
      { m: 2, e: "EL", n: "gemahlene Mandeln" },
      { m: 1, e: "TL", n: "Oregano", v: 1 },
      { m: 150, e: "g", n: "passierte Tomaten" },
      { m: 1, e: "", n: "Mozzarella", h: "125 g" },
      { m: 1, e: "", n: "Paprika" },
      { m: 1, e: "Handvoll", n: "Rucola" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Backofen auf 200 °C vorheizen. Blumenkohl im Mixer zu feinen Krümeln zerkleinern und in einer Schüssel abgedeckt 5 Minuten in der Mikrowelle oder 8 Minuten in einer Pfanne garen.",
      "Etwas abkühlen lassen und in einem Tuch sehr kräftig ausdrücken, bis kaum noch Flüssigkeit kommt.",
      "Mit Ei, Parmesan, Mandeln, Oregano, Salz und Pfeffer mischen und auf Backpapier zu einem dünnen Boden drücken. 20 Minuten backen, bis er goldbraun ist.",
      "Mit gewürzten Tomaten, Mozzarella und Paprika belegen und weitere 10 Minuten backen. Mit Rucola servieren."
    ],
    warum: "Der Boden aus Blumenkohl spart fast alle Kohlenhydrate eines klassischen Pizzateigs und ist glutenfrei. Mit Käse und Ei ist die Pizza eiweißreich und sättigend.",
    tipps: [
      "Das Ausdrücken ist der wichtigste Schritt, sonst wird der Boden matschig.",
      "Fertige Blumenkohlböden gibt es auch im Kühlregal, auf die Zutaten achten."
    ]
  }
);
