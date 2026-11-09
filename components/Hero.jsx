"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import Image from "next/image";

export default function Hero() {
  const {
    roles,
    location,
    quote,
    github,
    linkedin,
    instagram,
    email,
    status,
    resumeUrl,
    resumeDownloadName,
  } = portfolioData.personalInfo;

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [roles.length]);

  // Cute pastel colors for core stack chips
  const stackChips = [
    { name: "Core Java", bg: "bg-[#F6B8D0]/30", border: "border-[#F6B8D0]/80", text: "text-[#8C244C]" },
    { name: "Spring Boot", bg: "bg-[#B9E6D0]/35", border: "border-[#B9E6D0]/80", text: "text-[#196B45]" },
    { name: "REST APIs", bg: "bg-[#A9D8F5]/35", border: "border-[#A9D8F5]/80", text: "text-[#1C5B85]" },
    { name: "SQL / MySQL", bg: "bg-[#C9B6F2]/30", border: "border-[#C9B6F2]/80", text: "text-[#4E378C]" },
    { name: "Kafka", bg: "bg-[#FFC9A9]/35", border: "border-[#FFC9A9]/80", text: "text-[#8A3F15]" },
    { name: "Docker", bg: "bg-[#F9E7A0]/40", border: "border-[#F9E7A0]/90", text: "text-[#735F0D]" },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col pt-24 pb-6 md:pt-28 md:pb-10 overflow-hidden bg-[#FFF9F3]"
    >
      {/* Subtle Cute Rainbow Background Watermark */}
      <div className="absolute top-16 right-6 md:right-16 text-[110px] md:text-[200px] font-serif font-bold text-[#F6B8D0]/15 select-none pointer-events-none leading-none -z-0">
        DRI
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Cute Editorial Headline & Credentials (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4 md:space-y-5">
            
            {/* Cute Editorial Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EBDCD2] text-[#292326] text-xs font-mono tracking-wider uppercase font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F6B8D0] to-[#C9B6F2] animate-pulse" />
                <span>Deepanjali&apos;s Portfolio</span>
                <span className="text-[#C9B6F2]">✨</span>
              </span>
              <span className="text-xs font-mono font-medium text-[#574F54] uppercase tracking-wider hidden sm:inline-block">
                // {location}
              </span>
            </motion.div>

            {/* Display Name with Masked Line Reveal & Rainbow Accent */}
            <div className="space-y-1.5">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#292326] leading-[1.08]">
                <span className="block overflow-hidden pb-1">
                  <motion.span
                    initial={shouldReduceMotion ? { y: 0 } : { y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    Deepanjali
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={shouldReduceMotion ? { y: 0 } : { y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block rainbow-gradient-text italic font-normal"
                  >
                    R. Ishte
                  </motion.span>
                </span>
              </h1>
              
              {/* Dynamic Role Indicator */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap items-center gap-2 pt-1 text-base sm:text-xl font-semibold text-[#292326]"
              >
                <span>Java Developer &amp; Software Developer</span>
                <span className="text-[#F6B8D0] font-bold">•</span>
                <span className="font-mono text-sm text-[#A13A64] font-bold bg-white px-3 py-1 rounded-xl border border-[#EBDCD2] min-w-[170px] inline-flex items-center shadow-2xs">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRoleIndex}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
                      transition={{ duration: 0.25 }}
                    >
                      {roles[currentRoleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.div>
            </div>

            {/* Personal Statement */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-[#292326] leading-[1.65] max-w-2xl font-normal"
            >
              MCA graduate and software engineer specializing in <strong className="text-[#8C244C] font-bold">Core Java</strong>, <strong className="text-[#196B45] font-bold">Spring Boot</strong>, and <strong className="text-[#4E378C] font-bold">distributed systems</strong>. Focused on architecting reliable backend services, REST APIs, and database persistence with clean object-oriented precision.
            </motion.p>

            {/* Cute Editorial Highlight Quote */}
            <motion.blockquote
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-l-[3.5px] border-[#C9B6F2] bg-white/70 px-4 py-2 rounded-r-xl text-sm sm:text-base text-[#292326] font-medium italic font-serif leading-relaxed shadow-2xs"
            >
              &ldquo;{quote}&rdquo;
            </motion.blockquote>

            {/* Key Technical Competencies in Cute Pastel Chips */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-2 pt-0.5 text-xs font-mono"
            >
              <span className="text-[#A13A64] font-bold flex items-center gap-1">
                <span>Core Stack</span>
                <span className="text-xs">✨:</span>
              </span>
              {stackChips.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1 rounded-full ${tech.bg} border ${tech.border} ${tech.text} font-bold shadow-2xs transition-transform hover:scale-105 cursor-default`}
                >
                  {tech.name}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons with High Contrast & Cute Rainbow Glow */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <motion.a
                href="#projects"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.01 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] text-[#292326] text-xs font-mono font-bold tracking-wider transition-all shadow-md shadow-[#F6B8D0]/30 hover:shadow-lg hover:shadow-[#C9B6F2]/40 cursor-pointer"
              >
                <span>EXPLORE PROJECTS</span>
                <Sparkles size={14} className="text-[#8C244C] group-hover:rotate-12 transition-transform" />
              </motion.a>

              <motion.a
                href={resumeUrl}
                download={resumeDownloadName}
                aria-label="Download Deepanjali Ishte Java Developer Resume"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.01 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FFF9F3] border border-[#EBDCD2] hover:border-[#F6B8D0] text-[#292326] text-xs font-mono font-bold tracking-wider transition-all shadow-2xs hover:shadow-[0_4px_14px_rgba(246,184,208,0.25)] cursor-pointer"
              >
                <Download size={14} className="text-[#A13A64] group-hover:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD RESUME</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={shouldReduceMotion ? {} : { x: 2 }}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-[#292326] hover:text-[#A13A64] text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer"
              >
                <span>Contact</span>
                <ArrowUpRight size={14} />
              </motion.a>
            </motion.div>

            {/* Verified Social Channels */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6 pt-3 border-t border-[#EBDCD2]"
            >
              <span className="text-xs font-mono text-[#A13A64] uppercase tracking-wider font-bold flex items-center gap-1">
                <span>Verified</span>
                <span className="text-xs">🌈:</span>
              </span>

              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -1 }}
                className="group flex items-center gap-1.5 text-xs font-mono font-semibold text-[#292326] hover:text-[#8C244C] transition-colors"
                aria-label="Deepanjali Ishte GitHub"
              >
                <Github size={16} className="text-[#292326] group-hover:text-[#8C244C]" />
                <span className="hidden sm:inline">GitHub</span>
              </motion.a>

              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -1 }}
                className="group flex items-center gap-1.5 text-xs font-mono font-semibold text-[#292326] hover:text-[#1C5B85] transition-colors"
                aria-label="Deepanjali Ishte LinkedIn"
              >
                <Linkedin size={16} className="text-[#292326] group-hover:text-[#1C5B85]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </motion.a>

              <motion.a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -1 }}
                className="group flex items-center gap-1.5 text-xs font-mono font-semibold text-[#292326] hover:text-[#8C244C] transition-colors"
                aria-label="DeepCodeWarriors Community Instagram"
              >
                <Instagram size={16} className="text-[#292326] group-hover:text-[#8C244C]" />
                <span className="hidden sm:inline">DeepCodeWarriors</span>
              </motion.a>

              <motion.a
                href={`mailto:${email}`}
                whileHover={shouldReduceMotion ? {} : { scale: 1.08, y: -1 }}
                className="group flex items-center gap-1.5 text-xs font-mono font-semibold text-[#292326] hover:text-[#4E378C] transition-colors"
                aria-label="Email Deepanjali Ishte"
              >
                <Mail size={16} className="text-[#292326] group-hover:text-[#4E378C]" />
                <span className="hidden sm:inline">Email</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Layered Cute Editorial Portrait Chamber (5 Cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Background Decorative Layer Frame in Cute Pastel Rainbow */}
            <div className="absolute -top-3 -right-3 w-full max-w-[320px] sm:max-w-[360px] aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#F6B8D0]/60 via-[#FFC9A9]/50 via-[#F9E7A0]/50 to-[#C9B6F2]/60 border border-[#EBDCD2] -z-10 shadow-sm" />

            {/* Cute Floating Accent Stars */}
            <div className="absolute -top-6 -left-3 text-[#F6B8D0] text-lg select-none pointer-events-none">✨</div>
            <div className="absolute -bottom-4 -right-4 text-[#C9B6F2] text-xl select-none pointer-events-none">✦</div>
            <div className="absolute top-1/2 -right-6 text-[#F9E7A0] text-sm select-none pointer-events-none">⋆</div>

            {/* Portrait Container */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] rounded-2xl overflow-hidden bg-white border border-[#EBDCD2] shadow-lg shadow-[#C9B6F2]/20 group">
              
              {/* Cute Frame Header with Pastel Candies */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-[#EBDCD2]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F6B8D0]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F9E7A0]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B9E6D0]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A9D8F5]" />
                </div>
                <span className="text-xs font-mono font-bold text-[#292326] uppercase tracking-wider flex items-center gap-1">
                  <span>Deepanjali R. Ishte</span>
                  <span className="text-[#C9B6F2]">✦</span>
                </span>
              </div>

              {/* Real Profile Photo with Controlled Hover Scale */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FFF9F3]">
                <Image
                  src="/images/profile.png"
                  alt="Deepanjali R. Ishte — Java Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-top filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-103"
                />

                {/* Subtle Warm Gradient Vignette at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292326]/85 via-transparent to-transparent opacity-85 pointer-events-none" />

                {/* Floating Bottom Identity Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#EBDCD2] shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-serif font-bold text-sm text-[#292326] flex items-center gap-1">
                        <span>Deepanjali R. Ishte</span>
                        <span className="text-xs text-[#F6B8D0]">✨</span>
                      </div>
                      <div className="text-xs font-mono font-bold text-[#A13A64]">
                        Java Developer • Software Developer
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#196B45] bg-[#B9E6D0]/40 px-2.5 py-0.5 rounded-full border border-[#B9E6D0]/80">
                      <CheckCircle2 size={12} className="text-[#196B45]" />
                      <span>{status}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editorial Caption Bar */}
              <div className="p-2.5 bg-white border-t border-[#EBDCD2] flex items-center justify-between text-xs font-mono text-[#292326] font-semibold">
                <span>P.E.S. Modern College of Engg.</span>
                <span className="text-[#A13A64] font-bold">MCA (2024–2026)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Cute Scroll Prompt */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-6 md:mt-8">
        <a
          href="#about"
          className="group flex flex-col items-center gap-1.5 text-[#292326] hover:text-[#A13A64] transition-colors cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="text-xs font-mono tracking-widest uppercase font-bold flex items-center gap-1">
            <span>SCROLL TO EXPLORE</span>
            <span className="text-[#F6B8D0]">✨</span>
          </span>
          <div className="w-5 h-7 rounded-full border border-[#EBDCD2] group-hover:border-[#C9B6F2] flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F6B8D0] to-[#C9B6F2]"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
