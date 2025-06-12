import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

function AboutPageInfographic() {
  const [active, setActive] = useState<
    "walmart" | "flipkart" | "walmartMarketplace"
  >("walmart");
  const sectionData = {
    walmart: {
      description:
        "Walmart is committed to a future where retail in India is a mix of shopping experiences that best serve Indian consumers, suppliers, producers and retailers.",
    },
    flipkart: {
      description:
        "Flipkart offers Indian sellers a strong platform to reach domestic customers with end-to-end eCommerce solutions and logistics.",
    },
    walmartMarketplace: {
      description:
        "Walmart Marketplace allows third-party sellers to list their items on Walmart’s website. MSMEs have the unique opportunity to reach over 100 million unique Walmart.com visitors each month.",
    },
  };
  return (
    <section className="px-4 md:px-12 pb-12 pt-5 md:pt-12 text-center mx-0 sm:mx-4 md:mx-8 lg:mx-[100px]">
      <div className="rounded-lg py-3 px-4 bg-[#f3f3f3] mb-5">
        <div className="max-w-3xl mx-auto transition-all duration-300 ease-in-out">
          <p className="text-gray-700 text-base">
            {sectionData[active].description}
          </p>
        </div>
      </div>

      {/* Arrow indicators */}
      {active === "walmart" && (
        <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out hidden lg:block">
          <Image
            src="/images/marketplace-arrow.png"
            alt="Walmart Arrow"
            width={7}
            height={7}
          />
        </div>
      )}
      {active === "flipkart" && (
        <div className="absolute left-[10%] md:left-[28%] lg:left-[35%] -translate-x-1/2 transition-all duration-500 ease-in-out hidden lg:block">
          <Image
            src="/images/flipkart-arrow.png"
            alt="Flipkart Arrow"
            width={75}
            height={100}
          />
        </div>
      )}
      {active === "walmartMarketplace" && (
        <div className="absolute -right-[10%] md:right-[18%] lg:right-[30%] -translate-x-1/2 transition-all duration-500 ease-in-out hidden lg:block">
          <Image
            src="/images/wholesale-arrow.png"
            alt="Wholesale Arrow"
            width={75}
            height={100}
          />
        </div>
      )}

      {/* Interactive Icons */}
      <div className="relative flex justify-between items-end md:gap-0 mt-25 lg:mt-40 max-w-[500px] md:max-w-[420px] lg:max-w-[500px] mx-auto">
        {/* Flipkart */}
        <div
          onMouseEnter={() => setActive("flipkart")}
          className={clsx(`relative top-0 w-[120px] md:w-[130px] lg:w-[180px] aspect-square cursor-pointer transform duration-300 hover:scale-130 ${active == "flipkart" ? "scale-130" : ''}`)}
        >
          <Image
            src="/images/flipkart-shape.png"
            alt="Flipkart"
            fill
            className="object-contain"
          />
          <p className="absolute left-[50%] top-[50%] -translate-y-[0%] -translate-x-[50%] text-white text-[10px]">
            Flipkart
          </p>
        </div>

        {/* Walmart */}
        <div
          onMouseEnter={() => setActive("walmart")}
          className={clsx(
            `relative w-[120px] md:w-[130px] lg:w-[180px] aspect-square cursor-pointer transform duration-300 ${active == "walmart" ? "scale-130" : ''}`
          )}
        >
          <Image
            src="/images/walmart-shape.png"
            alt="Walmart"
            height={150}
            width={350}
            className="absolute -top-10 inset-x-0 "
          />
          <p className="absolute -top-3 md:-top-3 inset-x-0 text-white h-full text-[10px]">
            Walmart
          </p>
        </div>

        {/* Wholesale */}
        <div
          onMouseEnter={() => setActive("walmartMarketplace")}
          className={clsx(
            `relative w-[120px] md:w-[130px] lg:w-[180px] aspect-square cursor-pointer transform duration-300 ${active == "walmartMarketplace" ? "scale-130" : ''}`
          )}
        >
          <Image
            src="/images/wholesale-shape.png"
            alt="Wholesale"
            fill
            className="object-contain"
          />
          <p className="absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] text-white text-[10px]">
            Walmart <br />
            Marketplace
          </p>
        </div>

        {/* Brand Logos */}
        {/* {active === "walmart" && ( */}
        <div className="absolute left-[30%] md:left-[35%] bottom-[20%] text-center inline-table">
          <Image
            src="/images/Walmart-Vriddhi-logo.png"
            alt="Walmart Vriddhi Logo"
            width={120}
            height={100}
            className="md:w-[150px] mx-auto"
          />
        </div>
        {/* )} */}
      </div>
    </section>
  );
}
export default AboutPageInfographic;
