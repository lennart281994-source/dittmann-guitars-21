import { useState, type ReactNode } from "react";
import { openLegal } from "@/lib/consent";

// Lädt fremde Inhalte (YouTube, Brevo) erst nach einem Klick.
export const ExternalEmbed = ({
  provider,
  note,
  buttonLabel,
  className = "",
  poster,
  preview,
  children,
}: {
  poster?: string;
  preview?: ReactNode;
  provider: string;
  note: string;
  buttonLabel: string;
  className?: string;
  children: ReactNode;
}) => {
  const [active, setActive] = useState(false);
  if (active) return <>{children}</>;
  if (preview) {
    // Vorschau sieht aus wie das echte Formular; erste Berührung lädt es.
    return (
      <div className={className} onPointerDown={() => setActive(true)} onFocusCapture={() => setActive(true)}>
        {preview}
      </div>
    );
  }
  if (poster) {
    // Lokales Vorschaubild: sieht aus wie ein Video, verbindet aber erst nach Klick zu YouTube.
    return (
      <div className={`relative ${className}`}>
        <button type="button" onClick={() => setActive(true)} aria-label={buttonLabel} className="group absolute inset-0 h-full w-full">
          <img src={poster} alt="" className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-foreground/75 transition-soft group-hover:bg-destructive">
            <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[17px] border-y-transparent border-l-background" />
          </span>
        </button>
        <p className="pointer-events-none absolute inset-x-0 bottom-0 bg-foreground/60 px-3 py-1.5 text-[11px] text-background">
          Mit Klick wird das Video von YouTube geladen ·{" "}
          <button type="button" onClick={() => openLegal("datenschutz")} className="pointer-events-auto underline underline-offset-2">Datenschutz</button>
        </p>
      </div>
    );
  }
  return (
    <div className={`flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-muted/60 p-6 text-center ${className}`}>
      <p className="max-w-md text-sm text-muted-foreground leading-relaxed">{note}</p>
      <button type="button" onClick={() => setActive(true)} className="rounded-full bg-accent text-accent-foreground px-6 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-accent/90 transition-soft">
        {buttonLabel}
      </button>
      <button type="button" onClick={() => openLegal("datenschutz")} className="text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground">
        Datenschutzerklärung ({provider})
      </button>
    </div>
  );
};
