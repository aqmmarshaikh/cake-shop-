"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { faqs } from "@/content/content";

export default function FAQ() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(1);

  const getQ = (key: string) => {
    const map: Record<string, string> = {
      "faq.1.q": t.faq["1"].q, "faq.2.q": t.faq["2"].q, "faq.3.q": t.faq["3"].q,
      "faq.4.q": t.faq["4"].q, "faq.5.q": t.faq["5"].q, "faq.6.q": t.faq["6"].q,
    };
    return map[key] ?? key;
  };

  const getA = (key: string) => {
    const map: Record<string, string> = {
      "faq.1.a": t.faq["1"].a, "faq.2.a": t.faq["2"].a, "faq.3.a": t.faq["3"].a,
      "faq.4.a": t.faq["4"].a, "faq.5.a": t.faq["5"].a, "faq.6.a": t.faq["6"].a,
    };
    return map[key] ?? key;
  };

  return (
    <section id="faq" className="section-padding relative">
      <div className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container-custom">
        <div style={{ maxWidth: "740px", margin: "0 auto" }}>

          {/* ── Section Header ── */}
          <div style={{ textAlign: "center", marginBottom: "var(--section-header)" }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge"
            >
              {t.faq.badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
              style={{ marginBottom: "var(--space-4)" }}
            >
              {t.faq.title}{" "}
              <span className="title-gradient">{t.faq.titleHighlight}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="section-subtitle"
              style={{ margin: "0 auto" }}
            >
              {t.faq.subtitle}
            </motion.p>
          </div>

          {/* ── FAQ Accordion ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {faqs.map((faq, i) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    border: `1px solid ${isOpen ? "rgba(245,158,11,0.28)" : "rgba(255,255,255,0.06)"}`,
                    background: isOpen ? "rgba(245,158,11,0.025)" : "rgba(255,255,255,0.02)",
                    transition: "border-color var(--ease-base), background var(--ease-base)",
                  }}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "var(--space-4)",
                      padding: "var(--space-5)",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    id={`faq-${faq.id}-btn`}
                    aria-expanded={isOpen}
                  >
                    <span style={{
                      fontWeight: 600,
                      fontSize: "var(--text-base)",
                      color: isOpen ? "#fbbf24" : "var(--color-text)",
                      lineHeight: 1.4,
                      transition: "color var(--ease-base)",
                    }}>
                      {getQ(faq.questionKey)}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.28 }}
                      style={{ flexShrink: 0 }}
                    >
                      <ChevronDown
                        size={18}
                        color={isOpen ? "#fbbf24" : "rgba(255,255,255,0.35)"}
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{
                          padding: "0 var(--space-5) var(--space-5)",
                          color: "var(--color-text-muted)",
                          fontSize: "var(--text-sm)",
                          lineHeight: 1.75,
                          borderTop: "1px solid rgba(255,255,255,0.05)",
                          paddingTop: "var(--space-4)",
                        }}>
                          {getA(faq.answerKey)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
