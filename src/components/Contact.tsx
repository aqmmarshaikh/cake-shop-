"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { flavors } from "@/content/content";

interface FormData {
  name: string;
  phone: string;
  email: string;
  occasion: string;
  date: string;
  guests: string;
  flavor: string;
  message: string;
}

/* ── Shared contact info card ── */
function ContactCard({
  href,
  icon,
  title,
  subtitle,
  accentColor = "amber",
  id,
}: {
  href?: string;
  icon: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
  accentColor?: "amber" | "green" | "neutral";
  id?: string;
}) {
  const borderColor = accentColor === "green"
    ? "rgba(37,211,102,0.18)"
    : accentColor === "amber"
    ? "rgba(245,158,11,0.15)"
    : "rgba(255,255,255,0.07)";

  const bgBase = accentColor === "green"
    ? "rgba(37,211,102,0.04)"
    : accentColor === "amber"
    ? "rgba(245,158,11,0.04)"
    : "rgba(255,255,255,0.02)";

  const bgHover = accentColor === "green"
    ? "rgba(37,211,102,0.09)"
    : accentColor === "amber"
    ? "rgba(245,158,11,0.08)"
    : "rgba(255,255,255,0.05)";

  const iconBg = accentColor === "green"
    ? "linear-gradient(135deg, #25d366, #128c7e)"
    : accentColor === "amber"
    ? "rgba(245,158,11,0.18)"
    : "rgba(255,255,255,0.06)";

  const cardStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "var(--space-4)",
    padding: "var(--space-5)",
    borderRadius: "var(--radius-md)",
    border: `1px solid ${borderColor}`,
    background: bgBase,
    transition: "background var(--ease-base), border-color var(--ease-base)",
    textDecoration: "none",
    cursor: href ? "pointer" : "default",
  };

  const inner = (
    <>
      <div style={{
        width: "46px",
        height: "46px",
        borderRadius: "var(--radius-sm)",
        background: iconBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontWeight: 600,
          fontSize: "var(--text-base)",
          color: "var(--color-text)",
          marginBottom: "var(--space-1)",
          lineHeight: 1.3,
        }}>
          {title}
        </div>
        <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
          {subtitle}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={cardStyle}
        id={id}
        onMouseEnter={(e) => { e.currentTarget.style.background = bgHover; e.currentTarget.style.borderColor = borderColor.replace(/[\d.]+\)$/, "0.35)"); }}
        onMouseLeave={(e) => { e.currentTarget.style.background = bgBase; e.currentTarget.style.borderColor = borderColor; }}
      >
        {inner}
      </a>
    );
  }

  return <div style={cardStyle} id={id}>{inner}</div>;
}

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", occasion: "",
    date: "", guests: "", flavor: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = t.contact.form.required;
    if (!form.phone.trim()) e.phone = t.contact.form.required;
    if (!form.occasion) e.occasion = t.contact.form.required;
    if (!form.date) e.date = t.contact.form.required;
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    const msg = encodeURIComponent(
      `Hello Golden Cake Shop! 🎂\n\nNew Booking Request:\nName: ${form.name}\nPhone: ${form.phone}\nOccasion: ${form.occasion}\nDate: ${form.date}\nGuests: ${form.guests || "Not specified"}\nFlavor: ${form.flavor || "Not specified"}\nMessage: ${form.message || "No message"}`
    );
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${msg}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const occasions = [
    { value: "birthday",    label: t.contact.form.occasions.birthday },
    { value: "wedding",     label: t.contact.form.occasions.wedding },
    { value: "anniversary", label: t.contact.form.occasions.anniversary },
    { value: "corporate",   label: t.contact.form.occasions.corporate },
    { value: "baby",        label: t.contact.form.occasions.baby },
    { value: "engagement",  label: t.contact.form.occasions.engagement },
    { value: "other",       label: t.contact.form.occasions.other },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      {/* Background glows */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", right: "-5%", top: "5%", width: "clamp(200px, 35vw, 440px)", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.05), transparent 70%)" }} />
        <div style={{ position: "absolute", left: "-5%", bottom: "0%", width: "clamp(150px, 25vw, 320px)", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,83,9,0.05), transparent 70%)" }} />
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
            {t.contact.badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
            style={{ marginBottom: "var(--space-4)" }}
          >
            {t.contact.title}{" "}
            <span className="title-gradient">{t.contact.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
            style={{ margin: "0 auto" }}
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        {/* ── Two-column layout ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          gap: "var(--space-8)",
          maxWidth: "980px",
          margin: "0 auto",
        }} className="contact-grid">

          {/* ── Info Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
          >
            {/* WhatsApp */}
            <ContactCard
              href={siteConfig.links.whatsapp}
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              }
              title={t.contact.whatsapp}
              subtitle={siteConfig.phone}
              accentColor="green"
              id="contact-whatsapp-btn"
            />

            {/* Phone */}
            <ContactCard
              href={`tel:${siteConfig.phone}`}
              icon={<Phone size={20} color="#fbbf24" />}
              title={t.contact.call}
              subtitle={siteConfig.phone}
              accentColor="amber"
              id="contact-phone-btn"
            />

            {/* Address */}
            <ContactCard
              href={siteConfig.mapUrl}
              icon={<MapPin size={20} color="#fbbf24" />}
              title={t.contact.address}
              subtitle={siteConfig.address}
              accentColor="neutral"
              id="contact-map-btn"
            />

            {/* Hours */}
            <ContactCard
              icon={<Clock size={20} color="#fbbf24" />}
              title={t.contact.hours}
              subtitle={
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)" }}>
                    <span>{t.contact.weekdays}:</span>
                    <span style={{ color: "var(--color-text)" }}>{siteConfig.hours.weekdays}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)", marginTop: "var(--space-1)" }}>
                    <span>{t.contact.weekends}:</span>
                    <span style={{ color: "var(--color-text)" }}>{siteConfig.hours.weekends}</span>
                  </div>
                  <div style={{ color: "rgba(245,158,11,0.55)", fontSize: "var(--text-xs)", marginTop: "var(--space-2)" }}>
                    {siteConfig.hours.note}
                  </div>
                </div>
              }
              accentColor="neutral"
            />
          </motion.div>

          {/* ── Booking Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === "success" ? (
              <div
                className="glass-card"
                style={{
                  padding: "var(--space-12)",
                  borderRadius: "var(--radius-xl)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "420px",
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 15 }}
                >
                  <CheckCircle size={60} color="#4ade80" style={{ margin: "0 auto var(--space-6)" }} />
                </motion.div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", fontWeight: 800, color: "var(--color-text)", marginBottom: "var(--space-3)" }}>
                  {t.contact.form.success}
                </h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-base)", marginBottom: "var(--space-8)" }}>
                  WhatsApp will open with your booking details.
                </p>
                <button onClick={() => setStatus("idle")} className="btn-outline">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card"
                style={{
                  padding: "clamp(1.5rem, 4vw, 2.25rem)",
                  borderRadius: "var(--radius-xl)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-5)",
                }}
                id="booking-form"
                noValidate
              >
                {/* Row 1: Name + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }} className="form-row">
                  <div>
                    <label className="input-label">{t.contact.form.name} *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your full name"
                      id="form-name"
                    />
                    {errors.name && <p style={{ color: "#f87171", fontSize: "var(--text-xs)", marginTop: "var(--space-1)" }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className="input-label">{t.contact.form.phone} *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+91 00000 00000"
                      id="form-phone"
                    />
                    {errors.phone && <p style={{ color: "#f87171", fontSize: "var(--text-xs)", marginTop: "var(--space-1)" }}>{errors.phone}</p>}
                  </div>
                </div>

                {/* Row 2: Email + Occasion */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }} className="form-row">
                  <div>
                    <label className="input-label">{t.contact.form.email}</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="email@example.com"
                      id="form-email"
                    />
                  </div>
                  <div>
                    <label className="input-label">{t.contact.form.occasion} *</label>
                    <select
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                      className="input-field"
                      id="form-occasion"
                    >
                      <option value="">Select occasion...</option>
                      {occasions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    {errors.occasion && <p style={{ color: "#f87171", fontSize: "var(--text-xs)", marginTop: "var(--space-1)" }}>{errors.occasion}</p>}
                  </div>
                </div>

                {/* Row 3: Date + Guests */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }} className="form-row">
                  <div>
                    <label className="input-label">{t.contact.form.date} *</label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      className="input-field"
                      min={new Date().toISOString().split("T")[0]}
                      id="form-date"
                    />
                    {errors.date && <p style={{ color: "#f87171", fontSize: "var(--text-xs)", marginTop: "var(--space-1)" }}>{errors.date}</p>}
                  </div>
                  <div>
                    <label className="input-label">{t.contact.form.guests}</label>
                    <input
                      name="guests"
                      type="number"
                      value={form.guests}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="e.g. 50"
                      id="form-guests"
                    />
                  </div>
                </div>

                {/* Flavor */}
                <div>
                  <label className="input-label">{t.contact.form.flavors}</label>
                  <select name="flavor" value={form.flavor} onChange={handleChange} className="input-field" id="form-flavor">
                    <option value="">Select flavor...</option>
                    {flavors.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="input-label">{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="input-field"
                    style={{ resize: "none" }}
                    rows={3}
                    placeholder="Describe your dream cake design, colors, theme..."
                    id="form-message"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold"
                  style={{ width: "100%", justifyContent: "center", padding: "1rem" }}
                  disabled={status === "submitting"}
                  id="form-submit-btn"
                >
                  {status === "submitting" ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                      <svg className="animate-spin" style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" fill="none">
                        <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      {t.contact.form.submitting}
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      {t.contact.form.submit}
                    </>
                  )}
                </button>

                <p style={{
                  textAlign: "center",
                  color: "rgba(255,255,255,0.25)",
                  fontSize: "var(--text-xs)",
                  lineHeight: 1.5,
                }}>
                  Booking request opens WhatsApp automatically ✓
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 0.8s linear infinite; }
      `}</style>
    </section>
  );
}
