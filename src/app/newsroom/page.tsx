"use client";

import AnnouncementsTab from "@/components/AnnouncementsTab";
import { SecondaryButton } from "@/components/buttons";
import Seo from "@/components/misc/Seo";
// import CustomInput from "@/components/input";
import VridhiNewsTab from "@/components/VridhiNewsTab";
import Image from "next/image";
import { Suspense, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Page() {
  const [activeTab, setActiveTab] = useState<"announcements" | "vridhi-news">(
    "announcements"
  );

  return (
    <>
      <Seo
        title="Newsroom - Walmart Vriddhi"
        description="Discover the latest news, success stories, and media updates from Walmart Vriddhi - advancing MSME growth, digital transformation, and entrepreneurship across India."
        url="https://www.walmartvriddhi.org/newsroom/"
        image="/favicon/android-chrome-192x192.png"
        structuredData={{
          "@context": "https://schema.org/",
          "@type": "WebSite",
          name: "walmartvriddhi",
          url: "https://www.walmartvriddhi.org/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.walmartvriddhi.org/{search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      {/* Hero Section */}
      <AnimatedSection>
        <div className="relative w-full h-[150px] md:h-[300px] lg:h-[420px] rounded-xl overflow-hidden">
          <Image
            src="/images/newsroom/newsroom-banner.jpg"
            alt="Newsroom hero image"
            className="object-cover object-top"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r w-full md:w-[65%] lg:w-[50%] from-black/0 from-40% opacity-60" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-4 sm:px-8 md:px-12 lg:left-12 max-w-full md:max-w-lg lg:max-w-xl text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">
                {/*               Newsroom */}
              </h2>
              <p className="text-xs sm:text-sm font-light mb-4 w-full sm:w-[360px]">
                {/*               Get latest updates about the Walmart Vriddhi Program here. */}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tabs + Content */}
      <AnimatedSection>
        <div className="flex flex-col items-center my-6 sm:my-10 md:my-10 mx-2 sm:mx-8 md:mx-12 lg:mx-[100px] space-y-6 sm:space-y-10 md:space-y-14">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 md:gap-x-8 items-center justify-center w-full">
            <SecondaryButton
              text="Announcements"
              className={`w-full sm:w-[220px] md:w-[260px] ${
                activeTab === "announcements"
                  ? "bg-[#0053e2] text-white border-[#0053e2]"
                  : ""
              }`}
              onClick={() => setActiveTab("announcements")}
              variant={activeTab === "announcements" ? "primary" : "secondary"}
            />
            <SecondaryButton
              text="Walmart Vriddhi in the News"
              className={`w-full sm:w-[220px] md:w-[260px] ${
                activeTab === "vridhi-news"
                  ? "bg-[#0053e2] text-white border-[#0053e2]"
                  : ""
              }`}
              onClick={() => setActiveTab("vridhi-news")}
              variant={activeTab === "vridhi-news" ? "primary" : "secondary"}
            />
          </div>

          {/* Filters */}
          {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-8 md:gap-x-12 items-center justify-center w-full max-w-md sm:max-w-xl md:max-w-2xl px-4 sm:px-0">
            <CustomInput
              placeholder="search by topic"
              className="w-full md:w-[300px] sm:w-auto"
            />

            <div className="relative w-full sm:w-[160px]">
              <select className="appearance-none border border-black rounded-full w-full px-4 py-3 text-xs font-thin uppercase pr-10">
                <option value="month">month</option>
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

            <div className="relative w-full sm:w-[160px]">
              <select className="appearance-none border border-black rounded-full w-full px-4 py-3 text-xs font-thin uppercase pr-10">
                <option value="2024">2024</option>
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
          <div className="w-full">
            {activeTab === "announcements" && (
              <Suspense fallback={<div>Loading...</div>}>
                <AnnouncementsTab />
              </Suspense>
            )}
            {activeTab === "vridhi-news" && <VridhiNewsTab />}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
