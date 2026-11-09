import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF9F3] dark:bg-[#171219] text-[#292326] dark:text-[#F8F3F6] px-6 text-center transition-colors duration-300">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#231C28] border border-[#EBDCD2] dark:border-[#3D3147] text-[#8C244C] dark:text-[#F8C8DB] text-xs font-mono tracking-widest uppercase mb-6 font-semibold shadow-2xs">
        <Sparkles size={12} className="text-[#C9B6F2] dark:text-[#D4C4F7]" />
        <span>404 — PAGE NOT FOUND</span>
      </div>
      <h1 className="font-serif text-5xl md:text-7xl font-extrabold tracking-tight text-[#292326] dark:text-[#F8F3F6] mb-4">
        Page Not <span className="rainbow-gradient-text italic font-normal">Located</span>
      </h1>
      <p className="text-[#574F54] dark:text-[#C5B9C8] max-w-md text-base mb-8 leading-relaxed font-normal">
        The requested document or route does not exist. Please return to the main developer portfolio.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#F6B8D0] via-[#FFC9A9] to-[#C9B6F2] hover:opacity-95 text-[#292326] font-mono font-bold text-xs tracking-wider transition-all shadow-md shadow-[#F6B8D0]/30"
      >
        <ArrowLeft size={14} className="text-[#8C244C]" />
        <span>Return to Deepanjali&apos;s Portfolio ✨</span>
      </Link>
    </div>
  );
}
