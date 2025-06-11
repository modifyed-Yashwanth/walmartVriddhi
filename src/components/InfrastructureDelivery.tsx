"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import StaggeredAnimatedSection from "./StaggeredAnimatedSection";

const data = [
  {
    title: "100+ Team Member",
    description: "MSMEs Engagement + Demand Generation Mechanism",
    image: "/images/100-team-member.svg",
  },
  {
    title: "Quality Assurance",
    description: "Robust Quality Assurance System",
    image: "/images/quality-assurance.svg",
  },
  {
    title: "48 Learning Module",
    description:
      "Business Fundamentals Advance and Export Supplier Development",
    image: "/images/learning-module.svg",
  },
  {
    title: "Technology Stack",
    description: "Vriddhi App, CRM, LMS, Order Management System",
    image: "/images/technology-stack.svg",
  },
];

const InfrastructureDelivery = () => {
  return (
    <AnimatedSection delay={0.3}>
      <div className="pb-10">
        <StaggeredAnimatedSection className="mb-6" staggerDelay={0.2}>
          <h2 className="text-2xl md:text-4xl text-left mb-2">
            Infrastructure & Delivery
          </h2>
          <p className="text-left mb-6">
            Focuses on the mechanisms, manpower, and systems that supported the
            program&apos;s execution.
          </p>
        </StaggeredAnimatedSection>

        <StaggeredAnimatedSection
          className="grid grid-cols-1 sm:grid-cols-2 gap-10"
          staggerDelay={0.15}
        >
          {data.map((item, index) => (
            <Card
              key={index}
              className="p-10 shadow-md rounded-2xl bg-[#F3F3F3] flex flex-col items-start gap-4"
            >
              <CardContent className="w-full flex flex-col items-start gap-4 p-0">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p>{item.description}</p>
                <div className="relative w-16 h-16 mt-5">
                  <Image
                    alt={item.title}
                    layout="fill"
                    objectFit="contain"
                    priority={true}
                    src={item.image}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredAnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default InfrastructureDelivery;
