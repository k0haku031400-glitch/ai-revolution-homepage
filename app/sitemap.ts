import { MetadataRoute } from "next";

/**
 * サイトマップ生成
 * Next.jsが自動的に /sitemap.xml を生成します
 * Google Search Consoleに送信するためのサイトマップ
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // 環境変数からベースURLを取得（本番環境では https://ai-revo.co.jp）
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-revo.co.jp";

  // サイトマップに含めるページの定義
  // アンカーリンク（#businessなど）は含めず、実際のページURLのみを含めます
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    // 将来的に追加するページがある場合は、ここに追加してください
    // 例：
    // {
    //   url: `${baseUrl}/results`,
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
  ];
}

