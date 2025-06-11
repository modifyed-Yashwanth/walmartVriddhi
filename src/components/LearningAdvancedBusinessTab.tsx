import React, { useState } from "react";
import Image from "next/image";
import { SecondaryButton } from "./buttons";

const initialCards = [
  {
    icon: "/images/b2b-icon.svg",
    title: "Success Factors for B2B eCommerce",
    bg: "bg-[#A9DDF7]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#A9DDF7]",
  },
  {
    icon: "/images/Supply-Chain-icon.svg",
    title: "Supply Chain Management - Elements and Digitization",
    bg: "bg-[#4DBDF5]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#4DBDF5]",
  },
  {
    icon: "/images/Market-icon.svg",
    title: "Market Intelligence",
    bg: "bg-[#0053E2]",
    color: "text-white",
    bottomBg: "bg-[#0053E2]",
  },
  {
    icon: "/images/Responsible-icon.svg",
    title: "Risk and Legal Responsible Sourcing",
    bg: "bg-[#A9DDF7]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#A9DDF7]",
  },
  {
    icon: "/images/LEAN-icon.svg",
    title: "LEAN Manufacturing",
    bg: "bg-[#4DBDF5]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#4DBDF5]",
  },
  {
    icon: "/images/eCommerce-icon.svg",
    title: "Success Factors for B2C eCommerce",
    bg: "bg-[#0053E2]",
    color: "text-white",
    bottomBg: "bg-[#0053E2]",
  },
  {
    icon: "/images/Digital Enablement.svg",
    title: "Digital Enablement",
    bg: "bg-[#A9DDF7]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#A9DDF7]",
  },
  {
    icon: "/images/Business Case 1.svg",
    title: "Business Case",
    bg: "bg-[#4DBDF5]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#4DBDF5]",
  },
  {
    icon: "/images/Product Development.svg",
    title: "Product Development",
    bg: "bg-[#0053E2]",
    color: "text-white",
    bottomBg: "bg-[#0053E2]",
  },
  {
    icon: "/images/Advanced Marketing.svg",
    title: "Advanced Marketing",
    bg: "bg-[#A9DDF7]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#A9DDF7]",
  },
  {
    icon: "/images/Data-Based Performance Management.svg",
    title: "Data-Based Performance Management",
    bg: "bg-[#4DBDF5]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#4DBDF5]",
  },
  {
    icon: "/images/Demand Forecasting.svg",
    title: "Demand Forecasting",
    bg: "bg-[#0053E2]",
    color: "text-white",
    bottomBg: "bg-[#0053E2]",
  },
  {
    icon: "/images/procurement.svg",
    title: "Procurement",
    bg: "bg-[#A9DDF7]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#A9DDF7]",
  },
  {
    icon: "/images/Managing your Finances.svg",
    title: "Managing your Finances",
    bg: "bg-[#4DBDF5]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#4DBDF5]",
  },
  {
    icon: "/images/Advanced Financing.svg",
    title: "Advanced Financing",
    bg: "bg-[#0053E2]",
    color: "text-white",
    bottomBg: "bg-[#0053E2]",
  },
  {
    icon: "/images/Women in Business.svg",
    title: "Women in Business",
    bg: "bg-[#A9DDF7]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#A9DDF7]",
  },
];

export default function LearningAdvancedBusinessTab() {
  const [cards, setCards] = useState(initialCards.slice(0, 6));
  const [currentIndex, setCurrentIndex] = useState(6);

  const handleLoadMore = () => {
    const nextIndex = currentIndex + 6;
    const newCards = initialCards.slice(0, nextIndex);
    setCards(newCards);
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <div className="mt-10 space-y-14">
        <p className="max-w-6xl mx-auto">
          The program helps you apply advanced business management tools and
          strategies to your business. It offers relevant case studies to assist
          you gain real-life experience of MSMEs and get a deep understanding of
          markets, consumers, and digital transformation tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-[#f3f3f3] shadow-md relative hover:scale-105 duration-500 transition-transform`}
            >
              <div className="flex flex-col items-center">
                <div className="-mt-[13px] mb-[17px] relative">
                  <Image
                    src="/images/Learning-card-design.png"
                    height={100}
                    width={1000}
                    alt="Learning-card-design"
                    className="mx-auto w-full h-auto"
                  />
                  <Image
                    src={card.icon}
                    height={35}
                    width={35}
                    alt="SWOT"
                    className="mx-auto absolute inset-0 top-5"
                  />
                </div>
                <p className="p-6 pt-5 pb-20 text-center text-xl text-[#001E60]">
                  {card.title}
                </p>
                <div
                  className={`${card.bottomBg} w-full p-2 rounded-bl-2xl rounded-br-2xl min-h-[20px] absolute bottom-0 text-center flex flex-col justify-center shadow-[0_-2px_12px_0_rgb(204,204,204)]`}
                >
                  <div className={`text-md ${card.color} h-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {currentIndex < initialCards.length && (
          <div className="sm:mt-0 flex justify-center md:mt-8">
            <SecondaryButton
              onClick={handleLoadMore}
              text="Load more"
              className="w-[120px] text-semibold bg-white "
            />
          </div>
        )}
      </div>
    </>
  );
}
