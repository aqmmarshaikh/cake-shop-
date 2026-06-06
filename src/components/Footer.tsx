"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Cake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { flavors } from "@/content/content";

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const quickLinks = ["home", "about", "services", "gallery", "pricing", "testimonials", "faq", "contact"];

  return (
    <footer style={{ position: "relative", paddingTop: "clamp(3rem, 8vw, 5rem)", paddingBottom: "var(--space-8)" }}>
      {/* Top gradient line */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.25) 50%, transparent 100%)",
      }} />

      {/* Fading background */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: "linear-gradient(to top, rgba(8,5,2,0.9), transparent)",
      }} />

      <div className="container-custom" style={{ position: "relative" }}>

        {/* ── Main Footer Grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(2rem, 5vw, 3.5rem)",
          marginBottom: "clamp(2.5rem, 5vw, 4rem)",
        }} className="footer-grid">

          {/* ── Brand Column ── */}
          <div className="footer-brand">
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-5)" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "var(--radius-sm)",
                background: "linear-gradient(135deg, #fbbf24, #d97706)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 14px rgba(245,158,11,0.3)",
                flexShrink: 0,
              }}>
                <Cake size={19} color="#0c0804" />
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                  fontSize: "var(--text-xl)",
                  color: "#fbbf24",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}>
                  Golden Cake Shop
                </div>
              </div>
            </div>

            <p style={{
              color: "var(--color-text-subtle)",
              fontSize: "var(--text-sm)",
              lineHeight: 1.7,
              marginBottom: "var(--space-5)",
              maxWidth: "30ch",
            }}>
              {t.footer.description}
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px", height: "36px",
                  borderRadius: "var(--radius-sm)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.5)",
                  transition: "all var(--ease-base)",
                }}
                aria-label="Instagram"
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(245,158,11,0.12)"; e.currentTarget.style.borderColor = "rgba(245,158,11,0.28)"; e.currentTarget.style.color = "#fbbf24"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px", height: "36px",
                  borderRadius: "var(--radius-sm)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.5)",
                  transition: "all var(--ease-base)",
                }}
                aria-label="WhatsApp"
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(37,211,102,0.12)"; e.currentTarget.style.borderColor = "rgba(37,211,102,0.28)"; e.currentTarget.style.color = "#4ade80"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 style={{
              fontWeight: 700,
              fontSize: "var(--text-xs)",
              color: "var(--color-text)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "var(--space-5)",
            }}>
              {t.footer.quickLinks}
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {quickLinks.slice(0, 5).map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    style={{
                      color: "var(--color-text-subtle)",
                      fontSize: "var(--text-sm)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      transition: "color var(--ease-base)",
                      textTransform: "capitalize",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-subtle)")}
                  >
                    {t.nav[link as keyof typeof t.nav] ?? link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 style={{
              fontWeight: 700,
              fontSize: "var(--text-xs)",
              color: "var(--color-text)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "var(--space-5)",
            }}>
              {t.footer.services}
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
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
                    style={{
                      color: "var(--color-text-subtle)",
                      fontSize: "var(--text-sm)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      transition: "color var(--ease-base)",
                      lineHeight: 1.4,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-subtle)")}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h4 style={{
              fontWeight: 700,
              fontSize: "var(--text-xs)",
              color: "var(--color-text)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "var(--space-5)",
            }}>
              {t.footer.contact}
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-2)" }}>
                <MapPin size={13} color="#f59e0b" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "var(--color-text-subtle)", fontSize: "var(--text-sm)", lineHeight: 1.5 }}>
                  {siteConfig.address}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    color: "var(--color-text-subtle)",
                    fontSize: "var(--text-sm)",
                    textDecoration: "none",
                    transition: "color var(--ease-base)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-subtle)")}
                >
                  <Phone size={13} color="#f59e0b" />
                  {siteConfig.phone}
                </a>
              </li>
              <li style={{ color: "var(--color-text-subtle)", fontSize: "var(--text-sm)", lineHeight: 1.5 }}>
                <span style={{ color: "rgba(245,158,11,0.55)" }}>Mon–Sun: </span>
                {siteConfig.hours.weekdays}
              </li>
            </ul>

            {/* Flavors preview */}
            <div style={{ marginTop: "var(--space-5)" }}>
              <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.25)", marginBottom: "var(--space-2)" }}>
                Available Flavors:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-1)" }}>
                {flavors.slice(0, 5).map((f) => (
                  <span key={f} style={{
                    fontSize: "0.65rem",
                    padding: "2px 8px",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(245,158,11,0.07)",
                    color: "rgba(245,158,11,0.5)",
                    border: "1px solid rgba(245,158,11,0.12)",
                    whiteSpace: "nowrap",
                  }}>
                    {f}
                  </span>
                ))}
                <span style={{
                  fontSize: "0.65rem",
                  padding: "2px 8px",
                  borderRadius: "var(--radius-full)",
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.25)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  +{flavors.length - 5} more
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div style={{
          paddingTop: "var(--space-6)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-4)",
        }} className="footer-bottom">
          <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
          </div>
          <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.22)", textAlign: "center" }}>
            {t.footer.madeWith}
          </div>
          <div style={{ display: "flex", gap: "var(--space-5)" }}>
            {[t.footer.policy, t.footer.terms].map((label) => (
              <button
                key={label}
                style={{
                  fontSize: "var(--text-xs)",
                  color: "rgba(255,255,255,0.25)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "color var(--ease-base)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem 1.5rem !important;
          }
          .footer-brand { grid-column: span 2; }
          .footer-bottom { flex-direction: column !important; text-align: center; }
        }
        @media (max-width: 479px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-brand { grid-column: span 1; }
        }
      `}</style>
    </footer>
  );
}
