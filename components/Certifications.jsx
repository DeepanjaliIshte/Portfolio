"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9d4edd] to-[#00b4d8] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(157, 78, 221, 0.3)" }}
              className="glass p-6 rounded-2xl border border-white/10 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#9d4edd]/20 transition-colors">
                <Award className="text-[#9d4edd]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-[#00b4d8] transition-colors">{cert.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
