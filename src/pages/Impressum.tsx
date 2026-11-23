import { useEffect } from "react";
import { ImpressumContent } from "@/components/ImpressumContent";

const Impressum = () => {
  useEffect(() => {
    const previous = document.title;
    document.title = "Impressum — Michael Dittmann";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="pt-32 md:pt-40 pb-32 md:pb-48">
      <section className="container max-w-2xl">
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] text-foreground">
          Impressum
        </h1>
        <div className="h-px w-16 bg-border mt-8 md:mt-10" />
      </section>

      <div className="container mt-12 md:mt-16 max-w-2xl">
        <ImpressumContent />
      </div>
    </div>
  );
};

export default Impressum;
