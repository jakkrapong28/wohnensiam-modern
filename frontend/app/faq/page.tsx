import type { Metadata } from "next";
import { PageFrame, PageHero } from "../components/site-chrome";
import { faqs } from "../content/business";

export const metadata: Metadata = { title: "Frequently Asked Questions" };

export default function FaqPage() {
  return (
    <PageFrame><main>
      <PageHero eyebrow="Practical answers" title="Questions buyers" accent="ask first." image="/media/company/about.jpg"><p>Direct answers about Wohnen’s role, transparency, quality assurance, and tailored supply programs.</p></PageHero>
      <section className="route-section faq-page"><div><p className="eyebrow">FAQ</p><h2>Clear before<br /><em>we begin.</em></h2><p>Need to discuss a specification or transaction directly?</p><a className="text-link" href="/contact">Talk to our team <span>↗</span></a></div><div>{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")} · {faq.question}</span><b>+</b></summary><p>{faq.answer}</p></details>)}</div></section>
    </main></PageFrame>
  );
}
