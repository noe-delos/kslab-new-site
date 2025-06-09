/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const scheduleCall = () => {
    window.open(
      "https://calendly.com/louis-ks-entreprise/30min?month=2025-06",
      "_blank"
    );
  };

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 space-y-8 z-50">
      <div className="max-w-5xl mx-auto space-y-8 z-50">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-80 rounded-3xl overflow-hidden"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/4xHlfkOzG361DrYryDJjnA7Ps.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Layer 2 - Middle decoration */}
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage:
                "url('https://framerusercontent.com/images/hLnOox6o62yWNLTKgSs9dfVs14.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Layer 3 - White stars */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "url('https://framerusercontent.com/images/MavvBp2LP0WKY26eWfS2BImo.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Floating Rectangles with scroll animations */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={
              isInView ? { opacity: 1, rotate: 12 } : { opacity: 0, rotate: 0 }
            }
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute -left-4 top-1/4 w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={
              isInView ? { opacity: 1, rotate: -15 } : { opacity: 0, rotate: 0 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -right-4 top-1/3 w-6 h-6 bg-white/20 rounded-md backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={
              isInView ? { opacity: 1, rotate: 20 } : { opacity: 0, rotate: 0 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-8 bottom-8 w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={
              isInView ? { opacity: 1, rotate: -10 } : { opacity: 0, rotate: 0 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-8 bottom-12 w-7 h-7 bg-white/20 rounded-lg backdrop-blur-sm"
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center text-white px-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-8 max-w-3xl mx-auto leading-tight">
                {t("cta.title")}
              </h2>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
                onClick={scheduleCall}
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                {t("cta.button")}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Content - Two separate containers */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Left Section - Company Info (30% width) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-2xl border border-border p-6 relative -z-10"
          >
            <div className="flex items-start space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="KS Agency"
                className="w-10 h-10 object-contain"
              />
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              {t("footer.company.description")}
            </p>
          </motion.div>

          {/* Right Section - Links & Contact (70% width) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 bg-white rounded-2xl border border-border p-6 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Navigation Column */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Navigation</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/ks-gpt"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      KS-GPT
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Other Column */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  {t("footer.other.title")}
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {t("footer.other.contact")}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  {t("footer.contact.title")}
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Phone className="w-3 h-3 text-gray-500" />
                    <span className="text-gray-600 text-xs">
                      {t("footer.contact.phone")}
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <MapPin className="w-3 h-3 text-gray-500 mt-0.5" />
                    <span className="text-gray-600 text-xs">
                      {t("footer.contact.address")}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mail className="w-3 h-3 text-gray-500" />
                    <span className="text-gray-600 text-xs">
                      {t("footer.contact.email")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
              <p className="text-xs text-gray-500">{t("footer.copyright")}</p>
              <a
                href="https://www.linkedin.com/company/ks-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <span className="text-xs text-gray-500">in</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
