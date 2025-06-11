import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const IMAGE_SIZE = 200; // px
const ANIMATION_DURATION = 400; // ms

const testimonials = [
  {
    image: "/images/Shivani-Agarwal.png",
    quote:
      "Walmart Vriddhi program has been that guiding light for many MSME owners like me. As a wholesale supplier for the company, I had the good fortune of signing up with the program, which was launched late last year, to train and prepare us to participate in the domestic supply chains.",
    name: "Shivani Agarwal",
    role: "Founder, Scraft products Pvt. Ltd.",
  },
  {
    image: "/images/Harpreet-Singh.png",
    quote:
      "Through Walmart Vriddhi, I’ve learnt a lot about different aspects of modern business, including digital sales and developing products for consumer markets. As a result, we are expanding our existing portfolio to include consumer goods and targeting online sales as our main growth channel.",
    name: "Harpreet Singh",
    role: "Owner, Shalimar Rubber & Plastic Industries, Kundli - Haryana",
  },
  {
    image: "/images/Sagar-Kalra.png",
    quote:
      "The clarity of purpose and the guidance that we received from Walmart Vriddhi at this crucial time benefited our internal operations as well as sales. It helped us set an example for others. We have aligned our systems with Walmart’s, and we can now focus on innovation.”",
    name: "Sagar Kalra",
    role: "Owner, Arch Fab, Panipat - Haryana",
  },
];

function GrowthTestimonialSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [step, setStep] = useState<"idle" | "hideData" | "showData">("idle");
  const total = testimonials.length;

  // Animation handlers (primarily for desktop horizontal layout)
  const handleNext = () => {
    if (step !== "idle") return;
    setStep("hideData");
    setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % total);
      setStep("showData");
      setTimeout(() => setStep("idle"), ANIMATION_DURATION);
    }, ANIMATION_DURATION);
  };
  const handlePrev = () => {
    if (step !== "idle") return;
    setStep("hideData");
    setTimeout(() => {
      setActiveIdx((prev) => (prev - 1 + total) % total);
      setStep("showData");
      setTimeout(() => setStep("idle"), ANIMATION_DURATION);
    }, ANIMATION_DURATION);
  };

  return (
    <div className="w-full bg-[#F3F3F3] py-10 flex flex-col rounded-xl overflow-hidden relative">
      <h2 className="text-2xl md:text-4xl font-[300] mb-2 px-4 lg:px-12 absolute left-0 top-9">
        Trusted by MSMEs
      </h2>

      {/* Desktop Layout */}
      <div className="hidden lg:block w-full">
        {/* Navigation and Info */}
        <div className="flex justify-between gap-2 w-full px-[10%]">
          <div className="text-center font-thin text-sm mb-10 mt-2"></div>
          <div className="flex justify-between gap-2">
            <button
              onClick={handlePrev}
              disabled={step !== "idle"}
              className="w-20 h-10 rounded-4xl border border-gray-300 hover:border-[#0053e2] flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-[#0053e2]" />
            </button>
            <button
              onClick={handleNext}
              disabled={step !== "idle"}
              className="w-20 h-10 rounded-4xl border border-gray-300 hover:border-[#0053e2] flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[#0053e2]" />
            </button>
          </div>
        </div>
        {/* Testimonial Items Container (Desktop) */}
        <div
          className="relative w-full mx-auto flex flex-row items-center justify-center gap-6 min-h-[220px] py-4 overflow-hidden"
          style={{ height: "auto" }}
        >
          {testimonials.map((testimonial, idx) => (
            <React.Fragment key={idx}>
              <div
                className="rounded-2xl overflow-hidden shadow-md flex-shrink-0 cursor-pointer opacity-80 hover:opacity-100"
                style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                onClick={() => step === "idle" && setActiveIdx(idx)}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={IMAGE_SIZE}
                  height={IMAGE_SIZE}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Data card only for active image on desktop */}
              {activeIdx === idx && (
                <div
                  className={`p-2 font-thin text-sm text-left ml-4 mr-4 flex flex-col justify-between flex-shrink-0
                    ${
                      step === "hideData"
                        ? "opacity-0 translate-x-4"
                        : step === "showData"
                        ? "opacity-100 translate-x-0"
                        : "opacity-100 translate-x-0"
                    }
                    transition-all duration-400 ease-in-out
                  `}
                  style={{
                    minWidth: 260,
                    maxWidth: 600,
                    height: "auto", // Auto height on desktop
                    flexGrow: 1,
                  }}
                >
                  <p
                    className="text-base md:text-lg text-gray-800 mb-4 truncate text-wrap overflow-hidden"
                    title={testimonial.quote}
                  >
                    {testimonial.quote}
                  </p>
                  <div>
                    <span className="text-[#0053E2] font-medium hover:underline cursor-pointer">
                      {testimonial.name}
                    </span>
                    <div className="text-gray-500 text-sm mt-1">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full px-4 mt-14 lg:mt-0">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-4 mb-8 last:mb-0"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-md flex-shrink-0"
              style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-2 font-thin text-sm text-center flex flex-col justify-between w-full">
              <p
                className="text-base text-gray-800 mb-4"
                title={testimonial.quote}
              >
                {testimonial.quote}
              </p>
              <div>
                <span className="text-[#0053E2] font-medium">
                  {testimonial.name}
                </span>
                <div className="text-gray-500 text-sm mt-1">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GrowthTestimonialSlider;
