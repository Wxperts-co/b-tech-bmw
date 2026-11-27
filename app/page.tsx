import type { Metadata } from "next";
import Header from "@/components/common/Header";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServiceSection from "@/components/home/ServiceSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import BmwModelsSection from "@/components/home/BmwModelsSection";
import GallerySection from "@/components/home/GallerySection";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Btech BMW Service & Repair | Sacramento BMW Specialists",
  description:
    "Sacramento's trusted independent BMW service & repair shop. 30+ years of BMW expertise, California BAR certified, serving Sacramento, the Bay Area, Arizona & Oregon.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white scroll-smooth selection:bg-[#00c8ff] selection:text-black">
      <Header />
      <main className="relative w-full">
        {/* Full-viewport Hero Section with background video and service slider */}
        <div className="relative h-screen min-h-[700px] w-full overflow-hidden">
          <HeroSection />
        </div>

        {/* Pixel-Perfect About Section */}
        <AboutSection />

        {/* 3D Comprehensive BMW Services Section */}
        <ServiceSection />

        {/* Why Choose Btech BMW Service Section */}
        <WhyChooseSection />

        {/* White Background BMW Models Section (Between WhyChoose & Gallery) */}
        <BmwModelsSection />

        {/* Our Gallery Section (4 cards per row) */}
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
