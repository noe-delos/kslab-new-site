"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const workflowImages = [
  "https://framerusercontent.com/images/JgI63q8PBgkZ9t6z8JftPJD2IY.jpg",
  "https://framerusercontent.com/images/95mK4cGWkZ7jWn7E5DfMI9e8.jpg",
  "https://framerusercontent.com/images/UWjm34yW5VKdFszqkm2ZunVq4.jpg",
];

const stepKeys = ["step1", "step2", "step3"];

export default function WorkflowSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsAutoPlaying(true);
    }
  }, [isInView]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl border border-border p-12 sm:p-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Simple Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9E96CE] via-[#663c9c] to-purple-400 p-[1.5px]">
                  <div className="bg-white rounded-full h-full w-full"></div>
                </div>
                {/* Gradient text */}
                <span className="relative bg-gradient-to-r font-medium from-[#9E96CE] via-[#663c9c] to-purple-400 bg-clip-text text-transparent">
                  {t("workflow.label")}
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 text-center lg:text-left"
            >
              {t("workflow.title")}
            </motion.h2>

            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              {stepKeys.map((stepKey, index) => (
                <motion.div
                  key={stepKey}
                  animate={{
                    opacity: currentStep === index ? 1 : 0.6,
                    scale: currentStep === index ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors duration-300"
                >
                  {/* Number Circle */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-500 ${
                        currentStep === index
                          ? "bg-gray-900 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {t(`workflow.steps.${stepKey}.title`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {t(`workflow.steps.${stepKey}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative size-[30rem] mx-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentStep}
                  src={workflowImages[currentStep]}
                  alt={t(`workflow.steps.${stepKeys[currentStep]}.title`)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
