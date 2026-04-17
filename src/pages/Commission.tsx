import { useT } from "@/i18n/useT";
import wood from "@/assets/wood.jpg";
import pathCommission from "@/assets/path-commission.jpg";
import bracing from "@/assets/bracing.jpg";
import finishing from "@/assets/finishing.jpg";
import instrument1 from "@/assets/instrument-1.jpg";

const sectionImages = [null, null, wood, bracing, finishing];

const Commission = () => {
  const { t } = useT();

  return (
    <div className="pt-32 md:pt-40">
      <section className="container max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
          {t.nav.commission}
        </p>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] text-foreground">
          {t.commission.title}
        </h1>
        <p className="mt-8 font-display text-xl md:text-2xl leading-snug text-muted-foreground">
          {t.commission.intro}
        </p>
      </section>

      <div className="container mt-24 md:mt-32 space-y-24 md:space-y-32">
        {t.commission.sections.map((section, idx) => {
          const img = sectionImages[idx] ?? (idx === 0 ? pathCommission : instrument1);
          return (
            <article key={section.title} className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <div className="md:col-span-1">
                <span className="font-display text-accent text-2xl md:text-3xl">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-6 font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {section.text}
                </p>
              </div>
              <div className="md:col-span-6">
                <div className="aspect-[5/4] overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                    width={1600}
                    height={1280}
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Commission;
