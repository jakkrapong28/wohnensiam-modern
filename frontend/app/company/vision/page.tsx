import type { Metadata } from "next";
import { PageFrame, PageHero } from "../../components/site-chrome";
import { company } from "../../content/business";

export const metadata: Metadata = { title: "Our Vision" };

export default function VisionPage() {
  return (
    <PageFrame><main>
      <PageHero eyebrow="Our vision" title="Responsible supply." accent="Global confidence." image="/media/company/vision.jpg" />
      <section className="route-section statement-page"><span>02 / Vision</span><h2>{company.vision}</h2><div className="statement-pillars"><div><b>Trust</b><p>Integrity in every relationship.</p></div><div><b>Responsibility</b><p>Responsible resource pathways.</p></div><div><b>Excellence</b><p>Disciplined end-to-end execution.</p></div></div><blockquote>“Leading trusted global supply begins with integrity.”<footer>Mr. B. Nimaramwong · CEO and Founder</footer></blockquote></section>
    </main></PageFrame>
  );
}
