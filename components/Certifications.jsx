"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const { certifications } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 25,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#080D1A]/40">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#00F0FF] uppercase">
              06 // Verification
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] w-12 bg-[#00F0FF]/40 origin-left"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
            Professional <span className="text-zinc-400 font-light">Certifications</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Formal technical certifications validating core competencies in enterprise Java, Spring Boot, and Python development.
          </p>
        </motion.div>

        {/* Certifications Grid with Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: "rgba(0, 240, 255, 0.4)" }}
              className="rounded-2xl p-6 sm:p-7 bg-[#080D1A]/90 border border-cyan-900/30 transition-all flex flex-col justify-between group relative overflow-hidden cursor-default shadow-xl"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="w-10 h-10 rounded-xl bg-[#0B132B] border border-cyan-900/40 flex items-center justify-center text-[#00F0FF] group-hover:bg-[#00F0FF]/15 group-hover:border-[#00F0FF]/40 transition-colors"
                  >
                    <Award size={20} />
                  </motion.div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <ShieldCheck size={11} />
                    Verified
                  </span>
                </div>

                {/* Certification Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#00F0FF] transition-colors">
                  {cert.name}
                </h3>

                <p className="text-xs font-mono text-zinc-400 mb-1">
                  Issuing Organization:
                </p>
                <div className="text-sm font-semibold text-zinc-200">
                  {cert.issuer}
                </div>
              </div>

              {/* Footer status */}
              <div className="pt-4 mt-6 border-t border-cyan-900/30 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{cert.category || "Technical Credential"}</span>
                <span className="text-[#00F0FF] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse shadow-[0_0_6px_#00F0FF]" />
                  Validated
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
