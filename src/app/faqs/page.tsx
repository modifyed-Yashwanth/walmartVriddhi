"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SecondaryButton } from "@/components/buttons";
import AnimatedSection from "@/components/AnimatedSection";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0); // first FAQ active
  const [activeTab, setActiveTab] = useState("Lorem Ipsum");
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "Lorem Ipsum",
      question: "What services do you offer?",
      answer:
        "We offer web design, SEO, social media marketing, Google Ads management, and branding services tailored to grow your business.",
    },
    {
      category: "Lorem Ipsum",
      question: "What services do you offer?",
      answer:
        "We offer web design, SEO, social media marketing, Google Ads management, and branding services tailored to grow your business.",
    },
    {
      category: "Lorem Ipsum2",
      question: "How can I get a quote?",
      answer:
        "You can contact us through our website's contact form or email us directly with your project details.",
    },
    {
      category: "Lorem Ipsum3",
      question: "Do you provide website maintenance services?",
      answer:
        "Yes, we offer affordable and reliable website maintenance packages for all types of businesses.",
    },
  ];

  // Filter FAQs based on active tab and search term
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.category === activeTab &&
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <>
      {/* Hero Section */}
      <AnimatedSection>
        <div className="relative w-full h-[150px] md:h-[300px] lg:h-[420px] rounded-xl overflow-hidden md:mb-10">
          <Image
            src="/images/faqs-banner.jpg"
            alt="faqs-banner"
            className="object-cover"
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
        <div className="max-w-4xl mx-auto py-6 md:px-6">
          <h2 className="text-2xl md:text-4xl text-center mb-10">
            Search and Explore Categories of Frequently Asked Questions
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
            <SecondaryButton text="Search Faqs" className="bg-[#0053e2]" />
          </div>

          {/* Tabs */}
          <hr className="my-6 border-1 border-gray-300 w-full" />
          <div className="block md:flex gap-12 justify-center text-center mb-6 md:pb-10 pt-5">
            {["Lorem Ipsum", "Lorem Ipsum2", "Lorem Ipsum3"].map((tab) => (
              <SecondaryButton
                key={tab}
                text={tab}
                className={`mb-4 md:mb-0 ${
                  activeTab === tab ? "bg-[#0053e2] text-white" : ""
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveIndex(0); // reset to first FAQ active
                }}
              />
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <p className="text-center text-gray-500">No FAQs found.</p>
            ) : (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full text-left p-4 flex justify-between items-center focus:outline-none cursor-pointer ${
                      activeIndex === index ? "bg-[#E6F2FA]" : ""
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        activeIndex === index ? "text-[#0053E2]" : ""
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span>
                      {activeIndex === index ? (
                        <svg
                          className="w-4 h-4 text-[#0053E2] dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 8"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 8"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="p-4 border-t">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
