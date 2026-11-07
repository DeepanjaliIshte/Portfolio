import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030712] text-white px-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono tracking-widest uppercase mb-6">
        404 — PAGE NOT FOUND
      </div>
      <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-4">
        Lost in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#38BDF8]">Space</span>
      </h1>
      <p className="text-gray-400 max-w-md text-base md:text-lg mb-8 leading-relaxed">
        The page you are looking for doesn&apos;t exist or has been relocated to another galaxy.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00F0FF] text-black font-semibold hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
