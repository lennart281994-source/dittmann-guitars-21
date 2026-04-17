import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { defaultLocale } from "@/i18n/dictionaries";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — Route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">404</p>
        <h1 className="font-display text-4xl md:text-5xl text-foreground tracking-tight">
          Seite nicht gefunden
        </h1>
        <p className="mt-6 font-display text-lg text-muted-foreground">Page not found.</p>
        <Link
          to={`/${defaultLocale}`}
          className="link-underline mt-10 inline-block font-sans text-xs uppercase tracking-[0.2em] text-foreground"
        >
          Zurück / Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
