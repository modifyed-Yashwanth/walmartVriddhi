"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchTestimonials } from "@/services/testimonialService";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import StaggeredAnimatedSection from "./StaggeredAnimatedSection";

// Refine the TestimonialData interface based on expected structure and usage
interface TestimonialData {
  id: number;
  title?: { rendered: string }; // Make optional if not always present
  content?: { rendered: string; protected: boolean }; // Make optional if not always present
  acf?: {
    // Make acf optional as well
    testimonial?: string;
    name?: string;
    business?: string;
    profile_banner?: { url?: string; ID?: number }; // Make properties optional
  };
}

const TestimonialSlider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { data, isLoading, isError } = useQuery<TestimonialData[]>({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  if (isLoading) {
    return (
      <div className="w-full bg-[#F3F3F3] py-6 md:py-8 rounded-xl px-4 md:px-8 flex justify-center items-center min-h-[200px] md:min-h-[300px]">
        <span className="text-gray-500 text-sm md:text-base">
          Loading testimonials...
        </span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full bg-[#F3F3F3] py-6 md:py-8 rounded-xl px-4 md:px-8 flex justify-center items-center min-h-[200px] md:min-h-[300px]">
        <span className="text-red-500 text-sm md:text-base">
          Failed to load testimonials.
        </span>
      </div>
    );
  }

  return (
    <AnimatedSection delay={0.3}>
      <div className="py-10">
        <div className="w-full bg-[#F3F3F3] py-6 md:py-8 rounded-xl px-4 md:px-8">
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              modules={[Pagination, Navigation]}
              pagination={{
                clickable: true,
                el: ".custom-dots",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              spaceBetween={30}
              slidesPerView={1}
              className="pb-8 md:pb-12"
            >
              {data &&
                data.map((t: TestimonialData) => (
                  <SwiperSlide key={t.id}>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-[#F3F3F3]">
                      <div className="w-full md:w-1/2 text-center h-[200px] md:h-[300px] lg:h-[420px] rounded-xl overflow-hidden relative">
                        <Image
                          src={
                            t.acf?.profile_banner?.url ||
                            "/images/testimonials.jpg"
                          }
                          width={420}
                          height={420}
                          alt={t.acf?.name || "Testimonial"}
                          className="rounded-xl object-cover object-top mx-auto h-full"
                        />
                      </div>
                      <StaggeredAnimatedSection
                        className="w-full md:w-1/2 text-left space-y-3 md:space-y-4"
                        staggerDelay={0.15}
                      >
                        <p
                          className="text-sm md:text-base lg:text-lg font-medium"
                          dangerouslySetInnerHTML={{
                            __html:
                              t.acf?.testimonial || t.content?.rendered || "",
                          }}
                        />
                        <div className="flex items-center mt-2 md:mt-4">
                          <div>
                            <div className="font-semibold text-xs md:text-sm lg:text-base text-black">
                              {t.acf?.name || t.title?.rendered}
                            </div>
                            <div className="text-xs md:text-sm">
                              {t.acf?.business}
                            </div>
                          </div>
                          <div className="h-6 md:h-8 w-px bg-gray-300 mx-3 md:mx-4"></div>
                        </div>
                      </StaggeredAnimatedSection>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination dots and navigation buttons */}
            <div className="flex items-center justify-between mt-4 md:mt-6 px-2 md:px-4">
              <div className="custom-dots flex gap-1 md:gap-2">
                {data?.map((_, index) => (
                  <button
                    key={index}
                    className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-400"
                    onClick={() => swiperRef.current?.slideTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-1 md:gap-2">
                <button
                  onClick={handlePrev}
                  disabled={isBeginning}
                  className="p-1 md:p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-transparent transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <button
                  onClick={handleNext}
                  disabled={isEnd}
                  className="p-1 md:p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-transparent transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialSlider;
