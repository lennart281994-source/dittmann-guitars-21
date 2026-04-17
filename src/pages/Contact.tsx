import { useT } from "@/i18n/useT";

const Contact = () => {
  const { t } = useT();

  return (
    <div className="pt-32 md:pt-40 min-h-[80vh] flex items-start">
      <section className="container max-w-2xl text-center py-16 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
          {t.nav.contact}
        </p>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] text-foreground">
          {t.contact.title}
        </h1>
        <p className="mt-10 font-display text-xl md:text-2xl leading-snug text-muted-foreground">
          {t.contact.intro}
        </p>

        <div className="mt-16 md:mt-20 space-y-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
              {t.contact.emailLabel}
            </p>
            <a
              href={`mailto:${t.contact.email}`}
              className="link-underline font-display text-xl md:text-2xl text-foreground"
            >
              {t.contact.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
              {t.contact.phoneLabel}
            </p>
            <a
              href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
              className="link-underline font-display text-xl md:text-2xl text-foreground"
            >
              {t.contact.phone}
            </a>
          </div>
          <div>
            <p className="font-sans text-sm text-muted-foreground">{t.contact.location}</p>
          </div>
        </div>

        <p className="mt-20 font-display italic text-base md:text-lg text-muted-foreground">
          {t.contact.closing}
        </p>
      </section>
    </div>
  );
};

export default Contact;
