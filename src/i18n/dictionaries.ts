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
      home: "Startseite",
      guitars: "Gitarren",
      instruments: "Verfügbare Gitarren",
      commission: "Individuelle Anfertigung",
      construction: "Bauweise",
      contact: "Kontakt",
    },
    home: {
      heroName: "Handgebaute Konzertgitarren",
      heroSub: "von Michael Dittmann",
      twoPathsKicker: "Zwei Wege",
      pathAvailable: "Gitarren",
      pathCommission: "Anfertigung",
      aboutTitle: "Über",
      aboutText:
        "Meine Faszination für die klassische Gitarre begann in Asturien im Norden Spaniens, wo ich auf einem Gnadenhof für Esel gearbeitet habe.\n\nDer Klang einer guten Gitarre führt mich bis heute an diesen Ort zurück. Im Gitarrenbau suche ich meinen eigenen Zugang zu diesem Klang.\n\nNach ersten Instrumenten aus Neugier führte mich mein Weg zu Michael Wichmann. Seitdem arbeite und lerne ich in seiner Werkstatt und entwickle meine eigene klangliche Handschrift.",
      philosophy: "Jedes Stück Holz hat seinen eigenen Charakter.",
      philosophyBody:
        "Hieraus ein Instrument zu formen, das den Spielenden Raum zur klanglichen Entfaltung gibt, ist der Grundgedanke meiner Arbeit.\n\nDie Basis bilden ausgewählte Tonhölzer, die sich seit Jahrzehnten in der Sammlung von Michael Wichmann befinden.",
      processKicker: "Werkstatt",
      processLink: "Bauprozess ansehen",
      contactInvite:
        "Meine Instrumente können nach Absprache in Michael Wichmanns Laden in Hamburg oder in Malliß in Ruhe angespielt werden.",
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
      intro:
        "Ich baue Gitarren, die auf den Spieler abgestimmt sind.\n\nAm Anfang steht ein Gespräch – telefonisch oder vor Ort.\nGemeinsam klären wir Ihre Vorstellungen und die Möglichkeiten.\n\nNach der Entscheidung folgt die Auswahl der Hölzer.\nDie Bauzeit beträgt aktuell etwa drei Monate.",
      contactCta: "Kontakt aufnehmen",
      sections: [
        {
          title: "Modelle",
          text:
            "Ich baue Konzert- und Flamencogitarren.\nZukünftig entstehen auch Doubletop-Instrumente.",
        },
        {
          title: "Materialien",
          text:
            "Ich arbeite mit Fichte und Zeder als Deckenholz.\nFür Boden und Zargen stehen sowohl heimische als auch tropische Hölzer zur Auswahl – aus dem Bestand von Michael Wichmann.\n\nAlle Instrumente werden von Hand in Schellack poliert.",
        },
        {
          title: "Begleitung",
          text:
            "Meine Arbeit wird von Michael Wichmann begleitet, der auf über fünf Jahrzehnte Erfahrung im Gitarrenbau zurückblickt.",
        },
        {
          title: "Kennenlernen",
          text:
            "Am Anfang steht ein Gespräch.\nOb bestehendes Instrument oder neue Gitarre – schreiben Sie mir oder rufen Sie mich an.",
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
      intro: "Ich freue mich auf Ihre Nachricht",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      whatsappLabel: "WhatsApp",
      whatsappText: "Direkt schreiben",
      whatsappHint: "Schreiben Sie mir gerne unkompliziert per WhatsApp.",
      email: "mail@michaeldittmann.com",
      phone: "+49 1788944568",
      whatsappNumber: "491788944568",
      whatsappPrefill: "Hallo Herr Dittmann, ich interessiere mich für Ihre Gitarren.",
      formTitle: "Kontakt aufnehmen",
      formName: "Ihr Name",
      formEmail: "Ihre E-Mail-Adresse",
      formMessage: "Ihre Nachricht",
      formSubmit: "Nachricht senden",
      formSuccess: "Vielen Dank — Ihre Nachricht ist unterwegs.",
      formError: "Bitte überprüfen Sie Ihre Eingaben.",
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
      home: "Home",
      guitars: "Guitars",
      instruments: "Guitars",
      commission: "Custom Build",
      construction: "Construction",
      contact: "Contact",
    },
    home: {
      heroName: "Handmade Classical Guitars",
      heroSub: "by Michael Dittmann",
      twoPathsKicker: "Two Paths",
      pathAvailable: "Guitars",
      pathCommission: "Custom Build",
      aboutTitle: "About",
      aboutText:
        "My fascination for the classical guitar began in Asturias in northern Spain, where I worked on a sanctuary for donkeys.\n\nThe sound of a good guitar still takes me back to that place. In guitar making, I am searching for my own way into this sound.\n\nAfter the first instruments built out of curiosity, my path led me to Michael Wichmann. Since then I have been working and learning in his workshop, developing my own tonal voice.",
      philosophy: "Every piece of wood has its own character.",
      philosophyBody:
        "Shaping it into an instrument that gives the player room for tonal expression is the guiding idea of my work.\n\nThe foundation is formed by selected tonewoods that have been part of Michael Wichmann's collection for decades.",
      processKicker: "Workshop",
      processLink: "Watch process",
      contactInvite:
        "My instruments can be played by appointment, at Michael Wichmann's shop in Hamburg or in Malliß.",
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
      title: "Custom Build",
      intro:
        "I build guitars tailored to the player.\n\nIt begins with a conversation – by phone or in person.\nTogether we clarify your ideas and the possibilities.\n\nOnce decided, we choose the woods.\nCurrent build time is approximately three months.",
      contactCta: "Get in touch",
      sections: [
        {
          title: "Models",
          text:
            "I build classical and flamenco guitars.\nDoubletop instruments will follow in the future.",
        },
        {
          title: "Materials",
          text:
            "I work with spruce and cedar for the top.\nFor back and sides, both native and tropical woods are available – from Michael Wichmann's stock.\n\nAll instruments are hand-polished with shellac.",
        },
        {
          title: "Mentorship",
          text:
            "My work is accompanied by Michael Wichmann, who looks back on more than five decades of experience in guitar making.",
        },
        {
          title: "Getting in Touch",
          text:
            "It always begins with a conversation.\nWhether an existing instrument or a new guitar – write to me or give me a call.",
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
      intro: "I look forward to your message",
      emailLabel: "Email",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      whatsappText: "Message me directly",
      whatsappHint: "Feel free to write to me on WhatsApp.",
      email: "mail@michaeldittmann.com",
      phone: "+49 1788944568",
      whatsappNumber: "491788944568",
      whatsappPrefill: "Hello Mr Dittmann, I am interested in your guitars.",
      formTitle: "Get in touch",
      formName: "Your name",
      formEmail: "Your email address",
      formMessage: "Your message",
      formSubmit: "Send message",
      formSuccess: "Thank you — your message is on its way.",
      formError: "Please check your entries.",
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
