import React from "react";
import {
  Store,
  FileText,
  Upload,
  CheckCircle,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";

export default function MarketConnectTab() {
  const onboardingSteps = [
    {
      icon: Store,
      title: "Sign up as a seller on Flipkart",
    },
    {
      icon: FileText,
      title: "Update GSTIN in Seller Dashboard",
    },
    {
      icon: Upload,
      title: "Upload one listing on Flipkart",
    },
    {
      icon: CheckCircle,
      title: "Select brand and vertical approval when listing products",
    },
    {
      icon: ShoppingCart,
      title: "Process new orders",
      isLast: true,
    },
  ];
  return (
    <>
      <div className="pt-5">
        <div className="flex flex-col items-start w-full">
          <h2 className="text-2xl md:text-4xl mb-2">Market Connect</h2>
          <p>
            Expand your business reach by capturing new markets and widening
            existing markets. Vriddhi offers you the opportunity to grow through
            the supply chains of Flipkart and Walmart and other major domestic
            companies.
          </p>
          <hr className="my-6 border-2 border-gray-300 w-full" />
          <h3 className="text-lg font-[400] mb-4">Domestic</h3>
          <p>
            As a Walmart Vriddhi-certified seller, you would be eligible for
            onboarding as well as incubation support to take your business
            digital on Flipkart.
          </p>
        </div>
      </div>
      <div className="relative w-full rounded-xl overflow-hidden my-6 md:my-10 space-y-6 sm:space-y-10 md:space-y-14 bg-[#F3F3F3] py-10">
        <div className="px-4 md:px-12">
          <div>
            <h2 className="text-2xl md:text-4xl mb-10">Onboarding</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6 ">
            <div className="md:col-span-5 flex items-center">
              <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                {onboardingSteps.map((step, index) => (
                  <div
                    key={index}
                    className="animate-fade-in mb-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                          <step.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        {!step.isLast && (
                          <div className="w-0.5 h-8 bg-gray-200"></div>
                        )}
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-gray-800 font-medium leading-relaxed">
                          {step.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="md:col-span-5 flex items-center bg-cover bg-center w-full h-full rounded-lg relative before:absolute before:h-[90%] before:w-[90%] before:border-2 before:block before:border-white before:inset-x-0 before:left-[5%] before:rounded-lg min-h-[350px]"
              style={{ backgroundImage: "url('/images/Onboarding-left.jpg')" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl md:text-4xl mb-2">Incubation</h2>
        <p>
          Get a dedicated account manager to help you manage your business
          efficiently and get maximum customers on Flipkart.
        </p>

        <div className="bg-[#A9DDF7] rounded-lg p-4 md:p-10 grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-20 space-x-6 mx-auto mt-10 hover:scale-105 duration-500 transition-transform hover:scale-105 duration-500 transition-transform">
          {/* Icon Box */}
          <div className="rounded-xl mb-3 md:mb-0 col-span-5 md:col-span-3">
            <Image
              src="/images/sqaure-box-icon.svg"
              alt="Vector icon"
              width={55}
              height={40}
              className="py-3 md:mx-auto px-0"
            />
          </div>

          {/* Text */}
          <div className="block md:flex gap-10 col-span-5 lg:col-span-9">
            <p className="text-[#0053e2] text-2xl font-regular">01</p>
            <p className="text-[#0053e2] text-xl font-regular">
              Support to monitor business performance and connect with an
              Account Manager at least 4 times a week.
            </p>
          </div>
        </div>
        <div className="bg-[#4DBDF5] rounded-lg p-4 md:p-10 grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-20 space-x-6 mx-auto mt-10 hover:scale-105 duration-500 transition-transform">
          {/* Icon Box */}
          <div className="rounded-xl mb-3 md:mb-0 col-span-5 md:col-span-3">
            <Image
              src="/images/sqaure-box-icon.svg"
              alt="Vector icon"
              width={55}
              height={40}
              className="py-3 md:mx-auto px-0"
            />
          </div>

          {/* Text */}
          <div className="block md:flex gap-10 col-span-5 lg:col-span-9">
            <p className="text-[#0053e2] text-2xl font-regular">02</p>
            <p className="text-[#0053e2] text-xl font-regular">
              Support to monitor business performance and connect with an
              Account Manager at least 4 times a week.
            </p>
          </div>
        </div>
        <div className="bg-[#0053E2] rounded-lg p-4 md:p-10 grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-20 space-x-6 mx-auto mt-10 hover:scale-105 duration-500 transition-transform">
          {/* Icon Box */}
          <div className="rounded-xl mb-3 md:mb-0 col-span-5 md:col-span-3">
            <Image
              src="/images/sqaure-box-white-icon.svg"
              alt="Vector icon"
              width={55}
              height={40}
              className="py-3 md:mx-auto px-0"
            />
          </div>

          {/* Text */}
          <div className="block md:flex gap-10 col-span-5 lg:col-span-9">
            <p className="text-white text-2xl font-regular">03</p>
            <p className="text-white text-xl font-regular">
              Support to monitor business performance and connect with an
              Account Manager at least 4 times a week.
            </p>
          </div>
        </div>
        <div className="bg-[#A9DDF7] rounded-lg p-4 md:p-10 grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-20 space-x-6 mx-auto mt-10 hover:scale-105 duration-500 transition-transform">
          {/* Icon Box */}
          <div className="rounded-xl mb-3 md:mb-0 col-span-5 md:col-span-3">
            <Image
              src="/images/sqaure-box-icon.svg"
              alt="Vector icon"
              width={55}
              height={40}
              className="py-3 md:mx-auto px-0"
            />
          </div>

          {/* Text */}
          <div className="block md:flex gap-10 col-span-5 lg:col-span-9">
            <p className="text-[#0053e2] text-2xl font-regular">04</p>
            <p className="text-[#0053e2] text-xl font-regular">
              Support to monitor business performance and connect with an
              Account Manager at least 4 times a week.
            </p>
          </div>
        </div>
        <div className="bg-[#4DBDF5] rounded-lg p-4 md:p-10 grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-20 space-x-6 mx-auto mt-10 hover:scale-105 duration-500 transition-transform">
          {/* Icon Box */}
          <div className="rounded-xl mb-3 md:mb-0 col-span-5 md:col-span-3">
            <Image
              src="/images/sqaure-box-icon.svg"
              alt="Vector icon"
              width={55}
              height={40}
              className="py-3 md:mx-auto px-0"
            />
          </div>

          {/* Text */}
          <div className="block md:flex gap-10 col-span-5 lg:col-span-9">
            <p className="text-[#0053e2] text-2xl font-regular">05</p>
            <p className="text-[#0053e2] text-xl font-regular">
              Support to monitor business performance and connect with an
              Account Manager at least 4 times a week.
            </p>
          </div>
        </div>
        <div className="bg-[#0053E2] rounded-lg p-4 md:p-10 grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-20 space-x-6 mx-auto mt-10 hover:scale-105 duration-500 transition-transform">
          {/* Icon Box */}
          <div className="rounded-xl mb-3 md:mb-0 col-span-5 md:col-span-3">
            <Image
              src="/images/sqaure-box-white-icon.svg"
              alt="Vector icon"
              width={55}
              height={40}
              className="py-3 md:mx-auto px-0"
            />
          </div>

          {/* Text */}
          <div className="block md:flex gap-10 col-span-5 lg:col-span-9">
            <p className="text-white text-2xl font-regular">06</p>
            <p className="text-white text-xl font-regular">
              Support to monitor business performance and connect with an
              Account Manager at least 4 times a week.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
