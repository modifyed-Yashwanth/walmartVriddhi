"use client";

import React from "react";
import Image from "next/image";
import { SecondaryButton } from "@/components/buttons";
// import AboutPageInfographic from "@/components/AboutPageInfographic";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from "react-i18next";

function Page() {
  const { t } = useTranslation("common");
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection>
        <section className="">
          <div className="relative w-full h-[150px] md:h-[300px] lg:h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/images/about-us-images/about-us-banner.jpg"
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
                  {t("about.walmartVriddhiHeading1")}
                </h2>
                <p className="mb-[10px]">
                  {t("about.walmartVriddhiDescription")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <div className="relative w-full overflow-hidden my-6 sm:my-10">
          <h2 className="text-2xl md:text-4xl mb-4">
            {t("about.walmartVriddhiHeading2")}
          </h2>
          <div className="md:col-span-5">
            <p className="mb-[10px]">
              {t("about.walmartVriddhiDescription2")}{" "}
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
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-[#f3f3f3] py-10 rounded-xl px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-10 items-start gap-10">
            <div className="md:col-span-10">
              <h2 className="text-2xl md:text-4xl mb-4">
                {t("about.walmartVriddhiHeading3")}
              </h2>
              <p>
                {t("about.walmartVriddhiDescription3")}{" "}
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

      {/* Marketplace Info Section */}
      {/* <AnimatedSection>
        <div>
          <AboutPageInfographic />
        </div>
      </AnimatedSection> */}

      {/* i2i Foundation Section */}
      <AnimatedSection>
        <section className="py-5 pt-10">
          <h2 className="text-2xl md:text-4xl mb-4">
            {t("about.i2iFoundationHeading")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
            <div
              className="min-h-[350px] md:col-span-5 flex items-center bg-cover bg-right md:bg-top w-full h-full rounded-xl relative before:absolute before:h-[90%] before:w-[90%] before:border-2 before:block before:border-white before:inset-x-0 before:left-[5%] before:rounded-xl"
              style={{
                backgroundImage:
                  "url('/images/about-us-images/i2i-about-us.jpg')",
              }}
            ></div>
            <div className="md:col-span-5 flex items-center h-full">
              <div className="space-y-6 bg-white p-6 rounded-xl shadow-md h-full py-10">
                <p>{t("about.i2iFoundationDescription")}</p>
                <SecondaryButton
                  href={`https://i2ifoundation.org/`}
                  text={t("about.buttonText")}
                  target="_blank"
                  variant="secondary"
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
