import { cn } from "@/lib/utils";

/**
 * Decorative backdrop for the Atelierkonzerte sections.
 * No photography — colour, hairlines and the soundhole rosette carry the design.
 */
export const AtelierRosette = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 1000 1000"
    aria-hidden="true"
    fill="none"
    className={cn("pointer-events-none select-none", className)}
  >
    <g stroke="currentColor">
      {/* soundhole */}
      <circle cx="500" cy="500" r="118" strokeOpacity="0.3" />
      {/* rosette inlay band */}
      <circle cx="500" cy="500" r="150" strokeOpacity="0.24" />
      <circle cx="500" cy="500" r="161" strokeOpacity="0.15" />
      <circle cx="500" cy="500" r="172" strokeOpacity="0.24" />
      {/* outer rings */}
      <circle cx="500" cy="500" r="248" strokeOpacity="0.14" />
      <circle cx="500" cy="500" r="330" strokeOpacity="0.1" />
      <circle cx="500" cy="500" r="418" strokeOpacity="0.07" />
      <circle cx="500" cy="500" r="499" strokeOpacity="0.05" />
    </g>
    {/* strings */}
    <g stroke="currentColor" strokeOpacity="0.08">
      <line x1="352" y1="0" x2="352" y2="1000" />
      <line x1="412" y1="0" x2="412" y2="1000" />
      <line x1="472" y1="0" x2="472" y2="1000" />
      <line x1="532" y1="0" x2="532" y2="1000" />
      <line x1="592" y1="0" x2="592" y2="1000" />
      <line x1="652" y1="0" x2="652" y2="1000" />
    </g>
  </svg>
);

export const AtelierBackdrop = ({
  className,
  frame = true,
}: {
  className?: string;
  frame?: boolean;
}) => (
  <>
    <div className="panel-gradient pointer-events-none absolute inset-0" />
    <div className="panel-glow pointer-events-none absolute inset-0" />
    <AtelierRosette
      className={cn(
        "absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 text-panel-foreground",
        className,
      )}
    />
    {frame && (
      <div className="pointer-events-none absolute inset-4 border border-panel-border/70 md:inset-7" />
    )}
  </>
);

/** Thin rule with a cedar diamond — the section's typographic separator. */
export const AtelierRule = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden="true">
    <span className="h-px w-14 bg-panel-border md:w-20" />
    <span className="size-1.5 rotate-45 bg-accent" />
    <span className="h-px w-14 bg-panel-border md:w-20" />
  </div>
);
