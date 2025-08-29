"use client";
import { useState } from "react";
import type React from "react";

import { GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import emailjs from "@emailjs/browser";

import { AiOutlineSend } from "react-icons/ai";
import { useTranslation } from "react-i18next";

interface InteractiveContactProps {
  name?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  githubUrl?: string;
  profileImage?: string;
}

export default function InteractiveContact({
  name = "Andjela Djekic",
  linkedinUrl = "https://www.linkedin.com/in/andjeladjekic1111/",
  instagramUrl = "https://www.instagram.com/iginecci/",
  githubUrl = "https://github.com/igineci",
  profileImage = "images/social.jpeg",
}: InteractiveContactProps) {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isMailSuccess, setIsMailSuccess] = useState(false);
  const [isMailError, setIsMailError] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setIsMailError(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });

      setTimeout(() => setIsMailSuccess(false), 3000);
    } catch (error) {
      console.error("Email send failed:", error);
      setIsMailError(true);
      setTimeout(() => setIsMailError(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-18  from-background via-card to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-7xl text-[#131313] bg-clip-text mb-4">
            {t("socialsTitle", "Let's connect")}
          </h2>
          <div className="border-b border-[#131313] mt-7 mb-24"> </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 min-h-[600px]">
          <div className="xl:col-span-2 bg-[#dddbd4]  flex flex-col items-center justify-center p-8 lg:p-12 space-y-8 backdrop-blur-sm  border border-[#dddbd4] shadow-xl">
            <div className="relative group mb-20">
              <div className="absolute -inset-8 border-2 border-[#f2f0ea]/30 group-hover:border-[#f2f0ea]/60 transition-all duration-500 group-hover:scale-110 "></div>
              <div className="absolute -inset-6  border border-[#f2f0ea]/20 group-hover:border-[#f2f0ea]/50 transition-all duration-700 group-hover:scale-105 "></div>

              {/* Glowing background effect */}
              <div className="absolute -inset-4  bg-gradient-to-r from-[#f2f0ea]/20 via-[#f2f0ea]/30 to-[#f2f0ea]/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
              {/* Main image with enhanced effects */}
              <img
                src={profileImage || "/placeholder.svg"}
                alt={name}
                className="relative w-48 h-48 lg:w-56 lg:h-56 object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#f2f0ea]/30 "
              />

              {/* Overlay with subtle color tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f2f0ea]/0 via-[#f2f0ea]/0 to-[#f2f0ea]/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Animated border */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#f2f0ea]/40 transition-all duration-300 group-hover:animate-pulse"></div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-[#131313] tracking-tight">
                {name}
              </h3>
              <p className="text-xl text-[#131313]/50 font-medium">
                {t("juniorSoftwareEngineer", "Junior Software Engineer")}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#f2f0ea] p-4 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <GrLinkedin className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300 z-10 relative" />
                <div className="absolute inset-0 bg-[#0077b5] transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#f2f0ea] p-4  flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <FaInstagramSquare className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300 z-10 relative" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#f2f0ea] p-4  flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <FaGithub className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300 z-10 relative" />
                <div className="absolute inset-0 bg-[#333] transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </a>
            </div>
          </div>

          <div className="xl:col-span-3 p-8 lg:p-12 border border-[#dbddd4] bg-[#dddbd4] shadow-xl">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-3xl lg:text-4xl font-black text-foreground">
                  {t("contactFormTitle", "Ready to start something amazing?")}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {t(
                    "contactFormSubtitle",
                    "Reach out. I’d love to collaborate."
                  )}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-[#131313] uppercase tracking-wider">
                      {t("nameTitle", "Your name")}
                    </label>
                    <Input
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="h-14 text-xl rounded-none border-0 shadow-none bg-[#f2f0ea] transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#131313] uppercase tracking-wider">
                      {t("emailTitle", "Email address")}
                    </label>
                    <Input
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="h-14 text-lg rounded-none border-0 shadow-none bg-[#f2f0ea] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#131313] uppercase tracking-wider">
                    {t("subjectTitle", "Subject")}
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t(
                      "subjectPlaceholder",
                      "Let's work together!"
                    )}
                    required
                    className="py-8 text-xl transition-all duration-300 shadow-none rounded-none border-0 bg-[#f2f0ea]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#131313] uppercase tracking-wider">
                    {t("messageTitle", "Your message")}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t(
                      "messagePlaceholder",
                      "Tell me about your ideas or just say hello!"
                    )}
                    required
                    rows={6}
                    className="text-lg transition-all duration-300 shadow-none rounded-none border-0 bg-[#f2f0ea] resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-16 text-xl bg-[#131313] rounded-none transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : isSuccess ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        </div>
                        Message Sent!
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <AiOutlineSend className="w-10 h-10" />
                        {t("messageButton", "Send Message")}
                      </div>
                    )}
                  </Button>
                </div>
              </form>

              {isMailSuccess && (
                <div className="text-center p-6 bg-[#f2f0ea] border border-[#dddbd4]/70 ">
                  <p className="text-[#131313] text-lg">
                    ✅ Thanks for reaching out! Your message was sent
                    successfully. I’ll get back to you as soon as possible.
                  </p>
                </div>
              )}

              {isMailError && (
                <div className="text-center p-6 bg-red-100 border border-red-300">
                  <p className="text-red-800 text-lg">
                    ❌ Oops, something went wrong. Your message couldn’t be
                    sent. Please try again a bit later.
                  </p>
                </div>
              )}

              {isSuccess && (
                <div className="text-center p-6 bg-primary/10 rounded-2xl border border-primary/20">
                  <p className="text-primary font-semibold text-lg">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
