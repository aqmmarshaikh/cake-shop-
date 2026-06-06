"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09 },
  }),
};

export default function About() {
  const { t } = useLanguage();

  const values = [
    { key: "quality", icon: "⭐", title: t.about.values.quality, desc: t.about.values.qualityDesc },
    { key: "custom",  icon: "🎨", title: t.about.values.custom,  desc: t.about.values.customDesc },
    { key: "fresh",   icon: "🌿", title: t.about.values.fresh,   desc: t.about.values.freshDesc },
    { key: "love",    icon: "❤️", title: t.about.values.love,    desc: t.about.values.loveDesc },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background radial decoration */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          right: "-5%",
          top: "10%",
          width: "clamp(280px, 40vw, 520px)",
          aspectRatio: "1",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }} />
      </div>

      <div className="container-custom">
        <div className="section-divider" style={{ marginBottom: "var(--section-py)" }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(3rem, 6vw, 5rem)",
          alignItems: "center",
        }} className="about-grid">

          {/* ── Image Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
            className="about-image-col"
          >
            <div style={{ position: "relative" }}>
              {/* Main image */}
              <div style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                aspectRatio: "4/5",
                boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 60px rgba(245,158,11,0.08)",
              }}>
                <Image
                  src="/images/cake-making.jpg"
                  alt="Golden Cake Shop artisan cake making"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,8,4,0.35), transparent)" }} />
              </div>

              {/* Floating card — Instagram */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="glass-card"
                style={{
                  position: "absolute",
                  bottom: "clamp(-1rem, -3vw, -1.5rem)",
                  right: "clamp(-0.75rem, -3vw, -2rem)",
                  padding: "var(--space-4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  maxWidth: "190px",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "var(--radius-sm)",
                  background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "var(--text-lg)", fontWeight: 900, color: "#fbbf24", lineHeight: 1 }}>568+</div>
                  <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>Followers</div>
                  <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", marginTop: "1px" }}>@goldencakeshop01</div>
                </div>
              </motion.div>

              {/* Floating card — Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, type: "spring", stiffness: 150 }}
                className="glass-card"
                style={{
                  position: "absolute",
                  top: "clamp(-1rem, -3vw, -1.5rem)",
                  left: "clamp(-0.75rem, -3vw, -1.75rem)",
                  padding: "var(--space-3) var(--space-4)",
                  textAlign: "center",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "var(--space-1)" }}>🏆</div>
                <div style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "#fbbf24" }}>Best in</div>
                <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.5)" }}>Patan</div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Content Column ── */}
          <div className="about-content-col">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="badge"
              style={{ display: "inline-flex" }}
            >
              {t.about.badge}
            </motion.span>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-title"
              style={{ marginBottom: "var(--space-4)" }}
            >
              {t.about.title}{" "}
              <span className="title-gradient">{t.about.titleHighlight}</span>
            </motion.h2>

            <div className="gold-divider" />

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                color: "var(--color-text-muted)",
                fontSize: "var(--text-base)",
                lineHeight: 1.75,
                marginBottom: "var(--space-4)",
                maxWidth: "56ch",
              }}
            >
              {t.about.description1}
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                color: "var(--color-text-subtle)",
                fontSize: "var(--text-base)",
                lineHeight: 1.7,
                marginBottom: "var(--space-8)",
                maxWidth: "56ch",
              }}
            >
              {t.about.description2}
            </motion.p>

            {/* Values Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "var(--space-3)",
              marginBottom: "var(--space-8)",
            }}>
              {values.map((val, i) => (
                <motion.div
                  key={val.key}
                  custom={4 + i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--space-3)",
                    padding: "var(--space-4)",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "border-color var(--ease-base), background var(--ease-base)",
                  }}
                  whileHover={{ borderColor: "rgba(245,158,11,0.2)", background: "rgba(245,158,11,0.03)" }}
                >
                  <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: "1px" }}>{val.icon}</span>
                  <div>
                    <div style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "#fbbf24", marginBottom: "var(--space-1)" }}>{val.title}</div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)", lineHeight: 1.5 }}>{val.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              custom={8}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              id="about-instagram-btn"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              {t.about.cta}
            </motion.a>
          </div>

        </div>
      </div>

      {/* Responsive grid layout */}
      <style>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-image-col { order: 1; }
          .about-content-col { order: 2; }
        }
        @media (max-width: 1023px) {
          .about-image-col { order: 2; }
          .about-content-col { order: 1; }
        }
        @media (max-width: 479px) {
          .about-grid { gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
