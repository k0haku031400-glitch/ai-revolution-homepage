"use client";

import { motion } from "framer-motion";
import type { PhilosophyPoint } from "@/types";

/**
 * 理念ポイントの定義
 * ここを編集すれば、理念内容を簡単に変更できます
 */
const philosophyPoints: PhilosophyPoint[] = [
  "「AIは特別な人だけのもの」ではなく、誰の生活にも馴染むサポートであるべきと考えています。",
  "人とAIの対話を大切にし、信頼性と透明性を最優先に設計します。",
  "地域や社会との共創を通して、持続可能な未来の実現をめざします。"
];

/**
 * 理念セクションコンポーネント
 */
export const Philosophy: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="philosophy" className="py-24 px-6">
      <div className="mx-auto max-w-[1200px] space-y-12">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">Philosophy</p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">理念</h2>
          <p className="text-lg text-slate-600 md:text-xl">
            テクノロジーの進化を、生活を支える確かな安心とするために。
          </p>
        </motion.div>

        <motion.ul
          className="space-y-6 text-slate-600"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {philosophyPoints.map((point, index) => (
            <motion.li
              key={point}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              whileHover={{ scale: 1.02, x: index % 2 === 0 ? 10 : -10 }}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 md:p-8 text-base md:text-lg shadow-sm transition-all duration-300"
            >
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

