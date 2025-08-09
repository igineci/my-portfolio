"use client";

import Header from "../header";
import HeroSection from "../../app/home/Hero";
import FeaturedWork from "../../app/home/FeaturedWork";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen text-gray-800 bg-[#f2f0ea] overflow-hidden relative flex flex-col">
      {/* Content */}
      <div className="relative z-10 flex-grow">
        <Header />
        <div className="page-content-fade">
          <HeroSection />
          <FeaturedWork />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
