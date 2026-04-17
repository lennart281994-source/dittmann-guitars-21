import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { pathFor, useT } from "@/i18n/useT";
import { cn } from "@/lib/utils";
import hero from "@/assets/hero.jpg";
import pathAvailable from "@/assets/path-available.jpg";
import pathCommission from "@/assets/path-commission.jpg";
import maker from "@/assets/maker.jpg";
import process from "@/assets/process.jpg";

const Home = () => {
  const { t, locale } = useT();
  const [activePath, setActivePath] = useState<"available" | "commission">("available");

  return (
    <>
      {/* HERO — fullscreen media slot, ready to be swapped for video */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0">
          {/*
            To later replace with video, swap this <img> for:
            <video src="/your-video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
          */}
          <img
            src={hero}
            alt="Handgebaute Konzertgitarre auf einer Werkbank"
            className="w-full h-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/10 to-foreground/20" />
        </div>

        <div className="relative h-full container flex items-end pb-16 md:pb-24">
          <div className="animate-soft-fade-in">
            <h1 className="font-display text-background text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              {t.home.heroName}
            </h1>
            <p className="mt-3 font-sans text-background/85 text-sm md:text-base tracking-wide">
              {t.home.heroSub}
            </p>
          </div>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="container py-28 md:py-40">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-12 md:mb-20">
          {t.home.twoPathsKicker}
        </p>

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
          <div className="flex flex-col gap-10 md:gap-14">
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
              <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5 max-w-md mx-auto md:mx-0 w-full">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted max-h-[70vh]">
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
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
              {t.home.aboutTitle}
            </p>
            <p className="font-display leading-snug text-foreground whitespace-pre-line text-base">
              {t.home.aboutText}
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY STRIP */}
      <section className="py-28 md:py-40">
        <div className="container max-w-3xl text-center">
          <div className="border-t border-border/70" />
          <div className="py-16 md:py-20 space-y-8 md:space-y-10">
            <p className="font-display italic text-2xl md:text-3xl leading-relaxed text-foreground">
              {t.home.philosophy}
            </p>
            <p className="font-display text-base md:text-lg leading-relaxed text-muted-foreground whitespace-pre-line max-w-2xl mx-auto">
              {t.home.philosophyBody}
            </p>
          </div>
          <div className="border-b border-border/70" />
        </div>
      </section>

      {/* PROCESS ENTRY */}
      <section className="py-12 md:py-20">
        <div className="w-full overflow-hidden">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full">
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
        <div className="container mt-10 md:mt-14 flex justify-center">
          <Link
            to={pathFor("construction", locale)}
            className="link-underline font-display text-lg md:text-xl text-foreground inline-flex items-center gap-3"
          >
            {t.home.processLink}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* CONTACT INVITATION */}
      <section className="container py-32 md:py-40 text-center">
        <p className="font-display italic text-xl md:text-2xl text-foreground">
          {t.home.contactInvite}
        </p>
        <div className="mt-6">
          <Link
            to={pathFor("contact", locale)}
            className="link-underline font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-soft"
          >
            {t.home.contactLink}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
