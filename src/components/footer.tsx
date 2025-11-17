"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { Github, Twitter, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  x: Twitter,
  twitter: Twitter,
  linkedin: Linkedin,
};

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full">
      <div className="mx-auto flex w-full flex-col items-center gap-4 px-6 py-8 lg:max-w-3xl lg:px-8">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-sm font-medium text-gray-400">Contact</h3>
          <div className="flex items-center gap-6">
            {portfolioData.socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon];
              if (!Icon) return null;
              
              return (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

