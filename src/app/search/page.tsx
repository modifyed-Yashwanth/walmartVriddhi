"use client";

import { useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { fetchSearchQuery } from "@/services/searchService";
import { StoryData } from "@/types/types";
import { SecondaryButton } from "@/components/buttons";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [totalPages, setTotalPages] = useState<number | null>(null);

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<StoryData[], Error>({
    queryKey: ["search", query],
    queryFn: async ({ pageParam }: { pageParam?: unknown }) => {
      const { data, totalPages } = await fetchSearchQuery(
        query,
        9,
        Number(pageParam)
      );
      if (pageParam === 1) {
        setTotalPages(totalPages);
      }
      return data;
    },
    enabled: !!query,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 9) return undefined;
      return allPages.length + 1;
    },
  });

  const items: StoryData[] = data?.pages.flat() ?? [];
  // console.log(items);

  return (
    <div className="p-6">
      <h3 className="mb-4 text-md">
        Showing {totalPages} result{items.length !== 1 ? "s" : ""} for &quot;
        <span className="font-semibold">{query}</span>&quot;
      </h3>

      {isLoading && <p className="text-gray-500 text-center">Loading...</p>}
      {isError && <p className="text-red-500">Error fetching results.</p>}

      {!isLoading && items.length === 0 && (
        <p className="text-gray-500">No results found.</p>
      )}

      {items.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item: StoryData) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 flex flex-col"
                >
                  {item.acf.inside_banner ? (
                    <Image
                      src={item.acf.inside_banner}
                      alt={item.title.rendered}
                      width={100}
                      height={100}
                      className="w-full h-40 object-cover rounded-xl mb-3"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-200 rounded-xl mb-3 flex items-center justify-center text-gray-500 text-sm">
                      No Image
                    </div>
                  )}

                  <h2 className="text-md mb-2">
                    <Link
                      href={
                        item.categories?.[0] === 13
                          ? `/newsroom/${item.slug}`
                          : item.categories?.[0] === 12
                          ? `/success-stories/${item.slug}`
                          : item.categories?.[0] === 125
                          ? `${item.acf?.media_link}`
                          : "#"
                      }
                      rel="noopener noreferrer"
                    >
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `${item.title.rendered} ${item.acf?.author_name ? ' - <strong>'+item.acf?.author_name+'</strong>': ''}`,
                        }}
                      ></p>
                    </Link>
                  </h2>

                  <Link
                     href={
                        item.categories?.[0] === 13
                          ? `/newsroom/${item.slug}`
                          : item.categories?.[0] === 12
                          ? `/success-stories/${item.slug}`
                          : item.categories?.[0] === 125
                          ? `${item.acf?.media_link}`
                          : "#"
                      }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-[#0053e2] text-sm font-medium hover:underline"
                  >

                    Read more
                  </Link>
                </div>
              ))}
          </div>

          {hasNextPage && (
            <div className="flex justify-center mt-8">
              <SecondaryButton
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className=" py-2 px-6 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                text={isFetchingNextPage ? "Loading..." : "Load More"}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
