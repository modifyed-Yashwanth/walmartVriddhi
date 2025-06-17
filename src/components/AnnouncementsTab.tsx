"use client";
import { fetchNewsRoomAnnouncements } from "@/services/newsRoomService";
import { StoryData } from "@/types/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import AnnouncementsCard from "./AnnouncementsCard";
import { SecondaryButton } from "./buttons";

const pageSize = 3;

function AnnouncementsTab() {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery<StoryData[], Error>({
    queryKey: ["announcements"],
    queryFn: async ({ pageParam = 1 }) =>
      await fetchNewsRoomAnnouncements(pageSize, pageParam as number),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < pageSize ? undefined : allPages.length + 1;
    },
    initialPageParam: 1,
  });

  // ⛔ Only block render if there's NO data and it's still loading
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
      {/* announcements */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 w-full">
        {announcements.map((story, index) => (
          <AnnouncementsCard
            key={story.id || index}
            title={story?.title.rendered}
            slug={story?.slug}
            description={story?.excerpt.rendered}
            image={story?._embedded["wp:featuredmedia"]?.[0]?.source_url}
            alt={story?.title.rendered}
            author={story?.acf.author_name}
            authorDesignation={story?.acf.author_designation}
            date={story?.date}
            source={story?.acf.source}
          />
        ))}
      </div>

      {/* Load More */}
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

      {/* Error */}
      {isError && <p className="text-red-500 mt-4">Failed to load stories.</p>}
    </div>
  );
}

export default AnnouncementsTab;
