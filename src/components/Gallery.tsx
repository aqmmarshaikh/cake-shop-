"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { galleryImages } from "@/content/content";
import { siteConfig } from "@/config/site";

type Category = "all" | "wedding" | "birthday" | "fondant" | "anniversary" | "cupcakes";

export default function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: t.gallery.all },
    { id: "wedding", label: t.gallery.wedding },
    { id: "birthday", label: t.gallery.birthday },
    { id: "fondant", label: t.gallery.fondant },
    { id: "anniversary", label: t.gallery.anniversary },
    { id: "cupcakes", label: t.gallery.cupcakes },
  ];

  // Mix real Instagram images with generated ones
  const enrichedGallery = [
    { id: 1, src: "/images/gallery-7.jpg", category: "birthday" },
    { id: 2, src: "/images/wedding-cake.jpg", category: "wedding" },
    { id: 3, src: "/images/gallery-1.jpg", category: "birthday" },
    { id: 4, src: "/images/fondant-cake.jpg", category: "fondant" },
    { id: 5, src: "/images/gallery-5.jpg", category: "birthday" },
    { id: 6, src: "/images/anniversary-cake.jpg", category: "anniversary" },
    { id: 7, src: "/images/gallery-9.jpg", category: "birthday" },
    { id: 8, src: "/images/cupcakes.jpg", category: "cupcakes" },
    { id: 9, src: "/images/gallery-fondant-special.png", category: "fondant" },
    { id: 10, src: "/images/gallery-6.jpg", category: "birthday" },
    { id: 11, src: "/images/gallery-8.jpg", category: "wedding" },
    { id: 12, src: "/images/birthday-cake.jpg", category: "birthday" },
  ];

  const filtered =
    activeCategory === "all"
      ? enrichedGallery
      : enrichedGallery.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-4 inline-flex"
          >
            {t.gallery.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-3"
          >
            {t.gallery.title}{" "}
            <span className="title-gradient">{t.gallery.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto"
          >
            {t.gallery.subtitle}
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-amber-500 text-black shadow-lg"
                  : "bg-white/5 text-white/60 border border-white/10 hover:border-amber-400/30 hover:text-amber-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative break-inside-avoid mb-3 sm:mb-4 group cursor-pointer rounded-xl overflow-hidden"
                onClick={() => setLightboxImg(img.src)}
              >
                <div className={`relative ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`}>
                  <Image
                    src={img.src}
                    alt={`Golden Cake Shop creation ${img.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn
                      size={28}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
            id="gallery-instagram-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          {t.gallery.viewOnInstagram}
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[80vh]">
                <Image
                  src={lightboxImg}
                  alt="Gallery image"
                  width={800}
                  height={800}
                  className="object-contain w-full h-full rounded-2xl"
                />
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
