"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = stored ? stored : prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      if (initialTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // fallback
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {}
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const setExplicitTheme = (newTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem("portfolio-theme", newTheme);
    } catch {}
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: setExplicitTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

