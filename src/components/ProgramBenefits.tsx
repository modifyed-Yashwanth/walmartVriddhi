"use client";

import Image from "next/image";
import React from "react";
import AnimatedSection from "./AnimatedSection";
import StaggeredAnimatedSection from "./StaggeredAnimatedSection";

interface ProgramBenefitsProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: benefitsProps[];
}

interface benefitsProps {
  image: string;
  title: string;
  description: string;
}

const ProgramBenefits = ({
  title,
  subtitle,
  description,
  benefits,
}: ProgramBenefitsProps) => {
  return (
    <AnimatedSection delay={0.3}>
      <div className="py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 lg:gap-15 mb-12">
          <div className="md:w-1/2">
            <h4 className="md:text-lg mb-2">{subtitle}</h4>
            <h2 className="text-2xl md:text-4xl">{title}</h2>
          </div>
          <div className="md:w-1/2 text-base leading-relaxed">
            <p>{description}</p>
          </div>
        </div>

        {/* Benefit Cards */}
        <StaggeredAnimatedSection
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          staggerDelay={0.15}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="overflow-hidden rounded-lg w-full mb-4">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  height={200}
                  width={200}
                  className="w-full h-[300px] md:h-[270px] object-cover object-right rounded-lg transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm">{benefit.description}</p>
            </div>
          ))}
        </StaggeredAnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default ProgramBenefits;
