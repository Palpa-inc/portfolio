"use client";

import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  x: Twitter,
  twitter: Twitter,
  linkedin: Linkedin,
};

export default function ContactSection() {
  return (
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
        <h2 className="mb-4 text-3xl font-bold text-slate-600 dark:text-white md:text-4xl">
          Contact
        </h2>
        <p className="mb-6 text-base dark:text-gray-300 text-slate-500 md:text-lg max-w-xs mx-auto">
          Want to chat? Drop me a line.
        </p>
        <div className="flex justify-center gap-6">
          {portfolioData.socialLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            if (!Icon) return null;

            return (
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
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Icon className="h-7 w-7" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

