"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/atoms/Button";

// Google FormのURL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeWKMtmuKOCAiaBDkQweoyZ2fmitd9FqEtl_RdQkQrWyaCUNw/viewform?usp=header";

/**
 * お問い合わせセクションコンポーネント
 * Google Formへのリンクボタンを提供
 */
export const Contact: React.FC = () => {

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-[1200px] space-y-12">
        <motion.div
          className="space-y-2 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-ai-red">Contact</p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">お問い合わせ</h2>
          <p className="text-lg text-slate-600 md:text-xl max-w-2xl mx-auto">
            ご相談内容をお送りいただければ、担当より3営業日以内にご連絡いたします。
          </p>
        </motion.div>

        {/* Google Formリンクセクション */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            className="rounded-3xl border border-slate-200 bg-slate-50/60 p-12 md:p-16 shadow-sm w-full max-w-2xl text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-slate-600 mb-8 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              お問い合わせはGoogle Formで受け付けています。
              <br />
              下記のボタンからお進みください。
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                href={GOOGLE_FORM_URL}
                variant="primary"
                className="px-12 py-4 text-base md:text-lg"
              >
                お問い合わせ
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
