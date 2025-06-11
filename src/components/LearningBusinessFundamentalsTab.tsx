import React, { useState } from "react";
import Image from "next/image";
import { SecondaryButton } from "./buttons";

const initialCards = [
  {
    icon: "/images/Channel-Based Costing.svg",
    title: "Channel-Based Costing",
    bg: "bg-[#A9DDF7]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#A9DDF7]",
  },
  {
    icon: "/images/Introduction to Supply Chain.svg",
    title: "Introduction to Supply Chain",
    bg: "bg-[#4DBDF5]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#4DBDF5]",
  },
  {
    icon: "/images/Pitch and Customer Value Proposition.svg",
    title: "Pitch and Customer Value Proposition",
    bg: "bg-[#0053E2]",
    color: "text-white",
    bottomBg: "bg-[#0053E2]",
  },
  {
    icon: "/images/Digital Enablement (1).svg",
    title: "Digital Enablement",
    bg: "bg-[#A9DDF7]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#A9DDF7]",
  },
  {
    icon: "/images/MSME Response to Covid-19.svg",
    title: "MSME Response to Covid-19",
    bg: "bg-[#4DBDF5]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#4DBDF5]",
  },
  {
    icon: "/images/Raising Capital and Leveraging Support.svg",
    title: "Raising Capital and Leveraging Support",
    bg: "bg-[#0053E2]",
    color: "text-white",
    bottomBg: "bg-[#0053E2]",
  },
  {
    icon: "/images/Innovation.svg",
    title: "Innovation",
    bg: "bg-[#A9DDF7]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#A9DDF7]",
  },
  {
    icon: "/images/Trade Promotions and Visual Merchandising.svg",
    title: "Trade Promotions and Visual Merchandising",
    bg: "bg-[#4DBDF5]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#4DBDF5]",
  },
  {
    icon: "/images/Workforce Motivation.svg",
    title: "Workforce Motivation",
    bg: "bg-[#0053E2]",
    color: "text-white",
    bottomBg: "bg-[#0053E2]",
  },
  {
    icon: "/images/Way Forward Strategy.svg",
    title: "Way Forward Strategy",
    bg: "bg-[#A9DDF7]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#A9DDF7]",
  },
  {
    icon: "/images/Cost Competitiveness.svg",
    title: "Cost Competitiveness",
    bg: "bg-[#4DBDF5]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#4DBDF5]",
  },
  {
    icon: "/images/Risk and Legal Responsible Sourcing.svg",
    title: "Risk and Legal Responsible Sourcing",
    bg: "bg-[#0053E2]",
    color: "text-white",
    bottomBg: "bg-[#0053E2]",
  },
  {
    icon: "/images/Marketing.svg",
    title: "Marketing",
    bg: "bg-[#A9DDF7]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#A9DDF7]",
  },
  {
    icon: "/images/Basics of Finance.svg",
    title: "Basics of Finance",
    bg: "bg-[#4DBDF5]",
    color: "text-[#001E60]",
    bottomBg: "bg-[#4DBDF5]",
  },
];

export default function LearningBusinessFundamentalsTab() {
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
          The program helps you gain a foundational understanding of business
          management, with a special focus on the global shift towards
          eCommerce. Frameworks and established theories will guide you on how
          to modernise and expand your businesses.
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
                    className="mx-auto absolute inset-0 top-3"
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
              className="w-[120px] text-semibold bg-white"
            />
          </div>
        )}
      </div>
    </>
  );
}
