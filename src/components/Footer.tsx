import { Link } from "react-router-dom";
import { LanguageSwitch } from "./LanguageSwitch";
import { LegalDialogs } from "./LegalDialogs";
import { useT } from "@/i18n/useT";

export const Footer = () => {
  const { t, locale } = useT();

  return (
    <footer className="mt-20 border-t border-border/70">
      <div className="container py-8">
        <div className="grid gap-6 md:grid-cols-3 md:gap-8 items-start">
          {/* Left: brand + tagline */}
          <div className="space-y-1">
            <Link to={`/${locale}`} className="font-display text-lg text-foreground block">
              {t.footer.maker}
            </Link>
            <p className="text-sm text-muted-foreground">{t.footer.tag}</p>
          </div>

          {/* Middle: contact */}
          <div className="text-sm text-muted-foreground flex flex-col gap-1 md:items-center">
            <a
              href={`mailto:${t.contact.email}`}
              className="link-underline hover:text-foreground transition-soft"
            >
              {t.contact.email}
            </a>
            <a
              href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
              className="link-underline hover:text-foreground transition-soft"
            >
              {t.contact.phone}
            </a>
          </div>

          {/* Right: legal + language */}
          <div className="space-y-3 md:flex md:flex-col md:items-end">
            <LegalDialogs />
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
};
