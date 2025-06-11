/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const testimonialKeys = ["testimonial1", "testimonial2", "testimonial3"];

// Real profile images
const profileImages = [
  "https://media.licdn.com/dms/image/v2/D4E03AQGss9Ajm8uDmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1680959012471?e=1755129600&v=beta&t=WZCBD7c5jz34pZ3_r1ZHQlU2Z6pqm1yrKGkEWfTEXf0", // Joachim Pinto
  "https://derivativesfinance.fr/wp-content/uploads/2024/03/1708998508964-jpeg.webp", // Ziyad El Yaagoubi
  "https://media.licdn.com/dms/image/v2/D4E03AQH_t6LR3vS5uA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707309344832?e=1755129600&v=beta&t=cb2nFRhTLogzmFnFkgeYBxzbqP_gB1sbtBKcWJGvGWw", // Jonathan Garcia
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
            <div className="relative px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9E96CE] via-[#663c9c] to-purple-400 p-[1.5px]">
                <div className="bg-white rounded-full h-full w-full"></div>
              </div>
              {/* Gradient text */}
              <span className="relative bg-gradient-to-r font-medium from-[#9E96CE] via-[#663c9c] to-purple-400 bg-clip-text text-transparent">
                {t("testimonials.label")}
              </span>
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
                {/* Quote Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: delay + 0.2 }}
                  className="flex-grow mb-8"
                >
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t(`testimonials.items.${testimonialKey}.text`)}
                  </p>
                </motion.div>

                {/* Author Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: delay + 0.3 }}
                  className="flex items-center space-x-4"
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
                    <p className="font-semibold text-gray-900 text-base">
                      {t(`testimonials.items.${testimonialKey}.name`)}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t(`testimonials.items.${testimonialKey}.role`)}{" "}
                      <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent font-medium">
                        @{t(`testimonials.items.${testimonialKey}.company`)}
                      </span>
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
