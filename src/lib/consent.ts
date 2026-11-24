// Einwilligung für Google Analytics. Ohne Zustimmung wird gtag.js nicht geladen.
export const GA_ID = "G-1ML056W72L";
const KEY = "md-consent-analytics";
export type Consent = "granted" | "denied" | null;

export const getConsent = (): Consent => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
};

let loaded = false;
export const loadAnalytics = () => {
  if (loaded || typeof document === "undefined") return;
  loaded = true;
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
};

export const setConsent = (v: "granted" | "denied") => {
  const prev = getConsent();
  try {
    localStorage.setItem(KEY, v);
  } catch {
    /* ignore */
  }
  if (v === "granted") loadAnalytics();
  if (v === "denied" && prev === "granted") {
    // Analytics-Cookies entfernen und Seite neu laden, damit das Skript sicher weg ist.
    document.cookie.split(";").forEach((c) => {
      const name = c.split("=")[0].trim();
      if (name.startsWith("_ga")) {
        const host = location.hostname.replace(/^www\./, "");
        for (const d of ["", `; domain=${host}`, `; domain=.${host}`]) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
        }
      }
    });
    location.reload();
  }
};

export const OPEN_CONSENT_EVENT = "md:open-consent";
export const OPEN_LEGAL_EVENT = "md:open-legal";
export const openConsentSettings = () => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
export const openLegal = (which: "impressum" | "datenschutz") =>
  window.dispatchEvent(new CustomEvent(OPEN_LEGAL_EVENT, { detail: which }));
