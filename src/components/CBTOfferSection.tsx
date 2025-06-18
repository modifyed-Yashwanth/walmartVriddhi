"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import SwiperCore from "swiper";
import AnimatedSection from "./AnimatedSection";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CoursesSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (swiperInstance) {
      const updateButtonStates = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };

      swiperInstance.on("init", updateButtonStates);
      swiperInstance.on("slideChange", updateButtonStates);
      swiperInstance.on("resize", updateButtonStates);

      const timeoutId = setTimeout(updateButtonStates, 0);

      return () => {
        swiperInstance.off("init", updateButtonStates);
        swiperInstance.off("slideChange", updateButtonStates);
        swiperInstance.off("resize", updateButtonStates);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (swiperInstance?.navigation) {
      swiperInstance.navigation.update();
      const timeoutId = setTimeout(() => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, []);

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
        <div className="relative md:pb-0">
          {/* Extra space for bullets */}
          {/* Navigation Buttons - hidden on mobile */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-40px] right-[-40px] flex justify-between z-20 pointer-events-none hidden md:flex">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#0053e2] flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer group pointer-events-auto"
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
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#0053e2] flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer group pointer-events-auto"
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
          {/* Swiper Component */}
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
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
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="courses-swiper py-[50px] px-4 sm:px-12"
          >
            {courses.map((course) => (
              <SwiperSlide
                key={course.id}
                style={{ background: "transparent" }}
                className="relative overflow-visible p-[20px] mb-6"
              >
                <div className="relative w-[90%] mx-2 flex justify-center items-center">
                  <Image
                    src="/images/CBT-icon-min.png"
                    alt="CBT-icon"
                    width={120}
                    height={120}
                    className="w-full"
                  />
                  <p className="absolute inset-0 flex justify-center items-center mx-auto text-center text-[12px] sm:text-[13px] lg:text-[16px] px-2 w-[80%]">
                    {course.title}
                  </p>

                  <Image
                    src={course.image}
                    alt="CBT Icon"
                    width={50}
                    height={50}
                    className="absolute inset-y-0 right-[15%] top-[15%] w-[50px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Pagination Dots Styles */}
          <style jsx global>{`
            .swiper-pagination {
              position: absolute !important;
              bottom: -24px !important; /* Push bullets outside the slide visually */
              left: 50% !important;
              transform: translateX(-50%);
              display: flex !important;
              justify-content: center;
              gap: 6px;
              z-index: 10;
              width: 100%;
              pointer-events: none;
            }

            .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background-color: #d1d5db;
              opacity: 1;
              border-radius: 9999px;
              transition: background-color 0.3s ease;
              pointer-events: auto;
            }

            .swiper-pagination-bullet-active {
              background-color: #0053e2;
            }

            @media (min-width: 768px) {
              .swiper-pagination {
                display: none !important;
              }
            }
          `}</style>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CoursesSection;
