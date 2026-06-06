"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/content/content";

const testimonialImages = [
  "/images/gallery-5.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-1.jpg",
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => { setDirection(1);  setCurrent((c) => (c + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const goTo = (i: number) => { setDirection(i > current ? 1 : -1); setCurrent(i); };

  const getText = (key: string) => {
    const map: Record<string, string> = {
      "testimonials.1.text": t.testimonials["1"].text,
      "testimonials.2.text": t.testimonials["2"].text,
      "testimonials.3.text": t.testimonials["3"].text,
      "testimonials.4.text": t.testimonials["4"].text,
    };
    return map[key] ?? key;
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Ambient glow */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          left: "-5%", bottom: 0,
          width: "clamp(240px, 35vw, 480px)",
          aspectRatio: "1",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.055) 0%, transparent 70%)",
        }} />
      </div>

      <div className="container-custom">

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: "var(--section-header)" }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge"
          >
            {t.testimonials.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
            style={{ marginBottom: "var(--space-4)" }}
          >
            {t.testimonials.title}{" "}
            <span className="title-gradient">{t.testimonials.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: "0 auto" }}
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

        {/* ── Main Testimonial Card ── */}
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div
            className="glass-card"
            style={{
              padding: "clamp(1.75rem, 5vw, 3rem)",
              borderRadius: "var(--radius-2xl)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative quote icon */}
            <div style={{
              position: "absolute",
              top: "var(--space-6)",
              right: "var(--space-6)",
              color: "rgba(245,158,11,0.10)",
              pointerEvents: "none",
            }}>
              <Quote size={64} />
            </div>

            <div style={{
              display: "flex",
              flexDirection: "row",
              gap: "var(--space-6)",
              alignItems: "flex-start",
            }} className="testimonial-inner">

              {/* Avatar */}
              <div style={{ flexShrink: 0 }}>
                <div style={{
                  width: "clamp(56px, 10vw, 72px)",
                  aspectRatio: "1",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "2px solid rgba(245,158,11,0.30)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                }}>
                  <Image
                    src={testimonialImages[current] || "/images/gallery-1.jpg"}
                    alt={testimonials[current].name}
                    width={72}
                    height={72}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "var(--space-4)" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>

                {/* Review text */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.p
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.38, ease: "easeInOut" }}
                    style={{
                      color: "rgba(255,255,255,0.78)",
                      fontSize: "var(--text-lg)",
                      lineHeight: 1.75,
                      fontStyle: "italic",
                      marginBottom: "var(--space-5)",
                    }}
                  >
                    &ldquo;{getText(testimonials[current].textKey)}&rdquo;
                  </motion.p>
                </AnimatePresence>

                {/* Attribution */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "var(--space-3)",
                }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--color-text)", fontSize: "var(--text-base)" }}>
                      {testimonials[current].name}
                    </div>
                    <div style={{ color: "rgba(245,158,11,0.65)", fontSize: "var(--text-sm)", marginTop: "2px" }}>
                      {testimonials[current].occasion} · {testimonials[current].location}
                    </div>
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.28)", fontSize: "var(--text-sm)" }}>
                    {testimonials[current].date}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-4)",
            marginTop: "var(--space-6)",
          }}>
            <button
              onClick={prev}
              style={{
                width: "42px", height: "42px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.55)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                transition: "border-color var(--ease-base), color var(--ease-base), background var(--ease-base)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fbbf24"; e.currentTarget.style.borderColor = "rgba(245,158,11,0.35)"; e.currentTarget.style.background = "rgba(245,158,11,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dot indicators */}
            <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    borderRadius: "var(--radius-full)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all var(--ease-base)",
                    ...(i === current
                      ? { width: "24px", height: "8px", background: "#f59e0b" }
                      : { width: "8px", height: "8px", background: "rgba(255,255,255,0.18)" }),
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: "42px", height: "42px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.55)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                transition: "border-color var(--ease-base), color var(--ease-base), background var(--ease-base)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fbbf24"; e.currentTarget.style.borderColor = "rgba(245,158,11,0.35)"; e.currentTarget.style.background = "rgba(245,158,11,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Mini Cards Grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "var(--space-4)",
          marginTop: "var(--space-10)",
        }} className="testimonial-mini-grid">
          {testimonials.map((t_item, i) => (
            <motion.button
              key={t_item.id}
              onClick={() => goTo(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                textAlign: "left",
                padding: "var(--space-4)",
                borderRadius: "var(--radius-lg)",
                cursor: "pointer",
                transition: "all var(--ease-base)",
                ...(i === current
                  ? {
                      border: "1px solid rgba(245,158,11,0.38)",
                      background: "rgba(245,158,11,0.05)",
                    }
                  : {
                      border: "1px solid rgba(255,255,255,0.05)",
                      background: "rgba(255,255,255,0.02)",
                    }),
              }}
            >
              <div style={{ display: "flex", gap: "2px", marginBottom: "var(--space-2)" }}>
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={9} color="#f59e0b" fill="#f59e0b" />
                ))}
              </div>
              <p style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "var(--text-xs)",
                lineHeight: 1.55,
                marginBottom: "var(--space-2)",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}>
                &ldquo;{getText(t_item.textKey)}&rdquo;
              </p>
              <div style={{ color: "rgba(245,158,11,0.6)", fontSize: "var(--text-xs)", fontWeight: 600 }}>
                {t_item.name}
              </div>
            </motion.button>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 479px) {
          .testimonial-inner { flex-direction: column !important; gap: 1rem !important; }
          .testimonial-mini-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 480px) and (max-width: 767px) {
          .testimonial-mini-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
