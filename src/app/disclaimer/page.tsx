import { disclaimer } from "@/data/data";
import React from "react";

function page() {
  return (
    <div className="container mx-auto px-2 py-12 max-w-2xl">
      <h1
        className="text-3xl font-bold text-gray-900 mb-8 text-start
      "
      >
        Disclaimer
      </h1>
      <div className="prose prose-sm md:prose-base lg:prose-lg">
        <div className="whitespace-pre-line leading-relaxed text-gray-700">
          {disclaimer}
        </div>
      </div>
    </div>
  );
}

export default page;
