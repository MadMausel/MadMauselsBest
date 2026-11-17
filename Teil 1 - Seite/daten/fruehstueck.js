/* Frühstück (18). Format wie in probe.js. */
REZEPTE.push(
  {
    id: "buchweizen-brei-heidelbeeren",
    titel: "Buchweizenbrei mit Heidelbeeren und Kürbiskernen",
    kurz: "Nussig, warm und von Natur aus glutenfrei: Buchweizen statt Hafer.",
    mahlzeit: "fruehstueck", ernaehrung: "vegan",
    portionen: 2, zeit: 10, gesamt: 15,
    passt: ["entzuendung", "rheuma", "gluten", "laktose", "diabetes", "cholesterin", "divertikel", "arthrose"],
    zutaten: [
      { m: 80, e: "g", n: "Buchweizenflocken" },
      { m: 350, e: "ml", n: "Mandeldrink", h: "ungesüßt" },
      { m: 0.5, e: "TL", n: "Zimt", v: 1 },
      { m: 1, e: "Prise", n: "Salz", v: 1 },
      { m: 150, e: "g", n: "Heidelbeeren" },
      { m: 2, e: "EL", n: "Kürbiskerne" },
      { m: 2, e: "TL", n: "Leinöl", v: 1 }
    ],
    schritte: [
      "Buchweizenflocken mit Mandeldrink, Zimt und Salz aufkochen und unter Rühren 5 Minuten bei kleiner Hitze quellen lassen.",
      "Kürbiskerne in einer Pfanne ohne Fett rösten, bis sie leicht knacken.",
      "Brei in Schalen füllen, Heidelbeeren und Kürbiskerne darauf verteilen und mit Leinöl beträufeln."
    ],
    warum: "Buchweizen ist kein Getreide, sondern ein Knöterichgewächs, deshalb glutenfrei. Er liefert Ballaststoffe, Magnesium und den Pflanzenstoff Rutin. Kürbiskerne bringen Zink und Eiweiß, Leinöl Omega-3.",
    tipps: [
      "Statt Flocken geht auch ganzer Buchweizen: über Nacht einweichen, abspülen und 10 Minuten köcheln.",
      "Glutenfrei: auf Flocken mit Glutenfrei-Siegel achten, manche werden in Mühlen mit Weizen verarbeitet."
    ]
  },

  {
    id: "hirse-kokos-brei",
    titel: "Hirse-Kokos-Brei mit Banane",
    kurz: "Sanfter, cremiger Brei aus Hirse, gut verträglich und schnell gemacht.",
    mahlzeit: "fruehstueck", ernaehrung: "vegan",
    portionen: 2, zeit: 10, gesamt: 25,
    passt: ["gluten", "laktose", "reizdarm", "fruktose", "ced"],
    zutaten: [
      { m: 80, e: "g", n: "Hirse" },
      { m: 200, e: "ml", n: "Kokosmilch", h: "aus der Dose" },
      { m: 200, e: "ml", n: "Wasser" },
      { m: 1, e: "Prise", n: "Salz", v: 1 },
      { m: 0.5, e: "TL", n: "Zimt", v: 1 },
      { m: 1, e: "", n: "Banane", h: "fest, nicht zu reif" },
      { m: 1, e: "EL", n: "Kokosraspeln" }
    ],
    schritte: [
      "Hirse in einem Sieb heiß abspülen, damit Bitterstoffe verschwinden.",
      "Mit Kokosmilch, Wasser und Salz aufkochen und zugedeckt bei kleiner Hitze 15 Minuten quellen lassen. Zwischendurch umrühren.",
      "Zimt unterrühren. Banane in Scheiben schneiden, Kokosraspeln in einer Pfanne ohne Fett rösten und beides auf dem Brei verteilen."
    ],
    warum: "Hirse ist glutenfrei, mild und liefert Eisen und Kieselsäure. Gekocht ist sie leicht verdaulich. Eine feste, noch nicht ganz reife Banane enthält weniger Fruchtzucker und gilt in kleiner Menge als FODMAP-arm.",
    tipps: [
      "Reizdarm und Fruktose: höchstens eine halbe Banane pro Portion und lieber eine feste.",
      "Kokosmilch durch Reisdrink ersetzen, wenn der Brei leichter sein soll."
    ]
  },

  {
    id: "overnight-oats-kakao",
    titel: "Overnight Oats mit Kakao und Himbeeren",
    kurz: "Am Abend angerührt, am Morgen fertig: schokoladig, aber ohne Zucker.",
    mahlzeit: "fruehstueck", ernaehrung: "vegan",
    portionen: 2, zeit: 5, gesamt: 485,
    passt: ["laktose", "cholesterin", "diabetes", "divertikel", "entzuendung"],
    zutaten: [
      { m: 80, e: "g", n: "kernige Haferflocken" },
      { m: 2, e: "EL", n: "Leinsamen", h: "geschrotet" },
      { m: 1, e: "EL", n: "Kakaopulver", h: "ungesüßt" },
      { m: 300, e: "ml", n: "Haferdrink", h: "ungesüßt" },
      { m: 0.5, e: "", n: "Banane", h: "zerdrückt" },
      { m: 150, e: "g", n: "Himbeeren", h: "frisch oder tiefgekühlt" },
      { m: 1, e: "EL", n: "Haselnüsse", h: "gehackt" }
    ],
    schritte: [
      "Haferflocken, Leinsamen und Kakao in zwei Gläsern mischen.",
      "Zerdrückte Banane mit dem Haferdrink verrühren, über die Flocken gießen und umrühren.",
      "Abgedeckt über Nacht in den Kühlschrank stellen.",
      "Morgens Himbeeren und Haselnüsse darauf geben."
    ],
    warum: "Hafer und Leinsamen liefern viele lösliche Ballaststoffe, die den Blutzucker glätten und Cholesterin binden. Ungesüßter Kakao bringt Polyphenole, die Banane die Süße. Himbeeren haben wenig Zucker und viele Ballaststoffe.",
    tipps: [
      "Diabetes: Banane weglassen und mit einer Prise Zimt würzen.",
      "Hält im Glas zwei Tage, gut zum Mitnehmen."
    ]
  },

  {
    id: "skyr-bowl-beeren",
    titel: "Skyr-Bowl mit Beeren und Leinsamen",
    kurz: "Eiweißreicher Start: Skyr, Beeren, Nüsse, fertig in 5 Minuten.",
    mahlzeit: "fruehstueck", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 5, gesamt: 5,
    passt: ["diabetes", "fettleber", "gewicht", "gicht", "gluten", "entzuendung"],
    zutaten: [
      { m: 300, e: "g", n: "Skyr", h: "natur" },
      { m: 200, e: "g", n: "gemischte Beeren" },
      { m: 2, e: "EL", n: "Leinsamen", h: "geschrotet" },
      { m: 2, e: "EL", n: "Walnusskerne" },
      { m: 0.5, e: "TL", n: "Zimt", v: 1 }
    ],
    schritte: [
      "Skyr mit 2 bis 3 EL Wasser cremig rühren und in zwei Schalen verteilen.",
      "Beeren waschen, große Erdbeeren halbieren.",
      "Beeren, Leinsamen, gehackte Walnüsse und Zimt auf dem Skyr verteilen."
    ],
    warum: "Skyr ist fettarm und sehr eiweißreich, das sättigt lange und hält den Blutzucker stabil. Fettarme Milchprodukte gelten bei Gicht als günstig, weil sie die Ausscheidung von Harnsäure fördern. Beeren und Walnüsse bringen entzündungshemmende Pflanzenstoffe und Omega-3.",
    tipps: [
      "Laktoseintoleranz: laktosefreien Skyr oder Sojajoghurt nehmen.",
      "Im Winter tiefgekühlte Beeren über Nacht im Kühlschrank auftauen lassen."
    ]
  },

  {
    id: "kraeuter-ruehrei-brot",
    titel: "Kräuter-Rührei mit Tomaten auf Vollkornbrot",
    kurz: "Herzhaftes Frühstück mit viel Grün, ohne Milch im Ei.",
    mahlzeit: "fruehstueck", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 10, gesamt: 10,
    passt: ["diabetes", "fettleber", "gewicht", "laktose"],
    zutaten: [
      { m: 4, e: "", n: "Eier" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 0.5, e: "Bund", n: "Schnittlauch" },
      { m: 0.5, e: "Bund", n: "Petersilie" },
      { m: 2, e: "", n: "Tomaten" },
      { m: 2, e: "Scheiben", n: "Vollkornbrot" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Kräuter fein schneiden, Tomaten in Scheiben schneiden.",
      "Eier mit 2 EL Wasser, Salz und Pfeffer verquirlen. Öl in einer Pfanne bei mittlerer Hitze erwärmen, Eier hineingeben und langsam stocken lassen, dabei mit einem Pfannenwender zusammenschieben.",
      "Kräuter unterheben, wenn das Ei noch leicht feucht ist.",
      "Brot mit Tomatenscheiben belegen und das Rührei darauf verteilen."
    ],
    warum: "Eiweiß am Morgen sättigt bis zum Mittag und verhindert Heißhunger. Vollkornbrot liefert Ballaststoffe, die den Blutzucker langsamer steigen lassen als Weißbrot. Wasser statt Milch macht das Rührei locker und laktosefrei.",
    tipps: [
      "Glutenfrei: auf glutenfreies Brot oder das Saatenbrot aus diesem Kochbuch legen.",
      "Rheuma: Eier höchstens zwei- bis dreimal pro Woche, Eigelb enthält Arachidonsäure."
    ]
  },

  {
    id: "avocado-brot-ei",
    titel: "Vollkornbrot mit Avocado und pochiertem Ei",
    kurz: "Cremige Avocado, weiches Ei, ein Spritzer Zitrone: Frühstück mit guten Fetten.",
    mahlzeit: "fruehstueck", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 15, gesamt: 15,
    passt: ["cholesterin", "diabetes", "entzuendung", "laktose"],
    zutaten: [
      { m: 1, e: "", n: "reife Avocado" },
      { m: 0.5, e: "", n: "Zitrone", h: "Saft" },
      { m: 2, e: "", n: "Eier", h: "sehr frisch" },
      { m: 1, e: "EL", n: "Essig", h: "für das Kochwasser", v: 1 },
      { m: 2, e: "Scheiben", n: "Vollkornbrot" },
      { m: 1, e: "EL", n: "Kresse" },
      { n: "Salz, Pfeffer und Chiliflocken", v: 1 }
    ],
    schritte: [
      "Avocado halbieren, Fruchtfleisch herauslösen und mit Zitronensaft, Salz und Pfeffer grob zerdrücken.",
      "Wasser mit Essig in einem Topf aufkochen und die Hitze reduzieren, bis es nur noch siedet. Eier einzeln in eine Tasse schlagen, ins Wasser gleiten lassen und 3 bis 4 Minuten garen.",
      "Brot toasten, mit Avocado bestreichen, je ein Ei darauflegen und mit Kresse und Chiliflocken bestreuen."
    ],
    warum: "Avocados enthalten viel einfach ungesättigte Fettsäuren, die das LDL-Cholesterin günstig beeinflussen, und dazu Kalium und Ballaststoffe. Mit Ei und Vollkorn entsteht ein Frühstück, das lange satt hält.",
    tipps: [
      "Histaminintoleranz: Avocado wird oft schlecht vertragen.",
      "Wer das Pochieren scheut: Eier 6 Minuten wachsweich kochen."
    ]
  },

  {
    id: "spinat-feta-omelett",
    titel: "Spinat-Omelett mit Feta",
    kurz: "Ein Omelett, gefüllt mit Spinat und würzigem Feta, in 10 Minuten.",
    mahlzeit: "fruehstueck", ernaehrung: "vegetarisch",
    portionen: 1, zeit: 10, gesamt: 10,
    passt: ["diabetes", "fettleber", "gewicht", "gluten"],
    zutaten: [
      { m: 2, e: "", n: "Eier" },
      { m: 1, e: "TL", n: "Olivenöl", v: 1 },
      { m: 50, e: "g", n: "Babyspinat" },
      { m: 30, e: "g", n: "Feta" },
      { m: 2, e: "", n: "Frühlingszwiebeln" },
      { n: "Salz, Pfeffer, Muskat", v: 1 }
    ],
    schritte: [
      "Frühlingszwiebeln in Ringe schneiden. Eier mit 1 EL Wasser, wenig Salz, Pfeffer und Muskat verquirlen.",
      "Öl in einer beschichteten Pfanne erhitzen, Frühlingszwiebeln 1 Minute anbraten, Spinat dazugeben und zusammenfallen lassen. Herausnehmen.",
      "Eier in die Pfanne gießen und bei mittlerer Hitze stocken lassen. Spinat und zerbröselten Feta auf eine Hälfte geben, Omelett zusammenklappen und kurz weiterbraten."
    ],
    warum: "Ein kohlenhydratarmes, eiweißreiches Frühstück lässt den Blutzucker kaum ansteigen und hält lange satt. Spinat liefert Folsäure und Magnesium.",
    tipps: [
      "Feta ist salzig: bei Bluthochdruck die Hälfte nehmen und kein extra Salz verwenden.",
      "Histaminintoleranz: Spinat und gereifter Käse werden oft schlecht vertragen."
    ]
  },

  {
    id: "tofu-ruehrei",
    titel: "Tofu-Rührei mit Kurkuma und Paprika",
    kurz: "Die vegane Antwort auf Rührei: goldgelb, würzig, eiweißreich.",
    mahlzeit: "fruehstueck", ernaehrung: "vegan",
    portionen: 2, zeit: 15, gesamt: 15,
    passt: ["entzuendung", "rheuma", "cholesterin", "gluten", "laktose", "diabetes", "fettleber", "gewicht", "reizdarm", "arthrose"],
    zutaten: [
      { m: 250, e: "g", n: "Naturtofu", h: "fest" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 1, e: "", n: "rote Paprika" },
      { m: 3, e: "", n: "Frühlingszwiebeln", h: "nur das Grüne" },
      { m: 0.5, e: "TL", n: "Kurkuma", v: 1 },
      { m: 1, e: "Prise", n: "Kala Namak", h: "Schwefelsalz, nach Wunsch", v: 1 },
      { m: 2, e: "EL", n: "Schnittlauch" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Paprika fein würfeln, Frühlingszwiebelgrün in Ringe schneiden.",
      "Öl erhitzen und die Paprika 3 Minuten braten.",
      "Tofu mit den Händen in die Pfanne bröseln, Kurkuma und Pfeffer dazugeben und 5 Minuten braten, bis der Tofu leicht gebräunt ist.",
      "Mit Salz oder Kala Namak abschmecken, Frühlingszwiebelgrün und Schnittlauch unterheben."
    ],
    warum: "Tofu liefert hochwertiges Eiweiß ohne Arachidonsäure und Cholesterin, was bei Rheuma und hohen Blutfetten hilft. Fester Tofu gilt als FODMAP-arm. Kurkuma färbt und bringt entzündungshemmendes Curcumin, Pfeffer verbessert die Aufnahme. Kala Namak schmeckt nach Ei.",
    tipps: [
      "Reizdarm: nur festen Naturtofu, Seidentofu ist reich an FODMAP.",
      "Histaminintoleranz: Soja wird oft schlecht vertragen."
    ]
  },

  {
    id: "leinoel-quark-beeren",
    titel: "Leinöl-Quark mit Beeren und Walnüssen",
    kurz: "Der Klassiker bei Entzündungen: Quark mit Leinöl, frisch und sättigend.",
    mahlzeit: "fruehstueck", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 5, gesamt: 5,
    passt: ["entzuendung", "rheuma", "arthrose", "gicht", "diabetes", "gewicht", "gluten"],
    zutaten: [
      { m: 250, e: "g", n: "Magerquark" },
      { m: 4, e: "EL", n: "Mineralwasser" },
      { m: 2, e: "EL", n: "Leinöl", v: 1 },
      { m: 200, e: "g", n: "Beeren" },
      { m: 2, e: "EL", n: "Walnusskerne" },
      { m: 1, e: "Msp.", n: "Vanille", h: "gemahlen", v: 1 }
    ],
    schritte: [
      "Quark mit Mineralwasser und Vanille glatt rühren.",
      "Leinöl langsam unterrühren, bis es sich vollständig verbunden hat.",
      "In Schalen füllen, Beeren und grob gehackte Walnüsse darauf geben."
    ],
    warum: "Leinöl ist die reichste Quelle für pflanzliche Omega-3-Fettsäuren. Im Quark bindet es sich gut und schmeckt mild. Magerquark liefert viel Eiweiß und kaum Purine, und fettarme Milchprodukte senken bei Gicht eher die Harnsäure.",
    tipps: [
      "Laktoseintoleranz: laktosefreien Quark verwenden.",
      "Leinöl immer frisch kaufen und im Kühlschrank lagern, es wird schnell bitter."
    ]
  },

  {
    id: "bananen-hafer-pancakes",
    titel: "Bananen-Hafer-Pancakes ohne Zucker",
    kurz: "Drei Grundzutaten, kein Mehl, kein Zucker: fluffige Pfannkuchen fürs Wochenende.",
    mahlzeit: "fruehstueck", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 15, gesamt: 20,
    passt: ["laktose", "cholesterin", "divertikel"],
    zutaten: [
      { m: 1, e: "", n: "reife Banane" },
      { m: 2, e: "", n: "Eier" },
      { m: 80, e: "g", n: "zarte Haferflocken" },
      { m: 80, e: "ml", n: "Haferdrink" },
      { m: 1, e: "TL", n: "Backpulver", v: 1 },
      { m: 0.5, e: "TL", n: "Zimt", v: 1 },
      { m: 1, e: "EL", n: "Rapsöl", h: "zum Braten", v: 1 },
      { m: 150, e: "g", n: "Beeren", h: "zum Servieren" }
    ],
    schritte: [
      "Alle Zutaten außer Öl und Beeren in einem hohen Gefäß fein pürieren. 5 Minuten quellen lassen.",
      "Wenig Öl in einer beschichteten Pfanne bei mittlerer Hitze erwärmen. Je 2 EL Teig als kleine Pancakes hineingeben.",
      "Braten, bis sich Bläschen bilden, wenden und eine weitere Minute braten. Mit Beeren servieren."
    ],
    warum: "Die Banane ersetzt den Zucker, Haferflocken das Weißmehl. So enthalten die Pancakes viele Ballaststoffe, und der Blutzucker steigt deutlich langsamer als bei klassischen Pfannkuchen.",
    tipps: [
      "Glutenfrei: zertifiziert glutenfreie Haferflocken nehmen.",
      "Diabetes: Portion klein halten und mit Joghurt statt Sirup servieren."
    ]
  },

  {
    id: "buchweizen-pancakes",
    titel: "Glutenfreie Buchweizen-Pancakes mit Beeren",
    kurz: "Kräftig im Geschmack, ohne Weizen: Pancakes aus Buchweizenmehl.",
    mahlzeit: "fruehstueck", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 15, gesamt: 25,
    passt: ["gluten", "laktose", "cholesterin", "reizdarm", "fruktose"],
    zutaten: [
      { m: 100, e: "g", n: "Buchweizenmehl" },
      { m: 1, e: "TL", n: "Backpulver", h: "glutenfrei", v: 1 },
      { m: 1, e: "Prise", n: "Salz", v: 1 },
      { m: 1, e: "", n: "Ei" },
      { m: 180, e: "ml", n: "Mandeldrink" },
      { m: 1, e: "EL", n: "Rapsöl", v: 1 },
      { m: 150, e: "g", n: "Heidelbeeren und Himbeeren" },
      { m: 2, e: "TL", n: "Ahornsirup", h: "nach Wunsch" }
    ],
    schritte: [
      "Mehl, Backpulver und Salz mischen. Ei und Mandeldrink verquirlen, unterrühren und den Teig 10 Minuten quellen lassen.",
      "Eine beschichtete Pfanne mit wenig Öl auspinseln. Je eine kleine Kelle Teig hineingeben und von beiden Seiten goldbraun backen.",
      "Mit Beeren und nach Wunsch etwas Ahornsirup servieren."
    ],
    warum: "Buchweizen ist glutenfrei und gilt als FODMAP-arm. Mandeldrink, Heidelbeeren und Ahornsirup in kleiner Menge sind auch bei Reizdarm und Fruktosemalabsorption meist gut verträglich, anders als Honig oder Agavendicksaft.",
    tipps: [
      "Backpulver auf Glutenfreiheit prüfen, manche enthalten Weizenstärke.",
      "Die Pancakes lassen sich einfrieren und im Toaster aufwärmen."
    ]
  },

  {
    id: "knuspermuesli-ohne-zucker",
    titel: "Knuspermüsli ohne Zucker",
    kurz: "Selbst gebackenes Granola mit Nüssen und Saaten, gesüßt nur mit Apfelmark.",
    mahlzeit: "fruehstueck", ernaehrung: "vegan",
    portionen: 10, zeit: 10, gesamt: 40,
    passt: ["cholesterin", "diabetes", "divertikel", "entzuendung", "laktose"],
    zutaten: [
      { m: 250, e: "g", n: "kernige Haferflocken" },
      { m: 100, e: "g", n: "Nüsse", h: "z. B. Walnüsse, Mandeln, Haselnüsse" },
      { m: 50, e: "g", n: "Sonnenblumenkerne" },
      { m: 50, e: "g", n: "Kürbiskerne" },
      { m: 2, e: "EL", n: "Leinsamen" },
      { m: 1, e: "TL", n: "Zimt", v: 1 },
      { m: 1, e: "Prise", n: "Salz", v: 1 },
      { m: 100, e: "g", n: "Apfelmark", h: "ungesüßt" },
      { m: 3, e: "EL", n: "Rapsöl", v: 1 }
    ],
    schritte: [
      "Backofen auf 160 °C Umluft vorheizen. Nüsse grob hacken.",
      "Alle trockenen Zutaten in einer Schüssel mischen. Apfelmark und Öl dazugeben und gründlich vermengen, bis alles leicht feucht ist.",
      "Auf einem mit Backpapier belegten Blech verteilen und 25 bis 30 Minuten backen. Nach 15 Minuten wenden.",
      "Auf dem Blech vollständig abkühlen lassen, dann wird es knusprig. In einem Schraubglas aufbewahren."
    ],
    warum: "Gekauftes Knuspermüsli enthält oft 20 Prozent Zucker oder mehr. Diese Variante kommt ohne Zuckerzusatz aus und bringt viele Ballaststoffe, Omega-3 aus Walnüssen und Leinsamen und Magnesium aus den Kernen.",
    tipps: [
      "Eine Portion sind etwa 40 g, dazu Joghurt oder Pflanzendrink und frisches Obst.",
      "Hält luftdicht verschlossen 3 Wochen."
    ]
  },

  {
    id: "reisflocken-brei",
    titel: "Reisflockenbrei mit Heidelbeeren",
    kurz: "Ein besonders sanftes Frühstück für empfindliche Bäuche.",
    mahlzeit: "fruehstueck", ernaehrung: "vegan",
    portionen: 2, zeit: 10, gesamt: 10,
    passt: ["histamin", "fruktose", "reizdarm", "ced", "gluten", "laktose"],
    zutaten: [
      { m: 70, e: "g", n: "Reisflocken" },
      { m: 350, e: "ml", n: "Reisdrink", h: "ungesüßt" },
      { m: 1, e: "Prise", n: "Salz", v: 1 },
      { m: 0.5, e: "TL", n: "Zimt", v: 1 },
      { m: 100, e: "g", n: "Heidelbeeren" },
      { m: 1, e: "TL", n: "Rapsöl", v: 1 }
    ],
    schritte: [
      "Reisdrink mit Salz aufkochen, Reisflocken einrühren und bei kleiner Hitze 3 bis 5 Minuten quellen lassen.",
      "Zimt und Öl unterrühren.",
      "Mit Heidelbeeren servieren."
    ],
    warum: "Reis ist eines der am besten verträglichen Lebensmittel überhaupt: glutenfrei, FODMAP-arm und histaminarm. Heidelbeeren gelten bei Histaminintoleranz als verträglich und haben ein günstiges Verhältnis von Fruchtzucker zu Traubenzucker.",
    tipps: [
      "Im Schub bei Morbus Crohn oder Colitis: Heidelbeeren weglassen oder vorher kurz mitkochen.",
      "Reisdrink ist sehr mild. Wer es cremiger mag, nimmt die Hälfte Kokosmilch."
    ]
  },

  {
    id: "herzhafter-haferbrei",
    titel: "Herzhafter Haferbrei mit Ei und Spinat",
    kurz: "Porridge einmal salzig: mit Spinat, Ei und Kernen.",
    mahlzeit: "fruehstueck", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 10, gesamt: 15,
    passt: ["diabetes", "cholesterin", "divertikel", "laktose"],
    zutaten: [
      { m: 80, e: "g", n: "zarte Haferflocken" },
      { m: 400, e: "ml", n: "Gemüsebrühe", h: "salzarm" },
      { m: 80, e: "g", n: "Babyspinat" },
      { m: 2, e: "", n: "Eier" },
      { m: 2, e: "", n: "Frühlingszwiebeln" },
      { m: 1, e: "EL", n: "Sonnenblumenkerne" },
      { n: "Pfeffer und Chiliflocken", v: 1 }
    ],
    schritte: [
      "Haferflocken in der Brühe aufkochen und 5 Minuten bei kleiner Hitze quellen lassen.",
      "Spinat unterrühren und zusammenfallen lassen. Eier in Wasser 6 Minuten wachsweich kochen und pellen.",
      "Brei in Schalen füllen, halbierte Eier, Frühlingszwiebelringe und Kerne darauf geben, mit Pfeffer und Chili würzen."
    ],
    warum: "Hafer mit Eiweiß und Gemüse: Diese Kombination lässt den Blutzucker noch langsamer ansteigen als süßer Porridge. Beta-Glucan aus dem Hafer hilft bei hohem Cholesterin.",
    tipps: [
      "Statt Ei passen gebratene Pilze oder Räuchertofu.",
      "Glutenfrei: zertifiziert glutenfreie Haferflocken."
    ]
  },

  {
    id: "huettenkaese-brot",
    titel: "Vollkornbrot mit Hüttenkäse, Gurke und Kresse",
    kurz: "Leicht, frisch und eiweißreich: das schnelle Brot für jeden Morgen.",
    mahlzeit: "fruehstueck", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 5, gesamt: 5,
    passt: ["gicht", "diabetes", "gewicht", "fettleber"],
    zutaten: [
      { m: 4, e: "Scheiben", n: "Vollkornbrot" },
      { m: 200, e: "g", n: "Hüttenkäse" },
      { m: 0.5, e: "", n: "Salatgurke" },
      { m: 2, e: "EL", n: "Kresse" },
      { m: 1, e: "EL", n: "Schnittlauch" },
      { n: "Pfeffer", v: 1 }
    ],
    schritte: [
      "Gurke in dünne Scheiben schneiden.",
      "Brote mit Hüttenkäse bestreichen und mit Gurke belegen.",
      "Mit Kresse, Schnittlauch und Pfeffer bestreuen."
    ],
    warum: "Hüttenkäse hat wenig Fett, viel Eiweiß und kaum Purine. Fettarme Milchprodukte sind bei Gicht empfehlenswert. Vollkornbrot liefert langsam verfügbare Kohlenhydrate.",
    tipps: [
      "Glutenfrei: glutenfreies Brot oder Reiswaffeln verwenden.",
      "Laktoseintoleranz: Es gibt laktosefreien Hüttenkäse."
    ]
  },

  {
    id: "joghurt-granatapfel",
    titel: "Joghurt mit Granatapfel, Walnüssen und Zimt",
    kurz: "Leuchtende Kerne, knackige Nüsse: ein Frühstück in zwei Minuten.",
    mahlzeit: "fruehstueck", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 5, gesamt: 5,
    passt: ["entzuendung", "gluten", "gicht", "cholesterin"],
    zutaten: [
      { m: 300, e: "g", n: "Naturjoghurt", h: "1,5 % Fett" },
      { m: 0.5, e: "", n: "Granatapfel" },
      { m: 30, e: "g", n: "Walnusskerne" },
      { m: 1, e: "EL", n: "Leinsamen", h: "geschrotet" },
      { m: 0.5, e: "TL", n: "Zimt", v: 1 }
    ],
    schritte: [
      "Granatapfel halbieren und die Kerne über einer Schüssel mit einem Löffel herausklopfen.",
      "Joghurt in Schalen verteilen, Granatapfelkerne, gehackte Walnüsse und Leinsamen darauf geben.",
      "Mit Zimt bestäuben."
    ],
    warum: "Granatäpfel enthalten besonders viele Polyphenole, die in Studien entzündungshemmend wirkten. Joghurt bringt Eiweiß und Milchsäurebakterien, Walnüsse Omega-3.",
    tipps: [
      "Laktoseintoleranz: laktosefreien Joghurt oder Sojajoghurt nehmen.",
      "Granatapfelkerne halten im Kühlschrank 5 Tage."
    ]
  },

  {
    id: "shakshuka-paprika",
    titel: "Shakshuka mit Paprika",
    kurz: "Eier in würziger Tomaten-Paprika-Soße, direkt aus der Pfanne.",
    mahlzeit: "fruehstueck", ernaehrung: "vegetarisch",
    portionen: 2, zeit: 15, gesamt: 30,
    passt: ["gluten", "laktose", "diabetes", "fettleber", "gewicht", "entzuendung"],
    zutaten: [
      { m: 1, e: "EL", n: "Olivenöl", v: 1 },
      { m: 1, e: "", n: "Zwiebel" },
      { m: 1, e: "", n: "Knoblauchzehe" },
      { m: 2, e: "", n: "rote Paprika" },
      { m: 1, e: "TL", n: "Kreuzkümmel", h: "gemahlen", v: 1 },
      { m: 1, e: "TL", n: "Paprikapulver", h: "edelsüß", v: 1 },
      { m: 400, e: "g", n: "stückige Tomaten", h: "1 Dose" },
      { m: 4, e: "", n: "Eier" },
      { m: 0.5, e: "Bund", n: "Petersilie oder Koriander" },
      { n: "Salz und Pfeffer", v: 1 }
    ],
    schritte: [
      "Zwiebel und Knoblauch fein würfeln, Paprika in Streifen schneiden.",
      "Öl in einer Pfanne erhitzen. Zwiebel, Knoblauch und Paprika 5 Minuten dünsten, Gewürze 1 Minute mitrösten.",
      "Tomaten dazugeben und 10 Minuten offen köcheln, bis die Soße eindickt. Mit Salz und Pfeffer abschmecken.",
      "Mit einem Löffel vier Mulden formen, je ein Ei hineinschlagen und zugedeckt 5 bis 7 Minuten garen, bis das Eiweiß fest ist. Mit Kräutern bestreuen."
    ],
    warum: "Viel Gemüse und Eiweiß, wenig Kohlenhydrate: Das hält satt und den Blutzucker ruhig. Gekochte Tomaten liefern Lycopin, das der Körper aus erhitzten Tomaten besser aufnimmt als aus rohen.",
    tipps: [
      "Passt auch als Abendessen.",
      "Wer Brot dazu möchte, nimmt Vollkorn oder glutenfreies Brot."
    ]
  },

  {
    id: "kokosjoghurt-kiwi",
    titel: "Kokosjoghurt mit Kiwi und Hanfsamen",
    kurz: "Frisch, säuerlich und milchfrei: ein leichtes Frühstück für empfindliche Bäuche.",
    mahlzeit: "fruehstueck", ernaehrung: "vegan",
    portionen: 2, zeit: 5, gesamt: 5,
    passt: ["laktose", "gluten", "reizdarm", "fruktose", "entzuendung"],
    zutaten: [
      { m: 250, e: "g", n: "Kokosjoghurt", h: "natur, ungesüßt" },
      { m: 2, e: "", n: "Kiwis" },
      { m: 2, e: "EL", n: "Hanfsamen", h: "geschält" },
      { m: 2, e: "EL", n: "Haferflocken", h: "glutenfrei" },
      { m: 1, e: "TL", n: "Ahornsirup", h: "nach Wunsch" }
    ],
    schritte: [
      "Kiwis schälen und in Stücke schneiden.",
      "Haferflocken in einer Pfanne ohne Fett kurz rösten.",
      "Kokosjoghurt in Schalen verteilen, Kiwi, Hanfsamen und Haferflocken darauf geben und nach Wunsch mit Ahornsirup beträufeln."
    ],
    warum: "Kiwis sind FODMAP-arm, enthalten viel Vitamin C und helfen bei träger Verdauung. Hanfsamen liefern Eiweiß und ein günstiges Verhältnis von Omega-3 zu Omega-6. Kokosjoghurt ist frei von Milchzucker.",
    tipps: [
      "Reizdarm: 2 EL Haferflocken pro Portion gelten als verträglich, größere Mengen nicht.",
      "Histaminintoleranz: Kiwi wird oft schlecht vertragen, dann Heidelbeeren nehmen."
    ]
  }
);
