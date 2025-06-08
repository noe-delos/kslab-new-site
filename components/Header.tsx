/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import i18n from "@/lib/i18n";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAtTop = scrollY === 0;
  const isScrolling = scrollY > 0 && scrollY < 100;
  const isScrolled = scrollY >= 100;

  const getHeaderWidth = () => {
    if (isAtTop) return "w-full max-w-[75%]";
    if (isScrolling) return "w-[55%] max-w-4xl";
    return "w-[55%] max-w-4xl";
  };

  const getHeaderHeight = () => {
    if (isAtTop) return "h-20";
    if (isScrolling) return "h-16";
    return "h-14";
  };

  const getHeaderRounding = () => {
    if (isAtTop) return "rounded-2xl";
    if (isScrolling) return "rounded-2xl";
    return "rounded-full";
  };

  const switchLocale = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
    setIsLanguageDropdownOpen(false);
  };

  const scheduleCall = () => {
    window.open(
      "https://calendly.com/louis-ks-entreprise/30min?month=2025-06",
      "_blank"
    );
  };

  const navigateToKsGpt = () => {
    router.push("/ks-gpt");
    setIsMobileMenuOpen(false);
  };

  const navigateToContact = () => {
    router.push("/contact");
    setIsMobileMenuOpen(false);
  };

  const navigateToHome = () => {
    router.push("/");
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md shadow-xs border border-foreground/10 transition-all duration-500 ${getHeaderWidth()} ${getHeaderHeight()} ${getHeaderRounding()}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center h-full px-6">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="KS Logo"
              className="w-fit object-contain h-[1.2rem] cursor-pointer"
              onClick={navigateToHome}
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8 ml-[7.5rem]">
            <div className="flex items-center space-x-8">
              <button
                onClick={navigateToKsGpt}
                className="text-zinc-600 hover:text-gray-900 transition-colors text-sm font-normal cursor-pointer"
              >
                {t("navigation.ksGpt")}
              </button>
              <button
                onClick={navigateToContact}
                className="text-zinc-600 hover:text-gray-900 transition-colors text-sm font-normal cursor-pointer"
              >
                {t("navigation.contact")}
              </button>
            </div>
          </nav>

          {/* Right side - Language & CTA */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Globe size={18} />
                <span className="uppercase">{i18n.language}</span>
              </button>

              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[80px]"
                  >
                    <button
                      onClick={() => switchLocale("fr")}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        i18n.language === "fr"
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => switchLocale("en")}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        i18n.language === "en"
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      EN
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={scheduleCall}
              className="bg-white text-gray-700 shadow-xs border border-foreground/10 cursor-pointer px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-300 text-sm font-medium"
            >
              {t("navigation.scheduleCall")}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 w-[90%] max-w-sm md:hidden"
          >
            <div className="p-6 space-y-4">
              <button
                onClick={navigateToKsGpt}
                className="block w-full text-left text-gray-700 hover:text-gray-900 py-2 transition-colors cursor-pointer"
              >
                {t("navigation.ksGpt")}
              </button>
              <button
                onClick={navigateToContact}
                className="block w-full text-left text-gray-700 hover:text-gray-900 py-2 transition-colors cursor-pointer"
              >
                {t("navigation.contact")}
              </button>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Language</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => switchLocale("fr")}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        i18n.language === "fr"
                          ? "bg-blue-100 text-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      FR
                    </button>
                    <button
                      onClick={() => switchLocale("en")}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        i18n.language === "en"
                          ? "bg-blue-100 text-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                <button
                  onClick={scheduleCall}
                  className="w-full bg-white text-gray-700 border border-border py-3 rounded-full hover:bg-gray-50 transition-all duration-300"
                >
                  {t("navigation.scheduleCall")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
