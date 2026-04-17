import { useT } from "@/i18n/useT";
import tonhoelzer from "@/assets/construction-tonhoelzer.jpg";
import konstruktion from "@/assets/construction-konstruktion.jpg";
import spielbarkeit from "@/assets/construction-spielbarkeit.jpg";

const blockImages = [tonhoelzer, konstruktion, spielbarkeit];

const Construction = () => {
  const { t } = useT();

  return (
    <div className="pt-32 md:pt-40 pb-32 md:pb-48">
      <section className="container max-w-3xl text-center">
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] text-foreground">
          {t.construction.title}
        </h1>
      </section>

      <div className="container mt-20 md:mt-28 max-w-6xl space-y-28 md:space-y-40">
        {t.construction.blocks.map((block, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <article
              key={block.title}
              className="grid md:grid-cols-12 gap-10 md:gap-16 items-center"
            >
              <div
                className={`md:col-span-6 ${
                  reverse ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted max-w-md mx-auto">
                  <img
                    src={blockImages[idx % blockImages.length]}
                    alt=""
                    className="w-full h-full object-cover"
                    width={1200}
                    height={1500}
                    loading="lazy"
                  />
                </div>
              </div>

              <div
                className={`md:col-span-6 ${
                  reverse ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="max-w-md mx-auto md:mx-0">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight leading-tight">
                    {block.title}
                  </h2>
                  <p className="mt-6 font-display text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {block.text}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Construction;
