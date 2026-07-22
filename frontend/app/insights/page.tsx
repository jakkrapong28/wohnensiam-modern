import type { Metadata } from "next";
import { PageFrame, PageHero } from "../components/site-chrome";
import { insights } from "../content/insights";

export const metadata: Metadata = { title: "Market Intelligence", description: "Wohnen insights on antimony, critical minerals, applications, and global markets." };

export default function InsightsPage() {
  return (
    <PageFrame><main>
      <PageHero eyebrow="Market intelligence · 17 briefings" title="Signals worth" accent="paying attention to." image="/media/insights/geopolitical-analysis.jpg"><p>Company perspectives for buyers and decision-makers navigating critical-mineral markets.</p></PageHero>
      <section className="route-section insights-page">
        <div className="section-heading inline-heading"><div><p className="eyebrow">Latest updates</p><h2>Context for better<br /><em>material decisions.</em></h2></div><p>Critical minerals, industrial applications, regional markets, supply chains, and company direction.</p></div>
        <div className="all-insights-grid">
          {insights.map((post, index) => (
            <article key={post.slug} className={index === 0 ? "wide" : undefined}>
              <a href={`/insights/${post.slug}`} className="insight-image"><img src={post.image} alt="" /><span>{post.category}</span></a>
              <div><time dateTime={post.date}>{new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(post.date))}</time><h3><a href={`/insights/${post.slug}`}>{post.title}</a></h3><p>{post.excerpt}</p><a className="text-link" href={`/insights/${post.slug}`}>Read briefing <span>↗</span></a></div>
            </article>
          ))}
        </div>
      </section>
    </main></PageFrame>
  );
}
