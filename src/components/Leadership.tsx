"use client";

import AnimatedSection from "./AnimatedSection";
import StaggeredAnimatedSection from "./StaggeredAnimatedSection";
import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

function Leadership() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <AnimatedSection delay={0.4}>
      <div className="text-center my-10 rounded-xl">
        <StaggeredAnimatedSection
          className="flex flex-col items-center"
          staggerDelay={0.2}
        >
          <p className="md:text-xl mb-2">Know More About Us</p>
          <h2 className="text-2xl md:text-4xl">Leadership Video</h2>
        </StaggeredAnimatedSection>

        <div className="mt-4 md:mt-10 w-full lg:px-30">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            {!isPlaying ? (
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                {/* ✅ FIXED: Not using `fill`, using width + height */}
                <Image
                  src="/images/leadership-thumbnail.png"
                  alt="Leadership Video Thumbnail"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover object-center transition-transform duration-300"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-opacity-40 z-2">
                  <div className="bg-white/30 p-4 rounded-full cursor-pointer hover:scale-110 transition-all duration-300 group">
                    <Play className="w-10 h-10 text-white fill-white group-hover:text-[#0053e2] group-hover:fill-[#0053e2]" />
                  </div>
                </div>
              </div>
            ) : (
              <video
                className="absolute top-0 left-0 w-full h-full rounded-xl z-1"
                src="https://wvcdn.blr1.cdn.digitaloceanspaces.com/Other%20Videos/vriddhi_website_announcement_v4_(hindi_cc).mp4"
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Leadership;
