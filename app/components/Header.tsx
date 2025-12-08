"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/app/components/atoms/Button";
import type { NavItem } from "@/types";

/**
 * ナビゲーションアイテムの定義
 * ここを編集すれば、メニュー項目を簡単に変更できます
 */
const navItems: NavItem[] = [
  { href: "#hero", label: "メイン" },
  { href: "#business", label: "事業内容" },
  { href: "#services", label: "サービス" },
  { href: "#philosophy", label: "理念" },
  { href: "#company", label: "会社概要" },
];

/**
 * ヘッダーコンポーネント
 * 固定ヘッダーで、スクロール時にシャドウを表示
 * アクティブなセクションを自動的にハイライト
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.9)",
        boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        <motion.a
          href="#hero"
          className="text-xl font-bold text-ai-red"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AI Revolution
        </motion.a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === item.href
                  ? "text-ai-red"
                  : "text-slate-700 hover:text-ai-red"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary" className="px-6 py-2 text-sm">
            お問い合わせ
          </Button>
        </div>

        {/* モバイルメニュー */}
        <motion.button
          className="md:hidden"
          whileTap={{ scale: 0.95 }}
          aria-label="メニュー"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-slate-700"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
}
