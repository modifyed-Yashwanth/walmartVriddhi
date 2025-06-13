"use client";

import React from "react";
import Image from "next/image";
import { SecondaryButton } from "@/components/buttons";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
// import { Card } from "@/components/ui/card";

function page() {
  return (
    <>
      <div className="w-full">
        <AnimatedSection>
          <div className="relative w-full rounded-lg overflow-hidden">
            <Link
              href="https://taffexperience.com/msme-summit-2025/"
              target="_blank"
            >
              <Image
                src="/images/MSME-2025-Save-The-Date-16-05-2025.jpg"
                alt="MSME 2025 banner"
                className="w-[620px] mx-auto md:h-full rounded-xl"
                height={625}
                width={1200}
              />
            </Link>
          </div>
          <p className="text-center">
            <SecondaryButton
              text="Register for Walmart Vriddhi MSME Summit 2025"
              className={`w-full  bg-[#0053e2] text-white border-[#0053e2] mt-6 mx-auto`}
              onClick={() => {
                window.open(
                  "https://taffexperience.com/msme-summit-2025/",
                  "_blank"
                );
              }}
            />
          </p>
        </AnimatedSection>
      </div>

      {/* <AnimatedSection>
        <div className="w-full">
          <div className="relative w-full rounded-lg overflow-hidden space-y-6 sm:space-y-10 md:space-y-14 py-10">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-5">
              <div className="md:col-span-6">
                <h2 className="text-2xl md:text-4xl">
                  Walmart Vriddhi MSME Summit 2025
                </h2>
                <div className="flex jusify-between gap-10 mt-5 w-full">
                  <p className="flex jusify-center gap-2">
                    <Image
                      src="/images/Pin-icon.svg"
                      alt="Location"
                      height={16}
                      width={16}
                      className="self-baseline mt-[5px]"
                    />
                    <span>
                      Dr. Ambedkar International <br />
                      Center, Janpath, New Delhi
                    </span>
                  </p>
                  <p className="flex jusify-center gap-2">
                    <Image
                      src="/images/calendar-solid-icon.svg"
                      alt="Location"
                      height={16}
                      width={16}
                      className="self-baseline mt-[5px]"
                    />
                    <span>June 19, 2025</span>
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 flex items-center">
                <div className="flex flex-col justify-between h-full">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nunc aliquet nec in
                    leo magna. Volutpat erat varius morbi varius. Est dapibus
                    non vel nulla urna vitae sit massa volutpat. Sagittis eget
                    aliquet nulla consectetur lobortis ipsum. Egestas tellus sed
                    nam elementum ultrices metus. Id aliquet nunc sollicitudin
                    nulla massa.
                  </p>
                  <p>
                    <SecondaryButton
                      text="Register for MSME Summit"
                      className={`w-full sm:w-[220px] md:w-[260px] bg-[#0053e2] text-white border-[#0053e2] mt-6`}
                      onClick={() => {
                        window.open(
                          "https://taffexperience.com/msme-summit-2025/",
                          "_blank"
                        );
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mx-0 bg-[#F3F3F3] py-10 rounded-xl">
          <div className="w-full">
            <div className="rounded-xl">
              <div className="relative w-full rounded-lg overflow-hidden space-y-6 sm:space-y-10 md:space-y-14 sm:px-4 md:px-8 lg:px-[70px]">
                <h2 className="text-2xl md:text-4xl">Summit Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full pb-6">
                  <div className="flex flex-col gap-4">
                    <div className="bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden">
                      <Image
                        src="/images/Lamp-lighting-right.jpg"
                        alt="Highlight 1"
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover object-top"
                      />
                      <p className="p-4 text-gray-700 text-sm">Lorem Ipsum</p>
                    </div>
                    <div className="bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden">
                      <Image
                        src="/images/Fireside-Chat.jpg"
                        alt="Highlight 2"
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover object-top"
                      />
                      <p className="p-4 text-gray-700 text-sm">Lorem Ipsum</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden">
                    <Image
                      src="/images/Lamp-lighting-right.jpg"
                      alt="Team photo"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover object-top"
                    />
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-black mb-1">
                        Lorem Ipsum
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Odio arcu tempor
                        mattis sed pulvinar orci. Sagittis nisl vestibulum risus
                        eget bibendum.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden">
                      <Image
                        src="/images/Lamp-lighting-left.jpg"
                        alt="Highlight 3"
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover object-top"
                      />
                      <p className="p-4 text-gray-700 text-sm">Lorem Ipsum</p>
                    </div>
                    <div className="bg-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden">
                      <Image
                        src="/images/Sherry-Lee-Singh.jpg"
                        alt="Highlight 4"
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover object-top"
                      />
                      <p className="p-4 text-gray-700 text-sm">Lorem Ipsum</p>
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
                <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
                  <div className="md:col-span-10">
                    <h2 className="text-2xl md:text-4xl mb-4">
                      Lorem ipsum dolor sit amet consectetur odio
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Nunc aliquet nec
                      in leo magna. Volutpat erat varius morbi varius. Est
                      dapibus non vel nulla urna vitae sit massa volutpat.
                      Sagittis eget aliquet nulla consectetur lobortis ipsum.
                      Egestas tellus sed nam elementum ultrices metus. Id
                      aliquet nunc sollicitudin nulla massa. Dignissim
                      vestibulum dictum egestas enim congue. Aliquam volutpat
                      pharetra amet scelerisque urna. Euismod euismod vivamus
                      etiam elit sit viverra mi semper gravida. Nisi enim
                      natoque velit lorem purus. Posuere amet nisi montes elit
                      in aliquam venenatis. Sagittis massa eu viverra ut mauris
                      sit.
                    </p>
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

      <AnimatedSection>
        <div className="mx-0 bg-[#f3f3f3] py-10 rounded-xl">
          <div className="w-full">
            <div className="">
              <div className="relative w-full rounded-lg overflow-hidden space-y-6 sm:space-y-10 md:space-y-14 sm:px-4 md:px-8 lg:px-[70px]">
                <h2 className="text-2xl md:text-4xl">
                  Lorem ipsum dolor sit amet
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                  <div className="md:col-span-1 flex items-center">
                    <Card className="flex flex-col sm:flex-row items-center h-auto sm:h-[240px] md:h-[260px] w-full overflow-hidden  bg-white">
                      <div className="w-full sm:w-[40%] h-[200px] sm:h-full relative">
                        <Image
                          src="/images/Jason-Fremstad.jpg"
                          alt="msmes"
                          fill
                          className="object-cover sm:object-center"
                        />
                      </div>

                      <div className="w-full sm:w-[60%] p-10 flex flex-col justify-between space-y-3 sm:space-y-4">
                        <p className="text-sm md:text-md">
                          Walmart Marketplace enables third-party sellers to
                          showcase their products on Walmart&apos;s website,
                          focusing on popular sectors such as home and kitchen,
                          beauty, jewellery, apparel, leather accessories, and
                          other emerging segments.
                        </p>
                      </div>
                    </Card>
                  </div>
                  <div className="md:col-span-1 flex items-center">
                    <Card className="flex flex-col sm:flex-row items-center h-auto sm:h-[240px] md:h-[260px] w-full overflow-hidden  bg-white">
                      <div className="w-full sm:w-[40%] h-[200px] sm:h-full relative">
                        <Image
                          src="/images/Lamp-lighting-left.jpg"
                          alt="msmes"
                          fill
                          className="object-cover sm:object-center"
                        />
                      </div>

                      <div className="w-full sm:w-[60%] p-10 flex flex-col justify-between space-y-3 sm:space-y-4">
                        <p className="text-sm md:text-md">
                          Last year, over 20,000 sellers joined the Marketplace,
                          and this year, Walmart aims to double that number
                          while increasing its assortment from 170 million to
                          200 million items. To support this expansion, Walmart
                          actively recruits overseas sellers from India, Asia,
                          and Europe, although most sellers on the Marketplace
                          are currently based in the U.S.
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection> */}
    </>
  );
}

export default page;
