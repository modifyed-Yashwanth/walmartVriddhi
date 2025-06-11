"use client";

import React from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const HeroBottomSection = () => {
  return (
    <AnimatedSection delay={0.2}>
      <div className="py-10">
        <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden my-10 rounded-xl">
          <Image
            src="/images/bottom-banner.jpg"
            alt="Walmart Hero"
            className="object-cover object-left md:object-center"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r w-full md:w-[65%] lg:w-[50%] from-black/80 from-40% opacity-60" />
          <div className="absolute inset-0 flex items-center left-[20px] md:left-[50px]">
            <div className="text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Welcome to Walmart
              </h2>
              <p className="text-sm md:text-lg mb-6 max-w-xl">
                Empowering your business journey with resources, training, and
                market access to thrive online.
              </p>
              <a
                href="https://supplieracademy.northpass.com/"
                className="inline-block bg-[#0053E2] hover:bg-[#0053E2] text-white px-6 py-3 rounded-full text-sm font-medium transition"
                target="_blank"
              >
                Register for Walmart Vriddhi
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HeroBottomSection;
