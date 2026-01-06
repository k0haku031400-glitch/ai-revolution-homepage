"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * 沿革セクションコンポーネント
 */
export const History: React.FC = () => {
  return (
    <section id="history" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-[1200px] space-y-16">
        {/* セクション見出し */}
        <motion.div
          className="space-y-3 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">HISTORY</p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">沿革</h2>
        </motion.div>

        {/* なぜ起業したか（Purpose / Why） */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">なぜ起業したのか</h3>
          <div className="max-w-3xl space-y-4 text-slate-700 leading-relaxed">
            <p>
              AIが躍動するこの時代において、
              <br />
              AIは一部の専門家や大企業だけのものではなく、
              <br />
              <strong className="font-semibold text-slate-900">
                誰もが使いこなし、人生や経営を前に進めるための力
              </strong>
              になると考えています。
            </p>
            <p>
              企業経営における課題から、
              <br />
              日常にある身近な悩みや選択まで。
              <br />
              それらを「人に寄り添うAI」によって解決することで、
              <br />
              一人ひとりがより良い意思決定を行い、
              <br />
              自分の人生に主体的に向き合える社会を実現したい。
            </p>
            <p className="font-medium text-slate-900">
              その想いから、株式会社AI Revolutionを設立しました。
            </p>
          </div>
        </motion.div>

        {/* プロフィール概要と全身写真 */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 md:items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 全身写真（SP：上、PC：左） */}
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <Image
                src="/profile-full.jpg"
                alt="代表取締役 中谷琥珀 全身写真"
                width={600}
                height={800}
                className="object-cover w-full h-auto"
                priority={false}
              />
            </div>
          </div>

          {/* プロフィール概要（SP：下、PC：右） */}
          <div className="order-1 space-y-4 md:order-2">
            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">プロフィール概要</h3>
            <ul className="space-y-3 text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-ai-red font-semibold mt-1">•</span>
                <span>2007年生まれ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ai-red font-semibold mt-1">•</span>
                <span>2025年 大阪ビジネスフロンティア高等学校 卒業</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ai-red font-semibold mt-1">•</span>
                <span>2025年 関西外国語大学 入学</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ai-red font-semibold mt-1">•</span>
                <span>2025年4月22日 株式会社AI Revolution 設立</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ai-red font-semibold mt-1">•</span>
                <span>AI×EMS（エネルギーマネジメントシステム）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ai-red font-semibold mt-1">•</span>
                <span>AIキャリア分析ツールの開発に携わる</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 詳細年表（Timeline） */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">詳細年表</h3>
          
          <div className="relative pl-6 border-l-2 border-red-500 space-y-6">
            {/* 2022年 */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold text-red-600">2022年</h4>
              <p className="text-slate-700 leading-relaxed">
                大阪ビジネスフロンティア高等学校 入学
                <br />
                簿記・経済学などビジネスの基礎を学び、
                <br />
                在学中に日商簿記検定3級を取得。
              </p>
            </motion.div>

            {/* 2025年 */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold text-red-600">2025年</h4>
              <p className="text-slate-700 leading-relaxed">
                大阪ビジネスフロンティア高等学校 卒業
                <br />
                関西外国語大学 入学（英語・中国語を専攻）
                <br />
                資本金200万円で株式会社AI Revolutionを設立
                <br />
                AIによるEMS（エネルギーマネジメントシステム）および
                <br />
                AIキャリア分析ツールの開発を開始。
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

