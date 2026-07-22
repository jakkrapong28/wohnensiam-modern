import type { Metadata } from "next";
import { PageFrame, PageHero } from "../components/site-chrome";
import { company } from "../content/business";

export const metadata: Metadata = { title: "About Wohnen", description: "Wohnen's international trading history and integrated antimony supply model." };

export default function CompanyPage() {
  return (
    <PageFrame>
      <main>
        <PageHero eyebrow="Company · Established 1993" title="Experience across borders." accent="Trust across decades." image="/media/company/about.jpg">
          <p>For over 30 years, Wohnen has connected responsible resources with demanding global industries.</p>
        </PageHero>
        <section className="route-section split-intro">
          <div><p className="eyebrow">Who we are</p><h2>An international trading house.<br /><em>Built for complex supply.</em></h2></div>
          <div className="prose-large">{company.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>
        <section className="company-metrics">
          <div><strong>{company.founded}</strong><span>Founded in Bangkok</span></div>
          <div><strong>{company.projects}</strong><span>Completed projects</span></div>
          <div><strong>{company.partners}</strong><span>Strategic partners</span></div>
          <div><strong>09</strong><span>Integrated capabilities</span></div>
        </section>
        <section className="route-section company-paths">
          <a href="/company/history"><span>01</span><h3>Our history</h3><p>From international trading to defense technology and critical minerals.</p><b>Explore the timeline ↗</b></a>
          <a href="/company/mission"><span>02</span><h3>Our mission</h3><p>A trusted end-to-end pathway connecting resources with global demand.</p><b>Read our mission ↗</b></a>
          <a href="/company/vision"><span>03</span><h3>Our vision</h3><p>Responsible sourcing and operational excellence at global scale.</p><b>Read our vision ↗</b></a>
          <a href="/company/leadership"><span>04</span><h3>Leadership</h3><p>The people accountable for every commercial relationship.</p><b>Meet the team ↗</b></a>
        </section>
      </main>
    </PageFrame>
  );
}
