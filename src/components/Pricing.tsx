"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { pricing } from "@/content/content";
import { siteConfig } from "@/config/site";

export default function Pricing() {
  const { t } = useLanguage();

  const getName = (key: string) =>
    ({ "pricing.basic.name": t.pricing.basic.name, "pricing.premium.name": t.pricing.premium.name, "pricing.luxury.name": t.pricing.luxury.name })[key] ?? key;
  const getDesc = (key: string) =>
    ({ "pricing.basic.desc": t.pricing.basic.desc, "pricing.premium.desc": t.pricing.premium.desc, "pricing.luxury.desc": t.pricing.luxury.desc })[key] ?? key;

  const featureMap: Record<string, string> = {
    "pricing.basic.f1": t.pricing.basic.f1, "pricing.basic.f2": t.pricing.basic.f2,
    "pricing.basic.f3": t.pricing.basic.f3, "pricing.basic.f4": t.pricing.basic.f4,
    "pricing.premium.f1": t.pricing.premium.f1, "pricing.premium.f2": t.pricing.premium.f2,
    "pricing.premium.f3": t.pricing.premium.f3, "pricing.premium.f4": t.pricing.premium.f4,
    "pricing.premium.f5": t.pricing.premium.f5, "pricing.luxury.f1": t.pricing.luxury.f1,
    "pricing.luxury.f2": t.pricing.luxury.f2, "pricing.luxury.f3": t.pricing.luxury.f3,
    "pricing.luxury.f4": t.pricing.luxury.f4, "pricing.luxury.f5": t.pricing.luxury.f5,
    "pricing.luxury.f6": t.pricing.luxury.f6,
  };

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Ambient glow */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "clamp(300px, 50vw, 650px)",
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
            {t.pricing.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
            style={{ marginBottom: "var(--space-4)" }}
          >
            {t.pricing.title}{" "}
            <span className="title-gradient">{t.pricing.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: "0 auto" }}
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        {/* ── Pricing Cards ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "var(--space-6)",
          maxWidth: "940px",
          margin: "0 auto",
        }} className="pricing-grid">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                ...(plan.popular
                  ? {
                      background: "linear-gradient(170deg, rgba(42, 26, 14, 1), rgba(25, 14, 5, 1))",
                      border: "2px solid rgba(245,158,11,0.50)",
                      boxShadow: "0 0 55px rgba(245,158,11,0.18), 0 20px 50px rgba(0,0,0,0.45)",
                      transform: "scale(1.025)",
                    }
                  : {
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      boxShadow: "var(--shadow-md)",
                    }),
              }}
              id={`pricing-${plan.id}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  display: "flex",
                  justifyContent: "center",
                }}>
                  <div style={{
                    padding: "0.35rem var(--space-5)",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: "#0c0804",
                    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                    borderRadius: "0 0 var(--radius-sm) var(--radius-sm)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}>
                    <Sparkles size={10} />
                    {t.pricing.popular}
                  </div>
                </div>
              )}

              <div style={{
                padding: "var(--space-8) var(--space-6)",
                paddingTop: plan.popular ? "calc(var(--space-8) + 1.5rem)" : "var(--space-8)",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}>

                {/* Plan name & desc */}
                <div style={{ marginBottom: "var(--space-6)" }}>
                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 800,
                    color: "var(--color-text)",
                    marginBottom: "var(--space-2)",
                    lineHeight: 1.2,
                  }}>
                    {getName(plan.nameKey)}
                  </h3>
                  <p style={{ color: "var(--color-text-subtle)", fontSize: "var(--text-sm)", lineHeight: 1.5 }}>
                    {getDesc(plan.descKey)}
                  </p>
                </div>

                {/* Price */}
                <div style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "var(--space-1)",
                  marginBottom: "var(--space-6)",
                  paddingBottom: "var(--space-6)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}>
                  <span style={{ color: "#fbbf24", fontSize: "var(--text-lg)", fontWeight: 700 }}>
                    {siteConfig.currency}
                  </span>
                  <span
                    className={plan.popular ? "title-gradient" : ""}
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(2.5rem, 5vw, 3.25rem)",
                      fontWeight: 900,
                      lineHeight: 1,
                      color: plan.popular ? undefined : "var(--color-text)",
                    }}
                  >
                    {plan.price.toLocaleString()}
                  </span>
                  <span style={{ color: "var(--color-text-subtle)", fontSize: "var(--text-sm)" }}>
                    {t.pricing.perKg}
                  </span>
                </div>

                {/* Features */}
                <ul style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                  flex: 1,
                  marginBottom: "var(--space-8)",
                }}>
                  {plan.features.map((f, fi) => (
                    <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-3)", fontSize: "var(--text-sm)" }}>
                      <div style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                        background: plan.popular ? "rgba(245,158,11,0.18)" : "rgba(255,255,255,0.05)",
                      }}>
                        <Check size={11} color={plan.popular ? "#fbbf24" : "rgba(255,255,255,0.5)"} />
                      </div>
                      <span style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.5 }}>
                        {featureMap[f] ?? f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={plan.popular ? "btn-gold" : "btn-outline"}
                  style={{ width: "100%", justifyContent: "center", padding: "0.85rem" }}
                  id={`book-plan-${plan.id}`}
                >
                  {t.pricing.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "var(--space-12)" }}
        >
          <p style={{ color: "var(--color-text-subtle)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
            {t.pricing.custom}
          </p>
          <button onClick={scrollToContact} className="btn-outline" id="custom-quote-btn">
            {t.pricing.customCta}
          </button>
          <p style={{
            color: "rgba(255,255,255,0.22)",
            fontSize: "var(--text-xs)",
            marginTop: "var(--space-5)",
            maxWidth: "52ch",
            margin: "var(--space-5) auto 0",
            lineHeight: 1.7,
          }}>
            {t.pricing.note}
          </p>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 639px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 420px !important;
            gap: 1.25rem !important;
          }
          .pricing-grid > div { transform: scale(1) !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px !important; }
          .pricing-grid > div { transform: scale(1) !important; }
        }
        @media (min-width: 1024px) {
          .pricing-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
