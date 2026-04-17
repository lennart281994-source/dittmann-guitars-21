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
import aboutBg from "@/assets/about-bg.jpg";

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
          {/* Subtle left gradient — improves text legibility, leaves the wood on the right untouched */}
          <div className="absolute inset-y-0 left-0 w-2/3 md:w-1/2 bg-gradient-to-r from-foreground/25 via-foreground/10 to-transparent" />
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
      </section>

      {/* TWO PATHS */}
      <section className="container py-28 md:py-40">

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

      {/* CONTACT INVITATION */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <div className="border-t border-border/70" />
          <div className="py-12 md:py-16 space-y-8 md:space-y-10">
            <p className="font-display italic text-2xl md:text-3xl leading-relaxed text-foreground">
              {t.home.contactInvite}
            </p>
            <div>
              <Link
                to={pathFor("contact", locale)}
                className="link-underline font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-soft"
              >
                {t.home.contactLink}
              </Link>
            </div>
          </div>
          <div className="border-b border-border/70" />
        </div>
      </section>

      {/* PROCESS ENTRY */}
      <section className="py-12 md:py-20">
        <div className="relative w-full overflow-hidden">
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
          <div className="absolute inset-x-0 bottom-0 pointer-events-none">
            <div className="h-32 bg-gradient-to-t from-foreground/60 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-6 md:bottom-10 flex justify-center">
            <a
              href="https://www.instagram.com/dittmann.guitars/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-display text-lg md:text-xl text-background inline-flex items-center gap-3"
            >
              {t.home.processLink}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
