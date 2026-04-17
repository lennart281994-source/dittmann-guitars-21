import { Link } from "react-router-dom";
import { LanguageSwitch } from "./LanguageSwitch";
import { LegalDialogs } from "./LegalDialogs";
import { pathFor, useT } from "@/i18n/useT";

export const Footer = () => {
  const { t, locale } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-border/70">
      <div className="container py-16 grid gap-12 md:grid-cols-3 md:gap-8 items-start">
        <div>
          <Link to={`/${locale}`} className="font-display text-lg text-foreground">
            {t.footer.maker}
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">{t.footer.tag}</p>
        </div>

        <div className="text-sm text-muted-foreground space-y-1">
          <a href={`mailto:${t.contact.email}`} className="link-underline block hover:text-foreground transition-soft">
            {t.contact.email}
          </a>
          <a href={`tel:${t.contact.phone.replace(/\s/g, "")}`} className="link-underline block hover:text-foreground transition-soft">
            {t.contact.phone}
          </a>
          
        </div>

        <div className="md:flex md:justify-end">
          <div className="space-y-4 md:text-right">
            <LanguageSwitch />
            <div className="md:flex md:justify-end">
              <LegalDialogs />
            </div>
            <p className="text-xs text-muted-foreground/80">
              © {year} {t.footer.maker}. {t.footer.rights}
            </p>
            <Link
              to={pathFor("contact", locale)}
              className="link-underline text-xs text-muted-foreground hover:text-foreground transition-soft"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
