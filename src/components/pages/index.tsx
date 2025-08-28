"use client";

import Header from "../header";
import HeroSection from "../../app/home/hero";
import Projects from "../../app/home/projects";
import Footer from "../footer";
import InteractiveContact from "../ui/contact-form";

export default function HomePage() {
  return (
    <div className="min-h-screen text-gray-800 bg-[#f2f0ea] overflow-hidden relative flex flex-col">
      {/* Content */}
      <div className="relative z-10 flex-grow">
        <Header />
        <div className="page-content-fade">
          <HeroSection />
          <Projects />
          <InteractiveContact />
          <div className="border-b border-[#131313] mx-18 mt-7 mb-24"> </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
