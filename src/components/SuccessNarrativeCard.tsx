import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { SuccessNarrativeCardProps } from "@/types/types";
import { SecondaryButton } from "./buttons";
import he from "he";

function SuccessNarrativeCard({
  title,
  slug,
  alt,
  image,
  author,
  authorDesignation,
}: SuccessNarrativeCardProps) {
  const decodedTitle = he.decode(title);
  return (
    <Card className="flex flex-col lg:flex-row h-full lg:h-[220px] w-full overflow-hidden justify-start text-start min-h-[280px]">
      {/* Image (full width on mobile, 40% on desktop) */}
      <div className="w-full sm:w-[50%] md:w-[100%] lg:w-[50%] sm:h-full relative">
        <Image
          src={image}
          alt={alt}
          height={220}
          width={400}
          className="object-cover object-top h-[200px] lg:h-full"
        />
      </div>

      {/* Text content (full width on mobile, 60% on desktop) */}
      <div className="w-full sm:w-[50%] md:w-[100%] lg:w-[50%] p-4 flex flex-col justify-between bg-[#F3F3F3]">
        <h2 className="text-[12px] font-semibold line-clamp-2 mb-2 sm:mb-0">
          {decodedTitle}
        </h2>
        <div className="my-3 lg:mt-0">
          <p className="text-[10px] font-normal text-[#0053E2] uppercase">
            {author}
          </p>
          <p className="text-[12px] text-gray-600">{authorDesignation}</p>
        </div>
        <div className="my-3 lg:mt-0">
          <SecondaryButton
            href={`/success-stories/${slug}`}
            text="Read more"
            className="w-[120px] text-semibold bg-white"
          />
        </div>
      </div>
    </Card>
  );
}

export default SuccessNarrativeCard;
