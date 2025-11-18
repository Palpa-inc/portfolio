"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";

// type別のグラデーション背景を生成
const getGradientBackground = (type: "service" | "achievement" | "project") => {
  const gradients = {
    service: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    achievement: "linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 50%, #16213e 100%)",
    project: "linear-gradient(135deg, #1a1a2e 0%, #2d1b3d 50%, #1a1a2e 100%)",
  };
  return gradients[type];
};

// 高さのバリエーション（リズム感を出すため）
const getHeightClass = (index: number) => {
  const pattern = index % 3;
  switch (pattern) {
    case 0:
      return "h-[400px] sm:h-[500px]"; // 大
    case 1:
      return "h-[300px] sm:h-[400px]"; // 中
    case 2:
      return "h-[250px] sm:h-[350px]"; // 小
    default:
      return "h-[300px] sm:h-[400px]";
  }
};

export default function WorksSection() {
  return (
    <section
      id="works"
      className="mb-20 min-h-[60vh] flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-12 text-3xl font-bold text-slate-600 dark:text-white md:text-4xl">
          Works
        </h2>
        <div className="space-y-8">
          {portfolioData.works.map((work, index) => {
            const heightClass = getHeightClass(index);
            const hasImage = !!work.img;

            return (
              <motion.div
                key={`${work.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative ${heightClass} rounded-2xl overflow-hidden group transition-all duration-300 hover:ring-1 hover:ring-white/20`}
              >
                {/* 背景画像またはグラデーション */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: hasImage
                      ? `url(${work.img})`
                      : "none",
                    background: hasImage
                      ? undefined
                      : getGradientBackground(work.type),
                    filter: hasImage ? "dark:brightness(0.4)" : "none",
                  }}
                />

                {/* 暗いオーバーレイ */}
                <div className="absolute inset-0 z-10 bg-linear-to-b from-black/30 via-black/40 to-black/50 dark:from-white/30 dark:via-white/40 dark:to-white/50 transition-opacity duration-300 group-hover:from-black/20 group-hover:via-black/30 group-hover:to-black/40" />

                {/* コンテンツ */}
                <div className="relative z-20 h-full flex flex-col justify-between p-8 sm:p-10">
                  {/* タイトル */}
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {work.title}
                  </motion.h3>

                  {/* 詳細情報 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="space-y-4"
                  >
                    <p className="text-white/90 text-base leading-relaxed">
                      {work.description}
                    </p>
                    {work.link && (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm sm:text-base font-medium"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
