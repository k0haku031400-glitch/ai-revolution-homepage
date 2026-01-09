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
  title: "AI開発・AI受託開発ならAI Revolution｜中小企業向けAI導入",
  description:
    "AI Revolutionは中小企業・スタートアップ向けにAI開発・受託開発を提供。AI×EMS（エネルギーマネジメント）やAIキャリア分析ツールを開発し、企業と人に寄り添うAIを実装します。",
  keywords: ["AI", "人工知能", "AI開発", "AI受託開発", "AI導入", "中小企業", "スタートアップ", "AI×EMS", "AIキャリア分析", "大阪"],
  authors: [{ name: "AI Revolution" }],
  openGraph: {
    title: "AI開発・AI受託開発ならAI Revolution｜中小企業向けAI導入",
    description: "AI Revolutionは中小企業・スタートアップ向けにAI開発・受託開発を提供。AI×EMS（エネルギーマネジメント）やAIキャリア分析ツールを開発し、企業と人に寄り添うAIを実装します。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI開発・AI受託開発ならAI Revolution｜中小企業向けAI導入",
    description: "AI Revolutionは中小企業・スタートアップ向けにAI開発・受託開発を提供。AI×EMS（エネルギーマネジメント）やAIキャリア分析ツールを開発し、企業と人に寄り添うAIを実装します。",
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

