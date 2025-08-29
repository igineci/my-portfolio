"use client";

import { useState } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDatabase, FaBusinessTime } from "react-icons/fa";
import { BsClipboard2DataFill, BsFillCalendar2HeartFill } from "react-icons/bs";
import { GiAutomaticSas } from "react-icons/gi";
import { RiAiGenerateText } from "react-icons/ri";
import { MdScheduleSend, MdInsights } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Button } from "./button";

export default function ReportifyCard() {
  const [isHovered, setIsHovered] = useState(false);

  const handleGitHubClick = () => {
    // Replace with your actual GitHub repository URL
    window.open("https://github.com/yourusername/your-repo", "_blank");
  };

  return (
    <div className="">
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Container */}
        <div
          className={`
          flex flex-col items-center justify-center max-w-xl text-center mx-8
          transition-all duration-500 ease-in-out transform
          ${isHovered ? "scale-105 blur-sm" : "scale-100 blur-0"}
        `}
        >
          <div className="text-[#131313] border border-[#131313] p-7 text-xl leading-relaxed shadow-lg">
            <ul className="mt-6 space-y-4 text-lg text-[#131313]">
              <li className="flex items-center justify-center">
                <BiLogoPostgresql className="inline-block mr-2 h-7 w-7" />
                Connects directly to the PostgreSQL database
                <FaDatabase className="inline-block ml-2 h-5 w-5 mb-1" />
              </li>
              <li className="flex items-center justify-center">
                <BsClipboard2DataFill className="inline-block mr-2 h-6 w-6 mb-1" />
                Processes raw business data
                <FaBusinessTime className="inline-block ml-2 h-7 w-7" />
              </li>
              <li className="flex items-center justify-center">
                <GiAutomaticSas className="inline-block mr-2 h-7 w-7 mb-1" />
                Automatically generates sales reports
                <RiAiGenerateText className="inline-block ml-2 h-7 w-7 mb-1" />
              </li>
              <li className="flex items-center justify-center">
                <BsFillCalendar2HeartFill className="inline-block mr-2 h-6 w-6 mb-1" />
                Schedules delivery right on time
                <MdScheduleSend className="inline-block ml-2 h-7 w-7 mb-1" />
              </li>
              <li className="flex items-center justify-center">
                <MdInsights className="inline-block mr-2 h-7 w-7" />
                Sends insights via API to external services
                <GrServices className="inline-block ml-2 h-7 w-7 mb-1" />
              </li>
            </ul>
          </div>
        </div>

        {/* GitHub Button Overlay */}
        <div
          className={`
          absolute inset-0 flex items-center justify-center
          transition-all duration-500 ease-in-out
          ${
            isHovered
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
        >
          <div className="bg-[#f2f0ea] backdrop-blur-sm py-10 px-23 shadow-2xl">
            <div className="text-center space-y-4">
              <FiGithub className="h-12 w-12 mx-auto text-foreground" />
              <h3 className="text-xl font-semibold text-foreground">
                View on GitHub
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Check out the source code and documentation for this project
              </p>
              <Button
                onClick={handleGitHubClick}
                className="gap-2 bg-primary rounded-none hover:bg-primary/90 text-primary-foreground"
              >
                <FiGithub className="h-4 w-4" />
                Open Repository
                <FiExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
