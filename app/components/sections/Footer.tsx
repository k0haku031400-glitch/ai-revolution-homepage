"use client";

import { motion } from "framer-motion";

/**
 * フッターコンポーネント
 */
export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-slate-500"
        >
          <p>© {new Date().getFullYear()} AI Revolution 株式会社. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

