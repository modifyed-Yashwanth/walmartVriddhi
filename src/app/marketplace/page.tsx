"use client";

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import CoursesSection from "@/components/CourseSection";
import CBTOfferSection from "@/components/CBTOfferSection";
import AnimatedSection from "@/components/AnimatedSection";
import { SecondaryButton } from "@/components/buttons";

function page() {
  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="relative w-full h-[150px] md:h-[300px] lg:h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/images/MSME-Growth-Journey-Banner.jpg"
              alt="Walmart Marketplace Banner"
              className="object-cover object-right"
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r w-full md:w-[65%] lg:w-[50%] from-black/20 from-40% opacity-60" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-4 sm:px-8 md:px-12 lg:left-12 max-w-full md:max-w-lg lg:max-w-xl text-white">
                <h2 className="text-2xl md:text-4xl font-semibold mb-2 leading-tight">
                  {/*                   Walmart Marketplace */}
                </h2>
                <p className="text-xs sm:text-sm font-light mb-4 w-full sm:w-[360px]">
                  {/*                   Expand your business globally through Walmart&apos;s Cross-Border Trade (CBT), reaching millions of customers */}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="relative w-full rounded-lg overflow-hidden my-6 md:my-10">
            <div className="grid grid-cols-1 lg:grid-cols-10 items-center gap-4 md:gap-10">
              <div className="md:col-span-4 flex items-center">
                <h2 className="text-2xl md:text-4xl">
                  Boost Your Business with Cross Border Trade
                </h2>
              </div>
              <div className="md:col-span-6 flex items-center">
                <p>
                  Expand your business via Cross Border Trade (CBT) on Walmart
                  Marketplace and reach new heights. Walmart Marketplace is an
                  eCommerce platform that allows third-party sellers to list
                  products for sale on Walmart.com.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/images/market-place-image.jpg"
              alt="marketplace image middle"
              className="object-cover object-top"
              fill
              priority
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative w-ful overflow-hidden my-6 sm:my-10 md:my-10">
            <h2 className="text-2xl md:text-4xl mb-6">
              What&apos;s in it for you?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 my-8">
              <div className="md:col-span-1 flex items-center">
                <Card className="flex flex-col sm:flex-row items-center h-auto sm:h-[240px] md:h-[300px] w-full overflow-hidden bg-[#F3F3F3]">
                  <div className="w-full sm:w-[40%] h-[200px] sm:h-full relative">
                    <Image
                      src="/images/msmes.jpg"
                      alt="msmes"
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="w-full sm:w-[60%] p-4 md:p-10 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <p className="text-sm md:text-md">
                      Walmart Marketplace enables third-party sellers to
                      showcase products on Walmart&apos;s website, focusing on
                      popular categories such as home and kitchen, beauty,
                      jewellery, apparel, leather accessories, and other
                      emerging segments. <br /> For eligible businesses looking
                      to expand, the Marketplace offers Cross-border Trade (CBT)
                      Enablement, providing tailored support to help understand
                      compliance, documentation, logistics, and marketing for
                      the U.S. market.
                    </p>
                  </div>
                </Card>
              </div>
              <div className="md:col-span-1 flex items-center">
                <Card className="flex flex-col sm:flex-row items-center h-auto sm:h-[240px] md:h-[300px] w-full overflow-hidden bg-[#F3F3F3]">
                  <div className="w-full sm:w-[40%] h-[200px] sm:h-full relative">
                    <Image
                      src="/images/msmes2.jpg"
                      alt="msmes"
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="w-full sm:w-[60%] p-4 md:p-10 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <p className="text-sm md:text-md">
                      To help get started, Walmart provides Free Training and
                      Mentorship. This includes personalized training and
                      mentoring designed to make a business export-ready,
                      covering topics such as product listing, pricing, quality
                      standards, logistics, and U.S. consumer trends.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
              <div className="md:col-span-1 flex items-center">
                <Card className="flex flex-col md:flex-row items-center h-auto sm:h-[240px] md:h-[300px] w-full overflow-hidden bg-[#F3F3F3]">
                  <div className="w-full sm:w-[40%] h-[200px] sm:h-full relative">
                    <Image
                      src="/images/marketplace-3.jpg"
                      alt="msmes"
                      fill
                      className="object-cover object-right-top"
                    />
                  </div>

                  <div className="w-full md:w-[60%] p-4 md:p-10 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <p className="text-sm md:text-md">
                      You shall also receive Step-by-step Onboarding Support,
                      with dedicated teams guiding through every stage of the
                      Walmart Marketplace onboarding process, offering expert
                      help with paperwork, tax requirements, and account setup.
                    </p>
                  </div>
                </Card>
              </div>
              <div className="md:col-span-1 flex items-center">
                <Card className="flex flex-col sm:flex-row items-center h-auto sm:h-[240px] md:h-[300px] w-full overflow-hidden bg-[#F3F3F3]">
                  <div className="w-full sm:w-[40%] h-[200px] sm:h-full relative">
                    <Image
                      src="/images/marketplace-4.jpg"
                      alt="msmes"
                      fill
                      className="object-cover object-right-top"
                    />
                  </div>

                  <div className="w-full sm:w-[60%] p-4 md:p-10 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <p className="text-sm md:text-md">
                      Walmart actively recruits overseas sellers from India and
                      globally. As part of this, businesses benefit from Strong
                      Ecosystem Partnerships, working with trusted partners for
                      logistics (including Ekart), financial services (via
                      PhonePe), and marketplace readiness. This also provides
                      access to bundled services like digital payments,
                      insurance, and organized credit access, all designed to
                      facilitate business growth.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection>
        <div className="relative w-full rounded-xl overflow-hidden my-6 sm:my-10 md:my-10 bg-[#F3F3F3] py-10 px-4 md:px-12">
          <div>
            <h2 className="text-2xl md:text-4xl mb-2">What Does CBT Offer?</h2>
            <p>
              Walmart’s marketplace offers a trusted partnership for MSMEs,
              facilitating business growth and providing opportunities to expand
              businesses online. Acceptance into Walmart Marketplace is a strong
              endorsement of quality and trustworthiness which will attract
              customers.
            </p>
          </div>
          <div className="">
            <CBTOfferSection />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="relative w-full overflow-hidden my-6 md:my-10">
          <h2 className="text-2xl md:text-4xl mb-2">Courses & Eligibility</h2>
          <div className="mb-10">
            The eligibility criteria includes&nbsp; &nbsp;
            <p className="inline-block md:inline-flex items-center gap-3">
              <span>Import Export Code (IC)</span>{" "}
              <span className="text-[#0053e2]">|</span>
              <span>Authorised Dealer Code</span>{" "}
              <span className="text-[#0053e2]">|</span>
              <span>GSTIN</span> <span className="text-[#0053e2]">|</span>
              <span>PAN</span> <span className="text-[#0053e2]">|</span>
              <span>eCommerce (Marketplace) Experience</span>
            </p>
          </div>
          <div className="shadow-lg rounded-xl bg-[#F3F3F3] mb-4">
            <CoursesSection />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="relative w-full rounded-xl overflow-hidden bg-[#F3F3F3] py-10 px-4 md:px-12 mb-10">
          <h2 className="text-2xl md:text-4xl mb-2">Incubation Support</h2>

          <div className="bg-[#A9DDF7] rounded-lg p-4 md:p-10 block md:flex items-center gap-20 space-x-6 mx-auto mt-10 text-center hover:scale-105 duration-500 transition-transform">
            {/* Icon Box */}
            <div className="rounded-xl mb-3 md:mb-0 inline-block">
              <Image
                src="/images/Impactful-advertising.svg"
                alt="icon"
                width={60}
                height={60}
                className="mx-auto px-0 "
              />
            </div>

            {/* Text */}
            <p className="text-[#0053e2] text-xl font-regular">
              Impactful advertising &amp; marketing campaigns via Walmart
              Connect
            </p>
          </div>
          <div className="bg-[#4DBDF5] rounded-lg p-4 md:p-10 block md:flex items-center gap-20 space-x-6 mx-auto mt-10 text-center hover:scale-105 duration-500 transition-transform">
            {/* Icon Box */}
            <div className="rounded-xl mb-3 md:mb-0 inline-block">
              <Image
                src="/images/US-Customers.svg"
                alt="icon"
                width={60}
                height={60}
                className="mx-auto px-0"
              />
            </div>

            {/* Text */}
            <p className="text-[#0053e2] text-xl font-regular">
              Insights on U.S. customers, global supply chain best practices
              &amp; business strategies
            </p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="relative w-full h-[500px] md:h-[420px] overflow-hidden rounded-xl">
          <Image
            src="/images/walmart-bottom-bg.jpg"
            alt="Walmart Hero"
            className="object-cover object-right rounded-xl"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r w-full md:w-[65%] lg:w-[50%] from-black/80 from-40% opacity-60" />
          <div className="absolute inset-0 flex items-top md:items-center top-[10%] md:top-0 left-[20px] md:left-[50px]">
            <div className="text-white max-w-full md:max-w-lg lg:max-w-[50%]">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-normal">
                  Complete Walmart Vriddhi learning modules to be eligible to
                  sell on Walmart Marketplace
                </h2>
                <SecondaryButton
                  href="https://seller.walmart.com/signup?q=&origin=marketing_campaign&src=TestIndiaCampaign_Vriddhi&exp=MjAyNS0wMy0xNA=="
                  target="_blank"
                  text="Register on the Walmart Seller Center"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default page;
