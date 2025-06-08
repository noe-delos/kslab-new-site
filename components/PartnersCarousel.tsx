"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function PartnersCarousel() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const logos = [
    "/carousel/logo1.png",
    "/carousel/logo2.png",
    "/carousel/logo3.png",
    "/carousel/logo4.png",
    "/carousel/logo5.png",
  ];

  const getLogoSize = (logoPath: string) => {
    if (logoPath.includes("logo1.png")) {
      return "w-20 h-12"; // Smaller for logo1.png
    }
    return "w-32 h-20"; // Bigger for all other logos
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Pixels per frame

    const animate = () => {
      scrollAmount += scrollSpeed;

      if (scrollAmount >= maxScroll / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup handled by the animate function being closed over
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-xl md:text-2xl font-normal text-center text-zinc-700 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("partners.title")}
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Fade Overlay */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          {/* Right Fade Overlay */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-20 overflow-x-hidden py-8"
            style={{ scrollBehavior: "auto" }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className={`flex-shrink-0 ${getLogoSize(
                  logo
                )} relative grayscale hover:grayscale-0 transition-all duration-300`}
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className={`flex-shrink-0 ${getLogoSize(
                  logo
                )} relative grayscale hover:grayscale-0 transition-all duration-300`}
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}

            {/* Third set for extra smooth loop */}
            {logos.map((logo, index) => (
              <div
                key={`third-${index}`}
                className={`flex-shrink-0 ${getLogoSize(
                  logo
                )} relative grayscale hover:grayscale-0 transition-all duration-300`}
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
