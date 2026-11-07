"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Cpu, Activity, Download, MessageSquare, Check, Copy } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function RuntimeTelemetryHud() {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });
  const [scrollPct, setScrollPct] = useState(0);
  const [copied, setCopied] = useState(false);
  const { resumeUrl, resumeDownloadName, email } = portfolioData.personalInfo;

  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMouseCoord({ x: e.clientX, y: e.clientY });
      });
    };

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollPct(Math.round((window.scrollY / total) * 100));
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside aria-label="System Runtime Telemetry HUD" className="fixed bottom-6 left-6 z-40 select-none">
      {/* Floating Trigger Pill */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#080D1A]/90 backdrop-blur-md border border-cyan-900/40 hover:border-[#00F0FF]/60 text-zinc-300 hover:text-[#00F0FF] text-xs font-mono shadow-2xl transition-all cursor-pointer"
        aria-label="Toggle runtime developer telemetry HUD"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
        </span>
        <Terminal size={13} className="text-[#00F0FF]" />
        <span className="hidden sm:inline tracking-wider uppercase text-[11px]">
          {isOpen ? "CLOSE HUD" : "SYSTEM TELEMETRY"}
        </span>
      </motion.button>

      {/* Futuristic Expanded Console Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 15, scale: 0.92, filter: "blur(6px)" }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-12 left-0 w-[310px] sm:w-[360px] p-4 sm:p-5 rounded-2xl bg-[#080D1A]/95 backdrop-blur-xl border border-cyan-900/50 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(0,240,255,0.2)] font-mono z-50 overflow-hidden"
          >
            {/* Top Laser Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent shadow-[0_0_10px_#00F0FF]" />

            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyan-900/30">
              <div className="flex items-center gap-2">
                <Cpu size={15} className="text-[#00F0FF]" />
                <span className="text-xs font-bold text-white tracking-wider uppercase">
                  DEV_HUD // RUNTIME SYSTEM
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                aria-label="Close telemetry console"
              >
                <X size={15} />
              </button>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 gap-2 text-[11px] mb-3">
              <div className="p-2 rounded-lg bg-[#0B132B] border border-cyan-900/40">
                <div className="text-[9px] text-zinc-500 uppercase">Mouse Pos</div>
                <div className="text-zinc-200 font-bold mt-0.5">
                  X:{mouseCoord.x} Y:{mouseCoord.y}
                </div>
              </div>
              <div className="p-2 rounded-lg bg-[#0B132B] border border-cyan-900/40">
                <div className="text-[9px] text-zinc-500 uppercase">Scroll Progress</div>
                <div className="text-[#00F0FF] font-bold mt-0.5">{scrollPct}% Depth</div>
              </div>
            </div>

            {/* Core Stack Architecture Status */}
            <div className="space-y-1.5 mb-4 text-[10px]">
              <div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1 flex items-center justify-between">
                <span>Verified Stack Health</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Activity size={10} className="animate-pulse" /> 100% OPERATIONAL
                </span>
              </div>

              <div className="flex items-center justify-between p-1.5 rounded bg-[#0B132B] border border-cyan-900/40">
                <span className="text-zinc-300">Core Java (OOP, Threads, DSA)</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">READY</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-[#0B132B] border border-cyan-900/40">
                <span className="text-zinc-300">Spring Boot &amp; REST APIs</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-[#0B132B] border border-cyan-900/40">
                <span className="text-zinc-300">MySQL &amp; Relational Schemas</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">CONNECTED</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-[#0B132B] border border-cyan-900/40">
                <span className="text-zinc-300">Next.js 16 + React 19 Engine</span>
                <span className="px-1.5 py-0.5 rounded bg-[#00F0FF]/20 text-[#00F0FF] font-bold">TURBOPACK</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-3 border-t border-cyan-900/30 flex items-center gap-2">
              <a
                href={resumeUrl}
                download={resumeDownloadName}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00F0FF] hover:from-[#1D4ED8] hover:to-[#00D4E0] text-black text-[11px] font-bold shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all cursor-pointer"
              >
                <Download size={12} />
                <span>RESUME (PDF)</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#0B132B] hover:bg-[#111c3d] border border-cyan-900/40 text-zinc-300 hover:text-[#00F0FF] text-[11px] transition-all cursor-pointer"
                aria-label="Copy Deepanjali Ishte email"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copied ? "COPIED" : "EMAIL"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}

