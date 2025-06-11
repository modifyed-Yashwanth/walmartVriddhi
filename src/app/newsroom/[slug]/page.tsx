"use client";
import Seo from "@/components/misc/Seo";
import { Separator } from "@/components/ui/separator";
import { formatPostDate } from "@/lib/helper";
import { fetchNewsroomAnnouncementBySlug } from "@/services/newsRoomService";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import he from "he"

const NewsroomAnnouncement = () => {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["newsroom-slug", slug],
    queryFn: () => fetchNewsroomAnnouncementBySlug(slug as string),
    enabled: !!slug,
  });

  if (isLoading) {
    return <div className="p-8 my-14">Loading story...</div>;
  }

  if (isError || !data) {
    return <div className="p-8 text-red-500">Failed to load story.</div>;
  }

  const date = formatPostDate(data?.date);

  const handleSocialShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(data.title.rendered);

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${title}&body=${url}`;
        break;
      case "copy":
        navigator.clipboard.writeText(window.location.href);
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  const plainDesc = he.decode(data.excerpt.rendered.replace(/<[^>]*>/g, ''));

  return (
    <>
     <Seo
        title={data.title.rendered}
        description={plainDesc}
        url={`https://www.walmartvriddhi.org/newsroom/${slug}`}
        image={data?._embedded["wp:featuredmedia"]?.[0]?.source_url}
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
    
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="text-xs font-normal cursor-pointer block md:flex gap-3 my-2 sm:my-2 md:my-2 pb-4">
        <Link href="/" className="flex gap-x-2 mb-2 md:mb-0">
          <span className="underline">Home</span> &gt;
        </Link>
        <Link href="/newsroom" className="flex gap-x-2 mb-2 md:mb-0">
          <span className="underline">Newsroom</span> &gt;
        </Link>
        <p className="capitalize">{slug?.split("-").join(" ")}</p>
      </div>
      <Separator className="" />

      {/* Content Section */}
      <div className="bg-white space-y-6 sm:space-y-8 pt-6 md:pt-10">
        {/* Title */}
        <h1
          className="text-xl sm:text-2xl md:text-3xl font-[300] mb-4 text-black"
          dangerouslySetInnerHTML={{ __html: data.title.rendered }}
        />

        {/* Date and Social Share */}
        <div className="text-sm flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <span className="text-black">{date}</span>
          <div className="flex gap-4 sm:gap-5 text-black">
              <i
                className="fab fa-facebook cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => handleSocialShare("facebook")}
                title="Share on Facebook"
              />
              <i
                className="fab fa-linkedin cursor-pointer hover:text-blue-700 transition-colors"
                onClick={() => handleSocialShare("linkedin")}
                title="Share on LinkedIn"
              />
              <i
                className="fab fa-x-twitter cursor-pointer hover:text-blue-400 transition-colors"
                onClick={() => handleSocialShare("twitter")}
                title="Share on Twitter"
              />
            <i
              className="fas fa-envelope cursor-pointer hover:text-red-500 transition-colors"
              onClick={() => handleSocialShare("email")}
              title="Share via Email"
            />
            <i
              className="fas fa-link cursor-pointer hover:text-gray-600 transition-colors"
              onClick={() => handleSocialShare("copy")}
              title="Copy Link"
            />
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full flex justify-center">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] rounded-xl overflow-hidden">
            <Image
              src={data?.acf["inside_banner"]}
              alt={"Newsroom announcement details"}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <style>{`
           .newsroom-content ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin-bottom: 1rem;
          }

           .newsroom-content ol {
            list-style-type: decimal;
            padding-left: 1.5rem;
            margin-bottom: 1rem;
          }

           .newsroom-content li {
            margin-bottom: 0.5rem;
          }
        `}</style>
        <div
          className="prose prose-sm sm:prose-base md:prose-lg max-w-none leading-relaxed sm:leading-relaxed md:leading-relaxed newsroom-heading-stale newsroom-content"
          dangerouslySetInnerHTML={{ __html: data.content.rendered }}
        />
      </div>
    </div>
    </>
  );
};

export default NewsroomAnnouncement;
