import type { Metadata } from "next";
import { PageFrame, PageHero } from "../../components/site-chrome";
import { company } from "../../content/business";

export const metadata: Metadata = { title: "Our Mission" };

export default function MissionPage() {
  return (
    <PageFrame><main>
      <PageHero eyebrow="Our mission" title="From source to market," accent="trust leads every step." image="/media/company/mission.jpg" />
      <section className="route-section statement-page"><span>01 / Mission</span><h2>{company.mission}</h2><div className="statement-pillars"><div><b>Purpose</b><p>Connecting global industries.</p></div><div><b>Commitment</b><p>Delivering trusted solutions.</p></div><div><b>Promise</b><p>Reliable every shipment.</p></div></div><blockquote>“From source to market, trust leads every step.”<footer>Peter K. Yap · Chief Advisor</footer></blockquote></section>
    </main></PageFrame>
  );
}
