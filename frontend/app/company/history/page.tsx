import type { Metadata } from "next";
import { PageFrame, PageHero } from "../../components/site-chrome";
import { timeline } from "../../content/business";

export const metadata: Metadata = { title: "Our History" };

export default function HistoryPage() {
  return (
    <PageFrame>
      <main>
        <PageHero eyebrow="Company history" title="Three decades of" accent="strategic evolution." image="/media/company/history.jpg">
          <p>Wohnen evolved from a regional trading company into a coordinator of highly technical international supply chains.</p>
        </PageHero>
        <section className="route-section timeline-page">
          <div className="section-heading"><p className="eyebrow">1993 — Today</p><h2>Built one trusted<br /><em>relationship at a time.</em></h2></div>
          <div className="timeline-list">
            {timeline.map((item) => (
              <article key={item.year}>
                <div className="timeline-year">{item.year}</div>
                <img src={item.image} alt="" />
                <div><span>{item.label}</span><h3>{item.title}</h3><p>{item.copy}</p></div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
