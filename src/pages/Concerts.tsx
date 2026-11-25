import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { concertsConfig as c } from "@/config/concerts";
import { AtelierRule } from "@/components/AtelierBackdrop";
import { ExternalEmbed } from "@/components/ExternalEmbed";
import { openLegal } from "@/lib/consent";

const useSeo = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = meta?.content;
    document.title = c.seo.title;
    if (meta) meta.content = c.seo.description;
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc) meta.content = prevDesc;
    };
  }, []);
};

const PretixWidget = ({ url }: { url: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!document.getElementById("pretix-css")) {
      const l = document.createElement("link");
      l.id = "pretix-css";
      l.rel = "stylesheet";
      l.href = `${url.replace(/\/$/, "")}/widget/v2.css`;
      l.crossOrigin = "";
      document.head.appendChild(l);
    }
    if (ref.current) {
      ref.current.innerHTML = `<pretix-widget event="${url.replace(/"/g, "")}"></pretix-widget>`;
    }
    if (!document.getElementById("pretix-js")) {
      const s = document.createElement("script");
      s.id = "pretix-js";
      s.async = true;
      s.src = `${new URL(url).origin}/widget/v2.de-informal.js`;
      s.crossOrigin = "";
      document.body.appendChild(s);
    } else {
      (window as unknown as { PretixWidget?: { buildWidgets: () => void } }).PretixWidget?.buildWidgets();
    }
  }, [url]);
  return <div ref={ref} />;
};

const Kicker = ({ children, light }: { children: string; light?: boolean }) => (
  <p className={`text-[11px] uppercase tracking-[0.2em] ${light ? "text-background/85" : "text-muted-foreground"}`}>
    {children}
  </p>
);

// Direktlink: /concerts#newsletter springt zur Anmeldung (auch bei Erstaufruf).
const useHashScroll = () => {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const go = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    const t1 = setTimeout(go, 100);
    const t2 = setTimeout(go, 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
};

const Concerts = () => {
  useSeo();
  useHashScroll();
  const t = c.text;
  const n = c.nextConcert;

  return (
    <>
      {/* 1 — Banner */}
      <section className="panel-gradient relative w-full overflow-hidden text-panel-foreground">
        <div className="relative pt-20 md:pt-24">
          <img
            src={c.images.hero}
            alt="Gitarren, Werkbank und Lampe im Gitarrenatelier Michael Wichmann"
            className="w-full aspect-[7/2] object-cover object-[center_40%]"
            width={1279}
            height={851}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-panel md:h-16"
            aria-hidden="true"
          />
        </div>
        <div className="relative container py-10 md:py-12 text-center max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-panel-muted">{t.kicker}</p>
          <h1 className="mt-4 font-display font-light uppercase text-panel-foreground text-[2rem] sm:text-5xl md:text-6xl tracking-[0.04em] sm:tracking-[0.08em]">
            {t.title}
          </h1>
          <AtelierRule className="mt-5" />
          <p className="mt-5 font-display italic text-panel-muted text-lg md:text-2xl">{t.subtitle}</p>
          <p className="mt-4 text-panel-muted text-sm md:text-base leading-relaxed">{t.intro1} {t.intro2}</p>
          <p className="mt-6 text-panel-foreground text-xs md:text-sm uppercase tracking-[0.18em] font-medium">{t.facts}</p>
          <a
            href="#reservierung"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-panel-foreground text-panel px-7 py-3 text-xs uppercase tracking-[0.2em] hover:bg-panel-foreground/90 transition-soft"
          >
            {t.reserveButton} <ArrowRight className="size-3.5" />
          </a>
        </div>
      </section>

      {/* 2 — Idee */}
      <section className="container py-14 md:py-20 max-w-3xl">
        <div>
          <Kicker>Die Idee</Kicker>
          <h2 className="mt-3 font-display text-2xl md:text-3xl mb-5">{t.ideaTitle}</h2>
          <p className="text-[15px] text-foreground/80 leading-[1.75] whitespace-pre-line">{t.ideaText}</p>
          <p className="mt-6 border-l-2 border-accent pl-4 font-display italic text-foreground/85 leading-relaxed">{t.ideaCredit}</p>
        </div>
      </section>

      {/* 2 — Nächstes Konzert + Reservierung */}
      <section id="reservierung" className="bg-muted/50 border-y border-border scroll-mt-20">
        <div className="container py-12 md:py-16 max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="rounded-full bg-accent text-accent-foreground px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
              Nächster Termin
            </span>
            <h2 className="font-display text-2xl md:text-3xl">{t.nextTitle}</h2>
          </div>
          {c.pretixEventUrl ? (
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 md:gap-8 items-stretch">
              <article className="flex flex-col rounded-2xl border border-border bg-background overflow-hidden">
                <div className="grid sm:grid-cols-[180px_1fr]">
                  <div className="aspect-[4/5] sm:aspect-auto bg-muted">
                    <img src={n.image} alt={`Gitarrist ${n.artist}`} className="w-full h-full object-cover object-[center_45%]" loading="lazy" />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-3xl">{n.artist}</h3>
                    <div>
                      <p className="font-display text-lg md:text-xl text-foreground">{n.date}</p>
                      <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium">{n.time}</p>
                    </div>
                    <address className="not-italic text-sm text-foreground/75 leading-relaxed">
                      {n.venue}<br />{n.address}
                      <br />
                      <a href={n.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block underline underline-offset-4 text-foreground hover:text-accent">
                        Route planen
                      </a>
                    </address>
                  </div>
                </div>
                <div className="flex-1 flex flex-col px-6 pb-6 pt-2 border-t border-border">
                  <p className="pt-4 text-sm text-foreground/80 leading-relaxed">{n.description}</p>
                  <p className="mt-auto pt-4 text-[11px] uppercase tracking-[0.18em] text-foreground/80">{t.infoLine}</p>
                </div>
              </article>

              <div className="rounded-2xl panel-gradient text-panel-foreground p-5 sm:p-7">
                <h3 className="font-display text-2xl md:text-3xl">{t.reserveTitle}</h3>
                <p className="mt-3 text-sm text-panel-muted leading-relaxed">{t.reservationInfo}</p>
                <p className="mt-4 border-l-2 border-accent pl-4 text-sm font-semibold text-panel-foreground leading-relaxed">
                  {t.reservationGuestlist}
                </p>
                <p className="mt-3 text-sm text-panel-muted leading-relaxed">{t.reservationFree}</p>
                <div className="pretix-host mt-6 rounded-xl bg-background text-foreground p-4">
                  <PretixWidget url={c.pretixEventUrl} />
                </div>
                <p className="mt-4 text-sm text-panel-muted italic font-display">{t.waitlist}</p>
              </div>
            </div>
          ) : (
            <div className="max-w-xl space-y-4">
              <p className="font-display italic text-2xl">{t.noConcert}</p>
              <a href="#newsletter" className="link-underline text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-soft">
                {t.noConcertLink}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* 4 — Online */}
      <section className="container py-14 md:py-20 max-w-3xl">
        <div>
          <Kicker>Online</Kicker>
          <h2 className="mt-3 font-display text-2xl md:text-3xl mb-5">{t.onlineTitle}</h2>
          <p className="text-[15px] text-foreground/80 leading-[1.75]">{t.onlineText}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            {c.youtubeLiveUrl ? (
              <a
                href={c.youtubeLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-accent/90 transition-soft"
              >
                <span className="size-2 rounded-full bg-accent-foreground/80" aria-hidden="true" />
                {t.youtubeLiveLink} <ArrowRight className="size-3.5" />
              </a>
            ) : null}
            {c.youtubeUrl ? (
              <a href={c.youtubeUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 link-underline font-display">
                {t.youtubeLink} <ArrowRight className="size-4" />
              </a>
            ) : null}
            {!c.youtubeLiveUrl && !c.youtubeUrl ? (
              <p className="text-sm italic font-display text-muted-foreground">{t.youtubeSoon}</p>
            ) : null}
          </div>
        </div>
      </section>

      {/* 3b — Musiker-Kontakt */}
      <section className="container max-w-6xl pb-14 md:pb-20">
        <div className="rounded-2xl panel-gradient text-panel-foreground px-6 py-10 md:px-12 md:py-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-panel-muted">Für Musiker</p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl">{t.playTitle}</h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-panel-muted leading-relaxed">{t.playText}</p>
          <a
            href={`mailto:${c.musicianEmail}?subject=${encodeURIComponent(c.musicianSubject)}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-panel-foreground text-panel px-7 py-3 text-xs uppercase tracking-[0.2em] hover:bg-panel-foreground/90 transition-soft"
          >
            {t.playButton} <ArrowRight className="size-3.5" />
          </a>
          <p className="mt-5 text-sm text-panel-muted">
            {t.playQuestions}{" "}
            <a href={`mailto:${c.musicianEmail}`} className="underline underline-offset-4 text-panel-foreground inline-block">{c.musicianEmail}</a>
          </p>
        </div>
      </section>

      {/* 4 — Newsletter */}
      <section id="newsletter" className="scroll-mt-20 container max-w-6xl pb-16 md:pb-24">
        <div className="rounded-2xl border border-border bg-muted/50 px-4 py-8 md:px-10 md:py-10 text-center">
          <div>
            <Kicker>Newsletter</Kicker>
            <h2 className="mt-3 font-display text-2xl md:text-3xl mb-4">{t.newsletterTitle}</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{t.newsletterText}</p>
          </div>
          <div className="mt-4 mx-auto max-w-xl">
            {c.brevoFormUrl ? (
              <ExternalEmbed
                provider="Brevo, Google reCAPTCHA"
                buttonLabel="Anmeldeformular laden"
                className="min-h-[220px]"
                note={t.newsletterLoadNote}
                preview={
                  <div className="rounded-xl border border-border bg-background p-5 text-left space-y-3">
                    <label className="block text-sm text-foreground">E-Mail-Adresse
                      <input type="email" placeholder="deine@email.de" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                    </label>
                    <button type="button" className="w-full rounded-full bg-accent text-accent-foreground px-6 py-2.5 text-xs uppercase tracking-[0.18em]">Anmelden</button>
                    <p className="text-[11px] text-muted-foreground">Beim Antippen wird das Formular von Brevo (inkl. Google reCAPTCHA) geladen.</p>
                  </div>
                }
              >
                <iframe src={c.brevoFormUrl} title="Newsletter-Anmeldung" className="w-full h-[520px] md:h-[460px] border-0 rounded-xl" loading="lazy" />
              </ExternalEmbed>
            ) : (
              <p className="font-display italic text-foreground/80">{t.newsletterSoon}</p>
            )}
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              {t.newsletterPrivacy}{" "}
              <button type="button" onClick={() => openLegal("datenschutz")} className="underline underline-offset-4 text-foreground">
                Zur Datenschutzerklärung
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Concerts;
