"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function About() {
  const { t } = useLanguage();

  const values = [
    { key: "quality", icon: "⭐", title: t.about.values.quality, desc: t.about.values.qualityDesc },
    { key: "custom", icon: "🎨", title: t.about.values.custom, desc: t.about.values.customDesc },
    { key: "fresh", icon: "🌿", title: t.about.values.fresh, desc: t.about.values.freshDesc },
    { key: "love", icon: "❤️", title: t.about.values.love, desc: t.about.values.loveDesc },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }} />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
                style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(245,158,11,0.1)" }}>
                <Image
                  src="/images/cake-making.jpg"
                  alt="Golden Cake Shop artisan cake making"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating Card — Instagram Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 glass-card p-4 flex items-center gap-3 max-w-[200px]"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <div>
                  <div className="text-lg font-black text-amber-400">568+</div>
                  <div className="text-xs text-white/50">Followers</div>
                  <div className="text-xs text-white/40">@goldencakeshop01</div>
                </div>
              </motion.div>

              {/* Floating Card — Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-5 -left-4 sm:-left-6 glass-card p-3 text-center"
              >
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-xs font-bold text-amber-400">Best in</div>
                <div className="text-xs text-white/60">Patan</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="badge mb-4 inline-flex"
            >
              {t.about.badge}
            </motion.span>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-title mb-4"
            >
              {t.about.title}{" "}
              <span className="title-gradient">{t.about.titleHighlight}</span>
            </motion.h2>

            <div className="gold-divider mb-6" />

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white/70 text-base sm:text-lg leading-relaxed mb-4"
            >
              {t.about.description1}
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white/60 text-base leading-relaxed mb-8"
            >
              {t.about.description2}
            </motion.p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {values.map((val, i) => (
                <motion.div
                  key={val.key}
                  custom={4 + i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{val.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-amber-400 mb-0.5">{val.title}</div>
                    <div className="text-xs text-white/50">{val.desc}</div>
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
              className="btn-outline inline-flex"
              id="about-instagram-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              {t.about.cta}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
