"use client";

import { SecondaryButton } from "@/components/buttons";
import Image from "next/image";
import { useState } from "react";
import MarketConnectTab from "@/components/MarketConnectTab";
import PersonalizedMentoringTab from "@/components/PersonalizedMentoringTab";
import LearningTab from "@/components/LearningTab";
import AnimatedSection from "@/components/AnimatedSection";

export default function Page() {
  const [activeTab, setActiveTab] = useState<
    "learning" | "personalized-mentoring" | "market-connect"
  >("learning");

  return (
    <>
      {/* Hero Section */}
      <AnimatedSection>
        <div className="relative h-[150px] md:h-[300px] lg:h-[420px] rounded-xl overflow-hidden">
          <Image
            src="/images/MSME-Growth-Journey-Banner.jpg"
            alt="success stories hero image"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r w-full md:w-[65%] lg:w-[50%] from-black/80 from-40% opacity-60" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-4 sm:px-8 md:px-12 lg:left-12 max-w-full md:max-w-lg lg:max-w-xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-[38px] font-bold mb-2 leading-tight">
                MSME Growth Journey
              </h1>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="relative w-full overflow-hidden space-y-6 sm:space-y-10 md:space-y-14 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 md:gap-10">
            <div className="md:col-span-5">
              <h2 className="text-2xl md:text-4xl">Walmart Vriddhi</h2>
            </div>
            <div className="md:col-span-5 flex items-center">
              <div className="flex flex-col justify-between h-full">
                <p>
                  Walmart and Flipkart have made a long-term commitment to
                  transform India&apos;s MSME ecosystem by empowering 50,000
                  MSMEs. We strive to play a catalytic role by supporting small
                  businesses with growth opportunities to reach greater heights
                  and new markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="relative w-full h-100 rounded-lg overflow-hidden">
          <Image
            src="/images/growth-journey-bannerv2.jpg"
            alt="growth-j-image"
            className="object-cover object-top"
            fill
            priority
          />
        </div>
      </AnimatedSection>

      {/* Tabs + Content */}
      <AnimatedSection>
        <div className="flex flex-col items-center my-6 md:my-10 space-y-6 sm:space-y-10 md:space-y-14">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 md:gap-x-8 items-center justify-center w-full max-w-md sm:max-w-none px-4 sm:px-0">
            <SecondaryButton
              text="Learning"
              className={`w-full sm:w-[220px] md:w-[260px] ${
                activeTab === "learning"
                  ? "bg-[#0053e2] text-white border-[#0053e2]"
                  : ""
              }`}
              onClick={() => setActiveTab("learning")}
            />
            <SecondaryButton
              text="Personalized Mentoring"
              className={`w-full sm:w-[220px] md:w-[260px] ${
                activeTab === "personalized-mentoring"
                  ? "bg-[#0053e2] text-white border-[#0053e2]"
                  : ""
              }`}
              onClick={() => setActiveTab("personalized-mentoring")}
            />
            <SecondaryButton
              text="Market Connect"
              className={`w-full sm:w-[220px] md:w-[260px] ${
                activeTab === "market-connect"
                  ? "bg-[#0053e2] text-white border-[#0053e2]"
                  : ""
              }`}
              onClick={() => setActiveTab("market-connect")}
            />
          </div>

          {/* Tab-specific Content */}
          <div className="w-full">
            {activeTab === "learning" && (
              <div className="w-full">
                <LearningTab />
              </div>
            )}
            {activeTab === "personalized-mentoring" && (
              <PersonalizedMentoringTab />
            )}
            {activeTab === "market-connect" && (
              <div className="w-full">
                <MarketConnectTab />
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
