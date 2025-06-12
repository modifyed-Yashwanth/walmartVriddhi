"use client";

import React from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const PartnersSection = () => {
  return (
    <AnimatedSection delay={0.4}>
      <div>
        <div className="relative w-full rounded-lg overflow-hidden border-t border-gray-300 ">
          <div className="mx-auto my-[35px] max-w-[1500px] px-4 md:px-15">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center justify-center">
                <p className="m-0 md:me-4">In association with</p>
                <Image
                  src="/images/Flipkart-logo.png"
                  alt="i2i logo"
                  width={110}
                  height={50}
                  className="object-contain md:me-6 mt-2 md:mt-0"
                />
                <Image
                  src="/images/walmart-marketplace.png"
                  alt="walmart logo"
                  width={220}
                  height={50}
                  className="object-contain mt-2 md:mt-0"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-0">
                <p className="m-0 md:me-4">Implementation Partner</p>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/i2i_logo.png"
                    alt="i2i logo"
                    width={160}
                    height={50}
                    className="object-contain mt-2 md:mt-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PartnersSection;
