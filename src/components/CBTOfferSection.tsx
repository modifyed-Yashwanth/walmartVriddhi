"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import SwiperCore from "swiper";
import AnimatedSection from "./AnimatedSection";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CoursesSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Effect to update button states based on swiper events
  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (swiperInstance) {
      const updateButtonStates = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };

      // Update state on init, slide change, and resize
      swiperInstance.on("init", updateButtonStates);
      swiperInstance.on("slideChange", updateButtonStates);
      swiperInstance.on("resize", updateButtonStates); // Also update on resize

      // Initial state update (important for when component mounts already past the beginning)
      // A small delay might be needed to ensure Swiper is fully rendered and calculated
      const timeoutId = setTimeout(updateButtonStates, 0);

      // Clean up event listeners and timeout
      return () => {
        swiperInstance.off("init", updateButtonStates);
        swiperInstance.off("slideChange", updateButtonStates);
        swiperInstance.off("resize", updateButtonStates);
        clearTimeout(timeoutId);
      };
    }
  }, []); // Empty dependency array: runs once after initial render

  // Effect to ensure navigation is linked/updated after refs are available
  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (swiperInstance && swiperInstance.navigation) {
      // Swiper's update() can sometimes relink/re-evaluate navigation elements
      swiperInstance.navigation.update();
      // Also ensure initial state is correctly set after update
      const timeoutId = setTimeout(() => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, []); // Depend on the refs and swiper instance

  const courses = [
    {
      id: 1,
      title: "No set up fees",
      image: "/images/No-set-up_fees.svg",
    },
    {
      id: 2,
      title: "No SKU limitations to list products",
      image: "/images/No-SKU.svg",
    },
    {
      id: 3,
      title: "Reach over 100 million unique Walmart.com visitors each month",
      image: "/images/Reach-over.svg",
    },
    {
      id: 4,
      title: "Market expansion",
      image: "/images/Market-Expansion.svg",
    },
    {
      id: 5,
      title: "Seamless shipping",
      image: "/images/Seamless-shipping.svg",
    },
    {
      id: 6,
      title: "Easy payouts",
      image: "/images/easy-payout.svg",
    },
  ];

  return (
    <AnimatedSection delay={0.3}>
      <div className="pt-10 px-4">
        {/* Courses Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-end mb-4 gap-2 z-50 pointer-events-auto">
            <button
              ref={prevRef}
              className="w-20 h-10 rounded-4xl border border-gray-300 hover:border-[#0053e2] flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
              aria-label="Previous slide"
              disabled={isBeginning}
            >
              <ArrowLeft
                className={`w-5 h-5 group-hover:text-[#0053e2] ${
                  isBeginning ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </button>
            <button
              ref={nextRef}
              className="w-20 h-10 rounded-4xl border border-gray-300 hover:border-[#0053e2] flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
              aria-label="Next slide"
              disabled={isEnd}
            >
              <ArrowRight
                className={`w-5 h-5 group-hover:text-[#0053e2] ${
                  isEnd ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </button>
          </div>

          {/* Swiper Container */}
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="courses-swiper py-[50px]"
          >
            {courses.map((course) => (
              <SwiperSlide
                key={course.id}
                style={{ background: "transparent" }}
                className="relative overflow-visible p-[20px]"
              >
                <div className="relative">
                  <Image
                    src="/images/CBT-icon-min.png"
                    alt="CBT-icon"
                    width={200}
                    height={200}
                    className="w-full"
                  />
                  <p className="absolute inset-0 flex justify-center items-center w-40 mx-auto text-center text-[14px]">
                    {course.title}
                  </p>
                  <Image
                    src={course.image}
                    alt="CBT Icon"
                    width={40}
                    height={40}
                    className="absolute inset-y-0 right-[18%] top-[18%] w-[40px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CoursesSection;
