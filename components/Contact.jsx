"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { email, location, linkedin, github } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }
    
    // Simulate sending
    setStatus({ type: "success", message: "Message sent successfully!" });
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-grid">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Work <span className="text-gradient">Together</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#9d4edd] to-[#00b4d8] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently open to Software Developer, Java Developer, Backend Developer, and Full Stack Developer opportunities. 
            Have an opportunity or want to discuss a project? Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass p-8 rounded-2xl border border-white/10 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#9d4edd] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href={`mailto:${email}`} className="text-white font-medium hover:text-[#00b4d8] transition-colors break-all">
                      {email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#00b4d8] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white font-medium">{location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#9d4edd] flex-shrink-0">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#00b4d8] transition-colors break-all">
                      linkedin.com/in/deepanjali-ishte-071691201
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#00b4d8] flex-shrink-0">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">GitHub</p>
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#9d4edd] transition-colors break-all">
                      github.com/DeepanjaliIshte
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-white/10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9d4edd] focus:ring-1 focus:ring-[#9d4edd] transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9d4edd] focus:ring-1 focus:ring-[#9d4edd] transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9d4edd] focus:ring-1 focus:ring-[#9d4edd] transition-all"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9d4edd] focus:ring-1 focus:ring-[#9d4edd] transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {status.message}
                </div>
              )}
              
              <button 
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-[#9d4edd] to-[#00b4d8] text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
