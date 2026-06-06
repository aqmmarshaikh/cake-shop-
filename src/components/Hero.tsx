"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { stats } from "@/content/content";

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const statLabels: Record<string, string> = {
    "stats.cakes": t.stats.cakes,
    "stats.years": t.stats.years,
    "stats.rating": t.stats.rating,
    "stats.fresh": t.stats.fresh,
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-cake.jpg"
          alt="Golden Cake Shop Premium Cakes"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0804] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 2 === 0 ? "3px" : "2px",
              height: i % 2 === 0 ? "3px" : "2px",
              background: "#fbbf24",
              left: `${10 + i * 13}%`,
              top: `${15 + (i % 4) * 18}%`,
              opacity: 0.5,
            }}
            animate={{
              y: [-15, -55, -15],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.8, 0.5],
            }}
            transition={{
              duration: 4.5 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10" style={{ paddingTop: "clamp(6rem, 14vw, 9rem)", paddingBottom: "clamp(5rem, 10vw, 7rem)" }}>
        <div style={{ maxWidth: "min(640px, 100%)" }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="badge">{t.hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-hero)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "var(--space-5)",
            }}
          >
            <span className="text-white block">{t.hero.headline1}</span>
            <span className="title-gradient block">{t.hero.headline2}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{
              color: "rgba(255,255,255,0.68)",
              fontSize: "var(--text-lg)",
              lineHeight: 1.7,
              marginBottom: "var(--space-8)",
              maxWidth: "52ch",
            }}
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-3)",
              marginBottom: "var(--space-12)",
            }}
          >
            <button
              onClick={() => scrollTo("contact")}
              className="btn-gold btn-lg"
              id="hero-book-btn"
            >
              🎂 {t.hero.cta1}
            </button>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-lg"
              id="hero-whatsapp-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.hero.cta2}
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
          >
            {/* Subtle separator */}
            <div style={{
              width: "100%",
              height: "1px",
              background: "rgba(255,255,255,0.08)",
              marginBottom: "var(--space-6)",
              maxWidth: "420px",
            }} />
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "var(--space-4)",
              maxWidth: "420px",
            }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55 + i * 0.08 }}
                  style={{ textAlign: "center" }}
                >
                  <div
                    className="title-gradient"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.5rem, 4vw, 2rem)",
                      fontWeight: 900,
                      lineHeight: 1,
                      marginBottom: "var(--space-1)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "var(--text-xs)",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.35,
                  }}>
                    {statLabels[stat.labelKey] ?? stat.labelKey}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: "absolute",
          bottom: "clamp(1.5rem, 4vw, 2.5rem)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-2)",
          color: "rgba(255,255,255,0.35)",
          background: "none",
          border: "none",
          cursor: "pointer",
          transition: "color var(--ease-base)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
        aria-label="Scroll down"
      >
        <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          {t.hero.scrollHint}
        </span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
