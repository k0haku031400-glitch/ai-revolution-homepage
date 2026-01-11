"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

/**
 * Action Baseセクションコンポーネント
 * 3つの独立したサービスカードが並ぶ構成
 */
export const ActionBase: React.FC = () => {
  // アクセントカラー: 鮮やかな青
  const accentBlue = "#00a0e9";
  const pdfUrl = "/action-base-katarogu.pdf";

  // サービスカードのデータ
  const serviceCards = [
    {
      id: "action-base",
      title: "Action Base",
      mainCopy: [
        "「いつか起業したい」「何か新しいことを始めたい」。",
        "そう思いながら、今日まで何も変わらなかった君へ。",
        "Action Baseは、あなたの「妄想」を「現実の事業」へと変えるための起業家育成基地です。ここは学ぶ場所ではなく、明日から「行動者」として生きるための実戦場です。",
      ],
      fee: "月額 1,700円 ",
      features: null,
      buttonText: "詳細を確認する",
      buttonHref: pdfUrl,
      buttonEnabled: true,
    },
    {
      id: "ai-development",
      title: "AI開発",
      mainCopy: [
        "企業の課題を解決するAI受託開発。業務の自動化から新規事業のAI案まで実戦的なソリューションを開発・提供します。",
      ],
      fee: null,
      features: ["受託開発", "プロトタイプ構築", "技術コンサルティング"],
      buttonText: "詳細資料（準備中）",
      buttonHref: "#",
      buttonEnabled: false,
    },
    {
      id: "ai-education",
      title: "AI教育支援・講演",
      subtitle: "AI Education & Speaking",
      mainCopy: [
        "AIを「道具」として使いこなす次世代のリーダーを育成。企業向け研修から学校での講演まで、リテラシー向上と実戦的な活用術を分かりやすく伝えます。",
      ],
      fee: null,
      features: ["企業内研修", "学校・団体向け講演", "AI活用ワークショップ"],
      buttonText: "詳細資料（準備中）",
      buttonHref: "#",
      buttonEnabled: false,
    },
  ];

  return (
    <section id="action-base" className="py-24 md:py-32 px-6 bg-gray-50">
      <div className="mx-auto max-w-[1200px]">
        {/* セクションタイトル: OUR SERVICE（左上配置） */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p
            className="text-sm font-bold uppercase tracking-[0.3em]"
            style={{ color: accentBlue }}
          >
            OUR SERVICE
          </p>
        </motion.div>

        {/* 3つのサービスカード（グリッド状に並ぶ） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="flex flex-col h-full space-y-6">
                {/* タイトル */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="text-sm text-slate-500 font-medium">
                      {card.subtitle}
                    </p>
                  )}
                </div>

                {/* メインコピー */}
                <div className="space-y-3 flex-1">
                  {card.mainCopy.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-base md:text-lg text-slate-600 leading-relaxed"
                    >
                      {text}
                    </p>
                  ))}
                </div>

                {/* 会費情報（Action Baseのみ） */}
                {card.fee && (
                  <div className="pt-2">
                    <p className="text-xl md:text-2xl font-bold text-slate-900">
                      月額 <span style={{ color: accentBlue }}>1,500円</span>
                      <span className="text-base md:text-lg font-normal text-slate-600 ml-2">
                        （Memberステージ）
                      </span>
                    </p>
                  </div>
                )}

                {/* 特徴（AI開発とAI教育支援のみ） */}
                {card.features && (
                  <div className="pt-2 space-y-2">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <ArrowRight
                          className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                          style={{ color: accentBlue }}
                        />
                        <span className="text-sm md:text-base text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* ボタン（下部に配置） */}
                <div className="pt-4 mt-auto">
                  {card.buttonEnabled ? (
                    <motion.a
                      href={card.buttonHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.button
                        className="w-full px-6 py-4 rounded-full font-bold text-white text-sm md:text-base shadow-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                        style={{ backgroundColor: accentBlue }}
                      >
                        <FileText className="h-5 w-5" />
                        {card.buttonText}
                      </motion.button>
                    </motion.a>
                  ) : (
                    <motion.button
                      className="w-full px-6 py-4 rounded-full font-bold text-white text-sm md:text-base shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-not-allowed opacity-60"
                      style={{ backgroundColor: accentBlue }}
                      disabled
                    >
                      <FileText className="h-5 w-5" />
                      {card.buttonText}
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
