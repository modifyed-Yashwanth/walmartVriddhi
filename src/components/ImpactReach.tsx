"use client";

import React from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import StaggeredAnimatedSection from "./StaggeredAnimatedSection";

const ImpactReach = () => {
  return (
    <AnimatedSection delay={0.3}>
      <div className="py-10">
        <h2 className="text-2xl md:text-4xl text-center mb-12">
          Impact and Reach
        </h2>

        {/* Row 1 */}
        <StaggeredAnimatedSection
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-6"
          staggerDelay={0.15}
        >
          {/* Image Left */}
          <div className="overflow-hidden rounded-lg h-64 relative">
            <Image
              src="/images/image-reachleft.jpg"
              alt="Impact Image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Card 1 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col">
            <div className="w-16 h-16 mb-4 relative">
              <Image
                src="/images/vriddhi-graduates.svg"
                alt="Icon"
                width={75}
                height={75}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-medium mb-1">100 Vriddhi Graduates</h3>
            <p className="text-sm ">
              Trained on Cross Border Trade and 123 Onboarded on Walmart.com
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col">
            <div className="w-16 h-16 mb-4 relative">
              <Image
                src="/images/2500-stories.svg"
                alt="Icon"
                width={75}
                height={75}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-medium mb-1">2500 Stories</h3>
            <p className="text-sm ">Completed 1-on-1 personalised mentoring</p>
          </div>
        </StaggeredAnimatedSection>

        {/* Row 2 */}
        <StaggeredAnimatedSection
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          staggerDelay={0.15}
        >
          {/* Card 3 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col">
            <div className="w-16 h-16 mb-4 relative">
              <Image
                src="/images/300-suppliers.svg"
                alt="Icon"
                width={75}
                height={75}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-medium mb-1">300+ Suppliers</h3>
            <p className="text-sm ">Trained for Export Readiness</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col">
            <div className="w-16 h-16 mb-4 relative">
              <Image
                src="/images/7000-MSMEs.svg"
                alt="Icon"
                width={75}
                height={75}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-medium mb-1">7000 MSMEs</h3>
            <p className="text-sm ">
              Participated in 112 events conducted with government partnerships
            </p>
          </div>

          {/* Image Right */}
          <div className="overflow-hidden rounded-lg h-64 relative">
            <Image
              src="/images/image-reachright.jpg"
              alt="Impact Image 2"
              fill
              className="object-cover"
            />
          </div>
        </StaggeredAnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default ImpactReach;
