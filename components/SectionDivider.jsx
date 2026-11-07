"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function SectionDivider() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className="w-full h-[1px] bg-white/[0.06] my-6" />;
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto py-4 px-6 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Background Subtle Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent relative">
        {/* Animated Laser Spark that triggers on scroll in-view */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent origin-center shadow-[0_0_12px_#00F0FF]"
        />

        {/* Traveling Light Pulse */}
        <motion.div
          animate={{ x: ["-10%", "110%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          className="absolute top-1/2 -translate-y-1/2 w-16 h-[2px] bg-white shadow-[0_0_10px_#00F0FF,0_0_20px_#38BDF8]"
        />
      </div>
    </div>
  );
}

