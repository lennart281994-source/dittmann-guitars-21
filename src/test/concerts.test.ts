import { describe, it, expect } from "vitest";
import { concertsConfig as c } from "@/config/concerts";

describe("Atelierkonzerte – Konfiguration", () => {
  it("verlinkt den YouTube-Livestream des nächsten Konzerts", () => {
    expect(c.youtubeLiveUrl).toBe("https://www.youtube.com/live/LZQjbHLAA3w");
    expect(c.text.youtubeLiveLink).toBe("Live auf YouTube ansehen");
  });

  it("erklärt die Reservierung: max. 20 Gäste, ohne Ticket, Platz frei geben", () => {
    expect(c.text.reservationInfo).toContain("maximal 20 Gästen");
    expect(c.text.reservationInfo).toContain("kostenlose Reservierung");
    expect(c.text.reservationGuestlist).toBe(
      "Du musst kein Ticket mitbringen – dein Name steht auf unserer Gästeliste.",
    );
    expect(c.text.reservationFree).toContain("Platz bitte wieder frei");
  });
});

import { getConsent, setConsent } from "@/lib/consent";
describe("Google Analytics – Einwilligung", () => {
  it("lädt ohne Entscheidung kein Analytics-Skript", () => {
    localStorage.clear();
    expect(getConsent()).toBeNull();
    expect(document.querySelector('script[src*="googletagmanager"]')).toBeNull();
  });
  it("lädt Analytics erst nach Zustimmung", () => {
    setConsent("granted");
    expect(getConsent()).toBe("granted");
    expect(document.querySelector('script[src*="googletagmanager"]')).not.toBeNull();
  });
});
