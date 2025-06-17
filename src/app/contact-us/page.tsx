"use client";

import Image from "next/image";
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";

function page() {
  return (
    // <Suspense fallback={<>Loading...</>}>
    <div>
      <AnimatedSection>
        <div className="">
          <div className="w-full">
            <div className="relative w-full h-[150px] md:h-[300px] lg:h-[420px] rounded-xl overflow-hidden">
              <Image
                src="/images/contact/banner.png"
                alt="Conatct us banner image"
                className="object-cover object-top"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r w-full md:w-[65%] lg:w-[50%] from-black/80 from-40% opacity-60" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-4 sm:px-8 md:px-12 lg:left-12 max-w-full md:max-w-lg lg:max-w-xl text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">
                    Contact Us
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="relative w-full rounded-xl overflow-hidden my-4 sm:my-10 md:my-10 bg-[#F3F3F3] py-10">
          <div className="px-4 md:px-12">
            <div>
              <Image
                src="/images/envelop.svg"
                alt="email"
                height={50}
                width={50}
                className="w-[70px] md:w-[100px] mx-auto mb-5"
              />
              <h2 className="text-xl md:text-2xl text-center mb-5 leading-tight">
                To Learn More About the Program and Be Part of Our Growth
                Journey
              </h2>
              <div className="space-y-4 text-gray-700 text-base w-full md:w-[65%] lg:w-[50%] mx-auto">
                <p className="grid grid-cols-10 items-center justify-center gap-2 md:gap-6">
                  <span className="col-span-10 md:col-span-5 text-center md:text-right">
                    For more information:{" "}
                  </span>
                  <a
                    href="mailto:contactus@walmartvriddhi.org"
                    className="hover:text-[#0053e2] text-center md:text-left col-span-10 md:col-span-5"
                  >
                    contactus@walmartvriddhi.org
                  </a>
                </p>
                <p className="grid grid-cols-10 items-center justify-center gap-2 md:gap-6">
                  <span className="col-span-10 md:col-span-5 text-center md:text-right">
                    For program related queries:{" "}
                  </span>
                  <a
                    href="mailto:info@i2ifoundation.org"
                    className="hover:text-[#0053e2] text-center md:text-left col-span-10 md:col-span-5"
                  >
                    info@i2ifoundation.org
                  </a>
                </p>
                <p className="grid grid-cols-10 items-center justify-center gap-2 md:gap-6">
                  <span className="col-span-10 md:col-span-5 text-center md:text-right">
                    For any media queries:{" "}
                  </span>
                  <a
                    href="mailto:wmintmediainquiry@wal-mart.com"
                    className="hover:text-[#0053e2] text-center md:text-left col-span-10 md:col-span-5"
                  >
                    wmintmediainquiry@wal-mart.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
    // </Suspense>
  );
}

export default page;
