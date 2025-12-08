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
  title: "AI Revolution | AI Always With You",
  description:
    "AI Revolutionのホームページ。AIをより身近なものに。AI設計、AI教育・導入支援、ホームページ制作などのサービスを提供しています。",
  keywords: ["AI", "人工知能", "AI開発", "AI教育", "ホームページ制作", "大阪"],
  authors: [{ name: "AI Revolution" }],
  openGraph: {
    title: "AI Revolution | AI Always With You",
    description: "AIを誰でも使える簡単なツールに。人に寄り添うAIで一人でも多くの人が豊かな暮らしをできる社会を目指します。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Revolution | AI Always With You",
    description: "AIを誰でも使える簡単なツールに。人に寄り添うAIで一人でも多くの人が豊かな暮らしをできる社会を目指します。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" className={`${noto.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

