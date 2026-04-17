import { Link, useLocation } from "react-router-dom";
import { switchLocaleHref, useLocale } from "@/i18n/useT";
import { cn } from "@/lib/utils";

export const LanguageSwitch = () => {
  const location = useLocation();
  const current = useLocale();

  const linkClass = (active: boolean) =>
    cn(
      "transition-soft tracking-[0.15em] uppercase text-[11px]",
      active ? "text-accent" : "text-muted-foreground hover:text-foreground",
    );

  return (
    <div className="flex items-center gap-2 font-sans">
      <Link to={switchLocaleHref(location.pathname, "de")} className={linkClass(current === "de")}>
        DE
      </Link>
      <span className="text-muted-foreground/50 text-[11px]">/</span>
      <Link to={switchLocaleHref(location.pathname, "en")} className={linkClass(current === "en")}>
        EN
      </Link>
    </div>
  );
};
