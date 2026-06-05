"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import en, { type Translations } from "@/locales/en";
import hi from "@/locales/hi";
import gu from "@/locales/gu";

export type Language = "en" | "hi" | "gu";

const locales: Record<Language, Translations> = { en, hi, gu };

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("golden-cake-lang") as Language | null;
    if (stored && ["en", "hi", "gu"].includes(stored)) {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("golden-cake-lang", newLang);
    document.documentElement.lang =
      newLang === "en" ? "en" : newLang === "hi" ? "hi" : "gu";
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang =
        lang === "en" ? "en" : lang === "hi" ? "hi" : "gu";
    }
  }, [lang, mounted]);

  const t = locales[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
