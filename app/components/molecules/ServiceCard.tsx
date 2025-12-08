"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Service } from "@/types";

/**
 * サービスカードのProps型
 */
interface ServiceCardProps extends Service {
  index: number;
}

export const ServiceCard = ({
  id,
  title,
  summary,
  target,
  details,
  note,
  index,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group flex flex-col rounded-3xl border border-slate-200 p-6 shadow-sm transition-all duration-300"
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="mb-4 flex items-center gap-3">
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="h-12 w-12 rounded-full bg-ai-red/10 flex items-center justify-center"
        >
          <motion.div
            className="h-6 w-6 rounded-full bg-ai-red"
            animate={{ scale: isHovered ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <p className="text-sm font-semibold text-ai-red">{target}</p>
      </div>
      
      <h3 className="mt-2 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{summary}</p>
      
      <dl className="mt-4 flex-1 space-y-3 text-sm text-slate-600">
        {details.map((detail, idx) => (
          <motion.div
            key={detail}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
            className="flex gap-2"
          >
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ai-red flex-shrink-0"></span>
            <span>{detail}</span>
          </motion.div>
        ))}
      </dl>
      
      {note && (
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
          {note}
        </p>
      )}
    </motion.article>
  );
};

