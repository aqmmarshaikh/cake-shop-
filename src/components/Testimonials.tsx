"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/content/content";

export default function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const getText = (key: string) => {
    const map: Record<string, string> = {
      "testimonials.1.text": t.testimonials["1"].text,
      "testimonials.2.text": t.testimonials["2"].text,
      "testimonials.3.text": t.testimonials["3"].text,
      "testimonials.4.text": t.testimonials["4"].text,
    };
    return map[key] ?? key;
  };

  const testimonialImages = [
    "/images/gallery-5.jpg",
    "/images/gallery-7.jpg",
    "/images/gallery-9.jpg",
    "/images/gallery-1.jpg",
  ];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full opacity-5"
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
            {t.testimonials.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-3"
          >
            {t.testimonials.title}{" "}
            <span className="title-gradient">{t.testimonials.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto"
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card p-6 sm:p-10 rounded-3xl overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-amber-400/15">
              <Quote size={60} />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-amber-400/30">
                  <Image
                    src={testimonialImages[current] || "/images/gallery-1.jpg"}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.p
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-white/80 text-base sm:text-lg leading-relaxed mb-5 italic"
                  >
                    "{getText(testimonials[current].textKey)}"
                  </motion.p>
                </AnimatePresence>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-white">{testimonials[current].name}</div>
                    <div className="text-amber-400/70 text-sm">
                      {testimonials[current].occasion} • {testimonials[current].location}
                    </div>
                  </div>
                  <div className="text-white/30 text-sm">{testimonials[current].date}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-amber-400 hover:border-amber-400/30 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-2 bg-amber-500" : "w-2 h-2 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-amber-400 hover:border-amber-400/30 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* All Mini Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {testimonials.map((t_item, i) => (
            <motion.button
              key={t_item.id}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                i === current
                  ? "border-amber-400/40 bg-amber-400/5"
                  : "border-white/5 bg-white/2 hover:border-amber-400/20"
              }`}
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={10} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-white/60 text-xs leading-relaxed mb-2 line-clamp-2">
                "{getText(t_item.textKey)}"
              </p>
              <div className="text-amber-400/70 text-xs font-medium">{t_item.name}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
