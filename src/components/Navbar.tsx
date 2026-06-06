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
    const handleScroll = () => setScrolled(window.scrollY > 60);
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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          ...(scrolled
            ? {
                padding: "0.625rem 0",
                background: "rgba(12, 8, 4, 0.88)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(245, 158, 11, 0.10)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.35)",
              }
            : {
                padding: "1.125rem 0",
                background: "transparent",
              }),
        }}
      >
        <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)" }}>

          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              flexShrink: 0,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "var(--radius-sm)",
              background: "linear-gradient(135deg, #fbbf24, #d97706)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 12px rgba(245,158,11,0.35)",
              flexShrink: 0,
            }}>
              <Cake size={17} color="#0c0804" />
            </div>
            <div style={{ lineHeight: 1 }}>
              <span style={{
                display: "block",
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                fontSize: "1.05rem",
                color: "#fbbf24",
                letterSpacing: "-0.01em",
              }}>
                Golden
              </span>
              <span style={{
                display: "block",
                fontSize: "0.675rem",
                color: "rgba(253,235,190,0.6)",
                fontWeight: 500,
                letterSpacing: "0.05em",
                marginTop: "1px",
              }}>
                Cake Shop
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div style={{
            display: "none",
            alignItems: "center",
            gap: "var(--space-1)",
          }} className="lg-nav-links">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  padding: "0.45rem 0.75rem",
                  fontSize: "var(--text-sm)",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.65)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "var(--radius-xs)",
                  transition: "color var(--ease-base), background var(--ease-base)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fbbf24";
                  e.currentTarget.style.background = "rgba(245,158,11,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                  e.currentTarget.style.background = "none";
                }}
              >
                {t.nav[link as keyof typeof t.nav] ?? link}
              </button>
            ))}
          </div>

          {/* Right: Lang + CTA + Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", flexShrink: 0 }}>

            {/* Language Switcher */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "var(--radius-full)",
              padding: "3px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  style={{
                    padding: "0.3rem 0.6rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    transition: "all var(--ease-base)",
                    ...(lang === code
                      ? { background: "#f59e0b", color: "#0c0804", boxShadow: "0 1px 6px rgba(245,158,11,0.5)" }
                      : { background: "transparent", color: "rgba(255,255,255,0.5)" }),
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Book Now — desktop */}
            <button
              onClick={() => scrollTo("contact")}
              className="btn-gold"
              style={{
                display: "none",
                padding: "0.55rem 1.25rem",
                fontSize: "0.8rem",
              }}
              id="nav-book-btn"
            >
              {t.nav.bookNow}
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "var(--radius-sm)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.8)",
                cursor: "pointer",
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {/* Inline responsive override via style tag approach — use media queries in CSS */}
        <style>{`
          @media (min-width: 1024px) {
            .lg-nav-links { display: flex !important; }
            nav #nav-book-btn { display: inline-flex !important; }
            nav button[aria-label="Toggle menu"] { display: none !important; }
          }
          @media (max-width: 640px) {
            .lg-lang-switcher { display: none !important; }
          }
        `}</style>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              inset: "0 0 0 0",
              top: 0,
              zIndex: 40,
              paddingTop: "clamp(4.5rem, 12vw, 5.5rem)",
              paddingBottom: "var(--space-8)",
              paddingLeft: "var(--container-px)",
              paddingRight: "var(--container-px)",
              background: "rgba(10, 6, 2, 0.97)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
            }}
          >
            {/* Nav Links */}
            <div style={{ marginBottom: "var(--space-8)" }}>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "var(--space-4) 0",
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                    color: "rgba(255,255,255,0.75)",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    cursor: "pointer",
                    letterSpacing: "-0.01em",
                    transition: "color var(--ease-base)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >
                  {t.nav[link as keyof typeof t.nav] ?? link}
                </motion.button>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              marginBottom: "var(--space-6)",
            }}>
              <span style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.35)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Language:
              </span>
              {languages.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  style={{
                    padding: "0.5rem 1.125rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all var(--ease-base)",
                    ...(lang === code
                      ? { background: "#f59e0b", color: "#0c0804", border: "none" }
                      : {
                          background: "rgba(255,255,255,0.05)",
                          color: "rgba(255,255,255,0.55)",
                          border: "1px solid rgba(255,255,255,0.10)",
                        }),
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="btn-gold"
              style={{ width: "100%", justifyContent: "center", padding: "1rem", fontSize: "var(--text-base)" }}
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
        transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
        className="whatsapp-pulse"
        style={{
          position: "fixed",
          bottom: "clamp(1.25rem, 4vw, 1.75rem)",
          right: "clamp(1.25rem, 4vw, 1.75rem)",
          zIndex: 50,
          width: "54px",
          height: "54px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          transition: "transform var(--ease-base)",
        }}
        aria-label="Chat on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
    </>
  );
}
