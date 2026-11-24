import { ExternalEmbed } from "@/components/ExternalEmbed";
import { useT } from "@/i18n/useT";

const Sound = () => {
  const { t } = useT();

  return (
    <section className="container min-h-[80vh] flex items-center justify-center py-32">
      <div className="w-full max-w-3xl text-center flex flex-col items-center gap-10">
        <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-accent">
          {t.sound.kicker}
        </span>

        <h1 className="font-display text-4xl md:text-6xl leading-[1.1] tracking-tight text-foreground">
          {t.sound.title}
        </h1>

        <div className="h-px w-16 bg-border" />

        {/* YouTube embed — erweiterter Datenschutzmodus (youtube-nocookie) */}
        <div className="w-full aspect-video overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
          <ExternalEmbed provider="YouTube" className="h-full w-full rounded-none border-0" buttonLabel="Video laden" note="Hier ist ein Video von YouTube eingebunden. Erst wenn Sie auf „Video laden“ klicken, wird eine Verbindung zu YouTube (Google) hergestellt und Ihre IP-Adresse übertragen.">
          <iframe
            src="https://www.youtube-nocookie.com/embed/JauK_--NGe0"
            title="Klangbeispiel — Gitarre von Michael Dittmann"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
          </ExternalEmbed>
        </div>

        <p className="font-sans text-sm text-muted-foreground/80 max-w-md leading-relaxed">
          {t.sound.note}
        </p>
      </div>
    </section>
  );
};

export default Sound;
