"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/content/content";
import { siteConfig } from "@/config/site";

/* ── Section header shared variant ── */
const headerVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

export default function Services() {
  const { t } = useLanguage();

  const getTitle = (key: string) => {
    const map: Record<string, string> = {
      "services.wedding.title": t.services.wedding.title,
      "services.birthday.title": t.services.birthday.title,
      "services.anniversary.title": t.services.anniversary.title,
      "services.corporate.title": t.services.corporate.title,
      "services.fondant.title": t.services.fondant.title,
      "services.cupcakes.title": t.services.cupcakes.title,
    };
    return map[key] ?? key;
  };

  const getDesc = (key: string) => {
    const map: Record<string, string> = {
      "services.wedding.desc": t.services.wedding.desc,
      "services.birthday.desc": t.services.birthday.desc,
      "services.anniversary.desc": t.services.anniversary.desc,
      "services.corporate.desc": t.services.corporate.desc,
      "services.fondant.desc": t.services.fondant.desc,
      "services.cupcakes.desc": t.services.cupcakes.desc,
    };
    return map[key] ?? key;
  };

  const serviceImages: Record<string, string> = {
    "wedding-cakes":      "/images/wedding-cake.jpg",
    "birthday-cakes":     "/images/birthday-cake.jpg",
    "anniversary-cakes":  "/images/anniversary-cake.jpg",
    "corporate-cakes":    "/images/corporate-cake.jpg",
    "fondant-cakes":      "/images/fondant-cake.jpg",
    "cupcakes":           "/images/cupcakes.jpg",
  };

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container-custom">

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: "var(--section-header)" }}>
          <motion.span
            custom={0}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="badge"
          >
            {t.services.badge}
          </motion.span>

          <motion.h2
            custom={1}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-title"
            style={{ marginBottom: "var(--space-4)" }}
          >
            {t.services.title}{" "}
            <span className="title-gradient">{t.services.titleHighlight}</span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={headerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-subtitle"
            style={{ margin: "0 auto" }}
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* ── Services Grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
          gap: "var(--space-6)",
        }} className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              id={`service-${service.id}`}
            >
              {/* ── Card Image ── */}
              <div style={{
                position: "relative",
                height: "clamp(180px, 22vw, 220px)",
                overflow: "hidden",
                borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                flexShrink: 0,
              }}>
                <Image
                  src={serviceImages[service.id] || "/images/gallery-1.jpg"}
                  alt={getTitle(service.titleKey)}
                  fill
                  className="object-cover"
                  style={{ transition: "transform 0.65s ease" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(12,8,4,0.85) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
                }} />

                {/* Icon chip */}
                <div style={{
                  position: "absolute",
                  top: "var(--space-4)",
                  left: "var(--space-4)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(12,8,4,0.65)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}>
                  {service.icon}
                </div>

                {/* Price chip */}
                <div
                  className="glass-card"
                  style={{
                    position: "absolute",
                    top: "var(--space-4)",
                    right: "var(--space-4)",
                    padding: "var(--space-1) var(--space-3)",
                    borderRadius: "var(--radius-full)",
                    fontSize: "var(--text-xs)",
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.45)" }}>{t.services.startingFrom}</span>
                  <span style={{ color: "#fbbf24", fontWeight: 700, marginLeft: "3px" }}>
                    {siteConfig.currency}{service.startingPrice}
                  </span>
                </div>
              </div>

              {/* ── Card Body ── */}
              <div style={{
                padding: "var(--space-5) var(--space-5) var(--space-6)",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--text-xl)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "var(--space-2)",
                  transition: "color var(--ease-base)",
                  lineHeight: 1.3,
                }}>
                  {getTitle(service.titleKey)}
                </h3>

                <p style={{
                  color: "var(--color-text-muted)",
                  fontSize: "var(--text-sm)",
                  lineHeight: 1.7,
                  marginBottom: "var(--space-5)",
                  flex: 1,
                }}>
                  {getDesc(service.descriptionKey)}
                </p>

                {/* Feature tags */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-2)",
                  marginBottom: "var(--space-5)",
                }}>
                  {service.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        padding: "0.25rem 0.625rem",
                        borderRadius: "var(--radius-full)",
                        color: "rgba(251,191,36,0.85)",
                        background: "rgba(245,158,11,0.08)",
                        border: "1px solid rgba(245,158,11,0.18)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="btn-gold"
                  style={{ width: "100%", justifyContent: "center", padding: "0.7rem var(--space-4)" }}
                  id={`book-${service.id}`}
                >
                  {t.services.bookThisCake}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 479px) {
          .services-grid { grid-template-columns: 1fr !important; gap: 1.25rem !important; }
        }
        @media (min-width: 480px) and (max-width: 767px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.125rem !important; }
        }
        @media (min-width: 768px) {
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        .card:hover h3 { color: #fbbf24; }
        .card:hover img { transform: scale(1.08); }
      `}</style>
    </section>
  );
}
