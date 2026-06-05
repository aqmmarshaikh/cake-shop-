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

    // Simulate form submission + redirect to WhatsApp
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");

    // Open WhatsApp with pre-filled message
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
    { value: "birthday", label: t.contact.form.occasions.birthday },
    { value: "wedding", label: t.contact.form.occasions.wedding },
    { value: "anniversary", label: t.contact.form.occasions.anniversary },
    { value: "corporate", label: t.contact.form.occasions.corporate },
    { value: "baby", label: t.contact.form.occasions.baby },
    { value: "engagement", label: t.contact.form.occasions.engagement },
    { value: "other", label: t.contact.form.occasions.other },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }} />
        <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #d97706, transparent)" }} />
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
            {t.contact.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-3"
          >
            {t.contact.title}{" "}
            <span className="title-gradient">{t.contact.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* WhatsApp */}
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="flex items-center gap-4 p-5 rounded-2xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold group-hover:text-green-400 transition-colors">
                  {t.contact.whatsapp}
                </div>
                <div className="text-white/50 text-sm">{siteConfig.phone}</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${siteConfig.phone}`}
              id="contact-phone-btn"
              className="flex items-center gap-4 p-5 rounded-2xl border border-amber-400/15 bg-amber-400/5 hover:bg-amber-400/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-amber-400" />
              </div>
              <div>
                <div className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                  {t.contact.call}
                </div>
                <div className="text-white/50 text-sm">{siteConfig.phone}</div>
              </div>
            </a>

            {/* Address */}
            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-map-btn"
              className="flex items-start gap-4 p-5 rounded-2xl border border-white/8 bg-white/2 hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-amber-400" />
              </div>
              <div>
                <div className="text-white font-semibold group-hover:text-amber-400 transition-colors mb-1">
                  {t.contact.address}
                </div>
                <div className="text-white/50 text-sm leading-relaxed">{siteConfig.address}</div>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-white/8 bg-white/2">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-amber-400" />
              </div>
              <div>
                <div className="text-white font-semibold mb-2">{t.contact.hours}</div>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between gap-4">
                    <span className="text-white/50">{t.contact.weekdays}:</span>
                    <span className="text-white/80">{siteConfig.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-white/50">{t.contact.weekends}:</span>
                    <span className="text-white/80">{siteConfig.hours.weekends}</span>
                  </div>
                  <div className="text-amber-400/60 text-xs mt-1">{siteConfig.hours.note}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="glass-card p-10 rounded-3xl text-center h-full flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle size={60} className="text-green-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.contact.form.success}</h3>
                <p className="text-white/60">WhatsApp will open with your booking details.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-6"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card p-6 sm:p-8 rounded-3xl space-y-4"
                id="booking-form"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs text-white/60 font-medium mb-1.5 block">{t.contact.form.name} *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your full name"
                      id="form-name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs text-white/60 font-medium mb-1.5 block">{t.contact.form.phone} *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+91 00000 00000"
                      id="form-phone"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs text-white/60 font-medium mb-1.5 block">{t.contact.form.email}</label>
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

                  {/* Occasion */}
                  <div>
                    <label className="text-xs text-white/60 font-medium mb-1.5 block">{t.contact.form.occasion} *</label>
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
                    {errors.occasion && <p className="text-red-400 text-xs mt-1">{errors.occasion}</p>}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="text-xs text-white/60 font-medium mb-1.5 block">{t.contact.form.date} *</label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      className="input-field"
                      min={new Date().toISOString().split("T")[0]}
                      id="form-date"
                    />
                    {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="text-xs text-white/60 font-medium mb-1.5 block">{t.contact.form.guests}</label>
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
                  <label className="text-xs text-white/60 font-medium mb-1.5 block">{t.contact.form.flavors}</label>
                  <select name="flavor" value={form.flavor} onChange={handleChange} className="input-field" id="form-flavor">
                    <option value="">Select flavor...</option>
                    {flavors.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs text-white/60 font-medium mb-1.5 block">{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="input-field resize-none"
                    rows={3}
                    placeholder="Describe your dream cake design, colors, theme..."
                    id="form-message"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 text-base"
                  disabled={status === "submitting"}
                  id="form-submit-btn"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      {t.contact.form.submitting}
                    </span>
                  ) : (
                    <>
                      <Send size={18} />
                      {t.contact.form.submit}
                    </>
                  )}
                </button>

                <p className="text-center text-white/30 text-xs">
                  Booking request opens WhatsApp automatically ✓
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
