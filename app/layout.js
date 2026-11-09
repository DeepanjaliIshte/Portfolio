import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

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

const themeScript = `(function() {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored ? stored : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased bg-[#FFF9F3] text-[#292326] dark:bg-[#171219] dark:text-[#F8F3F6] selection:bg-[#F6B8D0] selection:text-[#292326] dark:selection:bg-[#C9B6F2] dark:selection:text-[#171219] min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
