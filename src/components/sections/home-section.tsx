"use client";

import { motion } from "motion/react";
import TaglineTypeIt from "@/components/tagline-typeit";
import { portfolioData } from "@/data/portfolio";

interface HomeSectionProps {
  onTypeItComplete?: () => void;
}

export default function HomeSection({ onTypeItComplete }: HomeSectionProps) {
  return (
    <section
      id="home"
      className="mb-36 min-h-[60vh] flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-1 text-3xl font-bold text-slate-600 dark:text-white">
          {portfolioData.personal.name}
        </h1>
        <p className="mb-6 text-sm text-slate-400 dark:text-gray-300">
          {portfolioData.personal.role}
        </p>

        {/* タイプライターアニメーション（タグライン） */}
        <TaglineTypeIt onComplete={onTypeItComplete} />
      </motion.div>
    </section>
  );
}

