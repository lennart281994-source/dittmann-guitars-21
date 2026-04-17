export type Locale = "de" | "en";

export const locales: Locale[] = ["de", "en"];
export const defaultLocale: Locale = "de";

// Path slug map per locale. Keys are stable internal identifiers.
export const paths = {
  home: { de: "", en: "" },
  instruments: { de: "instrumente", en: "instruments" },
  commission: { de: "auftragsbau", en: "commission" },
  construction: { de: "bauweise", en: "construction" },
  contact: { de: "kontakt", en: "contact" },
} as const;

export type PathKey = keyof typeof paths;

export const dict = {
  de: {
    nav: {
      guitars: "Gitarren",
      instruments: "Verfügbare Gitarren",
      commission: "Individuelle Anfertigung",
      construction: "Bauweise",
      contact: "Kontakt",
    },
    home: {
      heroName: "Michael Dittmann",
      heroSub: "Handgebaute Konzertgitarren",
      twoPathsKicker: "Zwei Wege",
      pathAvailable: "Verfügbare Gitarren",
      pathCommission: "Individuelle Anfertigung",
      aboutTitle: "Über den Erbauer",
      aboutText:
        "Meine Faszination für die klassische Gitarre begann während meiner Zeit in Asturien im Norden Spaniens, wo ich auf einem Gnadenhof für Esel gearbeitet habe.\n\nDer Klang einer guten Gitarre berührt mich immer wieder und führt mich zurück an diesen Ort. Im Gitarrenbau suche ich meinen eigenen Zugang zu diesem Klang.\n\nNach ersten Instrumenten, die aus Neugier entstanden, führte mich mein Weg zu Michael Wichmann. Seitdem arbeite und lerne ich in seiner Werkstatt und entwickle dort meine eigene klangliche Handschrift im Gitarrenbau",
      philosophy: "Jedes Stück Holz hat seinen eigenen Charakter.",
      philosophyBody:
        "Hieraus ein Instrument zu formen, das den Spielenden Raum zur klanglichen Entfaltung gibt, ist der Grundgedanke meiner Arbeit.\n\nDie Basis bilden ausgewählte Tonhölzer, die sich seit Jahrzehnten in der Sammlung von Michael Wichmann befinden.",
      processKicker: "Werkstatt",
      processLink: "Bauprozess ansehen",
      contactInvite: "Jedes Instrument beginnt mit einem Gespräch.",
      contactLink: "Kontakt aufnehmen",
    },
    instruments: {
      title: "Verfügbare Instrumente",
      intro:
        "Eine kleine Auswahl gerade fertiggestellter Gitarren. Jedes Instrument ist einzigartig — in Holzwahl, Klang und Charakter.",
      items: [
        {
          name: "Konzertgitarre — Zeder / Palisander",
          character:
            "Warm, tragend, mit langer Tonhaltedauer. Eine Gitarre, die in den ersten Stunden zu sich findet und über Jahre weiter reift.",
          specs: [
            { label: "Decke", value: "Westliche Roteder" },
            { label: "Boden & Zargen", value: "Indischer Palisander" },
            { label: "Mensur", value: "650 mm" },
            { label: "Jahr", value: "2024" },
          ],
        },
        {
          name: "Konzertgitarre — Fichte / Ahorn",
          character:
            "Klar, transparent und ausgewogen. Besonders geeignet für polyphones Spiel und ein offenes, sprechendes Klangbild.",
          specs: [
            { label: "Decke", value: "Europäische Fichte" },
            { label: "Boden & Zargen", value: "Geriegelter Ahorn" },
            { label: "Mensur", value: "650 mm" },
            { label: "Jahr", value: "2024" },
          ],
        },
        {
          name: "Konzertgitarre — Zeder / Ziricote",
          character:
            "Dunkel im Grundton, mit feiner Auflösung in den hohen Lagen. Ein Instrument für ruhige, eindringliche Musik.",
          specs: [
            { label: "Decke", value: "Westliche Roteder" },
            { label: "Boden & Zargen", value: "Ziricote" },
            { label: "Mensur", value: "648 mm" },
            { label: "Jahr", value: "2023" },
          ],
        },
      ],
    },
    commission: {
      title: "Auftragsbau",
      intro:
        "Ein Instrument auf Maß zu bauen ist ein gemeinsamer Weg. Er beginnt mit Zuhören und endet mit einer Gitarre, die zu Ihrem Spiel und Ihrer Vorstellung gehört.",
      sections: [
        {
          title: "Gespräch",
          text:
            "Am Anfang steht ein Gespräch — über Klangvorstellungen, Spielgewohnheiten, das Repertoire. Vieles entscheidet sich hier, lange bevor das erste Holz gewählt wird.",
        },
        {
          title: "Planung & Vorlieben",
          text:
            "Mensur, Halsprofil, Saitenabstand, Decke und Bauart — wir gehen jeden Punkt in Ruhe durch. Persönliche Erfahrungen mit anderen Instrumenten fließen mit ein.",
        },
        {
          title: "Holzauswahl",
          text:
            "Aus jahrelang gelagertem Bestand wählen wir gemeinsam Decke, Boden und Zargen. Jedes Stück hat seinen eigenen Charakter — sichtbar und hörbar.",
        },
        {
          title: "Bauphase",
          text:
            "Der eigentliche Bau dauert mehrere Monate. Auf Wunsch begleite ich den Prozess mit Bildern und kurzen Berichten aus der Werkstatt.",
        },
        {
          title: "Fertigstellung",
          text:
            "Das fertige Instrument wird sorgfältig eingespielt und eingestellt. Die Übergabe erfolgt persönlich, mit Zeit zum Spielen, Hören und Verstehen.",
        },
      ],
    },
    construction: {
      title: "Bauweise",
      intro:
        "Mein Bauverständnis ist gewachsen — aus der Tradition spanischer Meister und aus dreißig Jahren eigener Werkstattarbeit. Was bleibt, ist eine ruhige, klare Linie.",
      blocks: [
        {
          title: "Tonhölzer",
          text:
            "Jedes Stück Holz bringt eigene Eigenschaften mit, die im Instrument berücksichtigt werden.\n\nFür die Decke kommen Fichte oder Zeder zum Einsatz, für Boden und Zargen sowohl tropische als auch heimische Hölzer aus dem über Jahrzehnte gewachsenen Bestand von Michael Wichmann.\n\nAusgewählte Tonhölzer bilden die Grundlage jeder Gitarre.",
        },
        {
          title: "Konstruktion",
          text:
            "Die Bauweise orientiert sich an der traditionellen spanischen Gitarrenkonstruktion und wird durch eigene Ansätze sowie den gezielten Einsatz moderner Messmethoden weiterentwickelt.\n\nEin leicht gebautes Instrument mit hoher Schwingungsfähigkeit steht im Mittelpunkt und sorgt für eine direkte Ansprache und einen offenen Klang.\n\nDie Oberflächen werden von Hand mit Schellack poliert.",
        },
        {
          title: "Spielbarkeit",
          text:
            "Damit eine Gitarre zu einem stimmigen Instrument wird, passe ich alle Komponenten so aufeinander ab, dass sich der Klang frei entfalten kann.\n\nZentraler Punkt ist dabei die individuelle Abstimmung auf die Bedürfnisse der Spielenden und eine leichte Spielbarkeit.",
        },
      ],
    },
    contact: {
      title: "Kontakt",
      intro:
        "Schreiben Sie mir gerne — zu einem konkreten Instrument, zu einem Auftrag oder einfach mit einer Frage. Ich antworte persönlich, in Ruhe.",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      email: "kontakt@dittmann-guitars.de",
      phone: "+49 30 1234 5678",
      location: "Werkstatt — Berlin",
      closing: "Ich freue mich auf Ihre Nachricht.",
    },
    footer: {
      maker: "Michael Dittmann",
      tag: "Handgebaute Konzertgitarren",
      rights: "Alle Rechte vorbehalten.",
    },
    common: {
      readMore: "Weiterlesen",
      back: "Zurück",
    },
  },
  en: {
    nav: {
      guitars: "Guitars",
      instruments: "Available Guitars",
      commission: "Custom Build",
      construction: "Construction",
      contact: "Contact",
    },
    home: {
      heroName: "Michael Dittmann",
      heroSub: "Handmade Classical Guitars",
      twoPathsKicker: "Two Paths",
      pathAvailable: "Available Guitars",
      pathCommission: "Custom Build",
      aboutTitle: "About the Maker",
      aboutText:
        "For more than three decades I have devoted my work to building classical guitars. Each instrument is made quietly, carefully — shaped by chosen wood, a steady hand, and a clear tonal ideal.",
      philosophy: "Every piece of wood has its own character.",
      philosophyBody:
        "Shaping it into an instrument that gives the player room for tonal expression is the guiding idea of my work.\n\nThe foundation is formed by selected tonewoods that have been part of Michael Wichmann's collection for decades.",
      processKicker: "Workshop",
      processLink: "See the build process",
      contactInvite: "Every instrument begins with a conversation.",
      contactLink: "Get in touch",
    },
    instruments: {
      title: "Available Instruments",
      intro:
        "A small selection of recently completed guitars. Each instrument is unique — in wood, in voice, in character.",
      items: [
        {
          name: "Concert Guitar — Cedar / Rosewood",
          character:
            "Warm, carrying, with long sustain. A guitar that finds itself in the first hours and continues to mature over many years.",
          specs: [
            { label: "Top", value: "Western Red Cedar" },
            { label: "Back & Sides", value: "Indian Rosewood" },
            { label: "Scale", value: "650 mm" },
            { label: "Year", value: "2024" },
          ],
        },
        {
          name: "Concert Guitar — Spruce / Maple",
          character:
            "Clear, transparent and balanced. Particularly suited to polyphonic playing and an open, speaking tone.",
          specs: [
            { label: "Top", value: "European Spruce" },
            { label: "Back & Sides", value: "Flamed Maple" },
            { label: "Scale", value: "650 mm" },
            { label: "Year", value: "2024" },
          ],
        },
        {
          name: "Concert Guitar — Cedar / Ziricote",
          character:
            "Dark in the fundamental, with fine resolution in the upper register. An instrument for quiet, searching music.",
          specs: [
            { label: "Top", value: "Western Red Cedar" },
            { label: "Back & Sides", value: "Ziricote" },
            { label: "Scale", value: "648 mm" },
            { label: "Year", value: "2023" },
          ],
        },
      ],
    },
    commission: {
      title: "Commission a Guitar",
      intro:
        "Building an instrument to order is a shared journey. It begins with listening and ends with a guitar that belongs to your playing and your imagination.",
      sections: [
        {
          title: "Conversation",
          text:
            "It begins with a conversation — about tonal ideas, playing habits, repertoire. Much is decided here, long before the first piece of wood is chosen.",
        },
        {
          title: "Planning & Preferences",
          text:
            "Scale, neck profile, string spacing, top wood, construction — we go through each point calmly. Your experience with other instruments is part of it.",
        },
        {
          title: "Wood Selection",
          text:
            "From years of carefully aged stock we choose top, back and sides together. Each piece has its own character — visible and audible.",
        },
        {
          title: "Building Phase",
          text:
            "The build itself takes several months. On request, I share the process with images and short notes from the workshop.",
        },
        {
          title: "Completion",
          text:
            "The finished instrument is carefully played in and set up. Handover is in person, with time to play, listen and understand.",
        },
      ],
    },
    construction: {
      title: "Construction",
      intro:
        "My way of building has grown — out of the Spanish tradition and out of thirty years of work in my own workshop. What remains is a quiet, clear line.",
      blocks: [
        {
          title: "Tonewoods",
          text:
            "Every piece of wood brings its own properties, which are taken into account in the instrument.\n\nFor the top I use spruce or cedar; for back and sides both tropical and native woods from the stock that Michael Wichmann has built up over decades.\n\nSelected tonewoods form the foundation of every guitar.",
        },
        {
          title: "Construction",
          text:
            "The construction is based on the traditional Spanish guitar making and is further developed through my own approaches and the targeted use of modern measuring methods.\n\nA lightly built instrument with high responsiveness is at the centre, allowing a direct attack and an open sound.\n\nThe surfaces are hand-polished with shellac.",
        },
        {
          title: "Playability",
          text:
            "For a guitar to become a coherent instrument, I match all components so that the sound can unfold freely.\n\nThe central point is the individual adjustment to the needs of the player and an easy playability.",
        },
      ],
    },
    contact: {
      title: "Contact",
      intro:
        "Please write to me — about a specific instrument, about a commission, or simply with a question. I reply personally, and without haste.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      email: "kontakt@dittmann-guitars.de",
      phone: "+49 30 1234 5678",
      location: "Workshop — Berlin",
      closing: "I look forward to your message.",
    },
    footer: {
      maker: "Michael Dittmann",
      tag: "Handmade Classical Guitars",
      rights: "All rights reserved.",
    },
    common: {
      readMore: "Read more",
      back: "Back",
    },
  },
} as const;

export type Dict = typeof dict.de;
