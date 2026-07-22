import type { Metadata } from "next";
import { PageFrame, PageHero } from "../components/site-chrome";
import { services } from "../content/business";

export const metadata: Metadata = { title: "Integrated Services", description: "Nine integrated capabilities across the global antimony supply chain." };

export default function ServicesPage() {
  return (
    <PageFrame><main>
      <PageHero eyebrow="Integrated services · 01—09" title="Nine capabilities." accent="One clear pathway." image="/media/services/mining.jpg"><p>Use one capability or connect the entire route from responsible source to worldwide delivery.</p></PageHero>
      <section className="route-section services-index">
        <div className="section-heading services-heading"><div><p className="eyebrow">Source to market</p><h2>Every stage,<br /><em>coordinated.</em></h2></div><p>One experienced commercial team keeps specifications, evidence, timing, and partners aligned across the transaction.</p></div>
        <div className="service-index-list">
          {services.map((service) => (
            <a href={`/services/${service.slug}`} key={service.slug}>
              <span>{service.number}</span><div><small>{service.shortTitle}</small><h3>{service.title}</h3><p>{service.summary}</p></div><img src={service.image} alt="" /><b>↗</b>
            </a>
          ))}
        </div>
      </section>
    </main></PageFrame>
  );
}
