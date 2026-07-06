"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hi Deepanjali, I visited your portfolio and came across your profile. I would like to connect with you regarding a job opportunity or software development project."
  );
  const whatsappUrl = `https://wa.me/917498545921?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:flex mr-4 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl text-sm font-medium text-white shadow-xl border border-white/10 whitespace-nowrap"
          >
            Chat with me on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Pulse effect */}
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-[#25D366] -z-10 pointer-events-none"
        />

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Deepanjali on WhatsApp"
          whileHover={{ scale: 1.1, y: -4 }}
          className="relative flex items-center justify-center w-[52px] h-[52px] md:w-[56px] md:h-[56px] rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[0_10px_30px_rgba(37,211,102,0.5)] transition-shadow duration-300"
        >
          <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
          
          {/* Notification Badge */}
          <motion.div 
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1 -right-1 w-[22px] h-[22px] bg-red-500 rounded-full flex items-center justify-center text-[11px] font-bold text-white border-2 border-[#050505] shadow-md"
          >
            1
          </motion.div>
        </motion.a>
      </div>
    </div>
  );
}
