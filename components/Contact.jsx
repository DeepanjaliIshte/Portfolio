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
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { location, linkedin, github, instagram, email } = portfolioData.personalInfo;
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const defaultMailto = `mailto:${email}?subject=${encodeURIComponent(
    "Java Developer Opportunity - Deepanjali R. Ishte"
  )}&body=${encodeURIComponent(
    "Hi Deepanjali,\n\nI reviewed your portfolio and would like to discuss an opportunity.\n\nBest regards,\n[Your Name]"
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
      hoverBorder: "hover:border-[#F6B8D0]",
    },
    {
      label: "Associate Software Engineer",
      subject: "Associate Software Engineer Opportunity - Deepanjali R. Ishte",
      hoverBorder: "hover:border-[#C9B6F2]",
    },
    {
      label: "Backend / Spring Boot Project",
      subject: "Backend / Spring Boot Project Discussion",
      hoverBorder: "hover:border-[#A9D8F5]",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden bg-[#FFF9F3]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Viewport Reveal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col mb-10 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-3 mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#A13A64] uppercase flex items-center gap-1.5">
              <span>07 // Direct Communication</span>
              <span className="text-[#C9B6F2]">✨</span>
            </span>
            <div className="h-[2px] w-14 bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] rounded-full" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#292326] leading-tight mb-4">
            Have an Opportunity? <br />
            <span className="rainbow-gradient-text italic font-normal">Let&apos;s Build Something Meaningful.</span>
          </h2>

          <p className="text-base text-[#292326] font-normal leading-relaxed max-w-2xl mx-auto">
            Currently open to Junior Java Developer, Backend Developer, and Software Engineer positions. Connect directly via email or verified channels below.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Main Direct Email Card (7 Cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-white border border-[#EBDCD2] shadow-2xs hover:shadow-[0_8px_25px_rgba(201,182,242,0.2)] transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F6B8D0]/30 border border-[#F6B8D0]/80 text-[#8C244C] text-xs font-mono font-bold uppercase tracking-wider">
                  <Mail size={12} className="text-[#8C244C]" />
                  <span>Primary Inbox</span>
                </span>
                <span className="text-xs font-mono text-[#A13A64] font-bold flex items-center gap-1">
                  <span>• Available for Hire</span>
                  <span className="text-xs">✨</span>
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#292326] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-[#292326] font-normal mb-6 leading-relaxed">
                Launch your default email client with a pre-configured template, or copy the verified email address.
              </p>

              {/* Clickable Email Display */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF9F3] border border-[#EBDCD2] mb-6">
                <div className="text-xs font-mono text-[#A13A64] uppercase tracking-wider mb-1 font-bold flex items-center justify-between">
                  <span>Verified Recipient Address</span>
                  <span className="text-[#574F54] font-normal text-xs">Click to open mailto</span>
                </div>
                <a
                  href={defaultMailto}
                  className="font-mono font-bold text-lg sm:text-xl text-[#292326] hover:text-[#A13A64] transition-colors flex items-center justify-between break-all"
                >
                  <span>{email}</span>
                  <ArrowUpRight size={18} className="text-[#8C244C] shrink-0" />
                </a>
              </div>

              {/* Dual Action Buttons: Launch Mailto & Copy Email */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                <motion.a
                  href={defaultMailto}
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.01 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] hover:opacity-95 text-[#292326] text-xs font-mono font-bold tracking-wider transition-all shadow-md shadow-[#F6B8D0]/30 cursor-pointer"
                >
                  <Send size={13} className="text-[#8C244C]" />
                  <span>OPEN IN EMAIL CLIENT</span>
                </motion.a>

                <motion.button
                  onClick={handleCopyEmail}
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white border border-[#EBDCD2] hover:border-[#F6B8D0] text-[#292326] text-xs font-mono font-bold tracking-wider transition-all cursor-pointer shadow-2xs hover:shadow-[0_4px_14px_rgba(246,184,208,0.25)]"
                >
                  {copied ? <Check size={14} className="text-emerald-700" /> : <Copy size={13} className="text-[#A13A64]" />}
                  <span>{copied ? "COPIED TO CLIPBOARD ✨" : "COPY EMAIL"}</span>
                </motion.button>
              </div>

              {/* Preset Subject Templates */}
              <div>
                <span className="text-xs font-mono text-[#292326] uppercase tracking-wider block mb-2 font-bold flex items-center gap-1">
                  <span>Select a topic preset:</span>
                  <span className="text-xs text-[#C9B6F2]">✦</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {subjectPresets.map((preset, pIdx) => (
                    <motion.a
                      key={pIdx}
                      href={`mailto:${email}?subject=${encodeURIComponent(preset.subject)}`}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                      className={`px-3.5 py-1.5 rounded-full bg-[#FFF9F3] border border-[#EBDCD2] ${preset.hoverBorder} hover:text-[#A13A64] text-xs font-mono font-semibold text-[#292326] transition-colors`}
                    >
                      {preset.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#EBDCD2] flex items-center justify-between text-xs font-mono text-[#292326] font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#8C244C]" />
                <span>{location}</span>
              </div>
              <span className="text-[#A13A64] font-bold">Response: ~24 hours 🌈</span>
            </div>
          </motion.div>

          {/* Social Profiles & Community Card (5 Cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* GitHub Card */}
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { y: -2, x: 2 }}
              className="p-5 rounded-2xl bg-white border border-[#EBDCD2] hover:border-[#8C244C] transition-all flex items-center justify-between group shadow-2xs hover:shadow-xs block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#F6B8D0]/30 border border-[#F6B8D0]/70 flex items-center justify-center text-[#8C244C] group-hover:scale-105 transition-transform">
                  <Github size={20} />
                </div>
                <div>
                  <div className="font-serif font-bold text-base text-[#292326] group-hover:text-[#8C244C] transition-colors">
                    GitHub Profile
                  </div>
                  <div className="text-xs font-mono text-[#574F54] font-medium">
                    github.com/DeepanjaliIshte
                  </div>
                </div>
              </div>
              <ExternalLink size={16} className="text-[#8C244C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { y: -2, x: 2 }}
              className="p-5 rounded-2xl bg-white border border-[#EBDCD2] hover:border-[#1C5B85] transition-all flex items-center justify-between group shadow-2xs hover:shadow-xs block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#A9D8F5]/35 border border-[#A9D8F5]/70 flex items-center justify-center text-[#1C5B85] group-hover:scale-105 transition-transform">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="font-serif font-bold text-base text-[#292326] group-hover:text-[#1C5B85] transition-colors">
                    LinkedIn Network
                  </div>
                  <div className="text-xs font-mono text-[#574F54] font-medium">
                    linkedin.com/in/deepanjali-ishte
                  </div>
                </div>
              </div>
              <ExternalLink size={16} className="text-[#1C5B85] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            {/* DeepCodeWarriors Instagram */}
            <motion.a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { y: -2, x: 2 }}
              className="p-5 rounded-2xl bg-white border border-[#EBDCD2] hover:border-[#8C244C] transition-all flex items-center justify-between group shadow-2xs hover:shadow-xs block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#FFC9A9]/35 border border-[#FFC9A9]/70 flex items-center justify-center text-[#8C244C] group-hover:scale-105 transition-transform">
                  <Instagram size={20} />
                </div>
                <div>
                  <div className="font-serif font-bold text-base text-[#292326] group-hover:text-[#8C244C] transition-colors">
                    DeepCodeWarriors Community
                  </div>
                  <div className="text-xs font-mono text-[#574F54] font-medium">
                    instagram.com/deepcodewarriors
                  </div>
                </div>
              </div>
              <ExternalLink size={16} className="text-[#8C244C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            {/* Direct Email Link Card */}
            <motion.a
              href={`mailto:${email}`}
              whileHover={shouldReduceMotion ? {} : { y: -2, x: 2 }}
              className="p-5 rounded-2xl bg-white border border-[#EBDCD2] hover:border-[#4E378C] transition-all flex items-center justify-between group shadow-2xs hover:shadow-xs block"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#C9B6F2]/35 border border-[#C9B6F2]/70 flex items-center justify-center text-[#4E378C] group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-serif font-bold text-base text-[#292326] group-hover:text-[#4E378C] transition-colors">
                    Direct Email
                  </div>
                  <div className="text-xs font-mono text-[#574F54] font-medium">
                    {email}
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#4E378C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
