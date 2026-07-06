"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Sparkles, Download } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { about, location, status } = portfolioData.personalInfo;

  const cards = [
    { icon: <MapPin className="text-[#00b4d8]" />, title: "Location", value: location },
    { icon: <GraduationCap className="text-[#9d4edd]" />, title: "Education", value: "Master of Computer Applications" },
    { icon: <Briefcase className="text-[#00b4d8]" />, title: "Role", value: "Software Developer" },
    { icon: <Sparkles className="text-[#9d4edd]" />, title: "Status", value: status }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9d4edd] to-[#00b4d8] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {about.split('. ').map((sentence, index) => (
              sentence && <p key={index} className="text-gray-400 text-lg leading-relaxed">{sentence}.</p>
            ))}
            
            <div className="pt-6">
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all glow-border"
              >
                <Download size={20} /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-gray-400 text-sm font-medium mb-1">{card.title}</h3>
                <p className="text-white font-semibold">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
