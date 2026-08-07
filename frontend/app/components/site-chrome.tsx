"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "../hooks/use-locale";
import { locales, selectLocale } from "../i18n";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const picker = useRef<HTMLDivElement>(null);
  const { locale, setLocale, copy: t } = useLocale();
  const selected = locales.find((item) => item.code === locale) ?? locales[0];

  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (!picker.current?.contains(event.target as Node)) setLanguageOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className={`site-header notranslate${overlay ? " inner-header overlay-header" : ""}`} translate="no">
      <a className="brand" href="/" aria-label="Wohnen home">
        <img src="/images/logo-white.png" alt="Wohnen Co., Ltd." />
      </a>
      <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
        <a href="/company" onClick={() => setMenuOpen(false)}>{t.company}</a>
        <a href="/services" onClick={() => setMenuOpen(false)}>{t.services}</a>
        <a href="/compliance" onClick={() => setMenuOpen(false)}>{t.compliance}</a>
        <a href="/insights" onClick={() => setMenuOpen(false)}>{t.insights}</a>
        <a href="/contact" onClick={() => setMenuOpen(false)}>{t.contact}</a>
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

export function SiteFooter({ variant = "route", tagline = "Global antimony supply, coordinated with clarity." }: { variant?: "home" | "route"; tagline?: string }) {
  if (variant === "home") {
    return (
      <footer className="site-footer">
        <div className="footer-brand"><img src="/images/logo-white.png" alt="Wohnen Co., Ltd." /><p>{tagline}</p></div>
        <div><span>Explore</span><a href="/company">Company</a><a href="/services">Services</a><a href="/compliance">Compliance</a><a href="/faq">FAQ</a></div>
        <div><span>Connect</span><a href="mailto:sales@wohnensiam.com">Email</a><a href="/contact">Inquiry</a><a href="#home">Back to top</a></div>
        <p className="copyright">© {new Date().getFullYear()} Wohnen Co., Ltd. All rights reserved.</p>
      </footer>
    );
  }

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
