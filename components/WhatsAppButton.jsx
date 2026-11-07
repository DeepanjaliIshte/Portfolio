"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const whatsappMessage = encodeURIComponent(
    "Hi Deepanjali, I visited your portfolio and came across your profile. I would like to connect with you regarding a job opportunity or software development project."
  );
  const whatsappUrl = `https://wa.me/917498545921?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex mr-3 bg-[#080D1A]/95 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-200 shadow-2xl border border-cyan-900/40 whitespace-nowrap items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] shadow-[0_0_6px_#25D366]"></span>
            <span>Connect on WhatsApp</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={!shouldReduceMotion ? { y: [0, -4, 0] } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle Pulse Halo */}
        {!shouldReduceMotion && (
          <motion.div
            animate={{ scale: [1, 1.45], opacity: [0.4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-[#25D366] -z-10 pointer-events-none"
          />
        )}

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Deepanjali Ishte on WhatsApp"
          whileHover={{ scale: 1.1, rotate: [0, -6, 6, 0] }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-[0_0_25px_rgba(37,211,102,0.45)] transition-shadow duration-300"
        >
          <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" />

          {/* Activity Dot with Subtle Ping */}
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#00F0FF] rounded-full border-2 border-[#030712] shadow-[0_0_8px_#00F0FF]" />
        </motion.a>
      </motion.div>
    </div>
  );
}
