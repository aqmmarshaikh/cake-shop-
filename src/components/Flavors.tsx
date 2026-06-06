"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { flavors } from "@/content/content";

export default function Flavors() {
  const { t } = useLanguage();

  return (
    <section style={{
      paddingTop: "clamp(2.5rem, 6vw, 4rem)",
      paddingBottom: "clamp(2.5rem, 6vw, 4rem)",
      overflow: "hidden",
      position: "relative",
    }}>
      <div className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Section header */}
      <div className="container-custom" style={{ marginBottom: "clamp(1.5rem, 3vw, 2.25rem)", textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--text-3xl)",
            fontWeight: 800,
            color: "var(--color-text)",
            marginBottom: "var(--space-2)",
            letterSpacing: "-0.02em",
          }}
        >
          {t.flavors.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            color: "var(--color-text-subtle)",
            fontSize: "var(--text-sm)",
          }}
        >
          {t.flavors.subtitle}
        </motion.p>
      </div>

      {/* Scrolling Marquee */}
      <div style={{ position: "relative" }}>
        {/* Edge fade — left */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: "clamp(60px, 10vw, 120px)",
          zIndex: 10, pointerEvents: "none",
          background: "linear-gradient(to right, var(--color-bg), transparent)",
        }} />
        {/* Edge fade — right */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0,
          width: "clamp(60px, 10vw, 120px)",
          zIndex: 10, pointerEvents: "none",
          background: "linear-gradient(to left, var(--color-bg), transparent)",
        }} />

        <div style={{ display: "flex", overflow: "hidden" }}>
          <div style={{
            display: "flex",
            gap: "var(--space-3)",
            animation: "marquee 28s linear infinite",
            whiteSpace: "nowrap",
            width: "max-content",
          }}>
            {[...flavors, ...flavors, ...flavors].map((flavor, i) => (
              <span
                key={i}
                style={{
                  padding: "0.55rem var(--space-5)",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid rgba(245,158,11,0.20)",
                  background: "rgba(245,158,11,0.05)",
                  color: "rgba(251,191,36,0.75)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 500,
                  flexShrink: 0,
                  cursor: "default",
                  transition: "background var(--ease-base), border-color var(--ease-base), color var(--ease-base)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(245,158,11,0.12)";
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.40)";
                  e.currentTarget.style.color = "#fbbf24";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(245,158,11,0.05)";
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.20)";
                  e.currentTarget.style.color = "rgba(251,191,36,0.75)";
                }}
              >
                🍰 {flavor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
