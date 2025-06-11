"use client";
import React, { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const growthSteps = [
  {
    title: "Grow Domestically with Flipkart Incubation Support",
    description:
      "Start your journey with Flipkart – India's leading online marketplace",
    image: "/images/grow-domestically-with-flipkart-incubation-support.jpg",
  },
  {
    title: "Enterprise-specific Personalized Mentoring Support",
    description: "Personalized guidance from industry experts and mentors",
    image: "/images/Enterprise-specific Personalized Mentoring support (2).jpg",
  },
  {
    title: "Grow your Network with Walmart Vriddhi",
    description:
      "Walmart Vriddhi opens the doors to a network of business Support",
    image: "/images/Grow your network.jpg",
  },
  {
    title: "Your Success Awaits",
    description:
      "Celebrate your achievements and business growth with Walmart Vriddhi",
    image: "/images/Your Success Awaits.jpg",
  },
];

const GrowthJourney = () => {
  const stickyRef = useRef(null);
  const containerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyEl = stickyRef.current;
      const containerEl = containerRef.current;

      if (!stickyEl || !containerEl) return;

      // Don't apply sticky behavior on mobile screens
      if (window.innerWidth < 768) {
        setIsFixed(false);
        setIsBottom(false);
        return;
      }

      const stickyRect = stickyEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();

      if (containerRect.top <= 100) {
        if (containerRect.bottom <= stickyRect.height + 100) {
          setIsFixed(false);
          setIsBottom(true);
        } else {
          setIsFixed(true);
          setIsBottom(false);
        }
      } else {
        setIsFixed(false);
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatedSection delay={0.3}>
      <div className="py-10">
        <div className="max-w-[1500px] mx-auto">
          <div
            className="flex flex-col md:flex-row gap-16 relative"
            ref={containerRef}
          >
            {/* Left sticky column */}
            <div className="md:w-6/12 relative">
              <div
                ref={stickyRef}
                className={`${
                  isFixed
                    ? "md:fixed md:top-24 md:w-[40%]"
                    : isBottom
                    ? "md:absolute md:bottom-0 md:w-full"
                    : "relative md:w-full"
                }`}
              >
                <div className="w-full">
                  <h4 className="md:text-lg mb-2">Growth Journey</h4>
                  <h2 className="text-2xl lg:text-4xl mb-4 leading-snug">
                    Your Path to Success with Walmart Vriddhi
                  </h2>
                  <p className="text-sm md:text-base">
                    Enable your growth journey with personalized enterprise
                    tools & support. Here's how you grow with Walmart Vriddhi.
                  </p>
                </div>
              </div>
            </div>

            {/* Right scrollable steps */}
            <div className="md:w-6/12 space-y-10 border-l-2 border-black">
              {growthSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-4 pl-10 relative"
                >
                  <div className="absolute -left-[13px] top-1 w-6 h-6 bg-black rounded-full border-7 border-white"></div>
                  <h3 className="font-medium text-xl">{step.title}</h3>
                  <p className="text-sm md:text-base">{step.description}</p>
                  <div>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full lg:h-[80vh] rounded-xl object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default GrowthJourney;
