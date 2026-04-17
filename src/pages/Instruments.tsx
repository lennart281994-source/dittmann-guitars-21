import { useT } from "@/i18n/useT";
import { cn } from "@/lib/utils";
import img1 from "@/assets/instrument-1.png";
import img2 from "@/assets/instrument-2.jpg";
import img3 from "@/assets/instrument-3.jpg";

const images = [img1, img2, img3];

const Instruments = () => {
  const { t, locale } = useT();

  return (
    <div className="pt-32 md:pt-40">
      <div className="container mt-8 md:mt-12 space-y-32 md:space-y-44">
        {t.instruments.items.map((item, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <article
              key={item.name}
              className="grid md:grid-cols-12 gap-10 md:gap-16 items-center"
            >
              <div className={cn("md:col-span-7", reverse && "md:order-2 md:col-start-6")}>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-background max-h-[80vh] mx-auto">
                  <img
                    src={images[idx % images.length]}
                    alt={item.name}
                    className="w-full h-full object-contain"
                    width={1280}
                    height={1700}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={cn("md:col-span-5", reverse && "md:order-1 md:col-start-1 md:row-start-1")}>
                <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-tight leading-snug">
                  {item.name}
                </h2>
                <p className="mt-6 font-display text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {item.character}
                </p>
                <dl className="mt-10 pt-6 border-t border-border/70 space-y-2.5 text-sm">
                  {item.specs.map((spec) => (
                    <div key={spec.label} className="text-muted-foreground">
                      <span className="text-foreground/90">{spec.label}:</span>{" "}
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </dl>
                <a
                  href={`/${locale}/${locale === "de" ? "kontakt" : "contact"}`}
                  className="mt-10 inline-block text-[11px] uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1 hover:border-accent transition-colors"
                >
                  {t.instruments.inquireCta}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Instruments;
