import { useT } from "@/i18n/useT";

const Sound = () => {
  const { t } = useT();

  return (
    <section className="container min-h-[80vh] flex items-center justify-center py-32">
      <div className="max-w-2xl text-center flex flex-col items-center gap-10">
        <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent">
          {t.sound.kicker}
        </span>

        <h1 className="font-display text-4xl md:text-6xl leading-[1.1] tracking-tight text-foreground">
          {t.sound.title}
        </h1>

        <div className="h-px w-16 bg-border" />

        <p className="font-display italic text-xl md:text-2xl text-muted-foreground leading-relaxed whitespace-pre-line">
          {t.sound.teaser}
        </p>

        <p className="font-sans text-sm text-muted-foreground/80 max-w-md leading-relaxed">
          {t.sound.note}
        </p>
      </div>
    </section>
  );
};

export default Sound;
