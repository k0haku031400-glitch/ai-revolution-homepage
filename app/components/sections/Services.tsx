"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/app/components/molecules/ServiceCard";
import type { Service } from "@/types";

/**
 * サービス一覧データ
 * ここを編集すれば、サービス内容を簡単に変更できます
 */
const services: Service[] = [
  {
    id: "geometry",
    title: "AI 設計",
    summary: "あなたのAI×〇〇のアイデアを実現します",
    target: "中小企業〜大企業までの幅広いニーズにお応えします",
    details: [
      "AIのアイデアから実現までのロードマップ",
      "開発費やスケジュールの見積もり",
      "その後の保守や運用のサポート"
    ],
  },
  {
    id: "education",
    title: "AI教育・導入支援と講演",
    summary: "AIが誰でも使える簡単なツールに",
    target: "企業・自治体の人材育成・学校法人",
    details: [
      "AIの基本知識から実践までの研修",
      "AIの活用方法やツールの使い方のサポート",
      "社内におけるAIの活用を支援"
    ]
  },
  {
    id: "experience",
    title: "ホームページ制作",
    summary: "AIを活用したホームページ制作",
    target: "起業してすぐの方やホームページの改正を検討している方",
    details: [
      "デザインや機能のヒアリング及び提案",
      "費用やスケジュールの見積もり",
      "その後の保守や運用のサポート"
    ]
  }
];

/**
 * サービスセクションコンポーネント
 */
export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50/50">
      <div className="mx-auto max-w-[1200px] space-y-12">
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">Services</p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">サービス</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

