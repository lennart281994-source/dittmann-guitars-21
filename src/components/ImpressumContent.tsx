// Shared Impressum content — used by the footer pop-up (LegalDialogs) and the
// standalone /impressum page, so the legal text always stays identical.
export const ImpressumContent = () => (
  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
    <section>
      <h3 className="font-display text-base text-foreground mb-2">
        Anbieterkennzeichnung gemäß § 5 DDG
      </h3>
      <p className="font-medium text-foreground">Betreiber der Website:</p>
      <p>Michael-Lennart Dittmann</p>
      <p>Am Mühlenberg 1</p>
      <p>19294 Malliß</p>
    </section>

    <section>
      <p className="font-medium text-foreground">Kontakt:</p>
      <p>Telefon: +49 1784159440</p>
      <p>
        E-Mail:{" "}
        <a
          href="mailto:mail@michaeldittmann.com"
          className="link-underline text-foreground"
        >
          mail@michaeldittmann.com
        </a>
      </p>
      <p>Website: www.michaeldittmann.com</p>
    </section>

    <section>
      <p>
        Gemäß § 19 UStG wird keine Umsatzsteuer berechnet
        (Kleinunternehmer-Regelung)
      </p>
    </section>

    <section>
      <p className="font-medium text-foreground">
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
      </p>
      <p>Michael-Lennart Dittmann</p>
      <p>Am Mühlenberg 1</p>
      <p>19294 Malliß</p>
    </section>
  </div>
);
