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
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge mb-4 inline-flex"
            >
              {t.faq.badge}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title mb-3"
            >
              {t.faq.title}{" "}
              <span className="title-gradient">{t.faq.titleHighlight}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60"
            >
              {t.faq.subtitle}
            </motion.p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  openId === faq.id
                    ? "border-amber-500/30 bg-amber-400/3"
                    : "border-white/8 bg-white/2"
                }`}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  id={`faq-${faq.id}-btn`}
                  aria-expanded={openId === faq.id}
                >
                  <span className={`font-semibold text-base ${openId === faq.id ? "text-amber-400" : "text-white"}`}>
                    {getQ(faq.questionKey)}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      size={20}
                      className={openId === faq.id ? "text-amber-400" : "text-white/40"}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-5 pb-5 text-white/70 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                        {getA(faq.answerKey)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
