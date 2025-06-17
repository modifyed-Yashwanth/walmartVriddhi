import React, { useState } from "react";
import { fetchNewsRoomVridhiNews } from "@/services/newsRoomService";
import { StoryData } from "@/types/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SecondaryButton } from "./buttons";
import { Separator } from "./ui/separator";
import VridihNewsCard from "./VridihNewsCard";
import VridhiNewsModal from "./VridhiNewsModal";

const pageSize = 6;

function VridhiNewsTab() {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery<StoryData[], Error>({
    queryKey: ["vridhi-news"],
    queryFn: async ({ pageParam = 1 }) =>
      await fetchNewsRoomVridhiNews(pageSize, pageParam as number),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < pageSize ? undefined : allPages.length + 1;
    },
    initialPageParam: 1,
  });

  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<StoryData | null>(null);

  if (isLoading && !data) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  const announcements = data?.pages.flat() || [];

  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-y-6 sm:gap-y-6 lg:gap-y-10">
        {Array.from(
          { length: Math.ceil(announcements.length / 2) },
          (_, rowIndex) => {
            const rowItems = announcements.slice(
              rowIndex * 2,
              rowIndex * 2 + 2
            );
            return (
              <div key={rowIndex} className="flex flex-col gap-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-x-16">
                  {rowItems.map((announcement, index) => (
                    <VridihNewsCard
                      key={index}
                      announcement={announcement}
                      onTitleClick={() => setSelectedAnnouncement(announcement)}
                    />
                  ))}
                </div>
                <Separator className="my-2 lg:my-8" />
              </div>
            );
          }
        )}
      </div>

      {hasNextPage && (
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
          <SecondaryButton
            text={isFetchingNextPage ? "Loading..." : "Load More"}
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            variant="secondary"
          />
        </div>
      )}

      {isError && <p className="text-red-500 mt-4">Failed to load stories.</p>}

      {selectedAnnouncement && (
        <VridhiNewsModal
          announcement={selectedAnnouncement}
          onClose={() => setSelectedAnnouncement(null)}
        />
      )}
    </div>
  );
}

export default VridhiNewsTab;
