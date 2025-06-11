import React from "react";
import Image from "next/image";
import GrowthTestimonialSlider from "./GrowthTestimonialSlider";

export default function PersonalizedMentoringTab() {
  return (
    <>
      <div className="pt-5">
        <div className="flex flex-col items-start w-full">
          <h2 className="text-2xl md:text-4xl mb-2">Personalized Mentoring</h2>
          <p className="mb-2">
            One-to-one mentoring support to help you handle business challenges
            and make the most of opportunities.
          </p>
          <p>
            Mentors act as strategy experts to guide Vriddhi entrepreneurs on
            their transformational journey to help them identify the key action
            points and take their business forward to the next level.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-25 max-w-4xl mx-auto">
            <div className="px-[2px] border rounded-2xl bg-[#f3f3f3] shadow-md border-[#cccccc] mb-10 md:mb-0 hover:scale-105 duration-500 transition-transform">
              <div className="flex flex-col items-center mb-4">
                <div className="bg-[#A9DDF7] w-full p-6 rounded-2xl -mt-12 relative min-h-[80px]">
                  <Image
                    src="/images/swot-icon-blue.svg"
                    height={40}
                    width={40}
                    alt="SWOT"
                    className="mx-auto"
                  />
                  <div className="h-0 w-0 mx-auto border-l-20 border-r-20 border-t-20 border-l-transparent border-r-transparent border-t-[#A9DDF7] absolute -bottom-5 inset-x-0"></div>
                </div>
                <p className="mt-6 p-6 text-center">
                  Do a SWOT Analysis (Strengths, weaknesses, opportunities and
                  threats)
                </p>
              </div>
            </div>
            <div className="px-[2px] border rounded-2xl bg-[#f3f3f3] shadow-md border-[#cccccc] mb-10 md:mb-0 hover:scale-105 duration-500 transition-transform">
              <div className="flex flex-col items-center mb-4">
                <div className="bg-[#4DBDF5] w-full p-6 rounded-2xl -mt-12 relative min-h-[80px]">
                  <Image
                    src="/images/sales-icon-blue.svg"
                    height={40}
                    width={40}
                    alt="SWOT"
                    className="mx-auto"
                  />
                  <div className="h-0 w-0 mx-auto border-l-20 border-r-20 border-t-20 border-l-transparent border-r-transparent border-t-[#4DBDF5] absolute -bottom-5 inset-x-0"></div>
                </div>
                <p className="mt-6 p-6 text-center">
                  Identify areas of improvement
                </p>
              </div>
            </div>
            <div className="px-[2px] border rounded-2xl bg-[#f3f3f3] shadow-md border-[#cccccc] mt-0 md:mt-10 lg:mt-0 hover:scale-105 duration-500 transition-transform">
              <div className="flex flex-col items-center mb-4">
                <div className="bg-[#0053E2] w-full p-6 rounded-2xl -mt-12 relative min-h-[80px]">
                  <Image
                    src="/images/roadmap-icon.svg"
                    height={40}
                    width={40}
                    alt="SWOT"
                    className="mx-auto"
                  />
                  <div className="h-0 w-0 mx-auto border-l-20 border-r-20 border-t-20 border-l-transparent border-r-transparent border-t-[#0053E2] absolute -bottom-5 inset-x-0"></div>
                </div>
                <p className="mt-6 p-6 text-center">
                  Create an actionable roadmap towards business growth
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10 lg:mt-20 w-full">
            <div className="md:col-span-6 items-center">
              <div className="space-y-6 p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-10 gap-10 py-6">
                  <div className="md:col-span-5">
                    <Image
                      src="/images/100-Days.svg"
                      alt="Mentoring Icon"
                      width={40}
                      height={40}
                      className="mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">100 Days</h3>
                    <p className="text-sm">
                      Duration of <br />
                      Personalized Mentoring
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <Image
                      src="/images/online-conference-icon.svg"
                      alt="online-conference-icon"
                      width={40}
                      height={40}
                      className="mb-4"
                    />
                    <h3 className="text-xl mb-2 font-semibold">06 Sessions</h3>
                    <p className="text-sm">
                      Number of <br />
                      sessions
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <Image
                      src="/images/60-90-minutes.svg"
                      alt="60-90-minutes"
                      width={40}
                      height={40}
                      className="mb-4"
                    />
                    <h3 className="text-xl mb-2 font-semibold">
                      60-90 minutes
                    </h3>
                    <p className="text-sm">
                      Duration of <br />
                      sessions
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <Image
                      src="/images/online-meeting-icon.svg"
                      alt="online-meeting-icon"
                      width={40}
                      height={40}
                      className="mb-4"
                    />
                    <h3 className="text-xl mb-2 font-semibold">
                      Virtual Meetings
                    </h3>
                    <p className="text-sm">Medium</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="md:col-span-6 flex items-center bg-cover bg-center-top w-full h-full rounded-xl relative before:absolute before:h-[90%] before:w-[90%] before:border-2 before:block before:border-white before:inset-x-0 before:left-[5%] before:rounded-xl min-h-[100%] md:min-h-[350px]"
              style={{
                backgroundImage:
                  "url('/images/Personalized-Mentoring-image.jpg')",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* <TestimonialSlider /> */}
      <div className="mt-16">
        <GrowthTestimonialSlider />
      </div>
    </>
  );
}
