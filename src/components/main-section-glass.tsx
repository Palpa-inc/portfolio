"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import HomeSection from "@/components/sections/home-section";
import WorksSection from "@/components/sections/works-section";

export default function MainSectionGlass() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isTypeItComplete, setIsTypeItComplete] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const { scrollHeight, clientHeight } = scrollContainerRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setIsAtTop(scrollContainerRef.current.scrollTop === 0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-50 mx-auto w-full max-w-2xl rounded-md sm:rounded-3xl border-none sm:border border-white/20 bg-white/5 backdrop-blur-[2px] shadow-2xl"
      style={{
        height: "calc(100vh - 200px)",
        maxHeight: "700px",
      }}
    >
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="h-full overflow-y-auto overscroll-contain px-8 pb-16 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
      >
        <HomeSection onTypeItComplete={() => setIsTypeItComplete(true)} />
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </div>
      {isAtTop && isScrollable && isTypeItComplete && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

