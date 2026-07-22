import type { Metadata } from "next";
import { PageFrame, PageHero } from "../../components/site-chrome";
import { team } from "../../content/business";

export const metadata: Metadata = { title: "Leadership Team" };

export default function LeadershipPage() {
  return (
    <PageFrame>
      <main>
        <PageHero eyebrow="Leadership" title="Experienced people." accent="Clear accountability." image="/media/company/team.jpg">
          <p>Commercial, legal, technical, financial, and operational expertise around one shared commitment.</p>
        </PageHero>
        <section className="route-section team-page">
          <div className="section-heading"><p className="eyebrow">Management team</p><h2>The people behind<br /><em>every commitment.</em></h2></div>
          <div className="team-grid">
            {team.map((member, index) => (
              <article key={member.name}>
                <div className="team-image"><img src={member.image} alt={member.name} /><span>{String(index + 1).padStart(2, "0")}</span></div>
                <p>{member.role}</p><h3>{member.name}</h3>
              </article>
            ))}
          </div>
          <blockquote className="founder-quote"><p>“Excellence begins with trust, delivered every day.”</p><footer>Mr. B. Nimaramwong · CEO and Founder</footer></blockquote>
        </section>
      </main>
    </PageFrame>
  );
}
