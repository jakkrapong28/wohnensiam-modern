"use client";

import { PointerEvent as ReactPointerEvent, useRef, useState } from "react";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import { ContactForm } from "./contact/contact-form";
import { useLocale } from "./hooks/use-locale";
import { translations } from "./i18n";

const services = [
  { number: "01", slug: "mining", title: "Resource Development", copy: "Responsible sourcing partnerships built for long-term supply." },
  { number: "02", slug: "transportation", title: "Movement from Source", copy: "Coordinated inland transport from origin to processing facilities." },
  { number: "03", slug: "customs-clearance", title: "Compliance & Documentation", copy: "Accurate trade documentation and customs coordination." },
  { number: "04", slug: "processing", title: "Material Transformation", copy: "Processing aligned with commercial and technical requirements." },
  { number: "05", slug: "smelting", title: "Antimony Refining", copy: "Controlled refining for consistent, high-purity output." },
  { number: "06", slug: "certification", title: "Quality Assurance", copy: "Independent testing, certification and material verification." },
  { number: "07", slug: "storage", title: "Strategic Inventory", copy: "Planned stock availability for resilient supply programs." },
  { number: "08", slug: "inspection", title: "Independent Inspection", copy: "Third-party oversight at critical points in the supply chain." },
  { number: "09", slug: "shipment", title: "Worldwide Delivery", copy: "Reliable international logistics through trusted partners." },
];

const faqs = [
  {
    question: "What compliance support does Wohnen provide?",
    answer: "We coordinate commercial documentation, shipping records and regulatory requirements with specialist customs brokers and logistics partners for each international shipment.",
  },
  {
    question: "How do you reduce documentation delays?",
    answer: "Requirements are reviewed early, before cargo reaches the border. This gives every party time to resolve gaps and keeps the shipment moving predictably.",
  },
  {
    question: "Can you support a custom supply program?",
    answer: "Yes. We work with buyers to define material specifications, inspection points, inventory needs, delivery cadence and the supporting documentation package.",
  },
];

const chain = ["Source", "Move", "Clear", "Process", "Refine", "Verify", "Deliver"];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [heroZoom, setHeroZoom] = useState(1);
  const heroRef = useRef<HTMLElement>(null);
  const { copy: t } = useLocale();
  const bodyCopy = translations.en;

  function moveHero(event: ReactPointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--space-x", `${x * -14}px`);
    event.currentTarget.style.setProperty("--space-y", `${y * -10}px`);
    event.currentTarget.style.setProperty("--orbit-x", `${x * 20}px`);
    event.currentTarget.style.setProperty("--orbit-y", `${y * 14}px`);
  }

  function resetHero() {
    heroRef.current?.style.setProperty("--space-x", "0px");
    heroRef.current?.style.setProperty("--space-y", "0px");
    heroRef.current?.style.setProperty("--orbit-x", "0px");
    heroRef.current?.style.setProperty("--orbit-y", "0px");
  }

  function changeHeroZoom(direction: -1 | 1) {
    setHeroZoom((current) => {
      const next = Math.min(1.15, Math.max(1, Number((current + direction * 0.05).toFixed(2))));
      heroRef.current?.style.setProperty("--space-zoom", String(next));
      return next;
    });
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <SiteHeader />

      <main id="main-content">
        <section className="hero" id="home" ref={heroRef} onPointerMove={moveHero} onPointerLeave={resetHero}>
          <div className="hero-space-scene" aria-hidden="true">
            <div className="hero-nebula" />
          </div>
          <div className="hero-grid" />
          <div className="portal-signature" aria-hidden="true">
            <span>SB / 51</span>
            <i />
            <b>CRITICAL<br />MINERAL</b>
          </div>
          <div className="hero-copy portal-copy notranslate" translate="no">
            <p className="eyebrow light">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}<br /><em>{t.heroAccent}</em></h1>
            <p className="hero-lead">{t.heroLead}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/services">{t.explore} <span>→</span></a>
              <a className="text-link light-link" href="/company">{t.meet} <span>↘</span></a>
            </div>
            <div className="hero-path" aria-hidden="true"><span>Source</span><i /><span>Material</span><i /><span>Market</span></div>
          </div>

          <div className="hero-data-rail" aria-hidden="true">
            <span>15° 52′ N</span><i />
            <span>GLOBAL SUPPLY NETWORK</span><i />
            <span>EST. 1993</span>
          </div>

          <div className="hero-zoom notranslate" translate="no" aria-label="Mining view zoom controls">
            <button type="button" onClick={() => changeHeroZoom(1)} disabled={heroZoom >= 1.15} aria-label="Zoom in">+</button>
            <span aria-live="polite">{Math.round(heroZoom * 100)}%</span>
            <button type="button" onClick={() => changeHeroZoom(-1)} disabled={heroZoom <= 1} aria-label="Zoom out">−</button>
          </div>

          <a className="portal-enter" href="#about"><small>01 / 04</small><span>Enter the supply world</span><b>↓</b></a>

          <div className="hero-stats" aria-label="Company highlights">
            <div><strong>30+</strong><span>Years of market experience</span></div>
            <div><strong>09</strong><span>Integrated service capabilities</span></div>
            <div><strong>01</strong><span>Accountable supply partner</span></div>
          </div>
        </section>

        <div className="capability-strip" aria-label="Integrated capabilities">
          <span>Source</span><i>◆</i><span>Transport</span><i>◆</i><span>Clear</span><i>◆</i><span>Process</span><i>◆</i><span>Refine</span><i>◆</i><span>Deliver</span>
        </div>

        <section className="section about" id="about">
          <div className="about-story">
            <div className="about-story-image">
              <img src="/media/company/about.jpg" alt="Wohnen antimony operations" />
              <div><span>Established</span><strong>1993</strong></div>
            </div>
            <div className="about-story-copy">
              <p className="eyebrow">Wohnen Co., Ltd.</p>
              <h2>Built around the material.<br /><em>Focused on the relationship.</em></h2>
              <div className="about-story-text">
                <p className="lead-copy">We bring the moving parts of the antimony supply chain together—commercial coordination, quality assurance, documentation and delivery.</p>
                <p>Our role is to make international purchasing clearer and more dependable. One experienced team coordinates each stage, so customers gain visibility without carrying the operational burden.</p>
              </div>
              <a className="text-link" href="/company">Discover our company <span>↗</span></a>
            </div>
          </div>

          <div className="about-gallery">
            <article className="image-card image-card-large">
              <img src="/images/team.jpg" alt="Wohnen leadership team" />
              <div><span>Our people</span><strong>Experienced, connected, accountable.</strong></div>
            </article>
            <a className="principle-card orange-card" href="/company/mission">
              <span className="card-index">01 / 02</span>
              <h3>Our mission</h3>
              <p>Build trusted pathways for critical minerals through disciplined coordination and long-term partnerships.</p>
            </a>
            <a className="principle-card dark-card" href="/company/vision">
              <span className="card-index">02 / 02</span>
              <h3>Our vision</h3>
              <p>A global antimony supply chain defined by transparency, resilience and shared value.</p>
            </a>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-heading services-heading">
            <div>
              <p className="eyebrow">{bodyCopy.servicesEyebrow}</p>
              <h2>{bodyCopy.servicesTitle}<br /><em>{bodyCopy.servicesAccent}</em></h2>
            </div>
            <p>{bodyCopy.servicesIntro}</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <a href={`/services/${service.slug}`} aria-label={`Explore ${service.title}`}>↗</a>
              </article>
            ))}
          </div>
        </section>

        <section className="chain-section" aria-labelledby="chain-title">
          <div className="chain-copy">
            <p className="eyebrow light">End-to-end coordination</p>
            <h2 id="chain-title">One connected<br /><em>supply chain.</em></h2>
          </div>
          <ol className="chain-list">
            {chain.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>
            ))}
          </ol>
        </section>

        <section className="section compliance" id="compliance">
          <div className="compliance-panel">
            <div className="compliance-image" role="img" aria-label="Industrial material processing" />
            <div className="compliance-copy">
              <p className="eyebrow light">{bodyCopy.complianceEyebrow}</p>
              <h2>{bodyCopy.complianceTitle}<br /><em>{bodyCopy.complianceAccent}</em></h2>
              <p>{bodyCopy.complianceBody}</p>
              <ul>
                <li><span>✓</span> Lawful sourcing practices</li>
                <li><span>✓</span> International tax compliance</li>
                <li><span>✓</span> Anti-money laundering controls</li>
                <li><span>✓</span> Sanctions screening</li>
              </ul>
              <a className="button button-light" href="/compliance">{bodyCopy.complianceCta} <span>→</span></a>
            </div>
          </div>

          <div className="faq-wrap">
            <div>
              <p className="eyebrow">Practical answers</p>
              <h2>Frequently asked<br /><em>questions.</em></h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <article className="faq-item" key={faq.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span><b>{isOpen ? "−" : "+"}</b>
                    </button>
                    {isOpen && <p>{faq.answer}</p>}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section insights" id="insights">
          <div className="section-heading inline-heading">
            <div>
              <p className="eyebrow">Market perspective</p>
              <h2>Signals worth<br /><em>paying attention to.</em></h2>
            </div>
            <p>Context for purchasing teams navigating critical-mineral markets.</p>
          </div>
          <div className="insight-grid">
            <article className="insight-card featured-insight">
              <img src="/images/mission.jpg" alt="Antimony material processing" />
              <div><span>Materials · 6 min</span><h3>Why antimony matters to the next generation of batteries</h3><a href="/insights/battery-materials">Read the briefing ↗</a></div>
            </article>
            <article className="insight-card">
              <img src="/images/history.jpg" alt="Historic antimony operations" />
              <div><span>Market · 8 min</span><h3>Building resilience into a concentrated global supply chain</h3><a href="/insights/supply-chain-trends">Read the briefing ↗</a></div>
            </article>
            <article className="insight-card quote-card">
              <span>W / Intelligence</span>
              <blockquote>Better material decisions begin with a clearer view of the market.</blockquote>
              <a href="/insights">Explore all 17 briefings ↗</a>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-intro">
            <p className="eyebrow light">{bodyCopy.contactEyebrow}</p>
            <h2>{bodyCopy.contactTitle}<br /><em>{bodyCopy.contactAccent}</em></h2>
            <p>{bodyCopy.contactBody}</p>
            <a href="mailto:sales@wohnensiam.com">sales@wohnensiam.com <span>↗</span></a>
          </div>

          <ContactForm copy={bodyCopy} className="" messageRows={4} />
        </section>
      </main>

      <SiteFooter variant="home" tagline={bodyCopy.footer} />
    </>
  );
}
