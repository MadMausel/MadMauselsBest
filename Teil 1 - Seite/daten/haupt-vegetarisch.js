/* Vegetarische und vegane Hauptgerichte (25). */
REZEPTE.push(
  {
    id: "blumenkohl-kichererbsen-curry",
    titel: "Blumenkohl-Kichererbsen-Curry",
    kurz: "Goldgelbes Curry mit viel Gemüse, Kichererbsen und Kokosmilch.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 4, zeit: 20, gesamt: 40,
    passt: ["entzuendung", "rheuma", "arthrose", "gicht", "gluten", "laktose", "diabetes", "cholesterin", "divertikel"],
    zutaten: [
      { m: 1, e: "", n: "Blumenkohl", h: "ca. 800 g" },
      { m: 240, e: "g", n: "Kichererbsen", h: "abgetropft, 1 Dose" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 2, e: "", n: "Knoblauchzehen" },
      { m: 3, e: "cm", n: "Ingwer" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 2, e: "TL", n: "Currypulver", v: 1 },
      { m: 1, e: "TL", n: "Kurkuma", v: 1 },
      { m: 1, e: "TL", n: "Kreuzkümmel", v: 1 },
      { m: 400, e: "g", n: "stückige Tomaten", h: "1 Dose" },
      { m: 200, e: "ml", n: "Kokosmilch" },
      { m: 100, e: "g", n: "Babyspinat" },
      { m: 0.5, e: "Bund", n: "Koriander" }
    ],
    schritte: [
      "Blumenkohl in Röschen teilen. Zwiebel, Knoblauch und Ingwer fein hacken.",
      "Zwiebel im Öl glasig dünsten, Knoblauch, Ingwer und Gewürze 1 Minute mitrösten.",
      "Blumenkohl, Kichererbsen, Tomaten und Kokosmilch dazugeben und zugedeckt 15 Minuten köcheln, bis der Blumenkohl weich ist.",
      "Spinat unterheben, mit Salz abschmecken und mit Koriander bestreuen."
    ],
    warum: "Kurkuma, Ingwer und Kreuzkümmel bringen entzündungshemmende Pflanzenstoffe, Kichererbsen Eiweiß und Ballaststoffe. Das Curry kommt ohne Fleisch aus und enthält damit keine Arachidonsäure, was bei Rheuma und Gicht hilft.",
    tipps: [
      "Dazu Naturreis oder für weniger Kohlenhydrate einfach eine größere Portion ohne Beilage.",
      "Reizdarm: nicht geeignet wegen Blumenkohl, Zwiebel und Kichererbsen."
    ]
  },

  {
    id: "suesskartoffel-kraeuterquark",
    titel: "Ofen-Süßkartoffel mit Kräuterquark",
    kurz: "Süßkartoffeln aus dem Ofen, gefüllt mit frischem Kräuterquark und Kernen.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 10, gesamt: 55,
    passt: ["gicht", "gluten", "bluthochdruck", "entzuendung"],
    zutaten: [
      { m: 2, e: "", n: "Süßkartoffeln", h: "à ca. 300 g" },
      { m: 1, e: "TL", n: "Rapsöl", v: 1 },
      { m: 250, e: "g", n: "Magerquark" },
      { m: 3, e: "EL", n: "Mineralwasser" },
      { m: 1, e: "EL", n: "Leinöl", v: 1 },
      { m: 1, e: "Bund", n: "gemischte Kräuter", h: "z. B. Schnittlauch, Petersilie, Dill" },
      { m: 2, e: "EL", n: "Kürbiskerne" },
      { m: 1, e: "Handvoll", n: "Rucola" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Backofen auf 200 °C vorheizen. Süßkartoffeln waschen, mehrmals mit einer Gabel einstechen, mit Öl einreiben und 45 Minuten backen, bis sie weich sind.",
      "Quark mit Wasser, Leinöl, gehackten Kräutern, Salz und Pfeffer glatt rühren.",
      "Kürbiskerne ohne Fett rösten.",
      "Süßkartoffeln längs aufschneiden, etwas auseinanderdrücken, mit Quark füllen und mit Rucola und Kernen bestreuen."
    ],
    warum: "Süßkartoffeln liefern Beta-Carotin, Kalium und Ballaststoffe. Magerquark ist eiweißreich und purinarm, fettarme Milchprodukte senken bei Gicht eher die Harnsäure. Leinöl ergänzt Omega-3.",
    tipps: [
      "Laktoseintoleranz: laktosefreien Quark verwenden.",
      "Diabetes: Süßkartoffeln haben mehr Zucker als normale Kartoffeln, eine halbe pro Portion mit großem Salat reicht."
    ]
  },

  {
    id: "pellkartoffeln-leinoel-quark",
    titel: "Pellkartoffeln mit Leinöl-Quark",
    kurz: "Das einfachste Gericht der Sammlung und ein Klassiker bei Entzündungen.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 10, gesamt: 30,
    passt: ["entzuendung", "rheuma", "arthrose", "gicht", "gluten", "bluthochdruck", "gewicht"],
    zutaten: [
      { m: 600, e: "g", n: "festkochende Kartoffeln" },
      { m: 250, e: "g", n: "Magerquark" },
      { m: 3, e: "EL", n: "Mineralwasser" },
      { m: 2, e: "EL", n: "Leinöl", v: 1 },
      { m: 1, e: "Bund", n: "Schnittlauch" },
      { m: 0.5, e: "", n: "Salatgurke" },
      { m: 0.5, e: "TL", n: "Kümmel", h: "ganz", v: 1 },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Kartoffeln waschen und mit Kümmel in Wasser 20 Minuten garen.",
      "Quark mit Mineralwasser glatt rühren, Leinöl unterrühren, Schnittlauch schneiden und unterheben. Mit Salz und Pfeffer würzen.",
      "Gurke in Scheiben schneiden.",
      "Kartoffeln mit Schale oder gepellt mit Quark und Gurke servieren."
    ],
    warum: "Leinöl ist die reichste Omega-3-Quelle im Supermarkt, im Quark bindet es sich gut und schmeckt mild. Kartoffeln mit Schale liefern viel Kalium und kaum Fett. Das Gericht ist günstig, schnell und passt bei Entzündungen, Gicht und Bluthochdruck.",
    tipps: [
      "Laktoseintoleranz: laktosefreien Quark verwenden.",
      "Abgekühlte Kartoffeln vom Vortag lassen den Blutzucker weniger stark steigen."
    ]
  },

  {
    id: "pasta-brokkoli-walnuss-pesto",
    titel: "Vollkornspaghetti mit Brokkoli-Walnuss-Pesto",
    kurz: "Grünes Pesto aus Brokkoli, Walnüssen und Basilikum, ganz ohne Käse.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 2, zeit: 15, gesamt: 25,
    passt: ["entzuendung", "rheuma", "cholesterin", "laktose", "divertikel", "arthrose"],
    zutaten: [
      { m: 180, e: "g", n: "Vollkornspaghetti" },
      { m: 1, e: "", n: "Brokkoli", h: "ca. 400 g" },
      { m: 40, e: "g", n: "Walnusskerne" },
      { m: 1, e: "", n: "Knoblauchzehe" },
      { m: 0.5, e: "Bund", n: "Basilikum" },
      { m: 3, e: "EL", n: "Olivenöl", v: 1 },
      { m: 1, e: "EL", n: "Hefeflocken", h: "nach Wunsch" },
      { m: 0.5, e: "", n: "Zitrone" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Brokkoli in Röschen teilen. Nudeln in Salzwasser kochen, 4 Minuten vor Ende den Brokkoli dazugeben.",
      "Ein Drittel der Brokkoliröschen mit einer Kelle Nudelwasser herausnehmen und mit Walnüssen, Knoblauch, Basilikum, Öl, Hefeflocken und Zitronensaft zu Pesto pürieren.",
      "Nudeln und restlichen Brokkoli abgießen, mit dem Pesto mischen und mit Salz und Pfeffer abschmecken."
    ],
    warum: "Vollkornnudeln liefern dreimal so viele Ballaststoffe wie helle Nudeln. Walnüsse bringen Omega-3, Brokkoli Vitamin C und Sulforaphan. Hefeflocken geben Käsearoma ohne Milch.",
    tipps: [
      "Glutenfrei: Nudeln aus Linsen, Kichererbsen oder Reis verwenden.",
      "Das Pesto hält im Glas mit etwas Öl bedeckt 3 Tage."
    ]
  },

  {
    id: "linsen-bolognese",
    titel: "Linsen-Bolognese mit Zucchini-Nudeln",
    kurz: "Herzhafte Soße aus Linsen und Gemüse, wahlweise mit Zucchini-Nudeln oder Pasta.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 4, zeit: 20, gesamt: 45,
    passt: ["gicht", "gluten", "laktose", "diabetes", "fettleber", "gewicht", "cholesterin", "rheuma", "arthrose"],
    zutaten: [
      { m: 150, e: "g", n: "rote oder braune Linsen" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 2, e: "", n: "Knoblauchzehen" },
      { m: 2, e: "", n: "Möhren" },
      { m: 2, e: "Stangen", n: "Staudensellerie" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 2, e: "EL", n: "Tomatenmark", v: 1 },
      { m: 800, e: "g", n: "stückige Tomaten", h: "2 Dosen" },
      { m: 300, e: "ml", n: "Wasser" },
      { m: 1, e: "TL", n: "Oregano", v: 1 },
      { m: 4, e: "", n: "Zucchini" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Zwiebel, Knoblauch, Möhren und Sellerie sehr fein würfeln und in 1 EL Öl 5 Minuten dünsten. Tomatenmark 1 Minute mitrösten.",
      "Abgespülte Linsen, Tomaten, Wasser und Oregano dazugeben und 25 Minuten köcheln, bis die Linsen weich sind. Abschmecken.",
      "Zucchini zu Nudeln drehen und im restlichen Öl 2 Minuten schwenken.",
      "Zucchini-Nudeln mit der Soße servieren."
    ],
    warum: "Linsen ersetzen Hackfleisch und liefern Eiweiß, Eisen und Ballaststoffe, aber kein gesättigtes Fett. Mit Zucchini-Nudeln wird daraus ein leichtes, kohlenhydratarmes Abendessen.",
    tipps: [
      "Die Soße friert gut ein, gleich die doppelte Menge kochen.",
      "Mit Vollkornspaghetti wird das Gericht sättigender."
    ]
  },

  {
    id: "gefuellte-paprika-hirse",
    titel: "Gefüllte Paprika mit Hirse und Feta",
    kurz: "Bunte Paprika, gefüllt mit Kräuterhirse und Feta, im Ofen geschmort.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 20, gesamt: 55,
    passt: ["gluten", "diabetes", "gicht", "entzuendung"],
    zutaten: [
      { m: 4, e: "", n: "Paprika", h: "rot und gelb" },
      { m: 100, e: "g", n: "Hirse" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 1, e: "", n: "Zucchini" },
      { m: 1, e: "EL", n: "Olivenöl", v: 1 },
      { m: 100, e: "g", n: "Feta" },
      { m: 2, e: "EL", n: "Petersilie" },
      { m: 400, e: "g", n: "passierte Tomaten" },
      { m: 1, e: "TL", n: "Oregano", v: 1 },
      { n: "Pfeffer", v: 1 }
    ],
    schritte: [
      "Hirse heiß abspülen und in 250 ml Wasser 15 Minuten quellen lassen. Backofen auf 180 °C vorheizen.",
      "Zwiebel und Zucchini fein würfeln und im Öl 5 Minuten braten. Mit Hirse, der Hälfte des zerbröselten Fetas, Petersilie und Pfeffer mischen.",
      "Von den Paprika einen Deckel abschneiden, Kerne entfernen und die Schoten füllen.",
      "Passierte Tomaten mit Oregano in eine Auflaufform geben, Paprika hineinsetzen, restlichen Feta darüber streuen und 30 Minuten backen."
    ],
    warum: "Hirse ist glutenfrei und reich an Eisen und Magnesium. Paprika liefert besonders viel Vitamin C. Als fleischfreie Füllung ist das Gericht purinarm.",
    tipps: [
      "Vegan: Feta durch zerbröselten Tofu mit Zitrone ersetzen.",
      "Bluthochdruck: Feta ist salzig, deshalb nicht nachsalzen."
    ]
  },

  {
    id: "blumenkohl-steaks-tahin",
    titel: "Blumenkohl-Steaks mit Tahin und Granatapfel",
    kurz: "Dicke Blumenkohlscheiben, im Ofen geröstet, mit Sesamsoße und Kräutern.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 2, zeit: 15, gesamt: 40,
    passt: ["entzuendung", "gluten", "laktose", "diabetes", "fettleber", "gewicht", "cholesterin"],
    zutaten: [
      { m: 1, e: "", n: "großer Blumenkohl" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 1, e: "TL", n: "Kreuzkümmel", v: 1 },
      { m: 1, e: "TL", n: "Paprikapulver", h: "geräuchert", v: 1 },
      { m: 3, e: "EL", n: "Tahin" },
      { m: 1, e: "", n: "Zitrone", h: "Saft" },
      { m: 4, e: "EL", n: "Wasser" },
      { m: 0.5, e: "", n: "Granatapfel" },
      { m: 0.5, e: "Bund", n: "Petersilie" },
      { m: 240, e: "g", n: "Kichererbsen", h: "abgetropft" },
      { n: "Salz", v: 1 }
    ],
    schritte: [
      "Backofen auf 220 °C vorheizen. Blumenkohl vom Strunk her in 2 bis 3 cm dicke Scheiben schneiden. Abfallende Röschen aufheben.",
      "Öl mit Gewürzen und Salz verrühren und die Scheiben, Röschen und Kichererbsen damit einpinseln. Auf einem Blech 25 Minuten rösten, nach der Hälfte wenden.",
      "Tahin mit Zitronensaft, Wasser und Salz cremig rühren.",
      "Steaks mit Tahinsoße beträufeln, mit Granatapfelkernen und Petersilie bestreuen."
    ],
    warum: "Geröstet wird Blumenkohl nussig und süßlich. Er ist kohlenhydratarm und liefert Vitamin C und Ballaststoffe. Tahin bringt Kalzium und ungesättigte Fette, Granatapfel Polyphenole.",
    tipps: [
      "Reizdarm: nicht geeignet, Blumenkohl ist reich an FODMAP.",
      "Dazu passt Quinoa oder Hirse."
    ]
  },

  {
    id: "tofu-gemuese-erdnuss",
    titel: "Tofu-Gemüse-Pfanne mit Erdnusssoße",
    kurz: "Knuspriger Tofu, buntes Gemüse und eine cremige Erdnusssoße.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 2, zeit: 25, gesamt: 30,
    passt: ["gluten", "laktose", "cholesterin", "diabetes", "entzuendung", "rheuma"],
    zutaten: [
      { m: 200, e: "g", n: "Naturtofu", h: "fest" },
      { m: 1, e: "EL", n: "Speisestärke" },
      { m: 2, e: "EL", n: "Rapsöl", v: 1 },
      { m: 1, e: "", n: "Paprika" },
      { m: 1, e: "", n: "Möhre" },
      { m: 150, e: "g", n: "Zuckerschoten" },
      { m: 1, e: "", n: "Pak Choi" },
      { g: "Soße" },
      { m: 2, e: "EL", n: "Erdnussmus" },
      { m: 2, e: "EL", n: "Tamari", h: "glutenfrei", v: 1 },
      { m: 1, e: "TL", n: "Ingwer", h: "gerieben" },
      { m: 0.5, e: "", n: "Limette" },
      { m: 80, e: "ml", n: "Wasser" },
      { m: 100, e: "g", n: "Naturreis" }
    ],
    schritte: [
      "Reis nach Packungsangabe garen. Tofu trocken tupfen, würfeln und in Stärke wenden.",
      "Tofu in 1 EL Öl rundum knusprig braten, herausnehmen.",
      "Gemüse in Streifen schneiden und im restlichen Öl 4 bis 5 Minuten pfannenrühren.",
      "Soßenzutaten glatt rühren, in die Pfanne geben und aufkochen. Tofu unterheben und mit Reis servieren."
    ],
    warum: "Tofu liefert hochwertiges Eiweiß ohne Arachidonsäure und Cholesterin. Erdnüsse bringen ungesättigte Fette und Magnesium. Viel Gemüse sorgt für Ballaststoffe und Vitamine.",
    tipps: [
      "Histaminintoleranz: Soja und Erdnüsse werden oft schlecht vertragen.",
      "Zuckerschoten durch Brokkoli oder Bohnen ersetzen."
    ]
  },

  {
    id: "ratatouille-hirse",
    titel: "Ratatouille mit Kräuter-Hirse",
    kurz: "Südfranzösisches Schmorgemüse mit Kräutern der Provence.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 4, zeit: 25, gesamt: 55,
    passt: ["entzuendung", "gluten", "laktose", "diabetes", "gewicht", "bluthochdruck", "gicht", "cholesterin"],
    zutaten: [
      { m: 1, e: "", n: "Aubergine" },
      { m: 2, e: "", n: "Zucchini" },
      { m: 2, e: "", n: "Paprika" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 2, e: "", n: "Knoblauchzehen" },
      { m: 3, e: "EL", n: "Olivenöl", v: 1 },
      { m: 400, e: "g", n: "stückige Tomaten", h: "1 Dose" },
      { m: 2, e: "TL", n: "Kräuter der Provence", v: 1 },
      { m: 150, e: "g", n: "Hirse" },
      { m: 0.5, e: "Bund", n: "Basilikum" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Gemüse in etwa 2 cm große Würfel schneiden, Zwiebel und Knoblauch hacken.",
      "Aubergine in 2 EL Öl 5 Minuten anbraten. Zwiebel, Knoblauch, Paprika und Zucchini dazugeben und weitere 5 Minuten braten.",
      "Tomaten und Kräuter dazugeben und zugedeckt 25 Minuten schmoren.",
      "Hirse in 375 ml Wasser mit einer Prise Salz 15 Minuten quellen lassen, restliches Öl unterrühren. Ratatouille abschmecken und mit Basilikum und Hirse servieren."
    ],
    warum: "Fünf Gemüsesorten in einem Topf, geschmort in Olivenöl: Das ist mediterrane Ernährung pur. Viel Kalium, Ballaststoffe und Pflanzenstoffe, kaum Kohlenhydrate. Die Hirse ergänzt Eisen und Magnesium.",
    tipps: [
      "Schmeckt aufgewärmt noch besser und hält 4 Tage.",
      "Histaminintoleranz: nicht geeignet wegen Aubergine und Tomaten."
    ]
  },

  {
    id: "zucchini-puffer",
    titel: "Zucchini-Puffer mit Joghurt-Dip",
    kurz: "Goldbraune Puffer aus Zucchini und Kichererbsenmehl, dazu Kräuterjoghurt.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 25, gesamt: 35,
    passt: ["gluten", "diabetes", "gewicht", "fettleber"],
    zutaten: [
      { m: 2, e: "", n: "Zucchini", h: "ca. 500 g" },
      { m: 1, e: "TL", n: "Salz", v: 1 },
      { m: 2, e: "", n: "Frühlingszwiebeln" },
      { m: 1, e: "", n: "Ei" },
      { m: 4, e: "EL", n: "Kichererbsenmehl" },
      { m: 30, e: "g", n: "Feta" },
      { m: 2, e: "EL", n: "Dill" },
      { m: 2, e: "EL", n: "Rapsöl", v: 1 },
      { m: 150, e: "g", n: "Naturjoghurt" },
      { m: 1, e: "EL", n: "Minze", h: "gehackt" }
    ],
    schritte: [
      "Zucchini grob raspeln, mit Salz mischen und 10 Minuten ziehen lassen. Dann in einem Tuch kräftig ausdrücken.",
      "Mit Frühlingszwiebelringen, Ei, Kichererbsenmehl, zerbröseltem Feta und Dill mischen.",
      "Öl in einer Pfanne erhitzen, je 2 EL Teig hineingeben, flach drücken und von jeder Seite 3 bis 4 Minuten goldbraun braten.",
      "Joghurt mit Minze und Pfeffer verrühren und zu den Puffern servieren."
    ],
    warum: "Kichererbsenmehl ist glutenfrei und eiweißreicher als Weizenmehl. Die Puffer bestehen hauptsächlich aus Gemüse, haben wenig Kohlenhydrate und eignen sich gut als Abendessen.",
    tipps: [
      "Das Ausdrücken ist wichtig, sonst zerfallen die Puffer.",
      "Laktoseintoleranz: laktosefreien Joghurt nehmen und Feta weglassen."
    ]
  },

  {
    id: "buchweizen-pilz-risotto",
    titel: "Buchweizen-Risotto mit Pilzen",
    kurz: "Nussiges Risotto aus Buchweizen statt Reis, mit gebratenen Champignons.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 20, gesamt: 35,
    passt: ["gluten", "diabetes", "cholesterin", "entzuendung"],
    zutaten: [
      { m: 150, e: "g", n: "Buchweizen", h: "ganz" },
      { m: 300, e: "g", n: "Champignons oder Kräuterseitlinge" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 1, e: "", n: "Knoblauchzehe" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 600, e: "ml", n: "Gemüsebrühe", h: "salzarm" },
      { m: 2, e: "Zweige", n: "Thymian" },
      { m: 30, e: "g", n: "Parmesan" },
      { m: 2, e: "EL", n: "Petersilie" },
      { n: "Pfeffer", v: 1 }
    ],
    schritte: [
      "Buchweizen in einem Sieb abspülen. Zwiebel und Knoblauch fein würfeln, Pilze in Scheiben schneiden.",
      "Zwiebel und Knoblauch in 1 EL Öl andünsten, Buchweizen 1 Minute mitrösten.",
      "Nach und nach die heiße Brühe angießen und unter gelegentlichem Rühren 15 bis 18 Minuten garen, bis der Buchweizen weich, aber noch bissfest ist.",
      "Pilze mit Thymian im restlichen Öl kräftig anbraten. Parmesan unter den Buchweizen rühren, Pilze darauf geben und mit Petersilie und Pfeffer servieren."
    ],
    warum: "Buchweizen ist glutenfrei, eiweißreich und lässt den Blutzucker weniger steigen als Risottoreis. Pilze liefern Ballaststoffe und etwas Vitamin D. Parmesan ist von Natur aus fast laktosefrei.",
    tipps: [
      "Vegan: Parmesan durch 2 EL Hefeflocken ersetzen.",
      "Laktose: Parmesan enthält praktisch keine Laktose, die meisten Betroffenen vertragen ihn."
    ]
  },

  {
    id: "kuerbis-risotto",
    titel: "Kürbis-Risotto mit Salbei",
    kurz: "Cremiges Risotto mit Hokkaido, ohne Wein und ohne Fertigbrühe.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 3, zeit: 30, gesamt: 40,
    passt: ["gluten", "laktose", "histamin", "fruktose", "reizdarm", "ced"],
    zutaten: [
      { m: 200, e: "g", n: "Risottoreis" },
      { m: 400, e: "g", n: "Hokkaido-Kürbis" },
      { m: 1, e: "", n: "Lauchstange", h: "nur das Grüne" },
      { m: 3, e: "EL", n: "Olivenöl", v: 1 },
      { m: 900, e: "ml", n: "heißes Wasser" },
      { m: 1, e: "TL", n: "Salz", v: 1 },
      { m: 8, e: "", n: "Salbeiblätter" },
      { m: 2, e: "EL", n: "Kürbiskerne" }
    ],
    schritte: [
      "Kürbis entkernen und mit Schale in kleine Würfel schneiden. Lauchgrün fein schneiden und waschen. Salz im heißen Wasser auflösen.",
      "Lauchgrün in 1 EL Öl andünsten. Reis und Kürbis dazugeben und 2 Minuten unter Rühren glasig dünsten.",
      "Nach und nach das Salzwasser angießen, jeweils einkochen lassen und häufig rühren. Nach 18 bis 20 Minuten ist der Reis cremig und bissfest.",
      "Salbei im restlichen Öl knusprig braten. Risotto mit dem Salbeiöl beträufeln und mit gerösteten Kürbiskernen servieren."
    ],
    warum: "Ohne Wein, Parmesan, Zwiebel und Fertigbrühe bleibt das Risotto histaminarm und FODMAP-arm. Der Kürbis zerfällt teilweise und macht es cremig, die Stärke des Reises erledigt den Rest.",
    tipps: [
      "Wer keine Unverträglichkeit hat, rührt am Ende 30 g Parmesan unter.",
      "Reste zu Bratlingen formen und in der Pfanne braten."
    ]
  },

  {
    id: "kartoffel-gemuese-gratin",
    titel: "Kartoffel-Gemüse-Gratin mit Hafersahne",
    kurz: "Ofengericht mit Kartoffeln, Brokkoli und Möhren in leichter Soße.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 4, zeit: 25, gesamt: 70,
    passt: ["laktose", "bluthochdruck", "gicht", "cholesterin"],
    zutaten: [
      { m: 800, e: "g", n: "festkochende Kartoffeln" },
      { m: 1, e: "", n: "Brokkoli" },
      { m: 2, e: "", n: "Möhren" },
      { m: 300, e: "ml", n: "Hafersahne", h: "Kochcreme" },
      { m: 200, e: "ml", n: "Gemüsebrühe", h: "salzarm" },
      { m: 1, e: "", n: "Knoblauchzehe" },
      { m: 2, e: "EL", n: "Hefeflocken" },
      { m: 2, e: "EL", n: "Sonnenblumenkerne" },
      { m: 1, e: "Prise", n: "Muskat", v: 1 },
      { n: "Pfeffer und Thymian", v: 1 }
    ],
    schritte: [
      "Backofen auf 180 °C vorheizen. Kartoffeln und Möhren schälen und in dünne Scheiben hobeln, Brokkoli in kleine Röschen teilen.",
      "Hafersahne, Brühe, gepressten Knoblauch, Hefeflocken, Muskat, Pfeffer und Thymian verrühren.",
      "Gemüse schichtweise in eine Auflaufform legen und mit der Soße übergießen.",
      "Abgedeckt 30 Minuten backen, dann aufdecken, mit Sonnenblumenkernen bestreuen und weitere 20 Minuten backen."
    ],
    warum: "Statt Sahne und Käse sorgen Hafersahne und Hefeflocken für Cremigkeit. Das spart gesättigte Fette und Milchzucker. Kartoffeln und Brokkoli liefern viel Kalium.",
    tipps: [
      "Glutenfrei: Hafersahne aus glutenfreiem Hafer oder Reissahne nehmen.",
      "Vegetarisch: mit etwas geriebenem Bergkäse überbacken."
    ]
  },

  {
    id: "kichererbsen-spinat-ei",
    titel: "Kichererbsen-Spinat-Pfanne mit Ei",
    kurz: "Schnelle Pfanne mit Kichererbsen, Spinat und Spiegelei, in 20 Minuten fertig.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 20, gesamt: 20,
    passt: ["gluten", "laktose", "diabetes", "fettleber", "gewicht", "gicht", "divertikel"],
    zutaten: [
      { m: 240, e: "g", n: "Kichererbsen", h: "abgetropft, 1 Dose" },
      { m: 200, e: "g", n: "Blattspinat" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 1, e: "", n: "Knoblauchzehe" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 1, e: "TL", n: "Paprikapulver", h: "geräuchert", v: 1 },
      { m: 0.5, e: "TL", n: "Kreuzkümmel", v: 1 },
      { m: 4, e: "", n: "Kirschtomaten" },
      { m: 2, e: "", n: "Eier" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Zwiebel und Knoblauch hacken und in 1 EL Öl andünsten. Gewürze und abgespülte Kichererbsen dazugeben und 5 Minuten braten, bis sie leicht knusprig sind.",
      "Halbierte Tomaten und Spinat dazugeben und zusammenfallen lassen. Abschmecken.",
      "In einer zweiten Pfanne im restlichen Öl zwei Spiegeleier braten.",
      "Kichererbsen-Spinat auf Teller geben und je ein Ei darauf setzen."
    ],
    warum: "Kichererbsen und Ei liefern zusammen reichlich Eiweiß, Spinat Magnesium und Folsäure. Ballaststoffreich, sättigend und kaum schnelle Kohlenhydrate.",
    tipps: [
      "Vegan: Ei durch gebratenen Tofu ersetzen.",
      "Mit Zitronensaft und Joghurt wird es frischer."
    ]
  },

  {
    id: "ofengemuese-feta",
    titel: "Ofengemüse mit Feta und Kichererbsen",
    kurz: "Ein Blech, viel buntes Gemüse, Feta in der Mitte: fertig.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 15, gesamt: 45,
    passt: ["gluten", "diabetes", "gewicht", "entzuendung", "cholesterin"],
    zutaten: [
      { m: 1, e: "", n: "rote Zwiebel" },
      { m: 1, e: "", n: "Zucchini" },
      { m: 1, e: "", n: "Paprika" },
      { m: 250, e: "g", n: "Kirschtomaten" },
      { m: 240, e: "g", n: "Kichererbsen", h: "abgetropft" },
      { m: 150, e: "g", n: "Feta" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 1, e: "TL", n: "Oregano", v: 1 },
      { m: 0.5, e: "TL", n: "Chiliflocken", v: 1 },
      { m: 0.5, e: "Bund", n: "Basilikum" }
    ],
    schritte: [
      "Backofen auf 200 °C vorheizen. Gemüse in große Stücke schneiden, Zwiebel in Spalten.",
      "Gemüse und Kichererbsen mit Öl, Oregano und Chili mischen und auf einem Blech verteilen. Feta in der Mitte platzieren.",
      "30 Minuten backen, bis das Gemüse Röstspuren hat.",
      "Mit Basilikum bestreuen und den weichen Feta beim Servieren unter das Gemüse ziehen."
    ],
    warum: "Ofengemüse ist eine einfache Art, viel Gemüse zu essen. Kichererbsen ergänzen Eiweiß und Ballaststoffe. Olivenöl und Kräuter machen das Gericht mediterran.",
    tipps: [
      "Vegan: Feta durch marinierten Tofu ersetzen.",
      "Kein extra Salz nötig, der Feta ist salzig genug."
    ]
  },

  {
    id: "polenta-ofentomaten",
    titel: "Cremige Polenta mit Ofentomaten und Rucola",
    kurz: "Weiche Polenta, süße Röstomaten und frischer Rucola.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 15, gesamt: 30,
    passt: ["gluten", "entzuendung", "bluthochdruck"],
    zutaten: [
      { m: 120, e: "g", n: "Polenta", h: "Instant" },
      { m: 500, e: "ml", n: "Gemüsebrühe", h: "salzarm" },
      { m: 300, e: "g", n: "Kirschtomaten" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 2, e: "Zweige", n: "Thymian" },
      { m: 30, e: "g", n: "Parmesan" },
      { m: 40, e: "g", n: "Rucola" },
      { m: 2, e: "EL", n: "Pinienkerne" },
      { n: "Pfeffer", v: 1 }
    ],
    schritte: [
      "Backofen auf 200 °C vorheizen. Tomaten mit 1 EL Öl und Thymian mischen und 15 Minuten rösten.",
      "Brühe aufkochen, Polenta einrühren und bei kleiner Hitze nach Packungsangabe 5 bis 10 Minuten quellen lassen. Restliches Öl und Parmesan unterrühren.",
      "Pinienkerne rösten.",
      "Polenta auf Teller geben, Tomaten, Rucola und Pinienkerne darauf verteilen."
    ],
    warum: "Polenta aus Mais ist glutenfrei. Röstomaten liefern Lycopin, das in Kombination mit Olivenöl besonders gut aufgenommen wird. Rucola bringt Nitrat für die Gefäße.",
    tipps: [
      "Vegan: Parmesan durch Hefeflocken ersetzen.",
      "Reste der Polenta in Scheiben schneiden und am nächsten Tag braten."
    ]
  },

  {
    id: "reis-gemuese-ruehrei",
    titel: "Gebratener Reis mit Gemüse und Ei",
    kurz: "Resteessen in gut verträglich: Reis, Möhren, Zucchini und Ei.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 15, gesamt: 15,
    passt: ["histamin", "fruktose", "reizdarm", "ced", "gluten", "laktose"],
    zutaten: [
      { m: 300, e: "g", n: "gekochter Reis", h: "vom Vortag" },
      { m: 2, e: "", n: "Möhren" },
      { m: 1, e: "", n: "kleine Zucchini" },
      { m: 3, e: "", n: "Frühlingszwiebeln", h: "nur das Grüne" },
      { m: 2, e: "", n: "Eier" },
      { m: 2, e: "EL", n: "Knoblauchöl oder Rapsöl", v: 1 },
      { m: 2, e: "cm", n: "Ingwer" },
      { n: "Salz", v: 1 }
    ],
    schritte: [
      "Möhren in kleine Würfel, Zucchini in Würfel, Frühlingszwiebelgrün in Ringe schneiden. Ingwer fein reiben.",
      "1 EL Öl in einer großen Pfanne erhitzen, Möhren 3 Minuten braten, Zucchini und Ingwer 2 Minuten mitbraten.",
      "Gemüse an den Rand schieben, Eier in die Mitte schlagen und unter Rühren stocken lassen.",
      "Reis und restliches Öl dazugeben und alles 3 bis 4 Minuten braten. Mit Salz und Frühlingszwiebelgrün abschmecken."
    ],
    warum: "Reis, Ei, Möhren und kleine Mengen Zucchini sind sehr gut verträglich. Ohne Sojasoße, Zwiebel und Knoblauch bleibt das Gericht histaminarm und FODMAP-arm. Abgekühlter Reis enthält resistente Stärke, die den Blutzucker schont.",
    tipps: [
      "Gekochten Reis schnell abkühlen und höchstens einen Tag im Kühlschrank lagern.",
      "Wer Soja verträgt, würzt mit einem Schuss Tamari."
    ]
  },

  {
    id: "kartoffel-zucchini-auflauf",
    titel: "Kartoffel-Zucchini-Auflauf mit Mozzarella",
    kurz: "Mild, cremig und überbacken: ein Familienauflauf für empfindliche Mägen.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 4, zeit: 20, gesamt: 65,
    passt: ["histamin", "fruktose", "reizdarm", "ced", "gluten"],
    zutaten: [
      { m: 800, e: "g", n: "festkochende Kartoffeln" },
      { m: 2, e: "", n: "Zucchini" },
      { m: 200, e: "ml", n: "laktosefreie Kochsahne" },
      { m: 100, e: "ml", n: "Wasser" },
      { m: 2, e: "", n: "Eier" },
      { m: 1, e: "", n: "Mozzarella", h: "125 g, frisch" },
      { m: 2, e: "Zweige", n: "Thymian" },
      { m: 1, e: "Prise", n: "Muskat", v: 1 },
      { m: 1, e: "TL", n: "Salz", v: 1 },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 }
    ],
    schritte: [
      "Backofen auf 180 °C vorheizen. Kartoffeln in dünne Scheiben hobeln und 5 Minuten in Salzwasser vorgaren. Zucchini in Scheiben schneiden.",
      "Auflaufform mit Öl einfetten, Kartoffeln und Zucchini abwechselnd einschichten.",
      "Sahne, Wasser, Eier, Thymian, Muskat und Salz verquirlen und darüber gießen. Mozzarella in Scheiben darauf legen.",
      "40 Minuten backen, bis die Kartoffeln weich sind und der Käse goldbraun ist."
    ],
    warum: "Frischer Mozzarella ist ein junger Käse mit wenig Histamin und wenig Laktose. Kartoffeln sind sehr gut verträglich. Ohne Zwiebel, Knoblauch und gereiften Käse eignet sich der Auflauf auch für empfindliche Menschen.",
    tipps: [
      "Reizdarm: die Zucchini-Menge pro Portion klein halten oder teilweise durch Möhren ersetzen.",
      "Laktoseintoleranz: laktosefreien Mozzarella verwenden."
    ]
  },

  {
    id: "quinoa-gemuese-pfanne",
    titel: "Quinoa-Gemüse-Pfanne mit Kürbiskernen",
    kurz: "Bunte Pfanne aus Quinoa, Paprika, Möhren und Zucchini.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 2, zeit: 15, gesamt: 30,
    passt: ["gluten", "laktose", "reizdarm", "fruktose", "diabetes", "ced", "cholesterin"],
    zutaten: [
      { m: 120, e: "g", n: "Quinoa" },
      { m: 1, e: "", n: "rote Paprika" },
      { m: 2, e: "", n: "Möhren" },
      { m: 1, e: "", n: "kleine Zucchini" },
      { m: 3, e: "", n: "Frühlingszwiebeln", h: "nur das Grüne" },
      { m: 2, e: "EL", n: "Knoblauchöl oder Rapsöl", v: 1 },
      { m: 1, e: "TL", n: "Paprikapulver", h: "edelsüß", v: 1 },
      { m: 2, e: "EL", n: "Kürbiskerne" },
      { m: 2, e: "EL", n: "Petersilie" },
      { n: "Salz", v: 1 }
    ],
    schritte: [
      "Quinoa heiß abspülen und in 240 ml Wasser 15 Minuten köcheln, 5 Minuten quellen lassen.",
      "Gemüse in kleine Würfel schneiden.",
      "Öl erhitzen, Möhren 3 Minuten braten, Paprika und Zucchini weitere 4 Minuten mitbraten. Mit Paprikapulver und Salz würzen.",
      "Quinoa unterheben, mit Kürbiskernen, Frühlingszwiebelgrün und Petersilie bestreuen."
    ],
    warum: "Quinoa ist glutenfrei und enthält alle essenziellen Aminosäuren. Rote Paprika, Möhren und kleine Mengen Zucchini gelten als FODMAP-arm. Kürbiskerne liefern Zink und Magnesium.",
    tipps: [
      "Kalt als Salat zum Mitnehmen geeignet.",
      "Für mehr Eiweiß gebratenen festen Tofu oder Ei dazugeben."
    ]
  },

  {
    id: "hirse-bratlinge",
    titel: "Hirse-Gemüse-Bratlinge mit Kräuterdip",
    kurz: "Knusprige Bratlinge aus Hirse und Möhren, dazu ein frischer Dip.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 2, zeit: 25, gesamt: 45,
    passt: ["gluten", "laktose", "cholesterin", "diabetes", "entzuendung"],
    zutaten: [
      { m: 100, e: "g", n: "Hirse" },
      { m: 1, e: "", n: "Möhre" },
      { m: 1, e: "", n: "kleine Zwiebel" },
      { m: 2, e: "EL", n: "gemahlene Leinsamen" },
      { m: 3, e: "EL", n: "Kichererbsenmehl" },
      { m: 1, e: "TL", n: "Senf", v: 1 },
      { m: 2, e: "EL", n: "Petersilie" },
      { m: 2, e: "EL", n: "Rapsöl", v: 1 },
      { m: 150, e: "g", n: "Sojajoghurt", h: "natur" },
      { m: 2, e: "EL", n: "Schnittlauch" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Hirse abspülen und in 250 ml Wasser 15 Minuten quellen lassen, abkühlen lassen.",
      "Leinsamen mit 4 EL Wasser verrühren und 5 Minuten quellen lassen. Möhre fein raspeln, Zwiebel fein würfeln.",
      "Hirse mit Leinsamen, Möhre, Zwiebel, Kichererbsenmehl, Senf, Petersilie, Salz und Pfeffer verkneten. 8 Bratlinge formen.",
      "Im Öl von jeder Seite 4 Minuten goldbraun braten. Joghurt mit Schnittlauch, Salz und Pfeffer verrühren und dazu servieren."
    ],
    warum: "Hirse liefert Eisen und Magnesium, Leinsamen Omega-3 und binden die Masse anstelle von Ei. Die Bratlinge sind glutenfrei, vegan und eine gute Alternative zu Frikadellen.",
    tipps: [
      "Die Masse lässt sich am Vortag vorbereiten.",
      "Passt zu Salat oder Ofengemüse."
    ]
  },

  {
    id: "wirsing-kartoffel-pfanne",
    titel: "Wirsing-Kartoffel-Pfanne mit Walnüssen",
    kurz: "Deftige Winterpfanne mit Kümmel, Senf und gerösteten Walnüssen.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 2, zeit: 20, gesamt: 35,
    passt: ["entzuendung", "gluten", "laktose", "bluthochdruck", "gicht", "cholesterin"],
    zutaten: [
      { m: 500, e: "g", n: "festkochende Kartoffeln" },
      { m: 0.5, e: "", n: "Wirsing", h: "ca. 400 g" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 2, e: "EL", n: "Rapsöl", v: 1 },
      { m: 0.5, e: "TL", n: "Kümmel", v: 1 },
      { m: 1, e: "TL", n: "Senf", v: 1 },
      { m: 40, e: "g", n: "Walnusskerne" },
      { m: 1, e: "Prise", n: "Muskat", v: 1 },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Kartoffeln in der Schale 15 Minuten vorgaren, pellen und würfeln.",
      "Wirsing in Streifen schneiden, Zwiebel würfeln.",
      "Kartoffeln im Öl 8 Minuten knusprig braten. Zwiebel, Wirsing und Kümmel dazugeben und weitere 6 Minuten braten.",
      "Mit Senf, Muskat, Salz und Pfeffer abschmecken und mit gerösteten Walnüssen bestreuen."
    ],
    warum: "Wirsing gehört zur Kohlfamilie und liefert Vitamin C, Folsäure und Senföle. Kümmel macht Kohl bekömmlicher. Walnüsse bringen Omega-3, Kartoffeln Kalium.",
    tipps: [
      "Vegetarisch: mit einem Spiegelei servieren.",
      "Statt Wirsing geht auch Spitzkohl."
    ]
  },

  {
    id: "chili-sin-carne",
    titel: "Chili sin Carne mit Süßkartoffel",
    kurz: "Bohnen, Süßkartoffel und Gewürze: deftig, ohne Fleisch.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 4, zeit: 20, gesamt: 50,
    passt: ["gluten", "laktose", "diabetes", "cholesterin", "divertikel", "gicht", "entzuendung", "rheuma", "arthrose"],
    zutaten: [
      { m: 1, e: "", n: "Zwiebel" },
      { m: 2, e: "", n: "Knoblauchzehen" },
      { m: 1, e: "", n: "Süßkartoffel", h: "ca. 400 g" },
      { m: 1, e: "", n: "rote Paprika" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 2, e: "TL", n: "Kreuzkümmel", v: 1 },
      { m: 1, e: "TL", n: "Paprikapulver", h: "geräuchert", v: 1 },
      { m: 0.5, e: "TL", n: "Chilipulver", v: 1 },
      { m: 800, e: "g", n: "stückige Tomaten", h: "2 Dosen" },
      { m: 240, e: "g", n: "Kidneybohnen", h: "abgetropft" },
      { m: 240, e: "g", n: "schwarze Bohnen", h: "abgetropft" },
      { m: 140, e: "g", n: "Mais", h: "abgetropft" },
      { m: 1, e: "", n: "Limette" },
      { m: 0.5, e: "Bund", n: "Koriander" }
    ],
    schritte: [
      "Zwiebel und Knoblauch hacken, Süßkartoffel und Paprika würfeln.",
      "Zwiebel und Knoblauch im Öl andünsten, Gewürze 1 Minute mitrösten.",
      "Süßkartoffel, Paprika und Tomaten dazugeben und 20 Minuten köcheln.",
      "Bohnen und Mais dazugeben und 10 Minuten weiterköcheln. Mit Limettensaft und Salz abschmecken und mit Koriander bestreuen."
    ],
    warum: "Zwei Sorten Bohnen liefern pro Portion etwa ein Drittel des Tagesbedarfs an Ballaststoffen. Der Blutzucker steigt langsam, und lösliche Ballaststoffe binden Cholesterin. Ganz ohne Fleisch ist das Chili arm an Arachidonsäure und gesättigten Fetten.",
    tipps: [
      "Mit Sojajoghurt und Avocado servieren.",
      "Hält 4 Tage im Kühlschrank und friert gut ein."
    ]
  },

  {
    id: "pasta-zucchini-zitrone",
    titel: "Glutenfreie Pasta mit Zucchini, Zitrone und Pinienkernen",
    kurz: "Leichte Sommerpasta, gut verträglich und in 20 Minuten fertig.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 2, zeit: 15, gesamt: 20,
    passt: ["gluten", "laktose", "reizdarm", "fruktose", "ced"],
    zutaten: [
      { m: 180, e: "g", n: "glutenfreie Nudeln", h: "aus Reis oder Mais" },
      { m: 1, e: "", n: "kleine Zucchini" },
      { m: 2, e: "EL", n: "Knoblauchöl", v: 1 },
      { m: 1, e: "", n: "Bio-Zitrone", h: "Abrieb und etwas Saft" },
      { m: 2, e: "EL", n: "Pinienkerne" },
      { m: 0.5, e: "Bund", n: "Basilikum" },
      { m: 2, e: "EL", n: "Hefeflocken", h: "nach Wunsch" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Nudeln nach Packungsangabe in Salzwasser garen. Eine Tasse Nudelwasser aufheben.",
      "Zucchini in feine Streifen hobeln. Pinienkerne ohne Fett rösten.",
      "Knoblauchöl erhitzen, Zucchini 2 Minuten anbraten.",
      "Nudeln, etwas Nudelwasser, Zitronenabrieb und -saft unterheben. Mit Salz, Pfeffer, Hefeflocken, Basilikum und Pinienkernen servieren."
    ],
    warum: "Glutenfreie Nudeln aus Reis oder Mais, Knoblauchöl statt Knoblauch und eine kleine Menge Zucchini halten die Pasta FODMAP-arm. Zitrone und Basilikum sorgen für viel Geschmack.",
    tipps: [
      "Histaminintoleranz: Zitrone weglassen, dann mit frischen Kräutern würzen.",
      "Wer Gluten verträgt, nimmt Vollkornnudeln."
    ]
  },

  {
    id: "mangold-kartoffeln-ei",
    titel: "Mangold-Kartoffel-Pfanne mit Ei",
    kurz: "Bunter Mangold, knusprige Kartoffeln und ein weiches Ei.",
    mahlzeit: "hauptgericht", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 20, gesamt: 35,
    passt: ["gluten", "laktose", "gicht", "bluthochdruck"],
    zutaten: [
      { m: 500, e: "g", n: "festkochende Kartoffeln" },
      { m: 1, e: "Bund", n: "Mangold", h: "ca. 400 g" },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 2, e: "EL", n: "Olivenöl", v: 1 },
      { m: 1, e: "Prise", n: "Muskat", v: 1 },
      { m: 2, e: "", n: "Eier" },
      { m: 0.5, e: "", n: "Zitrone" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Kartoffeln mit Schale 15 Minuten vorgaren und würfeln. Mangoldstiele in Stücke schneiden, Blätter in Streifen.",
      "Kartoffeln im Öl 8 Minuten knusprig braten. Zwiebel und Mangoldstiele 4 Minuten mitbraten, dann die Blätter zusammenfallen lassen.",
      "Mit Muskat, Zitronensaft, Salz und Pfeffer abschmecken.",
      "Eier 6 Minuten wachsweich kochen, pellen und halbiert auf die Pfanne legen."
    ],
    warum: "Mangold liefert viel Magnesium, Kalium und Vitamin K. Kartoffeln bringen Kalium, Eier hochwertiges Eiweiß. Eine purinarme, sättigende Mahlzeit.",
    tipps: [
      "Statt Mangold geht Spinat oder Grünkohl.",
      "Nierensteine (Oxalat): Mangold nicht täglich essen."
    ]
  },

  {
    id: "gruenes-curry-tofu",
    titel: "Grünes Gemüsecurry mit Tofu",
    kurz: "Thai-Curry mit Brokkoli, Zuckerschoten und Tofu in Kokosmilch.",
    mahlzeit: "hauptgericht", ernaehrung: "vegan",
    portionen: 3, zeit: 20, gesamt: 30,
    passt: ["entzuendung", "rheuma", "gluten", "laktose", "diabetes", "cholesterin", "arthrose"],
    zutaten: [
      { m: 200, e: "g", n: "Naturtofu", h: "fest" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 1, e: "EL", n: "grüne Currypaste", h: "vegan" },
      { m: 400, e: "ml", n: "Kokosmilch" },
      { m: 150, e: "ml", n: "Wasser" },
      { m: 1, e: "", n: "Brokkoli", h: "klein" },
      { m: 150, e: "g", n: "Zuckerschoten" },
      { m: 1, e: "", n: "Zucchini" },
      { m: 1, e: "", n: "Limette" },
      { m: 1, e: "Handvoll", n: "Thai-Basilikum oder Koriander" },
      { m: 150, e: "g", n: "Jasminreis" }
    ],
    schritte: [
      "Reis nach Packungsangabe garen. Tofu würfeln und im Öl rundum anbraten, herausnehmen.",
      "Currypaste im verbliebenen Öl 1 Minute anrösten. Kokosmilch und Wasser dazugeben und aufkochen.",
      "Brokkoli, Zuckerschoten und Zucchini in Stücken dazugeben und 6 bis 8 Minuten köcheln.",
      "Tofu unterheben, mit Limettensaft und etwas Salz abschmecken und mit Kräutern und Reis servieren."
    ],
    warum: "Grüne Currypaste enthält Chili, Zitronengras, Galgant und Kräuter mit entzündungshemmenden Eigenschaften. Tofu liefert pflanzliches Eiweiß, das Gemüse Vitamine und Ballaststoffe.",
    tipps: [
      "Currypasten enthalten oft Garnelenpaste, auf vegane Sorten achten.",
      "Diabetes: weniger Reis, mehr Gemüse."
    ]
  }
);
