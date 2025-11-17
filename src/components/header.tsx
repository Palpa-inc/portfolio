"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeId, setActiveId] = useState("home");

  return (
    <header className="fixed top-0 right-0 z-50 w-full">
      <div className="mx-auto flex w-full justify-end px-6 py-8 lg:max-w-3xl lg:px-8">
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={cn("relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer hover:text-white",     isActive ? "text-white" : "text-gray-400")}
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

