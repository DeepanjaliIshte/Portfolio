"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const whatsappMessage = encodeURIComponent(
    "Hi Deepanjali, I visited your developer portfolio and would like to connect regarding a Java Developer / Software Developer opportunity."
  );
  const whatsappUrl = `https://wa.me/917498545921?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:flex mr-3 bg-white dark:bg-[#231C28] px-3.5 py-2 rounded-2xl text-xs font-mono font-bold text-[#292326] dark:text-[#F8F3F6] shadow-md border border-[#EBDCD2] dark:border-[#3D3147] whitespace-nowrap items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Connect on WhatsApp ✨</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Deepanjali Ishte on WhatsApp"
          whileHover={{ scale: 1.08, rotate: [0, -6, 6, 0] }}
          whileTap={{ scale: 0.92 }}
          transition={{
            scale: { type: "spring", stiffness: 400, damping: 15 },
            rotate: { duration: 0.35, ease: "easeInOut" },
          }}
          className="relative flex items-center justify-center w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300"
        >
          <FaWhatsapp className="w-6 h-6 md:w-6.5 md:h-6.5" />
        </motion.a>
      </div>
    </div>
  );
}
