import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Deepanjali Ishte | Software Developer Portfolio",
  description: "Portfolio of Deepanjali Ishte, a Software Developer and MCA Graduate skilled in Java, Spring Boot, Python, React, Flutter, REST APIs, and MySQL.",
  openGraph: {
    title: "Deepanjali Ishte | Software Developer Portfolio",
    description: "Portfolio of Deepanjali Ishte, a Software Developer and MCA Graduate skilled in Java, Spring Boot, Python, React, Flutter, REST APIs, and MySQL.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#050505] text-white selection:bg-[#9d4edd]/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
