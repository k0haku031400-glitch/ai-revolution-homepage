import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import "../styles/globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-revo.co.jp"),
  title: "株式会社AI Revolution | 会社へのAI導入・AI受託開発・起業を志す学生を支援",
  description:
    "株式会社AI Revolutionは、企業のAI導入やAI開発を支援します。AI技術を活用した業務効率化から、実現したいAI案の開発、企業を目指す学生の育成・支援まで、現代社会に革命的なソリューションを提供します。",
  keywords: ["会社AI導入", "AI開発", "株式会社AI Revolution", "起業支援", "学生起業"],
  authors: [{ name: "株式会社AI Revolution" }],
  openGraph: {
    title: "株式会社AI Revolution | 会社へのAI導入・AI受託開発・起業を志す学生を支援",
    description: "株式会社AI Revolutionは、企業のAI導入やAI開発を支援します。AI技術を活用した業務効率化から、実現したいAI案の開発、企業を目指す学生の育成・支援まで、現代社会に革命的なソリューションを提供します。",
    type: "website",
    locale: "ja_JP",
    url: "https://ai-revo.co.jp",
    siteName: "株式会社AI Revolution",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社AI Revolution | 会社へのAI導入・AI受託開発・起業を志す学生を支援",
    description: "株式会社AI Revolutionは、企業のAI導入やAI開発を支援します。AI技術を活用した業務効率化から、実現したいAI案の開発、企業を目指す学生の育成・支援まで、現代社会に革命的なソリューションを提供します。",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // 構造化データ（JSON-LD）: Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社AI Revolution",
    alternateName: "AI Revolution",
    url: "https://ai-revo.co.jp",
    logo: "https://ai-revo.co.jp/logo-ai-revolution.jpg",
    description:
      "株式会社AI Revolutionは、企業のAI導入やAI開発を支援します。AI技術を活用した業務効率化から、実現したいAI案の開発、企業を目指す学生の育成・支援まで、現代社会に革命的なソリューションを提供します。",
    address: {
      "@type": "PostalAddress",
      addressLocality: "大阪市北区",
      addressRegion: "大阪府",
      streetAddress: "梅田1丁目2番2号大阪駅前第2ビル12-12",
      postalCode: "530-0001",
      addressCountry: "JP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+81-70-4815-2734",
      contactType: "customer service",
      email: "k0haku031400@gmail.com",
    },
    foundingDate: "2025-04-22",
    sameAs: [],
  };

  return (
    <html lang="ja" className={`${noto.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

