"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Download, Code2, Server, Database, ShieldCheck, MapPin, GraduationCap, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { aboutParagraphs, location, metrics, resumeUrl, resumeDownloadName } = portfolioData.personalInfo;
  const shouldReduceMotion = useReducedMotion();

  const pillars = [
    {
      icon: <Code2 size={20} className="text-[#8C244C] dark:text-[#F8C8DB]" />,
      iconBg: "bg-[#F6B8D0]/35 dark:bg-[#F6B8D0]/15 border-[#F6B8D0]/80 dark:border-[#F6B8D0]/40",
      title: "Core Java & OOP",
      description:
        "Building robust object-oriented systems with multithreading, collections, exception hierarchies, and algorithms.",
    },
    {
      icon: <Server size={20} className="text-[#196B45] dark:text-[#C7EDE0]" />,
      iconBg: "bg-[#B9E6D0]/40 dark:bg-[#B9E6D0]/15 border-[#B9E6D0]/80 dark:border-[#B9E6D0]/40",
      title: "Spring Boot & REST",
      description:
        "Developing scalable microservices, REST APIs, dependency injection, and clean controller-service-repository patterns.",
    },
    {
      icon: <Database size={20} className="text-[#1C5B85] dark:text-[#BBE0F8]" />,
      iconBg: "bg-[#A9D8F5]/40 dark:bg-[#A9D8F5]/15 border-[#A9D8F5]/80 dark:border-[#A9D8F5]/40",
      title: "SQL & Persistence",
      description:
        "Relational database modeling with MySQL, complex querying, indexing, JDBC transactions, and cloud datastores.",
    },
    {
      icon: <ShieldCheck size={20} className="text-[#4E378C] dark:text-[#D4C4F7]" />,
      iconBg: "bg-[#C9B6F2]/35 dark:bg-[#C9B6F2]/15 border-[#C9B6F2]/80 dark:border-[#C9B6F2]/40",
      title: "Distributed Workflows",
      description:
        "Asynchronous task queues using Apache Kafka, Docker containerization, and Git collaborative version control.",
    },
  ];

  const metricColors = [
    { label: "text-[#8C244C] dark:text-[#F8C8DB]", hoverBorder: "hover:border-[#F6B8D0] dark:hover:border-[#F8C8DB]" },
    { label: "text-[#4E378C] dark:text-[#D4C4F7]", hoverBorder: "hover:border-[#C9B6F2] dark:hover:border-[#D4C4F7]" },
    { label: "text-[#1C5B85] dark:text-[#BBE0F8]", hoverBorder: "hover:border-[#A9D8F5] dark:hover:border-[#BBE0F8]" },
    { label: "text-[#196B45] dark:text-[#C7EDE0]", hoverBorder: "hover:border-[#B9E6D0] dark:hover:border-[#C7EDE0]" },
  ];

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden bg-[#FFF9F3] dark:bg-[#171219] transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Cute Editorial Section Header with Viewport Reveal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col mb-10 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#A13A64] dark:text-[#F8C8DB] uppercase flex items-center gap-1.5">
              <span>01 // Background &amp; Philosophy</span>
              <span className="text-[#C9B6F2] dark:text-[#D4C4F7]">✨</span>
            </span>
            <div className="h-[2px] w-14 bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] rounded-full" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-[#292326] dark:text-[#F8F3F6]">
            Engineering Philosophy &amp; <br />
            <span className="rainbow-gradient-text italic font-normal">Technical Foundation</span>
          </h2>
          <p className="mt-3 text-base text-[#292326] dark:text-[#C5B9C8] font-normal leading-relaxed">
            Architecting robust software systems with object-oriented rigor, clean code conventions, and high-performance server-side foundations.
          </p>
        </motion.div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative Card (7 Cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-[#231C28] border border-[#EBDCD2] dark:border-[#3D3147] shadow-2xs relative hover:shadow-[0_4px_20px_rgba(201,182,242,0.15)] dark:hover:shadow-black/40 transition-shadow">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#EBDCD2] dark:border-[#3D3147]">
                <div className="flex items-center gap-2">
                  <GraduationCap size={20} className="text-[#A13A64] dark:text-[#F8C8DB]" />
                  <span className="font-serif font-bold text-lg text-[#292326] dark:text-[#F8F3F6]">
                    MCA Graduate &amp; Java Developer
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#292326] dark:text-[#C5B9C8]">
                  <MapPin size={14} className="text-[#8C244C] dark:text-[#F8C8DB]" />
                  <span>{location}</span>
                </div>
              </div>

              <div className="space-y-4 text-base text-[#292326] dark:text-[#F8F3F6] leading-[1.68] font-normal">
                {aboutParagraphs.map((para, idx) => (
                  <p key={idx}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Action Ribbon inside Card */}
              <div className="pt-6 mt-6 border-t border-[#EBDCD2] dark:border-[#3D3147] flex flex-wrap items-center justify-between gap-4">
                <motion.a
                  href={resumeUrl}
                  download={resumeDownloadName}
                  aria-label="Download Deepanjali Ishte Java Developer Resume"
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.01 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] hover:opacity-95 text-[#292326] text-xs font-mono font-bold tracking-wider transition-all shadow-xs cursor-pointer"
                >
                  <Download size={14} className="text-[#8C244C] group-hover:translate-y-0.5 transition-transform" />
                  <span>DOWNLOAD VERIFIED RESUME</span>
                </motion.a>

                <span className="text-xs font-mono font-bold text-[#A13A64] dark:text-[#F8C8DB] flex items-center gap-1">
                  <span>P.E.S. Modern College of Engg.</span>
                  <span className="text-[#C9B6F2] dark:text-[#D4C4F7]">✦</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Engineering Pillars & Metrics (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-bold tracking-wider text-[#A13A64] dark:text-[#F8C8DB] uppercase mb-1 flex items-center gap-1.5">
              <span>// Engineering Pillars</span>
              <span className="text-[#C9B6F2] dark:text-[#D4C4F7]">🌈</span>
            </div>

            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={shouldReduceMotion ? {} : { y: -2, x: 2 }}
                className="p-5 rounded-xl bg-white dark:bg-[#231C28] border border-[#EBDCD2] dark:border-[#3D3147] hover:border-[#F6B8D0] dark:hover:border-[#C9B6F2] transition-all group shadow-2xs hover:shadow-[0_4px_16px_rgba(246,184,208,0.2)] dark:hover:shadow-black/30"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${pillar.iconBg} border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#292326] dark:text-[#F8F3F6] mb-1 group-hover:text-[#A13A64] dark:group-hover:text-[#F8C8DB] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#292326] dark:text-[#C5B9C8] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* 2 x 2 Information Cards Grid directly below Distributed Workflows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={shouldReduceMotion ? {} : { y: -2 }}
                  className={`p-4 rounded-xl bg-white dark:bg-[#231C28] border border-[#EBDCD2] dark:border-[#3D3147] ${metricColors[idx % metricColors.length].hoverBorder} transition-all shadow-2xs hover:shadow-xs`}
                >
                  <div className={`text-xs font-mono uppercase tracking-wider ${metricColors[idx % metricColors.length].label} font-bold mb-1 flex items-center gap-1`}>
                    <span>{metric.label}</span>
                    <span className="text-[10px]">✨</span>
                  </div>
                  <div className="font-serif font-bold text-base sm:text-lg text-[#292326] dark:text-[#F8F3F6] leading-snug">
                    {metric.value}
                  </div>
                  <div className="text-xs text-[#574F54] dark:text-[#C5B9C8] mt-1 font-mono font-medium">
                    {metric.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
