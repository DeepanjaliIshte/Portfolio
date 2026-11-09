"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Award, ShieldCheck, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const { certifications } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const certThemes = [
    {
      iconBg: "bg-[#F6B8D0]/35 dark:bg-[#F6B8D0]/15 border-[#F6B8D0]/80 dark:border-[#F6B8D0]/40 text-[#8C244C] dark:text-[#F8C8DB]",
      hoverBorder: "hover:border-[#F6B8D0] dark:hover:border-[#F8C8DB]",
    },
    {
      iconBg: "bg-[#B9E6D0]/40 dark:bg-[#B9E6D0]/15 border-[#B9E6D0]/80 dark:border-[#B9E6D0]/40 text-[#196B45] dark:text-[#C7EDE0]",
      hoverBorder: "hover:border-[#B9E6D0] dark:hover:border-[#C7EDE0]",
    },
    {
      iconBg: "bg-[#A9D8F5]/40 dark:bg-[#A9D8F5]/15 border-[#A9D8F5]/80 dark:border-[#A9D8F5]/40 text-[#1C5B85] dark:text-[#BBE0F8]",
      hoverBorder: "hover:border-[#A9D8F5] dark:hover:border-[#BBE0F8]",
    },
  ];

  return (
    <section id="certifications" className="py-10 md:py-12 relative overflow-hidden bg-[#FFF9F3] dark:bg-[#171219] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Viewport Reveal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col mb-8 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#A13A64] dark:text-[#F8C8DB] uppercase flex items-center gap-1.5">
              <span>06 // Technical Credentials</span>
              <span className="text-[#C9B6F2] dark:text-[#D4C4F7]">✨</span>
            </span>
            <div className="h-[2px] w-14 bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] rounded-full" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#292326] dark:text-[#F8F3F6]">
            Professional <span className="rainbow-gradient-text italic font-normal">Certifications</span>
          </h2>
          <p className="mt-2 text-sm text-[#292326] dark:text-[#C5B9C8] font-normal leading-relaxed">
            Verified technical qualifications validating core competencies in enterprise Java, Spring Boot, and Python.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => {
            const theme = certThemes[idx % certThemes.length];
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#231C28] border border-[#EBDCD2] dark:border-[#3D3147] ${theme.hoverBorder} transition-all flex flex-col justify-between shadow-2xs hover:shadow-[0_6px_20px_rgba(201,182,242,0.2)] dark:hover:shadow-black/40 group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl ${theme.iconBg} border flex items-center justify-center transition-transform group-hover:scale-105`}>
                      <Award size={20} />
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#196B45] dark:text-[#C7EDE0] bg-[#B9E6D0]/40 dark:bg-[#B9E6D0]/20 px-2.5 py-1 rounded-full border border-[#B9E6D0]/80 dark:border-[#B9E6D0]/40">
                      <ShieldCheck size={12} className="text-[#196B45] dark:text-[#C7EDE0]" />
                      Verified
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#292326] dark:text-[#F8F3F6] mb-1.5 group-hover:text-[#A13A64] dark:group-hover:text-[#F8C8DB] transition-colors leading-snug">
                    {cert.name}
                  </h3>

                  <p className="text-xs font-mono font-semibold text-[#A13A64] dark:text-[#F8C8DB] mb-3">
                    Issuer: {cert.issuer}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EBDCD2] dark:border-[#3D3147] flex items-center justify-between text-xs font-mono text-[#292326] dark:text-[#F8F3F6]">
                  <span className="font-medium text-[#574F54] dark:text-[#C5B9C8]">{cert.category}</span>
                  <span className="text-[#8C244C] dark:text-[#F8C8DB] font-bold flex items-center gap-1">
                    <span>100%</span>
                    <span className="text-xs">✦</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
