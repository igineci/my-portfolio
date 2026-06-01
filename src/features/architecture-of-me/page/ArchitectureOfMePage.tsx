"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { PageTitleBand } from "../components/PageTitleBand";
import { CvDocument } from "../document/CvDocument";
import { CvPersonJsonLd } from "../schema/CvPersonJsonLd";

export function ArchitectureOfMePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen text-[#131313] overflow-x-hidden relative flex flex-col"
      style={{ backgroundColor: "#f2f0ea" }}
    >
      <CvPersonJsonLd />
      <Header />
      <main
        className={`flex-1 pt-24 sm:pt-28 transition-opacity duration-700 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pb-16 sm:pb-24">
          <PageTitleBand />
          <CvDocument />
        </div>
      </main>
      <Footer />
    </div>
  );
}
