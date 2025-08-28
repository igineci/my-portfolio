"use client";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

interface SocialsProps {
  name?: string;
  title?: string;
  linkedinUrl?: string;
  profileImage?: string;
}

export default function Socials({
  name = "Andjela Djekic",
  title = "Junior Software Engineer",
  linkedinUrl = "https://linkedin.com/in/yourprofile",
  profileImage = "images/social.jpeg",
}: SocialsProps) {
  return (
    <section className="w-full py-7 px-18">
      <div className="">
        <h2 className="text-[70px] pb-6 font-light ">Let's connect</h2>

        <div className="border-1 border-[#131313]">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            {/* Left Column - Image and LinkedIn */}
            <div className="flex flex-col items-center justify-center p-8 lg:p-12 space-y-6">
              <div className="relative">
                <img
                  src={profileImage || "/placeholder.svg"}
                  alt={name}
                  className="w-48 h-48 lg:w-56 lg:h-56 object-cover "
                />
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-2xl lg:text-3xl text-[#131313] tracking-tight">
                  {name}
                </h3>
                <p className="text-lg text-[#131313] font-medium">{title}</p>
              </div>
            </div>

            {/* Right Column - Text and Social Buttons */}
            <div className="flex flex-col justify-center p-8 lg:p-12 space-y-8 bg-[#dddbd4] border-l border-[#131313]">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl text-[#131313] uppercase tracking-wider">
                  Let's build meaningful connections
                </h3>
                <p className="text-[#131313] text-lg leading-relaxed">
                  Follow me on social media for industry insights and
                  collaboration opportunities.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-8">
                <a
                  href="#"
                  className="group relative overflow-hidden bg-[#f2f0ea] border-1 border-[#131313] p-4 flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105"
                >
                  <IoMailSharp className="w-8 h-8 text-[#131313] group-hover:text-[#f2f0ea] transition-colors duration-300 z-10 relative" />
                  <div className="absolute inset-0 bg-[#e63946] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-[#f2f0ea] border-1 border-[#131313] p-4 flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105"
                >
                  <GrLinkedin className="w-8 h-8 text-[#131313] group-hover:text-[#f2f0ea] transition-colors duration-300 z-10 relative" />
                  <div className="absolute inset-0 bg-[#0077b5] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>

                <a
                  href="#"
                  className="group relative overflow-hidden bg-[#f2f0ea] border-1 border-[#131313] p-4 flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105"
                >
                  <FaInstagramSquare className="w-8 h-8 text-[#131313] group-hover:text-[#f2f0ea] transition-colors duration-300 z-10 relative" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>

                <a
                  href="#"
                  className="group relative overflow-hidden bg-[#f2f0ea] border-1 border-[#131313] p-4 flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105"
                >
                  <FaGithub className="w-8 h-8 text-[#131313] group-hover:text-[#f2f0ea] transition-colors duration-300 z-10 relative" />
                  <div className="absolute inset-0 bg-[#08872B] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
