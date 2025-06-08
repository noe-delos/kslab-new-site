/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  User,
  Building,
  MessageSquare,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import i18n from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <>
      <Header />
      <section className="relative flex items-center justify-center px-4 pt-0 pb-0">
        <motion.div
          className="relative w-full max-w-[80%] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Contact Container */}
          <div
            className="relative rounded-b-[3rem] border-l-4 border-r-4 border-b-4 border-white overflow-hidden"
            style={{
              backgroundImage: "url(/background.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
            }}
          >
            {/* Light overlay for text readability */}
            <div className="absolute inset-0 bg-white/20" />

            {/* Stars image - absolute positioned at top */}
            <div className="absolute inset-0 top-16 left-0 z-50 w-full h-[8rem]">
              <img
                src="/stars.png"
                alt="Stars"
                className="w-full h-full object-cover opacity-100"
              />
            </div>

            {/* Content */}
            <div className="relative z-40 px-8 py-32 mt-[4rem]">
              {/* Header Section */}
              <div className="text-center mb-16">
                <motion.div
                  className="inline-block mb-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="relative px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9E96CE] via-[#663c9c] to-purple-400 p-[1.5px]">
                      <div className="bg-white rounded-full h-full w-full"></div>
                    </div>
                    <span className="relative bg-gradient-to-r font-medium from-[#9E96CE] via-[#663c9c] to-purple-400 bg-clip-text text-transparent">
                      {t("contact.label")}
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-medium text-gray-900 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {i18n.language === "fr" ? (
                    <>
                      Discutons de votre{" "}
                      <span className="bg-gradient-to-b from-[#a689ca] via-[#9e72d4] to-[#5128a7] bg-clip-text text-transparent">
                        projet.
                      </span>
                    </>
                  ) : (
                    <>
                      Let's discuss your{" "}
                      <span className="bg-gradient-to-b from-[#a689ca] via-[#9e72d4] to-[#5128a7] bg-clip-text text-transparent">
                        project
                      </span>
                    </>
                  )}
                </motion.h1>

                <motion.p
                  className="text-base md:text-lg text-zinc-500 mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {t("contact.description")}
                </motion.p>
              </div>

              {/* Contact Form */}
              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          <User size={16} className="inline mr-2" />
                          {t("contact.form.firstName")}
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder={t("contact.form.firstNamePlaceholder")}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          <User size={16} className="inline mr-2" />
                          {t("contact.form.lastName")}
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder={t("contact.form.lastNamePlaceholder")}
                          required
                        />
                      </div>
                    </div>

                    {/* Email and Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          <Mail size={16} className="inline mr-2" />
                          {t("contact.form.email")}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder={t("contact.form.emailPlaceholder")}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          <Building size={16} className="inline mr-2" />
                          {t("contact.form.company")}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder={t("contact.form.companyPlaceholder")}
                        />
                      </div>
                    </div>

                    {/* Phone and Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          <Phone size={16} className="inline mr-2" />
                          {t("contact.form.phone")}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          placeholder={t("contact.form.phonePlaceholder")}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          <MessageSquare size={16} className="inline mr-2" />
                          {t("contact.form.subject")}
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                          required
                        >
                          <option value="">
                            {t("contact.form.selectSubject")}
                          </option>
                          <option value="ai-consultation">
                            {t("contact.form.subjects.aiConsultation")}
                          </option>
                          <option value="custom-development">
                            {t("contact.form.subjects.customDevelopment")}
                          </option>
                          <option value="partnership">
                            {t("contact.form.subjects.partnership")}
                          </option>
                          <option value="other">
                            {t("contact.form.subjects.other")}
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        <MessageSquare size={16} className="inline mr-2" />
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder={t("contact.form.messagePlaceholder")}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-foreground text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground/90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                      >
                        <Send size={16} />
                        {t("contact.form.submit")}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
