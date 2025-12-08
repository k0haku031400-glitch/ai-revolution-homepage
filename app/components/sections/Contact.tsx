"use client";

import { motion } from "framer-motion";
import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/app/components/atoms/Button";
import type { ContactFormValues, ContactApiResponse } from "@/types";

// Google FormのURL（オプション：フォーム送信と併用可能）
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

/**
 * お問い合わせセクションコンポーネント
 * フォーム送信とGoogle Formリンクの両方に対応
 */
export const Contact: React.FC = () => {
  // フォームの状態管理
  const [formValues, setFormValues] = useState<Partial<ContactFormValues>>({
    name: "",
    email: "",
    message: "",
    budget: "",
    deadline: "",
    company: "",
    interest: "",
  });

  // UI状態管理
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  /**
   * フォーム入力値の変更ハンドラー
   */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    // エラーメッセージをクリア
    if (submitStatus.type === "error") {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  /**
   * フォーム送信ハンドラー
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // APIに送信
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data: ContactApiResponse = await response.json();

      if (response.ok && data.success) {
        // 成功時の処理
        setSubmitStatus({
          type: "success",
          message: data.message || "お問い合わせありがとうございます。3営業日以内にご連絡いたします。",
        });
        // フォームをリセット
        setFormValues({
          name: "",
          email: "",
          message: "",
          budget: "",
          deadline: "",
          company: "",
          interest: "",
        });
      } else {
        // エラー時の処理
        const errorMessage =
          data.errors && data.errors.length > 0
            ? data.errors.join("\n")
            : data.message || "送信に失敗しました。もう一度お試しください。";
        setSubmitStatus({
          type: "error",
          message: errorMessage,
        });
      }
    } catch (error) {
      // ネットワークエラーなどの予期しないエラー
      console.error("お問い合わせ送信エラー:", error);
      setSubmitStatus({
        type: "error",
        message: "ネットワークエラーが発生しました。しばらく時間をおいて再度お試しください。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <br />
            フォーム送信またはGoogle Formのどちらでもお問い合わせいただけます。
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* フォーム送信セクション */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50/60 p-6 md:p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">フォームから送信</h3>

            <motion.label
              className="block space-y-2 text-sm text-slate-600"
              whileFocus={{ scale: 1.02 }}
            >
              <span className="font-semibold">
                お名前 <span className="text-ai-red">*</span>
              </span>
              <input
                type="text"
                name="name"
                value={formValues.name || ""}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-ai-red focus:ring-2 focus:ring-ai-red/30 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </motion.label>

            <motion.label
              className="block space-y-2 text-sm text-slate-600"
              whileFocus={{ scale: 1.02 }}
            >
              <span className="font-semibold">
                メールアドレス <span className="text-ai-red">*</span>
              </span>
              <input
                type="email"
                name="email"
                value={formValues.email || ""}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-ai-red focus:ring-2 focus:ring-ai-red/30 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </motion.label>

            <motion.label
              className="block space-y-2 text-sm text-slate-600"
              whileFocus={{ scale: 1.02 }}
            >
              <span className="font-semibold">会社名 / 所属</span>
              <input
                type="text"
                name="company"
                value={formValues.company || ""}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-ai-red focus:ring-2 focus:ring-ai-red/30 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </motion.label>

            <motion.label
              className="block space-y-2 text-sm text-slate-600"
              whileFocus={{ scale: 1.02 }}
            >
              <span className="font-semibold">ご希望の対応</span>
              <select
                name="interest"
                value={formValues.interest || ""}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-ai-red focus:ring-2 focus:ring-ai-red/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">選択してください</option>
                <option value="AI開発受注">AI開発受注</option>
                <option value="講演">講演</option>
                <option value="ホームページ制作">ホームページ制作</option>
                <option value="その他">その他</option>
              </select>
            </motion.label>cd "/Users/nakatanikohaku/Documents/AI Revolution/あいれぼ　ホームページ"  # すでに居るなら不要

git init
git add .
git commit -m "first commit"
git branch -M main

            <motion.label
              className="block space-y-2 text-sm text-slate-600"
              whileFocus={{ scale: 1.02 }}
            >
              <span className="font-semibold">予算（任意）</span>
              <input
                type="text"
                name="budget"
                value={formValues.budget || ""}
                onChange={handleChange}
                placeholder="例：50万円〜100万円"
                disabled={isSubmitting}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-ai-red focus:ring-2 focus:ring-ai-red/30 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </motion.label>

            <motion.label
              className="block space-y-2 text-sm text-slate-600"
              whileFocus={{ scale: 1.02 }}
            >
              <span className="font-semibold">希望期限（任意）</span>
              <input
                type="text"
                name="deadline"
                value={formValues.deadline || ""}
                onChange={handleChange}
                placeholder="例：2025年6月末まで"
                disabled={isSubmitting}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-ai-red focus:ring-2 focus:ring-ai-red/30 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </motion.label>

            <motion.label
              className="block space-y-2 text-sm text-slate-600"
              whileFocus={{ scale: 1.02 }}
            >
              <span className="font-semibold">
                お問い合わせ内容 <span className="text-ai-red">*</span>
              </span>
              <textarea
                name="message"
                rows={5}
                value={formValues.message || ""}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-ai-red focus:ring-2 focus:ring-ai-red/30 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </motion.label>

            {/* ステータスメッセージ */}
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-2xl p-4 text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </motion.div>
            )}

            <motion.div
              whileHover={isSubmitting ? {} : { scale: 1.02 }}
              whileTap={isSubmitting ? {} : { scale: 0.98 }}
            >
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full px-8 py-4 text-base"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </Button>
            </motion.div>
          </motion.form>

          {/* Google Formリンクセクション */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-8"
          >
            <motion.div
              className="rounded-3xl border border-slate-200 bg-slate-50/60 p-12 md:p-16 shadow-sm w-full text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Google Formから送信</h3>
              <motion.p
                className="text-slate-600 mb-8 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                お問い合わせフォームはGoogle Formでも受け付けています。
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
                  お問い合わせフォームを開く
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
