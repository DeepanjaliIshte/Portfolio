import "./globals.css";

export const metadata = {
  title: "Deepanjali's Portfolio | Deepanjali R. Ishte — Java Developer",
  description: "Personal developer portfolio of Deepanjali R. Ishte, Java Developer and Software Developer specializing in Core Java, Spring Boot, REST APIs, and SQL.",
  keywords: [
    "Deepanjali R. Ishte",
    "Deepanjali Ishte",
    "Java Developer",
    "Software Developer",
    "Spring Boot",
    "Core Java",
    "REST APIs",
    "SQL",
    "Pune"
  ],
  openGraph: {
    title: "Deepanjali's Portfolio — Deepanjali R. Ishte",
    description: "Java Developer & Software Developer specializing in Core Java, Spring Boot, and robust backend engineering.",
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
      <body className="font-sans antialiased bg-[#FFF9F3] text-[#292326] selection:bg-[#F6B8D0] selection:text-[#292326] min-h-screen">
        {children}
      </body>
    </html>
  );
}
