"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react"; // Using lucide-react for icons
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import StaggeredAnimatedSection from "./StaggeredAnimatedSection";

interface AccordProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ title, children, isOpen, onToggle }: AccordProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 focus:outline-none cursor-pointer transition-colors duration-200"
      >
        <span className="font-semibold text-sm text-gray-700 uppercase tracking-wider">
          {title}
        </span>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={20} className="text-gray-500" />
        </div>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${contentHeight}px` }}
      >
        <div ref={contentRef} className="p-4 bg-white border-t border-gray-200">
          <p className="text-sm text-gray-600">{children}</p>
        </div>
      </div>
    </div>
  );
};

const ProgramOpportunitySection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Keep the first item open by default

  const accordionItems = [
    {
      title: "DEVELOP",
      content: "On-Demand Learning & Personalized Mentoring for MSMEs",
    },
    {
      title: "CONNECT",
      content: "Market Access & Onboarding Support with Flipkart Marketplace",
    },
    {
      title: "ENABLE",
      content: "Oppurtunities to scale businesses on eCommerce platforms",
    },
    {
      title: "GROW",
      content: "Platforms and networks towards building a thriving business",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection delay={0.3}>
      <div className="bg-[#F3F3F3] py-10 px-4 md:px-12 rounded-xl">
        <div className="lg:flex flex-col md:flex-row items-start md:space-x-12 lg:space-x-16 gap-10">
          {/* Left Column: Title and Accordion */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex flex-col justify-center">
            <StaggeredAnimatedSection className="mb-6" staggerDelay={0.2}>
              <h2 className="text-2xl md:text-4xl leading-tight">
                The Program Offers the <br className="hidden md:block" />
                Opportunity to
              </h2>
            </StaggeredAnimatedSection>
            <StaggeredAnimatedSection staggerDelay={0.15}>
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </StaggeredAnimatedSection>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/home-images/grow-your-business.jpg"
              alt="Program Opportunity"
              width={600} // required in next/image
              height={600} // required in next/image
              className="rounded-xl object-cover  max-h-[600px] max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProgramOpportunitySection;
