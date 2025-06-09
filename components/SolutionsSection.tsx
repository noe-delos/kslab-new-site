/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Brain,
  Zap,
  Shield,
  Users,
  Settings,
  MessageCircle,
  GraduationCap,
  Calculator,
  FileText,
  TrendingUp,
} from "lucide-react";

const solutionKeys = [
  {
    key: "conversationalSimulators",
    icon: MessageCircle,
    image: "https://framerusercontent.com/images/xJ3fjboUJLVolfGqf752ILN4.png",
  },
  {
    key: "alumniAI",
    icon: GraduationCap,
    image:
      "https://framerusercontent.com/images/jrY5DWrX2645mgGTeVIjpXjVIU.png",
  },
  {
    key: "mathAgents",
    icon: Calculator,
    image: "https://framerusercontent.com/images/xJ3fjboUJLVolfGqf752ILN4.png",
  },
  {
    key: "documentAnalysis",
    icon: FileText,
    image:
      "https://framerusercontent.com/images/jrY5DWrX2645mgGTeVIjpXjVIU.png",
  },
  {
    key: "predictiveAnalytics",
    icon: TrendingUp,
    image: "https://framerusercontent.com/images/xJ3fjboUJLVolfGqf752ILN4.png",
  },
];

export default function SolutionsSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl border border-border p-8 sm:p-12"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          {/* Gradient Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="relative px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9E96CE] via-[#663c9c] to-purple-400 p-[1.5px]">
                <div className="bg-white rounded-full h-full w-full"></div>
              </div>
              {/* Gradient text */}
              <span className="relative bg-gradient-to-r font-medium from-[#9E96CE] via-[#663c9c] to-purple-400 bg-clip-text text-transparent">
                {t("solutions.label")}
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t("solutions.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("solutions.description")}
          </p>
        </motion.div>

        {/* Grid - Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {solutionKeys.slice(0, 3).map((solution, index) => {
            const IconComponent = solution.icon;
            const delay = 0.4 + index * 0.1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.8, delay }}
                className="bg-zinc-100 border border-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Top section with title and icon */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1 pr-4">
                    {t(`solutions.items.${solution.key}.title`)}
                  </h3>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-border flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {t(`solutions.items.${solution.key}.description`)}
                </p>

                {/* Image at bottom */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: delay + 0.3 }}
                  className="mt-auto"
                >
                  <img
                    src={solution.image}
                    alt={t(`solutions.items.${solution.key}.title`)}
                    className="w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Grid - Bottom Row (Centered) */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
            {solutionKeys.slice(3, 5).map((solution, index) => {
              const IconComponent = solution.icon;
              const delay = 0.4 + (index + 3) * 0.1;

              return (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{ duration: 0.8, delay }}
                  className="bg-zinc-100 border border-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  {/* Top section with title and icon */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex-1 pr-4">
                      {t(`solutions.items.${solution.key}.title`)}
                    </h3>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-border flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {t(`solutions.items.${solution.key}.description`)}
                  </p>

                  {/* Image at bottom */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.6, delay: delay + 0.3 }}
                    className="mt-auto"
                  >
                    <img
                      src={solution.image}
                      alt={t(`solutions.items.${solution.key}.title`)}
                      className="w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
