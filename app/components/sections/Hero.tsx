"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/atoms/Button";

/**
 * ヒーローセクションコンポーネント
 */
export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="hero" className="relative bg-ai-red py-32 px-6 text-white overflow-hidden">
      {/* 背景アニメーション */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-ai-red via-red-600 to-red-800" />
      </motion.div>

      <motion.div
        className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={itemVariants}
          className="text-sm font-semibold tracking-[0.5em] uppercase text-white/80"
        >
          AI × 人に寄り添うサービス
        </motion.span>

        <motion.h1
          variants={titleVariants}
          className="text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
        >
          AI Always
          <br />
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="inline-block"
          >
            With You
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed"
        >
          AIを誰でも使える簡単なツールに。人に寄り添うAIで一人でも多くの人が豊かな暮らしをできる社会を目指します。
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button href="#contact" variant="secondary">
            お問い合わせ
          </Button>
        </motion.div>
      </motion.div>

      {/* 装飾的な要素 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </section>
  );
};

