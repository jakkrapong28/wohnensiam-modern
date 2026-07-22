import type { Metadata } from "next";
import { PageFrame, PageHero } from "../components/site-chrome";
import { company } from "../content/business";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = { title: "Contact Wohnen" };

export default function ContactPage() {
  return (
    <PageFrame><main>
      <PageHero eyebrow="Bangkok · Global reach" title="What can we" accent="move forward?" image="/media/services/shipment.jpg"><p>Tell us about the material, specification, destination, or supply challenge you are working through.</p></PageHero>
      <section className="route-section contact-page">
        <div className="contact-details">
          <p className="eyebrow">Corporate head office</p>
          <h2>Start with a<br /><em>direct conversation.</em></h2>
          <address>{company.address}</address>
          <a href={`mailto:${company.email}`}>{company.email} ↗</a>
          <a href="tel:+66618893924">{company.phone} ↗</a>
          <a className="map-link" href={company.mapUrl} target="_blank" rel="noreferrer">Open exact location in Google Maps ↗</a>
          <a className="map-link street-view-link" href={company.streetViewUrl} target="_blank" rel="noreferrer">View the office in Street View ↗</a>
        </div>
        <ContactForm />
      </section>
      <section className="office-map-section" aria-labelledby="office-map-title">
        <div className="office-map-heading">
          <div><p className="eyebrow light">Bangkok head office</p><h2 id="office-map-title">Find Wohnen<br /><em>on the map.</em></h2></div>
          <p>13.7901433° N<br />100.5205467° E</p>
        </div>
        <iframe
          title="Wohnen Co., Ltd. office location"
          src="https://www.google.com/maps?q=13.7901433,100.5205467&z=17&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </main></PageFrame>
  );
}
