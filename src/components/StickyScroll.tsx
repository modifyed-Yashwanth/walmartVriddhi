"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const sections = [
  {
    title: "Grow domestically with<br/> Flipkart incubation support",
    description:
      "Begin your journey by registering today. Take the first step towards expanding your business.",
    imageUrl: "/images/grow-domestically-with-flipkart-incubation-support.jpg",
  },
  {
    title: "Enterprise specific<br/> Personalized Mentoring support",
    description:
      "Access our comprehensive training modules. Equip yourself with the knowledge to thrive online.",
    imageUrl: "/images/enterprise-specific.jpg",
  },
  {
    title: "Grow your Network<br/> with Walmart Vriddhi",
    description:
      "Start selling on Flipkart and reach millions of customers. Your marketplace awaits!",
    imageUrl: "/images/grow-your-network.jpg",
  },
  {
    title: "Your Success Awaits",
    description:
      "Celebrate your achievements and continue to grow. Join a community of thriving MSMEs.",
    imageUrl: "/images/your-success-awaits.jpg",
  },
];

export default function StickyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
        }
      });
    }, options);

    const sectionElements = document.querySelectorAll(".section-item");
    sectionElements.forEach((el) => {
      el.classList.add("opacity-0", "transition-opacity", "duration-500");
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Sticky Timeline */}
          <div
            ref={containerRef}
            className="lg:w-1/2 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]"
          >
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="section-item flex gap-4">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#005eff]" />
                    {index !== sections.length - 1 && (
                      <div className="w-0.5 h-24 bg-gray-200" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-medium mb-2"
                      dangerouslySetInnerHTML={{ __html: section.title }}
                    />
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Images */}
          <div className="lg:w-1/2">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="section-item">
                  <Image
                    src={section.imageUrl}
                    alt={section.title.replace(/<br\/>/g, " ")}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
