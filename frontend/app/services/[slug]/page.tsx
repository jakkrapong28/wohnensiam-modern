import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageFrame, PageHero } from "../../components/site-chrome";
import { findService, services } from "../../content/business";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const service = findService((await params).slug);
  return service ? { title: service.title, description: service.summary } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const service = findService((await params).slug);
  if (!service) notFound();
  const next = services[(services.indexOf(service) + 1) % services.length];
  return (
    <PageFrame><main>
      <PageHero eyebrow={`${service.number} / Integrated services · ${service.shortTitle}`} title={service.title} accent={service.kicker} image={service.image}><p>{service.summary}</p></PageHero>
      <section className="route-section service-detail">
        <div className="service-detail-copy"><p className="eyebrow">What we coordinate</p><h2>Clarity at a<br /><em>critical stage.</em></h2>{service.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <aside><span>W / Commitment</span><h3>Operational priorities</h3><ul>{service.commitments.map((item) => <li key={item}><i>✓</i>{item}</li>)}</ul><a className="button button-primary" href={`/contact?service=${service.slug}`}>Discuss this service <b>→</b></a></aside>
      </section>
      <a className="next-service" href={`/services/${next.slug}`}><span>Next capability · {next.number}</span><h2>{next.title}</h2><b>↗</b></a>
    </main></PageFrame>
  );
}
