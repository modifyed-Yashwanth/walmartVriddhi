"use client";

import React from "react";
import Image from "next/image";
import { SecondaryButton } from "@/components/buttons";
import AboutPageInfographic from "@/components/AboutPageInfographic";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

function Page() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection>
        <section className="">
          <div className="relative w-full h-[150px] md:h-[300px] lg:h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/images/About-Us-Banner.jpg"
              alt="about us banner"
              className="object-cover"
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r w-full md:w-[65%] lg:w-[50%] from-black/0 from-40% opacity-60" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-4 sm:px-8 md:px-12 lg:left-12 max-w-full md:max-w-lg lg:max-w-xl text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 leading-tight">
                  {/*                 About Us */}
                </h2>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden my-6 sm:my-10 md:my-10">
            <div className="grid grid-cols-1 md:grid-cols-10 items-start gap-10">
              <div className="md:col-span-10">
                <h2 className="text-2xl md:text-4xl mb-4">
                  About Walmart Vriddhi
                </h2>
                <p className="mb-[10px]">
                  Walmart Vriddhi is a supplier development program launched in
                  2019 with a commitment to empower 50,000 MSMEs in India over
                  five years. In its first phase, the program surpassed that
                  goal by training over 60,000 MSMEs and has played a catalytic
                  role in supporting small businesses with growth opportunities
                  to reach new national and international markets.
                </p>

                <p className="mb-[10px]">
                  The program is tailored to help MSMEs modernize, scale and
                  meet their national, and (for some) international ambitions.
                  It underscores Walmart&apos;s focus to help unlock
                  India&apos;s entrepreneurial capacity and enable MSMEs to
                  thrive in the market. The program offers MSMEs access to
                  free-of-cost training, mentoring, and business advice.
                </p>

                <p className="mb-[10px]">
                  By using digital tools to train business leaders on crucial
                  aspects of business management such as finance, marketing,
                  workforce management, and environmental sustainability, we
                  empower entrepreneurs to establish successful and sustainable
                  business models while contributing to employment opportunities
                  in local communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-[#f3f3f3] py-10 rounded-xl px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-10 items-start gap-10">
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-4xl mb-4">About Walmart</h2>
              <p>
                Walmart Inc. is a people-led, tech-powered
                omnichannel retailer helping people save money and live better -
                anytime and anywhere - in stores, online, and through their
                mobile devices. Each week, approximately 270 million customers
                and members visit more than 10,750 stores and numerous eCommerce
                websites in 19 countries. With fiscal year 2025 revenue of $681
                billion, Walmart employs approximately 2.1 million associates
                worldwide. Walmart continues to be a leader in sustainability,
                corporate philanthropy, and employment opportunity. Additional
                information about Walmart can be found by visiting{" "}
                <Link
                  href="https://corporate.walmart.com/"
                  target="_blank"
                  className="text-[#0053e2]"
                >
                  corporate.walmart.com
                </Link>
                , on Facebook at{" "}
                <Link
                  href="https://www.facebook.com/walmart"
                  target="_blank"
                  className="text-[#0053e2]"
                >
                  facebook.com/walmart
                </Link>
                , on X (formerly known as Twitter) at{" "}
                <Link
                  href="https://x.com/walmart"
                  target="_blank"
                  className="text-[#0053e2]"
                >
                  twitter.com/walmart
                </Link>
                , and on LinkedIn at{" "}
                <Link
                  href="https://www.linkedin.com/company/walmart"
                  target="_blank"
                  className="text-[#0053e2]"
                >
                  linkedin.com/company/walmart
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="relative w-full overflow-hidden my-6 sm:my-10">
          <h2 className="text-2xl md:text-4xl mb-4">About Walmart in India</h2>
          <div className="grid grid-cols-1 lg:grid-cols-10 items-center gap-10">
            <div className="md:col-span-5">
              <Image
                src="/images/about-us-left.jpg"
                alt="about page left"
                height={500}
                width={500}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="md:col-span-5">
              <p className="mb-[10px]">
                Walmart is committed to a future where retail in India is a mix
                of shopping experiences that best serve Indian consumers,
                suppliers, producers and retailers. Walmart is building out a
                holistic ecosystem that includes a wholesale cash-and-carry
                business, eCommerce platforms, a payments and financial services
                platform, as well as logistics and supply chain capabilities –
                strong local businesses that are powered by Walmart. Walmart
                invests in programs and initiatives that help local sellers and
                suppliers, including kiranas, micro-, small- and medium-sized
                enterprises. (MSMEs), farmers, artisans and women-owned
                businesses to modernize, prosper and create local jobs in the
                country. As a socially responsible organization that is
                committed to creating economic opportunity, enhancing long-term
                environmental sustainability and strengthening local
                communities, Walmart is determined to help drive India&apos;s
                growth story and create shared value. Additional information
                about Walmart can be found by visiting{" "}
                <Link
                  href="https://corporate.walmart.com/"
                  target="_blank"
                  className="text-[#0053e2]"
                >
                  corporate.walmart.com
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Marketplace Info Section */}
      <AnimatedSection>
        <div>
          <AboutPageInfographic />
        </div>
      </AnimatedSection>

      {/* i2i Foundation Section */}
      <AnimatedSection>
        <section className="py-5">
          <h2 className="text-2xl md:text-4xl mb-4">
            About Ideas to Impact Foundation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
            <div
              className="min-h-[350px] md:col-span-5 flex items-center bg-cover bg-right md:bg-top w-full h-full rounded-xl relative before:absolute before:h-[90%] before:w-[90%] before:border-2 before:block before:border-white before:inset-x-0 before:left-[5%] before:rounded-xl"
              style={{ backgroundImage: "url('/images/i2i-about-us.jpg')" }}
            ></div>
            <div className="md:col-span-5 flex items-center h-full">
              <div className="space-y-6 bg-white p-6 rounded-xl shadow-md h-full py-10">
                <p>
                  Established in 2017, the Ideas to Impact (i2i) Foundation
                  began its journey with a clear mission: to bridge the gap
                  between strategy and impact. Drawing on the co- founders&apos;
                  expertise in social advisory, i2i Foundation developed a
                  distinctive model that integrates 360° advisory services with
                  hands-on implementation to create inclusive and scalable
                  development solutions. Its credentials to enable small
                  businesses through Walmart Vriddhi are rooted in this
                  expertise. The Foundation also works extensively with
                  governments, and a number of national and international
                  partners and is committed to designing, piloting, and
                  institutionalizing innovative solutions through
                  multi-stakeholder collaboration.
                </p>
                <SecondaryButton
                  href={`https://i2ifoundation.org/`}
                  text="Know More"
                  target="_blank"
                  className="w-[150px] text-semibold bg-white"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}

export default Page;
