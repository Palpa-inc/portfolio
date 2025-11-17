"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";

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
        <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
          Works
        </h2>
        <div className="space-y-6">
          {portfolioData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <h3 className="mb-2 text-xl font-semibold text-white">
                {achievement.title}
              </h3>
              <p className="mb-2 text-gray-300">{achievement.description}</p>
              {achievement.url && (
                <a
                  href={achievement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 underline transition-colors hover:text-white"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

