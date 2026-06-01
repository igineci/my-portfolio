"use client";

import Header from "../header";
import HeroSection from "../../app/home/Hero";
import { ProjectsGallery } from "../projects-gallery";
import { getProjectsForGallery } from "../../data/projects";
import Footer from "../Footer";
import InteractiveContact from "../ui/contact-form";
import UiLabCta from "../ui/ui-lab-cta";

const homeProjects = getProjectsForGallery();

export default function HomePage() {
  return (
    <div className="min-h-screen text-gray-800 bg-[#f2f0ea] overflow-hidden relative flex flex-col">
      <div className="relative z-10 flex-grow">
        <Header />
        <div className="page-content-fade">
          <HeroSection />
          <ProjectsGallery projects={homeProjects} />
          <UiLabCta />
          <InteractiveContact />
          <div className="border-b border-[#131313] mx-18 mt-7 mb-24"> </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
