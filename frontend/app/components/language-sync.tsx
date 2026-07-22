"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { applyPageTranslation, translations, type Locale } from "../i18n";

function savedLocale(): Locale {
  const saved = window.localStorage.getItem("wohnen-locale") as Locale | null;
  return saved && translations[saved] ? saved : "en";
}

export function LanguageSync() {
  const pathname = usePathname();

  useEffect(() => {
    const hideTranslateChrome = () => {
      document.querySelectorAll<HTMLElement>("body > .skiptranslate, .VIpgJd-ZVi9od-ORHb-OEVmcd").forEach((element) => {
        element.style.setProperty("display", "none", "important");
      });
      document.body.style.setProperty("top", "0px", "important");
    };
    const sync = (event?: Event) => {
      const requested = (event as CustomEvent<Locale> | undefined)?.detail;
      applyPageTranslation(requested && translations[requested] ? requested : savedLocale());
      hideTranslateChrome();
    };

    sync();
    const observer = new MutationObserver(hideTranslateChrome);
    observer.observe(document.body, { childList: true });
    window.addEventListener("wohnen:locale", sync);
    window.addEventListener("pageshow", sync);
    return () => {
      observer.disconnect();
      window.removeEventListener("wohnen:locale", sync);
      window.removeEventListener("pageshow", sync);
    };
  }, [pathname]);

  return null;
}
