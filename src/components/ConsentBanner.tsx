import { useEffect, useState } from "react";
import { getConsent, loadAnalytics, setConsent, openLegal, OPEN_CONSENT_EVENT } from "@/lib/consent";

export const ConsentBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const c = getConsent();
    if (c === "granted") loadAnalytics();
    if (c === null) setOpen(true);
    const show = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, show);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, show);
  }, []);

  if (!open) return null;
  const choose = (v: "granted" | "denied") => {
    setOpen(false);
    setConsent(v);
  };

  return (
    <div role="dialog" aria-label="Einwilligung Statistik" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-border bg-background p-5 shadow-lg md:inset-x-auto md:right-6 md:bottom-6">
      <p className="text-sm text-foreground leading-relaxed">
        Dürfen wir mit Google Analytics anonym zählen, wie unsere Website genutzt wird? Dabei werden Cookies gesetzt und Daten an Google übertragen. Ohne Zustimmung wird nichts davon geladen.
      </p>
      <button type="button" onClick={() => openLegal("datenschutz")} className="mt-2 text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground">
        Mehr in der Datenschutzerklärung
      </button>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button type="button" onClick={() => choose("denied")} className="flex-1 rounded-full border border-border px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-muted transition-soft">
          Ablehnen
        </button>
        <button type="button" onClick={() => choose("granted")} className="flex-1 rounded-full border border-border px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-muted transition-soft">
          Zustimmen
        </button>
      </div>
    </div>
  );
};
