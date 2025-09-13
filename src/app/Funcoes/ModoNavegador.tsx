"use client";
import { useState, useEffect } from "react";

// 🔹 Hook customizado que retorna se o modo escuro está ativo
export default function useModo() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(media.matches);

    // opcional: escuta mudanças de tema do SO
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return isDarkMode;
}
