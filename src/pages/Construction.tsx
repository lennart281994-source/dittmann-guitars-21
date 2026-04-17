import { useT } from "@/i18n/useT";
import wood from "@/assets/wood.jpg";
import bracing from "@/assets/bracing.jpg";
import finishing from "@/assets/finishing.jpg";
import detail from "@/assets/path-available.jpg";

const blockImages = [wood, bracing, finishing, detail];

const Construction = () => {
  const { t } = useT();

  return (
    <div className="pt-32 md:pt-40">
      <section className="container max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
          {t.nav.construction}
        </p>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] text-foreground">
          {t.construction.title}
        </h1>
        <p className="mt-8 font-display text-xl md:text-2xl leading-snug text-muted-foreground">
          {t.construction.intro}
        </p>
      </section>

      <div className="container mt-24 md:mt-32 grid md:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-32">
        {t.construction.blocks.map((block, idx) => (
          <article key={block.title} className="space-y-6">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <img
                src={blockImages[idx % blockImages.length]}
                alt=""
                className="w-full h-full object-cover"
                width={1600}
                height={1200}
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-foreground tracking-tight">
                {block.title}
              </h2>
              <p className="mt-4 font-display text-lg text-muted-foreground leading-relaxed">
                {block.text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Construction;
