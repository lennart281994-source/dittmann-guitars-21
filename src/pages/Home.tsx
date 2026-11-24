import soundThumb from "@/assets/sound-video-thumb.jpg";
import { ExternalEmbed } from "@/components/ExternalEmbed";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { pathFor, useT } from "@/i18n/useT";
import { cn } from "@/lib/utils";
import hero from "@/assets/hero.jpg";
import pathAvailable from "@/assets/guitar-rosette.webp";
import pathCommission from "@/assets/path-commission.jpg";
import maker from "@/assets/maker.jpg";
import process from "@/assets/process.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import { concertsConfig as concerts } from "@/config/concerts";
import { AtelierRule } from "@/components/AtelierBackdrop";

const Home = () => {
  const { t, locale } = useT();
  const [activePath, setActivePath] = useState<"available" | "commission">("available");
  const heroRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const el = heroRef.current;
      if (!el) return;
      const height = el.offsetHeight || 1;
      // 0 at top of hero, 1 once user has scrolled one hero-height
      const raw = window.scrollY / height;
      const clamped = Math.max(0, Math.min(1, raw));
      setScrollProgress(clamped);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Eased progress for the tagline reveal — starts after a small scroll, fully visible by ~45%
  const taglineProgress = Math.max(0, Math.min(1, (scrollProgress - 0.08) / 0.35));
  // Overlay darkens up to ~18% as user scrolls through the hero
  const overlayOpacity = scrollProgress * 0.18;

  return (
    <>
      {/* HERO — fullscreen media slot, ready to be swapped for video */}
      <section ref={heroRef} className="relative h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0">
          {/*
            To later replace with video, swap this <img> for:
            <video src="/your-video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
          */}
          <img
            src={hero}
            alt="Handgebaute Konzertgitarre auf einer Werkbank"
            className="w-full h-full object-cover animate-image-fade-in"
            width={1920}
            height={1280}
          />
          {/* Subtle left gradient — improves text legibility, leaves the wood on the right untouched */}
          <div className="absolute inset-y-0 left-0 w-2/3 md:w-1/2 bg-gradient-to-r from-foreground/25 via-foreground/10 to-transparent" />
          {/* Scroll-driven darkening overlay — very subtle */}
          <div
            className="absolute inset-0 bg-foreground pointer-events-none"
            style={{ opacity: overlayOpacity, transition: "opacity 200ms linear" }}
          />
        </div>

        <div className="relative h-full container flex items-center">
          <div className="animate-soft-fade-in pl-2 md:pl-8 lg:pl-12 max-w-3xl -mt-[8vh] md:-mt-[10vh]">
            <h1 className="font-display font-light text-background text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[0.01em]">
              {t.home.heroName}
            </h1>
            <p className="mt-10 md:mt-14 font-display font-light italic text-background/85 text-base md:text-lg tracking-[0.05em]">
              {t.home.heroSub}
            </p>
          </div>
        </div>

        {/* Scroll-revealed tagline — softly appears as the user begins scrolling */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-[12vh] md:bottom-[14vh] flex justify-center px-6"
          style={{
            opacity: taglineProgress,
            transform: `translateY(${(1 - taglineProgress) * 8}px)`,
            transition: "opacity 300ms ease-out, transform 300ms ease-out",
          }}
        >
          <p className="font-display font-light italic text-background/90 text-sm md:text-base tracking-[0.18em] uppercase text-center [text-shadow:_0_1px_12px_hsl(var(--foreground)/0.5)]">
            {t.home.heroName}
          </p>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="container py-24 md:py-32">
        <div className="mb-14 md:mb-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t.home.twoPathsKicker}</p>
          <h2 className="mt-4 font-display font-light text-3xl md:text-5xl text-foreground">{t.home.twoPathsTitle}</h2>
          <div className="mx-auto mt-6 h-px w-12 bg-accent" aria-hidden="true" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image with soft crossfade */}
          <div className="relative aspect-[4/5] w-full max-w-sm md:max-w-md mx-auto max-h-[70vh] overflow-hidden rounded-2xl bg-muted">
            <img
              src={pathAvailable}
              alt=""
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-softer",
                activePath === "available" ? "opacity-100" : "opacity-0",
              )}
              width={1280}
              height={1280}
              loading="lazy"
            />
            <img
              src={pathCommission}
              alt=""
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-softer",
                activePath === "commission" ? "opacity-100" : "opacity-0",
              )}
              width={1280}
              height={1280}
              loading="lazy"
            />
          </div>

          {/* Options */}
          <div className="flex flex-col gap-10 md:gap-12 md:border-l md:border-border md:pl-12">
            <Link
              to={pathFor("instruments", locale)}
              onMouseEnter={() => setActivePath("available")}
              onFocus={() => setActivePath("available")}
              className={cn(
                "group block transition-soft",
                activePath === "available" ? "text-foreground" : "text-foreground/55 hover:text-foreground",
              )}
            >
              <span className="block font-display text-3xl md:text-5xl tracking-tight">
                <span className="link-underline" data-active={activePath === "available" ? "true" : "false"}>
                  {t.home.pathAvailable}
                </span>
              </span>
              <span className="mt-3 block max-w-sm text-sm md:text-base leading-relaxed text-muted-foreground">
                {t.home.pathAvailableText}
              </span>
              <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <ArrowRight className="size-3.5" />
              </span>
            </Link>

            <Link
              to={pathFor("commission", locale)}
              onMouseEnter={() => setActivePath("commission")}
              onFocus={() => setActivePath("commission")}
              className={cn(
                "group block transition-soft",
                activePath === "commission" ? "text-foreground" : "text-foreground/55 hover:text-foreground",
              )}
            >
              <span className="block font-display text-3xl md:text-5xl tracking-tight">
                <span className="link-underline" data-active={activePath === "commission" ? "true" : "false"}>
                  {t.home.pathCommission}
                </span>
              </span>
              <span className="mt-3 block max-w-sm text-sm md:text-base leading-relaxed text-muted-foreground">
                {t.home.pathCommissionText}
              </span>
              <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SOUND VIDEO — YouTube im erweiterten Datenschutzmodus */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container">
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t.home.soundKicker}</p>
          <h2 className="mt-4 font-display font-light text-3xl md:text-5xl text-foreground">{t.home.soundTitle}</h2>
          <div className="mx-auto mt-6 h-px w-12 bg-accent" aria-hidden="true" />
        </div>
        <div className="mx-auto w-full max-w-3xl aspect-video overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
          <ExternalEmbed provider="YouTube" poster={soundThumb} className="h-full w-full rounded-none border-0" buttonLabel="Video laden" note="Hier ist ein Video von YouTube eingebunden. Erst wenn Sie auf „Video laden“ klicken, wird eine Verbindung zu YouTube (Google) hergestellt und Ihre IP-Adresse übertragen.">
          <iframe
            src="https://www.youtube-nocookie.com/embed/JauK_--NGe0?autoplay=1"
            title="Klangbeispiel — Gitarre von Michael Dittmann"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
          </ExternalEmbed>
        </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        className="relative w-full overflow-hidden md:aspect-[21/9] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/55 to-foreground/45 md:bg-gradient-to-r md:from-foreground/80 md:via-foreground/55 md:to-foreground/20" />
        <div className="relative md:absolute md:inset-0 md:flex md:items-center py-16 md:py-0">
          <div className="container">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-6 max-w-md lg:max-w-lg order-2 md:order-1 [text-shadow:_0_1px_12px_hsl(var(--foreground)/0.6)]">
                <p className="text-[11px] uppercase tracking-[0.2em] text-background mb-4 md:mb-6">
                  {t.home.aboutTitle}
                </p>
                <p className="font-display leading-snug text-background whitespace-pre-line text-base md:text-lg">
                  {t.home.aboutText}
                </p>
              </div>
              <div className="md:col-span-5 md:col-start-8 max-w-[220px] md:max-w-md mx-auto md:mx-0 w-full order-1 md:order-2">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-2xl">
                  <img
                    src={maker}
                    alt="Michael Dittmann in seiner Werkstatt"
                    className="w-full h-full object-cover"
                    width={1280}
                    height={1600}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS ENTRY — heller Ruhepol */}
      <section className="container py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t.home.processKicker}</p>
            <h2 className="mt-4 font-display font-light text-3xl md:text-4xl leading-tight text-foreground">{t.home.philosophy}</h2>
            <div className="mt-6 h-px w-12 bg-accent" aria-hidden="true" />
            <p className="mt-6 whitespace-pre-line text-sm md:text-base leading-relaxed text-muted-foreground">{t.home.philosophyBody}</p>
            <a
              href="https://www.instagram.com/dittmann.guitars/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 link-underline font-display text-lg text-foreground inline-flex items-center gap-3"
            >
              {t.home.processLink}
              <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-sm">
              <img
                src={process}
                alt="Werkstatt mit Tonhölzern und Gitarrenkörpern"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ATELIERKONZERTE */}
      <section>
        <Link
          to="/concerts"
          className="panel-gradient group relative block w-full overflow-hidden text-panel-foreground"
        >
          <div className="relative">
            <img
              src={concerts.images.hero}
              alt="Gitarren, Werkbank und Lampe im Gitarrenatelier Michael Wichmann"
              className="w-full aspect-[7/2] object-cover object-[center_40%]"
              width={1279}
              height={851}
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-panel md:h-16"
              aria-hidden="true"
            />
          </div>
          <div className="relative container py-12 md:py-16 text-center max-w-2xl">
            <p className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.22em] text-panel-muted">
              <span className="h-px w-8 bg-panel-border" aria-hidden="true" />
              {concerts.text.kicker}
              <span className="h-px w-8 bg-panel-border" aria-hidden="true" />
            </p>
            <h2 className="mt-6 font-display font-light uppercase text-panel-foreground text-[2rem] sm:text-5xl md:text-6xl tracking-[0.04em] sm:tracking-[0.08em]">
              {concerts.text.title}
            </h2>
            <AtelierRule className="mt-7" />
            <p className="mt-7 font-display italic text-panel-muted text-xl md:text-2xl">{concerts.text.subtitle}</p>
            <p className="mx-auto mt-6 max-w-md text-sm md:text-base leading-relaxed text-panel-muted">
              {concerts.text.intro1} {concerts.text.intro2}
            </p>
            <p className="mt-8 text-panel-foreground text-xs md:text-sm uppercase tracking-[0.18em] font-medium">{concerts.text.facts}</p>
            <span className="mt-9 inline-flex items-center gap-2 rounded-full bg-panel-foreground text-panel px-7 py-3 text-xs uppercase tracking-[0.2em] group-hover:bg-panel-foreground/90 transition-soft">
              {concerts.text.homeButton} <ArrowRight className="size-3.5" />
            </span>
          </div>
        </Link>
      </section>

      {/* CONTACT INVITATION */}
      <section className="bg-secondary/60 py-24 md:py-32">
        <div className="container max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t.home.contactKicker}</p>
          <div className="mx-auto mt-6 h-px w-12 bg-accent" aria-hidden="true" />
          <p className="mt-8 font-display italic text-2xl md:text-3xl leading-relaxed text-foreground">
            {t.home.contactInvite}
          </p>
          <Link
            to={pathFor("contact", locale)}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-soft"
          >
            {t.home.contactLink} <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>

    </>
  );
};

export default Home;
