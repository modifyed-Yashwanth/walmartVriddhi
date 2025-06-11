"use client";

import Image from "next/image";
import { SecondaryButton } from "./buttons";
import AnimatedSection from "./AnimatedSection";
import StaggeredAnimatedSection from "./StaggeredAnimatedSection";

const features = [
  {
    id: 1,
    icon: "/images/learning-icon.svg",
    title: "Learning",
    description: "Gain the knowledge you need to grow.",
  },
  {
    id: 2,
    icon: "/images/market-connect.svg",
    title: "Market Connect",
    description: "Take your business to new heights online.",
  },
  {
    id: 3,
    icon: "/images/personalized-mentoring.svg",
    title: "Personalized Mentoring",
    description: "Start your journey with foundational e-commerce skills.",
  },
  {
    id: 4,
    icon: "/images/business-fundamentals.svg",
    title: "Business Fundamentals",
    description: "Gain the knowledge you need to grow.",
  },
  {
    id: 5,
    icon: "/images/advanced-business.svg",
    title: "Advanced Business",
    description: "Start your journey with foundational e-commerce skills.",
  },
];

export default function MSMEGrowth() {
  return (
    <AnimatedSection delay={0.2}>
      <section className="py-10 px-4 md:px-12 bg-[#F3F3F3] rounded-xl">
        {/* Header */}
        <StaggeredAnimatedSection
          className="text-center mb-16"
          staggerDelay={0.2}
        >
          <p className="md:text-xl mb-2">5 Simple Steps for You</p>
          <h2 className="text-2xl md:text-4xl mb-4">
            Unlock Your Potential with Our Training
          </h2>
          <p className="max-w-3xl mx-auto">
            Our training modules are designed to empower MSMEs with essential
            skills for online success. Explore a range of topics tailored to
            help you thrive in the digital marketplace.
          </p>
        </StaggeredAnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <StaggeredAnimatedSection
            className="lg:block md:flex md:gap-10 space-y-12"
            staggerDelay={0.5}
          >
            {features.slice(0, 2).map((feature) => (
              <div key={feature.id} className="text-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </StaggeredAnimatedSection>

          {/* Center Image */}
          <div className="text-center">
            <Image
              src="/images/msme-growth-journey.webp"
              alt="MSME Growth Journey"
              width={400}
              height={400}
              className="rounded-3xl mx-auto"
            />
          </div>

          {/* Right Column */}
          <StaggeredAnimatedSection
            className="lg:block md:flex md:gap-10 space-y-12"
            staggerDelay={0.3}
          >
            {features.slice(2, 4).map((feature) => (
              <div key={feature.id} className="text-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </StaggeredAnimatedSection>
        </div>

        {/* Bottom Feature */}
        <StaggeredAnimatedSection
          className="text-center mt-10"
          staggerDelay={0.5}
        >
          <div>
            <Image
              src={features[4].icon}
              alt={features[4].title}
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl mb-2">{features[4].title}</h3>
            <p className="mb-6 text-sm">{features[4].description}</p>
            <SecondaryButton href="/msme-growth-journey" text="View More" />
          </div>
        </StaggeredAnimatedSection>
      </section>
    </AnimatedSection>
  );
}
