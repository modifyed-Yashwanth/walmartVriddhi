"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PrimaryButton } from "./buttons";
import { BannerSliderProps } from "@/types/types";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function BannerSlider({ slides }: BannerSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <AnimatedSection>
      <div className="relative mb-[150px] md:mb-10 lg:mb-16">
        {/* Desktop Slider */}
        <div className="relative h-[150px] md:h-[300px] lg:h-[420px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                href={slide.slide_link}
                target="_blank"
                className="absolute inset-0 rounded-lg overflow-hidden z-10"
              >
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Overlay gradient for desktop, except for 3rd slide and never on mobile */}
                {slide.overlay && index !== 2 && (
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-r w-[50%] from-black/50 from-40% opacity-60 pointer-events-none" />
                )}
              </Link>

              {/* Desktop Content */}
              {index === 2 ? (
                <div className="absolute inset-0 px-4 md:px-8 hidden md:flex flex-col justify-center items-center h-full w-full pb-8 pr-8 top-[35%] left-[10%] z-20">
                  {slide.overlay && (
                    <PrimaryButton
                      href={slide.slide_link}
                      text="Register for MSME SUMMIT"
                      className="bg-white text-[#0053e2]"
                    />
                  )}
                </div>
              ) : (
                <div className="absolute inset-0 px-4 md:px-8 hidden md:flex items-center justify-start h-full z-20">
                  <div className="text-white max-w-xl flex flex-col justify-center items-start">
                    <h1 className="text-[36px] font-bold mb-2 whitespace-normal">
                      {slide.title}
                    </h1>
                    <p className="text-sm font-light mb-4 w-[360px]">
                      {slide.description}
                    </p>
                    {slide.overlay && (
                      <PrimaryButton
                        href={slide.slide_link}
                        text="Register for Walmart Vriddhi"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* Mobile Content: absolutely positioned below the image, not overlayed */}
          <div
            className="md:hidden absolute left-4 right-4 z-30 rounded-lg h-[200px]"
            style={{ bottom: "-200px" }}
          >
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              {/* No overlays for mobile view */}
              <h2 className="text-sm font-semibold mb-2 text-gray-900 text-center">
                {slides[currentSlide].title}
              </h2>
              <p className="text-sm mb-4 text-gray-700 text-center">
                {slides[currentSlide].description}
              </p>
              {slides[currentSlide].overlay && (
                <PrimaryButton
                  href={slides[currentSlide].slide_link}
                  text="Register for Walmart Vriddhi"
                  className="text-white"
                />
              )}
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
