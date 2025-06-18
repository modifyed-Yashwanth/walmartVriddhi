"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import SwiperCore from "swiper";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

const CourseSection = () => {
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
      title: "Introduction to Customers & Cross Border Trade",
      image: "/images/courses/card1.jpg",
    },
    {
      id: 2,
      title: "Legal Requirements and Compliance Issues",
      image: "/images/courses/card2.jpg",
    },
    {
      id: 3,
      title: "Business Ethics & Culture",
      image: "/images/courses/card3.jpg",
    },
    {
      id: 4,
      title: "Walmart Marketplace Business Growth Levers",
      image: "/images/courses/card4.jpg",
    },
    {
      id: 5,
      title: "Walmart Marketplace Onboarding & Seller Centre",
      image: "/images/courses/card5.jpg",
    },
    {
      id: 6,
      title: "FTP & Other Promotional Schemes",
      image: "/images/courses/card6.jpg",
    },
    {
      id: 7,
      title: "Packaging Logistics & Distribution",
      image: "/images/courses/Card7.jpg",
    },
    {
      id: 8,
      title: "FInancial & Forex Management",
      image: "/images/courses/card8.jpg",
    },
  ];

  return (
    <AnimatedSection delay={0.3}>
      <div className="py-10 px-4 md:px-12">
        <div className="relative md:pb-0">
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

          {/* Swiper */}
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
            pagination={{
              clickable: true,
            }}
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
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="courses-swiper py-[50px] px-4 sm:px-12"
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

          <div className="mx-auto text-center mt-2">
            <Link
              href={"https://supplieracademy.northpass.com/app"}
              target="_blank"
              className="text-[#0053e2] hover:underline"
            >
              Join the Walmart Supplier Academy
            </Link>
          </div>

          {/* Pagination Dot Styles */}
          <style jsx global>{`
            .swiper-pagination {
              position: absolute !important;
              bottom: 0px !important;
              left: 50% !important;
              transform: translateX(-50%);
              display: flex !important;
              justify-content: center;
              gap: 6px;
              z-index: 10;
              margin-bottom: 16px;
            }

            .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background-color: #d1d5db;
              opacity: 1;
              border-radius: 9999px;
              transition: background-color 0.3s ease;
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

export default CourseSection;
