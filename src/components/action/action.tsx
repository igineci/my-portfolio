"use client";

import { useState } from "react";
import styles from "./action.module.css";
import { useTranslation } from "react-i18next";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";

export default function CallToAction() {
  const { t } = useTranslation();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isMailError, setIsMailError] = useState(false);

  const handleClick = () => {
    setShowForm((prev) => !prev);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);
    setIsMailError(false);
    try {
      const send = emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          // Keep original keys to satisfy template if needed
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Outlook-safe Reply-To pattern
          from_name: formData.name,
          reply_to: formData.email,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      // Enforce a timeout so the UI doesn't hang forever
      const timeoutMs = Number(import.meta.env.VITE_EMAIL_TIMEOUT_MS) || 12000;
      const res = await Promise.race([
        send,
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("email-timeout")), timeoutMs)
        ),
      ]);
      if (import.meta.env.MODE !== "production") {
        console.log("EmailJS send result:", res.status, res.text);
      }
      setFormData({ name: "", email: "", message: "" });
      setIsSent(true);
      // Auto-hide success after a short delay
      setTimeout(() => setIsSent(false), 4000);
    } catch (err) {
      console.error("Email send failed", err);
      setIsMailError(true);
      // Auto-hide error after a short delay
      setTimeout(() => setIsMailError(false), 5000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className={styles.cta}>
      <button
        className={styles.ctaLink}
        onClick={handleClick}
        aria-expanded={showForm}
        aria-controls="inline-contact"
      >
        {t("moreButton", showForm ? "Close" : "Contact me")}
      </button>

      {showForm && (
        <form
          id="inline-contact"
          className={`${styles.form} animate-slideDown`}
          onSubmit={handleSubmit}
        >
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("name", "Your name")}
            className="bg-[#f2f0ea] border-[#131313] text-[#131313] rounded-none"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("email", "Email address")}
            className="bg-[#f2f0ea] border-[#131313] text-[#131313] rounded-none"
            required
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("message", "Your message")}
            className="bg-[#f2f0ea] border-[#131313] text-[#131313] rounded-none"
            required
          />
          <Button
            type="submit"
            disabled={isSending}
            className="bg-[#131313] text-[#f2f0ea] rounded-none px-6 py-2 text-lg"
          >
            {isSending ? t("sending", "Sending...") : t("send", "Send")}
          </Button>
          {isSent && (
            <p className={styles.success}>
              {t("sentMsg", "Thanks! I'll be in touch soon.")}
            </p>
          )}
          {isMailError && (
            <p className={styles.error}>
              {t(
                "sendError",
                "Oops, something went wrong. Please try again later."
              )}
            </p>
          )}
        </form>
      )}
    </section>
  );
}
