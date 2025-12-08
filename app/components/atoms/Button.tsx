"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

/**
 * ボタンコンポーネント
 * プライマリ、セカンダリ、アウトラインの3つのバリアントに対応
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseClasses = "rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-ai-red text-white hover:bg-[#c00010]",
    secondary: "bg-white text-ai-red hover:shadow-lg",
    outline: "border-2 border-ai-red text-ai-red bg-transparent hover:bg-ai-red hover:text-white",
  };

  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <motion.a
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${className} inline-block`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {children}
      </motion.a>
    );
  }

  return buttonContent;
};

