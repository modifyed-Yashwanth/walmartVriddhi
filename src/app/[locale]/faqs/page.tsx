"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SecondaryButton } from "@/components/buttons";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/data";
import Seo from "@/components/misc/Seo";

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("About Walmart Vriddhi");
  const [searchTerm, setSearchTerm] = useState("");
  const [openItem, setOpenItem] = useState<string | null>(null); // <-- For tracking active accordion item

  // Filter FAQs based on active tab and search term
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.category === activeTab &&
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Seo
        title="Frequently Asked Questions - Walmart Vriddhi"
        description="Find answers to common questions about Walmart Vriddhi, MSME support, marketplace onboarding, program benefits, and how to get started."
        url="https://walmart-vriddhi.vercel.app/faqs"
        image="/favicon/android-chrome-192x192.png"
        structuredData={{
          "@context": "https://schema.org/",
          "@type": "WebSite",
          name: "walmartvriddhi",
          url: "https://www.walmartvriddhi.org/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.walmartvriddhi.org/{search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      {/* Hero Section */}
      <AnimatedSection>
        <div className="relative w-full h-[150px] md:h-[300px] lg:h-[420px] rounded-xl overflow-hidden md:mb-10">
          <Image
            src="/images/faqs/faq-banner.jpg"
            alt="faqs-banner"
            className="object-cover object-top"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r w-full md:w-[65%] lg:w-[50%] from-black/0 from-40% opacity-60" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-4 sm:px-8 md:px-12 lg:left-12 max-w-full md:max-w-lg lg:max-w-xl text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 leading-tight">
                {/* Frequently Asked Questions */}
              </h2>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQs Section */}
      <AnimatedSection>
        <div className="max-w-6xl mx-auto py-6 md:px-6">
          <h2 className="text-2xl md:text-4xl text-center mb-10">
            Frequently Asked Questions
          </h2>

          {/* Search Bar */}
          <div className="block md:flex justify-center text-center gap-10 mb-10">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-1 border-[#ccc] rounded-full px-4 py-2 w-full md:w-[50%] mb-4 md:mb-0 focus:outline-none"
            />
            <SecondaryButton text="Search FAQs" className="bg-[#0053e2]" />
          </div>

          {/* Tabs */}
          <hr className="my-6 border-1 border-gray-300 w-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 md:px-2 justify-items-center mb-6 md:pb-10 pt-5">
            {[
              "About Walmart Vriddhi",
              "Program Benefits and Implementation",
              "Market Access and Opportunities",
              "Program Structure and Curriculum",
              "Application Process",
              "Support and Assistance",
            ].map((tab) => (
              <SecondaryButton
                key={tab}
                text={tab}
                className={`h-[48px] min-w-[350px] text-sm md:text-base whitespace-normal text-center lg:font-[400] ${
                  activeTab === tab ? "bg-[#0053e2] text-white" : ""
                }`}
                onClick={() => setActiveTab(tab)}
                variant={activeTab === tab ? "primary" : "secondary"}
              />
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 min-h-[200px]">
            {filteredFaqs.length === 0 ? (
              <p className="text-center text-gray-500">No FAQs found.</p>
            ) : (
              <Accordion
                type="single"
                collapsible
                value={openItem ?? ""}
                onValueChange={(val) => setOpenItem(val)}
                className="w-full gap-2 flex flex-col"
              >
                {filteredFaqs.map((faq, index) => {
                  const itemValue = `item-${index}`;
                  const isActive = openItem === itemValue;

                  return (
                    <AccordionItem
                      key={index}
                      value={itemValue}
                      className="border rounded-lg overflow-hidden bg-white"
                    >
                      <AccordionTrigger
                        className={`px-4 hover:no-underline transition-colors duration-300 cursor-pointer ${
                          isActive ? "bg-blue-50" : "bg-white"
                        }`}
                      >
                        <span className="font-medium text-[#0053e2]">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="p-4 border-t">
                        <p className="text-gray-700 leading-5" dangerouslySetInnerHTML={{__html:faq.answer}} />
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            )}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
