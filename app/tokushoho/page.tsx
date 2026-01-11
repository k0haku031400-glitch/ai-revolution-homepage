"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/sections/Footer";

/**
 * 特定商取引法に基づく表記のデータ
 */
const tokushohoData = [
  { label: "事業者名", value: "株式会社AI Revolution" },
  { label: "代表者", value: "代表取締役 中谷 琥珀" },
  {
    label: "所在地",
    value: "〒530-0001\n大阪府大阪市北区梅田1丁目2番2号\n大阪駅前第2ビル12-12",
  },
  { label: "電話番号", value: "070-4815-2734" },
  {
    label: "メールアドレス",
    value: (
      <a
        href="mailto:k0haku031400@gmail.com"
        className="text-ai-red hover:underline"
      >
        k0haku031400@gmail.com
      </a>
    ),
  },
  {
    label: "販売価格",
    value: "各サービスの料金は、サービスごとに異なります。詳細は各サービスのページをご確認ください。",
  },
  {
    label: "支払方法",
    value: "各サービスにより異なります。詳細は各サービスのページまたはお問い合わせフォームからご確認ください。",
  },
  {
    label: "支払時期",
    value: "各サービスにより異なります。詳細は各サービスのページまたはお問い合わせフォームからご確認ください。",
  },
  {
    label: "サービス提供時期",
    value: "お申込み後、各サービスにより異なります。詳細はお問い合わせフォームからご確認ください。",
  },
  {
    label: "返品・キャンセルについて",
    value: "サービスの性質上、原則として返金には対応しておりません。ただし、サービス内容と異なる場合は、お問い合わせフォームよりご連絡ください。",
  },
  {
    label: "その他",
    value: "その他ご不明な点がございましたら、お問い合わせフォームよりお気軽にお問い合わせください。",
  },
];

/**
 * 特定商取引法に基づく表記ページ
 */
export default function TokushohoPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header />

      <main className="min-h-screen">
        <section className="py-24 px-6">
          <div className="mx-auto max-w-[1200px] space-y-12">
            {/* パンくずリスト */}
            <motion.nav
              className="text-sm text-slate-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              aria-label="パンくずリスト"
            >
              <ol className="flex items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-ai-red transition-colors duration-300"
                  >
                    ホーム
                  </Link>
                </li>
                <li className="text-slate-400">/</li>
                <li className="text-slate-700">特定商取引法に基づく表記</li>
              </ol>
            </motion.nav>

            {/* タイトルセクション */}
            <motion.div
              className="space-y-4 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">
                Legal
              </p>
              <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
                特定商取引法に基づく表記
              </h1>
            </motion.div>

            {/* 表形式の内容 */}
            <motion.div
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="divide-y divide-slate-200">
                {tokushohoData.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="grid grid-cols-1 gap-4 p-6 md:grid-cols-[250px_1fr] md:gap-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  >
                    <dt className="text-sm font-bold text-slate-900 md:text-base">
                      {item.label}
                    </dt>
                    <dd className="whitespace-pre-line text-sm leading-relaxed text-slate-600 md:text-base">
                      {typeof item.value === "string" ? item.value : item.value}
                    </dd>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* お問い合わせリンク */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="/#contact"
                className="text-ai-red hover:underline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                お問い合わせはこちら
              </motion.a>
            </motion.div>

            {/* トップページへ戻るボタン */}
            <motion.div
              className="flex justify-center pt-8 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.a
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-ai-red px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#c00010] hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="h-5 w-5" />
                トップページへ戻る
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
