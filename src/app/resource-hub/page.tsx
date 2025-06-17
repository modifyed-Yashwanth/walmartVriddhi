"use client";

import { SecondaryButton } from "@/components/buttons";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchResourceHub } from "@/services/resourceHubService";
import MobileResourceSelect from "@/components/MobileResourceSelect";
import AnimatedSection from "@/components/AnimatedSection";
import Seo from "@/components/misc/Seo";

interface ResourceHubPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    tab_button_name: string;
    image_url?: string;
  };
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

const DEFAULT_TABS = [
  "Selling on Indian Marketplaces",
  "Selling on a US Marketplaces",
  "Expanding Access for Artisans, Weavers, and Rural Enterpreneurs",
  "Unlocking Digital Payments for Merchants",
  "Providing Financial Solutions for MSMEs",
];

export default function Page() {
  const { data: resources, isLoading } = useQuery<ResourceHubPost[]>({
    queryKey: ["resource-hub"],
    queryFn: () => fetchResourceHub(),
  });

  const [activeTab, setActiveTab] = useState<string>(DEFAULT_TABS[0]);

  // Group resources by tab name
  const groupedResources =
    resources?.reduce((acc, resource) => {
      const tabName = resource.acf.tab_button_name;
      if (!acc[tabName]) {
        acc[tabName] = [];
      }
      acc[tabName].push(resource);
      return acc;
    }, {} as Record<string, ResourceHubPost[]>) || {};

  const tabs = DEFAULT_TABS.map((tab) => ({
    id: tab,
    label: tab,
  }));

  return (
    <>
      <Seo
        title="Resource Hub - Walmart Vriddhi"
        description="Access tools, guides, and programs to help Indian MSMEs sell online, scale exports, adopt digital payments, and grow with Walmart Vriddhi."
        url="https://walmart-vriddhi.vercel.app/resource-hub"
        image="/favicon/android-chrome-192x192.png"
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

      {/* Hero Section */}
      <AnimatedSection>
        <div className="relative w-full h-[150px] md:h-[300px] lg:h-[420px] rounded-lg overflow-hidden">
          <Image
            src="/images/resource-hub/resource-hub-banner.jpg"
            alt="resource-hub hero image"
            className="object-cover object-top"
            fill
            priority
          />
        </div>
      </AnimatedSection>

      {/* Tabs + Cards */}
      <AnimatedSection>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-[300] mb-10 leading-tight my-8">
          Resource Hub
        </h1>
        <div className="flex flex-col items-center my-6 sm:my-10 space-y-6 sm:space-y-10 md:space-y-14">
          {/* Mobile Select */}
          <MobileResourceSelect
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Desktop Tabs */}
          <div className="hidden lg:flex flex-col sm:flex-row gap-4 sm:gap-x-6 md:gap-x-8 justify-center w-full max-w-md sm:max-w-none px-4 sm:px-0">
            {DEFAULT_TABS.map((tabName) => (
              <SecondaryButton
                key={tabName}
                text={tabName}
                className={`w-full sm:w-[220px] md:w-[260px] ${
                  activeTab === tabName
                    ? "bg-[#0053e2] text-white border-[#0053e2]"
                    : ""
                }`}
                onClick={() => setActiveTab(tabName)}
                variant={activeTab === tabName ? "primary" : "secondary"}
              />
            ))}
          </div>

          {/* Cards */}
          <div className="w-full px-4 md:px-12">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-gray-500 text-lg">Loading...</p>
              </div>
            ) : groupedResources[activeTab]?.length > 0 ? (
              groupedResources[activeTab]?.map((resource) => (
                <Card
                  key={resource.id}
                  className="overflow-hidden shadow-sm lg:flex lg:flex-row items-center gap-10 mb-10 bg-[#f3f3f3] p-6 md:p-10"
                >
                  <div
                    className={`w-full lg:w-5/12 ${
                      !resource._embedded?.["wp:featuredmedia"]?.[0]
                        ?.source_url && "bg-gray-200 h-[250px]"
                    } relative flex items-center justify-center text-sm rounded-xl overflow-hidden`}
                  >
                    {resource.featured_media > 0 &&
                    resource._embedded?.["wp:featuredmedia"]?.[0]
                      ?.source_url ? (
                      <Image
                        src={
                          resource._embedded["wp:featuredmedia"][0].source_url
                        }
                        alt={resource.title.rendered}
                        className="object-contain rounded-xlh-full w-full"
                        height={500}
                        width={500}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      "Image Placeholder"
                    )}
                  </div>
                  <CardContent className="p-0 lg:p-4 lg:w-7/12">
                    <h3
                      className="text-lg font-semibold mb-2"
                      dangerouslySetInnerHTML={{
                        __html: resource.title.rendered,
                      }}
                    />
                    <div
                      className="text-sm resource-link space-y-2"
                      dangerouslySetInnerHTML={{
                        __html: resource.content.rendered,
                      }}
                    />
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="flex justify-center items-center h-64">
                <p className="text-gray-500 text-lg">
                  No resources available for this category
                </p>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
