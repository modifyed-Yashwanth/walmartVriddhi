"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import SwiperCore from "swiper";
import AnimatedSection from "./AnimatedSection";

const CourseSection = () => {
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
      swiperInstance.on("resize", updateButtonStates);

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
      title: "Introduction to Customers & Cross Border Trade",
      image: "/images/Financial & Foreign Exchange management (1).jpg",
    },
    {
      id: 2,
      title: "Legal Requirements and Compliance Issues",
      image: "/images/Legal-requirements-compliance-issues.jpg",
    },
    {
      id: 3,
      title: "Business Ethics & Culture",
      image: "/images/Business Ethics and Culture.jpg",
    },
    {
      id: 4,
      title: "Walmart Marketplace Business Growth Levers",
      image: "/images/Introduction to custom and cross borer state.jpg",
    },
    {
      id: 5,
      title: "Walmart Marketplace Onboarding & Seller Centre",
      image: "/images/Foreign-Trade-Policy-other-promotional-schemes.jpg",
    },
    {
      id: 6,
      title: "FTP & Other Promotional Schemes",
      image: "/images/FTP & Other Promotional Schemes.jpg",
    },
    {
      id: 7,
      title: "Packaging Logistics & Distribution",
      image: "/images/Packaging Logistics & Distribution.jpg",
    },
    {
      id: 7,
      title: "FInancial & Forex Management",
      image: "/images/Financial & Forex Management.jpg",
    },
  ];

  return (
    <AnimatedSection delay={0.3}>
      <div className="py-10 px-4 md:px-12">
        <div className="relative">
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
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="courses-swiper py-[50px]"
          >
            {courses.map((course, index) => (
              <SwiperSlide
                key={index}
                style={{ background: "transparent" }}
                className="relative overflow-visible md:px-[20px] py-[20px]"
              >
                <div className="hover:rounded-lg hover:border-gray-200 hover:bg-white hover:border-2 group relative hover:scale-[112%] transition-all duration-300 ease-in-out min-h-[320px]">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover shadow-lg rounded-lg overflow-hidden"
                    />
                  </div>
                  <div className="py-6 text-left group-hover:text-[#0053e2] group-hover:px-2 transition-all duration-300">
                    <p className="text-gray-500 text-sm">Course</p>
                    <h3 className="text-lg group-hover:text-[16px] text-gray-900 my-4">
                      {course.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CourseSection;
