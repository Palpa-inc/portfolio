"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  business: "Business",
  design: "Design",
  tools: "Tools",
  ai: "AI",
  other: "Other",
};

// カテゴリごとのバッジの色クラスを取得
const getCategoryBadgeClasses = (category: string) => {
  const baseClasses =
    "rounded-full px-4 py-2 text-sm backdrop-blur-sm transition-colors";

  switch (category) {
    case "frontend":
      return `${baseClasses} border-cyan-500/30 bg-cyan-500/10 dark:text-cyan-100 text-cyan-600 hover:bg-cyan-500/20`;
    case "backend":
      return `${baseClasses} border-emerald-500/30 bg-emerald-500/10 dark:text-emerald-100 text-emerald-600 hover:bg-emerald-500/20`;
    case "business":
      return `${baseClasses} border-purple-500/30 bg-purple-500/10 dark:text-purple-100 text-purple-600 hover:bg-purple-500/20`;
    case "design":
      return `${baseClasses} border-pink-500/30 bg-pink-500/10 dark:text-pink-100 text-pink-600 hover:bg-pink-500/20`;
    case "tools":
      return `${baseClasses} border-amber-400/30 bg-amber-400/10 dark:text-amber-100 text-amber-600 hover:bg-amber-400/20`;
    case "ai":
      return `${baseClasses} border-indigo-400/30 bg-indigo-400/10 dark:text-indigo-100 text-indigo-600 hover:bg-indigo-400/20`;
    case "other":
      return `${baseClasses} border-slate-400/30 bg-slate-400/10 dark:text-slate-100 text-slate-600 hover:bg-slate-400/20`;
    default:
      return `${baseClasses} border-white/20 bg-white/10 dark:text-gray-300 text-slate-600 hover:bg-white/20`;
  }
};

export default function AboutSection() {
  // Bioを段落に分割
  const bioParagraphs = portfolioData.personal.bio.split(". ").filter(Boolean);

  // スキルをカテゴリ別にグループ化
  const skillsByCategory = portfolioData.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof portfolioData.skills>
  );

  return (
    <section
      id="about"
      className="mb-20 min-h-[60vh] flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-8 text-3xl font-bold text-slate-600 dark:text-white md:text-4xl">
          Bio
        </h2>
        <div className="space-y-8">
          {/* Bio Section */}
          <div className="space-y-4">
            {bioParagraphs.map((paragraph, index) => {
              const trimmedParagraph = paragraph.trim();
              return (
                <motion.p
                  key={`bio-${trimmedParagraph.substring(0, 20)}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-base leading-relaxed dark:text-gray-300 text-slate-600 md:text-lg"
                >
                  {trimmedParagraph}
                  {index < bioParagraphs.length - 1 ? "." : ""}
                </motion.p>
              );
            })}
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Skills
            </h3>
            <div className="space-y-6">
              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="mb-3 text-sm font-medium dark:text-gray-400 text-slate-600 uppercase tracking-wider">
                    {categoryLabels[category] || category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={getCategoryBadgeClasses(category)}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

