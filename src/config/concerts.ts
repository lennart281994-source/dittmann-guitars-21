// ============================================================
// ATELIERKONZERTE — alle Inhalte & Einstellungen an einem Ort.
// Bilder und Texte hier austauschen; Widgets hier eintragen.
// ============================================================
import heroImage from "@/assets/wichmann-workshop.webp";
import ideaImage from "@/assets/process.jpg";
import nextArtistImage from "@/assets/daniel-molina-gitarre.jpg";

export const concertsConfig = {
  // pretix: Adresse der Veranstaltung (oder des Shops), z. B.
  // "https://pretix.eu/dittmann/atelierkonzert-1/". Leer = Hinweis "bald bekanntgegeben".
  pretixEventUrl: "https://pretix.eu/atelierkonzerte/131226/",

  // Brevo: URL des eingebetteten Formulars (Brevo → Formulare → Teilen → iframe "src"),
  // z. B. "https://XXXX.sibforms.com/serve/XXXX". Leer = Hinweis statt Formular.
  brevoFormUrl: "https://ff08a118.sibforms.com/serve/MUIFAA5nYLqL209-RZPVmoN5qKsIdkz0cMbj5kjmF5jabuzOF_wjhibtzRC6R7TC4GE-HQTtzK86T0IAGuhcPRj2qaC51LpSfBzVHfLITeol0xagpZvMVOl0RiwjsA0DudGnWF_SepVey3hbLUnKUTVJzaCdKGiHWfssYrXlbykFnoHJGAw6ieK3ucJFG4odeO-U7t_YdESv-gACYg==",

  // YouTube-Livestream des nächsten Konzerts. Nach dem Konzert führt die Adresse
  // zur Aufzeichnung. Leer = kein Livestream-Hinweis.
  youtubeLiveUrl: "https://www.youtube.com/live/LZQjbHLAA3w",

  // YouTube-Kanal oder Playlist der Konzertaufnahmen. Leer = kein Link.
  // Hier die Adresse eintragen, z. B. "https://www.youtube.com/@…"; leer = Hinweis "folgt in Kürze".
  youtubeUrl: "",
  // E-Mail für Musiker-Anfragen (Abschnitt „Du möchtest bei uns spielen?“).
  musicianEmail: "atelierkonzerte@michaeldittmann.com",
  musicianSubject: "Auftritt bei den Atelierkonzerten",
  instagramUrl: "https://www.instagram.com/dittmann.guitars/",

  images: { hero: heroImage, idea: ideaImage },

  // Nächstes Konzert — wird nur angezeigt, wenn pretixEventUrl gesetzt ist.
  nextConcert: {
    artist: "Daniel Molina",
    image: nextArtistImage,
    date: "Sonntag, 13. Dezember 2026",
    time: "17:00 Uhr",
    venue: "Gitarrenatelier Michael Wichmann, Hamburg",
    description: "Daniel Molina verbindet klassische Gitarrenmusik mit Werken aus Lateinamerika und Spanien. Zum Auftakt unserer Konzertreihe nimmt er dich mit auf eine musikalische Entdeckungsreise.",
  },

  text: {
    kicker: "Hamburg · Live aus der Gitarrenwerkstatt",
    title: "Atelierkonzerte",
    subtitle: "Die schönsten Konzerte sind manchmal die kleinsten.",
    intro1: "Erlebe außergewöhnliche Gitarrenmusik ganz nah – dort, wo handgebaute Instrumente entstehen und Gitarrenbauer und Musiker zusammenkommen.",
    intro2: "",
    facts: "20 Plätze · Eintritt frei",
    homeButton: "Atelierkonzerte entdecken",
    reserveButton: "Platz reservieren",
    nextTitle: "Das nächste Atelierkonzert",
    infoLine: "Nur 20 Plätze · Eintritt frei · Spenden willkommen",
    reserveTitle: "Sichere dir deinen Platz.",
    waitlist: "Schon ausgebucht? Trag dich auf die Warteliste ein. Wir informieren dich, sobald ein Platz frei wird.",
    reservationInfo: "Unsere Atelierkonzerte finden in einem kleinen Kreis mit maximal 20 Gästen statt. Damit wir besser planen können und jeder einen Platz bekommt, bitten wir um eine kostenlose Reservierung – bis zu zwei Plätze pro Person.",
    reservationGuestlist: "Du musst kein Ticket mitbringen – dein Name steht auf unserer Gästeliste.",
    reservationFree: "Falls du doch verhindert bist, gib deinen Platz bitte wieder frei, damit jemand anderes nachrücken kann.",
    noConcert: "Die nächsten Konzerttermine werden bald bekanntgegeben.",
    noConcertLink: "Zur Newsletter-Anmeldung",
    ideaTitle: "Mehr als ein Konzert.",
    ideaText: "Eine Gitarre entsteht in der Werkstatt. Ihre Stimme findet sie in den Händen eines Musikers.\n\nBei den Atelierkonzerten bringen wir beide Perspektiven zusammen: Gitarrenbauer und Gitarristen entdecken gemeinsam die klanglichen Möglichkeiten handgebauter Instrumente.\n\nZwischen den Stücken geben wir persönliche Einblicke in die Gitarren, ihre Besonderheiten und die Ideen dahinter. Die Musik bleibt dabei immer im Mittelpunkt.",
    newsletterTitle: "Verpasse kein Atelierkonzert.",
    newsletterText: "Erfahre vor allen anderen von unseren nächsten Konzerten und sichere dir frühzeitig einen der nur 20 Plätze.",
    newsletterSoon: "Die Newsletter-Anmeldung ist in Kürze hier verfügbar.",
    newsletterPrivacy:
      "Die Anmeldung ist freiwillig und unabhängig von einer Reservierung. Du erhältst eine E-Mail zur Bestätigung (Double-Opt-in) und kannst dich jederzeit abmelden. Der Versand erfolgt über Brevo.",
    newsletterLoadNote:
      "Das Anmeldeformular stammt von unserem Newsletter-Dienst Brevo und enthält Google reCAPTCHA zum Schutz vor Spam. Erst wenn du auf „Anmeldeformular laden“ klickst, werden Inhalte von Brevo und Google geladen und dabei u. a. deine IP-Adresse übertragen.",
    onlineTitle: "Auch von zu Hause dabei.",
    onlineText: "Keinen Platz bekommen? Erlebe unsere Konzerte live auf YouTube und entdecke anschließend die schönsten musikalischen Momente in unseren Konzertvideos.",
    youtubeLink: "Zum YouTube-Kanal",
    youtubeLiveLink: "Live auf YouTube ansehen",
    youtubeSoon: "Der YouTube-Kanal folgt in Kürze.",
    ideaCredit: "Eine Idee von Gitarrist Daniel Molina und Gitarrenbauer Michael Dittmann – zu Gast im traditionsreichen Gitarrenatelier von Michael Wichmann in Hamburg.",
    playTitle: "Du möchtest bei uns spielen?",
    playText: "Wir freuen uns über Gitarristinnen und Gitarristen, die Lust haben, ihre Musik bei den Atelierkonzerten zu präsentieren und gemeinsam mit uns besondere Instrumente zu entdecken.",
    playButton: "Als Musiker Kontakt aufnehmen",
    playQuestions: "Auch bei Fragen erreichst du uns unter",
  },

  seo: {
    title: "Atelierkonzerte — Klassische Gitarre live aus der Werkstatt in Hamburg",
    description:
      "Atelierkonzerte in Hamburg: junge Gitarristen, handgebaute Gitarren, nur 20 Plätze. Eintritt frei – jetzt kostenlos Platz reservieren oder Newsletter abonnieren.",
  },
};
