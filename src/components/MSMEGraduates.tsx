"use client";
import Image from "next/image";
import React from "react";
import AnimatedSection from "./AnimatedSection";
import StaggeredAnimatedSection from "./StaggeredAnimatedSection";

const MSMEGraduates = () => {
  return (
    <AnimatedSection delay={0.2}>
      <div className="pb-10">
        <div className="relative overflow-hidden rounded-2xl h-[300px] md:h-[600px]">
          {/* Image */}
          <Image
            src="/images/graduated-on-flipkart.jpg"
            alt="MSME Graduates"
            className="w-full h-full object-cover"
            height={600}
            width={1200}
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center text-center text-white px-4 py-4 md:py-15">
            <StaggeredAnimatedSection
              className="flex flex-col items-center"
              staggerDelay={0.2}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-4">70,000+</h2>
              <p className="md:text-2xl">
                MSMEs Graduated on Flipkart 2020-2024
              </p>
            </StaggeredAnimatedSection>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default MSMEGraduates;
