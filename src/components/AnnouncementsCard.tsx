import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { SuccessNarrativeCardProps } from "@/types/types";
import { SecondaryButton } from "./buttons";
import he from "he";

function AnnouncementsCard({
  title,
  slug,
  alt,
  image,
  date,
  source,
}: SuccessNarrativeCardProps) {
  const decodedTitle = he.decode(title);
  const formattedDate = new Date(date as string).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Card className="flex flex-col sm:flex-row h-auto sm:h-[240px] md:h-[260px] w-full overflow-hidden">
      {/* Image (full width on mobile, 30% on desktop) */}
      <div className="w-full sm:w-[35%] h-[200px] md:h-full relative">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-center sm:object-left"
        />
      </div>

      {/* Text content (full width on mobile, 70% on desktop) */}
      <div className="w-full sm:w-[65%] p-4 flex flex-col justify-between space-y-3 sm:space-y-4">
        <h2 className="uppercase font-normal text-[#0053E2] text-sm">
          {source}
        </h2>
        <div className="flex flex-col gap-3 sm:gap-4">
          <h2 className="text-sm md:text-md font-semibold line-clamp-3 mb-1">
            {decodedTitle}
          </h2>
          <div className="mt-3 sm:mt-0">
            <SecondaryButton
              href={`/newsroom/${slug}`}
              text="Read more"
              variant="secondary"
            />
          </div>
        </div>
        <p className="text-[12px] mt-3 md:mt-0">{formattedDate}</p>
      </div>
    </Card>
  );
}

export default AnnouncementsCard;
