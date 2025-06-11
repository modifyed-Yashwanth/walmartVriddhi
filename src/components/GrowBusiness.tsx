"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { PrimaryButton, SecondaryButton } from "./buttons";

export default function GrowBusiness() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="py-16 px-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2" data-aos="fade-right">
            <Image
              src="/images/success-stories.png"
              alt="Success Stories Icon"
              width={80}
              height={80}
              className="mb-6"
            />
            <h2 className="text-3xl font-medium mb-4">
              Grow your business with the Walmart Vriddhi Learning Program
            </h2>
            <p className="text-gray-600 mb-6 text-sm font-light">
              Walmart Vriddhi is a supplier development program that aims to
              work with 50,000 Micro, Small and Medium Enterprises (MSMEs) in
              India to expand their domestic capabilities.
            </p>
            <div className="flex gap-2">
              <PrimaryButton href="#" text="Join" />
              <SecondaryButton href="#" text="View More" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 text-right" data-aos="fade-left">
            <div className="relative w-[70%] ml-auto">
              <Image
                src="/images/grow-your-business.jpg"
                alt="Success Video"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-full p-4 shadow-lg hover:bg-white transition-colors"
                aria-label="Play video"
              >
                <svg
                  className="w-8 h-8 text-[#005eff]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
