import { Link } from "react-router-dom";
import { useT } from "@/i18n/useT";

const Commission = () => {
  const { t, locale } = useT();
  const contactPath = locale === "de" ? "/de/kontakt" : "/en/contact";

  return (
    <div className="pt-32 md:pt-40 pb-32">
      {/* Section 1 — Introduction */}
      <section className="container max-w-2xl">
        <h1 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.1] text-foreground">
          {t.commission.title}
        </h1>
        <p className="mt-10 md:mt-12 font-display text-lg md:text-xl text-muted-foreground leading-[1.7] whitespace-pre-line">
          {t.commission.intro}
        </p>
      </section>

      {/* Subsequent sections */}
      <div className="container max-w-2xl mt-32 md:mt-40 space-y-28 md:space-y-36">
        {t.commission.sections.map((section) => (
          <article key={section.title}>
            <h2 className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground/80">
              {section.title}
            </h2>
            <p className="mt-6 font-display text-lg md:text-xl text-foreground/90 leading-[1.7] whitespace-pre-line">
              {section.text}
            </p>
          </article>
        ))}

        <div className="pt-8">
          <Link
            to={contactPath}
            className="inline-block font-display text-base md:text-lg text-foreground border-b border-border hover:border-accent hover:text-accent transition-colors pb-1"
          >
            {t.commission.contactCta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Commission;
