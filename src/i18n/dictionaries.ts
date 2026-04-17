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
      title: "Verfügbare Gitarren",
      intro:
        "Eine kleine Auswahl gerade fertiggestellter Gitarren. Jedes Instrument ist einzigartig — in Holzwahl, Klang und Charakter.",
      inquireCta: "Anfrage zu diesem Instrument",
      items: [
        {
          name: "Konzertgitarre",
          character:
            "Ein heller, klarer Klang mit feiner Ansprache. Leicht gebaut, reagiert sie unmittelbar und macht jede Nuance hörbar.",
          specs: [
            { label: "Decke", value: "Fichte" },
            { label: "Boden & Zargen", value: "Vogelaugen-Ahorn" },
            { label: "Mensur", value: "640 mm" },
            { label: "Sattel", value: "52 mm" },
            { label: "Form und Beleistung", value: "nach Torres FE19" },
            { label: "Oberfläche", value: "Schellack Handpolitur" },
          ],
        },
      ],
    },
    commission: {
      title: "Ihr Weg zum Instrument",
      intro: "",
      contactCta: "Kontakt aufnehmen",
      sections: [
        {
          title: "Erleben",
          text:
            "Meine verfügbaren Instrumente können nach Absprache im Laden von Michael Wichmann in Hamburg oder in 19294 Malliß in Ruhe angespielt werden.",
        },
        {
          title: "Individuelle Anfertigung",
          text:
            "Gerne baue ich auch Gitarren individuell auf Sie abgestimmt.\n\nIn einem Gespräch – telefonisch oder vor Ort – klären wir Ihre Vorstellungen und die verschiedenen Möglichkeiten.\nNach der Entscheidung folgt die Auswahl der Hölzer.\nAktuell beträgt die Bauzeit etwa drei Monate.\n\nMeine Arbeit wird von Michael Wichmann, mit einem halben Jahrhundert Erfahrung im Gitarrenbau, begleitet.",
        },
        {
          title: "Kennenlernen",
          text:
            "Am Anfang steht immer ein Gespräch.\nGanz gleich, ob Sie sich für ein bestehendes Instrument interessieren oder ein neues anfertigen lassen möchten: Schreiben Sie mir oder rufen Sie mich an.",
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
      title: "Available Guitars",
      intro:
        "A small selection of recently completed guitars. Each instrument is unique — in wood, in voice, in character.",
      inquireCta: "Inquire about this instrument",
      items: [
        {
          name: "Concert Guitar",
          character:
            "A bright, clear sound with fine response. Lightly built, it reacts immediately and makes every nuance audible.",
          specs: [
            { label: "Top", value: "Spruce" },
            { label: "Back & Sides", value: "Bird's-eye Maple" },
            { label: "Scale", value: "640 mm" },
            { label: "Nut", value: "52 mm" },
            { label: "Shape & Bracing", value: "after Torres FE19" },
            { label: "Finish", value: "French polish (shellac)" },
          ],
        },
      ],
    },
    commission: {
      title: "Your Path to the Instrument",
      intro: "",
      contactCta: "Get in touch",
      sections: [
        {
          title: "Experience",
          text:
            "My available instruments can be played in person, by appointment, at Michael Wichmann's shop in Hamburg or in 19294 Malliß.",
        },
        {
          title: "Custom Build",
          text:
            "I am happy to build guitars individually tailored to you.\n\nIn a conversation – by phone or in person – we discuss your ideas and the various possibilities.\nOnce decided, we choose the woods together.\nCurrent build time is approximately three months.\n\nMy work is accompanied by Michael Wichmann, with half a century of experience in guitar making.",
        },
        {
          title: "Getting in Touch",
          text:
            "It always begins with a conversation.\nWhether you are interested in an existing instrument or would like a new one made: write to me or give me a call.",
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
