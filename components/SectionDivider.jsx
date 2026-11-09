"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function SectionDivider() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="w-full max-w-5xl mx-auto py-2 px-6 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#EBDCD2] to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto py-2.5 px-6 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#EBDCD2] to-transparent relative flex items-center justify-center">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-28 h-[2px] bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] via-[#F9E7A0] via-[#B9E6D0] via-[#A9D8F5] to-[#C9B6F2] rounded-full"
        />
        <div className="absolute flex items-center justify-center -translate-y-1/2 top-1/2 bg-[#FFF9F3] px-2 text-[#C9B6F2] text-[11px] font-mono">
          ✦
        </div>
      </div>
    </div>
  );
}
