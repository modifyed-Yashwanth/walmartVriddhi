"use client";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// import { formatPostDate } from "@/lib/helper";
// import { fetchNewsroomAnnouncementBySlug } from "@/services/newsRoomService";
// import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
// import { useParams } from "next/navigation";
import React from "react";

const NewsroomAnnouncement = () => {
  //   const params = useParams();
  //   const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  //   const { data, isLoading, isError } = useQuery({
  //     queryKey: ["newsroom-slug", slug],
  //     queryFn: () => fetchNewsroomAnnouncementBySlug(slug as string),
  //     enabled: !!slug,
  //   });

  //   if (isLoading) {
  //     return <div className="p-8 my-14">Loading story...</div>;
  //   }

  //   if (isError || !data) {
  //     return <div className="p-8 text-red-500">Failed to load story.</div>;
  //   }

  //   const date = formatPostDate(data?.date);

  return (
    <>
      <div>
        <div className="text-xs font-normal cursor-pointer flex gap-3 my-2 sm:my-2 md:my-2 pb-4">
          <Link href="/" className="flex gap-x-2">
            <span className="underline">Home</span> &gt;
          </Link>
          <Link href="/newsroom" className="flex gap-x-2">
            <span className="underline">News</span> &gt;
          </Link>
          {/* <p className="capitalize">{slug?.split("-").join(" ")}</p> */}
          <p className="capitalize">
            Walmart Releases 2025 Annual Report and Proxy Statement
          </p>
        </div>
        <Separator className="mb-5" />
        <div className="bg-white py-4 space-y-8 mb-10">
          {/* Title */}
          <h1 className="text-2xl font-[300] mb-4 ">
            Walmart Vriddhi empowers 50,000+ MSMEs to join retail supply chains
            through digital training and mentorship
          </h1>
          {/* <h1
          className="text-2xl font-[300] mb-4 "
          dangerouslySetInnerHTML={{ __html: data.title.rendered }}
        /> */}

          <div className="text-sm space-x-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4">
            {/* <span>{date}</span> */}
            <span>May 12, 2025</span>
            <div className="flex space-x-2 gap-4 sm:gap-4">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
              <i className="fas fa-envelope"></i>
              <i className="fas fa-link"></i>
            </div>
          </div>

          <div className="relative w-full h-[150px] md:h-[300px] lg:h-[420px] rounded-lg overflow-hidden">
            <Image
              src="/images/resource-hub-hero.png"
              alt="success stories hero image"
              className="object-cover object-top"
              fill
              priority
            />
          </div>
          {/* Content */}
          {/* <div
          className=" max-w-none prose-lg mx-18 leading-[2] text-sm newsroom-heading-stale"
          dangerouslySetInnerHTML={{ __html: data.content.rendered }}
        /> */}
        </div>
      </div>
      <div className="w-full bg-[#f3f3f3] rounded-xl px-4 md:px-12 py-10 prose-lg leading-[2] text-sm newsroom-heading-stale">
        <h2 className="text-3xl font-[300] mb-4 text-[#0053e2]">
          Lorem ipsum dolor sit amet consectetur. Arcu neque convallis turpis
          congue in vitae.
        </h2>
        {Array.from({ length: 3 }, (_, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            reprehenderit maiores possimus non sed odio accusamus omnis
            voluptatibus dolores quisquam ullam fugit earum qui nemo eos, quas
            rem vitae provident.
          </p>
        ))}
      </div>

      <div className="w-full  px-8 md:px-14 lg:px-34 py-12 prose-lg  leading-[2] text-sm newsroom-heading-stale">
        <h1 className="text-3xl font-[300] mb-4">
          Lorem ipsum dolor sit amet consectetur. Arcu neque convallis turpis
          congue in vitae.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam
          placeat consequatur possimus tempore nam accusamus culpa dolor
          corrupti consectetur labore voluptas non ex nobis debitis iusto, esse,
          repudiandae ratione.
        </p>
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden">
          <Image
            src="/images/resource-hub-2.png"
            alt="success stories hero image"
            className="object-cover object-top"
            fill
            priority
          />
        </div>
      </div>

      <div className="w-full bg-gray-200 px-8 md:px-14 lg:px-34 py-12 prose-lg  leading-[2] text-sm newsroom-heading-stale">
        <h1 className="text-3xl font-[300] mb-4">
          Lorem ipsum dolor sit amet consectetur. Arcu neque convallis turpis
          congue in vitae.
        </h1>
        {Array.from({ length: 3 }, (_, index) => (
          <p key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            reprehenderit maiores possimus non sed odio accusamus omnis
            voluptatibus dolores quisquam ullam fugit earum qui nemo eos, quas
            rem vitae provident.
          </p>
        ))}
      </div>

      <div className="px-8 md:px-14 lg:px-34 py-24  prose-lg">
        <Card className="flex flex-col-reverse md:flex-row overflow-hidden rounded-2xl shadow">
          {/* Text section: left on desktop, below on mobile */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center bg-white">
            <h2 className="text-lg font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Sit senectus gravida leo
              ornare facilisis platea amet. Semper mauris id euismod dictum.
              Accumsan elit morbi at ut adipiscing elementum nibh mauris
              phasellus.
            </p>
          </div>

          {/* Image section: right on desktop, top on mobile */}
          <div className="relative md:w-1/2 w-full h-[200px] md:h-auto">
            <Image
              src="/images/resource-hub-card.png"
              alt="Person in store"
              className="object-cover"
              fill
              priority
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default NewsroomAnnouncement;
