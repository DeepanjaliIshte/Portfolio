"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Download, Code2, Server, Database, ShieldCheck, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { aboutParagraphs, location, metrics, resumeUrl, resumeDownloadName } = portfolioData.personalInfo;
  const shouldReduceMotion = useReducedMotion();

  const pillars = [
    {
      icon: <Code2 size={22} className="text-[#00F0FF]" />,
      title: "Core Java & OOP Architecture",
      description:
        "Building robust application logic using Object-Oriented principles, Collections Framework, Multithreading, and Exception Handling.",
    },
    {
      icon: <Server size={22} className="text-[#38BDF8]" />,
      title: "Spring Boot & REST APIs",
      description:
        "Engineering high-performance RESTful APIs, backend services, JDBC persistence, and Maven build pipelines.",
    },
    {
      icon: <Database size={22} className="text-[#00F0FF]" />,
      title: "Databases & SQL Systems",
      description:
        "Relational database design, query optimization with MySQL & SQL, and cloud persistence with Firebase & Supabase.",
    },
    {
      icon: <ShieldCheck size={22} className="text-[#38BDF8]" />,
      title: "Full-Stack & Cloud Integration",
      description:
        "Integrating backends with React.js & Next.js interfaces, AWS cloud services (EC2, S3, IAM), and Git version control workflows.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
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
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
              01 // Profile
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
            About <span className="text-zinc-400 font-light">My Background</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#080D1A]/90 border border-cyan-900/30 relative overflow-hidden group hover:border-[#00F0FF]/40 transition-all duration-300 shadow-xl shadow-black/40">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00F0FF]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00F0FF]/10 transition-colors duration-500" />

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>MCA Graduate &amp; Java Developer</span>
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                {aboutParagraphs.map((para, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className="text-zinc-400 leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* Action buttons inside card */}
              <div className="pt-6 mt-6 border-t border-cyan-900/30 flex flex-wrap items-center gap-4">
                <motion.a
                  href={resumeUrl}
                  download={resumeDownloadName}
                  aria-label="Download Deepanjali Ishte Java Developer Resume"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00F0FF] hover:from-[#1D4ED8] hover:to-[#00D4E0] text-black font-semibold text-xs font-mono tracking-wide transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] cursor-pointer"
                >
                  <Download size={14} />
                  <span>DOWNLOAD FULL RESUME</span>
                </motion.a>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <MapPin size={14} className="text-[#00F0FF]" />
                  <span>{location}</span>
                </div>
              </div>
            </div>

            {/* Metrics Ribbon with Interactive Hover */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
            >
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -3, borderColor: "rgba(0, 240, 255, 0.4)" }}
                  className="p-4 rounded-xl bg-[#0B132B]/70 border border-cyan-900/30 transition-all cursor-default"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/70 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm font-bold text-white tracking-tight mb-0.5">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-zinc-400 truncate">{metric.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Engineering Pillars (5 Cols) with Stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400/70 mb-2">
              Core Competencies &amp; Focus Areas
            </div>

            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 6, borderColor: "rgba(0, 240, 255, 0.4)" }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl bg-[#080D1A]/90 border border-cyan-900/30 transition-all flex items-start gap-4 cursor-default group"
              >
                <div className="p-2.5 rounded-lg bg-[#0B132B] border border-cyan-900/40 flex-shrink-0 group-hover:bg-[#00F0FF]/10 group-hover:border-[#00F0FF]/30 transition-colors">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
