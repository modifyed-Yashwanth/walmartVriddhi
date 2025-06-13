import React, { useState } from "react";
import LearningAdvancedBusinessTab from "./LearningAdvancedBusinessTab";
import LearningBusinessFundamentalsTab from "./LearningBusinessFundamentalsTab";

export default function LearningTab() {
  const [activeTab, setActiveTab] = useState<
    "business-fundamentals" | "advanced-business"
  >("advanced-business");
  return (
    <>
      <div className="pt-5">
        <div className="flex flex-col items-start w-full">
          <h2 className="text-2xl md:text-4xl mb-2">Learning</h2>
          <p className="mb-2">
            Walmart Vriddhi provides tailored support to help MSMEs realize and
            accelerate business growth potential.
          </p>
          <hr className="my-6 border-2 border-gray-300 w-full" />
        </div>
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 md:gap-x-12 items-center justify-center w-full max-w-md sm:max-w-none px-4 sm:px-0">
          <button
            className={`rounded-[4px] px-2 py-0 cursor-pointer ${
              activeTab === "advanced-business"
                ? "border-0 border-b-3 border-black"
                : ""
            }`}
            onClick={() => setActiveTab("advanced-business")}
          >
            {" "}
            Advanced Business{" "}
          </button>
          <button
            className={`rounded-[4px] px-2 py-0 cursor-pointer ${
              activeTab === "business-fundamentals"
                ? "border-0 border-b-3 border-black"
                : ""
            }`}
            onClick={() => setActiveTab("business-fundamentals")}
          >
            {" "}
            Business Fundamentals{" "}
          </button>
        </div>
        {/* Tab-specific Content */}
        <div className="w-full px-4 sm:px-0 pb-6">
          {activeTab === "advanced-business" && <LearningAdvancedBusinessTab />}
          {activeTab === "business-fundamentals" && (
            <LearningBusinessFundamentalsTab />
          )}
        </div>
      </div>
    </>
  );
}
