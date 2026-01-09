import { MetadataRoute } from "next";

/**
 * robots.txt生成
 * Next.jsが自動的に /robots.txt を生成します
 * クローラーの動きを制御するためのファイル
 */
export default function robots(): MetadataRoute.Robots {
  // 環境変数からベースURLを取得（本番環境では https://ai-revo.co.jp）
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-revo.co.jp";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // APIルートはクロールしない
          "/_next/", // Next.jsの内部ファイルはクロールしない
          "/admin/", // 管理画面がある場合
        ],
      },
      // 特定のボットに対して異なるルールを設定する場合
      // {
      //   userAgent: "Googlebot",
      //   allow: "/",
      //   disallow: ["/api/"],
      // },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

