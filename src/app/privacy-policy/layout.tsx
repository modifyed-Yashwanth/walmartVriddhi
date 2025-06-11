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
        title="Privacy Policy - Walmart Vriddhi"
        description="Trust Walmart Inc. to protect your privacy. Our Privacy Policy outlines how we handle your personal information. Stay informed and secure"
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
