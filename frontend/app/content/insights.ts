import postsData from "./posts.json";

type RawPost = {
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
};

const imageBySlug: Record<string, string> = {
  "battery-materials": "/media/insights/battery-materials.jpg",
  "market-commentary-geopolitical-analysis-2": "/media/insights/geopolitical-analysis.jpg",
  "global-market-spotlight-australia": "/media/insights/australia.jpg",
  "why-antimony-matters-in-modern-manufacturing": "/media/insights/modern-manufacturing.jpg",
  "critical-mineral-spotlight-rare-earth-elements": "/media/insights/rare-earth-elements.jpg",
  "global-market-spotlight-china-2": "/media/insights/china.jpg",
  "ceo-message-antimony-is-our-business": "/media/insights/ceo-message.jpg",
  "global-market-spotlight-united-states": "/media/insights/united-states.jpg",
  "military-applications": "/media/insights/military-applications.jpg",
  "global-market-spotlight-european-union": "/media/insights/european-union.jpg",
  "supply-chain-trends": "/media/insights/supply-chain-trends.jpg",
  "renewable-energy-materials": "/media/insights/renewable-energy-materials.jpg",
  "global-market-spotlight-thailand": "/media/insights/thailand.jpg",
  "global-market-spotlight-myanmar": "/media/insights/myanmar.jpg",
  "critical-mineral-spotlight-tungsten": "/media/insights/tungsten.jpg",
  "flame-retardants": "/media/insights/flame-retardants.jpg",
  "critical-mineral-spotlight-antimony": "/media/insights/antimony.jpg",
};

function decode(text: string) {
  const named: Record<string, string> = {
    amp: "&", quot: '"', apos: "'", nbsp: " ", ndash: "–", mdash: "—", hellip: "…", rsquo: "’", lsquo: "‘", ldquo: "“", rdquo: "”",
  };
  return text.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (entity, key: string) => {
    if (key[0] === "#") {
      const hex = key[1]?.toLowerCase() === "x";
      const value = Number.parseInt(key.slice(hex ? 2 : 1), hex ? 16 : 10);
      return Number.isFinite(value) ? String.fromCodePoint(value) : entity;
    }
    return named[key.toLowerCase()] ?? entity;
  });
}

function plainText(html: string) {
  return decode(
    html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function paragraphs(html: string) {
  return decode(
    html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<\/(p|h[1-6]|li|blockquote|div)>/gi, "\n")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, " "),
  )
    .split(/\n+/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter((line) => line.length > 1);
}

function categoryFor(slug: string, title: string) {
  if (slug.includes("global-market")) return "Global Intelligence";
  if (slug.includes("critical-mineral")) return "Critical Minerals Spotlight";
  if (slug.includes("market-commentary")) return "Market Commentary";
  if (slug.includes("ceo-message")) return "Corporate News";
  if (/battery|manufacturing|military|renewable|flame/i.test(title)) return "Industry Insights";
  return "Supply Chain Intelligence";
}

export const insights = (postsData as RawPost[]).map((post) => {
  const title = plainText(post.title.rendered);
  const body = paragraphs(post.content.rendered);
  return {
    slug: post.slug,
    title,
    date: post.date,
    category: categoryFor(post.slug, title),
    image: imageBySlug[post.slug] ?? "/media/company/history.jpg",
    excerpt: plainText(post.excerpt.rendered) || body[0] || "Wohnen market intelligence.",
    body,
  };
});

export function findInsight(slug: string) {
  return insights.find((post) => post.slug === slug);
}
