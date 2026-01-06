"use client";

import { motion } from "framer-motion";

/**
 * 将来拡張用：実績データの型定義
 * 実績カードを追加する際に使用します
 */
// type ResultItem = {
//   id: string;
//   title: string;
//   description: string;
//   year: string;
//   category?: string;
//   imageUrl?: string;
//   link?: string;
// };

/**
 * 将来拡張用：実績データの配列
 * 実績を追加する際は、この配列にデータを追加してください
 */
// const resultsData: ResultItem[] = [
//   {
//     id: "career-analysis",
//     title: "AIキャリア分析ツール",
//     description: "学生向けキャリア診断AIの開発",
//     year: "2025",
//     category: "AI開発",
//   },
//   {
//     id: "ems-system",
//     title: "AI×EMS（エネルギーマネジメントシステム）",
//     description: "エネルギー管理を最適化するAIシステムの開発",
//     year: "2025",
//     category: "AI開発",
//   },
// ];

/**
 * 将来拡張用：実績カードコンポーネント
 * 実績を表示する際に使用するコンポーネントです
 */
// const ResultCard: React.FC<{ result: ResultItem }> = ({ result }) => {
//   return (
//     <motion.div
//       className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
//       whileHover={{ scale: 1.02, y: -4 }}
//     >
//       <div className="space-y-3">
//         <div className="flex items-center justify-between">
//           <span className="text-sm font-semibold text-ai-red">{result.year}</span>
//           {result.category && (
//             <span className="text-xs text-slate-500">{result.category}</span>
//           )}
//         </div>
//         <h3 className="text-xl font-bold text-slate-900">{result.title}</h3>
//         <p className="text-slate-600">{result.description}</p>
//       </div>
//     </motion.div>
//   );
// };

/**
 * 実績セクションコンポーネント
 */
export const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 px-6 bg-slate-50/50">
      <div className="mx-auto max-w-[1200px] space-y-12">
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">RESULTS</p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">実績</h2>
          <p className="text-lg text-slate-600 md:text-xl">
            AI Revolutionの実績・プロジェクト紹介を掲載予定です。
          </p>
        </motion.div>

        {/* Coming Soon カード */}
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-red-200 bg-white px-8 py-16 text-center shadow-sm">
            <h3 className="mb-4 text-3xl font-bold text-red-600 md:text-4xl">
              Coming Soon
            </h3>
            <p className="text-slate-600 md:text-lg">
              現在、実績ページを準備中です。
              <br />
              公開まで今しばらくお待ちください。
            </p>
          </div>
        </motion.div>

        {/* 将来拡張用：実績カードグリッド（コメントアウト） */}
        {/* 
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {resultsData.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </motion.div>
        */}
      </div>
    </section>
  );
};

