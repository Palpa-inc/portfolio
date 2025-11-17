"use client";

import { motion } from "motion/react";
import TaglineTypeIt from "@/components/tagline-typeit";
import { portfolioData } from "@/data/portfolio";

export default function HomeSection() {
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
        <h1 className="mb-1 text-3xl font-bold text-white">
          {portfolioData.personal.name}
        </h1>
        <p className="mb-6 text-sm text-gray-300">
          {portfolioData.personal.role}
        </p>

        {/* タイプライターアニメーション（タグライン） */}
        <TaglineTypeIt />
      </motion.div>
    </section>
  );
}

