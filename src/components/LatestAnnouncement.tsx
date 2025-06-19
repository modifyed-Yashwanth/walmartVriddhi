import { LatestAnnouncementProps } from "@/types/types";
// import Image from "next/image";
import { SecondaryButton } from "./buttons";

// Latest announcement card layout
export const LatestAnnouncement = ({
  latestLoading,
  latestError,
  latestData,
}: LatestAnnouncementProps) => {
  if (latestLoading)
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">Loading latest announcement...</p>
      </div>
    );
  if (latestError || !latestData?.[0]) return null;

  const story = latestData[0];
  //   const image = story?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const date = new Date(story?.date as string).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-[300] mb-8 mt-5 md:mt-0">
        Latest Announcement
      </h1>
      <div className="w-full mb-8 bg-[#F5F6FA] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-stretch gap-8">
        {/* Image or Placeholder */}
        {/* <div className="flex-shrink-0 w-full md:w-[480px] h-[260px] md:h-[280px] bg-[#D9D9D9] rounded-xl flex items-center justify-center overflow-hidden mb-6 md:mb-0">
          {image ? (
            <Image
              src={image}
              alt={story?.title?.rendered || "Announcement"}
              className="object-cover w-full h-full"
              width={480}
              height={280}
            />
          ) : (
            <span className="text-2xl font-semibold text-[#6B7280]">
              IMAGE PLACEHOLDER
            </span>
          )}
        </div> */}
        {/* Content */}
        <div className="flex flex-col justify-between flex-1 gap-6">
          <h2 className="text-lg md:text-2xl font-normal">
            {story?.title?.rendered}
          </h2>
          <p
            className="text-[14px] md:text-[16px] mb-4"
            dangerouslySetInnerHTML={{ __html: story?.excerpt?.rendered || "" }}
          />
          <div className="flex flex-col gap-6">
            <SecondaryButton
              href={`/newsroom/${story.slug}`}
              className="max-w-fit"
              text="Read More"
              variant="secondary"
            />

            <span className="text-base text-[#002060] font-normal tracking-wide">
              {date}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
