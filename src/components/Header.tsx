import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LanguageSwitch } from "./LanguageSwitch";
import { pathFor, useT } from "@/i18n/useT";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { t, locale } = useT();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = location.pathname === `/${locale}` || location.pathname === `/${locale}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: pathFor("instruments", locale), label: t.nav.instruments },
    { to: pathFor("commission", locale), label: t.nav.commission },
    { to: pathFor("construction", locale), label: t.nav.construction },
    { to: pathFor("contact", locale), label: t.nav.contact },
  ];

  const transparent = isHome && !scrolled && !mobileOpen;

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
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "link-underline font-sans text-[13px] tracking-wide transition-soft",
                  transparent ? "text-background mix-blend-difference" : "text-foreground/80 hover:text-foreground",
                )
              }
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
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container py-8 flex flex-col gap-6">
          {navItems.map((item) => (
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
