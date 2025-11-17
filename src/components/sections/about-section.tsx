"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
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
        <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
          About
        </h2>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-300 md:text-lg">
            {portfolioData.personal.bio}
          </p>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

