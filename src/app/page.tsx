"use client";

import Navbar from "@/components/Navbar";
import BannerSlider from "@/components/BannerSlider";
import SuccessStories from "@/components/SuccessStories";
import MSMEGrowth from "@/components/MSMEGrowth";
import ProgramBenefits from "@/components/ProgramBenefits";
// import ImpactReach from "@/components/ImpactReach";
// import MSMEGraduates from "@/components/MSMEGraduates";
import Footer from "@/components/Footer";
import Leadership from "@/components/Leadership";
import { benefitsData, slides } from "@/data/data";
// import InfrastructureDelivery from "@/components/InfrastructureDelivery";
import ProgramOpportunitySection from "@/components/Programoffer";
import HeroBottomSection from "@/components/HeroBottomSection";
import GrowthJourney from "@/components/GrowthJourney";
import Seo from "@/components/misc/Seo";
import TestimonialSlider from "@/components/TestimonialSlider";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Seo
        title="Learning program for MSME entrepreneurs"
        description="Walmart Vriddhi initiative is designed to support MSMEs in modernising, expanding, and reaching their domestic ambitions."
        url="https://www.walmartvriddhi.org/"
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

      <main className="min-h-screen bg-white">
        <div className="absolute top-0 h-0 w-full" aria-hidden="true" />
        <Navbar />
        <div className="mx-auto my-[35px] max-w-[1500px] px-4 md:px-15 pt-14">
          <AnimatedSection>
            <BannerSlider slides={slides} />
          </AnimatedSection>
          <AnimatedSection>
            <SuccessStories />
          </AnimatedSection>
          <MSMEGrowth />
          <Leadership />
          <ProgramOpportunitySection />
          <ProgramBenefits benefits={benefitsData.benefits} />
          {/* <ImpactReach />
          <MSMEGraduates />
          <InfrastructureDelivery /> */}
          <GrowthJourney />
          <TestimonialSlider />
          <HeroBottomSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
