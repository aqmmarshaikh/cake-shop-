"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { flavors } from "@/content/content";

export default function Flavors() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 overflow-hidden relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container-custom mb-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-2"
          >
            {t.flavors.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-sm"
          >
            {t.flavors.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }} />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }} />

        <div className="flex overflow-hidden">
          <div
            className="flex gap-3 animate-marquee"
            style={{
              animation: "marquee 25s linear infinite",
              whiteSpace: "nowrap",
              width: "max-content",
            }}
          >
            {[...flavors, ...flavors, ...flavors].map((flavor, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400/80 text-sm font-medium flex-shrink-0 hover:bg-amber-400/15 hover:border-amber-400/40 transition-all cursor-default"
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
