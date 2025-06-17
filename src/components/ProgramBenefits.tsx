"use client";

import Image from "next/image";
import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import StaggeredAnimatedSection from "./StaggeredAnimatedSection";

interface ProgramBenefitsProps {
  benefits: benefitsProps[];
}

interface benefitsProps {
  image: string;
  title: string;
  description: string;
}

const ProgramBenefits = ({ benefits }: ProgramBenefitsProps) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <AnimatedSection delay={0.3}>
      <div className="py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 lg:gap-15 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl">Program Benefits</h2>
          </div>
          <div className="md:w-1/2 text-base leading-relaxed">
            <p className="mb-[10px]">
              Walmart Vriddhi is a free-of-cost supplier development program for
              MSMEs that combine digital learning with business tools to empower
              entrepreneurs across India to modernize, scale, and grow their
              businesses.
            </p>
            {showMore && (
              <>
                <p className="mb-[10px]">
                  The program was launched in 2019 with a commitment to empower
                  50,000 MSMEs in India over five years. In its first phase, the
                  program surpassed that goal by training over 60,000 MSMEs and
                  has played a catalytic role in supporting small businesses
                  with growth opportunities to reach new national and
                  international markets.
                </p>
                <p>
                  The program is tailored to help MSMEs modernize, scale and
                  meet their domestic, and (for some) international ambitions.
                  It underscores Walmart’s focus to help unlock India’s
                  entrepreneurial capacity and enable MSMEs to thrive in the
                  market. The program offers MSMEs access to free-of-cost
                  training, mentoring, and business advice.
                </p>
              </>
            )}
            <button
              onClick={() => setShowMore(!showMore)}
              className="underline text-[#0053E2] cursor-pointer text-left"
            >
              {showMore ? "Read less" : "Read more"}
            </button>
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
                  placeholder="blur"
                  blurDataURL={benefit.image}
                  height={200}
                  width={200}
                  className="w-full h-[300px] md:h-[270px] object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">{benefit.title}</h3>
              {/* <p className="text-sm">{benefit.description}</p> */}
            </div>
          ))}
        </StaggeredAnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default ProgramBenefits;
