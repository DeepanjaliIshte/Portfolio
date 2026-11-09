"use client";
import { ArrowUp, Mail, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Instagram } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { github, linkedin, instagram, email } = portfolioData.personalInfo;
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[#EBDCD2] bg-[#FFF9F3] relative z-10 text-[#292326]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Rights */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2]" />
            <span className="font-serif font-bold text-base tracking-tight text-[#292326] flex items-center gap-1">
              <span>Deepanjali&apos;s Portfolio</span>
              <span className="text-xs text-[#C9B6F2]">✨</span>
            </span>
            <span className="text-[#A13A64] font-mono text-xs font-bold">• Deepanjali R. Ishte</span>
          </div>
          <p className="text-[#574F54] text-xs font-mono font-medium">
            Java Developer &amp; Software Developer • Pune, Maharashtra, India.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-6">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
            className="text-[#292326] hover:text-[#8C244C] transition-colors cursor-pointer"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </motion.a>

          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
            className="text-[#292326] hover:text-[#1C5B85] transition-colors cursor-pointer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </motion.a>

          <motion.a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
            className="text-[#292326] hover:text-[#8C244C] transition-colors cursor-pointer"
            aria-label="DeepCodeWarriors Community Instagram"
          >
            <Instagram size={18} />
          </motion.a>

          <motion.a
            href={`mailto:${email}`}
            whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -2 }}
            className="text-[#292326] hover:text-[#4E378C] transition-colors cursor-pointer"
            aria-label="Email Deepanjali Ishte"
          >
            <Mail size={18} />
          </motion.a>
        </div>

        {/* Right: Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#EBDCD2] hover:border-[#F6B8D0] text-[#292326] text-xs font-mono font-bold transition-all cursor-pointer shadow-2xs hover:shadow-[0_4px_14px_rgba(246,184,208,0.25)]"
          aria-label="Scroll to top of page"
        >
          <span>TOP</span>
          <ArrowUp size={13} className="text-[#8C244C]" />
          <span className="text-[10px] text-[#C9B6F2]">✨</span>
        </motion.button>

      </div>
    </footer>
  );
}
