"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function CinematicIntro({ onComplete }) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState(() => (shouldReduceMotion ? "done" : "loading")); // "loading" | "unveiling" | "done"
  const [progress, setProgress] = useState(0);
  const [terminalMsg, setTerminalMsg] = useState("Initializing Core Java Runtime...");

  const handleSkip = useCallback(() => {
    setPhase("unveiling");
    const timer = setTimeout(() => {
      setPhase("done");
      if (onComplete) onComplete();
    }, 200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    if (shouldReduceMotion) {
      if (onComplete) onComplete();
      return;
    }

    const messages = [
      { at: 15, msg: "Initializing Core Java Runtime..." },
      { at: 42, msg: "Mounting Spring Boot & REST APIs..." },
      { at: 75, msg: "Connecting MySQL & Neural Data Layers..." },
      { at: 92, msg: "Synchronizing Identity: Deepanjali Ishte..." },
      { at: 100, msg: "SYSTEM ONLINE. ENTERING SHOWCASE." },
    ];

    const startTime = performance.now();
    const duration = 1350; // 1.35 seconds — punchy, cinematic, zero waiting fatigue

    let animationFrame;
    let unveilTimeout;

    const tick = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      for (let i = messages.length - 1; i >= 0; i--) {
        if (pct >= messages[i].at) {
          setTerminalMsg(messages[i].msg);
          break;
        }
      }

      if (pct < 100) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        setPhase("unveiling");
        unveilTimeout = setTimeout(() => {
          setPhase("done");
          if (onComplete) onComplete();
        }, 550);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(unveilTimeout);
    };
  }, [shouldReduceMotion, onComplete]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSkip]);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <div
          onClick={handleSkip}
          className="fixed inset-0 z-[9999] pointer-events-auto flex items-center justify-center cursor-pointer select-none overflow-hidden"
          aria-label="Skip cinematic introduction"
        >
          {/* Top Shutter Curtain */}
          <motion.div
            initial={{ y: 0 }}
            animate={phase === "unveiling" ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#030712] border-b border-[#00F0FF]/40 shadow-[0_4px_30px_rgba(0,240,255,0.25)] z-30"
          >
            {/* Luminous laser seam at bottom edge of top shutter */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent shadow-[0_0_18px_#00F0FF]" />
          </motion.div>

          {/* Bottom Shutter Curtain */}
          <motion.div
            initial={{ y: 0 }}
            animate={phase === "unveiling" ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#030712] border-t border-[#00F0FF]/40 shadow-[0_-4px_30px_rgba(0,240,255,0.25)] z-30"
          >
            {/* Luminous laser seam at top edge of bottom shutter */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent shadow-[0_0_18px_#00F0FF]" />
          </motion.div>

          {/* Center Telemetry Chamber */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={
              phase === "unveiling"
                ? { opacity: 0, scale: 1.15, filter: "blur(10px)" }
                : { opacity: 1, scale: 1, filter: "blur(0px)" }
            }
            transition={{ duration: 0.4 }}
            className="relative z-40 flex flex-col items-center justify-center px-6 max-w-xl w-full text-center"
          >
            {/* Ambient Cyan/Blue Glow Halo */}
            <div className="absolute w-80 h-80 rounded-full bg-[#00F0FF] blur-[120px] opacity-20 pointer-events-none -z-10 animate-pulse" />

            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080D1A]/90 border border-cyan-500/25 text-[10px] font-mono tracking-widest text-cyan-300 uppercase mb-4 shadow-lg shadow-cyan-950/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
              <span>SYSTEM ARCHITECTURE ONLINE</span>
            </div>

            {/* Monumental Opening Title: Exactly "Deepanjali's Portfolio" (No year, No 2026) */}
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase drop-shadow-[0_0_35px_rgba(0,240,255,0.45)] mb-2"
            >
              <span>Deepanjali&apos;s</span>{" "}
              <span className="text-cyan-gradient">Portfolio</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase mb-6"
            >
              Java Developer • Software Developer
            </motion.p>

            {/* Precision Laser Progress Bar */}
            <div className="w-full max-w-xs h-[3px] bg-slate-900 rounded-full overflow-hidden relative mb-3 border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#0066FF] via-[#00F0FF] to-white relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#00F0FF,0_0_20px_#FFFFFF]" />
              </motion.div>
            </div>

            {/* Digital Telemetry Status & Percentage */}
            <div className="flex items-center justify-between w-full max-w-xs text-[11px] font-mono text-zinc-400 mb-6">
              <span className="flex items-center gap-1.5">
                <span className="text-[#00F0FF] font-bold">&gt;</span>
                <span className="text-zinc-300 font-light truncate max-w-[210px]">{terminalMsg}</span>
              </span>
              <span className="text-[#00F0FF] font-bold">{progress}%</span>
            </div>

            {/* Skip Hint */}
            <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase hover:text-cyan-400 transition-colors">
              [ Click anywhere or press ESC to enter ]
            </div>
          </motion.div>

          {/* Aperture Shockwave Pulse at Unveiling */}
          {phase === "unveiling" && (
            <motion.div
              initial={{ scale: 0.1, opacity: 0.9 }}
              animate={{ scale: 3.5, opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="absolute z-50 w-64 h-64 rounded-full border-2 border-[#00F0FF] shadow-[0_0_50px_#00F0FF] pointer-events-none"
            />
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
