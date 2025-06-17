"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { SecondaryButton } from "@/components/buttons";
import { Separator } from "@/components/ui/separator";
import { fetchSuccessStoriesVideos } from "@/services/successStoryService";
import { StoryData } from "@/types/types";
import VideosSlider from "./VideosSlider";
import SuccessVideoCard from "./SuccessVideoCard";

const pageSize = 6;

export default function VideosTab() {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery<StoryData[], Error>({
    queryKey: ["success-videos"],
    queryFn: async ({ pageParam = 1 }) =>
      await fetchSuccessStoriesVideos(pageSize, pageParam as number),
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

  const stories = data?.pages.flat() || [];
  const spotlightVideos = stories.slice(0, 5);

  return (
    <div className="mx-0 sm:mx-4 md:mx-8 lg:mx-[100px]">
      {/* Spotlight */}
      <div className="flex flex-col items-start w-full">
        <h2 className="text-2xl md:text-4xl font-[300] mb-4">In The Spotlight</h2>
        <VideosSlider slides={spotlightVideos} />
      </div>

      <Separator className="my-8" />
      <div className="flex items-start w-full mb-6">
        <h2 className="text-2xl md:text-4xl font-[300]">Explore More Videos</h2>
      </div>

      {/* Stories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {stories.map((story, index) => (
          <SuccessVideoCard
            key={index}
            videoLink={story?.acf.video_link as string}
            videoLength={"1:00"}
            videoTitle={story?.title.rendered}
            thumbnail={story?._embedded["wp:featuredmedia"][0].source_url}
          />
        ))}
      </div>

      {/* Load More */}
      {hasNextPage && (
        <div className="flex justify-center mt-8 md:mt-10">
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
