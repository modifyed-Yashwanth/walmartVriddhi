import Footer from "@/components/Footer";
import Seo from "@/components/misc/Seo";
import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/types/types";
import React from "react";

function layout({ children }: ChildrenProps) {
  const url = 'https://www.walmartvriddhi.org/success-stories/';
  return (
    <>
    <Seo
        title="Business Owner Training, Business Owner Training Programs, Sell Products Online in India"
        description="The MSME spotlight and industry connect series is a collection of webinars that define Walmart Vriddhi’s MSME business training programs Learn more about these webinars here"
        url={url}
        image="/images/success-stories-hero.jpg"
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
