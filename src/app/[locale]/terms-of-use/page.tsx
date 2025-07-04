"use client";

import React from "react";
// import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchTermsOfUse } from "@/services/termsOfUseService";

function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ["privacy-policy"],
    queryFn: fetchTermsOfUse,
  });

  if (isLoading)
    return <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-[70px]">Loading...</div>;

  return (
    <>
      {/* Hero Section */}
      <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-[70px]">
        <div className="mx-0 sm:mx-4 md:mx-8 lg:mx-[100px]">
          <div className="relative w-full my-2 sm:my-4 md:my-8 space-y-6 sm:space-y-10 md:space-y-14">
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
