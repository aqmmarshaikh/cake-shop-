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

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }} />
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-4 inline-flex"
          >
            {t.pricing.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-3"
          >
            {t.pricing.title}{" "}
            <span className="title-gradient">{t.pricing.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto text-sm sm:text-base"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl overflow-hidden ${
                plan.popular
                  ? "border-2 border-amber-500/60 shadow-2xl"
                  : "border border-white/8"
              }`}
              style={{
                background: plan.popular
                  ? "linear-gradient(135deg, rgba(42, 26, 14, 1), rgba(31, 18, 8, 1))"
                  : "var(--color-surface)",
                boxShadow: plan.popular ? "0 0 60px rgba(245, 158, 11, 0.2)" : "none",
              }}
              id={`pricing-${plan.id}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <div className="px-4 py-1.5 text-xs font-bold text-black rounded-b-xl"
                    style={{ background: "linear-gradient(135deg, #fbbf24, #f59e0b)" }}>
                    <Sparkles size={12} className="inline mr-1" />
                    {t.pricing.popular}
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-7 flex flex-col h-full">
                {/* Plan Name */}
                <div className={`${plan.popular ? "mt-6" : ""} mb-4`}>
                  <h3 className="text-xl font-bold text-white mb-1">{getName(plan.nameKey)}</h3>
                  <p className="text-white/50 text-sm">{getDesc(plan.descKey)}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/8">
                  <span className="text-amber-400 text-xl font-bold">{siteConfig.currency}</span>
                  <span
                    className={`font-black ${plan.popular ? "title-gradient" : "text-white"}`}
                    style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                  >
                    {plan.price.toLocaleString()}
                  </span>
                  <span className="text-white/40 text-sm">{t.pricing.perKg}</span>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-grow">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-amber-500/20" : "bg-white/5"
                      }`}>
                        <Check size={12} className={plan.popular ? "text-amber-400" : "text-white/60"} />
                      </div>
                      <span className="text-white/70">{featureMap[f] ?? f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={plan.popular ? "btn-gold w-full" : "btn-outline w-full"}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-white/50 mb-3">{t.pricing.custom}</p>
          <button onClick={scrollToContact} className="btn-outline" id="custom-quote-btn">
            {t.pricing.customCta}
          </button>
          <p className="text-white/30 text-xs mt-4 max-w-lg mx-auto">{t.pricing.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
