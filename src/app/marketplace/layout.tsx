import Footer from "@/components/Footer";
import Seo from "@/components/misc/Seo";
import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/types/types";
import React from "react";

function layout({ children }: ChildrenProps) {
  const url = "https://www.walmartvriddhi.org/marketplace/";
  return (
    <>
    <Seo
        title="Strategic partnerships for MSMEs: Marketplace for online business growth"
        description="Optimise your online business and experience accelerated growth with Walmart Vriddhi’s seamless cross border marketplace integration"
        url={url}
        image="/images/Marketplace-Bannerv2.jpg"
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
