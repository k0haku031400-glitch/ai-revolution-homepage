"use client";

import { motion } from "framer-motion";
import type { BusinessItem } from "@/types";

/**
 * 事業内容アイテムの定義
 * ここを編集すれば、事業内容を簡単に変更できます
 */
const businessItems: BusinessItem[] = [
  "AIの研究、開発、設計、販売、保守及びコンサル",
  "ソフトの企画、開発、設計、販売、保守、及び運用支援",
  "データの収集、解析の情報提供とコンサル",
  "ビッグデータ処理に関する技術開発",
  "サーバ機器、ネットワーク周辺機器の設計",
  "デジタルコンテンツの企画、設計、販売及びコンサル",
  "教育プログラムの企画、設計、販売及びコンサル",
  "携帯端末と付随するアプリの設計及び構築",
  "イベント、研修、コミュニティビジネスの企画及び運営",
  "電気工事業、建築工事業"
];

/**
 * 事業内容セクションコンポーネント
 */
export const Business: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="business" className="py-24 px-6">
      <div className="mx-auto max-w-[1200px] space-y-12">
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">Business</p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">事業内容</h2>
          <p className="text-lg text-slate-600 md:text-xl">
            AI・ソフトウェア・教育・インフラなど、幅広い分野で事業を展開しています。
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {businessItems.map((item) => (
            <motion.div
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm transition-all duration-300 hover:border-ai-red/30 hover:shadow-md"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

