import { Link } from "react-router-dom";
import { LanguageSwitch } from "./LanguageSwitch";
import { LegalDialogs } from "./LegalDialogs";
import { pathFor, useT } from "@/i18n/useT";

export const Footer = () => {
  const { t, locale } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/70">
      <div className="container py-8">
        <div className="grid gap-6 md:grid-cols-3 md:gap-8 items-start">
          {/* Left: brand + tagline + contact */}
          <div className="space-y-4">
            <Link to={`/${locale}`} className="font-display text-lg text-foreground block">
              {t.footer.maker}
            </Link>
            <p className="text-sm text-muted-foreground">{t.footer.tag}</p>
            <div className="text-sm text-muted-foreground flex flex-col gap-1 pt-2">
              <a
                href={`mailto:${t.contact.email}`}
                className="link-underline self-start hover:text-foreground transition-soft"
              >
                {t.contact.email}
              </a>
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                className="link-underline self-start hover:text-foreground transition-soft"
              >
                {t.contact.phone}
              </a>
            </div>
          </div>

          {/* Middle: navigation */}
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground md:items-center">
            <Link
              to={pathFor("instruments", locale)}
              className="link-underline hover:text-foreground transition-soft"
            >
              {t.nav.instruments}
            </Link>
            <Link
              to={pathFor("commission", locale)}
              className="link-underline hover:text-foreground transition-soft"
            >
              {t.nav.commission}
            </Link>
            <Link
              to={pathFor("construction", locale)}
              className="link-underline hover:text-foreground transition-soft"
            >
              {t.nav.construction}
            </Link>
            <Link
              to={pathFor("contact", locale)}
              className="link-underline hover:text-foreground transition-soft"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right: legal + language */}
          <div className="space-y-4 md:text-right md:flex md:flex-col md:items-end">
            <LegalDialogs />
            <LanguageSwitch />
          </div>
        </div>

        {/* Bottom: centered copyright */}
        <div className="mt-6 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground/80">
            © {year} {t.footer.maker} – Gitarrenbau. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
