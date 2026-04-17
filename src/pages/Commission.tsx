import { Link } from "react-router-dom";
import { useT } from "@/i18n/useT";

const Commission = () => {
  const { t, locale } = useT();
  const contactPath = locale === "de" ? "/de/kontakt" : "/en/contact";

  return (
    <div className="pt-32 md:pt-40 pb-32">
      <section className="container max-w-3xl text-center">
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] text-foreground">
          {t.commission.title}
        </h1>
      </section>

      <div className="container max-w-2xl mt-20 md:mt-28 space-y-20 md:space-y-24">
        {t.commission.sections.map((section) => (
          <article key={section.title} className="text-center">
            <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-tight">
              {section.title}
            </h2>
            <p className="mt-6 font-display text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {section.text}
            </p>
          </article>
        ))}

        <div className="text-center pt-8">
          <Link
            to={contactPath}
            className="inline-block px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground border border-border hover:border-accent hover:text-accent transition-colors"
          >
            {t.commission.contactCta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Commission;
