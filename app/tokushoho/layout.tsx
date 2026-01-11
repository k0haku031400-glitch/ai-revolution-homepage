import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | 株式会社AI Revolution",
  description:
    "株式会社AI Revolutionの特定商取引法に基づく表記ページです。事業者情報、販売価格、支払方法、返品・キャンセルポリシーなど、お取引に関する重要事項をご確認いただけます。",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TokushohoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
