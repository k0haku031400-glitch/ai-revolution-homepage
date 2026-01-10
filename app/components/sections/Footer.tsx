"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

/**
 * フッターコンポーネント
 */
export const Footer: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/_k0hqlx?igsh=czJ1b29yeDY2czdh&utm_source=qr";
  const tiktokUrl = "https://www.tiktok.com/@_k0hlqlx?_r=1&_t=ZS-92vViG8ztw7";

  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          {/* SNSアイコン */}
          <div className="flex items-center justify-center gap-6">
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Instagram"
            >
              <div className="rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-3 shadow-lg transition-all duration-300 group-hover:shadow-xl flex items-center justify-center w-12 h-12">
                <Instagram className="h-6 w-6 text-white" />
              </div>
            </motion.a>

            <motion.a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="TikTok"
            >
              <div className="rounded-full bg-black p-3 shadow-lg transition-all duration-300 group-hover:shadow-xl flex items-center justify-center w-12 h-12 border-2 border-slate-200 ring-2 ring-transparent group-hover:ring-slate-300">
                <img
                  src="/tiktok-icon.png"
                  alt="TikTok"
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6"
                />
              </div>
            </motion.a>
          </div>

          {/* コピーライト */}
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} AI Revolution 株式会社. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

