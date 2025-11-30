import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import "../styles/globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp"
});

export const metadata: Metadata = {
  title: "AI Revolution | AI Always With You",
  description:
    "AI Revolutionのホームページ。AIをより身近なものに"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" className={`${noto.variable} scroll-smooth`}>
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

