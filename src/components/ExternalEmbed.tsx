import { useState, type ReactNode } from "react";
import { openLegal } from "@/lib/consent";

// Lädt fremde Inhalte (YouTube, Brevo) erst nach einem Klick.
export const ExternalEmbed = ({
  provider,
  note,
  buttonLabel,
  className = "",
  children,
}: {
  provider: string;
  note: string;
  buttonLabel: string;
  className?: string;
  children: ReactNode;
}) => {
  const [active, setActive] = useState(false);
  if (active) return <>{children}</>;
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
