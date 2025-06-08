/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

const testimonialKeys = ["testimonial1", "testimonial2", "testimonial3"];

// Placeholder profile images
const profileImages = [
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
];

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold uppercase tracking-wider text-gray-700">
              {t("testimonials.label")}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            {t("testimonials.title")}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t("testimonials.description")}
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialKeys.map((testimonialKey, index) => {
            const delay = 0.6 + index * 0.1;

            return (
              <motion.div
                key={testimonialKey}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.8, delay }}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: delay + 0.2 }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 border border-gray-200"
                >
                  <Quote className="w-6 h-6 text-gray-700" />
                </motion.div>

                {/* Quote Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: delay + 0.3 }}
                  className="flex-grow mb-8"
                >
                  <p className="text-gray-700 leading-relaxed italic">
                    "{t(`testimonials.items.${testimonialKey}.text`)}"
                  </p>
                </motion.div>

                {/* Author Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: delay + 0.4 }}
                  className="flex items-center space-x-4 pt-6 border-t border-gray-200"
                >
                  {/* Profile Picture */}
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                    <img
                      src={profileImages[index]}
                      alt={t(`testimonials.items.${testimonialKey}.name`)}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">
                      {t(`testimonials.items.${testimonialKey}.name`)}
                    </p>
                    <p className="text-xs text-gray-600">
                      {t(`testimonials.items.${testimonialKey}.role`)}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
