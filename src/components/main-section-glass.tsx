"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";

export default function MainSectionGlass() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 mx-auto w-full max-w-2xl sm:rounded-3xl border border-white/20 bg-white/5 shadow-2xl"
      style={{
        height: "calc(100vh - 200px)",
        maxHeight: "700px",
      }}
    >
      <div className="h-full overflow-y-auto overscroll-contain px-8 py-12 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {/* Home Section */}
        <section
          id="home"
          className="mb-20 min-h-[60vh] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
              {portfolioData.personal.name}
            </h1>
            <p className="mb-6 text-xl text-gray-300 md:text-2xl">
              {portfolioData.personal.role}
            </p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
              {portfolioData.personal.bio}
            </p>
          </motion.div>
        </section>

        {/* About Section */}
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

        {/* Works Section */}
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

        {/* Contact Section */}
        <section
          id="contact"
          className="mb-8 min-h-[40vh] flex flex-col justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
              Contact
            </h2>
            <p className="mb-6 text-base text-gray-300 md:text-lg">
              お気軽にお問い合わせください
            </p>
            <div className="flex justify-center gap-6">
              {portfolioData.socialLinks.map((link, index) => (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full border border-white/20 bg-white/10 p-4 text-gray-300 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
                >
                  <span className="text-sm font-medium">
                    {link.icon.charAt(0).toUpperCase() + link.icon.slice(1)}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}

