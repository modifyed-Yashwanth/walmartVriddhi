"use client";

import { SecondaryButton } from "@/components/buttons";
// import CustomInput from "@/components/input";
import NarrativesTab from "@/components/NarrativesTab";
import VideosTab from "@/components/VideosTab";
import Image from "next/image";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<"narratives" | "videos">(
    "narratives"
  );

  return (
    <>
      {/* Hero Section */}
      <AnimatedSection>
        <div className="relative w-full h-[150px] md:h-[300px] lg:h-[420px] rounded-xl overflow-hidden">
          <Image
            src="/images/success-stories/success-story-banner.jpg"
            alt="success stories hero image"
            className="object-cover object-top"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r w-full md:w-[65%] lg:w-[50%] from-black/20 from-40% opacity-60" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-4 sm:px-8 md:px-12 lg:left-12 max-w-full md:max-w-lg lg:max-w-xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-[38px] font-bold mb-2 leading-tight">
                {/*               Success Stories */}
              </h1>
              <p className="text-xs sm:text-sm font-light mb-4 w-full sm:w-[360px]">
                {/*               Inspiring Journeys of Walmart Vriddhi MSMEs */}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tabs + Content */}

      <div className="flex flex-col items-center my-6 md:my-10 space-y-6 sm:space-y-10 md:space-y-14">
        <AnimatedSection>
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 md:gap-x-8 items-center justify-center w-full max-w-md sm:max-w-none px-4 sm:px-0">
            <SecondaryButton
              text="Impact Narratives"
              className={`w-full sm:w-[220px] md:w-[260px] ${
                activeTab === "narratives"
                  ? "bg-[#0053e2] text-white border-[#0053e2]"
                  : ""
              }`}
              onClick={() => setActiveTab("narratives")}
              variant={activeTab === "narratives" ? "primary" : "secondary"}
            />
            <SecondaryButton
              text="Videos"
              className={`w-full sm:w-[220px] md:w-[260px] ${
                activeTab === "videos"
                  ? "bg-[#0053e2] text-white border-[#0053e2]"
                  : ""
              }`}
              onClick={() => setActiveTab("videos")}
              variant={activeTab === "videos" ? "primary" : "secondary"}
            />
          </div>
        </AnimatedSection>

        {/* Filters */}
        {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-8 md:gap-x-12 items-center justify-center w-full max-w-md sm:max-w-xl md:max-w-2xl px-4 sm:px-0">
            <CustomInput
              placeholder="search by topic"
              className="w-full md:w-[300px] sm:w-auto"
            />
            <div className="relative w-full sm:w-[200px]">
              <select className="appearance-none border border-black rounded-full w-full px-4 py-3 text-xs font-thin uppercase pr-10">
                <option value="Filter">Filter</option>
                <option value="sample 2">Sample 2</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-3 h-3 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div> */}

        {/* Tab-specific Content */}
        <AnimatedSection key={pathname}>
          <div className="w-full px-4 sm:px-0">
            {activeTab === "narratives" && <NarrativesTab />}
            {activeTab === "videos" && <VideosTab />}
          </div>
        </AnimatedSection>
      </div>
      {/* </AnimatedSection> */}
    </>
  );
}
