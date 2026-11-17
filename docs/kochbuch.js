/* Einteilung des Kochbuchs: Krankheitsbilder, Mahlzeiten, Ernährungsweisen.
   Die Regeln sind eigene Kurzfassungen allgemein anerkannter Ernährungsempfehlungen,
   angelehnt an die Grundideen der Ernährungs-Docs (NDR). Keine Texte vom NDR übernommen. */

window.KOCHBUCH = {
  stand: "2026-11-17 (150 Rezepte)",

  gruppen: [
    {
      id: "entzuendung-gelenke",
      name: "Entzündung & Gelenke",
      farbe: "entzuendung",
      themen: [
        {
          id: "entzuendung", name: "Stille Entzündungen", schild: "entzündungshemmend",
          regeln: [
            "Gemüse füllt die halbe Tellerhälfte: bunt, möglichst jeden Tag andere Sorten.",
            "Omega-3 einbauen: Lein-, Raps- und Walnussöl, Leinsamen, Walnüsse und ein- bis zweimal pro Woche fetten Seefisch.",
            "Zucker, Weißmehl, Wurst und stark verarbeitete Fertigprodukte selten essen.",
            "Gewürze wie Kurkuma (mit Pfeffer), Ingwer und frische Kräuter großzügig nutzen.",
            "Längere Essenspausen, etwa über Nacht 14 bis 16 Stunden, geben dem Stoffwechsel Ruhe."
          ]
        },
        {
          id: "rheuma", name: "Rheuma", schild: "rheuma-freundlich",
          regeln: [
            "Weniger Arachidonsäure: Fleisch, Wurst, Eigelb und Butter nur in kleinen Mengen.",
            "Überwiegend pflanzlich essen, Hülsenfrüchte und Tofu als Eiweißquelle nutzen.",
            "Omega-3-reiche Öle und fetten Fisch bevorzugen, sie wirken der Entzündung entgegen.",
            "Ballaststoffe füttern die Darmflora, die bei Entzündungen mitspielt.",
            "Medikamente und Nahrungsergänzung immer mit der Rheumatologin oder dem Rheumatologen abstimmen."
          ]
        },
        {
          id: "arthrose", name: "Arthrose", schild: "gelenkfreundlich",
          regeln: [
            "Jedes Kilo weniger entlastet Knie und Hüfte spürbar.",
            "Entzündungshemmend essen: viel Gemüse, Omega-3, wenig Zucker und Fleisch.",
            "Eiweiß aus Hülsenfrüchten, Fisch und Milchprodukten unterstützt die Muskulatur, die das Gelenk stützt.",
            "Bewegung gehört dazu: Ernährung allein ersetzt keine Gelenkpflege."
          ]
        },
        {
          id: "gicht", name: "Gicht", schild: "purinarm",
          regeln: [
            "Purinreiche tierische Lebensmittel begrenzen: Innereien, viel Fleisch, Wurst, Sardinen, Hering, Meeresfrüchte.",
            "Kein Alkohol, vor allem kein Bier (auch alkoholfreies enthält Purine).",
            "Keine mit Fruchtzucker gesüßten Getränke und Säfte, sie erhöhen die Harnsäure.",
            "Mindestens zwei Liter Wasser oder ungesüßten Tee am Tag trinken.",
            "Pflanzliche Purine aus Hülsenfrüchten gelten als deutlich weniger problematisch."
          ]
        }
      ]
    },
    {
      id: "unvertraeglichkeiten",
      name: "Unverträglichkeiten",
      farbe: "unvertraeglich",
      themen: [
        {
          id: "gluten", name: "Zöliakie & Gluten", schild: "glutenfrei",
          regeln: [
            "Bei Zöliakie streng glutenfrei: kein Weizen, Dinkel, Roggen, Gerste, Grünkern, Emmer oder Einkorn.",
            "Von Natur aus glutenfrei: Reis, Kartoffeln, Hirse, Mais, Buchweizen, Quinoa, Amaranth.",
            "Hafer nur mit Glutenfrei-Siegel und nach ärztlicher Absprache.",
            "Spuren vermeiden: eigener Toaster, saubere Siebe und Bretter, Fertigprodukte auf die durchgestrichene Ähre prüfen."
          ]
        },
        {
          id: "laktose", name: "Laktoseintoleranz", schild: "laktosefrei",
          regeln: [
            "Die Menge entscheidet: Viele vertragen kleine Mengen Milchzucker über den Tag verteilt.",
            "Gereifter Hartkäse wie Parmesan oder Bergkäse ist von Natur aus fast laktosefrei.",
            "Pflanzendrinks, Soja- oder Kokosjoghurt und laktosefreie Milchprodukte ersetzen Milch.",
            "Versteckte Laktose steckt oft in Wurst, Brot, Fertiggerichten und Süßem."
          ]
        },
        {
          id: "histamin", name: "Histaminintoleranz", schild: "histaminarm",
          regeln: [
            "Frisch statt lang gelagert: Fleisch und Fisch frisch kaufen und am selben Tag zubereiten, Reste schnell kühlen.",
            "Oft schlecht vertragen: gereifter Käse, Salami, Räucherfisch, Tomaten, Spinat, Avocado, Aubergine, Sauerkraut, Essig, Hefeextrakt, Rotwein.",
            "Zitrusfrüchte und Erdbeeren können Histamin im Körper freisetzen.",
            "Die Verträglichkeit ist sehr individuell: ein Ernährungstagebuch hilft, die Diagnose gehört in ärztliche Hand."
          ]
        },
        {
          id: "fruktose", name: "Fruktosemalabsorption", schild: "fruktosearm",
          regeln: [
            "Nach einer kurzen Weglassphase die persönliche Grenze vorsichtig austesten.",
            "Meiden: Honig, Agavendicksaft, Fruchtsäfte, Trockenobst und den Zuckeraustauschstoff Sorbit.",
            "Obst in kleinen Portionen und zu einer Mahlzeit mit Eiweiß oder Fett wird besser vertragen.",
            "Wichtig: Diese Rezepte sind nicht für die seltene erbliche Fruktoseintoleranz gedacht, dort gelten strengere Regeln."
          ]
        }
      ]
    },
    {
      id: "stoffwechsel-herz",
      name: "Stoffwechsel & Herz",
      farbe: "stoffwechsel",
      themen: [
        {
          id: "diabetes", name: "Diabetes Typ 2", schild: "blutzuckerfreundlich",
          regeln: [
            "Schnelle Kohlenhydrate sparen: Zucker, Weißmehl, Säfte und Softdrinks.",
            "Zu jeder Mahlzeit Eiweiß und Ballaststoffe, dann steigt der Blutzucker langsamer.",
            "Drei Mahlzeiten ohne Zwischenmahlzeiten, abends möglichst wenig Kohlenhydrate.",
            "Wer Insulin oder blutzuckersenkende Tabletten nimmt, stimmt eine Ernährungsumstellung vorher ärztlich ab: Unterzuckergefahr."
          ]
        },
        {
          id: "fettleber", name: "Fettleber", schild: "leberfreundlich",
          regeln: [
            "Zucker und besonders Fruchtzucker aus Säften und Softdrinks streichen.",
            "Alkohol meiden, damit sich die Leber erholen kann.",
            "Weniger Kohlenhydrate, mehr Gemüse und Eiweiß, abends besonders.",
            "Lange Essenspausen (z. B. 16:8) und schon 5 bis 10 Prozent weniger Gewicht verbessern die Leberwerte deutlich."
          ]
        },
        {
          id: "bluthochdruck", name: "Bluthochdruck", schild: "salzarm",
          regeln: [
            "Salz reduzieren: höchstens 6 g am Tag. Das meiste steckt in Brot, Käse, Wurst und Fertigprodukten.",
            "Kaliumreich essen: Gemüse, Kartoffeln, Hülsenfrüchte, Nüsse.",
            "Nitratreiches Gemüse wie Rote Bete und Rucola kann die Gefäße weiten.",
            "Alkohol begrenzen und Übergewicht abbauen senkt den Druck zusätzlich."
          ]
        },
        {
          id: "cholesterin", name: "Hohes Cholesterin", schild: "herzfreundlich",
          regeln: [
            "Lösliche Ballaststoffe binden Cholesterin: Hafer, Hülsenfrüchte, Leinsamen, Flohsamenschalen.",
            "Gute Fette statt gesättigter: Raps- und Olivenöl, Nüsse und Saaten statt Butter, Wurst und fettem Fleisch.",
            "Eine Handvoll Nüsse am Tag ist ein guter Richtwert.",
            "Gebäck, Frittiertes und Fertigsnacks mit gehärteten Fetten meiden."
          ]
        },
        {
          id: "gewicht", name: "Übergewicht", schild: "sättigend & leicht",
          regeln: [
            "Eiweiß und Gemüse machen satt, ohne viel Energie zu liefern.",
            "Zucker, Weißmehl und kalorienhaltige Getränke sind die größten Stellschrauben.",
            "Feste Mahlzeiten mit Pausen dazwischen statt ständigem Snacken.",
            "Langsam essen: Das Sättigungsgefühl kommt nach etwa 20 Minuten."
          ]
        }
      ]
    },
    {
      id: "darm",
      name: "Darm",
      farbe: "darm",
      themen: [
        {
          id: "reizdarm", name: "Reizdarm (FODMAP-arm)", schild: "FODMAP-arm",
          regeln: [
            "Die FODMAP-Diät läuft in drei Phasen: 4 bis 6 Wochen weglassen, dann einzeln wieder einführen, am Ende eine persönliche Dauerkost. Am besten mit einer Ernährungsfachkraft.",
            "Typische FODMAP-Quellen: Zwiebel, Knoblauch, Hülsenfrüchte, Weizen in größeren Mengen, Milchzucker, Äpfel, Birnen, Steinobst, Zuckeralkohole.",
            "Aroma ohne Beschwerden: Knoblauchöl, das Grüne von Lauch und Frühlingszwiebeln, Schnittlauch, Ingwer.",
            "Die Portionsgröße zählt: Vieles ist in kleinen Mengen verträglich."
          ]
        },
        {
          id: "ced", name: "Morbus Crohn & Colitis", schild: "darmschonend",
          regeln: [
            "In der beschwerdefreien Phase abwechslungsreich und mediterran essen, mit viel Gemüse und Omega-3.",
            "Im Schub schonende, gut verträgliche Kost, ärztlich oder von einer Ernährungsfachkraft begleitet.",
            "Mängel an Eisen, Vitamin B12 und Vitamin D sind häufig und sollten regelmäßig geprüft werden.",
            "Stark verarbeitete Lebensmittel eher meiden, ein Tagebuch zeigt, was gut vertragen wird."
          ]
        },
        {
          id: "divertikel", name: "Divertikel", schild: "ballaststoffreich",
          regeln: [
            "In beschwerdefreien Zeiten ballaststoffreich essen, etwa 30 g am Tag aus Vollkorn, Gemüse, Obst und Hülsenfrüchten.",
            "Viel trinken, damit die Ballaststoffe quellen können.",
            "Nüsse, Kerne und Saaten sind nicht verboten, diese alte Empfehlung gilt als widerlegt.",
            "Bei einer akuten Entzündung (Divertikulitis) gilt ärztlich begleitete Schonkost."
          ]
        }
      ]
    }
  ],

  ernaehrung: [
    { id: "vegan", name: "Vegan", schild: "vegan", text: "Ohne tierische Lebensmittel." },
    { id: "vegetarisch", name: "Vegetarisch", schild: "vegetarisch", text: "Ohne Fleisch und Fisch. Zeigt auch vegane Rezepte." },
    { id: "pescetarisch", name: "Pescetarisch", schild: "mit Fisch", text: "Ohne Fleisch, mit Fisch. Zeigt auch vegetarische und vegane Rezepte." },
    { id: "fleisch", name: "Mit Fleisch", schild: "mit Fleisch", text: "Rezepte mit Fleisch oder Geflügel." }
  ],

  mahlzeiten: [
    { id: "fruehstueck", name: "Frühstück" },
    { id: "hauptgericht", name: "Hauptgerichte" },
    { id: "suppe", name: "Suppen & Eintöpfe" },
    { id: "salat", name: "Salate & Bowls" },
    { id: "snack", name: "Snacks & Aufstriche" },
    { id: "brot", name: "Brot & Backen" },
    { id: "dessert", name: "Süßes" },
    { id: "getraenk", name: "Getränke" }
  ],

  hinweis: "Die Rezepte sind allgemeine Anregungen und ersetzen keine ärztliche Beratung oder Ernährungstherapie. Bei Erkrankungen, Medikamenten oder Schwangerschaft die Ernährung mit Ärztin, Arzt oder Ernährungsfachkraft abstimmen."
};

window.REZEPTE = [];
