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
        title="About us - Walmart Vriddhi"
        description="About Walmart Vriddhi Walmart and Flipkart have made a long-term commitment to transform India’s MSME ecosystem by empowering 50,000 MSMEs. We strive to play a catalytic role by supporting small businesses with growth opportunities to reach greater heights and new markets. Walmart Vriddhi is a supplier development program tailored to help MSMEs modernize"
        url={url}
        image="/images/about-us.jpg"
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
