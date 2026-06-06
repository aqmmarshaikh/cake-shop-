"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

type Category = "all" | "wedding" | "birthday" | "fondant" | "anniversary" | "cupcakes";

const enrichedGallery = [
  { id: 1,  src: "/images/gallery-7.jpg",              category: "birthday"     },
  { id: 2,  src: "/images/wedding-cake.jpg",           category: "wedding"      },
  { id: 3,  src: "/images/gallery-1-ai.jpg",              category: "birthday"     },
  { id: 4,  src: "/images/fondant-cake.jpg",           category: "fondant"      },
  { id: 5,  src: "/images/gallery-5.jpg",              category: "birthday"     },
  { id: 6,  src: "/images/anniversary-cake.jpg",       category: "anniversary"  },
  { id: 7,  src: "/images/gallery-9.jpg",              category: "birthday"     },
  { id: 8,  src: "/images/cupcakes.jpg",               category: "cupcakes"     },
  { id: 9,  src: "/images/gallery-fondant-special.png",category: "fondant"      },
  { id: 10, src: "/images/gallery-6.jpg",              category: "birthday"     },
  { id: 11, src: "/images/gallery-8.jpg",              category: "wedding"      },
  { id: 12, src: "/images/birthday-cake.jpg",          category: "birthday"     },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const categories: { id: Category; label: string }[] = [
    { id: "all",          label: t.gallery.all },
    { id: "wedding",      label: t.gallery.wedding },
    { id: "birthday",     label: t.gallery.birthday },
    { id: "fondant",      label: t.gallery.fondant },
    { id: "anniversary",  label: t.gallery.anniversary },
    { id: "cupcakes",     label: t.gallery.cupcakes },
  ];

  const filtered =
    activeCategory === "all"
      ? enrichedGallery
      : enrichedGallery.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding relative">
      <div className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="container-custom">

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: "var(--section-header)" }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge"
          >
            {t.gallery.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
            style={{ marginBottom: "var(--space-4)" }}
          >
            {t.gallery.title}{" "}
            <span className="title-gradient">{t.gallery.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: "0 auto" }}
          >
            {t.gallery.subtitle}
          </motion.p>
        </div>

        {/* ── Filter Pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-2)",
            justifyContent: "center",
            marginBottom: "var(--space-10)",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "var(--radius-full)",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all var(--ease-base)",
                whiteSpace: "nowrap",
                ...(activeCategory === cat.id
                  ? {
                      background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                      color: "#0c0804",
                      border: "none",
                      boxShadow: "0 4px 16px rgba(245,158,11,0.35)",
                    }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.55)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }),
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* ── Masonry Grid ── */}
        <div style={{
          columns: "4 220px",
          gap: "var(--space-4)",
        }} className="gallery-masonry">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                style={{
                  position: "relative",
                  breakInside: "avoid",
                  marginBottom: "var(--space-4)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => setLightboxImg(img.src)}
                className="gallery-item"
              >
                <div style={{ position: "relative", aspectRatio: i % 3 === 0 ? "4/5" : "1/1" }}>
                  <Image
                    src={img.src}
                    alt={`Golden Cake Shop creation ${img.id}`}
                    fill
                    className="object-cover gallery-img"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="gallery-overlay" style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background var(--ease-base)",
                  }}>
                    <ZoomIn
                      size={26}
                      color="white"
                      style={{ opacity: 0, transition: "opacity var(--ease-base)" }}
                      className="gallery-zoom"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Instagram CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "var(--space-12)" }}
        >
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline btn-lg"
            id="gallery-instagram-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            {t.gallery.viewOnInstagram}
          </a>
        </motion.div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 60,
              background: "rgba(0,0,0,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--container-px)",
            }}
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              style={{ position: "relative", maxWidth: "820px", width: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ position: "relative", maxHeight: "82vh", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
                <Image
                  src={lightboxImg}
                  alt="Gallery image"
                  width={820}
                  height={820}
                  style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "82vh" }}
                />
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                style={{
                  position: "absolute",
                  top: "-14px",
                  right: "-14px",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background var(--ease-base)",
                }}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 479px) {
          .gallery-masonry { columns: 2 !important; gap: 0.75rem !important; }
          .gallery-masonry > div { margin-bottom: 0.75rem !important; }
        }
        @media (min-width: 480px) and (max-width: 767px) {
          .gallery-masonry { columns: 3 !important; }
        }
        .gallery-item:hover .gallery-overlay { background: rgba(0,0,0,0.32) !important; }
        .gallery-item:hover .gallery-zoom { opacity: 1 !important; }
        .gallery-item:hover .gallery-img { transform: scale(1.06); transition: transform 0.55s ease; }
      `}</style>
    </section>
  );
}
