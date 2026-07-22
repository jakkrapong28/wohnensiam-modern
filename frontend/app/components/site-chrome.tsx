"use client";

import { useEffect, useRef, useState } from "react";
import { locales, selectLocale, translations, type Locale } from "../i18n";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");
  const picker = useRef<HTMLDivElement>(null);
  const t = translations[locale];
  const selected = locales.find((item) => item.code === locale) ?? locales[0];

  useEffect(() => {
    const saved = window.localStorage.getItem("wohnen-locale") as Locale | null;
    const frame = window.requestAnimationFrame(() => {
      if (saved && translations[saved]) setLocale(saved);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const sync = (event: Event) => setLocale((event as CustomEvent<Locale>).detail);
    window.addEventListener("wohnen:locale", sync);
    return () => window.removeEventListener("wohnen:locale", sync);
  }, []);

  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (!picker.current?.contains(event.target as Node)) setLanguageOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  return (
    <header className={`site-header inner-header notranslate${overlay ? " overlay-header" : ""}`} translate="no">
      <a className="brand" href="/" aria-label="Wohnen home">
        <img src="/images/logo-white.png" alt="Wohnen Co., Ltd." />
      </a>
      <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
        <a href="/company">{t.company}</a>
        <a href="/services">{t.services}</a>
        <a href="/compliance">{t.compliance}</a>
        <a href="/insights">{t.insights}</a>
        <a href="/contact">{t.contact}</a>
      </nav>
      <div className="language-picker" ref={picker}>
        <button className="language-trigger" type="button" aria-label={t.selectLanguage} aria-haspopup="listbox" aria-expanded={languageOpen} onClick={() => setLanguageOpen((value) => !value)}>
          <span className="flag" aria-hidden="true">{selected.flag}</span>
          <span className="language-name">{selected.label}</span>
          <i aria-hidden="true">⌄</i>
        </button>
        {languageOpen && (
          <div className="language-menu" role="listbox" aria-label={t.selectLanguage}>
            {locales.map((item) => (
              <button key={item.code} type="button" role="option" aria-selected={item.code === locale} className={item.code === locale ? "selected" : undefined} onClick={() => { setLocale(item.code); selectLocale(item.code); setLanguageOpen(false); }}>
                <span className="flag" aria-hidden="true">{item.flag}</span>
                <span>{item.label}</span>
                {item.code === locale && <b aria-hidden="true">✓</b>}
              </button>
            ))}
          </div>
        )}
      </div>
      <a className="header-cta" href="/contact">{t.inquiry} <span aria-hidden="true">↗</span></a>
      <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
        <span /><span />
      </button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer route-footer">
      <div className="footer-brand"><img src="/images/logo-white.png" alt="Wohnen Co., Ltd." /><p>Global antimony supply, coordinated with clarity.</p></div>
      <div><span>Company</span><a href="/company">About Wohnen</a><a href="/company/history">Our history</a><a href="/company/leadership">Leadership</a></div>
      <div><span>Explore</span><a href="/services">Integrated services</a><a href="/insights">Market intelligence</a><a href="/compliance">Compliance</a></div>
      <div><span>Connect</span><a href="mailto:sales@wohnensiam.com">sales@wohnensiam.com</a><a href="tel:+66618893924">+(66) 61 8893924</a><a href="/contact">Start an inquiry</a></div>
      <p className="copyright">© {new Date().getFullYear()} Wohnen Co., Ltd. All rights reserved.</p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, accent, image, children }: { eyebrow: string; title: string; accent?: string; image: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero" style={{ "--page-image": `url(${image})` } as React.CSSProperties}>
      <div className="page-hero-grid" />
      <div className="page-hero-copy">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}{accent && <><br /><em>{accent}</em></>}</h1>
        {children}
      </div>
      <div className="page-hero-index"><span>W / 1993</span><i /><span>Bangkok · Thailand</span></div>
    </section>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader overlay />{children}<SiteFooter /></>;
}
