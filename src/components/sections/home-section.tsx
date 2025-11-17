"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";

// テキスト内のハイライト部分を処理する関数
const renderTextWithHighlights = (text: string, highlights: string[]) => {
  if (highlights.length === 0) return text;

  const result: React.ReactNode[] = [];
  let remainingText = text;
  let keyIndex = 0;

  highlights.forEach((highlight) => {
    const index = remainingText.indexOf(highlight);
    if (index !== -1) {
      // ハイライト前のテキスト
      if (index > 0) {
        result.push(
          <span key={`text-${keyIndex++}`}>{remainingText.substring(0, index)}</span>
        );
      }
      // ハイライト部分（マーカー風）
      result.push(
        <span
          key={`highlight-${keyIndex++}`}
          className="bg-yellow-400/90 px-1 text-black"
        >
          {highlight}
        </span>
      );
      remainingText = remainingText.substring(index + highlight.length);
    }
  });

  // 残りのテキスト
  if (remainingText) {
    result.push(<span key={`text-${keyIndex++}`}>{remainingText}</span>);
  }

  return result;
};

export default function HomeSection() {
  return (
    <section
      id="home"
      className="mb-20 min-h-[60vh] flex flex-col justify-center"
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
        <p className="mb-6 text-base text-gray-300">
          {portfolioData.personal.role}
        </p>

        {/* おしゃれな文章（タグライン） */}
        <div className="mb-8 space-y-3">
          {portfolioData.personal.taglines.map((tagline, index) => (
            <motion.p
              key={tagline.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="text-lg font-medium text-gray-200 md:text-xl"
            >
              {renderTextWithHighlights(tagline.text, tagline.highlights)}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

