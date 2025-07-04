import Footer from "@/components/Footer";
import Seo from "@/components/misc/Seo";
import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/types/types";
import React from "react";

function layout({ children }: ChildrenProps) {
  const url = "https://www.walmartvriddhi.org/contact-us/";
  return (
    <>
     <Seo
        title="Contact us - Walmart Vriddhi"
        description="Contact us to receive tailored support for MSMEs and learn more about the program"
        url={url}
        image="/images/Conatct-us-banner.jpg"
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
