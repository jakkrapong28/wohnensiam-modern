import type { Metadata } from "next";
import Script from "next/script";
import { LanguageSync } from "./components/language-sync";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wohnensiam.com"),
  title: {
    default: "Wohnen Co., Ltd. | Global Antimony Supply",
    template: "%s | Wohnen Co., Ltd.",
  },
  description:
    "An integrated international trading house connecting responsible sources of high-purity antimony with industries worldwide.",
  keywords: [
    "antimony supplier",
    "antimony trading",
    "critical minerals",
    "antimony logistics",
    "customs compliance",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Critical minerals. Clear commitments.",
    description: "Integrated global antimony supply, coordinated by Wohnen Co., Ltd.",
    type: "website",
    locale: "en_US",
    siteName: "Wohnen Co., Ltd.",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Wohnen global antimony supply" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Critical minerals. Clear commitments.",
    description: "Integrated global antimony supply, coordinated by Wohnen Co., Ltd.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wohnen Co., Ltd.",
  url: "https://wohnensiam.com",
  email: "sales@wohnensiam.com",
  description: "International trading house specializing in global antimony supply.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div id="google_translate_element" className="google-translate-host" aria-hidden="true" suppressHydrationWarning />
        <LanguageSync />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script id="locale-bootstrap" strategy="beforeInteractive">
          {`try{var l=localStorage.getItem('wohnen-locale')||'en';var g=l==='en-SG'?'en':l;document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';document.documentElement.dataset.locale=l;if(g==='en'){document.cookie='googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'}else{document.cookie='googtrans=/en/'+g+'; path=/; SameSite=Lax'}}catch(e){}`}
        </Script>
        <Script id="google-translate-init" strategy="afterInteractive">
          {`window.googleTranslateElementInit=function(){if(window.google&&window.google.translate){new window.google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'ar,zh-CN,en,fr,de,ja,ko,lo,ms,my,th',autoDisplay:false},'google_translate_element');window.dispatchEvent(new CustomEvent('wohnen:locale',{detail:localStorage.getItem('wohnen-locale')||'en'}))}};`}
        </Script>
        <Script id="google-translate-runtime" strategy="afterInteractive" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
      </body>
    </html>
  );
}
