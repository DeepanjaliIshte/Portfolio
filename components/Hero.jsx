"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Mail, Activity, Crosshair } from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import Image from "next/image";

// Multi-Dimensional Kinetic Typography with 3D Assembly & Electric Cyan/Blue Lighting
function KineticLetter({ char, index, variants, isCyan, shouldReduceMotion }) {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    if (shouldReduceMotion) return;
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 700);
  };

  const hoverTilt = index % 2 === 0 ? 4 : -4;

  return (
    <motion.span
      variants={variants}
      onClick={handleClick}
      animate={
        isSpinning
          ? {
            rotateY: [0, 360],
            scale: [1, 1.25, 1],
            color: "#00F0FF",
          }
          : {}
      }
      whileHover={
        !shouldReduceMotion
          ? {
            y: -12,
            scale: 1.18,
            rotateZ: hoverTilt,
            color: "#00F0FF",
            textShadow: "0 0 25px rgba(0, 240, 255, 0.9)",
            transition: { type: "spring", stiffness: 450, damping: 12 },
          }
          : {}
      }
      className={`inline-block transition-colors cursor-pointer select-none ${isCyan ? "text-cyan-gradient" : "text-white"
        }`}
      style={{ willChange: "transform, opacity, filter" }}
      title="Click for kinetic spin"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

function AnimatedKineticTitle({ text, className, delay = 0, isCyan = false }) {
  const shouldReduceMotion = useReducedMotion();
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.045,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 80,
      rotateX: shouldReduceMotion ? 0 : -95,
      rotateY: shouldReduceMotion ? 0 : 15,
      z: -60,
      scale: 0.75,
      filter: shouldReduceMotion ? "none" : "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      z: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 11,
        stiffness: 110,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className={`inline-block overflow-hidden ${className}`}
    >
      {letters.map((char, index) => (
        <KineticLetter
          key={index}
          char={char}
          index={index}
          variants={child}
          isCyan={isCyan}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </motion.span>
  );
}

// Magnetic Button Wrapper with Elastic Physics
function MagneticButton({ children, className, href, download, ariaLabel, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const springConfig = { stiffness: 250, damping: 18 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.25);
    y.set(distanceY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const { name, roles, heroHeadline, quote, github, linkedin, instagram, email, status, resumeUrl, resumeDownloadName } =
    portfolioData.personalInfo;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [showHoloHud, setShowHoloHud] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // 3D Depth Card Tilt & Multi-Layered Parallax
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [depthOffset, setDepthOffset] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 0, y: 0 });
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rX = -(mouseY / (rect.height / 2)) * 12;
    const rY = (mouseX / (rect.width / 2)) * 12;
    setRotate({ x: rX, y: rY });
    setDepthOffset({ x: mouseX * 0.04, y: mouseY * 0.04 });
    setGlarePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    setRotate({ x: 0, y: 0 });
    setDepthOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts[1] || "";

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center pt-28 pb-16 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Editorial Headline & Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">

            {/* Top Status Pill with Stagger Entrance */}
            <motion.div
              initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#080D1A]/90 border border-cyan-500/25 w-fit shadow-lg shadow-cyan-950/40 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
              </span>
              <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase">
                {status}
              </span>
            </motion.div>

            {/* Main Monumental Name with 3D Kinetic Typography */}
            <div className="space-y-1">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-xs md:text-sm font-mono tracking-widest text-[#00F0FF] uppercase font-semibold flex items-center gap-2"
              >
                <span>JAVA DEVELOPER // PORTFOLIO</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                  className="inline-block w-8 h-[1px] bg-[#00F0FF]/50 origin-left"
                />
              </motion.div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                <AnimatedKineticTitle text={firstName} delay={0.25} />
                <br />
                <AnimatedKineticTitle text={lastName} delay={0.55} isCyan />
              </h1>
            </div>

            {/* Headline & Dynamic Role Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col space-y-2"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-zinc-200">
                {heroHeadline}
              </h2>

              <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-zinc-400">
                <span className="text-[#00F0FF] font-bold">&gt;</span>
                <span className="text-zinc-500">specializing in:</span>
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-white font-medium underline decoration-[#00F0FF] decoration-2 underline-offset-4"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </div>
            </motion.div>

            {/* Quote with animated border */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="relative border-l-2 border-[#00F0FF] pl-4 py-1 text-base sm:text-lg text-zinc-400 italic max-w-xl font-light leading-relaxed"
            >
              &ldquo;{quote}&rdquo;
            </motion.blockquote>

            {/* Magnetic Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {/* Button 1: View Projects in Electric Cyan/Blue Glow */}
              <MagneticButton
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00F0FF] hover:from-[#0052cc] hover:to-[#00d4e0] text-black font-semibold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown size={15} className="group-hover:translate-y-1 transition-transform duration-300" />
              </MagneticButton>

              {/* Button 2: Download Resume */}
              <MagneticButton
                href={resumeUrl}
                download={resumeDownloadName}
                ariaLabel="Download Deepanjali Ishte Java Developer Resume"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#080D1A] hover:bg-[#0D152D] border border-cyan-500/30 hover:border-[#00F0FF] text-white text-sm font-medium tracking-wide transition-all shadow-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] cursor-pointer"
              >
                <Download size={15} className="text-[#00F0FF] group-hover:translate-y-0.5 transition-transform duration-300" />
                <span>Download Resume</span>
              </MagneticButton>

              {/* Button 3: Contact Me */}
              <MagneticButton
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-transparent hover:bg-cyan-500/[0.06] border border-slate-700/80 hover:border-cyan-400 text-zinc-300 hover:text-white text-sm font-medium tracking-wide transition-colors cursor-pointer"
              >
                <Mail size={15} />
                <span>Contact Me</span>
              </MagneticButton>
            </motion.div>

            {/* Social Links with Stagger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-6 pt-4 border-t border-white/[0.06]"
            >
              <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                Connect:
              </span>

              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="group flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} className="group-hover:text-[#00F0FF] transition-colors" />
                <span className="hidden sm:inline">GitHub</span>
              </motion.a>

              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="group flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} className="group-hover:text-[#00F0FF] transition-colors" />
                <span className="hidden sm:inline">LinkedIn</span>
              </motion.a>

              <motion.a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="group flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
                aria-label="DeepCodeWarriors Instagram"
              >
                <Instagram size={18} className="group-hover:text-[#00F0FF] transition-colors" />
                <span className="hidden sm:inline">Instagram</span>
              </motion.a>

              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.15, y: -2 }}
                className="group flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
                aria-label="Email Deepanjali Ishte"
              >
                <Mail size={18} className="group-hover:text-[#00F0FF] transition-colors" />
                <span className="hidden sm:inline">Email</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Holographic Cybernetic Chamber & 3D Portrait (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
            style={{ perspective: 1400 }}
          >
            {/* Ambient Electric Blue & Cyan Nebula Halo */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full bg-[#0066FF] blur-[110px] pointer-events-none -z-10"
            />
            <motion.div
              animate={{
                scale: [1.1, 0.95, 1.1],
                opacity: [0.1, 0.22, 0.1],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#00F0FF] blur-[90px] pointer-events-none -z-10"
            />

            {/* 3D Kinetic Card Container */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: rotate.x,
                rotateY: rotate.y,
                x: depthOffset.x,
                y: depthOffset.y,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] cursor-pointer"
            >
              {/* Outer Cybernetic Corner Brackets in Electric Cyan */}
              <motion.div
                initial={{ opacity: 0, x: -14, y: -14 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-[#00F0FF] z-30 pointer-events-none shadow-[0_0_12px_#00F0FF]"
              />
              <motion.div
                initial={{ opacity: 0, x: 14, y: -14 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-[#00F0FF] z-30 pointer-events-none shadow-[0_0_12px_#00F0FF]"
              />
              <motion.div
                initial={{ opacity: 0, x: -14, y: 14 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-[#00F0FF] z-30 pointer-events-none shadow-[0_0_12px_#00F0FF]"
              />
              <motion.div
                initial={{ opacity: 0, x: 14, y: 14 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-[#00F0FF] z-30 pointer-events-none shadow-[0_0_12px_#00F0FF]"
              />

              {/* Main Card Body in Dark Navy */}
              <div className="card-dark rounded-2xl overflow-hidden border border-cyan-500/25 shadow-2xl relative group bg-[#080D1A]">

                {/* Visual Header / Cybernetic Diagnostic Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#050A14] border-b border-cyan-500/20 relative z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] inline-block shadow-[0_0_8px_#00F0FF]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-700 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-800 inline-block"></span>
                    <span className="text-[10px] font-mono text-cyan-400 ml-2">dev.identity::Deepanjali.R.Ishte</span>
                  </div>

                  {/* Interactive Holo HUD Toggle Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowHoloHud((prev) => !prev);
                    }}
                    className={`flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${showHoloHud
                        ? "bg-[#00F0FF] text-black font-bold shadow-[0_0_14px_rgba(0,240,255,0.7)]"
                        : "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                      }`}
                  >
                    <Crosshair size={11} className={showHoloHud ? "animate-spin" : ""} />
                    <span>{showHoloHud ? "HUD ACTIVE" : "HOLO HUD"}</span>
                  </button>
                </div>

                {/* Profile Portrait with Shutter Mask & Holographic Laser */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-[#0D152D] to-[#050814]">
                  <Image
                    src="/images/profile.png"
                    alt="Deepanjali Ishte"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Dynamic Specular Sheen Reflection Following Mouse in Cyan */}
                  {isCardHovered && !shouldReduceMotion && (
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-200 z-10"
                      style={{
                        background: `radial-gradient(350px circle at ${glarePos.x}px ${glarePos.y}px, rgba(0, 240, 255, 0.18), transparent 70%)`,
                      }}
                    />
                  )}

                  {/* Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90 pointer-events-none" />

                  {/* Periodic Holographic Laser Scanner Sweep in Electric Cyan */}
                  {!shouldReduceMotion && (
                    <motion.div
                      animate={{ y: ["-100%", "280%"] }}
                      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                      className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent shadow-[0_0_15px_#00F0FF] pointer-events-none z-20"
                    />
                  )}

                  {/* Interactive Holo Telemetry HUD Overlay in Electric Cyan */}
                  <AnimatePresence>
                    {showHoloHud && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-[#030712]/90 backdrop-blur-sm z-30 p-5 flex flex-col justify-between font-mono text-[11px]"
                      >
                        {/* Radar Crosshair Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-48 h-48 rounded-full border border-cyan-400/30 animate-ping opacity-40" />
                          <div className="w-32 h-32 rounded-full border border-[#00F0FF]/50" />
                        </div>

                        <div className="relative z-10 flex items-center justify-between pb-2 border-b border-cyan-500/20">
                          <span className="text-[#00F0FF] font-bold flex items-center gap-1.5">
                            <Activity size={12} className="animate-pulse" />
                            DIAGNOSTIC MODE
                          </span>
                          <span className="text-[9px] text-cyan-400">SYS_V3.0</span>
                        </div>

                        <div className="relative z-10 space-y-2 py-2 text-zinc-300">
                          <div className="p-2 rounded bg-black/70 border border-cyan-500/25">
                            <div className="text-[9px] text-cyan-400 uppercase">Profile Role</div>
                            <div className="text-white font-bold">Java Developer // Software Engineer</div>
                          </div>
                          <div className="p-2 rounded bg-black/70 border border-cyan-500/25">
                            <div className="text-[9px] text-cyan-400 uppercase">Core Competencies</div>
                            <div className="text-[#38BDF8]">Core Java • Spring Boot • SQL • Kafka • REST APIs</div>
                          </div>
                          <div className="p-2 rounded bg-black/70 border border-cyan-500/25">
                            <div className="text-[9px] text-cyan-400 uppercase">Education &amp; Experience</div>
                            <div className="text-zinc-200">MCA (PES Modern) • Landmark Techedge Intern</div>
                          </div>
                        </div>

                        <div className="relative z-10 pt-2 border-t border-cyan-500/20 flex items-center justify-between text-[10px] text-zinc-400">
                          <span>LOCATION: Pune, IN</span>
                          <span className="text-[#00F0FF] font-bold">STATUS: READY</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Permanent Floating Identity Badge Overlay (TranslateZ Depth) */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{ transform: "translateZ(38px)" }}
                    className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#080D1A]/95 backdrop-blur-md border border-cyan-500/25 shadow-lg z-20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">
                          Deepanjali Ishte
                        </div>
                        <div className="text-[10px] font-mono text-[#38BDF8]">
                          Java Developer • Software Developer
                        </div>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-500/35 text-[9px] font-mono text-[#00F0FF] uppercase">
                        Pune, IN
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Footer Tech Stack Chips */}
                <div className="p-3.5 bg-[#050A14] border-t border-cyan-500/15 flex items-center justify-between text-zinc-400 relative z-20">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    Key Stack:
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-200">Java</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-200">Spring Boot</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-200">Kafka</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-200">REST APIs</span>
                  </div>
                </div>
              </div>

              {/* Satellite Parallax Floating Chips with High Z-Depth */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [0, 2, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute -left-6 top-1/4 items-center gap-2 px-3 py-1.5 rounded-lg bg-[#080D1A]/95 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-200 shadow-2xl"
                style={{ transform: "translateZ(60px)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></span>
                <span>Core Java / Spring Boot</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotateZ: [0, -2, 0],
                }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="hidden sm:flex absolute -right-6 bottom-1/3 items-center gap-2 px-3 py-1.5 rounded-lg bg-[#080D1A]/95 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-200 shadow-2xl"
                style={{ transform: "translateZ(65px)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shadow-[0_0_8px_#0066FF]"></span>
                <span>Kafka / PostgreSQL &amp; APIs</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Cinematic Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative z-10 flex flex-col items-center justify-center mt-12 md:mt-16"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 group-hover:text-[#00F0FF] transition-colors">
            SCROLL TO EXPLORE
          </span>
          <div className="w-5 h-9 rounded-full border border-cyan-500/30 group-hover:border-[#00F0FF] flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{
                y: [0, 14, 0],
                opacity: [1, 0.2, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
