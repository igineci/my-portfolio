"use client";
import { useState, useMemo, useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProjectGallery from "../../components/project-gallery";
import CvComponent from "../../components/ui/cv-component";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Socials from "../../components/ui/socials";
import InteractiveContact from "../../components/ui/contact-form";

type TimelineItem = {
  year: number;
  image: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    year: 2023,
    image: "/images/2023.jpeg",
    description:
      "Started my journey in web development and design. Focused on learning React and modern frontend technologies.",
  },
  {
    year: 2024,
    image: "/images/2024.jpeg",
    description:
      "Expanded my skills in full-stack development. Worked on several portfolio projects and client work.",
  },
  {
    year: 2025,
    image: "/images/2025.jpeg",
    description:
      "Currently developing advanced web applications and exploring new technologies in the field.",
  },
];

export default function AboutPage() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );

  const current = useMemo(() => timelineData[index], [index]);

  const goToPrevious = () => {
    if (isTransitioning) return; // Prevent rapid clicking during animation

    setIsTransitioning(true);
    setSlideDirection("left"); // Current image slides left, new comes from left

    setTimeout(() => {
      setIndex((p) => (p === 0 ? timelineData.length - 1 : p - 1));
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection(null);
      }, 100); // Short delay to reset after image change
    }, 600); // Half of animation duration (1200ms / 2)
  };

  const goToNext = () => {
    if (isTransitioning) return; // Prevent rapid clicking during animation

    setIsTransitioning(true);
    setSlideDirection("right"); // Current image slides right, new comes from right

    setTimeout(() => {
      setIndex((p) => (p === timelineData.length - 1 ? 0 : p + 1));
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection(null);
      }, 100); // Short delay to reset after image change
    }, 600); // Half of animation duration (1200ms / 2)
  };

  // Trigger fade-in animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 250); // Small delay to ensure smooth animation

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="min-h-screen text-[#131313] overflow-hidden relative flex flex-col"
      style={{ backgroundColor: "#f2f0ea" }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes slide-in-right {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }
          
          @keyframes slide-in-left {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `,
        }}
      />
      <Header />
      <section
        className={`relative w-full flex-1 transition-opacity duration-[2000ms] ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Large Title Section with Background - Height 400px */}
        <div className="relative w-full h-[400px] flex items-center justify-center mb-17">
          <h1 className="text-center uppercase z-20 text-[80px] text-[#333333] leading-none">
            {"My story"}
          </h1>
        </div>

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Timeline stage - Positioned to overlap title section */}
          <div className="relative mx-auto w-full max-w-3xl -mt-[220px]">
            {/* Arch container - Only upper rounded part appears under title letters */}
            <div className="relative mx-auto w-[450px] h-[550px] overflow-hidden rounded-t-full">
              {/* Image in arch with sliding animation */}
              <div className="relative w-full h-full">
                <img
                  key={current.year}
                  src={`/images/${current.year}.jpeg`}
                  alt={`Year ${current.year}`}
                  className={`
                    object-cover w-full h-full transition-transform duration-[1200ms] ease-in-out
                    ${
                      isTransitioning && slideDirection === "right"
                        ? "transform translate-x-full"
                        : ""
                    }
                    ${
                      isTransitioning && slideDirection === "left"
                        ? "transform -translate-x-full"
                        : ""
                    }
                    ${!isTransitioning ? "transform translate-x-0" : ""}
                  `}
                />

                {/* Incoming image for smooth transition */}
                {isTransitioning && (
                  <img
                    src={`/images/${
                      timelineData[
                        slideDirection === "right"
                          ? index === timelineData.length - 1
                            ? 0
                            : index + 1
                          : index === 0
                          ? timelineData.length - 1
                          : index - 1
                      ].year
                    }.jpeg`}
                    alt="Next timeline image"
                    className={`
                      absolute top-0 left-0 object-cover w-full h-full transition-transform duration-[1200ms] ease-in-out
                      ${
                        slideDirection === "right"
                          ? "transform -translate-x-full"
                          : "transform translate-x-full"
                      }
                    `}
                    style={{
                      animation: `slide-in-${slideDirection} 1.2s ease-in-out forwards`,
                    }}
                  />
                )}
              </div>
            </div>

            {/* Giant Year positioned to straddle the image bottom edge - OUTSIDE container to avoid clipping */}
            <div className="pointer-events-none absolute left-1/2 top-[550px] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative text-center font-normal text-[180px]">
                {/* Invisible base text to set dimensions */}
                <div className="invisible text-[#131313]">{current.year}</div>

                {/* Top half - white color - appears over the image */}
                <div
                  className="absolute inset-0 text-[#f2f0ea]"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                  }}
                >
                  {current.year}
                </div>

                {/* Bottom half - dark color - appears below the image */}
                <div
                  className="absolute inset-0 text-[#131313]"
                  style={{
                    clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                  }}
                >
                  {current.year}
                </div>
              </div>
            </div>

            {/* Left/Right arrows - Positioned under title section */}
            <button
              aria-label="Previous year"
              onClick={goToPrevious}
              className="group absolute -left-3 sm:-left-8 top-[40%] -translate-y-1/2 z-30 rounded-full p-2 text-[#333333] hover:text-[#131313] transition-colors"
            >
              <SlArrowLeft className="h-7 w-7 sm:h-8 sm:w-8 hover:scale-120 transition-transform" />
              <span className="sr-only">Previous</span>
            </button>
            <button
              aria-label="Next year"
              onClick={goToNext}
              className="group absolute -right-3 sm:-right-8 top-[40%] -translate-y-1/2 z-30 rounded-full p-2 text-[#333333] hover:text-[#131313] transition-colors"
            >
              <SlArrowRight className="h-7 w-7 sm:h-8 sm:w-8 hover:scale-120 transition-transform" />
              <span className="sr-only">Next</span>
            </button>
          </div>

          {/* Description - Under title section */}
          <div className="max-w-3xl mx-auto mt-[min(18vw,120px)] sm:mt-28 px-2 sm:px-4 mb-35">
            <p className="text-[#333333] text-base sm:text-lg leading-relaxed text-center">
              {current.description}
            </p>
          </div>
        </div>
      </section>
      <div className="border-b border-[#131313] mx-18"> </div>
      <ProjectGallery />
      <div className="border-b border-[#131313] mx-18 mt-10"> </div>
      <CvComponent />
      <div className="border-b border-[#131313] mx-18 mt-7 mb-24"> </div>
      <Socials />
      <div className="border-b border-[#131313] mx-18 mt-7 mb-24"> </div>

      <Footer />
    </div>
  );
}
