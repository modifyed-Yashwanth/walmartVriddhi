import React from "react";
import Image from "next/image";
import { StoryData } from "@/types/types";
import he from "he";

type Props = {
  announcement: StoryData;
  onTitleClick?: () => void;
};

function VridihNewsCard({ announcement, onTitleClick }: Props) {
  const imageUrl =
    announcement?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const title = announcement?.title?.rendered || "";
  const source = announcement?.acf?.media_name || "";
  // const sourceLink = announcement.acf.media_link || "";
  const date = new Date(announcement?.date as string).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const decodedTitle = he.decode(title);

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <div className="relative w-full sm:w-[120px] md:w-[50%] h-[140px] sm:h-[160px] overflow-hidden rounded-lg shrink-0">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="story thumbnail"
            fill
            className="object-cover rounded-lg"
          />
        )}
      </div>
      <div className="flex flex-col justify-between mt-2 sm:mt-0">
        {source && (
          <span className="text-xs font-normal text-[#0053e2] uppercase mb-1">
            {source}
          </span>
        )}
        <button
          onClick={onTitleClick}
          className="text-sm font-normal leading-tight text-left hover:text-[#0053e2] line-clamp-3 cursor-pointer"
          dangerouslySetInnerHTML={{ __html: decodedTitle }}
        />
        <span className="text-[12px]">{date}</span>
      </div>
    </div>
  );
}

export default VridihNewsCard;
