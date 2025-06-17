"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "./buttons";
import { NarrativesSliderProps } from "@/types/types";

export default function NarrativesSlider({ slides }: NarrativesSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (slides?.length || 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-gray-50 rounded-lg p-4 sm:p-6 my-4 sm:my-6 relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`transition-opacity duration-500 ${
            index === currentSlide ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8">
            <div className="relative w-full h-[200px] md:w-[320px] md:h-[320px]">
              {slide.acf.author_profile_new?.url && (
                <Image
                  src={
                    slide.acf.author_profile_new?.url ||
                    slide?._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                  }
                  alt={slide.title.rendered}
                  fill
                  className="object-cover object-top rounded-xl"
                />
              )}
            </div>
            <div className="flex flex-col justify-between flex-1 mt-4 md:mt-0">
              <div className="space-y-4 md:space-y-8">
                <h2 className="text-xl md:text-2xl font-normal">
                  {slide.title.rendered}
                </h2>

                {slide.acf && (
                  <div>
                    <Link
                      href={`#${slide.acf.author_name}`}
                      className="text-blue-600 hover:underline"
                    >
                      {slide.acf.author_name}
                    </Link>
                    <p className="text-sm text-gray-600">
                      {slide.acf.author_designation}
                    </p>
                  </div>
                )}
                <SecondaryButton
                  href={`/success-stories/${slide.slug}`}
                  text="Read more"
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-[#0053e2]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
