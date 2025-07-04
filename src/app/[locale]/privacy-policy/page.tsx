"use client";

import React from "react";
// import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchPrivacyPolicy } from "@/services/privacyPolicyService";

function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ["privacy-policy"],
    queryFn: fetchPrivacyPolicy,
  });

  if (isLoading)
    return <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-[70px]">Loading...</div>;

  return (
    <>
      {/* Hero Section */}
      <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-[70px]">
        <h1 className="mx-0 sm:mx-4 md:mx-8 lg:mx-[100px] text-2xl font-semibold">
          Privacy Policy
        </h1>

        <div className="mx-0 sm:mx-4 md:mx-8 lg:mx-[100px]">
          <div className="relative w-full my-6 sm:my-10 md:my-12 space-y-6 sm:space-y-10 md:space-y-14">
            {data && data[0]?.content?.rendered && (
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
