import type { Metadata } from "next";
import { PageFrame, PageHero } from "../components/site-chrome";

export const metadata: Metadata = { title: "Compliance" };

export default function CompliancePage() {
  return (
    <PageFrame><main>
      <PageHero eyebrow="Compliance and documentation" title="Trade across borders." accent="Without blind spots." image="/media/services/customs-clearance.jpg"><p>Commercial discipline, KYC, specialist documentation, and clear evidence around every shipment.</p></PageHero>
      <section className="route-section compliance-page">
        <div><p className="eyebrow">Our standard</p><h2>Trust must be<br /><em>demonstrable.</em></h2><p className="prose-large">Every Wohnen transaction is supported by comprehensive KYC. We coordinate commercial records, regulatory documentation, qualified laboratories, independent inspection partners, and specialist logistics providers across the supply chain.</p><a className="button button-primary" href="/media/documents/company-compliance-statement.pdf" target="_blank" rel="noreferrer">Download company statement <span>↓</span></a></div>
        <div className="compliance-principles">
          <article><span>01</span><h3>Lawful sourcing</h3><p>Carefully selected partners and transparent commercial relationships.</p></article>
          <article><span>02</span><h3>International tax compliance</h3><p>Accurate commercial structures and cross-border documentation.</p></article>
          <article><span>03</span><h3>Anti-money laundering</h3><p>Comprehensive KYC and risk-based transaction controls.</p></article>
          <article><span>04</span><h3>Sanctions screening</h3><p>Counterparty and transaction review before commercial engagement.</p></article>
        </div>
      </section>
    </main></PageFrame>
  );
}
