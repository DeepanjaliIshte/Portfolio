"use client";
import { ArrowUp, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { github, linkedin, email, name } = portfolioData.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-cyan-900/30 bg-[#030712] relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Rights */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></span>
            <span className="font-bold text-sm tracking-tight text-white uppercase">
              {name}
            </span>
            <span className="text-cyan-600 font-mono text-xs">{"// ALL RIGHTS RESERVED"}</span>
          </div>
          <p className="text-zinc-500 text-xs font-mono">
            Crafted with Next.js, React, Tailwind CSS, &amp; Framer Motion.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex items-center gap-6">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            className="text-zinc-400 hover:text-[#00F0FF] transition-colors cursor-pointer"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </motion.a>

          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            className="text-zinc-400 hover:text-[#00F0FF] transition-colors cursor-pointer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </motion.a>

          <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.15, y: -2 }}
            className="text-zinc-400 hover:text-[#00F0FF] transition-colors cursor-pointer"
            aria-label="Email Deepanjali Ishte"
          >
            <Mail size={18} />
          </motion.a>
        </div>

        {/* Right: Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080D1A] border border-cyan-900/40 text-zinc-400 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 text-xs font-mono transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]"
          aria-label="Scroll to top of page"
        >
          <span>TOP</span>
          <ArrowUp size={12} className="text-[#00F0FF]" />
        </motion.button>
      </div>
    </footer>
  );
}
