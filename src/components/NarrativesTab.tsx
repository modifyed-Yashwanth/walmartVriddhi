"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { SecondaryButton } from "@/components/buttons";
import { Separator } from "@/components/ui/separator";
import SuccessNarrativeCard from "@/components/SuccessNarrativeCard";
import NarrativesSlider from "./NarrativesSlider";
import { fetchSuccessStoriesNarratives } from "@/services/successStoryService";

interface StoryData {
  id: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded: {
    "wp:featuredmedia": [{ source_url: string }];
  };
  acf: {
    author_profile_new: { url: string };
    author_name: string;
    author_designation: string;
  };
}

const pageSize = 10;

export default function NarrativesTab() {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery<StoryData[], Error>({
    queryKey: ["success-stories"],
    queryFn: async ({ pageParam = 1 }) =>
      await fetchSuccessStoriesNarratives(pageSize, pageParam as number),
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
  const spotlightStories = stories.slice(0, 3);

  return (
    <div className="mx-0 sm:mx-4 md:mx-8 lg:mx-[100px]">
      {/* Spotlight */}
      <div className="flex flex-col items-start w-full">
        <h2 className="text-2xl md:text-4xl font-[300] mb-4">In The Spotlight</h2>
        <NarrativesSlider slides={spotlightStories} />
      </div>

      <Separator className="my-8" />
      <div className="flex items-start w-full mb-6">
        <h2 className="text-2xl md:text-4xl font-[300]">Explore More Stories</h2>
      </div>

      {/* Stories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {stories.map((story, index) => (
          <SuccessNarrativeCard
            key={story.id || index}
            title={story?.title.rendered}
            slug={story?.slug}
            description={story?.excerpt.rendered}
            image={story?.acf.author_profile_new?.url || story?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
            alt={story?.title.rendered}
            author={story?.acf.author_name}
            authorDesignation={story?.acf.author_designation}
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
          />
        </div>
      )}

      {/* Error */}
      {isError && <p className="text-red-500 mt-4">Failed to load stories.</p>}
    </div>
  );
}
