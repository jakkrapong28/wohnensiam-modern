import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageFrame } from "../../components/site-chrome";
import { findInsight, insights } from "../../content/insights";

export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = findInsight((await params).slug);
  return post ? { title: post.title, description: post.excerpt, openGraph: { images: [post.image] } } : {};
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = findInsight((await params).slug);
  if (!post) notFound();
  const index = insights.indexOf(post);
  const next = insights[(index + 1) % insights.length];
  return (
    <PageFrame><main className="article-page">
      <section className="article-hero">
        <img src={post.image} alt="" />
        <div><p className="eyebrow light">{post.category}</p><h1>{post.title}</h1><time dateTime={post.date}>{new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(post.date))}</time></div>
      </section>
      <article className="article-body">
        <aside><span>W / Intelligence</span><a href="/insights">← All briefings</a></aside>
        <div className="article-prose"><p className="article-lead">{post.excerpt}</p>{post.body.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 24)}`}>{paragraph}</p>)}</div>
      </article>
      <a className="next-service article-next" href={`/insights/${next.slug}`}><span>Read next</span><h2>{next.title}</h2><b>↗</b></a>
    </main></PageFrame>
  );
}
