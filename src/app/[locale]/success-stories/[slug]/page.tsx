"use client";

import SuccessNarrativeCard from "@/components/SuccessNarrativeCard";
import { Separator } from "@/components/ui/separator";
import {
  fetchSuccessStoriesNarratives,
  fetchSuccessStoryBySlug,
} from "@/services/successStoryService";
import { StoryData } from "@/types/types";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import Seo from "@/components/misc/Seo";
import he from "he";

const pageSize = 10;

function SuccessStoryDetails() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["success-slug", slug],
    queryFn: () => fetchSuccessStoryBySlug(slug as string),
    enabled: !!slug, // Only run query if slug exists
  });

  const {
    data: storiesData,
    isLoading: isStoriesDataLoading,
    isError: isStoriesDataError,
  } = useInfiniteQuery<StoryData[], Error>({
    queryKey: ["success-stories"],
    queryFn: async ({ pageParam = 1 }) =>
      await fetchSuccessStoriesNarratives(pageSize, pageParam as number),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < pageSize ? undefined : allPages.length + 1;
    },
    initialPageParam: 1,
  });

  if (isLoading || isStoriesDataLoading) {
    return <div className="p-8 my-14">Loading story...</div>;
  }

  if (isError || !data || isStoriesDataError) {
    return <div className="p-8 text-red-500">Failed to load story.</div>;
  }

  const stories = storiesData?.pages.flat() || [];

  const plainDesc = he.decode(data.excerpt.rendered.replace(/<[^>]*>/g, ""));

  return (
    <>
      <Seo
        title={data.title.rendered}
        description={plainDesc}
        url={`https://www.walmartvriddhi.org/success-stories/${slug}`}
        image={data?.acf.author_profile_new?.url}
        structuredData={{
          "@context": "https://schema.org/",
          "@type": "WebSite",
          name: "walmartvriddhi",
          url: "https://www.walmartvriddhi.org/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.walmartvriddhi.org/{search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <div>
        <div className="text-xs font-normal cursor-pointer block md:flex gap-3 my-2 sm:my-2 md:my-2 pb-4">
          <Link href="/" className="flex gap-x-2 mb-2 md:mb-0">
            <span className="underline">Home</span> &gt;
          </Link>
          <Link href="/success-stories" className="flex gap-x-2 mb-2 md:mb-0">
            <span className="underline">Success Story</span> &gt;
          </Link>
          <p className="capitalize">{slug?.split("-").join(" ")}</p>
        </div>
        <Separator className="" />
        <div className="md:py-10 block md:grid grid-cols-1 md:grid-cols-10 gap-7 md:gap-15 items-center justify-between">
          <div className="relative rounded-lg overflow-hidden max-w-full md:max-w-[300px] mx-auto md:mr-0 col-span-4 bg-[#f3f3f3]">
            <Image
              src={data?.acf.author_profile_new?.url}
              height={300}
              width={500}
              alt="Success Story Image"
              className="h-auto w-full"
            />
          </div>

          <div className="flex flex-col w-full justify-center my-10 lg:my-15 col-span-6">
            <div className="flex gap-x-2 text-[#0053e2] mb-3">
              <p className="font-bold">MSME Superpower:</p>
              <p className="text-[#0053e2] mb-3">{` ${data?.acf.primary_category}`}</p>
            </div>
            <h2 className="text-2xl md:text-4xl w-[75%] mb-2">
              {data?.acf.author_name}
            </h2>
            <h3 className="text-lg lg:text-2xl">
              {" "}
              {data?.acf.author_designation}
            </h3>
          </div>
        </div>
        <div className="bg-[#f3f3f3] py-6 md:py-10 px-8 flex flex-col items-center justify-center gap-y-8 rounded-xl">
          <h1 className="text-[#0053e2] text-2xl md:text-3xl text-center font-[300]">
            <span
              dangerouslySetInnerHTML={{ __html: data?.title.rendered }}
            ></span>
          </h1>
          <div className="relative w-[90%] lg:w-[60%] mt-8">
            <Quote
              className="rotate-360 scale-x-[-1] absolute -top-8 -left-12"
              fill="#0053e2"
              color="#0053e2"
              size="30px"
            />
            <Quote
              className="rotate-180 scale-x-[-1] absolute -bottom-6 -right-4"
              fill="#0053e2"
              color="#0053e2"
              size="30px"
            />
            <div
              className="text-sm space-y-2"
              dangerouslySetInnerHTML={{ __html: data?.acf.short_descriptions }}
            />
          </div>
        </div>
        <div className="pb-10 font-[300] ">
          <div
            className="mb-3 space-y-2 para-heading-stale"
            dangerouslySetInnerHTML={{ __html: data?.acf["heading-1"] }}
          />
          <div
            className="mb-3 space-y-2 "
            dangerouslySetInnerHTML={{
              __html: data?.acf["cloumn-1_heading-1"],
            }}
          />
          <div
            className="mb-3 space-y-2 "
            dangerouslySetInnerHTML={{
              __html: data?.acf["cloumn-2_heading-1"],
            }}
          />
          <div
            className="mb-3 space-y-2 "
            dangerouslySetInnerHTML={{
              __html: data?.acf["cloumn-3_heading-1"],
            }}
          />

          <div
            className="mb-3 space-y-2 para-heading-stale"
            dangerouslySetInnerHTML={{ __html: data?.acf["heading-2"] }}
          />
          <div
            className="mb-3 space-y-2"
            dangerouslySetInnerHTML={{ __html: data?.acf[`descheading-2`] }}
          />
        </div>
        <div className="">
          <div className="relative w-full block md:flex gap-6 rounded-lg overflow-hidden">
            <Image
              src={data?.acf["product-image-left"].sizes.large}
              alt={data?.acf[`heading-2`] || "Success Story Image"}
              width={data?.acf["product-image-left"].width}
              height={data?.acf["product-image-left"].height}
              className="w-full h-auto rounded-xl"
            />

            <Image
              src={data?.acf["product-image-right"].sizes.large}
              alt={data?.acf[`heading-2`] || "Success Story Image"}
              width={data?.acf["product-image-right"].width}
              height={data?.acf["product-image-right"].height}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        <div className="pb-10 font-[300]">
          <div
            className="mb-3 para-heading"
            dangerouslySetInnerHTML={{ __html: data?.acf[`paragraph-heading`] }}
          />
        </div>

        <div className="bg-[#F7F7F7] h-auto py-10 px-4 md:px-12 rounded-xl">
          <div className="flex flex-col items-start">
            <div
              className="mb-3 para-heading"
              dangerouslySetInnerHTML={{
                __html: data?.acf[`description_below_images`],
              }}
            />
            <div
              className="mb-3 para-heading"
              dangerouslySetInnerHTML={{
                __html: data?.acf[`paragraph_heading-1`],
              }}
            />
            <div
              className="mb-3 para-heading"
              dangerouslySetInnerHTML={{
                __html: data?.acf[`paragraph_end`],
              }}
            />
          </div>
        </div>

        <div>
          <div className="my-10">
            <div className="flex items-start w-full mb-6">
              <h2 className="text-2xl md:text-4xl">Explore More Stories</h2>
            </div>

            {/* Swiper for slides */}
            <Swiper
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              modules={[Pagination]}
              className="mySwiper !pb-12"
            >
              {/* Creating slides with 2 cards each */}
              {Array.from({ length: Math.ceil(stories.length / 2) }).map(
                (_, index) => (
                  <SwiperSlide key={index}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {stories
                        .slice(index * 2, index * 2 + 2)
                        .map((story, idx) => (
                          <SuccessNarrativeCard
                            key={story.id || idx}
                            title={story?.title.rendered}
                            slug={story?.slug}
                            description={story?.excerpt.rendered}
                            image={
                              story?.acf.author_profile_new?.url ||
                              story?._embedded?.["wp:featuredmedia"]?.[0]
                                ?.source_url
                            }
                            alt={story?.title.rendered}
                            author={story?.acf.author_name}
                            authorDesignation={story?.acf.author_designation}
                          />
                        ))}
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessStoryDetails;
