"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/content/content";
import { siteConfig } from "@/config/site";

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
    "wedding-cakes": "/images/wedding-cake.jpg",
    "birthday-cakes": "/images/birthday-cake.jpg",
    "anniversary-cakes": "/images/anniversary-cake.jpg",
    "corporate-cakes": "/images/corporate-cake.jpg",
    "fondant-cakes": "/images/fondant-cake.jpg",
    "cupcakes": "/images/cupcakes.jpg",
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mb-4 inline-flex"
          >
            {t.services.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-3"
          >
            {t.services.title}{" "}
            <span className="title-gradient">{t.services.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card group relative overflow-hidden cursor-pointer"
              id={`service-${service.id}`}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={serviceImages[service.id] || "/images/gallery-1.jpg"}
                  alt={getTitle(service.titleKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f07] via-black/20 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-sm flex items-center justify-center text-xl border border-white/10">
                  {service.icon}
                </div>

                {/* Price */}
                <div className="absolute top-4 right-4 glass-card px-3 py-1.5 text-xs">
                  <span className="text-white/50">{t.services.startingFrom}</span>
                  <span className="text-amber-400 font-bold ml-1">
                    {siteConfig.currency}{service.startingPrice}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {getTitle(service.titleKey)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {getDesc(service.descriptionKey)}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2 py-1 rounded-md text-amber-400/80 bg-amber-400/8 border border-amber-400/15"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="btn-gold w-full text-sm py-2.5"
                  id={`book-${service.id}`}
                >
                  {t.services.bookThisCake}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
