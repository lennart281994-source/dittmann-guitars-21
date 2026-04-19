import { useState } from "react";
import { z } from "zod";
import { useT } from "@/i18n/useT";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useT();

  const schema = z.object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(255),
    message: z.string().trim().min(1).max(2000),
  });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({ title: t.contact.formError, variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "63fbed01-4229-474d-8133-ce20015c7cd6",
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
          subject: `Kontakt über michaeldittmann.com — ${result.data.name}`,
          from_name: "michaeldittmann.com",
          replyto: result.data.email,
          botcheck: "",
        }),
      });

      const data = await response.json();
      if (data.success) {
        toast({ title: t.contact.formSuccess });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast({ title: t.contact.formSendError, variant: "destructive" });
      }
    } catch {
      toast({ title: t.contact.formSendError, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappHref = `https://wa.me/${t.contact.whatsappNumber}`;

  return (
    <div className="pt-32 md:pt-40 pb-32">
      {/* Header */}
      <section className="container max-w-3xl text-center">
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] text-foreground">
          {t.contact.title}
        </h1>
        <p className="mt-6 font-sans text-sm md:text-base text-muted-foreground">
          {t.contact.intro}
        </p>
      </section>

      {/* Two-column layout */}
      <div className="container max-w-5xl mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left: contact details */}
        <div className="space-y-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground/80 mb-3">
              {t.contact.emailLabel}
            </p>
            <a
              href={`mailto:${t.contact.email}`}
              className="font-display text-base md:text-lg text-foreground hover:text-accent transition-colors"
            >
              {t.contact.email}
            </a>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground/80 mb-3">
              {t.contact.phoneLabel}
            </p>
            <a
              href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
              className="font-display text-base md:text-lg text-foreground hover:text-accent transition-colors"
            >
              {t.contact.phone}
            </a>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground/80 mb-3">
              {t.contact.whatsappLabel}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-base md:text-lg text-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
              </svg>
              {t.contact.whatsappText}
            </a>
            <p className="mt-3 font-sans text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t.contact.whatsappHint}
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent mb-10">
            {t.contact.formTitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Honeypot field for spam protection — hidden from real users */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
              aria-hidden="true"
            />
            <div>
              <label
                htmlFor="name"
                className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground/80 mb-3"
              >
                {t.contact.formName}
              </label>
              <input
                id="name"
                type="text"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent focus:outline-none font-display text-base text-foreground py-2 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground/80 mb-3"
              >
                {t.contact.formEmail}
              </label>
              <input
                id="email"
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent focus:outline-none font-display text-base text-foreground py-2 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground/80 mb-3"
              >
                {t.contact.formMessage}
              </label>
              <textarea
                id="message"
                rows={5}
                maxLength={2000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-border focus:border-accent focus:outline-none font-display text-base text-foreground py-2 resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-block px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-foreground border border-border hover:border-accent hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t.contact.formSubmitting : t.contact.formSubmit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
