"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "Bio" },
  { id: "works", label: "Works" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeId, setActiveId] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (navItems.some((item) => item.id === id)) {
            setActiveId(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [isScrolling]);

  const handleNavClick = (id: string) => {
    setIsScrolling(true);
    setActiveId(id);

    const element = document.getElementById(id);
    if (element) {
      // スクロール可能な親要素を探す
      let container: HTMLElement | null = element.parentElement;
      while (container) {
        const style = window.getComputedStyle(container);
        if (style.overflowY === "auto" || style.overflowY === "scroll") {
          break;
        }
        container = container.parentElement;
      }

      if (container) {
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const scrollTop = container.scrollTop + elementRect.top - containerRect.top - 20;

        container.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      } else {
        // フォールバック: 要素自体にスクロール
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 right-0 z-50 w-full">
      <div className="mx-auto flex w-full justify-end px-6 py-8 lg:max-w-3xl lg:px-8">
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer hover:text-white",
                  isActive ? "text-white" : "text-gray-400"
                )}
                type="button"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-white/30"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

