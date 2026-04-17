"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder with the same dimensions to avoid layout shift
    return <div style={{ width: 20, height: 20 }} />;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <FaSun
          size={20}
          className="text-orange-500 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <FaMoon
          size={20}
          className="text-gray-700 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}