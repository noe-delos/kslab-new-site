"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersCarousel from "@/components/PartnersCarousel";
import SolutionsSection from "@/components/SolutionsSection";
import WorkflowSection from "@/components/WorkflowSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import BackgroundLines from "@/components/BackgroundLines";

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <BackgroundLines />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <PartnersCarousel />
        <SolutionsSection />
        <WorkflowSection />
        <FeaturesSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
