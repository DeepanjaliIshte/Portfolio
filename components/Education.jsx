"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-grid">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9d4edd] to-[#00b4d8] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-[#9d4edd]/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-[#9d4edd]/10 to-[#00b4d8]/10 rounded-bl-full -z-10"></div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9d4edd] to-[#00b4d8] flex items-center justify-center flex-shrink-0 text-white">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-[#00b4d8] font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400">
                    <span className="bg-white/5 px-3 py-1 rounded-full">{edu.duration}</span>
                    <span className="font-medium text-gray-300">{edu.details}</span>
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
