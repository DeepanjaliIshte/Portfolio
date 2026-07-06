"use client";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-black/40 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9d4edd] to-[#00b4d8] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#9d4edd] via-[#00b4d8] to-transparent"></div>

          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 mt-6 w-4 h-4 rounded-full bg-[#00b4d8] shadow-[0_0_15px_#00b4d8] z-10 border-2 border-black"></div>
              
              <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                <div className="glass p-8 rounded-2xl glow-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-[#9d4edd]" size={20} />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <div className="text-[#00b4d8] font-medium mb-1">{exp.company}</div>
                  <div className="text-sm text-gray-400 mb-6">{exp.duration}</div>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9d4edd] flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                    {exp.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
