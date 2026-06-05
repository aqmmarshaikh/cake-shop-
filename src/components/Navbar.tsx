"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

const navLinks = ["home", "about", "services", "gallery", "pricing", "testimonials", "contact"] as const;

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "hi", label: "हि" },
    { code: "gu", label: "ગુ" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-black/80 backdrop-blur-xl border-b border-gold/10 shadow-lg"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg">
              <Cake size={18} className="text-black" />
            </div>
            <div>
              <span className="font-black text-lg leading-none block" style={{ fontFamily: "var(--font-heading)", color: "#fbbf24" }}>
                Golden
              </span>
              <span className="text-xs text-amber-200/70 leading-none font-medium">Cake Shop</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="px-3 py-2 text-sm font-medium text-white/70 hover:text-amber-400 transition-colors duration-200 rounded-lg hover:bg-amber-400/5"
              >
                {t.nav[link as keyof typeof t.nav] ?? link}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-0.5 bg-white/5 rounded-full p-0.5 border border-white/10">
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    lang === code
                      ? "bg-amber-500 text-black shadow-md"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Book Now CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:flex btn-gold text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5"
            >
              {t.nav.bookNow}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-40 pt-20 pb-6 px-4"
            style={{ background: "rgba(15, 10, 5, 0.97)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col gap-1 mb-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link)}
                  className="text-left px-4 py-3.5 text-lg font-semibold text-white/80 hover:text-amber-400 border-b border-white/5 transition-colors"
                >
                  {t.nav[link as keyof typeof t.nav] ?? link}
                </motion.button>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs text-white/40 font-medium">Language:</span>
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    lang === code
                      ? "bg-amber-500 text-black"
                      : "bg-white/5 text-white/60 border border-white/10"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="btn-gold w-full justify-center text-base py-4"
            >
              {t.nav.bookNow}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl whatsapp-pulse"
        style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
    </>
  );
}
