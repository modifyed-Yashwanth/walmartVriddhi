"use client";

import React, { useState } from "react";
import Image from "next/image";
import SpeakerCard from "@/components/SpeakerCard";
import AnimatedSection from "@/components/AnimatedSection";

function Page() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="">
        <div className="w-full">
          <AnimatedSection>
            <div className="relative w-full rounded-xl overflow-hidden">
              <Image
                src="/images/MSME-2024-banner.jpg"
                alt="MSME-2024-banner"
                className="w-full h-full"
                height={625}
                width={1200}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative w-full overflow-hidden space-y-6 sm:space-y-10 md:space-y-14 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
                <div className="md:col-span-6">
                  <h2 className="text-2xl md:text-4xl">
                    Walmart Vriddhi MSME Summit 2024
                  </h2>
                  <div className="flex items-center jusify-between gap-4 mt-5 w-full">
                    <p className="flex items-center jusify-center gap-2">
                      <Image
                        src="/images/Pin-icon.svg"
                        alt="Location"
                        height={16}
                        width={16}
                      />
                      New Delhi
                    </p>
                    <p className="flex items-center jusify-center gap-2">
                      <Image
                        src="/images/calendar-solid-icon.svg"
                        alt="Location"
                        height={16}
                        width={16}
                      />
                      February 13, 2024
                    </p>
                  </div>
                </div>
                <div className="md:col-span-4 flex items-center">
                  <div className="flex flex-col justify-between h-full">
                    <p className="mb-[10px]">
                      Experienced leaders from Flipkart, Walmart Vriddhi,
                      Walmart, Swasti, and other industry experts shared
                      valuable tips on how to grow businesses in the digital
                      world during informative sessions.
                    </p>
                    {showMore && (
                      <p>
                        By connecting, growing, and accelerating Walmart and
                        Flipkart&apos;s ongoing supplier development
                        initiatives, the Walmart Vriddhi program sought to
                        empower Indian MSMEs, artisans, weavers, and
                        craftspeople for growth and have a lasting effect.
                      </p>
                    )}
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="underline text-[#0053E2] cursor-pointer text-left"
                    >
                      {showMore ? "Read less" : "Read more"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection>
        <div className="mx-0 bg-[#F3F3F3] py-10 px-4 sm:px-6 md:px-8 rounded-xl">
          <div className="w-full">
            <div className="sm:mx-4 md:mx-0 lg:mx-8 rounded-xl">
              <div className="relative w-full rounded-lg overflow-hidden space-y-6 sm:space-y-10 md:space-y-14">
                <h2 className="text-2xl md:text-4xl">Summit Highlights</h2>
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-25">
                  <div className="md:col-span-5">
                    <Image
                      src="/images/Summit-Highlights.jpg"
                      alt="Summit Highlights"
                      className="w-full h-full rounded-lg"
                      height={625}
                      width={625}
                    />
                  </div>
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <div className="flex gap-6 items-start mb-6 border-b border-[#D0D3D4] pb-6">
                      <div className="border-2 border-[#0053e2] rounded-full mt-1 h-3 w-3 flex-none"></div>
                      <p>
                        Experienced leaders from Flipkart, Walmart Vriddhi,
                        Walmart, Swasti, and other industry experts shared
                        valuable tips on how to grow businesses in the digital
                        world during informative sessions.
                      </p>
                    </div>
                    <div className="flex gap-6 items-start mb-6 border-b border-[#D0D3D4] pb-6">
                      <div className="border-2 border-[#0053e2] rounded-full mt-1 h-3 w-3 flex-none"></div>
                      <p>
                        A special fireside chat featured a Walmart Vriddhi
                        mentor and graduates of the MSME program. They shared
                        their experiences on the benefits of joining the program
                        and how it prepared, trained, and supported MSMEs in
                        accelerating their business growth.
                      </p>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="border-2 border-[#0053e2] rounded-full mt-1 h-3 w-3 flex-none"></div>
                      <p>
                        Attendees had the opportunity to learn from these
                        sessions and gain insights into strategies for enhancing
                        their businesses in the digital realm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="">
          <div className="w-full">
            <div className="">
              <div className="relative w-full rounded-lg overflow-hidden space-y-6 sm:space-y-10 md:space-y-14 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
                  <div className="md:col-span-5">
                    <h2 className="text-2xl md:text-4xl">Lamp Lighting</h2>
                  </div>
                  <div className="md:col-span-5 flex items-center">
                    <div className="flex flex-col justify-between h-full">
                      <p>
                        The event was graced by Walmart Vriddhi&apos;s honoured
                        guest, Ms. Najma Hashmi, Director of International Trade
                        at the India SME Forum. Among the other distinguished
                        attendees were senior leadership representatives from
                        Walmart and Flipkart, including Mr. Jason Fremstad,
                        Senior Vice President of Supplier Development; Mr.
                        Nittin Dutt,&nbsp;
                        {showMore && (
                          <>
                            Senior Director of India Supplier Development at
                            Walmart Sourcing; Ms. Sherry Lee Singh, Senior
                            Director of Walmart Supplier Development; Mr.
                            Rajneesh Kumar, Chief Corporate Affairs Officer of
                            Flipkart Group; and Mr. Rakesh Krishnan, Vice
                            President and Head of Marketplace at Flipkart, who
                            participated in the inaugural lamp lighting
                            ceremony.
                          </>
                        )}
                      </p>
                      <p>
                        <button
                          onClick={() => setShowMore(!showMore)}
                          className="underline text-[#0053E2] cursor-pointer text-left"
                        >
                          {showMore ? "Read less" : "Read more"}
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
                  <div className="md:col-span-5">
                    <Image
                      src="/images/Lamp-lighting-left.jpg"
                      alt="Lamp Lighting"
                      className="w-full h-full rounded-lg"
                      height={625}
                      width={625}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <Image
                      src="/images/Lamp-lighting-right.jpg"
                      alt="Lamp Lighting"
                      className="w-full h-full rounded-lg"
                      height={625}
                      width={625}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mx-0 bg-[#F3F3F3] py-10 rounded-xl">
          <div className="px-4 md:px-10">
            <div className="relative w-full rounded-lg overflow-hidden space-y-6 sm:space-y-10 md:space-y-14 mx-auto">
              <h2 className="text-2xl md:text-4xl">Summit Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:mb-10">
                <div className="md:col-span-6 h-full">
                  <div className="h-full">
                    <SpeakerCard
                      name="Najma Hashmi"
                      title="Director International Trade India SME Forum"
                      description="Najma emphasized the importance of MSMEs as the backbone of the economy and their need for digital transformation, in line with India's vision to become the third-largest global economy."
                      imageUrl="/images/Najma-Hashmi.jpg"
                      imageAlt="Najma Hashmi speaking at a conference"
                    />
                  </div>
                </div>
                <div className="md:col-span-6 h-full">
                  <div className="h-full">
                    <SpeakerCard
                      name="Jason Fremstad"
                      title="Senior Vice President, Supplier Development, Walmart"
                      description="Jason highlighted Walmart's vision for supporting MSMEs nationwide and the impactful contributions made through Walmart Vriddhi, underscoring the expanding Indian economy."
                      imageUrl="/images/Jason-Fremstad.jpg"
                      imageAlt="Jason Fremstad speaking at a conference"
                    />
                  </div>
                </div>
                <div className="md:col-span-6 h-full">
                  <div className="h-full">
                    <SpeakerCard
                      name="Rakesh Krishnan"
                      title="Vice President and Head of Marketplace, Flipkart"
                      description="Rakesh delivered an engaging session on the transformative power of technology in business through eCommerce, offering invaluable insights for MSMEs looking to leverage digital platforms."
                      imageUrl="/images/Rakesh-Krishnan.jpg"
                      imageAlt="Rakesh Krishnan speaking at a conference"
                    />
                  </div>
                </div>
                <div className="md:col-span-6 h-full">
                  <div className="h-full">
                    <SpeakerCard
                      name="Sherry Lee Singh"
                      title="Senior Director, Walmart Supplier Development, Walmart"
                      description="Sherry focused on the significance of inclusion in supplier development. She also spoke about creating eCommerce opportunities for suppliers within Walmart's supply chain."
                      imageUrl="/images/Sherry-Lee-Singh.jpg"
                      imageAlt="Sherry Lee Singh speaking at a conference"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="">
          <div className="w-full">
            <div className="">
              <div className="relative w-full rounded-xl overflow-hidden space-y-6 sm:space-y-10 md:space-y-14 pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:gap-10">
                  <div className="md:col-span-5">
                    <h2 className="text-2xl md:text-4xl">Fireside Chat</h2>
                  </div>
                  <div className="md:col-span-5 flex items-center">
                    <div className="flex flex-col justify-between h-full">
                      <p>
                        This unique segment featured Mr. V. S. Kumar, a Walmart
                        Vriddhi mentor, along with Walmart Vriddhi graduates Mr.
                        Vikalp Maithil, Co-founder of Pavika Organics, and Ms.
                        Preeti Bhandari, Founder of Naturally Pahadi. They
                        shared their entrepreneurial journeys in an insightful
                        discussion moderated by Mr. Shiv Kumar, Chief Mentor of
                        Swasti and Co-Founder of Catalyst Group.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
                  <div className="md:col-span-10">
                    <Image
                      src="/images/Fireside-Chat.jpg"
                      alt="Lamp Lighting"
                      className="w-full h-full rounded-lg"
                      height={625}
                      width={625}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Page;
