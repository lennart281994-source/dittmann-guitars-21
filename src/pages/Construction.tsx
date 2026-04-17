import { useEffect } from "react";
import { useT } from "@/i18n/useT";
import tonhoelzer from "@/assets/construction-tonhoelzer.jpg";
import konstruktion from "@/assets/construction-konstruktion.jpg";
import spielbarkeit from "@/assets/construction-spielbarkeit.jpg";

const blockImages = [tonhoelzer, konstruktion, spielbarkeit];

const Construction = () => {
  const { t } = useT();

  useEffect(() => {
    // Load Instagram embed script
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="//www.instagram.com/embed.js"]',
    );
    if (!existing) {
      const s = document.createElement("script");
      s.async = true;
      s.src = "//www.instagram.com/embed.js";
      document.body.appendChild(s);
    } else {
      // @ts-expect-error instgrm is injected by embed.js
      window.instgrm?.Embeds?.process?.();
    }
  }, []);

  const watchIndex = t.construction.blocks.length; // 4th block → idx 3
  const watchReverse = watchIndex % 2 === 1;

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

        {/* Watch construction — Instagram embed in same layout */}
        <article className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div
            className={`md:col-span-6 ${
              watchReverse ? "md:order-2" : "md:order-1"
            }`}
          >
            <div className="max-w-md mx-auto">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/DWT_RBYjOi7/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "280px",
                  padding: 0,
                  width: "100%",
                }}
              >
                <a
                  href="https://www.instagram.com/reel/DWT_RBYjOi7/?utm_source=ig_embed&utm_campaign=loading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 text-center font-display text-sm text-muted-foreground"
                >
                  Beitrag auf Instagram ansehen — @dittmann.guitars
                </a>
              </blockquote>
            </div>
          </div>

          <div
            className={`md:col-span-6 ${
              watchReverse ? "md:order-1" : "md:order-2"
            }`}
          >
            <div className="max-w-md mx-auto md:mx-0">
              <p className="text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
                {String(watchIndex + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-tight leading-tight">
                {t.construction.watchTitle}
              </h2>
              <p className="mt-6 font-display text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {t.construction.watchText}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Construction;
