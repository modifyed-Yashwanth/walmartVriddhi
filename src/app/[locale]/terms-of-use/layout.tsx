import Footer from "@/components/Footer";
import Seo from "@/components/misc/Seo";
import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/types/types";
import React from "react";

function layout({ children }: ChildrenProps) {
  const url = "https://www.walmartvriddhi.org/about-us/";
  return (
    <>
     <Seo
        title="Terms of use - Walmart Vriddhi"
        description="Explore the rules and regulations, privacy policy, and terms of use for accessing walmartvriddhi. No physical or digital signatures are required for this electronic record."
        url={url}
        image="/images/Walmart-Vriddhi-logo.png"
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
      <div className="my-6 sm:my-8 md:my-[40px] pt-[60px]">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default layout;
