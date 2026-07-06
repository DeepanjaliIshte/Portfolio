import { Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { github, linkedin, email } = portfolioData.personalInfo;
  
  return (
    <footer className="py-8 border-t border-white/10 bg-black/60 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            Designed & Built by <span className="text-white font-medium">Deepanjali Ishte</span>
          </p>
          <p className="text-gray-500 text-xs mt-1">
            &copy; 2026 Deepanjali Ishte. All Rights Reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00b4d8] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${email}`} className="text-gray-500 hover:text-[#9d4edd] transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
