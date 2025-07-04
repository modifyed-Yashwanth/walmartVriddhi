import Footer from "@/components/Footer";
import Seo from "@/components/misc/Seo";
import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/types/types";
import React from "react";

function layout({ children }: ChildrenProps) {
  const url = 'https://www.walmartvriddhi.org/walmart-vriddhi-msme-summit-2024/';
  return (
    <>
    <Seo
        title="Walmart Vriddhi MSME Summit 2024: Unlocking Success with MSME Growth Program Benefits"
        description="Join us to discover unparalleled opportunities at the Walmart Vriddhi MSME Summit 2024. Unleash the potential of your business with insights from MSME growth program."
        url={url}
        image="/images/MSME-2024-banner.jpg"
        structuredData={{
          "@context": "https://schema.org/",
          "@type": "WebSite",
          name: "walmartvriddhi",
          url: "https://www.walmartvriddhi.org/",
          potentialAction: {
            "@type": "SearchAction",
            target: `${url}{search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <Navbar />
      <div className="mx-auto my-[35px] max-w-[1500px] px-4 md:px-15 pt-14">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default layout;
