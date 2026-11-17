/* Getränke (8). */
REZEPTE.push(
  {
    id: "goldene-milch",
    titel: "Goldene Milch (Kurkuma-Latte)",
    kurz: "Wärmendes Getränk mit Kurkuma, Ingwer und Zimt für den Abend.",
    mahlzeit: "getraenk", ernaehrung: "vegan",
    portionen: 2, zeit: 5, gesamt: 10,
    passt: ["entzuendung", "rheuma", "arthrose", "gluten", "laktose"],
    zutaten: [
      { m: 400, e: "ml", n: "Mandeldrink oder Haferdrink" },
      { m: 1, e: "TL", n: "Kurkuma", h: "gemahlen", v: 1 },
      { m: 2, e: "cm", n: "Ingwer", h: "frisch, gerieben" },
      { m: 0.5, e: "TL", n: "Zimt", v: 1 },
      { m: 1, e: "Prise", n: "schwarzer Pfeffer", v: 1 },
      { m: 1, e: "TL", n: "Kokosöl oder Rapsöl", v: 1 },
      { m: 1, e: "TL", n: "Ahornsirup", h: "nach Wunsch" }
    ],
    schritte: [
      "Alle Zutaten in einem Topf verrühren und unter Rühren erhitzen, nicht kochen lassen.",
      "5 Minuten ziehen lassen, durch ein feines Sieb gießen.",
      "Nach Wunsch mit einem Milchaufschäumer schaumig schlagen und mit Zimt bestäuben."
    ],
    warum: "Curcumin aus Kurkuma wirkt entzündungshemmend, wird aber schlecht aufgenommen. Pfeffer und etwas Fett verbessern die Aufnahme deutlich. Ingwer und Zimt runden ab und wärmen.",
    tipps: [
      "Kurkuma färbt stark, Kleidung und helle Arbeitsflächen schützen.",
      "Wer Blutverdünner nimmt, sollte große Mengen Kurkuma ärztlich abklären."
    ]
  },

  {
    id: "ingwer-zitronen-tee",
    titel: "Frischer Ingwer-Zitronen-Tee",
    kurz: "Der Klassiker gegen Frösteln: frischer Ingwer, Zitrone, heißes Wasser.",
    mahlzeit: "getraenk", ernaehrung: "vegan",
    portionen: 2, zeit: 5, gesamt: 15,
    passt: ["entzuendung", "gluten", "laktose", "gewicht", "gicht", "diabetes", "fettleber"],
    zutaten: [
      { m: 4, e: "cm", n: "Ingwer", h: "frisch" },
      { m: 0.5, e: "", n: "Bio-Zitrone" },
      { m: 500, e: "ml", n: "Wasser" },
      { m: 2, e: "Zweige", n: "frische Minze", h: "nach Wunsch" }
    ],
    schritte: [
      "Ingwer ungeschält in dünne Scheiben schneiden.",
      "Wasser aufkochen, über den Ingwer gießen und 10 Minuten ziehen lassen.",
      "Zitrone in Scheiben schneiden und mit Minze in den Tee geben."
    ],
    warum: "Ingwer enthält Gingerole mit entzündungshemmender Wirkung und hilft bei Übelkeit. Ein ungesüßtes Heißgetränk, das beim Trinken unterstützt, wichtig etwa bei Gicht.",
    tipps: [
      "Je länger der Ingwer zieht, desto schärfer.",
      "Histaminintoleranz: Zitrone weglassen."
    ]
  },

  {
    id: "gruener-smoothie",
    titel: "Grüner Smoothie mit Spinat, Kiwi und Gurke",
    kurz: "Mehr Gemüse als Obst: frisch, sättigend und nicht zu süß.",
    mahlzeit: "getraenk", ernaehrung: "vegan",
    portionen: 2, zeit: 5, gesamt: 5,
    passt: ["entzuendung", "gluten", "laktose", "cholesterin", "gewicht"],
    zutaten: [
      { m: 60, e: "g", n: "Babyspinat" },
      { m: 0.5, e: "", n: "Salatgurke" },
      { m: 2, e: "", n: "Kiwis" },
      { m: 0.5, e: "", n: "Banane" },
      { m: 1, e: "EL", n: "Leinsamen", h: "geschrotet" },
      { m: 2, e: "cm", n: "Ingwer" },
      { m: 300, e: "ml", n: "Wasser" }
    ],
    schritte: [
      "Gurke, Kiwis und Banane grob schneiden.",
      "Alles mit Wasser im Mixer sehr fein pürieren.",
      "Sofort trinken."
    ],
    warum: "Smoothies mit mehr Gemüse als Obst liefern Vitamine und Ballaststoffe, ohne den Blutzucker wie Saft hochzutreiben. Leinsamen ergänzen Omega-3.",
    tipps: [
      "Diabetes: Banane weglassen und eine Handvoll Nüsse dazugeben.",
      "Langsam trinken und nicht als Durstlöscher nebenbei, ein Smoothie ist eine kleine Mahlzeit."
    ]
  },

  {
    id: "rote-bete-shot",
    titel: "Rote-Bete-Shot mit Ingwer und Apfel",
    kurz: "Ein kräftiger Schluck Nitrat für die Gefäße.",
    mahlzeit: "getraenk", ernaehrung: "vegan",
    portionen: 4, zeit: 10, gesamt: 10,
    passt: ["bluthochdruck", "gluten", "laktose", "entzuendung"],
    zutaten: [
      { m: 2, e: "", n: "Rote Bete", h: "roh, ca. 300 g" },
      { m: 1, e: "", n: "säuerlicher Apfel" },
      { m: 3, e: "cm", n: "Ingwer" },
      { m: 0.5, e: "", n: "Zitrone", h: "Saft" },
      { m: 200, e: "ml", n: "Wasser" }
    ],
    schritte: [
      "Rote Bete und Apfel schälen und grob würfeln.",
      "Mit Ingwer, Zitronensaft und Wasser im Mixer sehr fein pürieren.",
      "Durch ein feines Sieb oder Tuch drücken und in kleinen Gläsern servieren."
    ],
    warum: "Rote Bete ist eine der reichsten Nitratquellen. In Studien senkte regelmäßig getrunkener Rote-Bete-Saft den Blutdruck leicht. Apfel und Ingwer machen den erdigen Geschmack angenehmer.",
    tipps: [
      "Hält gut verschlossen 2 Tage im Kühlschrank.",
      "Nierensteine (Oxalat): nicht täglich in großen Mengen."
    ]
  },

  {
    id: "gurken-minz-wasser",
    titel: "Gurken-Minz-Wasser",
    kurz: "Aromatisiertes Wasser ohne Zucker, das Trinken leichter macht.",
    mahlzeit: "getraenk", ernaehrung: "vegan",
    portionen: 4, zeit: 5, gesamt: 65,
    passt: ["gicht", "bluthochdruck", "gewicht", "diabetes", "fettleber", "histamin", "fruktose", "reizdarm", "gluten", "laktose", "ced"],
    zutaten: [
      { m: 0.5, e: "", n: "Salatgurke" },
      { m: 4, e: "Zweige", n: "Minze" },
      { m: 2, e: "cm", n: "Ingwer", h: "nach Wunsch" },
      { m: 1, e: "l", n: "Wasser", h: "still oder sprudelnd" }
    ],
    schritte: [
      "Gurke in dünne Scheiben schneiden, Ingwer in feine Scheiben.",
      "Mit Minze in eine Karaffe geben und mit kaltem Wasser auffüllen.",
      "Mindestens 1 Stunde im Kühlschrank ziehen lassen."
    ],
    warum: "Wer genug trinkt, entlastet die Nieren und hilft bei Gicht, Harnsäure auszuscheiden. Aromatisiertes Wasser ist eine gute Alternative zu Säften und Softdrinks, die mit Fruchtzucker Leber und Blutzucker belasten.",
    tipps: [
      "Varianten: Zitrone und Rosmarin, Erdbeere und Basilikum (dann nicht mehr für alle Unverträglichkeiten geeignet).",
      "Im Kühlschrank 24 Stunden haltbar."
    ]
  },

  {
    id: "beeren-kefir-smoothie",
    titel: "Beeren-Kefir-Smoothie",
    kurz: "Fruchtig und probiotisch: Kefir mit Beeren und Haferflocken.",
    mahlzeit: "getraenk", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 5, gesamt: 5,
    passt: ["gicht", "entzuendung", "gluten", "diabetes"],
    zutaten: [
      { m: 300, e: "ml", n: "Kefir" },
      { m: 150, e: "g", n: "Beeren", h: "tiefgekühlt" },
      { m: 2, e: "EL", n: "glutenfreie Haferflocken" },
      { m: 1, e: "EL", n: "Leinsamen", h: "geschrotet" },
      { m: 0.5, e: "TL", n: "Zimt", v: 1 }
    ],
    schritte: [
      "Alle Zutaten im Mixer fein pürieren.",
      "Bei Bedarf etwas Wasser dazugeben.",
      "Sofort trinken."
    ],
    warum: "Kefir enthält lebende Milchsäurebakterien und Hefen, die die Darmflora unterstützen können. Durch die Fermentation ist ein Teil der Laktose bereits abgebaut. Beeren und Leinsamen ergänzen Pflanzenstoffe und Omega-3.",
    tipps: [
      "Laktoseintoleranz: Viele vertragen Kefir besser als Milch, es gibt auch laktosefreien Kefir.",
      "Histaminintoleranz: fermentierte Milchprodukte sind ungünstig."
    ]
  },

  {
    id: "fencheltee",
    titel: "Bauchtee mit Fenchel, Anis und Kümmel",
    kurz: "Selbst gemischter Tee, der bei Blähungen und Völlegefühl guttut.",
    mahlzeit: "getraenk", ernaehrung: "vegan",
    portionen: 2, zeit: 5, gesamt: 15,
    passt: ["histamin", "fruktose", "gluten", "laktose", "ced"],
    zutaten: [
      { m: 1, e: "TL", n: "Fenchelsamen" },
      { m: 0.5, e: "TL", n: "Anissamen" },
      { m: 0.5, e: "TL", n: "Kümmel" },
      { m: 500, e: "ml", n: "Wasser" }
    ],
    schritte: [
      "Samen im Mörser leicht anquetschen, damit die ätherischen Öle austreten.",
      "Mit kochendem Wasser übergießen und abgedeckt 10 Minuten ziehen lassen.",
      "Abseihen und warm trinken."
    ],
    warum: "Fenchel, Anis und Kümmel enthalten ätherische Öle, die krampflösend wirken und Blähungen lindern können. Ein ungesüßter, wärmender Tee, der auch bei Histaminintoleranz gut verträglich ist.",
    tipps: [
      "Reizdarm: Starker Fencheltee enthält FODMAP, dünn aufgegossen wird er meist vertragen.",
      "Bei Schwangerschaft nur in üblichen Mengen trinken."
    ]
  },

  {
    id: "kakao-zimt",
    titel: "Heißer Kakao mit Zimt, ohne Zucker",
    kurz: "Echter Kakao mit Haferdrink und Gewürzen, süß nur durch Zimt und Vanille.",
    mahlzeit: "getraenk", ernaehrung: "vegan",
    portionen: 2, zeit: 5, gesamt: 5,
    passt: ["laktose", "cholesterin", "entzuendung"],
    zutaten: [
      { m: 400, e: "ml", n: "Haferdrink" },
      { m: 2, e: "EL", n: "Kakaopulver", h: "ungesüßt" },
      { m: 0.5, e: "TL", n: "Zimt", v: 1 },
      { m: 1, e: "Msp.", n: "Vanille", v: 1 },
      { m: 1, e: "Prise", n: "Salz", v: 1 },
      { m: 1, e: "TL", n: "Ahornsirup", h: "nach Wunsch" }
    ],
    schritte: [
      "Kakao mit 3 EL Haferdrink glatt rühren.",
      "Restlichen Haferdrink mit Zimt, Vanille und Salz erhitzen.",
      "Kakaopaste einrühren und mit dem Schneebesen aufschäumen."
    ],
    warum: "Reines Kakaopulver enthält Flavanole, die die Gefäße elastisch halten können, und Magnesium. Fertige Kakaogetränke bestehen dagegen zu großen Teilen aus Zucker.",
    tipps: [
      "Haferdrink ist von Natur aus leicht süß.",
      "Glutenfrei: Mandeldrink oder Haferdrink aus glutenfreiem Hafer verwenden."
    ]
  }
);
