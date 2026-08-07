"use client";

import { useEffect, useState } from "react";
import { locales, translations, type Locale } from "../i18n";

function detectLocale(): Locale {
  const saved = window.localStorage.getItem("wohnen-locale") as Locale | null;
  if (saved && translations[saved]) return saved;

  const browserLocale = window.navigator.language;
  return locales.find(
    ({ code }) => browserLocale === code || browserLocale.startsWith(`${code}-`),
  )?.code ?? "en";
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setLocale(detectLocale()));
    const sync = (event: Event) => {
      const requested = (event as CustomEvent<Locale>).detail;
      if (translations[requested]) setLocale(requested);
    };

    window.addEventListener("wohnen:locale", sync);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("wohnen:locale", sync);
    };
  }, []);

  return { locale, setLocale, copy: translations[locale] };
}
