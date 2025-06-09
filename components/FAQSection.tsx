/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";

const questionKeys = ["q1", "q2", "q3"];

export default function FAQSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (questionKey: string) => {
    setOpenQuestion(openQuestion === questionKey ? null : questionKey);
  };

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl border border-border p-8 sm:p-12 pt-16 sm:pt-20 relative overflow-hidden"
      >
        {/* Stars Background */}
        <div
          className="absolute top-0 left-0 w-full h-24 bg-repeat-x opacity-20"
          style={{
            backgroundImage: "url('/stars.png')",
            backgroundSize: "auto 100%",
            backgroundPosition: "top left",
          }}
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start relative z-10">
          {/* Left Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center xl:justify-start"
            >
              <div className="relative px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9E96CE] via-[#663c9c] to-purple-400 p-[1.5px]">
                  <div className="bg-white rounded-full h-full w-full"></div>
                </div>
                {/* Gradient text */}
                <span className="relative bg-gradient-to-r font-medium from-[#9E96CE] via-[#663c9c] to-purple-400 bg-clip-text text-transparent">
                  {t("faq.label")}
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 text-center xl:text-left"
            >
              {t("faq.title")}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-600 text-center xl:text-left max-w-2xl xl:max-w-none"
            >
              {t("faq.description")}
            </motion.p>

            {/* FAQ Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-4"
            >
              {questionKeys.map((questionKey, index) => {
                const isOpen = openQuestion === questionKey;
                const delay = 0.8 + index * 0.1;

                return (
                  <motion.div
                    key={questionKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.8, delay }}
                    className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => toggleQuestion(questionKey)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {t(`faq.questions.${questionKey}.question`)}
                      </h3>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 border-t border-gray-200">
                            <p className="text-gray-600 leading-relaxed pt-4">
                              {t(`faq.questions.${questionKey}.answer`)}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Section - Image (only on XL screens) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden xl:flex justify-center items-start pt-12"
          >
            <div className="relative w-full max-w-md">
              <img
                src="https://framerusercontent.com/images/qNrqC8miW5fiv8GPTFehkjeyA.png"
                alt="FAQ Illustration"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
