/* eslint-disable @next/next/no-img-element, react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import i18n from "@/lib/i18n";
import StarBorder from "./StarBorder";

export default function HeroSection() {
  const [showDiagonals, setShowDiagonals] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiagonals(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scheduleCall = () => {
    window.open(
      "https://calendly.com/louis-ks-entreprise/30min?month=2025-06",
      "_blank"
    );
  };

  const navigateToKsGpt = () => {
    router.push("/ks-gpt");
  };

  return (
    <section className="relative flex items-center justify-center px-4 pt-0 pb-0">
      <motion.div
        className="relative w-full max-w-[95%] sm:max-w-[80%] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Main Hero Container */}
        <div
          className="relative rounded-b-[3rem] border-l-4 border-r-4 border-b-4 border-white overflow-hidden"
          style={{
            backgroundImage: "url(/background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "102vh",
          }}
        >
          {/* Light overlay for text readability while keeping background visible */}
          <div className="absolute inset-0 bg-white/20" />

          {/* Stars image - absolute positioned at top with maximum z-index */}
          <div className="absolute inset-0 top-16 left-0 z-50 w-full h-[8rem]">
            <img
              src="/stars.png"
              alt="Stars"
              className="w-full h-full object-cover opacity-100"
            />
          </div>

          {/* Content */}
          <div className="relative z-40 px-8 py-16 sm:py-32 text-center mt-[2rem] sm:mt-[4rem]">
            {/* KS LAB Label */}
            <motion.div
              className="inline-block mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9E96CE] via-[#663c9c] to-purple-400 p-[1.5px]">
                  <div className="bg-white rounded-full h-full w-full"></div>
                </div>
                {/* Gradient text */}
                <span className="relative bg-gradient-to-r font-medium from-[#9E96CE] via-[#663c9c] to-purple-400 bg-clip-text text-transparent">
                  {t("hero.label")}
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {i18n.language === "fr" ? (
                <>
                  L'intelligence artificielle
                  <br />
                  <span className="bg-gradient-to-b from-[#a689ca] via-[#9e72d4] to-[#5128a7] bg-clip-text text-transparent">
                    à portée de main.
                  </span>
                </>
              ) : (
                <>
                  Artificial intelligence
                  <br />
                  <span className="bg-gradient-to-b from-[#a689ca] via-[#9e72d4] to-[#5128a7] bg-clip-text text-transparent">
                    at your fingertips.
                  </span>
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-zinc-500 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t("hero.description")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button
                onClick={scheduleCall}
                className="bg-white text-gray-800 px-6 py-3 rounded-full text-base font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 min-w-[160px] cursor-pointer border border-gray-200"
              >
                {t("hero.scheduleCall")}
              </button>
              <button
                onClick={() => router.push("/ks-gpt")}
                className="dark-gradient-button text-white px-6 py-3.5 rounded-full text-base font-medium hover:scale-105 transition-all duration-300 min-w-[160px] cursor-pointer border border-zinc-700 flex items-center justify-center"
              >
                <img
                  src="/logo-white.png"
                  alt="KS GPT"
                  className="h-5 w-auto"
                />
              </button>
            </motion.div>

            {/* Motto */}
            <motion.div
              className="flex items-center justify-center gap-3 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {/* Quote indicator rectangle */}
              <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
              <p className="text-white text-base pt-serif-regular-italic">
                {t("hero.motto")}
              </p>
            </motion.div>
          </div>

          {/* Animated Rectangular Elements - Way bigger and more spaced - Hidden on mobile */}
          <motion.div
            className="hidden sm:block absolute bottom-0 left-0 right-0 h-48 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: showDiagonals ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Left rectangles - Much bigger and more spaced */}
            <motion.div
              className="absolute bottom-12 -left-[20%] w-[35rem] h-32 bg-white/20 backdrop-blur-sm border-2 border-white transform rotate-45"
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: showDiagonals ? 0 : 100,
                opacity: showDiagonals ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Right rectangles - Much bigger and more spaced */}
            <motion.div
              className="absolute bottom-12 -right-[20%] w-[35rem] h-32 bg-white/20 backdrop-blur-sm border-2 border-white transform -rotate-45"
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: showDiagonals ? 0 : 100,
                opacity: showDiagonals ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
