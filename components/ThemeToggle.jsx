"use client";
import { Sun, Moon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, mounted } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const isDark = mounted ? theme === "dark" : false;

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.94 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode (Warm Ivory)" : "Switch to dark mode (Midnight Plum)"}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-[#231C28] border border-[#EBDCD2] dark:border-[#3D3147] hover:border-[#F6B8D0] dark:hover:border-[#C9B6F2] text-[#292326] dark:text-[#F8F3F6] shadow-2xs hover:shadow-[0_2px_12px_rgba(201,182,242,0.3)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9B6F2] ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Sun Icon (Visible in Dark Mode to switch to Light) */}
        <motion.div
          initial={false}
          animate={
            shouldReduceMotion
              ? { opacity: isDark ? 1 : 0 }
              : {
                  opacity: isDark ? 1 : 0,
                  rotate: isDark ? 0 : -90,
                  scale: isDark ? 1 : 0.6,
                }
          }
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-[#F9E7A0]"
        >
          <Sun size={17} className="stroke-[2.2]" />
        </motion.div>

        {/* Moon Icon (Visible in Light Mode to switch to Dark) */}
        <motion.div
          initial={false}
          animate={
            shouldReduceMotion
              ? { opacity: !isDark ? 1 : 0 }
              : {
                  opacity: !isDark ? 1 : 0,
                  rotate: !isDark ? 0 : 90,
                  scale: !isDark ? 1 : 0.6,
                }
          }
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-[#8C244C] dark:text-[#C9B6F2]"
        >
          <Moon size={16} className="stroke-[2.2]" />
        </motion.div>
      </div>
    </motion.button>
  );
}

