import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { LanguageSwitch } from "./LanguageSwitch";
import { pathFor, useT } from "@/i18n/useT";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { t, locale } = useT();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guitarsOpen, setGuitarsOpen] = useState(false);

  const isHome = location.pathname === `/${locale}` || location.pathname === `/${locale}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setGuitarsOpen(false);
  }, [location.pathname]);

  const guitarsItems = [
    { to: pathFor("instruments", locale), label: t.nav.instruments },
    { to: pathFor("commission", locale), label: t.nav.commission },
  ];

  const otherItems = [
    { to: pathFor("construction", locale), label: t.nav.construction },
    { to: pathFor("contact", locale), label: t.nav.contact },
  ];

  const transparent = isHome && !scrolled && !mobileOpen;
  const guitarsActive = guitarsItems.some((i) => location.pathname === i.to);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-soft",
        transparent
          ? "bg-transparent"
          : "bg-background/85 backdrop-blur-md border-b border-border/60",
      )}
    >
      <div className="container flex items-center justify-between py-5 md:py-6">
        <Link
          to={`/${locale}`}
          className={cn(
            "font-display text-base md:text-lg tracking-tight transition-soft",
            transparent ? "text-background mix-blend-difference" : "text-foreground",
          )}
        >
          Michael Dittmann
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {/* Guitars dropdown — not clickable itself */}
          <div
            className="relative"
            onMouseEnter={() => setGuitarsOpen(true)}
            onMouseLeave={() => setGuitarsOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={guitarsOpen}
              onClick={() => setGuitarsOpen((v) => !v)}
              className={cn(
                "link-underline font-sans text-[13px] tracking-wide transition-soft inline-flex items-center gap-1 cursor-default",
                transparent ? "text-background mix-blend-difference" : "text-foreground/80 hover:text-foreground",
              )}
              data-active={guitarsActive ? "true" : "false"}
            >
              {t.nav.guitars}
              <ChevronDown className="size-3" />
            </button>
            <div
              className={cn(
                "absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-soft",
                guitarsOpen ? "opacity-100 visible" : "opacity-0 invisible",
              )}
            >
              <div className="min-w-[14rem] bg-background border border-border/60 rounded-lg shadow-lg py-2">
                {guitarsItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="block px-5 py-2.5 font-sans text-[13px] tracking-wide text-foreground/80 hover:text-foreground hover:bg-muted/60 transition-soft"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {otherItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "link-underline font-sans text-[13px] tracking-wide transition-soft",
                transparent ? "text-background mix-blend-difference" : "text-foreground/80 hover:text-foreground",
              )}
              data-active={location.pathname === item.to ? "true" : "false"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <div className={cn(transparent && "mix-blend-difference")}>
            <LanguageSwitch />
          </div>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "md:hidden p-2 -mr-2 transition-soft",
            transparent ? "text-background mix-blend-difference" : "text-foreground",
          )}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-soft border-t border-border/60",
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container py-8 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-display text-2xl text-foreground/60">{t.nav.guitars}</span>
            <div className="pl-4 flex flex-col gap-3">
              {guitarsItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="font-display text-xl text-foreground"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          {otherItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="font-display text-2xl text-foreground"
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-border/60">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};
