"use client";

import { motion } from "framer-motion";
import type { CompanyInfo } from "@/types";

/**
 * 会社情報の定義
 * ここを編集すれば、会社情報を簡単に変更できます
 */
const companyInfo: CompanyInfo[] = [
  { label: "会社名", value: "株式会社AI Revolution" },
  { label: "所在地", value: "大阪府大阪市北区田１丁目2番2号大阪駅前第2ビル12-12" },
  { label: "設立", value: "2025年4月22日" },
  { label: "資本金", value: "200万円" },
  { label: "代表", value: "代表取締役  中谷　琥珀" }
];

/**
 * 会社概要セクションコンポーネント
 */
export const Company: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="company" className="py-24 px-6 bg-slate-50/50">
      <div className="mx-auto max-w-[1200px] space-y-12">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">Company</p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">会社概要</h2>
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {companyInfo.map((info) => (
            <motion.div
              key={info.label}
              variants={fadeIn}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600 shadow-sm transition-all duration-300 hover:border-ai-red/30 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                {info.label}
              </p>
              <p className="mt-2 text-base text-slate-900">{info.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

