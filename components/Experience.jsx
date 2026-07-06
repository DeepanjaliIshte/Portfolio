"use client";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const responsibilities = [
    "Developed web and mobile applications using Flutter and React.",
    "Built backend APIs using Python and integrated REST APIs.",
    "Managed databases using Firebase and Supabase.",
    "Collaborated with the development team using Git for version control.",
    "Participated in debugging, testing, and application enhancement.",
    "Contributed to scalable and user-friendly software solutions."
  ];

  const technologies = [
    "Flutter", "React", "Python", "REST APIs", "Firebase", "Supabase", "Git"
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex justify-center">
        
        <div className="w-full max-w-[1100px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-gray-400 text-lg">
              My professional journey and hands-on software development experience.
            </p>
          </motion.div>

          {/* Main Experience Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4 }}
            className="relative w-full rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 hover:border-[#9d4edd]/50 hover:shadow-[0_10px_40px_-15px_rgba(157,78,221,0.3)] transition-all duration-300 z-10"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#9d4edd]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
              
              {/* Left Side: Role Info (30%) */}
              <div className="w-full lg:w-[30%] relative flex flex-col pt-2">
                {/* Timeline Line */}
                <div className="absolute left-0 top-[2rem] bottom-0 w-0.5 bg-gradient-to-b from-[#9d4edd] to-[#00b4d8] hidden lg:block"></div>
                
                {/* Timeline Dot */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-[5px] top-[2.2rem] w-3 h-3 rounded-full bg-[#00b4d8] shadow-[0_0_12px_#00b4d8] hidden lg:block"
                ></motion.div>

                <div className="lg:pl-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 mb-2 shadow-[0_0_20px_rgba(157,78,221,0.2)]">
                    <Briefcase className="text-[#9d4edd]" size={28} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-tight mb-2">Software Developer Intern</h3>
                    <p className="text-[#00b4d8] font-semibold text-lg mb-1">Landmark Techedge Pvt. Ltd.</p>
                    <p className="text-gray-400 text-sm">December 2025 – June 2026</p>
                  </div>

                  <div className="pt-2">
                    <span className="inline-block px-4 py-2 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10">
                      6 Months Internship Experience
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Responsibilities (70%) */}
              <div className="w-full lg:w-[70%]">
                <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Key Responsibilities</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                  {responsibilities.map((resp, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                      className="flex items-start gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5"
                    >
                      <CheckCircle2 className="text-[#9d4edd] flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-gray-300 text-sm leading-relaxed">{resp}</p>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + (idx * 0.05) }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 rounded-full bg-white/5 border border-gray-600/50 text-sm font-medium text-gray-200 hover:border-[#9d4edd] hover:shadow-[0_0_15px_rgba(157,78,221,0.3)] hover:text-white transition-all cursor-default"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
