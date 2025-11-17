"use client";

import { motion } from "motion/react";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import HomeSection from "@/components/sections/home-section";
import WorksSection from "@/components/sections/works-section";

export default function MainSectionGlass() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 mx-auto w-full max-w-2xl sm:rounded-3xl border border-white/20 bg-white/5 backdrop-blur-[2px] shadow-2xl"
      style={{
        height: "calc(100vh - 200px)",
        maxHeight: "700px",
      }}
    >
      <div className="h-full overflow-y-auto overscroll-contain px-8 py-12 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <HomeSection />
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </div>
    </motion.div>
  );
}

