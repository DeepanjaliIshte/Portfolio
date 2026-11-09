"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion();

  // Subtle cute floating stars
  const stars = [
    { x: "8%", y: "14%", size: "text-sm", color: "text-[#F6B8D0]", char: "✦", delay: 0 },
    { x: "92%", y: "18%", size: "text-base", color: "text-[#C9B6F2]", char: "✨", delay: 1.2 },
    { x: "85%", y: "42%", size: "text-xs", color: "text-[#F9E7A0]", char: "⋆", delay: 0.6 },
    { x: "12%", y: "58%", size: "text-sm", color: "text-[#A9D8F5]", char: "✦", delay: 1.8 },
    { x: "90%", y: "74%", size: "text-sm", color: "text-[#B9E6D0]", char: "⋆", delay: 0.9 },
    { x: "6%", y: "88%", size: "text-base", color: "text-[#FFC9A9]", char: "✨", delay: 2.1 },
    { x: "48%", y: "94%", size: "text-xs", color: "text-[#C9B6F2]", char: "✦", delay: 1.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#FFF9F3]">
      {/* Soft Pastel Rainbow Ambient Vignettes */}
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-[#F6B8D0]/25 blur-[140px]" />
      <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full bg-[#A9D8F5]/20 blur-[130px]" />
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[650px] rounded-full bg-[#F9E7A0]/20 blur-[150px]" />
      <div className="absolute bottom-1/4 -right-20 w-[550px] h-[550px] rounded-full bg-[#C9B6F2]/25 blur-[140px]" />
      <div className="absolute -bottom-24 left-10 w-[600px] h-[600px] rounded-full bg-[#B9E6D0]/20 blur-[140px]" />

      {/* Gentle Floating Stars & Sparkles (Respects Reduced Motion) */}
      {!shouldReduceMotion &&
        stars.map((star, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${star.size} ${star.color} select-none opacity-70`}
            style={{ left: star.x, top: star.y }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.85, 0.4],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 3.5 + idx * 0.4,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          >
            {star.char}
          </motion.div>
        ))}
    </div>
  );
}
