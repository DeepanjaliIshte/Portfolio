"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { location, linkedin, github, instagram, email } = portfolioData.personalInfo;
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const defaultMailto = `mailto:${email}?subject=${encodeURIComponent(
    "Software Developer Opportunity / Inquiry - Deepanjali Ishte"
  )}&body=${encodeURIComponent(
    "Hi Deepanjali,\n\nI reviewed your developer portfolio and would like to connect with you regarding an opportunity / project discussion.\n\nBest regards,\n[Your Name]\n[Your Company / Organization]"
  )}`;

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Clipboard copy error:", err);
    }
  };

  const subjectPresets = [
    {
      label: "Junior Java Developer Role",
      subject: "Junior Java Developer Opportunity - Interview Request",
    },
    {
      label: "Associate Software Engineer",
      subject: "Associate Software Engineer Opportunity - Deepanjali Ishte",
    },
    {
      label: "Backend / Spring Boot Project",
      subject: "Backend / Spring Boot Project Discussion",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-3 mx-auto">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#00F0FF] uppercase">
              07 // Direct Connect
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] w-12 bg-[#00F0FF]/40"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-tight mb-4">
            Have an opportunity? <br />
            <span className="text-cyan-gradient">Let&apos;s build something meaningful.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            I am currently open to Junior Java Developer, Backend Developer, and Software Engineer positions. Connect directly via email or professional channels below.
          </p>
        </motion.div>

        {/* Main Grid: Heroic Email Chamber + Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Primary Featured Email Chamber (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: shouldReduceMotion ? "none" : "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-10 rounded-2xl bg-[#080D1A]/95 border border-cyan-900/40 shadow-2xl relative overflow-hidden group hover:border-[#00F0FF]/40 transition-all duration-300"
          >
            {/* Top Cyan Accent Laser Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0066FF] via-[#00F0FF] to-transparent shadow-[0_0_12px_#00F0FF]" />

            {/* Ambient Background Radial Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00F0FF]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00F0FF]/10 transition-colors duration-500" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono uppercase tracking-wider">
                  <Mail size={13} />
                  <span>Primary Email Inbox</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Send a Direct Message
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal mb-8">
                Skip intermediate web forms. Click below to launch your default email client with a pre-formatted template, or copy my email address to reach out on your own terms.
              </p>

              {/* Clickable Email Display Box */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#0B132B] border border-cyan-900/50 mb-8 relative group/mail transition-all hover:border-[#00F0FF]/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]">
                <div className="text-[11px] font-mono text-cyan-400/80 uppercase tracking-widest mb-1.5 flex items-center justify-between">
                  <span>Verified Recipient Email</span>
                  <span className="text-zinc-500 text-[10px]">Click to launch mailto</span>
                </div>
                <a
                  href={defaultMailto}
                  className="flex items-center justify-between gap-3 text-lg sm:text-2xl font-bold font-mono text-white group-hover/mail:text-[#00F0FF] transition-colors break-all"
                  aria-label={`Send email to ${email}`}
                >
                  <span>{email}</span>
                  <ArrowUpRight size={22} className="text-cyan-400 flex-shrink-0 group-hover/mail:translate-x-1 group-hover/mail:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Dual Action Buttons: Send Email (Mailto) & Copy Email */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                {/* Stylish Send Email Button */}
                <motion.a
                  href={defaultMailto}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00F0FF] hover:from-[#1D4ED8] hover:to-[#00D4E0] text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] cursor-pointer"
                  aria-label="Send email using default mail application"
                >
                  <Send size={15} className="stroke-[2.5]" />
                  <span>Send Email (Mailto)</span>
                </motion.a>

                {/* Verified Copy Email Button */}
                <motion.button
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border text-xs font-mono font-medium tracking-wide transition-all cursor-pointer ${
                    copied
                      ? "bg-emerald-950/60 border-emerald-500/60 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      : "bg-[#0B132B] hover:bg-[#111C3D] border-cyan-900/50 hover:border-[#00F0FF]/60 text-zinc-200 hover:text-[#00F0FF] shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                  }`}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400 stroke-[2.5]" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="text-[#00F0FF]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Pre-Formatted Subject Shortcuts */}
              <div>
                <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Sparkles size={12} className="text-[#00F0FF]" />
                  <span>Quick-Launch Subject Presets:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {subjectPresets.map((preset, idx) => (
                    <motion.a
                      key={idx}
                      href={`mailto:${email}?subject=${encodeURIComponent(preset.subject)}`}
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B132B] border border-cyan-900/40 text-[11px] font-mono text-zinc-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 hover:bg-[#00F0FF]/10 transition-all cursor-pointer"
                    >
                      <span>+ {preset.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Guaranteed Response Time Note */}
            <div className="pt-6 mt-8 border-t border-cyan-900/30 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                Direct inbox connection
              </span>
              <span className="text-cyan-400/80">Typical response: &lt; 24h</span>
            </div>
          </motion.div>

          {/* Right Column: Verified Profiles & Location (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: shouldReduceMotion ? "none" : "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            {/* Verified Location Card */}
            <motion.div
              whileHover={{ y: -3, borderColor: "rgba(0, 240, 255, 0.4)" }}
              className="p-6 rounded-2xl bg-[#080D1A]/95 border border-cyan-900/40 transition-all shadow-xl group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B132B] border border-cyan-900/50 flex items-center justify-center text-[#00F0FF] flex-shrink-0 group-hover:bg-[#00F0FF]/15 group-hover:border-[#00F0FF]/50 transition-colors shadow-sm">
                  <MapPin size={22} />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400/80 mb-1">
                    Location
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
                    {location}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    Available for on-site &amp; hybrid positions in Pune / Maharashtra, as well as remote software engineering roles worldwide.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* LinkedIn Profile Card */}
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, borderColor: "rgba(0, 240, 255, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-2xl bg-[#080D1A]/95 border border-cyan-900/40 transition-all shadow-xl flex items-center justify-between group cursor-pointer"
              aria-label="Deepanjali Ishte LinkedIn Profile"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B132B] border border-cyan-900/50 flex items-center justify-center text-[#00F0FF] flex-shrink-0 group-hover:bg-[#00F0FF]/15 group-hover:border-[#00F0FF]/50 transition-colors">
                  <Linkedin size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400/80 mb-0.5">
                    Professional Network
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    LinkedIn Profile
                  </h4>
                  <span className="text-xs font-mono text-zinc-500">
                    deepanjali-ishte-071691201
                  </span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#0B132B] border border-cyan-900/40 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-[#00F0FF]/50 transition-colors">
                <ExternalLink size={15} />
              </div>
            </motion.a>

            {/* GitHub Profile Card */}
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, borderColor: "rgba(0, 240, 255, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-2xl bg-[#080D1A]/95 border border-cyan-900/40 transition-all shadow-xl flex items-center justify-between group cursor-pointer"
              aria-label="Deepanjali Ishte GitHub Profile"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B132B] border border-cyan-900/50 flex items-center justify-center text-[#00F0FF] flex-shrink-0 group-hover:bg-[#00F0FF]/15 group-hover:border-[#00F0FF]/50 transition-colors">
                  <Github size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400/80 mb-0.5">
                    Open Source &amp; Code
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    GitHub Profile
                  </h4>
                  <span className="text-xs font-mono text-zinc-500">
                    DeepanjaliIshte
                  </span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#0B132B] border border-cyan-900/40 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-[#00F0FF]/50 transition-colors">
                <ExternalLink size={15} />
              </div>
            </motion.a>

            {/* Instagram Profile Card (DeepCodeWarriors) */}
            <motion.a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, borderColor: "rgba(0, 240, 255, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-2xl bg-[#080D1A]/95 border border-cyan-900/40 transition-all shadow-xl flex items-center justify-between group cursor-pointer"
              aria-label="DeepCodeWarriors Instagram Profile"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B132B] border border-cyan-900/50 flex items-center justify-center text-[#00F0FF] flex-shrink-0 group-hover:bg-[#00F0FF]/15 group-hover:border-[#00F0FF]/50 transition-colors">
                  <Instagram size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400/80 mb-0.5">
                    Coding Community &amp; Tech
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    DeepCodeWarriors
                  </h4>
                  <span className="text-xs font-mono text-zinc-500">
                    @deepcodewarriors
                  </span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#0B132B] border border-cyan-900/40 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-[#00F0FF]/50 transition-colors">
                <ExternalLink size={15} />
              </div>
            </motion.a>

            {/* Fast Response Telemetry Card */}
            <div className="p-4 rounded-xl bg-[#0B132B]/80 border border-cyan-900/30 flex items-center gap-3">
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div className="text-xs font-mono text-zinc-300">
                <span className="text-white font-semibold">Active Status:</span> Inquiries reviewed daily. Direct responses guaranteed.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
