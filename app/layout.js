import "./globals.css";

export const metadata = {
  title: "Deepanjali Ishte | Java Developer | Software Developer",
  description: "Portfolio of Deepanjali Ishte, a Java Developer & Software Developer specializing in Core Java, Spring Boot, REST APIs, SQL, and Full-Stack Web Development.",
  keywords: [
    "Deepanjali Ishte",
    "Java Developer",
    "Software Developer",
    "Junior Java Developer",
    "Spring Boot Developer",
    "Core Java",
    "JDBC",
    "REST APIs",
    "SQL",
    "MySQL",
    "Backend Developer",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Pune"
  ],
  openGraph: {
    title: "Deepanjali Ishte | Java Developer & Software Developer",
    description: "Building scalable enterprise applications, robust backend architectures, and meaningful digital experiences. Explore projects, technical skills, and experience.",
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
      <body className="font-sans antialiased bg-[#030712] text-[#EDEDED] selection:bg-[#00F0FF]/30 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
