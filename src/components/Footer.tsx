"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Cake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { flavors } from "@/content/content";

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = ["home", "about", "services", "gallery", "pricing", "testimonials", "faq", "contact"];

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5">
      {/* Gradient Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0a0602, transparent)" }} />

      <div className="container-custom relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                <Cake size={20} className="text-black" />
              </div>
              <div>
                <div className="font-black text-xl text-amber-400" style={{ fontFamily: "var(--font-heading)" }}>
                  Golden Cake Shop
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">{t.footer.description}</p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 hover:bg-amber-400/10 hover:border-amber-400/30 text-white/60 hover:text-amber-400 transition-all"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 hover:bg-green-400/10 hover:border-green-400/30 text-white/60 hover:text-green-400 transition-all"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 5).map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-white/50 hover:text-amber-400 text-sm transition-colors capitalize"
                  >
                    {t.nav[link as keyof typeof t.nav] ?? link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{t.footer.services}</h4>
            <ul className="space-y-2">
              {[
                t.services.wedding.title,
                t.services.birthday.title,
                t.services.anniversary.title,
                t.services.fondant.title,
                t.services.cupcakes.title,
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-white/50 hover:text-amber-400 text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm text-white/50 hover:text-amber-400 transition-colors">
                  <Phone size={14} className="text-amber-400" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="text-sm text-white/40">
                <span className="text-amber-400/60">Mon–Sun:</span> {siteConfig.hours.weekdays}
              </li>
            </ul>

            {/* Flavors Preview */}
            <div className="mt-4">
              <div className="text-xs text-white/30 mb-2">Available Flavors:</div>
              <div className="flex flex-wrap gap-1">
                {flavors.slice(0, 6).map((f) => (
                  <span key={f} className="text-xs px-2 py-0.5 rounded-full bg-amber-400/8 text-amber-400/60 border border-amber-400/10">
                    {f}
                  </span>
                ))}
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/30">
                  +{flavors.length - 6} more
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <div>© {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}</div>
          <div className="text-center">{t.footer.madeWith}</div>
          <div className="flex gap-4">
            <button className="hover:text-amber-400 transition-colors">{t.footer.policy}</button>
            <button className="hover:text-amber-400 transition-colors">{t.footer.terms}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
